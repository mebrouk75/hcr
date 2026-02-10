

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basePath = __dirname;


function loadJson(filename) {
    const filePath = path.join(basePath, filename);
    console.log(`Reading ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`Read ${content.length} chars. First 20: ${content.substring(0, 20)}. Last 20: ${content.substring(content.length - 20)}`);
    return JSON.parse(content);
}

function processPhase2(questions) {
    return questions.map(q => {
        const options = [];
        // Sort keys A, B, C, D, E
        const keys = Object.keys(q.reponses).sort();
        keys.forEach(key => {
            const val = q.reponses[key];
            options.push({
                label: val.texte,
                value: key,
                profile: val.profil
            });
        });

        return {
            id: q.id,
            description: q.situation,
            category: "LEADERSHIP",
            type: "SJT",
            options: options
        };
    });
}

function processPhase3(questions) {
    return questions.map(q => {
        const pole_faible = q.pole_faible;
        const pole_fort = q.pole_fort;

        const options = [
            { label: `Totalement : ${pole_faible}`, value: 0 },
            { label: `Plutôt : ${pole_faible}`, value: 1 },
            { label: "Neutre / Équilibré", value: 2 },
            { label: `Plutôt : ${pole_fort}`, value: 3 },
            { label: `Totalement : ${pole_fort}`, value: 4 }
        ];

        return {
            id: q.id,
            description: q.situation,
            category: q.dimension,
            type: "DIMENSION",
            maxScore: 4,
            options: options
        };
    });
}

function processPhase4(questions) {
    return questions.map(q => {
        const options = [];
        const keys = Object.keys(q.reponses).sort();
        keys.forEach(key => {
            const val = q.reponses[key];
            options.push({
                label: val.texte,
                value: key,
                profile: val.profil
            });
        });

        return {
            id: q.id,
            description: q.situation,
            category: "DILEMME",
            type: "HARDCORE",
            options: options
        };
    });
}

const p1 = loadJson('director_source_part1.json');
const p2 = loadJson('director_source_part2.json');
const p3 = loadJson('director_source_part3.json');

const listPhase2Part1 = p1.phase_2_leadership_84_questions.questions;
const listPhase2Part2 = p2;
const fullPhase2 = listPhase2Part1.concat(listPhase2Part2);

const listPhase3 = p3.phase_3_et_4_dimensions_hardcore.phase_3_dimensions.questions;
const listPhase4 = p3.phase_3_et_4_dimensions_hardcore.phase_4_hardcore.questions;

const finalP2 = processPhase2(fullPhase2);
const finalP3 = processPhase3(listPhase3);
const finalP4 = processPhase4(listPhase4);

let jsContent = "export const DIRECTOR_SENTINEL_DATA = [\n";

jsContent += "    {\n";
jsContent += '        section: "Leadership - Style de Direction",\n';
jsContent += '        id: "PHASE2",\n';
jsContent += '        items: ' + JSON.stringify(finalP2, null, 4) + "\n";
jsContent += "    },\n";

jsContent += "    {\n";
jsContent += '        section: "Dimensions Complémentaires",\n';
jsContent += '        id: "PHASE3",\n';
jsContent += '        items: ' + JSON.stringify(finalP3, null, 4) + "\n";
jsContent += "    },\n";

jsContent += "    {\n";
jsContent += '        section: "Hardcore - Dilemmes Extrêmes",\n';
jsContent += '        id: "PHASE4",\n';
jsContent += '        items: ' + JSON.stringify(finalP4, null, 4) + "\n";
jsContent += "    }\n";
jsContent += "];\n";

fs.writeFileSync(path.join(basePath, 'src/data/director_sentinel_data.js'), jsContent);
console.log("Successfully generated director_sentinel_data.js");

