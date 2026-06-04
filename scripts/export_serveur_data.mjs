
import fs from 'fs';
import { MBTI_SERVEUR_DATA } from '../src/data/mbti_serveur_data.js';
import { FULL_SERVEUR } from '../src/data/serveur_data_v2.js';

const artifactDir = '/Users/mehdiboussekine/.gemini/antigravity/brain/c650fefe-a40f-4ca7-8805-543ef2a896bd';

// 1. Export 60Q MBTI
const mbtiOutput = `${artifactDir}/serveur_tech_1_personality_60q.json`;
fs.writeFileSync(mbtiOutput, JSON.stringify(MBTI_SERVEUR_DATA, null, 2));
console.log(`[OK] Exported MBTI data to ${mbtiOutput}`);

// 2. Export 100Q Situational
const situationalOutput = `${artifactDir}/serveur_tech_2_situational_100q.json`;
fs.writeFileSync(situationalOutput, JSON.stringify(FULL_SERVEUR, null, 2));
console.log(`[OK] Exported Situational data to ${situationalOutput}`);
