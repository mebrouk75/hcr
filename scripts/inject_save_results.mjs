import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../src/Sentinel.jsx');

let content = fs.readFileSync(filePath, 'utf8');

// adding import
if (!content.includes("import { supabase } from './lib/supabase';")) {
  content = content.replace(
    "import SentinelEngineV52 from './logic/SentinelEngineV52';",
    "import SentinelEngineV52 from './logic/SentinelEngineV52';\nimport { supabase } from './lib/supabase';"
  );
}

const saveFunc = `
const saveResultsToSupabase = async (mappedResult, roleId) => {
    try {
        let authUser = (await supabase.auth.getUser()).data.user;
        let targetUserId = authUser ? authUser.id : "00000000-0000-0000-0000-000000000000";
        
        let verdictText = mappedResult.verdictColor === "text-emerald-500" ? "PERFORMANCE" : (mappedResult.verdictColor === "text-rose-500" ? "INCOMPATIBLE" : "STANDARD");

        const payload = {
            user_id: targetUserId,
            role_id: roleId,
            role_label: roleId.toUpperCase(),
            global_score: mappedResult.globalScore || 0,
            verdict: verdictText,
            dim_res: mappedResult.dimensions?.RES || 0,
            dim_emp: mappedResult.dimensions?.EMP || 0,
            dim_aut: mappedResult.dimensions?.AUT || 0,
            dim_int: mappedResult.dimensions?.INT || 0,
            dim_tox: mappedResult.dimensions?.TOX || 0,
            dim_ada: mappedResult.dimensions?.ADA || 0,
            top_traits: mappedResult.topTraits ? mappedResult.topTraits.map(t => t[0]) : [],
            profil: mappedResult.dominantProfile || mappedResult.profil_dominant || "STANDARD"
        };
        
        console.log("Saving to Supabase:", payload);
        const { data, error } = await supabase.from('resultats_candidats').insert(payload);
        if (error) throw error;
        
        // Save to local storage for dashboards that still rely on it
        localStorage.setItem('sentinel_results', JSON.stringify({
           roleLabel: payload.role_label,
           globalScore: payload.global_score,
           verdict: payload.verdict,
           verdictColor: mappedResult.verdictColor,
           dimensions: mappedResult.dimensions,
           topTraits: payload.top_traits,
           profil: payload.profil,
           testDone: true
        }));

    } catch (err) {
        console.error('Erreur sauvegarde résultats:', err);
    }
};
`;

if (!content.includes('const saveResultsToSupabase = async')) {
  content = content.replace("export default function Sentinel() {", saveFunc + "\nexport default function Sentinel() {");
}

const callHookRegex = /setEvaluation\(mappedResult\);\s*setShowResults\(true\);/;
if (content.match(callHookRegex) && !content.includes("saveResultsToSupabase(mappedResult")) {
  content = content.replace(callHookRegex, "setEvaluation(mappedResult);\n                    saveResultsToSupabase(mappedResult, selectedRole);\n                    setShowResults(true);");
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Injected saveResults to Supabase in Sentinel.jsx");
