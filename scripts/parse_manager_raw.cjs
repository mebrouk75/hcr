
const fs = require('fs');
const path = require('path');
const { TAG_MAPPING } = require('./TAG_MAPPING.cjs');

const INPUT_FILE = path.join(__dirname, 'manager_input.json');
const OUTPUT_FILE = path.join(__dirname, '../src/data/manager_sentinel_data.js');

try {
    const rawData = fs.readFileSync(INPUT_FILE, 'utf8');
    const jsonData = JSON.parse(rawData);

    // Check if the structure matches the new format
    let questions = [];
    if (jsonData.test_manager_restaurant && jsonData.test_manager_restaurant.questions) {
        questions = jsonData.test_manager_restaurant.questions;
    } else {
        throw new Error("Invalid JSON structure: expected test_manager_restaurant.questions");
    }

    const processedQuestions = questions.map((q, index) => {
        const optionsMap = ['A', 'B', 'C', 'D', 'E'];
        const options = optionsMap.map(key => {
            const rawOption = q[key];
            // Extract text and tags: "Option text [TAG1,TAG2]"
            const match = rawOption.match(/^(.*)\s\[(.*)\]$/);

            let text = rawOption;
            let tags = [];

            if (match) {
                text = match[1].trim();
                tags = match[2].split(',').map(t => t.trim());
            } else {
                console.warn(`Warning: No tags found for question ${q.id} option ${key}`);
            }

            const scores = {};
            tags.forEach(tag => {
                if (TAG_MAPPING[tag]) {
                    const mapped = TAG_MAPPING[tag];
                    scores[mapped.dim] = (scores[mapped.dim] || 0) + mapped.val;
                } else {
                    console.warn(`Warning: Unknown tag "${tag}" in question ${q.id}`);
                }
            });

            return {
                text: text,
                value: key,
                tags: tags,
                scores: scores
            };
        });

        return {
            id: q.id || `MAN_${String(index + 1).padStart(3, '0')}`,
            category: 'SITUATION',
            description: q.situation,
            options: options
        };
    });

    const fileContent = `export const SENTINEL_MANAGER_DATA = ${JSON.stringify(processedQuestions, null, 4)};`;

    fs.writeFileSync(OUTPUT_FILE, fileContent);
    console.log(`Successfully generated ${processedQuestions.length} questions in ${OUTPUT_FILE}`);

} catch (err) {
    console.error('Error processing Manager data:', err);
}
