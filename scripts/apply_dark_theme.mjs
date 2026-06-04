import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesToProcess = [
  path.join(__dirname, '../src/Sentinel.jsx'),
  path.join(__dirname, '../src/RecruteurTest.jsx'),
  path.join(__dirname, '../src/screens/SentinelDirecteur.jsx'),
  path.join(__dirname, '../src/screens/UnifiedResultView.jsx'),
  path.join(__dirname, '../src/DashboardCandidat.jsx'),
  path.join(__dirname, '../src/DashboardRecruteur.jsx')
];

const replacements = [
  // Backgrounds
  { regex: /bg-slate-50/g, replacement: 'bg-[#0A0A0A]' },
  { regex: /bg-[#f8fafc]/g, replacement: 'bg-[#0A0A0A]' },
  { regex: /bg-\[#FAfaf9\]/g, replacement: 'bg-[#0A0A0A]' },
  { regex: /bg-white/g, replacement: 'bg-[#0D0D0D]' },
  { regex: /bg-slate-100/g, replacement: 'bg-[#111111]' },
  { regex: /bg-slate-800/g, replacement: 'bg-stone-900' },
  { regex: /bg-slate-900/g, replacement: 'bg-black' },
  
  // Oranges to Gold
  { regex: /bg-orange-600/g, replacement: 'bg-[#C9A84C]' },
  { regex: /bg-orange-500/g, replacement: 'bg-[#C9A84C]' },
  { regex: /bg-orange-400/g, replacement: 'bg-[#C9A84C]/80' },
  { regex: /text-orange-600/g, replacement: 'text-[#C9A84C]' },
  { regex: /text-orange-500/g, replacement: 'text-[#C9A84C]' },
  { regex: /border-orange-600/g, replacement: 'border-[#C9A84C]' },
  { regex: /border-orange-500/g, replacement: 'border-[#C9A84C]/50' },
  { regex: /border-orange-200/g, replacement: 'border-[#C9A84C]/20' },
  { regex: /bg-orange-50/g, replacement: 'bg-[#C9A84C]/10' },
  { regex: /ring-orange-500/g, replacement: 'ring-[#C9A84C]' },
  { regex: /from-orange-500/g, replacement: 'from-[#C9A84C]' },
  { regex: /to-orange-600/g, replacement: 'to-[#A68A3D]' },

  // Texts
  { regex: /text-slate-900/g, replacement: 'text-white' },
  { regex: /text-slate-800/g, replacement: 'text-stone-200' },
  { regex: /text-slate-700/g, replacement: 'text-stone-300' },
  { regex: /text-slate-600/g, replacement: 'text-stone-400' },
  { regex: /text-slate-500/g, replacement: 'text-stone-500' },
  { regex: /text-slate-400/g, replacement: 'text-stone-500' },

  // Borders
  { regex: /border-slate-200/g, replacement: 'border-stone-800' },
  { regex: /border-slate-300/g, replacement: 'border-stone-700' },
  { regex: /border-slate-400/g, replacement: 'border-stone-700' },
  { regex: /border-slate-800/g, replacement: 'border-stone-800' },

  // SENTINEL_THEME object
  { regex: /bg: "#f8fafc"/g, replacement: 'bg: "#0A0A0A"' },
  { regex: /card: "#ffffff"/g, replacement: 'card: "#0D0D0D"' },
  { regex: /text: "#646f88ff"/g, replacement: 'text: "#ffffff"' },
  { regex: /accent: "#f97316"/g, replacement: 'accent: "#C9A84C"' },
  { regex: /textMuted: "#64748b"/g, replacement: 'textMuted: "#a8a29e"' },
  { regex: /border: "#e2e8f0"/g, replacement: 'border: "#292524"' }
];

let totalChanged = 0;

filesToProcess.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  replacements.forEach(rep => {
    content = content.replace(rep.regex, rep.replacement);
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${path.basename(file)} for dark theme.`);
    totalChanged++;
  }
});

console.log(`Total files updated: ${totalChanged}`);
