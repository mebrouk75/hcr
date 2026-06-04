import React from 'react';
import SiteNavbar from './SiteNavbar';
import SiteFooter from './SiteFooter';

const MethodePage = () => {
    return (
        <div className="min-h-screen bg-[#0A0A0A] font-sans text-white">
            <SiteNavbar />
            <div className="pt-32 pb-12 bg-[#0D0D0D] min-h-[calc(100vh-200px)]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 max-w-xl">
                        <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] block mb-4">— La Méthode</span>
                        <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-[0.9] tracking-tight">
                            Pas de blabla.<br /><span className="text-stone-700">Du concret.</span>
                        </h1>
                        <p className="text-stone-500 font-medium mt-5 text-sm leading-relaxed">
                            Conçu par des pros de la restauration. Chaque scénario vient du terrain — pas d'un manuel RH.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-900 border border-stone-900">
                        {[
                            { num: "01", sub: "Diagnostic psychométrique", title: "Le Test Vérité", desc: "Mises en situation réelles du terrain HCR : coup de feu, gestion de conflits brigade, pression service. 180 questions, pas de psychologie de comptoir.", meta: "20 min · 180 questions SJT" },
                            { num: "02", sub: "Algorithme de compatibilité", title: "Le Crash Test", desc: "Notre moteur croise les profils sur 6 dimensions. Chef autoritaire + talent autonome = incompatibilité détectée et bloquée automatiquement.", meta: "Résultat immédiat · 6 dimensions" },
                            { num: "03", sub: "Matching validé", title: "La Poignée de Main", desc: "Compatibilité certifiée. Vous partagez la même vision du service, de la brigade, de l'exigence. La collaboration commence sur des bases saines.", meta: "Objectif : 0% turnover subi" },
                        ].map((step, i) => (
                            <div key={i} className="bg-[#0D0D0D] p-8 group hover:bg-[#111] transition-colors relative">
                                <span className="absolute top-6 right-6 text-[80px] font-black leading-none text-stone-900 group-hover:text-[#C9A84C]/10 transition-colors select-none">{step.num}</span>
                                <div className="relative z-10">
                                    <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A84C] mb-3">{step.sub}</span>
                                    <h3 className="text-2xl font-black text-white uppercase mb-4">{step.title}</h3>
                                    <p className="text-stone-500 font-medium leading-relaxed text-sm mb-8">{step.desc}</p>
                                    <div className="border-t border-stone-800 pt-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600">{step.meta}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <SiteFooter />
        </div>
    );
};

export default MethodePage;
