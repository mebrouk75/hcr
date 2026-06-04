import { SentinelEngine } from './SentinelEngine.mjs'; // Use updated Engine from file
import { HCR_DATA } from '../src/data/hcr_questions.js';
import fs from 'fs';

// --- DATA MAPPING ---
// Need to handle missing keys for Manager/Adjoint (flat arrays?)
// Based on previous findings:
const DIRECTEUR_DATA = HCR_DATA['DIRECTEUR'];
const BARMAN_DATA = HCR_DATA['BARMAN'];
// HCR_DATA keys might be FULL_... need to check export names again if errors occur
// But test_runner_precision used HCR_DATA['SERVEUR'] which worked.
const SERVEUR_DATA = HCR_DATA['SERVEUR'];
const CHEF_RANG_DATA = HCR_DATA['CHEF_RANG'];

// For Manager/Adjoint, user "Adjoint" often maps to Manager Adjoint data or just generic Manager data?
// User list has "Manager" and "Adjoint".
// I will use MANAGER_PRINCIPAL for 'Manager' and MANAGER for 'Adjoint' logic if available, 
// or map them to the same data but different strategies.
// HCR_DATA['MANAGER_PRINCIPAL'] and HCR_DATA['MANAGER'] (Adjoint?)
const MANAGER_DATA = HCR_DATA['MANAGER_PRINCIPAL'];
const ADJOINT_DATA = HCR_DATA['MANAGER'];

// Map string role to data
const SCENARIO_DATA = {
    'Directeur': DIRECTEUR_DATA,
    'Manager': MANAGER_DATA,
    'Adjoint': ADJOINT_DATA,
    'Chef de Rang': CHEF_RANG_DATA,
    'Barman': BARMAN_DATA,
    'Serveur': SERVEUR_DATA
};

const sentinelRoleMap = {
    'Directeur': 'DIRECTEUR',
    'Manager': 'MANAGER_PRINCIPAL',
    'Adjoint': 'MANAGER', // Adjoint maps to generic Manager logic? or specific?
    'Chef de Rang': 'CHEF_RANG',
    'Barman': 'BARMAN',
    'Serveur': 'SERVEUR'
};

// --- USER PROFILES (20) ---
const PROFILES = [
    {
        id: "01_DIRECTEUR_INNOVATEUR",
        role: "Directeur",
        desc: "Stratégie long terme, Innovation, Intuition humaine. Détails/Admin freinent créativité.",
        strategy: {
            priorities: ["STRATÉGIE", "VISION", "FUTUR", "INNOVATION", "CRÉATIVITÉ", "INTUITION", "HUMAIN", "DÉLÉGUER"],
            avoid: ["DÉTAIL", "ADMIN", "PROCÉDURE", "MICROMANAGEMENT", "RÈGLE", "PAPIER", "CONTROLE"],
            profileTarget: ["VISIONNAIRE", "SAGE"]
        }
    },
    {
        id: "02_DIRECTEUR_INFLUENCE",
        role: "Directeur",
        desc: "Maîtrise codes comm/empathie. Dit ce que les gens veulent entendre pour influence/autorité.",
        strategy: {
            priorities: ["INFLUENCE", "COMMUNICATION", "RÉSEAU", "IMAGE", "DISCOURS", "SÉDUIRE", "CONVAINCRE", "POLITIQUE", "ACCORD"],
            avoid: ["CONFLIT", "BRUTAL", "DIRECT", "VÉRITÉ", "ISOLEMENT"],
            profileTarget: ["RADAR", "SAGE"] // Radar = Calculator?
        }
    },
    {
        id: "03_MANAGER_TYRAN",
        role: "Manager",
        desc: "Résultats seule priorité. Exigeant, 0 erreur, pression constante comme moteur.",
        strategy: {
            priorities: ["RÉSULTAT", "CHIFFRE", "PERFORMANCE", "OBJECTIF", "PRESSION", "EXIGENCE", "PARFAIT", "GAGNER", "RENTABLE"],
            avoid: ["ERREUR", "TOLÉRANCE", "PAUSE", "HUMAIN", "SENTIMENT", "FAIBLE", "ÉCOUTE"],
            profileTarget: ["TYRAN", "AUTORITAIRE"]
        }
    },
    {
        id: "04_MANAGER_FRAGILE",
        role: "Manager",
        desc: "Bien-être équipe, bon technicien. Perd moyens/assurance si conflit ou décision impopulaire.",
        strategy: {
            priorities: ["ÉQUIPE", "BIEN-ÊTRE", "AIDER", "SOUDER", "TECHNIQUE", "FAIRE", "GENTIL"],
            avoid: ["CONFLIT", "TRANCHER", "NON", "DÉCISION", "DUR", "SANCTION", "IMPOPULAIRE"],
            profileTarget: ["PASSIF", "CONFIDENT", "PROTECTEUR"]
        }
    },
    {
        id: "05_ADJOINT_IMPOSTEUR",
        role: "Adjoint",
        desc: "Pas maîtrise technique, sens politique. Cherche à plaire hiérarchie, paraît compétent.",
        strategy: {
            priorities: ["POLITIQUE", "RÉSEAU", "PARAÎTRE", "IMAGE", "CHEF", "HIERARCHIE", "VALIDER", "SURVIVRE"],
            avoid: ["TECHNIQUE", "FAIRE", "MAIN", "DÉTAIL", "ERREUR", "RISQUE"],
            profileTarget: ["RADAR", "OPPORTUNISTE"]
        }
    },
    {
        id: "06_MANAGER_BUREAUCRATE",
        role: "Manager",
        desc: "Garant règles. Prcédures à la lettre, jamais remise en question même si illogique.",
        strategy: {
            priorities: ["RÈGLE", "PROCÉDURE", "LOI", "STANDARD", "PROTOCOLE", "SÉCURITÉ", "ORDRE", "LIGNE"],
            avoid: ["RISQUE", "CHANGEMENT", "ADAPTATION", "FLEXIBLE", "EXCEPTION", "INITIATIVE"],
            profileTarget: ["BUREAUCRATE", "RIGOUREUX"]
        }
    },
    {
        id: "07_DIRECTEUR_MACCHIAVEL",
        role: "Directeur",
        desc: "Vision business claire. Repère faiblesses pour s'en servir. Crée clans pour contrôle.",
        strategy: {
            priorities: ["BUSINESS", "PROFIT", "CONTRÔLE", "POUVOIR", "DIVISER", "FAIBLESSE", "UTILISER", "GANER"],
            avoid: ["PARTAGE", "TRANSPARENCE", "CONFIANCE", "ÉGALITÉ", "NAÏF"],
            profileTarget: ["TYRAN", "RADAR"]
        }
    },
    {
        id: "08_ADJOINT_OMBRE",
        role: "Adjoint",
        desc: "Technicien hors pair, loyal. Refuse prendre lead/trancher. Reste ombre.",
        strategy: {
            priorities: ["LOYAL", "FIDÈLE", "TECHNIQUE", "EXPERT", "AIDER", "SERVIR", "SUIVRE"],
            avoid: ["LEAD", "TRANCHER", "DÉCIDER", "LUMIÈRE", "CHEF", "RESPONSABLE"],
            profileTarget: ["SUIVEUR", "OBÉISSANT", "TECHNIQUE"]
        }
    },
    {
        id: "09_CHEF_RANG_APPRENANT",
        role: "Chef de Rang",
        desc: "Nouveau, manque exp. Transparent sur lacunes, pose questions, volonté apprendre.",
        strategy: {
            priorities: ["APPRENDRE", "QUESTION", "AIDER", "SAVOIR", "PROGRESSER", "HUMBLE", "VÉRITÉ"],
            avoid: ["MENTIR", "CACHER", "FAIRE_SEMBLANT", "ARROGANT", "SAVOIR_TOUT"],
            profileTarget: ["DÉBUTANT", "HUMBLE", "ADAPTABLE"]
        }
    },
    {
        id: "10_CHEF_RANG_SOLITAIRE",
        role: "Chef de Rang",
        desc: "Expert, rapide, efficace. Mépris pour moins performants. Travaille seul.",
        strategy: {
            priorities: ["VITESSE", "EFFICACE", "MOI", "SEUL", "PERFORMANCE", "EXPERT", "RÉSULTAT"],
            avoid: ["ÉQUIPE", "AIDER", "LENT", "ATTENDRE", "PARTAGER", "EXPLIQUER"],
            profileTarget: ["PIRATE", "SOLITAIRE"]
        }
    },
    {
        id: "11_BARMAN_ARTISTE",
        role: "Barman",
        desc: "Créateur, instinct produit/client. Refuse horaires/rangement jugés inutiles.",
        strategy: {
            priorities: ["CRÉER", "PRODUIT", "CLIENT", "INSTINCT", "ART", "PASSION", "LIBERTÉ"],
            avoid: ["HORAIRE", "RANGEMENT", "MÉNAGE", "RÈGLE", "ORDRE", "CONTRAINTE"],
            profileTarget: ["DIVA", "CRÉATIF"]
        }
    },
    {
        id: "12_BARMAN_STAR_LAXISTE",
        role: "Barman",
        desc: "Charisme fou, vend énormément. Règles inventaire/caisse trop rigides -> libertés stocks.",
        strategy: {
            priorities: ["VENTE", "CHARISME", "SHOW", "ARGENT", "CLIENT", "PLAISIR", "OFFRIR"],
            avoid: ["COMPTER", "INVENTAIRE", "CAISSE", "RÈGLE", "JUSTIFIER", "RIGUEUR"],
            profileTarget: ["SHOWMAN", "PIRATE"]
        }
    },
    {
        id: "13_ADJOINT_CALIFE",
        role: "Adjoint",
        desc: "Estime mériter poste au-dessus. Précis, mais sème doute sur compétence supérieurs.",
        strategy: {
            priorities: ["MOI", "AMBITION", "PRÉCIS", "PARFAIT", "MONTER", "PRENDRE", "CRITIQUER"],
            avoid: ["SOUTENIR", "LOYAL", "AIDER_CHEF", "OBÉIR_AVEUGLE"],
            profileTarget: ["OPPORTUNISTE", "AMBITIEUX"]
        }
    },
    {
        id: "14_CHEF_RANG_STRESSÉ",
        role: "Chef de Rang",
        desc: "Ambiance/Sourire. Apprécié clients. S'effondre/Fuit si stress monte.",
        strategy: {
            priorities: ["SOURIRE", "CLIENT", "AMBIANCE", "SYMPA", "GENTIL", "FUIR", "EVITER"],
            avoid: ["STRESS", "CONFLIT", "PRESSION", "AFFRONTER", "DUR", "RUSH"],
            profileTarget: ["PASSIF", "CONFIDENT", "SENSIBLE"]
        }
    },
    {
        id: "15_BARMAN_MERCENAIRE",
        role: "Barman",
        desc: "Efficace, propre. 0 intérêt vision. Fait heures, prend salaire, rien d'autre.",
        strategy: {
            priorities: ["HEURE", "SALAIRE", "PROPRE", "EFFICACE", "CONTRAT", "RÈGLE_PERSO"],
            avoid: ["VISION", "PLUS", "GRATUIT", "ÉQUIPE", "PASSION", "FUTUR"],
            profileTarget: ["MERCENAIRE", "PRAGMATIQUE"]
        }
    },
    {
        id: "16_SERVEUR_FEIGNANT_SOCIAL",
        role: "Serveur",
        desc: "Social, discute. Évite tâches ingrates (nettoyage) et décharge sur collègues.",
        strategy: {
            priorities: ["DISCUTER", "SOCIAL", "PARLER", "CLIENT", "PAUSE", "SYMPA"],
            avoid: ["NETTOYAGE", "MÉNAGE", "EFFORT", "PHYSIQUE", "CORVÉE", "SALE"],
            profileTarget: ["PASSIF", "CONFIDENT", "PARASITE"]
        }
    },
    {
        id: "17_SERVEUR_ANXIEUX",
        role: "Serveur",
        desc: "Consciencieux, anxiété paralyse. Vérifie 3 fois -> inefficace rush.",
        strategy: {
            priorities: ["VÉRIFIER", "SÛR", "PRÉCIS", "ATTENTION", "DÉTAIL", "PEUR", "CONTRÔLER"],
            avoid: ["VITE", "RISQUE", "IMPROVISER", "LANCER", "COURIR"],
            profileTarget: ["BUREAUCRATE", "SENSIBLE", "LENT"]
        }
    },
    {
        id: "18_SERVEUR_ROBOT",
        role: "Serveur",
        desc: "Machine guerre ops. 0 émotion/parole. Service chirurgical 0 erreur.",
        strategy: {
            priorities: ["PRÉCIS", "PARFAIT", "CHIRURGICAL", "RÈGLE", "SILENCE", "EFFICACE", "ROBOT"],
            avoid: ["PARLER", "ÉMOTION", "SOURIRE", "DISCUTER", "SENTIMENT", "CHAUD"],
            profileTarget: ["MÉTRONOME", "RIGOUREUX", "FROID"]
        }
    },
    {
        id: "19_MANAGER_CAMÉLÉON",
        role: "Manager",
        desc: "Intelligent, calculateur. Affiche profil idéal pour promotion. Réponses lissées.",
        strategy: {
            priorities: ["IDEAL", "PARFAIT", "ATTENDU", "LISSÉ", "CALCUL", "PROMOTION", "REUSSITE"],
            avoid: ["VRAI", "RISQUE", "DÉFAUT", "OPINION", "TRANCHANT", "CLIVANT"],
            profileTarget: ["CAMÉLÉON", "RADAR"]
        }
    },
    {
        id: "20_SERVEUR_PILIER",
        role: "Serveur",
        desc: "Pas rapide, pilier équipe. Connaît clients, ponctuel, aide tout le monde.",
        strategy: {
            priorities: ["AIDER", "ÉQUIPE", "CLIENT", "NOM", "PONCTUEL", "SOLIDAIRE", "FIABLE", "DURABLE"],
            avoid: ["VITE", "COURIR", "PERFORMANCE", "MOI", "EGO", "FUIR"],
            profileTarget: ["PROTECTEUR", "LOYAL", "STABLE"]
        }
    }
];

// --- SIMULATION LOGIC ---
const runSimulation = () => {
    const engine = new SentinelEngine();
    const results = {};

    console.log(">>> STARTING 20 USER PROFILE SIMULATION (Test Runner v3.0)");

    PROFILES.forEach((profile, index) => {
        console.log(`\n>>> TESTING COMPLETED: [${profile.id}] (${profile.role})`);
        console.log(`    Goal: ${profile.desc.substring(0, 60)}...`);

        const roleData = SCENARIO_DATA[profile.role];
        const sentinelRole = sentinelRoleMap[profile.role];
        const strategy = profile.strategy;

        if (!roleData) {
            console.error(`ERROR: No data found for role ${profile.role}`);
            return;
        }

        // Filter Qs
        let questions = [];
        if (Array.isArray(roleData) && roleData.length > 0) {
            // Check if items are Sections or Questions
            const first = roleData[0];
            if (first.items) {
                // Nested Structure (Sections)
                roleData.forEach(section => {
                    if (section.items) {
                        questions = questions.concat(section.items);
                    }
                });
            } else {
                // Flat Structure (Questions)
                questions = roleData;
            }
        }
        console.log(`    Loaded ${questions.length} questions.`);

        const answers = {};

        questions.forEach(q => {
            let bestOption = null;
            let maxScore = -100;

            if (Array.isArray(q.options)) {
                q.options.forEach(opt => {
                    let score = 0;
                    const text = (opt.label || opt.text || "").toUpperCase();
                    // const value = opt.value; // A, B...

                    // Strategy Matching
                    strategy.priorities.forEach(word => {
                        if (text.includes(word)) score += 5;
                    });
                    strategy.avoid.forEach(word => {
                        if (text.includes(word)) score -= 10;
                    });
                    // Target Profile Bonus
                    const optProfile = (opt.profile || "").toUpperCase();
                    if (strategy.profileTarget.includes(optProfile)) {
                        score += 5;
                    }

                    if (score > maxScore) {
                        maxScore = score;
                        bestOption = opt;
                    }
                });
            }

            // Fallback random
            if (!bestOption && q.options && q.options.length > 0) {
                bestOption = q.options[Math.floor(Math.random() * q.options.length)];
            }

            if (bestOption) {
                answers[q.id] = bestOption.value; // Store A, B, C...
            }
        });

        // Evaluate
        // Pass answers as 3rd arg (scores) because we are simulating values
        const result = engine.evaluateCandidate(sentinelRole, questions, answers, {});

        console.log(`    VERDICT: ${result.verdict}`);
        console.log(`    SCORE:   ${result.globalScore}/100`);

        results[profile.id] = {
            ...result,
            desc: profile.desc
        };
    });

    // Valid JSON dump
    fs.writeFileSync('test_results_user_20.json', JSON.stringify(results, null, 2));
    console.log("\nAll tests completed. Summary saved to test_results_user_20.json");
};

runSimulation();
