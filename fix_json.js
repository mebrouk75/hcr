
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'director_source_part1.json');
let content = fs.readFileSync(filePath, 'utf8');

// Find the last question ID "Q095"
const lastQIndex = content.lastIndexOf('"id": "Q095"');
if (lastQIndex === -1) {
    console.error("Could not find Q095");
    process.exit(1);
}

// Find the end of Q095 object
// It ends with "reponses": { ... } }
// We can look for the closing brace of Q095.
// Since it's indented, we can look for the pattern of closing.
// Or just find the last "}" which matches the Q095 start.
// But easier: the file has appended garbage.
// The garbage is `] } }` repeated.
// So we can just find the *first* instance of `] } }` logic? No.

// Let's find the end of Q095 by regex or just known structure.
// Q095 ends with `            }` (indentation 12 spaces).
// Then `        }` (indentation 8 spaces) to close reponses.
// Then `    }` (indentation 4 spaces) to close Q095.

// Let's find the location of the *last* `                    "E": {` (Option E of Q095).
const optionE = content.lastIndexOf('"E": {');
const endOfOptionE = content.indexOf('}', optionE); // Closes E
const endOfReponses = content.indexOf('}', endOfOptionE + 1); // Closes reponses
const endOfQ095 = content.indexOf('}', endOfReponses + 1); // Closes Q095

// Truncate there and add closing
const cleanContent = content.substring(0, endOfQ095 + 1) + "\n    ]\n  }\n}";
fs.writeFileSync(filePath, cleanContent);
console.log("Fixed part1 json");
