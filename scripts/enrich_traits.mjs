/**
 * ENRICHISSEMENT DES TRAITS v5.2
 * 
 * Ce script ajoute un champ `trait` à chaque option des questions BARMAN, SERVEUR, CHEF_RANG.
 * 
 * Stratégie : Chaque ancien profil (MÉTRONOME, PIRATE, CONFIDENT, SHOWMAN) est mappé
 * vers un trait v5.2 spécifique basé sur la catégorie/contexte de la question.
 * 
 * Cela produit ~16-20 traits uniques par rôle au lieu de 4.
 */

// ═══ MAPPING PROFILE → TRAIT PAR CATÉGORIE ═══
// 
// Chaque combinaison (ancien_profil + catégorie/type) donne un trait v5.2 spécifique.
// Cela assure une granularité psychométrique professionnelle.

const PROFILE_TRAIT_MAPPING = {
    // MÉTRONOME = Le méthodique, rigoureux, qui suit les règles
    "MÉTRONOME": {
        "INTEGRITÉ": "RIGOUREUX",
        "INTÉGRITÉ": "RIGOUREUX",
        "STRESS": "RÉSILIENT",
        "PSYCHOLOGIE": "PROTECTEUR",
        "ÉTHIQUE": "RIGOUREUX",
        "VITESSE": "PRAGMATIQUE",
        "MANAGEMENT": "AUTORITAIRE",
        "ORGANISATION": "RIGOUREUX",
        "TECHNIQUE": "TECHNIQUE",
        "CLIENT": "ATTENTIF",
        "HUMAIN": "PROTECTEUR",
        "SERVICE": "RIGOUREUX",
        "GESTION": "PRAGMATIQUE",
        "RUSH": "RÉSILIENT",
        "HYGIÈNE": "RIGOUREUX",
        "FIDÉLITÉ": "LOYAL",
        "LOYAUTÉ": "LOYAL",
        "COMMERCIAL": "PRAGMATIQUE",
        "FINANCE": "RIGOUREUX",
        "LEADERSHIP": "AUTORITAIRE",
        "CONFLIT": "CONCILIANT",
        "ADAPTABILITÉ": "RIGOUREUX",
        "CULTURE": "RIGOUREUX",
        "RÉTENTION": "LOYAL",
        "USURE": "RÉSILIENT",
        "PRESSION": "RÉSILIENT",
        "RELATIONNEL": "ATTENTIF",
        "EMPATHIE": "PROTECTEUR",
        "RIGUEUR": "RIGOUREUX",
        "DILEMME": "RIGOUREUX",
        "SJT": "RIGOUREUX",
        "VISION": "PRAGMATIQUE",
        "STRATÉGIE": "PRAGMATIQUE",
        "DEFAULT": "RIGOUREUX"
    },

    // PIRATE = Le rebelle, qui improvise, prend des risques
    "PIRATE": {
        "INTEGRITÉ": "MERCENAIRE",
        "INTÉGRITÉ": "MERCENAIRE",
        "STRESS": "OPPORTUNISTE",
        "PSYCHOLOGIE": "FROID",
        "ÉTHIQUE": "PIRATE",
        "VITESSE": "RAPIDE",
        "MANAGEMENT": "PIRATE",
        "ORGANISATION": "ADAPTABLE",
        "TECHNIQUE": "DÉBROUILLARD",
        "CLIENT": "COMMERCIAL",
        "HUMAIN": "FROID",
        "SERVICE": "RAPIDE",
        "GESTION": "OPPORTUNISTE",
        "RUSH": "RAPIDE",
        "HYGIÈNE": "PIRATE",
        "FIDÉLITÉ": "MERCENAIRE",
        "LOYAUTÉ": "MERCENAIRE",
        "COMMERCIAL": "OPPORTUNISTE",
        "FINANCE": "MERCENAIRE",
        "LEADERSHIP": "PIRATE",
        "CONFLIT": "AUTORITAIRE",
        "ADAPTABILITÉ": "CAMÉLÉON",
        "CULTURE": "PIRATE",
        "RÉTENTION": "MERCENAIRE",
        "USURE": "OPPORTUNISTE",
        "PRESSION": "OPPORTUNISTE",
        "RELATIONNEL": "FROID",
        "EMPATHIE": "FROID",
        "RIGUEUR": "PIRATE",
        "DILEMME": "OPPORTUNISTE",
        "SJT": "OPPORTUNISTE",
        "VISION": "OPPORTUNISTE",
        "STRATÉGIE": "OPPORTUNISTE",
        "DEFAULT": "PIRATE"
    },

    // CONFIDENT = Le sensible, empathique, qui écoute
    "CONFIDENT": {
        "INTEGRITÉ": "HUMBLE",
        "INTÉGRITÉ": "HUMBLE",
        "STRESS": "SENSIBLE",
        "PSYCHOLOGIE": "PROTECTEUR",
        "ÉTHIQUE": "HUMBLE",
        "VITESSE": "SUIVEUR",
        "MANAGEMENT": "DIPLOMATE",
        "ORGANISATION": "SUIVEUR",
        "TECHNIQUE": "PÉDAGOGUE",
        "CLIENT": "SENSIBLE",
        "HUMAIN": "PROTECTEUR",
        "SERVICE": "ATTENTIF",
        "GESTION": "DIPLOMATE",
        "RUSH": "PASSIF",
        "HYGIÈNE": "OBÉISSANT",
        "FIDÉLITÉ": "LOYAL",
        "LOYAUTÉ": "LOYAL",
        "COMMERCIAL": "SENSIBLE",
        "FINANCE": "HUMBLE",
        "LEADERSHIP": "SUIVEUR",
        "CONFLIT": "CONCILIANT",
        "ADAPTABILITÉ": "FLEXIBLE",
        "CULTURE": "HUMBLE",
        "RÉTENTION": "LOYAL",
        "USURE": "SENSIBLE",
        "PRESSION": "SENSIBLE",
        "RELATIONNEL": "PROTECTEUR",
        "EMPATHIE": "PROTECTEUR",
        "RIGUEUR": "OBÉISSANT",
        "DILEMME": "DIPLOMATE",
        "SJT": "DIPLOMATE",
        "VISION": "HUMBLE",
        "STRATÉGIE": "DIPLOMATE",
        "DEFAULT": "DIPLOMATE"
    },

    // SHOWMAN = Le charismatique, extraverti, qui prend de la place
    "SHOWMAN": {
        "INTEGRITÉ": "FRANC",
        "INTÉGRITÉ": "FRANC",
        "STRESS": "LEADER",
        "PSYCHOLOGIE": "SHOWMAN",
        "ÉTHIQUE": "FRANC",
        "VITESSE": "RAPIDE",
        "MANAGEMENT": "LEADER",
        "ORGANISATION": "AUTONOME",
        "TECHNIQUE": "CRÉATIF",
        "CLIENT": "COMMERCIAL",
        "HUMAIN": "SHOWMAN",
        "SERVICE": "COMMERCIAL",
        "GESTION": "AMBITIEUX",
        "RUSH": "MENEUR",
        "HYGIÈNE": "EXIGEANT",
        "FIDÉLITÉ": "AMBITIEUX",
        "LOYAUTÉ": "AMBITIEUX",
        "COMMERCIAL": "COMMERCIAL",
        "FINANCE": "AMBITIEUX",
        "LEADERSHIP": "LEADER",
        "CONFLIT": "AFFIRMÉ",
        "ADAPTABILITÉ": "CRÉATIF",
        "CULTURE": "VISIONNAIRE",
        "RÉTENTION": "AMBITIEUX",
        "USURE": "MENEUR",
        "PRESSION": "MENEUR",
        "RELATIONNEL": "SHOWMAN",
        "EMPATHIE": "SHOWMAN",
        "RIGUEUR": "EXIGEANT",
        "DILEMME": "AFFIRMÉ",
        "SJT": "LEADER",
        "VISION": "VISIONNAIRE",
        "STRATÉGIE": "STRATEGIQUE",
        "DEFAULT": "SHOWMAN"
    }
};

// Additional profiles found in some data
const EXTRA_PROFILES = {
    "RADAR": { DEFAULT: "RADAR" },
    "TYRAN": { DEFAULT: "AUTORITAIRE" },
    "VISIONNAIRE": { DEFAULT: "VISIONNAIRE" },
    "SAGE": { DEFAULT: "SAGE" },
    "BUREAUCRATE": { DEFAULT: "BUREAUCRATE" },
};

function getTraitForOption(profile, category, type) {
    const profileMap = PROFILE_TRAIT_MAPPING[profile] || EXTRA_PROFILES[profile];
    if (!profileMap) {
        // Profile is already a trait — return as-is
        return profile;
    }

    // Try category first, then type, then DEFAULT
    const cat = (category || "").toUpperCase();
    const t = (type || "").toUpperCase();

    return profileMap[cat] || profileMap[t] || profileMap["DEFAULT"] || profile;
}

// ═══ PROCESS FILES ═══

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dir = dirname(__filename);

// Process a JS file: add trait fields to options
function enrichFile(filePath, dryRun = false) {
    let content = readFileSync(filePath, 'utf8');
    let changes = 0;
    const traitsFound = new Set();

    // Find all options with profile but no trait
    // Pattern: { ..., profile: "XXXX" } → add trait: "YYYY"
    const profileRegex = /(\{\s*(?:label|value)[^}]*?profile:\s*"([^"]+)")/g;

    let match;
    const replacements = [];

    while ((match = profileRegex.exec(content)) !== null) {
        const fullMatch = match[0];
        const profile = match[2];

        // Check if this option already has a trait field
        // Look ahead a bit for trait:
        const afterMatch = content.substring(match.index, match.index + fullMatch.length + 100);
        if (afterMatch.includes('"trait"') || afterMatch.includes("'trait'") || afterMatch.includes('trait:')) {
            continue; // Already has trait, skip
        }

        // Find the category context by searching backwards for "category"
        const before = content.substring(Math.max(0, match.index - 2000), match.index);
        let category = "DEFAULT";

        // Find last category: "XXX"
        const catMatch = before.match(/category:\s*"([^"]+)"/g);
        if (catMatch && catMatch.length > 0) {
            const lastCat = catMatch[catMatch.length - 1];
            const catVal = lastCat.match(/category:\s*"([^"]+)"/);
            if (catVal) category = catVal[1];
        }

        // Find type context
        let type = "SJT";
        const typeMatch = before.match(/type:\s*"([^"]+)"/g);
        if (typeMatch && typeMatch.length > 0) {
            const lastType = typeMatch[typeMatch.length - 1];
            const typeVal = lastType.match(/type:\s*"([^"]+)"/);
            if (typeVal) type = typeVal[1];
        }

        const trait = getTraitForOption(profile, category, type);
        traitsFound.add(trait);

        // Add trait field after profile field
        replacements.push({
            index: match.index,
            original: `profile: "${profile}"`,
            replacement: `profile: "${profile}", trait: "${trait}"`
        });

        changes++;
    }

    // Apply replacements in reverse order to preserve indices
    if (!dryRun) {
        replacements.reverse().forEach(r => {
            content = content.substring(0, content.indexOf(r.original, r.index > 100 ? r.index - 100 : 0)) +
                r.replacement +
                content.substring(content.indexOf(r.original, r.index > 100 ? r.index - 100 : 0) + r.original.length);
        });
        writeFileSync(filePath, content, 'utf8');
    }

    return { changes, traits: [...traitsFound] };
}

// Files to process
const basePath = resolve(__dir, '../src/data');
const files = [
    { name: 'hcr_questions.js', path: resolve(basePath, 'hcr_questions.js') },
    { name: 'serveur_data_v2.js', path: resolve(basePath, 'serveur_data_v2.js') },
    { name: 'chef_de_rang_data.js', path: resolve(basePath, 'chef_de_rang_data.js') },
];

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║    ENRICHISSEMENT TRAITS v5.2 — BARMAN/SERVEUR/CHEF_RANG ║');
console.log('╚════════════════════════════════════════════════════════════╝');
console.log('');

// DRY RUN first
console.log('═══ ANALYSE (dry run) ═══');
console.log('');

files.forEach(({ name, path }) => {
    try {
        const result = enrichFile(path, true);
        console.log(`  ${name}: ${result.changes} options à enrichir`);
        console.log(`  → Traits: ${result.traits.join(', ')}`);
        console.log(`  → ${result.traits.length} traits uniques`);
        console.log('');
    } catch (e) {
        console.log(`  ${name}: ERREUR - ${e.message}`);
        console.log('');
    }
});

// Ask for confirmation
console.log('═══ APPLICATION ═══');
console.log('');

files.forEach(({ name, path }) => {
    try {
        const result = enrichFile(path, false);
        console.log(`  ✅ ${name}: ${result.changes} options enrichies avec ${result.traits.length} traits uniques`);
    } catch (e) {
        console.log(`  ❌ ${name}: ${e.message}`);
    }
});

console.log('');
console.log('═══ VÉRIFICATION POST-ENRICHISSEMENT ═══');
console.log('');

// Reload and verify
const { HCR_DATA } = await import('../src/data/hcr_questions.js?v=' + Date.now());
['BARMAN', 'SERVEUR', 'CHEF_RANG'].forEach(role => {
    const data = HCR_DATA[role];
    if (!data) { console.log(`  ${role}: NO DATA`); return; }
    let questions = [];
    data.forEach(item => {
        if (item.items) questions.push(...item.items);
        else if (item.id) questions.push(item);
    });
    const traits = new Set();
    questions.forEach(q => {
        if (q.options) q.options.forEach(o => {
            if (o.trait) traits.add(o.trait);
        });
    });
    console.log(`  ${role}: ${traits.size} traits uniques → ${[...traits].join(', ')}`);
});

console.log('');
console.log('Done!');
