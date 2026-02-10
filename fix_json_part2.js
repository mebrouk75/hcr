
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'director_source_part2.json');
let content = fs.readFileSync(filePath, 'utf8');

// Find the last "]"
const lastBracketIndex = content.lastIndexOf(']');
if (lastBracketIndex === -1) {
    console.error("Could not find closing bracket in part2");
    process.exit(1);
}

// Truncate there and add newline
const cleanContent = content.substring(0, lastBracketIndex + 1);
fs.writeFileSync(filePath, cleanContent);
console.log("Fixed part2 json");
