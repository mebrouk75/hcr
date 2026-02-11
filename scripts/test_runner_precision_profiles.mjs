import fs from 'fs';
import { SentinelEngine } from './SentinelEngine.mjs';

// DATA IMPORTS (Using HCR_DATA for all)
import { HCR_DATA } from '../src/data/hcr_questions.js';

const BARMAN_DATA = HCR_DATA['BARMAN'];
const SERVEUR_DATA = HCR_DATA['SERVEUR'];
const MANAGER_DATA = HCR_DATA['MANAGER_PRINCIPAL'];
const ADJOINT_DATA = HCR_DATA['MANAGER'];
const CHEF_RANG_DATA = HCR_DATA['CHEF_RANG'];
const DIRECTEUR_DATA = HCR_DATA['DIRECTEUR'];

const engine = new SentinelEngine();

console.log("MANAGER_DATA type:", typeof MANAGER_DATA);
if (Array.isArray(MANAGER_DATA)) console.log("MANAGER_DATA[0] keys:", Object.keys(MANAGER_DATA[0]));
else console.log("MANAGER_DATA keys:", MANAGER_DATA ? Object.keys(MANAGER_DATA) : "NULL");

console.log("ADJOINT_DATA type:", typeof ADJOINT_DATA);
if (Array.isArray(ADJOINT_DATA)) console.log("ADJOINT_DATA[0] keys:", Object.keys(ADJOINT_DATA[0]));
else console.log("ADJOINT_DATA keys:", ADJOINT_DATA ? Object.keys(ADJOINT_DATA) : "NULL");


// STRATEGY MAP FOR THE 8 PRECISION PROFILES
const PROFILES = [
    {
        id: "PROFIL_13_DIRECTEUR_EGO",
        role: "directeur",
        roleData: DIRECTEUR_DATA,
        desc: "Empathie parfaite équipe (fausse), Ego > Crise/Pouvoir. Sincérité chute ?",
        strategy: {
            // Empathie parfaite SUR L'ÉQUIPE (pour paraître bon chef)
            priorities: ["ÉCOUTE", "COMPRENDRE", "SOUTENIR", "DÉVELOPPER", "HUMAIN", "ACCUEIL", "BIENVEILLANCE"],
            // MAIS Ego/Pouvoir sur le reste
            forceAnswers: {
                "DIR_CRISE": "MOI", // Sauve sa peau ou décide seul
                "DIR_POUVOIR": "AUTORITÉ",
                "DIR_EGO": "MÉRITE"
            },
            profileTarget: ["POLITIQUE", "SEDUCTEUR", "MANIPULATEUR"], // Cible "Fake Empathy"
            avoid: ["SACRIFIER", "SERVIR", "HUMBLE", "TRANSPARENT"]
        }
    },
    {
        id: "PROFIL_14_MANAGER_REDRESSEUR",
        role: "manager",
        roleData: MANAGER_DATA,
        desc: "Juste, Structure, Profit > Cadeaux. Opérationnel vs Rétention ?",
        strategy: {
            priorities: ["PROFIT", "RENTABLE", "STRUCTURE", "RÈGLE", "ORGANISÉ", "JUSTE", "PERFORMANCE", "CHIFFRE", "EFFICACE", "CARRÉ"],
            avoid: ["CADEAU", "OFFRIR", "LAXISTE", "COPAIN", "SENTIMENT", "EXCEPTION"],
            profileTarget: ["GESTIONNAIRE", "RIGOUREUX", "EXIGEANT"]
        }
    },
    {
        id: "PROFIL_15_ADJOINT_TECHNICIEN_FUITE",
        role: "manager-adj",
        roleData: ADJOINT_DATA,
        desc: "Technicien top, Refuse Responsabilité/Décision. Leadership bas ?",
        strategy: {
            priorities: ["TECHNIQUE", "TERRAIN", "FAIRE", "EXÉCUTER", "AIDER", "OPERATIONNEL", "CONCRET", "AVEC_EUX"],
            avoid: ["DÉCIDER", "TRANCHER", "DIRIGER", "SANCTIONNER", "VISION", "STRATÉGIE", "RESPONSABLE", "SEUL"],
            profileTarget: ["EXECUTANT", "TECHNICIEN", "SUPPORT"]
        }
    },
    {
        id: "PROFIL_16_CHEF_RANG_CYNIQUE",
        role: "chef-de-rang",
        roleData: CHEF_RANG_DATA,
        desc: "Expert, Zero patience client/jeunes. Efficace mais Relationnel dégradé.",
        strategy: {
            priorities: ["VITE", "EFFICACE", "CARRÉ", "PARFAIT", "EXPERT", "MÉTRONOME", "SEUL", "EXPÉRIENCE"],
            avoid: ["PATIENCE", "EXPLIQUER", "SOURIRE", "ÉCOUTER", "FORME", "JEUNE", "APPRENTI", "CLIENT_ROI"],
            profileTarget: ["EXPERT", "AIGRI", "SOLITAIRE"]
        }
    },
    {
        id: "PROFIL_17_BARMAN_ZAPPEUR",
        role: "barman",
        roleData: BARMAN_DATA,
        desc: "Change tout les 3 mois. Séducteur, 0 long terme.",
        strategy: {
            priorities: ["CRÉATIF", "FUN", "NOUVEAU", "CHANGE", "BOUGER", "VOIR_AILLEURS", "INSTANT", "PLAISIR", "CHARME", "SÉDUIRE"],
            avoid: ["FIDÈLE", "CONSTRUIRE", "AVENIR", "RESTÉ", "ANCRÉ", "STABLE", "CARRIÈRE", "CDI"],
            profileTarget: ["MERCENAIRE", "PAPILLON", "CHARMEUR"]
        }
    },
    {
        id: "PROFIL_18_SERVEUR_ETE",
        role: "serveur",
        roleData: SERVEUR_DATA,
        desc: "Intelligent, Comprend vite, Job d'été. Engagement bas.",
        strategy: {
            priorities: ["VITE", "COMPRIS", "LOGIQUE", "FACILE", "ADAPTER", "SMART", "ARGENT", "COURT_TERME", "TEMP"],
            avoid: ["PASSION", "MÉTIER", "VOCATION", "CARRIÈRE", "S'INVESTIR", "SACRIFIER", "DURER"],
            profileTarget: ["OPPORTUNISTE", "PASSAGER", "EFFICACE"]
        }
    },
    {
        id: "PROFIL_19_SERVEUR_SYMPA_OUBLI",
        role: "serveur",
        roleData: SERVEUR_DATA,
        desc: "Adoré clients, Oublie factures, Traîne cuisine. Empathie HAUTE, Rigueur BASSE.",
        strategy: {
            priorities: ["SYMPA", "DISCUTER", "RIR", "CLIENT", "AMIS", "CUISINE", "PAUSE", "COOL", "DÉTENDU"],
            avoid: ["TICKET", "CAISSE", "NOTER", "RÈGLE", "VÉRIFIER", "STRESS", "PRESSION", "CHIFFRE"],
            profileTarget: ["CONFIDENT", "SOCIAL", "TOURISTE"]
        }
    },
    {
        id: "PROFIL_20_MANAGER_MOYEN",
        role: "manager",
        roleData: MANAGER_DATA,
        desc: "Réponse moyenne partout, 0 risque. Pas de personnalité.",
        strategy: {
            // Cherche toujours la réponse "tiède" ou "consensus mou"
            priorities: ["NORMAL", "STANDARD", "COMMUN", "CLASSIQUE", "MOYEN", "PEUT-ÊTRE", "DÉPEND", "SÛR"],
            avoid: ["JAMAIS", "TOUJOURS", "FORT", "RADICAL", "UNIQUE", "RISQUE", "INNOVER", "DIRECT"],
            profileTarget: ["ADMINISTRATIF", "INSIPIDE", "SUIVEUR"]
        }
    }
];


// --- SIMULATION LOGIC ---
const results = {};

PROFILES.forEach(profile => {
    console.log(`\n>>> TESTING PROFILE: ${profile.id} (${profile.role})`);
    console.log(`    Goal: ${profile.desc}`);

    // 1. Filter Sentinel Questions
    // SentinelEngine does not have a getQuestions method. We must filter manually.
    let questions = [];
    if (Array.isArray(profile.roleData) && profile.roleData.length > 0) {
        // Check if items are Sections or Questions
        const first = profile.roleData[0];
        if (first.items) {
            // Nested Structure (Sections)
            profile.roleData.forEach(section => {
                if (section.items) {
                    questions = questions.concat(section.items);
                }
            });
        } else {
            // Flat Structure (Questions)
            questions = profile.roleData;
        }
    }
    console.log(`    Loaded ${questions.length} questions.`);

    // 2. Simulate Answers
    const answers = {};
    questions.forEach(q => {
        // Special "Force Answers" for specific IDs (Directeur Ego)
        let forced = false;
        if (profile.strategy.forceAnswers) {
            // Logic to find questions matching category/ID
            // Simply checking if ID contains the key for now, or use exact mapping if possible
            // For simplify, we just use text matching on options
        }

        // Standard Scoring
        let bestOption = null;
        let maxScore = -Infinity;

        if (Array.isArray(q.options)) {
            q.options.forEach(opt => {
                let score = 0;
                const text = opt.label || opt.text || "";
                const textUpper = text.toUpperCase();

                // PRIORITY KEYWORDS (+2)
                profile.strategy.priorities.forEach(word => {
                    if (textUpper.includes(word)) score += 2;
                });

                // AVOID KEYWORDS (-5)
                profile.strategy.avoid.forEach(word => {
                    if (textUpper.includes(word)) score -= 5;
                });

                // PROFILE TARGET (+3) - Using 'profile' or 'value' mapping if available
                // In HCR_DATA, options often map to profiles like 'PIRATE', 'MÉTRONOME' etc.
                if (opt.profile && profile.strategy.profileTarget.includes(opt.profile)) {
                    score += 3;
                }

                // Fallback: Random noise to break ties
                score += Math.random() * 0.5;

                if (score > maxScore) {
                    maxScore = score;
                    bestOption = opt;
                }
            });
        }

        if (bestOption) {
            answers[q.id] = bestOption.value;
        }
    });

    console.log(`    Simulated ${Object.keys(answers).length} answers.`);

    // 3. Evaluate
    // Mock empty scores for MBTI as we are focusing on Sentinel
    const result = engine.evaluateCandidate(profile.role, questions, answers, {});

    console.log(`    VERDICT: ${result.verdict}`);
    console.log(`    SCORE:   ${result.score}/100`);
    console.log(`    PROFILE: ${result.profile ? result.profile.label : 'N/A'}`);
    console.log(`    FLAGS:   ${result.flags ? result.flags.join(', ') : 'None'}`);

    results[profile.id] = result;
});

// Save Summary
fs.writeFileSync('test_results_precision_profiles.json', JSON.stringify(results, null, 2));
console.log("\nAll tests completed. Summary saved to test_results_precision_profiles.json");
