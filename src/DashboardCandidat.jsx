import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, CheckCircle, X, Shield, Star, TrendingUp, Users, ChevronRight, Eye, Trash2, AlertCircle } from 'lucide-react';

// ─── MOCK RÉSULTATS (à remplacer par les vrais résultats du SentinelEngine) ──
// Dans l'intégration réelle, ces données viennent de localStorage ou d'un state global
const getMockResults = () => {
  const saved = localStorage.getItem('sentinel_results');
  if (saved) return JSON.parse(saved);
  return {
    roleLabel: "Manager",
    globalScore: 78,
    verdict: "STANDARD",
    verdictColor: "text-blue-400",
    dimensions: { RES: 82, EMP: 71, AUT: 65, INT: 79, TOX: 14, ADA: 68 },
    topTraits: ["RÉSILIENT", "INTÈGRE", "HUMAIN"],
    profil: "MANAGER TERRAIN",
    testDone: true,
  };
};

// ─── DIMENSION LABELS ────────────────────────────────────────────────────────
const DIM_LABELS = {
  RES: { label: "Résilience", desc: "Tenue sous pression" },
  EMP: { label: "Empathie", desc: "Intelligence relationnelle" },
  AUT: { label: "Leadership", desc: "Capacité à trancher" },
  INT: { label: "Intégrité", desc: "Fiabilité & rigueur" },
  TOX: { label: "Friction ⚠️", desc: "Indice de tension" },
  ADA: { label: "Agilité", desc: "Stratégie & vision" },
};

// ─── OFFRES MOCK compatibles (à remplacer par Supabase) ──────────────────────
const OFFRES_MOCK = [
  {
    id: 1,
    etablissement: "Brasserie Le Dôme",
    ville: "Paris 14e",
    poste: "Manager",
    compatible: 91,
    type: "CDI",
    salaire: "2 800 – 3 200€",
    nouveau: true,
  },
  {
    id: 2,
    etablissement: "Groupe Blanc Manger",
    ville: "Lyon 2e",
    poste: "Manager Adjoint",
    compatible: 84,
    type: "CDI",
    salaire: "2 400 – 2 700€",
    nouveau: false,
  },
  {
    id: 3,
    etablissement: "Hotel Le Provençal",
    ville: "Marseille",
    poste: "Manager",
    compatible: 76,
    type: "CDI",
    salaire: "2 600 – 3 000€",
    nouveau: true,
  },
];

// ─── COMPOSANT UPLOAD CV ─────────────────────────────────────────────────────
const UploadCV = ({ cv, onUpload, onDelete }) => {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState('');

  const handleFile = (file) => {
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
    onUpload({ name: file.name, size: (file.size / 1024).toFixed(0) + ' Ko', date: new Date().toLocaleDateString('fr-FR') });
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
        className={`border-2 border-dashed cursor-pointer transition-all p-10 text-center ${
          dragging ? 'border-[#C9A84C] bg-[#C9A84C]/5' : 'border-stone-800 hover:border-stone-600'
        }`}
      >
        <Upload size={28} className={`mx-auto mb-3 ${dragging ? 'text-[#C9A84C]' : 'text-stone-600'}`} />
        <p className="text-white font-black text-sm uppercase tracking-wide mb-1">
          Déposez votre CV ici
        </p>
        <p className="text-stone-600 text-xs font-medium">
          ou <span className="text-[#C9A84C] underline">cliquez pour sélectionner</span>
        </p>
        <p className="text-stone-700 text-[10px] font-medium mt-3">PDF ou Word · Max 5 Mo</p>
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

// ─── DASHBOARD PRINCIPAL ─────────────────────────────────────────────────────
const DashboardCandidat = () => {
  const navigate = useNavigate();
  const results = getMockResults();
  const [cv, setCv] = useState(null);
  const [activeTab, setActiveTab] = useState('profil'); // profil | offres | cv

  const dimEntries = Object.entries(results.dimensions);
  const verdictStyles = {
    'PERFORMANCE': 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
    'STANDARD': 'text-blue-400 border-blue-400/30 bg-blue-400/5',
    'LIMITE': 'text-amber-400 border-amber-400/30 bg-amber-400/5',
    'INCOMPATIBLE': 'text-rose-400 border-rose-400/30 bg-rose-400/5',
  };
  const verdictStyle = verdictStyles[results.verdict] || 'text-stone-400 border-stone-700 bg-stone-900';

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans">

      {/* Header */}
      <div className="bg-[#0A0A0A] border-b border-stone-900 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 border border-[#C9A84C]/50 flex items-center justify-center group-hover:border-[#C9A84C] transition-colors">
              <span className="text-[#C9A84C] font-black text-xs">R.</span>
            </div>
            <div className="leading-none">
              <span className="block text-white font-black text-sm tracking-tighter uppercase">La Relève</span>
              <span className="block text-[8px] font-bold tracking-[0.2em] uppercase text-[#C9A84C]/60">Espace Candidat</span>
            </div>
          </button>
          <button onClick={() => navigate('/')} className="text-stone-600 hover:text-stone-400 text-[10px] font-bold uppercase tracking-widest transition-colors">
            Déconnexion
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* Bandeau bienvenue */}
        <div className="bg-[#0f0e0a] border border-[#C9A84C]/20 px-6 py-4 mb-8 flex items-center justify-between">
          <div>
            <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.2em] block mb-0.5">Votre espace</span>
            <span className="text-white font-black text-lg uppercase">{results.roleLabel} · Profil {results.profil}</span>
          </div>
          <div className={`border px-4 py-2 ${verdictStyle}`}>
            <span className="text-xs font-black uppercase tracking-widest">{results.verdict}</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-stone-900 mb-8">
          {[
            { id: 'profil', label: 'Mon profil' },
            { id: 'offres', label: `Offres compatibles (${OFFRES_MOCK.length})` },
            { id: 'cv', label: cv ? '📄 CV uploadé' : '📎 Mon CV' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-xs font-black uppercase tracking-widest border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-[#C9A84C] text-[#C9A84C]'
                  : 'border-transparent text-stone-600 hover:text-stone-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── TAB PROFIL ── */}
        {activeTab === 'profil' && (
          <div className="space-y-6">
            {/* Score global */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0D0D0D] border border-stone-900 p-6 md:col-span-1">
                <span className="text-stone-600 text-[10px] font-black uppercase tracking-widest block mb-3">Score HCR Sentinel</span>
                <div className="flex items-end gap-2">
                  <span className="text-6xl font-black text-white leading-none">{results.globalScore}</span>
                  <span className="text-stone-600 text-2xl font-black mb-1">/100</span>
                </div>
                <div className="mt-4 h-1.5 bg-stone-900">
                  <div className="h-full bg-[#C9A84C] transition-all" style={{ width: `${results.globalScore}%` }} />
                </div>
              </div>

              <div className="bg-[#0D0D0D] border border-stone-900 p-6">
                <span className="text-stone-600 text-[10px] font-black uppercase tracking-widest block mb-3">Poste évalué</span>
                <span className="text-2xl font-black text-white uppercase">{results.roleLabel}</span>
                <span className="block text-stone-500 text-xs font-medium mt-2">Profil : {results.profil}</span>
              </div>

              <div className="bg-[#0D0D0D] border border-stone-900 p-6">
                <span className="text-stone-600 text-[10px] font-black uppercase tracking-widest block mb-3">Traits dominants</span>
                <div className="flex flex-col gap-2">
                  {results.topTraits.map((t, i) => (
                    <span key={i} className="inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
                      <span className="text-white text-xs font-black uppercase tracking-wide">{t}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-[#0D0D0D] border border-stone-900 p-6">
              <h2 className="text-white font-black text-xs uppercase tracking-widest mb-6">Profil par dimension</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                {dimEntries.map(([dim, score]) => (
                  <div key={dim}>
                    <div className="flex justify-between items-center mb-1.5">
                      <div>
                        <span className="text-white text-xs font-black uppercase tracking-wide">{DIM_LABELS[dim]?.label}</span>
                        <span className="text-stone-600 text-[10px] font-medium ml-2">{DIM_LABELS[dim]?.desc}</span>
                      </div>
                      <span className="text-white text-xs font-black">{score}/100</span>
                    </div>
                    <div className="h-2 bg-stone-900 rounded-none">
                      <div
                        className={`h-full transition-all ${
                          dim === 'TOX'
                            ? score > 50 ? 'bg-rose-500' : 'bg-amber-600/50'
                            : score >= 70 ? 'bg-[#C9A84C]' : score >= 45 ? 'bg-stone-500' : 'bg-rose-900'
                        }`}
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA si pas de CV */}
            {!cv && (
              <div className="bg-[#0f0e0a] border border-[#C9A84C]/25 p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center">
                    <Upload size={16} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <span className="text-white font-black text-sm block">Ajoutez votre CV pour être visible</span>
                    <span className="text-stone-500 text-xs font-medium">Sans CV, les recruteurs ne peuvent pas vous contacter.</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab('cv')}
                  className="border border-[#C9A84C] text-[#C9A84C] px-5 py-2.5 text-xs font-black uppercase tracking-widest hover:bg-[#C9A84C] hover:text-black transition-all whitespace-nowrap"
                >
                  Uploader mon CV →
                </button>
              </div>
            )}

            {/* CTA refaire le test */}
            <div className="flex justify-end">
              <button
                onClick={() => navigate('/choix-du-poste')}
                className="text-stone-600 hover:text-[#C9A84C] text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                Refaire le test pour un autre poste <ChevronRight size={13} />
              </button>
            </div>
          </div>
        )}

        {/* ── TAB OFFRES ── */}
        {activeTab === 'offres' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-stone-500 text-xs font-medium">
                {cv
                  ? `${OFFRES_MOCK.length} établissements compatibles avec votre profil`
                  : '⚠️ Uploadez votre CV pour que les recruteurs puissent vous contacter'
                }
              </p>
            </div>

            {OFFRES_MOCK.map(offre => (
              <div key={offre.id} className="bg-[#0D0D0D] border border-stone-900 hover:border-stone-700 transition-colors p-5 flex items-center justify-between gap-4 relative">
                {offre.nouveau && (
                  <div className="absolute -top-2 left-4 bg-[#C9A84C] text-black text-[9px] font-black uppercase tracking-widest px-2 py-0.5">
                    Nouveau
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-white font-black text-base">{offre.etablissement}</span>
                    <span className="border border-stone-800 text-stone-500 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5">{offre.type}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-medium text-stone-500">
                    <span>{offre.poste}</span>
                    <span>·</span>
                    <span>{offre.ville}</span>
                    <span>·</span>
                    <span className="text-[#C9A84C] font-bold">{offre.salaire}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-center">
                    <span className="block text-2xl font-black text-emerald-400">{offre.compatible}%</span>
                    <span className="block text-[9px] font-bold uppercase text-stone-600">compatible</span>
                  </div>
                  {cv ? (
                    <button className="bg-[#C9A84C] text-black px-4 py-2.5 text-[10px] font-black uppercase tracking-widest hover:bg-[#F0D080] transition-colors">
                      Postuler
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveTab('cv')}
                      className="border border-stone-700 text-stone-500 px-4 py-2.5 text-[10px] font-black uppercase tracking-widest hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                    >
                      + CV requis
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── TAB CV ── */}
        {activeTab === 'cv' && (
          <div className="max-w-xl space-y-6">
            <div>
              <h2 className="text-white font-black text-sm uppercase tracking-widest mb-1">Votre CV</h2>
              <p className="text-stone-500 text-xs font-medium leading-relaxed">
                Votre CV est partagé uniquement avec les recruteurs dont le profil est compatible avec le vôtre. Il n'est jamais visible publiquement.
              </p>
            </div>

            <UploadCV
              cv={cv}
              onUpload={(file) => setCv(file)}
              onDelete={() => setCv(null)}
            />

            <div className="bg-[#0D0D0D] border border-stone-900 p-5 space-y-3">
              <h3 className="text-white font-black text-xs uppercase tracking-widest">Votre confidentialité</h3>
              {[
                { icon: <Shield size={12}/>, text: "Votre CV est chiffré et stocké de façon sécurisée" },
                { icon: <Eye size={12}/>, text: "Visible uniquement par les recruteurs certifiés et compatibles" },
                { icon: <X size={12}/>, text: "Vous pouvez le supprimer à tout moment" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-stone-500">
                  <span className="text-[#C9A84C]/60">{item.icon}</span>
                  <span className="text-xs font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {cv && (
              <button
                onClick={() => setActiveTab('offres')}
                className="w-full bg-[#C9A84C] text-black py-3.5 font-black uppercase text-xs tracking-widest hover:bg-[#F0D080] transition-colors flex items-center justify-center gap-2"
              >
                Voir mes offres compatibles <ChevronRight size={14}/>
              </button>
            )}
          </div>
        )}

        {/* Note RGPD */}
        <div className="mt-12 flex items-center gap-2 text-stone-700 text-[10px] font-medium border-t border-stone-900 pt-6">
          <Shield size={11}/>
          <span>Données protégées · RGPD conforme · Votre profil est anonymisé auprès des recruteurs (prénom uniquement)</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCandidat;
