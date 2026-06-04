import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileCandidat = path.join(__dirname, '../src/DashboardCandidat.jsx');
const fileRecruteur = path.join(__dirname, '../src/DashboardRecruteur.jsx');
const fileTest = path.join(__dirname, '../src/RecruteurTest.jsx');

if (fs.existsSync(fileCandidat)) {
  let content = fs.readFileSync(fileCandidat, 'utf8');
  content = content.replace(/TOX:\s*{\s*label:\s*"[A-Za-z0-9\s⚠️]+"/g, 'TOX: { label: "Friction"');
  content = content.replace(/TOX:\s*{\s*label:\s*'[^']+'/g, "TOX: { label: 'Friction'");
  // Or manually inject if it's the exact string:
  content = content.replace('TOX: { label: "Friction ⚠️", desc: "Indice de tension" },', 'TOX: { label: "Friction", desc: "Indicateur de tension relationnelle", positive: false },');
  fs.writeFileSync(fileCandidat, content, 'utf8');
}

if (fs.existsSync(fileRecruteur)) {
  let content = fs.readFileSync(fileRecruteur, 'utf8');
  content = content.replace(/label:\s*"Toxique"/g, 'label: "Friction"');
  content = content.replace(/label:\s*"Toxique ⚠️"/g, 'label: "Friction"');
  fs.writeFileSync(fileRecruteur, content, 'utf8');
}

if (fs.existsSync(fileTest)) {
  let content = fs.readFileSync(fileTest, 'utf8');
  content = content.replace(/TOX:\s*"Indice de friction ⚠️"/g, 'TOX: "Friction relationnelle"');
  content = content.replace(/TOX:\s*"Toxique"/g, 'TOX: "Friction relationnelle"');
  content = content.replace(/TOX:\s*'Toxique'/g, "TOX: 'Friction relationnelle'");
  fs.writeFileSync(fileTest, content, 'utf8');
}
console.log("Renamed TOX -> Friction in UI");
