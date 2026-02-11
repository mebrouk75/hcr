
import { DIRECTOR_SENTINEL_DATA } from '../src/data/director_sentinel_data.js';
import { SentinelEngine } from '../src/logic/SentinelEngine.js';
import fs from 'fs';

// Mock Config if needed or import it. 
// SentinelEngine imports it from ../data/sentinel_logic.json.
// We need to make sure the relative path in SentinelEngine works or we mock it.
// Since we are running from scripts/, ../src/logic/SentinelEngine.js imports ../data/sentinel_logic.json
// which resolves to ../src/data/sentinel_logic.json relative to the file. 
// This should work in Node if the file exists there.

const engine = new SentinelEngine();

// STRATEGY MAP
// Maps the User's "Risk Profiles" to the Test's "Internal Profiles" or "Trait Priorities"
const PROFILE_STRATEGIES = {
    "ROI_SOLEIL": {
        role: "DIRECTEUR",
        priorities: ["TYRAN", "VISIONNAIRE", "OPPORTUNISTE"],
        avoid: ["SAGE", "BUREAUCRATE", "RADAR"]
    }
};

function selectAnswer(question, strategy) {
    if (!question.options) return null;

    // 1. Direct Profile Match
    for (const priority of strategy.priorities) {
        const match = question.options.find(opt => opt.profile === priority);
        if (match) return match.value;
    }

    // 2. Fallback: Pick anything NOT in avoid list
    const validOptions = question.options.filter(opt => !strategy.avoid.includes(opt.profile));
    if (validOptions.length > 0) return validOptions[0].value;

    // 3. Last Resort: First option
    return question.options[0].value;
}

async function runTest(profileName) {
    console.log(`\n--- RUNNING TEST FOR: ${profileName} ---`);
    const strategy = PROFILE_STRATEGIES[profileName];
    if (!strategy) {
        console.error("Strategy not found");
        return;
    }

    let questions = [];
    if (strategy.role === "DIRECTEUR") {
        questions = DIRECTOR_SENTINEL_DATA.flatMap(section => section.items || []);
    }
    // Add other roles here...

    console.log(`Loaded ${questions.length} questions for ${strategy.role}`);

    const scores = {};
    for (const q of questions) {
        const answer = selectAnswer(q, strategy);
        if (answer) {
            scores[q.id] = answer;
        }
    }

    console.log(`Simulated ${Object.keys(scores).length} answers.`);

    // Run Evaluation
    try {
        const result = engine.evaluateCandidate(strategy.role, questions, scores);

        console.log("\n--- EVALUATION RESULT ---");
        console.log("Verdict:", result.verdict);
        console.log("Profile Type:", result.profileType);
        console.log("Survie Score:", result.scoreSurvie);
        console.log("Dimensions:", result.dimensions);
        console.log("Flags:", result.flags);

        // Save to file for user to inspect
        const filename = `result_${profileName.toLowerCase()}.json`;
        fs.writeFileSync(filename, JSON.stringify(result, null, 2));
        console.log(`\nResult saved to ${filename}`);

    } catch (error) {
        console.error("Error during evaluation:", error);
    }
}

// EXECUTE
runTest("ROI_SOLEIL");
