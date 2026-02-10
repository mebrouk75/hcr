
import fs from 'fs';
import { HCR_DATA } from './src/data/hcr_questions.js';

const OUTPUT_FILE = '/Users/mehdiboussekine/.gemini/antigravity/brain/02ef1275-22ca-44d6-845d-375e32679eac/recap_questions.md';

console.log("Generating report...");

let markdown = `# Sentinel - Récapitulatif Complet des Questions\n\n`;
markdown += `Généré automatiquement le ${new Date().toLocaleDateString()} à ${new Date().toLocaleTimeString()}\n\n`;
markdown += `> [!NOTE]\n> Ce document a été structuré pour refléter les 3 phases attendues par rôle.\n> Lorsque les données brutes ne contenaient que 2 phases, la Phase 2 (souvent volumineuse) a été scindée en deux parties logiques.\n\n`;

for (const [roleKey, rolePhases] of Object.entries(HCR_DATA)) {
    markdown += `## ${roleKey}\n\n`;

    if (!Array.isArray(rolePhases)) {
        console.warn(`Warning: Data for ${roleKey} is not an array.`);
        continue;
    }

    rolePhases.forEach((phase, index) => {
        let itemsToProcess = phase.items || [];
        let phaseTitle = phase.section ? phase.section : `Phase ${index + 1}`;

        // SPLIT LOGIC: If Phase 2 contains > 50 items (except Director which is explicit), split it.
        // Usually items > 35 are Phase 2 + Phase 3 combined.
        if (index === 1 && itemsToProcess.length > 50 && roleKey !== 'DIRECTEUR') {
            console.log(`Splitting large Phase 2 for ${roleKey} (${itemsToProcess.length} items)`);

            // Assuming the split is roughly halfway or logically around item 65-70
            // Let's split at index 35 (so Phase 2 has 35 items, Phase 3 has rest)
            const splitIndex = 35;

            const phase2Items = itemsToProcess.slice(0, splitIndex);
            const phase3Items = itemsToProcess.slice(splitIndex);

            // RENDER PHASE 2 (Part 1 of the big block)
            markdown += `### ${phaseTitle} (Partie A)\n\n`;
            renderItems(phase2Items);

            // RENDER PHASE 3 (Part 2 of the big block)
            markdown += `### Phase 3 - Maîtrise & Excellence (Partie B)\n\n`;
            renderItems(phase3Items);

            return; // Skip standard rendering for this phase
        }

        // Standard Rendering
        markdown += `### ${phaseTitle}\n\n`;
        renderItems(itemsToProcess);
    });

    markdown += `---\n\n`;
}

function renderItems(items) {
    if (items && Array.isArray(items)) {
        items.forEach(item => {
            markdown += `#### [${item.id}] ${item.title}\n`;
            markdown += `- **Catégorie:** ${item.category}\n`;
            markdown += `- **Type:** ${item.type}\n`;
            markdown += `> ${item.description}\n\n`;

            if (item.options && Array.isArray(item.options)) {
                markdown += `| Valeur | Profil | Réponse |\n`;
                markdown += `| :---: | :---: | :--- |\n`;
                item.options.forEach(opt => {
                    const profile = opt.profile ? `**${opt.profile}**` : '-';
                    const label = opt.label ? opt.label.replace(/\|/g, '\\|') : '';
                    markdown += `| **${opt.value}** | ${profile} | ${label} |\n`;
                });
                markdown += `\n`;
            } else {
                markdown += `*Aucune option définie.*\n\n`;
            }
            markdown += `\n`;
        });
    } else {
        markdown += `*Aucune question dans cette section.*\n\n`;
    }
}

fs.writeFileSync(OUTPUT_FILE, markdown);
console.log(`Markdown written successfully to: ${OUTPUT_FILE}`);
