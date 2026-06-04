#!/usr/bin/env node
/**
 * Test complet du parcours Directeur (MBTI + Sentinel v5.2)
 * Simule un candidat et affiche le résultat final
 */

import { calculateProfile } from '../src/logic/SentinelEngineV52.js';

console.log("═".repeat(70));
console.log("TEST COMPLET - PARCOURS DIRECTEUR (v5.2)");
console.log("═".repeat(70));

// ═══════════════════════════════════════════════════════════════════
// 1. SIMULATION DES RÉPONSES
// ═══════════════════════════════════════════════════════════════════

console.log("\n📝 Génération des réponses simulées...\n");

const responses = {};

// MBTI (Q001-Q060) - Simulation d'un profil ENTJ (Commandeur)
// On ne les utilise pas dans le scoring v5.2, mais pour la cohérence
for (let i = 1; i <= 60; i++) {
    const qid = `Q${String(i).padStart(3, '0')}`;
    responses[qid] = Math.random() > 0.5 ? 4 : 2; // Tendance vers les pôles
}

// PHASE 2 - Leadership (Q061-Q144) - 84 questions
// Profil simulé : COMMANDANT (Leader, Autoritaire, Pragmatique)
const phase2Choices = ['A', 'B', 'C', 'D', 'E'];
for (let i = 61; i <= 144; i++) {
    const qid = `Q${String(i).padStart(3, '0')}`;
    // Favoriser les choix B (Leadership), C (Autorité), E (Stratégie)
    const weights = [0.1, 0.3, 0.25, 0.1, 0.25]; // B et E favorisés
    const rand = Math.random();
    let cumul = 0;
    for (let j = 0; j < weights.length; j++) {
        cumul += weights[j];
        if (rand < cumul) {
            responses[qid] = phase2Choices[j];
            break;
        }
    }
}

// PHASE 3 - Dimensions (Q145-Q186) - 42 questions
// Profil : INFLUENCE élevée, RIGUEUR moyenne, CONSIDÉRATION faible
for (let i = 145; i <= 186; i++) {
    const qid = `Q${String(i).padStart(3, '0')}`;
    const num = i - 144;

    // INFLUENCE (Q145-Q150) : Score élevé (3-4)
    if (num >= 1 && num <= 6) {
        responses[qid] = Math.random() > 0.3 ? 4 : 3;
    }
    // CONSIDÉRATION (Q151-Q156) : Score faible (0-1)
    else if (num >= 7 && num <= 12) {
        responses[qid] = Math.random() > 0.3 ? 0 : 1;
    }
    // CRÉATIVITÉ (Q157-Q162) : Score moyen (2-3)
    else if (num >= 13 && num <= 18) {
        responses[qid] = Math.random() > 0.5 ? 3 : 2;
    }
    // RIGUEUR (Q163-Q168) : Score élevé (3-4)
    else if (num >= 19 && num <= 24) {
        responses[qid] = Math.random() > 0.3 ? 4 : 3;
    }
    // ÉQUILIBRE (Q169-Q174) : Score faible (1-2)
    else if (num >= 25 && num <= 30) {
        responses[qid] = Math.random() > 0.5 ? 1 : 2;
    }
    // STRESS (Q175-Q180) : Score élevé (3-4)
    else if (num >= 31 && num <= 36) {
        responses[qid] = Math.random() > 0.3 ? 4 : 3;
    }
    // DARK_EMPATHY (Q181-Q186) : Score moyen-élevé (2-3)
    else {
        responses[qid] = Math.random() > 0.5 ? 3 : 2;
    }
}

// PHASE 4 - Hardcore (Q187-Q206) - 20 questions
for (let i = 187; i <= 206; i++) {
    const qid = `Q${String(i).padStart(3, '0')}`;
    responses[qid] = phase2Choices[Math.floor(Math.random() * 5)];
}

// PHASE DARK - Dark Reality (Q207-Q240) - 34 questions
for (let i = 207; i <= 240; i++) {
    const qid = `Q${String(i).padStart(3, '0')}`;
    responses[qid] = phase2Choices[Math.floor(Math.random() * 5)];
}

console.log(`✓ ${Object.keys(responses).length} réponses générées`);
console.log(`  - MBTI : Q001-Q060 (60 questions)`);
console.log(`  - Phase 2 (Leadership) : Q061-Q144 (84 questions)`);
console.log(`  - Phase 3 (Dimensions) : Q145-Q186 (42 questions)`);
console.log(`  - Phase 4 (Hardcore) : Q187-Q206 (20 questions)`);
console.log(`  - Dark Reality : Q207-Q240 (34 questions)`);

// ═══════════════════════════════════════════════════════════════════
// 2. CALCUL DU PROFIL (Version 5.2)
// ═══════════════════════════════════════════════════════════════════

console.log("\n⚙️  Calcul du profil avec SentinelEngineV52...\n");

const result = calculateProfile(responses);

// ═══════════════════════════════════════════════════════════════════
// 3. AFFICHAGE DU RÉSULTAT COMPLET
// ═══════════════════════════════════════════════════════════════════

console.log("═".repeat(70));
console.log("RÉSULTAT FINAL - RAPPORT CANDIDAT");
console.log("═".repeat(70));

console.log(`\n📊 Version du moteur : ${result.version}`);
console.log(`📝 Questions répondues :`);
console.log(`   - SJT (Situations) : ${result.questions_repondues.sjt}`);
console.log(`   - Dimensions (Likert) : ${result.questions_repondues.dimensions}`);

console.log("\n" + "─".repeat(70));
console.log("📈 DIMENSIONS BRUTES (Phase 3)");
console.log("─".repeat(70));

for (const [dim, score] of Object.entries(result.dimensions_brutes)) {
    if (score !== null) {
        const bar = "█".repeat(Math.round(score * 5));
        const spaces = " ".repeat(Math.max(0, 20 - bar.length));
        console.log(`  ${dim.padEnd(18)} : ${score.toFixed(2)}/4.00  ${bar}${spaces}`);
    }
}

console.log("\n" + "─".repeat(70));
console.log("🎯 TOP 5 FACETTES");
console.log("─".repeat(70));

result.top5_facettes.forEach((f, i) => {
    const bar = "█".repeat(Math.round(f.score / 5));
    const spaces = " ".repeat(Math.max(0, 20 - bar.length));
    const marker = i === 0 ? " ← DOMINANT" : "";
    console.log(`  ${String(i + 1)}. ${f.facette.padEnd(18)} : ${f.score.toFixed(1)}%  ${bar}${spaces}${marker}`);
});

console.log("\n" + "─".repeat(70));
console.log("🏛️  MACRO-PROFILS (Radar)");
console.log("─".repeat(70));

result.macro_classement.forEach((mp, i) => {
    const bar = "█".repeat(Math.round(mp.score / 5));
    const spaces = " ".repeat(Math.max(0, 20 - bar.length));
    const marker = mp.profil === result.profil_dominant ? " ← DOMINANT" : "";
    console.log(`  ${String(i + 1)}. ${mp.profil.padEnd(15)} : ${mp.score.toFixed(1)}%  ${bar}${spaces}${marker}`);
});

console.log("\n" + "─".repeat(70));
console.log("🏢 RECOMMANDATION STRUCTURE");
console.log("─".repeat(70));
console.log(`\n  ${result.structure_recommandee}\n`);

if (result.alertes && result.alertes.length > 0) {
    console.log("─".repeat(70));
    console.log("⚠️  ALERTES");
    console.log("─".repeat(70));
    result.alertes.forEach(a => {
        const icon = a.type === "WARNING" ? "⚠️ " : "ℹ️ ";
        console.log(`\n  ${icon} [${a.type}]`);
        console.log(`  ${a.message}`);
    });
}

console.log("\n" + "─".repeat(70));
console.log("📝 PROFIL TEXTUEL");
console.log("─".repeat(70));
console.log(`\n${result.profil_textuel}\n`);

console.log("═".repeat(70));
console.log("✓ Test terminé avec succès");
console.log("═".repeat(70));

// ═══════════════════════════════════════════════════════════════════
// 4. EXPORT JSON (Pour vérification)
// ═══════════════════════════════════════════════════════════════════

console.log("\n💾 Export JSON complet disponible ci-dessous :\n");
console.log(JSON.stringify(result, null, 2));
