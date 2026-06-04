
import fs from 'fs';
import { MBTI_DIRECTEUR_DATA } from '../src/data/mbti_directeur_data.js';
import { DIRECTOR_SENTINEL_DATA } from '../src/data/director_sentinel_data.js';
import { DIRECTOR_PHASE3_DATA } from '../src/data/director_phase3_data.js';

const artifactDir = '/Users/mehdiboussekine/.gemini/antigravity/brain/c650fefe-a40f-4ca7-8805-543ef2a896bd';

// 1. Export 60Q MBTI
const mbtiOutput = `${artifactDir}/directeur_tech_1_personality_60q.json`;
fs.writeFileSync(mbtiOutput, JSON.stringify(MBTI_DIRECTEUR_DATA, null, 2));
console.log(`[OK] Exported MBTI data to ${mbtiOutput}`);

// 2. Export Situational Test
const situationalOutput = `${artifactDir}/directeur_tech_2_situational_240q.json`;
fs.writeFileSync(situationalOutput, JSON.stringify(DIRECTOR_SENTINEL_DATA, null, 2));
console.log(`[OK] Exported Situational data to ${situationalOutput}`);

// 3. Export Phase 3 (Hardcore)
const phase3Output = `${artifactDir}/directeur_tech_3_hardcore_questions.json`;
fs.writeFileSync(phase3Output, JSON.stringify(DIRECTOR_PHASE3_DATA, null, 2));
console.log(`[OK] Exported Phase 3 data to ${phase3Output}`);
