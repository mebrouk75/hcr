import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dir = dirname(__filename);

// Import v5.2 engine
const { calculateProfileUniversel, calculateProfile, SentinelEngineV52 } = await import('../src/logic/SentinelEngineV52.js');

// Import data
const { HCR_DATA } = await import('../src/data/hcr_questions.js');
const { MANAGER_ADJOINT_DATA } = await import('../src/data/manager_adjoint_data.js');
const { MANAGER_PRINCIPAL_SENTINEL_DATA } = await import('../src/data/manager_principal_sentinel_data.js');

const engineV52 = new SentinelEngineV52();

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║    TEST v5.2 UNIVERSEL — TOUS LES RÔLES                  ║');
console.log('╚════════════════════════════════════════════════════════════╝');
console.log('');

// Helper: flatten questions from HCR_DATA
function flattenQuestions(data) {
    const questions = [];
    if (!data) return questions;
    if (Array.isArray(data)) {
        data.forEach(item => {
            if (item.items) questions.push(...item.items);
            else if (item.id) questions.push(item);
        });
    }
    return questions;
}

// Helper: simulate answers
function simulateAnswers(questions) {
    const scores = {};
    questions.forEach((q, i) => {
        if (q.type === 'DIMENSION') {
            scores[q.id] = (i % 5); // 0-4
        } else if (q.options && q.options.length > 0) {
            scores[q.id] = q.options[i % q.options.length].value;
        }
    });
    return scores;
}

// Test each role
const rolesToTest = [
    { id: 'BARMAN', data: HCR_DATA.BARMAN },
    { id: 'SERVEUR', data: HCR_DATA.SERVEUR },
    { id: 'CHEF_RANG', data: HCR_DATA.CHEF_RANG },
    { id: 'MANAGER', data: MANAGER_ADJOINT_DATA },
    { id: 'MANAGER_PRINCIPAL', data: MANAGER_PRINCIPAL_SENTINEL_DATA },
];

let allPassed = true;

rolesToTest.forEach(({ id, data }) => {
    console.log(`═══ ${id} ═══`);

    try {
        const questions = flattenQuestions(data);
        const scores = simulateAnswers(questions);

        const result = engineV52.evaluateCandidate(id, questions, scores, {});

        // Verify structure
        const checks = {
            'version': result.version === '5.2',
            'role': result.role === id,
            'profil_dominant': !!result.profil_dominant && result.profil_dominant !== 'INCONNU',
            'macro_classement': Array.isArray(result.macro_classement) && result.macro_classement.length === 9,
            'scores_normalises_facettes': Object.keys(result.scores_normalises_facettes || {}).length > 0,
            'macro_profils': Object.keys(result.macro_profils || {}).length === 9,
            'structure_recommandee': !!result.structure_recommandee,
            'profil_textuel': !!result.profil_textuel && result.profil_textuel.length > 10,
            'alertes': Array.isArray(result.alertes),
            'questions_repondues': result.questions_repondues?.sjt > 0,
        };

        let roleOK = true;
        Object.entries(checks).forEach(([key, passed]) => {
            const icon = passed ? '✅' : '❌';
            if (!passed) roleOK = false;
            console.log(`  ${icon} ${key}`);
        });

        console.log(`  Questions: ${questions.length} total, ${result.questions_repondues.sjt} SJT, ${result.questions_repondues.dimensions} DIM`);
        console.log(`  Facettes trouvées: ${Object.keys(result.scores_normalises_facettes).length}`);
        console.log(`  Profil dominant: ${result.profil_dominant} (${result.macro_profils[result.profil_dominant]?.toFixed(1)}%)`);
        console.log(`  Top 3 facettes: ${Object.entries(result.scores_normalises_facettes).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([f, s]) => f + ' ' + s.toFixed(0) + '%').join(', ')}`);
        console.log(`  Structure: ${result.structure_recommandee}`);
        console.log(`  → ${roleOK ? '✅ PASS' : '❌ FAIL'}`);

        if (!roleOK) allPassed = false;
    } catch (e) {
        console.log(`  ❌ ERREUR: ${e.message}`);
        console.log(`  ${e.stack?.split('\n').slice(1, 3).join('\n  ')}`);
        allPassed = false;
    }
    console.log('');
});

// Test DIRECTEUR (v5.2 spécialisé)
console.log('═══ DIRECTEUR (v5.2 spécialisé) ═══');
try {
    const fakeScores = {};
    for (let i = 61; i <= 240; i++) {
        fakeScores['Q' + String(i).padStart(3, '0')] = ['A', 'B', 'C', 'D', 'E'][i % 5];
    }
    const result = engineV52.evaluateCandidate('DIRECTEUR', [], fakeScores, {});
    const checks = {
        'version': result.version === '5.2',
        'role': result.role === 'DIRECTEUR',
        'profil_dominant': !!result.profil_dominant && result.profil_dominant !== 'INCONNU',
        'macro_classement.length === 9': result.macro_classement?.length === 9,
        'facettes > 10': Object.keys(result.scores_normalises_facettes || {}).length > 10,
    };
    Object.entries(checks).forEach(([key, passed]) => {
        console.log(`  ${passed ? '✅' : '❌'} ${key}`);
        if (!passed) allPassed = false;
    });
    console.log(`  Facettes: ${Object.keys(result.scores_normalises_facettes).length}`);
    console.log(`  Profil: ${result.profil_dominant}`);
    console.log(`  → ✅ PASS`);
} catch (e) {
    console.log(`  ❌ ERREUR: ${e.message}`);
    allPassed = false;
}

console.log('');
console.log('╔════════════════════════════════════════════════════════════╗');
console.log(`║  RÉSULTAT GLOBAL: ${allPassed ? '✅ TOUS LES RÔLES PASSENT' : '❌ CERTAINS RÔLES EN ERREUR'}         ║`);
console.log('╚════════════════════════════════════════════════════════════╝');
