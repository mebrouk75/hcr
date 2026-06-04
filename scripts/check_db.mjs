import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const envContent = fs.readFileSync('.env', 'utf-8');
const envVars = {};
envContent.split('\n').forEach(line => {
    const parts = line.split('=');
    const key = parts[0]?.trim();
    const value = parts.slice(1).join('=').trim();
    if (key && value) {
        envVars[key] = value;
    }
});

const supabaseUrl = envVars['VITE_SUPABASE_URL'];
const supabaseKey = envVars['VITE_SUPABASE_ANON_KEY'];

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
    console.log("Recherche des tests dans la DB...");
    const { data: profiles, error: err1 } = await supabase.from('profiles').select('*').in('email', ['arthur.pur.1771702236@test.com', 'gordon.tox.1771702236@test.com']);
    console.log("Profils créés par l'automation :", profiles);

    if (profiles && profiles.length > 0) {
        const userIds = profiles.map(p => p.id);
        const { data: results, error: err2 } = await supabase.from('resultats_candidats').select('*').in('user_id', userIds);
        console.log("Résultats de tests trouvés en DB:", results?.length || 0);
        console.dir(results, { depth: null });
    }
}

check();
