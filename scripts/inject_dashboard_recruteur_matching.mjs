import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../src/DashboardRecruteur.jsx');

let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes("import { calculateMatch } from './matching_config';")) {
  content = content.replace(
    "import { Search, Filter, Star, FileText, ChevronDown, Shield, TrendingUp, Users, LogOut, Eye, X } from 'lucide-react';",
    "import { Search, Filter, Star, FileText, ChevronDown, Shield, TrendingUp, Users, LogOut, Eye, X } from 'lucide-react';\nimport { calculateMatch } from './matching_config';"
  );
}

const recruteurMock = `
const getEnrichedCandidates = () => {
  let recruteurDims = { RES: 70, EMP: 60, AUT: 75, INT: 80, TOX: 25, ADA: 72 };
  try {
    const saved = localStorage.getItem('sentinel_results');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.dimensions) recruteurDims = parsed.dimensions;
    }
  } catch (e) {}

  return MOCK_CANDIDATS.map(cand => {
    const match = calculateMatch(cand.scores, recruteurDims);
    return {
      ...cand,
      compatible: match.score,
      matchData: match
    };
  });
};
`;

if (!content.includes('const getEnrichedCandidates = () => {')) {
  content = content.replace('// ─── COMPOSANT CARTE CANDIDAT ─────────────────────────────────────────────────', recruteurMock + '\n// ─── COMPOSANT CARTE CANDIDAT ─────────────────────────────────────────────────');
  
  // Also replace MOCK_CANDIDATS references in DashboardRecruteur
  content = content.replace(
    '  const filtered = MOCK_CANDIDATS',
    '  const enrichedCandidates = getEnrichedCandidates();\n  const filtered = enrichedCandidates'
  );
  
  content = content.replace(
    'MOCK_CANDIDATS.length',
    'enrichedCandidates.length'
  );
  content = content.replace(
    'MOCK_CANDIDATS.filter(c => c.nouveau).length',
    'enrichedCandidates.filter(c => c.nouveau).length'
  );
  content = content.replace(
    'MOCK_CANDIDATS.reduce((a, c) => a + c.compatible, 0) / MOCK_CANDIDATS.length',
    'enrichedCandidates.reduce((a, c) => a + c.compatible, 0) / Math.max(1, enrichedCandidates.length)'
  );
  content = content.replace(
    'MOCK_CANDIDATS.filter(c => c.hasCv).length',
    'enrichedCandidates.filter(c => c.hasCv).length'
  );
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Injected matching logic successfully in DashboardRecruteur.jsx");
