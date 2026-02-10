import React, { useState } from 'react';
import { ArrowRight, Star, Target, Zap, Handshake, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- COMPOSANT 1 : LA NAVIGATION ---
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b-2 border-stone-900 px-6 py-5 flex justify-between items-center bg-white sticky top-0 z-50 font-sans">
            {/* LOGO */}
            <div className="flex items-center gap-3">
                <div className="bg-stone-900 text-white w-10 h-10 flex items-center justify-center font-black text-xl rounded-sm">
                    R.
                </div>
                <div className="leading-none">
                    <span className="block text-2xl font-black tracking-tighter uppercase">LA RELÈVE</span>
                    <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-orange-600">
                        Restauration Nouvelle
                    </span>
                </div>
            </div>

            {/* MENU DESKTOP */}
            <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-wide text-stone-900">
                <a href="#manifeste" className="hover:text-orange-600 transition-colors">Le Manifeste</a>
                <a href="#methode" className="hover:text-orange-600 transition-colors">La Méthode</a>
                <button onClick={() => navigate('/connexion')} className="hover:text-orange-600 transition-colors">Connexion</button>
            </div>

            {/* ACTION */}
            <div className="hidden md:block">
                <button className="bg-stone-900 text-white px-6 py-3 font-bold uppercase text-xs tracking-widest hover:bg-orange-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                    Rejoindre le mouvement
                </button>
            </div>

            {/* MENU MOBILE */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-stone-900">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>
    );
};

// --- COMPOSANT 2 : LE HERO (L'AFFICHE) ---
const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center font-sans">
            {/* GAUCHE */}
            <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 border border-stone-900 px-3 py-1 rounded-full bg-white shadow-sm">
                    <Star size={14} className="text-orange-500 fill-orange-500" />
                    <span className="text-xs font-bold uppercase tracking-wide text-stone-900">Le test de personnalité anti-bullshit</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-stone-900">
                    ASSUREZ <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                        LA RELÈVE.
                    </span>
                </h1>

                <p className="text-xl md:text-2xl font-medium text-stone-600 max-w-2xl leading-relaxed border-l-4 border-orange-500 pl-6">
                    Parce qu'on ne bâtit pas une brigade solide avec des profils toxiques.
                    Nous connectons les patrons engagés avec les talents qui ont la flamme.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    {/* BOUTON PATRON */}
                    <button
                        onClick={() => navigate('/test/audit-organisationnel')}
                        className="group flex items-center justify-between px-8 py-5 bg-white border-2 border-stone-900 text-stone-900 text-left hover:bg-stone-900 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                    >
                        <div>
                            <span className="block text-xs font-bold uppercase tracking-wider opacity-60">Je suis Restaurateur</span>
                            <span className="block text-lg font-black uppercase">Trouver ma pépite</span>
                        </div>
                        <ArrowRight className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    {/* BOUTON TALENT */}
                    <button
                        onClick={() => navigate('/connexion')}
                        className="group flex items-center justify-between px-8 py-5 bg-orange-600 border-2 border-stone-900 text-white text-left hover:bg-orange-700 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                    >
                        <div>
                            <span className="block text-xs font-bold uppercase tracking-wider opacity-80">Je suis Candidat</span>
                            <span className="block text-lg font-black uppercase">Trouver ma place</span>
                        </div>
                        <ArrowRight className="ml-4" />
                    </button>
                </div>
            </div>

            {/* DROITE (Visuel) */}
            <div className="lg:col-span-5 relative hidden md:block">
                <div className="relative bg-white p-4 border-2 border-stone-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="w-full h-[400px] bg-stone-200 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholer pour image */}
                        <div className="text-center p-8">
                            <div className="text-6xl mb-4">🍳</div>
                            <span className="text-stone-500 font-bold uppercase">Photo Équipe "Vrai"</span>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between items-end font-sans">
                        <div>
                            <span className="block font-black text-xl uppercase text-stone-900">L'Esprit d'Équipe</span>
                            <span className="text-xs font-medium text-stone-500">Ni toxique, ni robotique.</span>
                        </div>
                        <div className="text-orange-600 font-black text-3xl">#1</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- COMPOSANT 3 : LE PROCESSUS (LES CARTES) ---
const ProcessSection = () => {
    const steps = [
        {
            id: "01",
            icon: <Target size={32} />,
            title: "Le Test Vérité",
            desc: "Pas de psychologie de comptoir. Des mises en situation réelles : coup de feu, gestion du stress, hiérarchie.",
            meta: "Durée : 20 min chrono",
            bg: "bg-white"
        },
        {
            id: "02",
            icon: <Zap size={32} />,
            title: "Le Crash Test",
            desc: "Notre algorithme croise vos résultats. Si les valeurs s'opposent (Chef autoritaire vs Second autonome), on bloque.",
            meta: "Résultat : Immédiat",
            bg: "bg-white"
        },
        {
            id: "03",
            icon: <Handshake size={32} />,
            title: "La Poignée de Main",
            desc: "C'est vert ? Vous partagez la même vision du travail. Votre collaboration part sur des bases saines.",
            meta: "Objectif : 0% Turnover",
            bg: "bg-[#F5F5F0]" // Fond légèrement différent pour la fin
        }
    ];

    return (
        <section className="w-full bg-white py-24 px-6 border-t-2 border-stone-900 font-sans" id="methode">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <span className="bg-orange-600 text-white px-2 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                        La Méthode
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-stone-900 leading-[0.9] uppercase">
                        Pas de blabla.<br />Juste du concret.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group h-full">
                            {/* Ombre décalée */}
                            <div className="absolute inset-0 bg-stone-900 translate-x-2 translate-y-2 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>

                            <div className={`relative ${step.bg} border-2 border-stone-900 p-8 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200`}>
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-6xl font-black text-stone-200 group-hover:text-orange-600 transition-colors">{step.id}</span>
                                        <div className="text-stone-900">{step.icon}</div>
                                    </div>
                                    <h3 className="text-2xl font-black uppercase mb-4 text-stone-900">{step.title}</h3>
                                    <p className="text-stone-600 font-medium leading-relaxed">{step.desc}</p>
                                </div>
                                <div className="mt-8 pt-6 border-t-2 border-stone-100">
                                    <span className="text-xs font-bold uppercase tracking-widest text-orange-600">{step.meta}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- ASSEMBLAGE FINAL DE LA PAGE ---
const LaRelevePage = () => {
    return (
        <div className="bg-[#F5F5F0] min-h-screen selection:bg-orange-200 selection:text-orange-900">
            <Navbar />
            <HeroSection />
            <ProcessSection />

            {/* Footer minimaliste */}
            <footer className="bg-stone-900 text-stone-400 py-12 text-center text-sm font-bold uppercase tracking-widest border-t-4 border-orange-600">
                <p>© 2026 La Relève — Restaurer la confiance.</p>
            </footer>
        </div>
    );
};

export default LaRelevePage;
