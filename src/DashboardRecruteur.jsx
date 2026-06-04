import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Star, FileText, ChevronDown, Shield, TrendingUp, Users, LogOut, Eye, X } from 'lucide-react';
import { calculateMatch } from './matching_config';

// ─── MOCK DATA candidats (à remplacer par Supabase plus tard) ────────────────
const MOCK_CANDIDATS = [
  {
    id: 1,
    prenom: "Samir",
    poste: "Manager",
    experience: "7 ans HCR",
    ville: "Paris 11e",
    disponible: "Immédiatement",
    scores: { EMP: 82, AUT: 65, INT: 78, RES: 90, ADA: 71, TOX: 12 },
    globalScore: 84,
    profil: "LEADER TERRAIN",
    topTraits: ["Résilient", "Intègre", "Humain"],
    compatible: 94,
    hasCv: true,
    nouveau: true,
  },
  {
    id: 2,
    prenom: "Inès",
    poste: "Directrice de site",
    experience: "12 ans HCR",
    ville: "Lyon 2e",
    disponible: "Dans 1 mois",
    scores: { EMP: 75, AUT: 88, INT: 90, RES: 82, ADA: 85, TOX: 8 },
    globalScore: 91,
    profil: "STRATÈGE HUMAINE",
    topTraits: ["Leadership", "Rigueur", "Vision"],
    compatible: 89,
    hasCv: true,
    nouveau: false,
  },
  {
    id: 3,
    prenom: "Karim",
    poste: "Chef de rang",
    experience: "4 ans HCR",
    ville: "Paris 8e",
    disponible: "Dans 2 semaines",
    scores: { EMP: 88, AUT: 52, INT: 70, RES: 76, ADA: 68, TOX: 6 },
    globalScore: 77,
    profil: "TALENT RELATIONNEL",
    topTraits: ["Empathique", "Service client", "Adaptable"],
    compatible: 81,
    hasCv: false,
    nouveau: true,
  },
  {
    id: 4,
    prenom: "Laura",
    poste: "Manager Adjoint",
    experience: "5 ans HCR",
    ville: "Bordeaux",
    disponible: "Dans 3 semaines",
    scores: { EMP: 71, AUT: 74, INT: 82, RES: 68, ADA: 79, TOX: 15 },
    globalScore: 80,
    profil: "MANAGER ÉQUILIBRÉ",
    topTraits: ["Organisée", "Ferme", "Loyale"],
    compatible: 76,
    hasCv: true,
    nouveau: false,
  },
  {
    id: 5,
    prenom: "Thomas",
    poste: "Barman",
    experience: "6 ans HCR",
    ville: "Paris 18e",
    disponible: "Immédiatement",
    scores: { EMP: 65, AUT: 60, INT: 75, RES: 88, ADA: 72, TOX: 20 },
    globalScore: 75,
    profil: "OPÉRATIONNEL SOLIDE",
    topTraits: ["Résilient", "Rapide", "Fiable"],
    compatible: 72,
    hasCv: true,
    nouveau: false,
  },
];

const POSTES_FILTER = ["Tous", "Directeur de site", "Manager", "Manager Adjoint", "Chef de rang", "Barman / Sommelier"];


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

// ─── COMPOSANT CARTE CANDIDAT ─────────────────────────────────────────────────
const CandidatCard = ({ candidat, onOpen }) => {
  const compatColor =
    candidat.compatible >= 90 ? "text-emerald-600 bg-emerald-50 border-emerald-200" :
    candidat.compatible >= 75 ? "text-[#C9A84C] bg-[#C9A84C]/10 border-[#C9A84C]/20" :
    "text-stone-600 bg-stone-50 border-stone-200";

  return (
    <div className="group relative bg-[#0D0D0D] border-2 border-stone-200 hover:border-stone-900 transition-all duration-200 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      {/* Badge nouveau */}
      {candidat.nouveau && (
        <div className="absolute -top-2 -right-2 bg-[#C9A84C] text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 z-10">
          Nouveau
        </div>
      )}

      <div className="p-5">
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div>
            {/* Avatar initiales */}
            <div className="w-12 h-12 bg-stone-900 text-white flex items-center justify-center font-black text-lg mb-3 rounded-sm">
              {candidat.prenom[0]}
            </div>
            <span className="block font-black text-stone-900 text-lg">{candidat.prenom}</span>
            <span className="block text-sm font-bold text-[#C9A84C] uppercase tracking-wide">{candidat.poste}</span>
          </div>
          {/* Score compatibilité */}
          <div className={`border px-3 py-1.5 text-center ${compatColor}`}>
            <span className="block text-2xl font-black">{candidat.compatible}%</span>
            <span className="block text-[10px] font-bold uppercase tracking-wide">compatible</span>
          </div>
        </div>

        {/* Infos */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span className="w-1.5 h-1.5 bg-stone-400 rounded-full" />
            {candidat.experience}
          </div>
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span className="w-1.5 h-1.5 bg-stone-400 rounded-full" />
            {candidat.ville}
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            Dispo : {candidat.disponible}
          </div>
        </div>

        {/* Traits */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {candidat.topTraits.map((t, i) => (
            <span key={i} className="text-[10px] font-black uppercase tracking-wide bg-stone-100 text-stone-600 px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>

        {/* Mini bar score global */}
        <div className="mb-4">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-wide text-stone-400 mb-1">
            <span>Score HCR Sentinel</span>
            <span>{candidat.globalScore}/100</span>
          </div>
          <div className="h-1.5 bg-stone-100 border border-stone-200">
            <div
              className="h-full bg-[#C9A84C] transition-all"
              style={{ width: `${candidat.globalScore}%` }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onOpen(candidat)}
            className="flex-1 bg-stone-900 text-white py-2.5 text-xs font-black uppercase tracking-widest hover:bg-[#C9A84C] transition-colors flex items-center justify-center gap-1.5"
          >
            <Eye size={12} />
            Voir le profil
          </button>
          {candidat.hasCv && (
            <button className="px-3 py-2.5 border-2 border-stone-200 text-stone-500 hover:border-stone-900 hover:text-stone-900 transition-colors">
              <FileText size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── MODAL PROFIL COMPLET ─────────────────────────────────────────────────────
const ProfilModal = ({ candidat, onClose }) => {
  if (!candidat) return null;

  const dimLabels = {
    EMP: "Empathie", AUT: "Leadership", INT: "Intégrité",
    RES: "Résilience", ADA: "Agilité", TOX: "Friction ⚠️"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-[#0D0D0D] border-2 border-stone-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-lg max-h-[90vh] overflow-y-auto">

        {/* Header modal */}
        <div className="bg-stone-900 text-white p-5 flex items-start justify-between sticky top-0">
          <div>
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest block mb-1">Profil candidat</span>
            <h2 className="text-2xl font-black uppercase">{candidat.prenom}</h2>
            <span className="text-stone-400 text-sm font-bold">{candidat.poste} · {candidat.ville}</span>
          </div>
          <button onClick={onClose} className="text-stone-400 hover:text-white transition-colors mt-1">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Score compat */}
          <div className="flex gap-4">
            <div className="flex-1 bg-emerald-50 border-2 border-emerald-200 p-4 text-center">
              <span className="block text-3xl font-black text-emerald-600">{candidat.compatible}%</span>
              <span className="block text-xs font-bold uppercase text-emerald-700 tracking-wide">Compatibilité</span>
            </div>
            <div className="flex-1 bg-[#C9A84C]/10 border-2 border-[#C9A84C]/20 p-4 text-center">
              <span className="block text-3xl font-black text-[#C9A84C]">{candidat.globalScore}</span>
              <span className="block text-xs font-bold uppercase text-orange-700 tracking-wide">Score HCR</span>
            </div>
          </div>

          {/* Profil type */}
          <div className="bg-stone-900 text-white p-4">
            <span className="text-stone-400 text-xs font-bold uppercase tracking-widest block mb-1">Profil Sentinel</span>
            <span className="text-xl font-black uppercase">{candidat.profil}</span>
          </div>

          {/* Dimensions */}
          <div>
            <h3 className="font-black uppercase text-xs tracking-widest text-stone-500 mb-3">Dimensions psychométriques</h3>
            <div className="space-y-2">
              {Object.entries(candidat.scores).map(([dim, score]) => (
                <div key={dim}>
                  <div className="flex justify-between text-xs font-bold mb-0.5">
                    <span className="text-stone-700 uppercase">{dimLabels[dim]}</span>
                    <span className="text-stone-900">{score}/100</span>
                  </div>
                  <div className="h-2 bg-stone-100">
                    <div
                      className={`h-full ${dim === 'TOX' ? score > 40 ? 'bg-rose-500' : 'bg-[#0A0A0A]mber-300' : score >= 70 ? 'bg-emerald-500' : score >= 45 ? 'bg-[#C9A84C]/80' : 'bg-rose-300'}`}
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Disponibilité */}
          <div className="bg-stone-50 border border-stone-200 p-4">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-stone-400 text-xs font-bold uppercase tracking-wide block mb-0.5">Expérience</span>
                <span className="font-black text-stone-900">{candidat.experience}</span>
              </div>
              <div>
                <span className="text-stone-400 text-xs font-bold uppercase tracking-wide block mb-0.5">Disponible</span>
                <span className="font-black text-emerald-600">{candidat.disponible}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <button className="w-full bg-[#C9A84C] text-white py-3.5 font-black uppercase text-xs tracking-widest border-2 border-stone-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              📬 Contacter ce candidat
            </button>
            {candidat.hasCv && (
              <button className="w-full bg-[#0D0D0D] text-stone-900 py-3 font-black uppercase text-xs tracking-widest border-2 border-stone-300 hover:border-stone-900 transition-colors flex items-center justify-center gap-2">
                <FileText size={14} />
                Télécharger le CV
              </button>
            )}
          </div>

          <p className="text-[10px] text-stone-400 font-medium text-center">
            🔒 Ce profil est confidentiel · Les données sont protégées RGPD
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── DASHBOARD PRINCIPAL ──────────────────────────────────────────────────────
const DashboardRecruteur = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [posteFilter, setPosteFilter] = useState('Tous');
  const [selectedCandidat, setSelectedCandidat] = useState(null);
  const [sortBy, setSortBy] = useState('compatible');

  const enrichedCandidates = getEnrichedCandidates();
  const filtered = enrichedCandidates
    .filter(c => {
      const matchSearch = c.prenom.toLowerCase().includes(search.toLowerCase()) ||
        c.poste.toLowerCase().includes(search.toLowerCase()) ||
        c.ville.toLowerCase().includes(search.toLowerCase());
      const matchPoste = posteFilter === 'Tous' || c.poste.toLowerCase().includes(posteFilter.toLowerCase().split(' ')[0]);
      return matchSearch && matchPoste;
    })
    .sort((a, b) => {
      if (sortBy === 'compatible') return b.compatible - a.compatible;
      if (sortBy === 'score') return b.globalScore - a.globalScore;
      if (sortBy === 'dispo') return a.disponible.localeCompare(b.disponible);
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#F5F5F0] font-sans">

      {/* Header */}
      <div className="bg-stone-900 border-b-4 border-[#C9A84C] px-6 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              onClick={() => navigate('/')}
              className="bg-[#0D0D0D] text-stone-900 w-8 h-8 flex items-center justify-center font-black text-sm rounded-sm cursor-pointer"
            >
              R.
            </div>
            <div>
              <span className="text-white font-black uppercase tracking-tight block text-sm">Sentinel HCR</span>
              <span className="text-orange-400 text-[10px] font-bold uppercase tracking-widest">Espace Recruteur</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-emerald-900/50 border border-emerald-600 px-3 py-1.5">
              <Shield size={12} className="text-emerald-400" />
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wide">Matching activé</span>
            </div>
            <button
              onClick={() => navigate('/')}
              className="text-stone-400 hover:text-white transition-colors"
              title="Déconnexion"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Stats rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Profils compatibles", value: enrichedCandidates.length, icon: <Users size={18} />, color: "text-[#C9A84C]" },
            { label: "Nouveaux ce mois", value: enrichedCandidates.filter(c => c.nouveau).length, icon: <Star size={18} />, color: "text-emerald-600" },
            { label: "Compatibilité moy.", value: `${Math.round(enrichedCandidates.reduce((a, c) => a + c.compatible, 0) / Math.max(1, enrichedCandidates.length))}%`, icon: <TrendingUp size={18} />, color: "text-blue-600" },
            { label: "CV disponibles", value: enrichedCandidates.filter(c => c.hasCv).length, icon: <FileText size={18} />, color: "text-purple-600" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#0D0D0D] border-2 border-stone-200 p-4 hover:border-stone-900 transition-colors">
              <div className={`mb-2 ${stat.color}`}>{stat.icon}</div>
              <div className="text-2xl font-black text-stone-900">{stat.value}</div>
              <div className="text-xs font-bold text-stone-400 uppercase tracking-wide mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filtres */}
        <div className="bg-[#0D0D0D] border-2 border-stone-200 p-4 mb-6 flex flex-col md:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Rechercher par prénom, poste, ville..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border-2 border-stone-200 focus:border-stone-900 outline-none text-sm font-medium text-stone-900 bg-[#0D0D0D] transition-colors"
            />
          </div>

          {/* Filtre poste */}
          <div className="relative">
            <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <select
              value={posteFilter}
              onChange={(e) => setPosteFilter(e.target.value)}
              className="pl-8 pr-8 py-2.5 border-2 border-stone-200 focus:border-stone-900 outline-none text-sm font-bold text-stone-900 bg-[#0D0D0D] appearance-none cursor-pointer"
            >
              {POSTES_FILTER.map(p => <option key={p}>{p}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
          </div>

          {/* Tri */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 border-2 border-stone-200 focus:border-stone-900 outline-none text-sm font-bold text-stone-900 bg-[#0D0D0D] appearance-none cursor-pointer pr-8"
            >
              <option value="compatible">Trier : Compatibilité</option>
              <option value="score">Trier : Score HCR</option>
              <option value="dispo">Trier : Disponibilité</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
          </div>
        </div>

        {/* Résultats */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-stone-500 uppercase tracking-wide">
            {filtered.length} profil{filtered.length > 1 ? 's' : ''} compatible{filtered.length > 1 ? 's' : ''}
          </span>
          {posteFilter !== 'Tous' && (
            <button
              onClick={() => setPosteFilter('Tous')}
              className="text-xs font-bold text-[#C9A84C] hover:text-orange-700 underline"
            >
              Effacer le filtre
            </button>
          )}
        </div>

        {/* Grille candidats */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(c => (
              <CandidatCard key={c.id} candidat={c} onOpen={setSelectedCandidat} />
            ))}
          </div>
        ) : (
          <div className="bg-[#0D0D0D] border-2 border-stone-200 p-12 text-center">
            <Users size={32} className="text-stone-300 mx-auto mb-3" />
            <p className="font-black text-stone-400 uppercase tracking-wide">Aucun profil trouvé</p>
            <p className="text-stone-400 text-sm font-medium mt-1">Modifiez vos critères de recherche</p>
          </div>
        )}

        {/* Note RGPD */}
        <div className="mt-8 bg-stone-100 border border-stone-200 p-4 flex items-start gap-3">
          <Shield size={16} className="text-stone-400 mt-0.5 shrink-0" />
          <p className="text-xs font-medium text-stone-500 leading-relaxed">
            Les profils présentés sont anonymisés (prénom uniquement). L'identité complète et le CV sont 
            accessibles uniquement après démarrage d'une mise en relation. Toutes les données sont 
            traitées conformément au RGPD. Les candidats ont consenti à leur visibilité sur la plateforme.
          </p>
        </div>
      </div>

      {/* Modal profil */}
      {selectedCandidat && (
        <ProfilModal candidat={selectedCandidat} onClose={() => setSelectedCandidat(null)} />
      )}
    </div>
  );
};

export default DashboardRecruteur;
