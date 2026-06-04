import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../src/LaRelevePage.jsx');

let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  "import { useNavigate } from 'react-router-dom';", 
  "import { useNavigate } from 'react-router-dom';\nimport SiteNavbar from './SiteNavbar';\nimport SiteFooter from './SiteFooter';"
);

// Remove specific sections using Regex matching the comment boundaries
content = content.replace(/\/\/ ─── NAVBAR ─+[\s\S]*?(?=\/\/ ─── HERO ─+)/, '');
content = content.replace(/\/\/ ─── MÉTHODE ─+[\s\S]*?(?=\/\/ ─── TARIFS ─+)/, '');
content = content.replace(/\/\/ ─── TARIFS ─+[\s\S]*?(?=\/\/ ─── SECTION DÉMO \/ CONTACT ─+)/, '');
content = content.replace(/\/\/ ─── FOOTER ─+[\s\S]*?(?=\/\/ ─── PAGE ─+)/, '');

// Update the main render 
content = content.replace('<Navbar/>', '<SiteNavbar/>');
content = content.replace('    <Methode/>\n', '');
content = content.replace('    <Tarifs/>\n', '');
content = content.replace('<Footer/>', '<SiteFooter/>');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully cleaned LaRelevePage.jsx");
