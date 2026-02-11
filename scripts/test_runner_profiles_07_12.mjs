
import fs from 'fs';
import { SentinelEngine } from './SentinelEngine.mjs';

// DATA IMPORTS
import { HCR_DATA } from '../src/data/hcr_questions.js';

// Get Data for Roles
const BARMAN_DATA = HCR_DATA['BARMAN'];
const SERVEUR_DATA = HCR_DATA['SERVEUR'];
const MANAGER_DATA = HCR_DATA['MANAGER_PRINCIPAL'];
const ADJOINT_DATA = HCR_DATA['MANAGER'];
const CHEF_RANG_DATA = HCR_DATA['CHEF_RANG'];

const engine = new SentinelEngine();

// STRATEGY MAP FOR THE NEW 6 PROFILES
const PROFILES = [
    {
        id: "PROFIL_07_SERVEUR_MERCENAIRE",
        role: "serveur", // Maps to 'SERVEUR'
        roleData: SERVEUR_DATA,
        desc: "Pro, Efficace, Argent > Corvée. Confort Perso.",
        strategy: {
            priorities: ["ARGENT", "VITESSE", "PARTIR", "FINI", "PAYÉ", "CONTRAT", "HEURE", "EFFICACE", "MOI", "RENTABLE"],
            avoid: ["AIDER", "RESTER", "BÉNÉVOLE", "ÉQUIPE", "GRATUIT", "CORVÉE", "NON-STOP"],
            profileTarget: ["MERCENAIRE", "PRO", "RAPIDE", "PIRATE"] // Added PIRATE as target
        }
    },
    {
        id: "PROFIL_08_BARMAN_DIVA",
        role: "barman", // Maps to 'BARMAN'
        roleData: BARMAN_DATA,
        desc: "Artiste, Créatif, Arrogant. Hygiène < Création.",
        strategy: {
            priorities: ["CRÉATION", "ART", "COCKTAIL", "STYLE", "UNIQUE", "MOI", "GENIE", "ARROGANT", "BEAU", "SURPRENDRE"],
            avoid: ["NETTOYER", "RÈGLE", "STANDARD", "HYGIÈNE", "BANAL", "ORDINAIRE", "MENU"],
            profileTarget: ["SHOWMAN", "DIVA", "ARTISTE"]
        }
    },
    {
        id: "PROFIL_09_CHEF_RANG_HARMONIE",
        role: "chef-de-rang",
        roleData: CHEF_RANG_DATA,
        desc: "Peur du conflit, s'excuse, veut plaire.",
        strategy: {
            priorities: ["PARDON", "DÉSOLÉ", "EXCUSE", "ARRANGER", "GENTIL", "CALME", "OUI", "D'ACCORD", "PLAIRE", "CLIENT", "AIDER"],
            avoid: ["NON", "STOP", "FERME", "DIRECT", "REFUSER", "CONFLIT", "TENSION", "NON"],
            profileTarget: ["CONCILIANT", "PASSIF", "DIPLOMATE", "CONFIDENT"]
        }
    },
    {
        id: "PROFIL_10_ADJOINT_RIGIDE",
        role: "manager-adj",
        roleData: ADJOINT_DATA,
        desc: "Rigueur froide, Ex-Fast Food, Humain = Chiffre.",
        strategy: {
            priorities: ["PROCÉDURE", "RÈGLE", "STANDARD", "CHIFFRE", "HIÉRARCHIE", "CHEF", "ORDRE", "EXÉCUTER", "PROCESS", "STRICT"],
            avoid: ["ADAPTER", "DISCUTER", "COMPRENDRE", "EXCEPTION", "SOUPLE", "HUMAIN", "SENTIMENT"],
            profileTarget: ["BUREAUCRATE", "OBÉISSANT", "RIGOUREUX", "MÉTRONOME"]
        }
    },
    {
        id: "PROFIL_11_MANAGER_COPAIN",
        role: "manager",
        roleData: MANAGER_DATA,
        desc: "Veut être ami, Tros gentil, Bonheur > Prod.",
        strategy: {
            priorities: ["AMI", "ÉQUIPE", "AMBIANCE", "SYMPA", "DISCUTER", "ENSEMBLE", "HEUREUX", "COOL", "RIRE", "PARTAGER"],
            avoid: ["SANCTION", "ORDRE", "SÉVÈRE", "RENTABILITÉ", "CADRE", "NON", "VIRER", "PUNIR"],
            profileTarget: ["DIPLOMATE", "PASSIF", "HUMAIN", "CONFIDENT"]
        }
    },
    {
        id: "PROFIL_12_SERVEUR_DEBUTANT",
        role: "serveur",
        roleData: SERVEUR_DATA,
        desc: "Jamais fait, Peur bêtises, Honnête, Veut apprendre.",
        strategy: {
            priorities: ["APPRENDRE", "EFFORT", "HONNÊTE", "VÉRITÉ", "ESSAYER", "AIDER", "ÉCOUTER", "REGARDER", "DEMANDER", "VOLONTÉ"],
            avoid: ["EXPERT", "FACILE", "MENTIR", "CACHER", "INVENTER", "SAVOIR", "CONNAÎTRE"],
            profileTarget: ["DÉBUTANT", "VOLONTAIRE", "FRANC", "CONFIDENT"]
        }
    }
];

// SIMULATION ENGINE
function simulateAnswer(question, strategy) {
    if (!question.options || question.options.length === 0) return null;

    // 1. Try to find EXACT Profile Match (if defined in data)
    // NOTE: Data files might not use exact profile strings we guessed, so text matching is key.

    // 2. Score mapping based on Priorities/Avoids
    let bestOption = null;
    let bestScore = -999;

    question.options.forEach(opt => {
        let currentScore = 0;
        const text = (opt.label || opt.text || "").toUpperCase();
        const profile = (opt.profile || "").toUpperCase();

        // Check Strategy Keywords
        strategy.priorities.forEach(word => {
            if (text.includes(word)) currentScore += 10;
        });

        strategy.avoid.forEach(word => {
            if (text.includes(word)) currentScore -= 20; // Penalize heavily
        });

        // Check Profile Targets
        strategy.profileTarget.forEach(target => {
            if (profile.includes(target)) currentScore += 50; // Huge bonus for correct profile tag
        });

        // Random jitter to break ties
        currentScore += Math.random();

        if (currentScore > bestScore) {
            bestScore = currentScore;
            bestOption = opt;
        }
    });

    return bestOption ? bestOption.value : question.options[0].value;
}

// MAIN RUNNER
async function runTests() {
    console.log("=== STARTING AUTOMATED SENTINEL TESTS (PROFILES 07-12) ===");
    const results = {};

    for (const profile of PROFILES) {
        console.log(`\n>>> TESTING PROFILE: ${profile.id} (${profile.role})`);
        console.log(`    Goal: ${profile.desc}`);

        const scores = {};
        const questions = [];

        // Flatten questions (handle different data structures)
        // Some data exports have .items, others are arrays directly or objects with keys
        let rawQuestions = [];

        if (Array.isArray(profile.roleData)) {
            // E.g. Director data is array of sections
            if (profile.roleData[0] && profile.roleData[0].items) {
                profile.roleData.forEach(s => {
                    if (s.items) rawQuestions.push(...s.items);
                });
            } else {
                rawQuestions = profile.roleData;
            }
        } else if (profile.roleData && profile.roleData.items) {
            rawQuestions = profile.roleData.items;
        } else {
            // Fallback for object with keys (Barman/Serveur potentially)
            Object.values(profile.roleData).forEach(group => {
                if (Array.isArray(group)) rawQuestions.push(...group);
            });
        }

        // Limit to reasonable number for simulation if huge
        rawQuestions = rawQuestions.slice(0, 100);
        console.log(`    Loaded ${rawQuestions.length} questions.`);

        rawQuestions.forEach(q => {
            questions.push(q);
            const ans = simulateAnswer(q, profile.strategy);
            if (ans !== null) scores[q.id] = ans;
        });

        console.log(`    Simulated ${Object.keys(scores).length} answers.`);

        // EVALUATE
        // Assuming roleId is standard uppercase for Engine
        const roleId = profile.role === 'manager-adj' ? 'MANAGER' : // Map logic mismatch if needed
            profile.role === 'chef-de-rang' ? 'CHEF_RANG' :
                profile.role.toUpperCase();

        // Fix role mapping for Engine config keys
        const engineRole = roleId === 'MANAGER-ADJ' ? 'MANAGER' : roleId;

        const result = engine.evaluateCandidate(engineRole, questions, scores);

        console.log(`    VERDICT: ${result.verdict}`);
        console.log(`    SCORE:   ${result.globalScore}/100`);
        console.log(`    PROFILE: ${result.dominantProfile}/${result.secondaryProfile}`);
        console.log(`    FLAGS:   ${result.flags.length > 0 ? result.flags.join(', ') : 'None'}`);

        results[profile.id] = {
            role: profile.role,
            verdict: result.verdict,
            score: result.globalScore,
            profileType: `${result.dominantProfile}/${result.secondaryProfile}`,
            dimensions: result.dimensions,
            flags: result.flags,
            synthesis: result.synthesisText
        };
    }

    fs.writeFileSync('test_results_summary_07_12.json', JSON.stringify(results, null, 2));
    console.log("\n\nAll tests completed. Summary saved to test_results_summary_07_12.json");
}

runTests();
