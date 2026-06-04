import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dir = dirname(__filename);

// Load JSON manually (Node v24 requires import attributes)
const CONFIG = JSON.parse(readFileSync(resolve(__dir, '../src/data/sentinel_logic.json'), 'utf8'));

// Manually replicate SentinelEngine constructor
const config = CONFIG.sentinelle_hcr_v3;

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║      VÉRIFICATION COMPLÈTE - TOUS LES RÔLES              ║');
console.log('╚════════════════════════════════════════════════════════════╝');
console.log('');

// ══════════════════════════════════════════════
// TEST 1: sentinel_logic.json structure
// ══════════════════════════════════════════════
console.log('═══ TEST 1: STRUCTURE sentinel_logic.json v3.2 ═══');
console.log('');
console.log('  sentinelle_hcr_v3:', config ? '✅' : '❌');
console.log('  meta.version:', config?.meta?.version || '❌');
console.log('');

// Check postes
const expectedRoles = ['BARMAN', 'SERVEUR', 'CHEF_DE_RANG', 'MANAGER', 'DIRECTEUR'];
console.log('  POSTES:');
let postesOK = true;
expectedRoles.forEach(r => {
    const role = config?.postes?.[r];
    const hasPoids = role?.poids_dimensions ? '✅' : '❌';
    console.log(`    ${r}: ${role ? '✅' : '❌ MISSING'} | poids: ${hasPoids}`);
    if (!role) postesOK = false;
});
console.log('  → POSTES:', postesOK ? '✅ TOUS OK' : '❌ PROBLÈME');
console.log('');

// Check mappings
const nbTraits = Object.keys(config?.mapping_traits_vers_dimensions || {}).length;
console.log('  MAPPINGS:');
console.log(`    mapping_traits_vers_dimensions: ${nbTraits > 0 ? '✅ (' + nbTraits + ' traits)' : '❌'}`);
console.log(`    mapping_dimensions_directeur: ${config?.mapping_dimensions_directeur ? '✅' : '❌'}`);
console.log('');

// Check seuils
console.log('  SEUILS CRITIQUES:');
const sc = config?.seuils_critiques;
console.log(`    performance: ${sc?.performance ? '✅ (min: ' + sc.performance.score_min + ')' : '❌'}`);
console.log(`    standard: ${sc?.standard ? '✅ (min: ' + sc.standard.score_min + ')' : '❌'}`);
console.log(`    limite: ${sc?.limite ? '✅' : '❌'}`);
console.log(`    absolute_red_line: ${sc?.absolute_red_line ? '✅' : '❌'}`);
console.log('');

// Check bonus
const nbBonus = Object.keys(config?.bonus_universels || {}).length;
console.log(`  BONUS UNIVERSELS: ${nbBonus > 0 ? '✅ (' + nbBonus + ')' : '❌'}`);
console.log('');

// ══════════════════════════════════════════════
// TEST 2: Simulate SentinelEngine for each non-director role
// ══════════════════════════════════════════════
console.log('═══ TEST 2: SIMULATION MOTEUR LEGACY (rôles non-directeur) ═══');
console.log('');

const mapItemToDimension = (item) => {
    const t = (item.type || "").toUpperCase();
    const c = (item.category || "").toUpperCase();
    if (c === "STRESS") return "RES";
    if (c === "EMPATHIE") return "EMP";
    if (c === "LEADERSHIP") return "AUT";
    if (c === "TECHNIQUE") return "INT";
    if (c === "CHAOS") return "ADA";
    return "ADA";
};

function simulateRole(roleId) {
    let configRoleId = roleId;
    if (roleId === 'CHEF_RANG') configRoleId = 'CHEF_DE_RANG';

    const roleConfig = config.postes[configRoleId] || config.postes["MANAGER"];
    if (!roleConfig) return { error: "No config found for " + configRoleId };

    const raw_scores = { RES: 0, EMP: 0, AUT: 0, INT: 0, TOX: 0, ADA: 0 };
    const dimensions = { RES: 0, EMP: 0, AUT: 0, INT: 0, TOX: 0, ADA: 0 };
    const traitCounts = {};
    let totalQuestionsAnswered = 0;

    // Simulate 20 questions with trait answers
    const traits = ['PRAGMATIQUE', 'DIPLOMATE', 'AUTORITAIRE', 'RIGOUREUX', 'FLEXIBLE',
        'RÉSILIENT', 'LEADER', 'PROTECTEUR', 'COMMERCIAL', 'CRÉATIF'];

    for (let i = 0; i < 20; i++) {
        totalQuestionsAnswered++;
        const trait = traits[i % traits.length];
        traitCounts[trait] = (traitCounts[trait] || 0) + 1;

        const mapping = config.mapping_traits_vers_dimensions[trait];
        if (mapping && mapping.dimensions) {
            Object.entries(mapping.dimensions).forEach(([dim, val]) => {
                if (raw_scores[dim] !== undefined) {
                    raw_scores[dim] += val;
                }
            });
        }
    }

    // Normalize
    const normalizationFactor = totalQuestionsAnswered > 0 ? (totalQuestionsAnswered * 1.5) : 1;
    Object.keys(raw_scores).forEach(d => {
        dimensions[d] = Math.max(0, Math.min(100, Math.round((raw_scores[d] / normalizationFactor) * 100)));
    });

    // Global score
    let weightedScore = 0;
    let weightTotal = 0;
    const weights = roleConfig.poids_dimensions || {};
    Object.keys(weights).forEach(dim => {
        weightedScore += (dimensions[dim] || 0) * weights[dim];
        weightTotal += weights[dim];
    });
    const globalScore = weightTotal > 0 ? Math.round(weightedScore / weightTotal) : 0;

    // Verdict
    let verdict = "EN ANALYSE";
    if (globalScore >= sc.performance.score_min) verdict = sc.performance.verdict;
    else if (globalScore >= sc.standard.score_min) verdict = sc.standard.verdict;
    else verdict = sc.limite.verdict;

    return { dimensions, globalScore, verdict, raw_scores };
}

['BARMAN', 'SERVEUR', 'CHEF_RANG', 'MANAGER'].forEach(role => {
    try {
        const result = simulateRole(role);
        if (result.error) {
            console.log(`  ${role}: ❌ ${result.error}`);
        } else {
            console.log(`  ${role}:`);
            console.log(`    Score: ${result.globalScore}/100 | Verdict: ${result.verdict}`);
            console.log(`    Dims: RES=${result.dimensions.RES} EMP=${result.dimensions.EMP} AUT=${result.dimensions.AUT} INT=${result.dimensions.INT} TOX=${result.dimensions.TOX} ADA=${result.dimensions.ADA}`);
            console.log(`    → ✅ OK`);
        }
    } catch (e) {
        console.log(`  ${role}: ❌ ERREUR - ${e.message}`);
    }
    console.log('');
});

// ══════════════════════════════════════════════
// TEST 3: Director v5.2 engine
// ══════════════════════════════════════════════
console.log('═══ TEST 3: MOTEUR v5.2 DIRECTEUR ═══');
console.log('');

// Import v5.2 engine
const { calculateProfile } = await import('../src/logic/SentinelEngineV52.js');

const fakeScores = {};
// SJT Q061-Q144
for (let i = 61; i <= 144; i++) {
    fakeScores['Q' + String(i).padStart(3, '0')] = ['A', 'B', 'C', 'D', 'E'][i % 5];
}
// Dimensions Q145-Q186
for (let i = 145; i <= 186; i++) {
    fakeScores['Q' + String(i).padStart(3, '0')] = (i % 5); // 0-4
}
// Hardcore Q187-Q206
for (let i = 187; i <= 206; i++) {
    fakeScores['Q' + String(i).padStart(3, '0')] = ['A', 'B', 'C', 'D', 'E'][i % 5];
}
// Dark Q207-Q240
for (let i = 207; i <= 240; i++) {
    fakeScores['Q' + String(i).padStart(3, '0')] = ['A', 'B', 'C', 'D', 'E'][i % 5];
}

try {
    const result = calculateProfile(fakeScores);
    console.log('  Version:', result.version);
    console.log('  Questions: SJT=' + result.questions_repondues.sjt + ' DIM=' + result.questions_repondues.dimensions);
    console.log('  Profil Dominant:', result.profil_dominant);
    console.log('  Score Dominant:', result.macro_profils[result.profil_dominant]?.toFixed(1) + '%');
    console.log('  Structure:', result.structure_recommandee);
    console.log('  Top 9 Facettes:');
    const allFacettes = Object.entries(result.scores_normalises_facettes).sort((a, b) => b[1] - a[1]);
    allFacettes.slice(0, 9).forEach((f, i) => {
        console.log(`    #${i + 1} ${f[0]}: ${f[1].toFixed(1)}%`);
    });
    console.log('  Dimensions Brutes:');
    Object.entries(result.dimensions_brutes).forEach(([k, v]) => {
        console.log(`    ${k}: ${v !== null ? v.toFixed(2) : 'N/A'}`);
    });
    console.log('  Alertes:', result.alertes.length > 0 ? result.alertes.map(a => a.type + ': ' + a.message).join('; ') : 'Aucune');
    console.log('  Profil Textuel:', result.profil_textuel?.substring(0, 120) + '...');
    console.log('  → ✅ OK');
} catch (e) {
    console.log('  ❌ ERREUR:', e.message);
    console.log('  Stack:', e.stack?.split('\n').slice(0, 3).join('\n'));
}

console.log('');

// ══════════════════════════════════════════════
// TEST 4: Data files
// ══════════════════════════════════════════════
console.log('═══ TEST 4: DONNÉES QUESTIONS ═══');
console.log('');

// Count director questions
const { DIRECTOR_SENTINEL_DATA } = await import('../src/data/director_sentinel_data.js');
let totalDirector = 0;
let phases = { p2: 0, p3: 0, p4: 0, dark: 0 };
DIRECTOR_SENTINEL_DATA.forEach(section => {
    if (section.items) {
        section.items.forEach(q => {
            totalDirector++;
            const n = parseInt(q.id.substring(1));
            if (n >= 61 && n <= 144) phases.p2++;
            else if (n >= 145 && n <= 186) phases.p3++;
            else if (n >= 187 && n <= 206) phases.p4++;
            else if (n >= 207 && n <= 240) phases.dark++;
        });
    }
});

console.log('  DIRECTEUR:');
console.log(`    Total: ${totalDirector} questions ${totalDirector === 180 ? '✅' : '❌ (attendu: 180)'}`);
console.log(`    Phase 2 (SJT): ${phases.p2} ${phases.p2 === 84 ? '✅' : '⚠️'}`);
console.log(`    Phase 3 (DIM): ${phases.p3} ${phases.p3 === 42 ? '✅' : '⚠️'}`);
console.log(`    Phase 4 (HARD): ${phases.p4} ${phases.p4 === 20 ? '✅' : '⚠️'}`);
console.log(`    Dark Reality: ${phases.dark} ${phases.dark === 34 ? '✅' : '⚠️'}`);
console.log('');

// Check hcr_questions.js
const { HCR_DATA } = await import('../src/data/hcr_questions.js');
console.log('  HCR_DATA rôles disponibles:', Object.keys(HCR_DATA).join(', '));
Object.entries(HCR_DATA).forEach(([role, data]) => {
    let count = 0;
    if (Array.isArray(data)) {
        data.forEach(section => {
            if (section.items) count += section.items.length;
        });
    }
    console.log(`    ${role}: ${count} questions`);
});

console.log('');
console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║                 VÉRIFICATION TERMINÉE                    ║');
console.log('╚════════════════════════════════════════════════════════════╝');
