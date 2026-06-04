import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../src/DashboardCandidat.jsx');

let content = fs.readFileSync(filePath, 'utf8');

// adding imports
if (!content.includes("import { supabase } from './lib/supabase';")) {
  content = content.replace(
    "import { Upload, FileText, CheckCircle, X, Shield, Star, TrendingUp, Users, ChevronRight, Eye, Trash2, AlertCircle } from 'lucide-react';",
    "import { Upload, FileText, CheckCircle, X, Shield, Star, TrendingUp, Users, ChevronRight, Eye, Trash2, AlertCircle, Loader2 } from 'lucide-react';\nimport { supabase } from './lib/supabase';"
  );
}

// inserting uploadCV function before // ─── COMPOSANT UPLOAD CV
const uploadFunc = `

// ─── LOGIQUE D'UPLOAD SUPABASE ───────────────────────────────────────────────
const uploadCV = async (file, userId) => {
  const filePath = \`\${userId}/\${Date.now()}_\${file.name}\`;
  
  const { error: storageError } = await supabase.storage
    .from('cvs')
    .upload(filePath, file);
  
  if (storageError) throw storageError;
  
  const { data, error } = await supabase
    .from('cvs')
    .insert({
      user_id: userId,
      filename: file.name,
      file_path: filePath,
      file_size: file.size,
      visible: true,
    })
    .select();
  
  if (error) throw error;
  return data;
};

// ───`;
if (!content.includes('const uploadCV = async')) {
  content = content.replace('// ─── COMPOSANT UPLOAD CV', uploadFunc + " COMPOSANT UPLOAD CV");
}

// replacing UploadCV component
const oldUploadCVRegex = /const UploadCV = \(\{ cv, onUpload, onDelete \}\) => \{[\s\S]*?(?=\/\/ ─── DASHBOARD PRINCIPAL)/;
const newUploadCV = `const UploadCV = ({ cv, onUpload, onDelete }) => {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFile = async (file) => {
    setError('');
    if (!file) return;
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(file.type)) {
      setError('Format non accepté. PDF ou Word uniquement.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('Fichier trop lourd. Maximum 5 Mo.');
      return;
    }
    
    setLoading(true);
    try {
      let authUser = (await supabase.auth.getUser()).data.user;
      let targetUserId = authUser ? authUser.id : "00000000-0000-0000-0000-000000000000";

      await uploadCV(file, targetUserId);
      onUpload({ name: file.name, size: (file.size / 1024).toFixed(0) + ' Ko', date: new Date().toLocaleDateString('fr-FR') });
    } catch (err) {
      console.error(err);
      setError("Échec de l'upload. Base de données non connectée ou authentification manquante.");
    } finally {
      setLoading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  if (cv) {
    return (
      <div className="border-2 border-[#C9A84C]/40 bg-[#C9A84C]/5 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#C9A84C]/20 flex items-center justify-center">
              <FileText size={18} className="text-[#C9A84C]" />
            </div>
            <div>
              <span className="block text-white font-black text-sm">{cv.name}</span>
              <span className="block text-stone-500 text-xs font-medium mt-0.5">{cv.size} · Uploadé le {cv.date}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle size={14} />
              <span className="text-xs font-bold">Visible</span>
            </div>
            <button onClick={onDelete} className="ml-4 text-stone-600 hover:text-rose-400 transition-colors">
              <Trash2 size={15} />
            </button>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-stone-800 flex items-center justify-between">
          <span className="text-stone-600 text-xs font-medium">Votre CV est partagé uniquement avec les recruteurs compatibles</span>
          <button
            onClick={() => inputRef.current?.click()}
            className="text-[#C9A84C] text-xs font-bold uppercase tracking-wide hover:underline"
          >
            Remplacer
          </button>
        </div>
        <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={e => handleFile(e.target.files[0])} />
      </div>
    );
  }

  return (
    <div>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={\`border-2 border-dashed cursor-pointer transition-all p-10 text-center relative \${
          dragging ? 'border-[#C9A84C] bg-[#C9A84C]/5' : 'border-stone-800 hover:border-stone-600'
        } \${loading ? 'opacity-50 pointer-events-none' : ''}\`}
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center">
            <Loader2 className="animate-spin text-[#C9A84C] mb-3" size={28} />
            <p className="text-[#C9A84C] font-black text-sm uppercase tracking-wide">Upload en cours...</p>
          </div>
        ) : (
          <>
            <Upload size={28} className={\`mx-auto mb-3 \${dragging ? 'text-[#C9A84C]' : 'text-stone-600'}\`} />
            <p className="text-white font-black text-sm uppercase tracking-wide mb-1">
              Déposez votre CV ici
            </p>
            <p className="text-stone-600 text-xs font-medium">
              ou <span className="text-[#C9A84C] underline">cliquez pour sélectionner</span>
            </p>
            <p className="text-stone-700 text-[10px] font-medium mt-3">PDF ou Word · Max 5 Mo</p>
          </>
        )}
      </div>
      {error && (
        <div className="flex items-center gap-2 mt-2 text-rose-400">
          <AlertCircle size={13} />
          <span className="text-xs font-bold">{error}</span>
        </div>
      )}
      <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={e => handleFile(e.target.files[0])} />
    </div>
  );
};

`;

content = content.replace(oldUploadCVRegex, newUploadCV);
fs.writeFileSync(filePath, content, 'utf8');

console.log("Injected uploadCV logic successfully.");
