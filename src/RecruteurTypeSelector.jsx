import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Building2, Users } from 'lucide-react';

// Ce composant s'affiche APRÈS la connexion recruteur
// AVANT le test — il demande si c'est un Patron ou un RH
// Route suggérée : /test/type-recruteur

const RecruteurTypeSelector = () => {
  const navigate = useNavigate();

  const types = [
    {
      id: 'patron',
      icon: <Building2 size={32} />,
      label: 'Patron',
      sublabel: 'Propriétaire · Gérant · Exploitant',
      desc: "Vous avez signé le bail. Vous portez le risque financier. Vous êtes responsable de l'établissement et de l'équipe.",
      detail: "100 questions · 25 min",
      route: '/test/patron',
      color: 'hover:border-[#C9A84C]',
      activeColor: 'border-[#C9A84C] bg-[#C9A84C]/5',
    },
    {
      id: 'rh',
      icon: <Users size={32} />,
      label: 'Responsable RH',
      sublabel: 'DRH · RRH · Chargé RH',
      desc: "Vous gérez les recrutements, les contrats, la relation sociale. Vous connaissez les textes et les process.",
      detail: "100 questions · 25 min",
      route: '/test/rh',
      color: 'hover:border-[#C9A84C]',
      activeColor: 'border-[#C9A84C] bg-[#C9A84C]/5',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-6 py-20">

      {/* Header */}
      <div className="text-center mb-14 max-w-xl">
        <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] block mb-4">
          — Diagnostic ADN Établissement
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-[0.9] tracking-tight mb-5">
          Vous êtes ?
        </h1>
        <p className="text-stone-500 font-medium leading-relaxed">
          Les deux parcours évaluent votre établissement sous des angles différents.
          Choisissez celui qui correspond à votre rôle réel.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => navigate(type.route)}
            className={`group text-left border-2 border-stone-800 bg-[#0D0D0D] p-8 transition-all ${type.color} hover:bg-[#111]`}
          >
            {/* Icône */}
            <div className="text-[#C9A84C]/50 group-hover:text-[#C9A84C] transition-colors mb-6">
              {type.icon}
            </div>

            {/* Labels */}
            <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-stone-600 mb-1">
              {type.sublabel}
            </span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">
              {type.label}
            </h2>

            {/* Description */}
            <p className="text-stone-500 text-sm font-medium leading-relaxed mb-6">
              {type.desc}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-stone-800 pt-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-700">
                {type.detail}
              </span>
              <ArrowRight
                size={16}
                className="text-stone-700 group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Note */}
      <p className="text-stone-700 text-[10px] font-medium mt-10 text-center max-w-md">
        Vos réponses sont confidentielles et utilisées uniquement pour le matching avec les candidats compatibles.
      </p>
    </div>
  );
};

export default RecruteurTypeSelector;
