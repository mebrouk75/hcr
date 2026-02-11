
import { DIRECTOR_SENTINEL_DATA } from '../src/data/director_sentinel_data.js';
import { MANAGER_PRINCIPAL_SENTINEL_DATA } from '../src/data/manager_principal_sentinel_data.js';
import { MANAGER_ADJOINT_DATA } from '../src/data/manager_adjoint_data.js';
import { CHEF_RANG_DATA } from '../src/data/chef_de_rang_data.js';
import { FULL_SERVEUR } from '../src/data/serveur_data_v2.js';
import { HCR_DATA } from '../src/data/hcr_questions.js';
import { SentinelEngine } from './SentinelEngine.mjs';
import fs from 'fs';

const engine = new SentinelEngine();

// ==========================================
// PROFILE DEFINITIONS & STRATEGIES
// ==========================================

const PROFILES = {
    "ROI_SOLEIL": {
        roleId: "DIRECTEUR",
        roleName: "Directeur",
        description: "Narcissique, autoritaire. Valorise pouvoir, ignore équipe.",
        data: HCR_DATA.DIRECTEUR,
        // Logic: Prioritize TYRAN, AUTORITAIRE, VISIONNAIRE, OPPORTUNISTE
        // Avoid: SAGE, HUMBLE, DIPLOMATE
        strategy: (options) => {
            const priorities = ["TYRAN", "AUTORITAIRE", "VISIONNAIRE", "OPPORTUNISTE", "AMBITIEUX"];
            const avoid = ["SAGE", "HUMBLE", "DIPLOMATE", "SENSIBLE", "PROTECTEUR"];

            // 1. Priority Match
            for (const p of priorities) {
                const match = options.find(o => (o.profile || o.trait || "").toUpperCase() === p);
                if (match) return match.value;
            }
            // 2. Avoid Match (Pick anything not in avoid)
            const acceptable = options.filter(o => !avoid.includes((o.profile || o.trait || "").toUpperCase()));
            if (acceptable.length > 0) return acceptable[0].value;

            return options[0].value;
        }
    },
    "LETEINT": {
        roleId: "SERVEUR", // L'Éteint is usually Serveur
        roleName: "Serveur",
        description: "Burn-out, cynique, effort minimum.",
        data: HCR_DATA.SERVEUR,
        // Logic: Prioritize SENSIBLE (negative), SUIVEUR, DISCRET (hiding), OBÉISSANT (passive)
        // Avoid: RÉSILIENT, MENEUR, CHALEUREUX, ENGAGÉ
        strategy: (options) => {
            const priorities = ["SENSIBLE", "SUIVEUR", "DISCRET", "OBÉISSANT", "CONCILIANT"];
            const avoid = ["RÉSILIENT", "MENEUR", "CHALEUREUX", "CRÉATIF", "COMMERCIAL"];

            for (const p of priorities) {
                const match = options.find(o => (o.profile || o.trait || "").toUpperCase() === p);
                if (match) return match.value;
            }
            const acceptable = options.filter(o => !avoid.includes((o.profile || o.trait || "").toUpperCase()));
            if (acceptable.length > 0) return acceptable[0].value;
            return options[0].value;
        }
    },
    "LE_SNIPER": {
        roleId: "CHEF_RANG",
        roleName: "Chef de Rang",
        description: "Compétent mais toxique. Clans.",
        data: HCR_DATA.CHEF_RANG,
        // Logic: Prioritize PIRATE (Toxic/Self), MÉTRONOME (Technical/Rigid)
        // Avoid: CONFIDENT (Empathy), SHOWMAN (Distraction)
        strategy: (options) => {
            const priorities = ["PIRATE", "MÉTRONOME"];
            const avoid = ["CONFIDENT", "SHOWMAN"];

            for (const p of priorities) {
                const match = options.find(o => (o.profile || o.trait || "").toUpperCase() === p);
                if (match) return match.value;
            }
            const acceptable = options.filter(o => !avoid.includes((o.profile || o.trait || "").toUpperCase()));
            if (acceptable.length > 0) return acceptable[0].value;
            return options[0].value;
        }
    },
    "LE_FANTOME": {
        roleId: "BARMAN",
        roleName: "Barman",
        description: "Esquive, confort personnel.",
        data: HCR_DATA.BARMAN,
        // Logic: Prioritize PIRATE (Self-interest/Lazy), SHOWMAN (Ego)
        // Avoid: MÉTRONOME (Work), CONFIDENT (Caring)
        strategy: (options) => {
            const priorities = ["PIRATE", "SHOWMAN"];
            const avoid = ["MÉTRONOME", "CONFIDENT"];

            for (const p of priorities) {
                const match = options.find(o => (o.profile || o.trait || "").toUpperCase() === p);
                if (match) return match.value;
            }
            const acceptable = options.filter(o => !avoid.includes((o.profile || o.trait || "").toUpperCase()));
            if (acceptable.length > 0) return acceptable[0].value;
            return options[0].value;
        }
    },
    "LE_RIGIDE": {
        roleId: "MANAGER", // Manager Adjoint maps to MANAGER in dataset usually, let's verify. HCR_DATA.MANAGER is FULL_MANAGER which is imported from manager_adjoint.
        roleName: "Manager Adjoint",
        description: "Machine à procédures, aucune souplesse.",
        data: HCR_DATA.MANAGER,
        // Logic: Prioritize OBÉISSANT, AUTORITAIRE
        // Avoid: FLEXIBLE, DIPLOMATE, PROTECTEUR
        strategy: (options) => {
            const priorities = ["OBÉISSANT", "AUTORITAIRE", "BUREAUCRATE"];
            const avoid = ["FLEXIBLE", "DIPLOMATE", "PROTECTEUR", "ADAPTABLE", "HUMBLE", "SENSIBLE"];

            for (const p of priorities) {
                const match = options.find(o => (o.profile || o.trait || "").toUpperCase() === p);
                if (match) return match.value;
            }
            const acceptable = options.filter(o => !avoid.includes((o.profile || o.trait || "").toUpperCase()));
            if (acceptable.length > 0) return acceptable[0].value;
            return options[0].value;
        }
    },
    "MANAGER_VIEUX_JEU": {
        roleId: "MANAGER_PRINCIPAL",
        roleName: "Manager",
        description: "Chiffres, déshumanisé, bon gestionnaire, mauvais leader.",
        data: HCR_DATA.MANAGER_PRINCIPAL,
        // Logic: Prioritize RIGOUREUX, PRAGMATIQUE, AUTORITAIRE, EXIGEANT
        // Avoid: SENSIBLE, PROTECTEUR, EMPATHIQUE, DIPLOMATE, HUMBLE
        strategy: (options) => {
            const priorities = ["RIGOUREUX", "PRAGMATIQUE", "AUTORITAIRE", "EXIGEANT", "STRATEGIQUE"];
            const avoid = ["SENSIBLE", "PROTECTEUR", "EMPATHIQUE", "DIPLOMATE", "HUMBLE", "PÉDAGOGUE", "FLEXIBLE"];

            for (const p of priorities) {
                // Check both 'trait' and 'traits' array if present
                const match = options.find(o => {
                    const t = (o.trait || "").toUpperCase();
                    if (priorities.includes(t)) return true;
                    if (o.traits && o.traits.some(tr => priorities.includes(tr.toUpperCase()))) return true;
                    return false;
                });
                if (match) return match.value;
            }

            const acceptable = options.filter(o => {
                const t = (o.trait || "").toUpperCase();
                if (avoid.includes(t)) return false;
                if (o.traits && o.traits.some(tr => avoid.includes(tr.toUpperCase()))) return false;
                return true;
            });

            if (acceptable.length > 0) return acceptable[0].value;
            return options[0].value;
        }
    }
};

// ==========================================
// RUNNER LOGIC
// ==========================================

async function runAllTests() {
    console.log("==========================================");
    console.log("   AUTOMATED RISK PROFILE TESTING v1.0    ");
    console.log("==========================================");

    const results = {};

    for (const [key, profile] of Object.entries(PROFILES)) {
        console.log(`\n>>> TESTING PROFILE: ${key} (${profile.roleName})`);
        console.log(`    Goal: ${profile.description}`);

        // Flatten Questions
        let questions = [];
        if (Array.isArray(profile.data)) {
            questions = profile.data.flatMap(section => {
                if (section.items) return section.items;
                if (section.id && !section.items) return [section]; // It's a question itself
                return [];
            });
        }

        // Handle weird structure where data might just be the array of questions
        if (questions.length === 0 && Array.isArray(profile.data) && profile.data[0].id) {
            questions = profile.data;
        }

        console.log(`    Loaded ${questions.length} questions.`);

        const scores = {};
        let answeredCount = 0;

        questions.forEach(q => {
            if (q.options) {
                const answer = profile.strategy(q.options);
                if (answer !== undefined) {
                    scores[q.id] = answer;
                    answeredCount++;
                }
            }
        });

        console.log(`    Simulated ${answeredCount} answers.`);

        // Evaluate
        try {
            const result = engine.evaluateCandidate(profile.roleId, questions, scores);

            console.log(`    VERDICT: ${result.verdict}`);
            console.log(`    SCORE:   ${result.globalScore}/100`);
            console.log(`    PROFILE: ${result.dominantProfile}/${result.secondaryProfile}`);
            console.log(`    FLAGS:   ${result.flags.length > 0 ? result.flags.join(", ") : "None"}`);

            results[key] = {
                role: profile.roleName,
                verdict: result.verdict,
                score: result.globalScore,
                profileType: `${result.dominantProfile}/${result.secondaryProfile}`,
                dimensions: result.dimensions,
                flags: result.flags,
                synthesis: result.synthesisText
            };

        } catch (err) {
            console.error(`    ERROR: Evaluation failed for ${key}`, err);
        }
    }

    // Save Summary
    fs.writeFileSync('test_results_summary.json', JSON.stringify(results, null, 2));
    console.log("\n\nAll tests completed. Summary saved to test_results_summary.json");
}

runAllTests();
