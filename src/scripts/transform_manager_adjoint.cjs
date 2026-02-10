
const fs = require('fs');
const path = require('path');

// Paths
const q1_50_path = path.join(__dirname, '../data/manager_adjoint_q1_50.json');
const q51_100_path = path.join(__dirname, '../data/manager_adjoint_q51_100.json');
const output_path = path.join(__dirname, '../data/manager_adjoint_data.js');

// Read and parse
const q1_50 = JSON.parse(fs.readFileSync(q1_50_path, 'utf8'));
const q51_100 = JSON.parse(fs.readFileSync(q51_100_path, 'utf8'));

// Merge questions
const all_questions = [...q1_50.questions, ...q51_100.questions];

// Transform
const sentinel_questions = all_questions.map(q => {
    // Map responses object to options array
    const options = Object.entries(q.reponses).map(([key, value]) => ({
        value: key, // "A", "B", etc.
        label: value.texte,
        trait: value.trait // Keep trait for scoring
    }));

    return {
        id: q.id,
        sectionTitle: "Évaluation Situationnelle", // Default section title
        description: q.situation,
        options: options
    };
});

// Create file content
const fileContent = `export const MANAGER_ADJOINT_DATA = ${JSON.stringify(sentinel_questions, null, 4)};\n`;

// Write to file
fs.writeFileSync(output_path, fileContent);

console.log(`Successfully generated ${output_path} with ${sentinel_questions.length} questions.`);
