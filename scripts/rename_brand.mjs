import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx') || dirFile.endsWith('.js') || dirFile.endsWith('.md')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
};

const srcDir = path.join(__dirname, '../src');
const filesToProcess = walkSync(srcDir);

let totalChanged = 0;

filesToProcess.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Case insensitive global replace
  content = content.replace(/la relève/gi, 'ADN HCR');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
    totalChanged++;
  }
});

console.log(`Total files updated: ${totalChanged}`);
