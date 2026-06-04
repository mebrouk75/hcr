import fs from 'fs';
import { HCR_DATA } from '../src/data/hcr_questions.js';

let output = "# TOUTES LES QUESTIONS PAR RÔLE\n\nCe document liste toutes les questions intégrées dans les tests Sentinel.\n\n";

for (const [roleName, roleData] of Object.entries(HCR_DATA)) {
    output += `## 🔹 RÔLE : ${roleName}\n\n`;

    let qIndex = 1;
    for (const phase of roleData) {
        if (!phase || !phase.items) {
            // Un array direct peut-être ?
            if (phase && phase.description) {
                output += `**Q${qIndex}.** ${phase.description || phase.question || 'Pas de texte'}\n\n`;
                qIndex++;
            }
            continue;
        }
        output += `### ${phase.section || 'Questions'}\n`;

        for (const q of phase.items) {
            output += `**Q${qIndex}.** ${q.description || q.question || 'Pas de texte'}\n`;

            if (q.type === 'MBTI' && q.options) {
                output += `   - Option A: ${q.options[0].text}\n`;
                output += `   - Option B: ${q.options[1].text}\n`;
            } else if (q.options) {
                for (const opt of q.options) {
                    output += `   - ${opt.label || opt.text}\n`;
                }
            } else if (q.type === 'DIMENSION' || phase.type === 'DIMENSION') {
                output += `   - (Échelle de 1 à 5 : ${q.pole_faible || 'Pas du tout'} -> ${q.pole_fort || 'Tout à fait'})\n`;
            }
            output += "\n";
            qIndex++;
        }
    }
    output += "---\n\n";
}

fs.writeFileSync('toutes_les_questions.md', output, 'utf-8');
console.log("Fichier toutes_les_questions.md généré avec succès !");
