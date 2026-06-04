import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { QUESTIONS_RH, calculateRHScore, RH_DIM_LABELS } from './RHEngine';

const LIKERT_LABELS = [
  { value: 1, label: "Pas du tout", color: "bg-rose-500" },
  { value: 2, label: "Plutôt non", color: "bg-[#C9A84C]/80" },
  { value: 3, label: "Neutre", color: "bg-stone-400" },
  { value: 4, label: "Plutôt oui", color: "bg-emerald-400" },
  { value: 5, label: "Tout à fait", color: "bg-emerald-600" },
];

const RHTest = () => {
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [animating, setAnimating] = useState(false);

  const sections = [...new Set(QUESTIONS_RH.map(q => RH_DIM_LABELS[q.dim]?.label || q.dim))];
  const q = QUESTIONS_RH[currentQ];
  const currentSection = RH_DIM_LABELS[q?.dim]?.label || q?.dim;
  const sectionIndex = sections.indexOf(currentSection);
  const progress = Math.round(((currentQ) / QUESTIONS_RH.length) * 100);

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [q.id]: value };
    setAnswers(newAnswers);

    if (currentQ < QUESTIONS_RH.length - 1) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentQ(prev => prev + 1);
        setAnimating(false);
      }, 200);
    } else {
      // Calcul final
      const res = calculateRHScore(newAnswers);
      setResult(res);
    }
  };

  const goBack = () => {
    if (currentQ > 0) setCurrentQ(prev => prev - 1);
  };

  // ── RÉSULTATS ──
  if (result) {
    return (
      <div className="min-h-screen bg-[#F5F5F0] font-sans">
        {/* Header */}
        <div className="bg-stone-900 border-b-4 border-[#C9A84C] px-6 py-5 flex items-center gap-3">
          <div className="bg-[#0D0D0D] text-stone-900 w-8 h-8 flex items-center justify-center font-black text-sm rounded-sm">R.</div>
          <span className="text-white font-black uppercase tracking-tight text-lg">Sentinel HCR</span>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Titre résultat */}
          <div className={`border-2 border-stone-900 p-8 mb-6 ${result.compatible ? 'bg-[#0D0D0D]' : 'bg-rose-50'}`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full shrink-0 ${result.compatible ? 'bg-emerald-100' : 'bg-rose-100'}`}>
                {result.compatible
                  ? <CheckCircle size={24} className="text-emerald-600" />
                  : <AlertTriangle size={24} className="text-rose-600" />
                }
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-stone-500 block mb-1">
                  Votre profil managérial
                </span>
                <h1 className="text-3xl font-black uppercase text-stone-900 mb-2">
                  {result.profil}
                </h1>
                <p className={`font-bold text-sm ${result.compatible ? 'text-emerald-700' : 'text-rose-700'}`}>
                  {result.compatible ? "✅ Environnement sain — matching activé" : (result.blocageRaison || result.profilDesc)}
                </p>
              </div>
            </div>
          </div>

          {/* Score global */}
          <div className="bg-stone-900 text-white p-6 border-2 border-stone-900 mb-6 flex items-center justify-between">
            <div>
              <span className="text-stone-400 text-xs font-bold uppercase tracking-widest block mb-1">Score ADN</span>
              <span className="text-5xl font-black">{result.globalScore}</span>
              <span className="text-stone-400 text-xl font-bold">/100</span>
            </div>
            <div className="text-right">
              <span className="text-stone-400 text-xs font-bold uppercase tracking-widest block mb-1">Statut matching</span>
              <span className={`text-lg font-black uppercase ${result.compatible ? 'text-emerald-400' : 'text-rose-400'}`}>
                {result.compatible ? '🟢 Activé' : '🔴 Bloqué'}
              </span>
            </div>
          </div>

          {/* Radar des dimensions */}
          <div className="bg-[#0D0D0D] border-2 border-stone-900 p-6 mb-6">
            <h2 className="font-black uppercase text-stone-900 text-sm tracking-widest mb-5">
              Profil par dimension
            </h2>
            <div className="space-y-3">
              {Object.entries(result.dimensions).map(([dim, score]) => (
                <div key={dim}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-stone-700 uppercase">{RH_DIM_LABELS[dim]?.label || dim}</span>
                    <span className="text-xs font-black text-stone-900">{score}/100</span>
                  </div>
                  <div className="h-3 bg-stone-100 border border-stone-200">
                    <div
                      className={`h-full transition-all duration-700 ${dim === 'TOX'
                        ? score > 60 ? 'bg-rose-500' : 'bg-orange-400'
                        : score >= 70 ? 'bg-emerald-500' : score >= 40 ? 'bg-[#C9A84C]/80' : 'bg-rose-400'
                        }`}
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            {result.compatible && (
              <button
                onClick={() => navigate('/choix-du-poste')}
                className="flex-1 bg-[#C9A84C] text-white py-4 font-black uppercase text-xs tracking-widest border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
              >
                Accéder aux profils <ArrowRight size={16} />
              </button>
            )}
            <button
              onClick={() => navigate('/')}
              className="flex-1 bg-[#0D0D0D] text-stone-900 py-4 font-black uppercase text-xs tracking-widest border-2 border-stone-900 hover:bg-stone-100 transition-colors"
            >
              Retour à l'accueil
            </button>
          </div>

          <p className="text-center text-xs text-stone-400 font-medium mt-6">
            🔒 Ces résultats sont confidentiels et protégés · RGPD conforme
          </p>
        </div>
      </div>
    );
  }

  // ── TEST EN COURS ──
  return (
    <div className="min-h-screen bg-[#F5F5F0] font-sans flex flex-col">
      {/* Header */}
      <div className="bg-stone-900 border-b-2 border-stone-700 px-6 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-[#0D0D0D] text-stone-900 w-8 h-8 flex items-center justify-center font-black text-sm rounded-sm">R.</div>
          <div>
            <span className="text-white font-black uppercase text-sm tracking-tight block">ADN Entreprise</span>
            <span className="text-orange-400 text-xs font-bold">Évaluation managériale</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-stone-400 text-xs font-bold uppercase tracking-widest block">Question</span>
          <span className="text-white font-black text-lg">{currentQ + 1} / {QUESTIONS_RH.length}</span>
        </div>
      </div>

      {/* Barre de progression */}
      <div className="h-1.5 bg-stone-800 shrink-0">
        <div
          className="h-full bg-[#C9A84C] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Section badge */}
      <div className="bg-stone-800 px-6 py-2 shrink-0">
        <div className="max-w-2xl mx-auto flex items-center gap-3 overflow-x-auto whitespace-nowrap hide-scrollbar">
          {sections.map((s, i) => (
            <div key={s} className="flex items-center gap-1 shrink-0 mr-4">
              <div className={`w-2 h-2 rounded-full ${i < sectionIndex ? 'bg-emerald-400' : i === sectionIndex ? 'bg-[#C9A84C]/80' : 'bg-stone-600'}`} />
              <span className={`text-[10px] font-bold uppercase tracking-wide hidden sm:block ${i === sectionIndex ? 'text-orange-400' : 'text-stone-500'}`}>
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className={`w-full max-w-2xl transition-opacity duration-200 ${animating ? 'opacity-0' : 'opacity-100'}`}>

          {/* Card question */}
          <div className="bg-[#0D0D0D] border-2 border-stone-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield size={14} className="text-[#C9A84C]" />
              <span className="text-xs font-black uppercase tracking-widest text-[#C9A84C]">
                {currentSection}
              </span>
            </div>
            <p className="text-xl font-bold text-white leading-relaxed">
              "{q.q}"
            </p>
          </div>

          {/* Échelle Likert */}
          <div className="bg-[#0D0D0D] border-2 border-stone-200 p-6">
            <div className="flex justify-between text-xs font-bold text-stone-400 uppercase tracking-wide mb-4">
              <span>Pas du tout d'accord</span>
              <span>Tout à fait d'accord</span>
            </div>

            <div className="flex gap-3 justify-center">
              {LIKERT_LABELS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className="group flex flex-col items-center gap-2 flex-1"
                >
                  <div className={`w-full h-12 rounded-sm border-2 transition-all ${answers[q.id] === opt.value
                    ? `${opt.color} border-stone-900 scale-110 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`
                    : 'bg-stone-100 border-stone-200 hover:border-stone-400 hover:bg-stone-200'
                    }`} />
                  <span className={`text-[10px] font-bold text-center leading-tight ${answers[q.id] === opt.value ? 'text-stone-900' : 'text-stone-400'
                    }`}>
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-4">
            <button
              onClick={goBack}
              disabled={currentQ === 0}
              className="flex items-center gap-2 text-stone-500 hover:text-stone-900 font-bold text-sm uppercase tracking-wide disabled:opacity-30 transition-colors"
            >
              <ArrowLeft size={14} />
              Précédent
            </button>
            {answers[q.id] !== undefined && (
              <button
                onClick={() => handleAnswer(answers[q.id])}
                className="flex items-center gap-2 text-[#C9A84C] hover:text-orange-700 font-bold text-sm uppercase tracking-wide transition-colors"
              >
                Suivant
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RHTest;
