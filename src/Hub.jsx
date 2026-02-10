import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fingerprint, Share2, Activity, Users, Zap, ShieldCheck, BrainCircuit, Info, ChevronDown, Heart, ArrowRight, Building2, UserPlus, UtensilsCrossed, Wine, Coffee } from 'lucide-react';

const Hub = () => {
    const navigate = useNavigate();
    const [showAbout, setShowAbout] = useState(false);
    const [showRoles, setShowRoles] = useState(false);

    const handleRoleClick = (role) => {
        navigate(`/test/${role}`);
    };

    const copyLink = (e, role) => {
        e.stopPropagation();
        const url = `${window.location.origin}/test/${role}`;
        navigator.clipboard.writeText(url);
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans selection:bg-orange-100 selection:text-orange-900 relative">

            {/* TOP BAR */}
            <nav className="sticky top-0 z-50 px-8 h-20 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="flex items-center gap-3">
                    <div className="bg-orange-50 text-orange-600 p-2 rounded-xl">
                        <Activity size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h1 className="text-xl font-extrabold tracking-tight leading-none text-slate-900">SENTINEL</h1>
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">HR Intelligence</span>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Online</span>
                    <button className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                        Connexion Admin
                    </button>
                </div>
            </nav>

            {/* MAIN CONTENT */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24">

                {/* PILL TOGGLE */}
                <div className="flex justify-center mb-12">
                    <button
                        onClick={() => setShowAbout(!showAbout)}
                        className={`group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 border ${showAbout
                            ? 'bg-slate-900 text-white border-slate-900 shadow-xl'
                            : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-700 shadow-sm'}`}
                    >
                        <Info size={16} />
                        L'Histoire de Sentinel
                        <ChevronDown size={16} className={`transition-transform duration-300 ${showAbout ? 'rotate-180' : ''}`} />
                    </button>
                </div>

                {/* ABOUT SECTION (COLLAPSIBLE) */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showAbout ? 'max-h-[1000px] opacity-100 mb-16' : 'max-h-0 opacity-0 mb-0'}`}>
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50">

                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl font-black text-slate-900 mb-6">Pourquoi avoir créé Sentinel ?</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                L'histoire de ce test commence par un refus : celui de voir la restauration s'épuiser dans des relations toxiques. Nous avons compris que la compétence technique ne suffit pas si l'humain ne suit pas. Ce test a été développé pour analyser les deux camps en profondeur.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                            {/* POUR LE RESTAURATEUR */}
                            <div className="relative pl-8 border-l-4 border-orange-100">
                                <h3 className="text-xl font-bold text-orange-600 mb-4 uppercase tracking-wider flex items-center gap-2">
                                    Pour le Restaurateur
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Fini le recrutement par défaut. On ne met pas un candidat, même brillant, dans un environnement qui va le rejeter. Ce test détecte les décalages de tempérament avant qu'ils ne deviennent des problèmes en cuisine ou en salle.
                                </p>
                                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                                    <p className="text-orange-800 text-sm font-bold">
                                        L'enjeu : Maintenir une équipe soudée et performante sans le poison de l'incompatibilité.
                                    </p>
                                </div>
                            </div>

                            {/* POUR LE CANDIDAT */}
                            <div className="relative pl-8 border-l-4 border-blue-100">
                                <h3 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-wider flex items-center gap-2">
                                    Pour le Candidat
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Fini le sacrifice de soi. On ne peut pas s'épanouir sous un management qui ne parle pas notre langue. Ce test vous garantit que l'entreprise où vous postulez possède une culture saine, faite pour vous.
                                </p>
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <p className="text-blue-800 text-sm font-bold">
                                        L'enjeu : Trouver une opportunité où votre personnalité est un atout, pas un obstacle.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-12 border-t border-slate-100 text-center max-w-4xl mx-auto">
                            <h3 className="text-2xl font-black text-slate-900 mb-6">La fin de l'erreur de casting.</h3>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                Sentinel est le point de rencontre entre deux besoins. Que vous soyez celui qui dirige ou celui qui sert, vous méritez une relation de travail basée sur la transparence et l'harmonie. Nous analysons les deux pour que, lors de la signature du contrat, vous soyez déjà sur la même longueur d'onde.
                            </p>
                        </div>

                    </div>
                    <div className="flex justify-center mt-6">
                        <div className="h-1 w-24 bg-slate-200 rounded-full"></div>
                    </div>
                </div>

                {/* HERO SECTION - DUAL PATH (REDESIGN) */}
                <div className="relative w-full py-10 md:py-20 px-4 md:px-8 overflow-hidden rounded-3xl mb-24">

                    {/* Élément décoratif d'arrière-plan pour la profondeur */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-100/50 rounded-full blur-3xl -z-10 opacity-60" />

                    <div className="max-w-6xl mx-auto">

                        {/* En-tête de section */}
                        <div className="text-center mb-12">
                            <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
                                L'histoire de Sentinel
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                Deux visions, une seule réussite.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-stretch">

                            {/* CARTE PATRON : Clarté, Sécurité, Professionnalisme */}
                            <div className="group relative flex flex-col justify-between bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100 hover:shadow-2xl hover:border-orange-100 transition-all duration-300 ease-out hover:-translate-y-1">

                                <div>
                                    <div className="flex items-center space-x-2 mb-6">
                                        <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <span className="text-xs font-bold tracking-widest text-orange-600 uppercase">Côté Patron</span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                                        Protégez votre <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">établissement.</span>
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed text-lg mb-8">
                                        Ne laissez plus un profil toxique briser l'équilibre de votre équipe.
                                        Sentinel analyse l'ADN de votre entreprise pour vous proposer des talents qui partagent <strong className="text-slate-900 font-semibold">réellement</strong> votre vision et votre rythme.
                                    </p>
                                </div>

                                <button
                                    onClick={() => navigate('/test/audit-organisationnel')}
                                    className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-md shadow-orange-200 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-200"
                                >
                                    Évaluer mon environnement
                                    <ArrowRight className="ml-2 w-5 h-5 opacity-80" />
                                </button>
                            </div>

                            {/* CARTE TALENT : Passion, Profondeur, Modernité */}
                            <div className="group relative flex flex-col justify-between bg-[#0F172A] rounded-3xl p-8 md:p-10 shadow-2xl shadow-slate-400/20 border border-slate-800 hover:shadow-slate-900/30 transition-all duration-300 ease-out hover:-translate-y-1">

                                {/* Légère texture de fond pour éviter le plat */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-center space-x-2 mb-6">
                                        <div className="p-2 bg-slate-800 rounded-lg text-blue-400">
                                            <Heart size={24} />
                                        </div>
                                        <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Côté Talent</span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                                        Préservez votre <br />
                                        <span className="text-blue-400">passion.</span>
                                    </h3>

                                    <p className="text-slate-300 leading-relaxed text-lg mb-8">
                                        Ne vous épuisez plus dans une politique qui ne vous correspond pas.
                                        Sentinel évalue votre personnalité pour vous connecter à des patrons qui <strong className="text-white font-semibold">comprennent</strong> vos besoins et respectent votre potentiel.
                                    </p>
                                </div>

                                <button
                                    onClick={() => {
                                        setShowRoles(true);
                                        setTimeout(() => {
                                            document.getElementById('roles-grid').scrollIntoView({ behavior: 'smooth' });
                                        }, 100);
                                    }}
                                    className="relative z-10 w-full py-4 px-6 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-xl shadow-lg flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-200"
                                >
                                    Trouver mon futur cadre
                                    <ArrowRight className="ml-2 w-5 h-5 text-slate-400" />
                                </button>
                            </div>

                        </div>

                        {/* Texte de bas de page pour lier le tout */}
                        <p className="text-center text-slate-400 text-sm mt-8 italic">
                            Une analyse bilatérale pour une harmonie totale.
                        </p>

                    </div>
                </div>

                {/* ROLES GRID */}
                {showRoles && (
                    <div id="roles-grid" className="scroll-mt-24 animate-in fade-in slide-in-from-bottom-8 duration-700 py-12">

                        {/* Section Header */}
                        <div className="mb-16 text-center">
                            <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-2 block">
                                Nos Protocoles
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Quel talent recherchez-vous ?
                            </h2>
                            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                                Chaque poste a son ADN unique. Sélectionnez un profil pour découvrir les soft skills que nous analysons.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                {
                                    role: "Directeur de Site",
                                    slug: "directeur",
                                    trait: "Le Visionnaire",
                                    desc: "Leadership, Gestion de crise & Stratégie globale.",
                                    icon: Building2,
                                    color: "bg-indigo-50 text-indigo-600",
                                    border: "hover:border-indigo-200"
                                },
                                {
                                    role: "Manager",
                                    slug: "manager",
                                    trait: "Le Chef d'Orchestre",
                                    desc: "Pilotage terrain, Animation d'équipe & Culture du résultat.",
                                    icon: Users,
                                    color: "bg-violet-50 text-violet-600",
                                    border: "hover:border-violet-200"
                                },
                                {
                                    role: "Manager Adjoint",
                                    slug: "manager-adj",
                                    trait: "Le Bras Droit",
                                    desc: "Soutien opérationnel, Relais terrain & Fiabilité.",
                                    icon: UserPlus,
                                    color: "bg-blue-50 text-blue-600",
                                    border: "hover:border-blue-200"
                                },
                                {
                                    role: "Chef de Rang",
                                    slug: "chef-de-rang",
                                    trait: "L'Ambassadeur",
                                    desc: "Technique de service, Vente additionnelle & Posture.",
                                    icon: UtensilsCrossed,
                                    color: "bg-orange-50 text-orange-600",
                                    border: "hover:border-orange-200"
                                },
                                {
                                    role: "Barman / Mixologue",
                                    slug: "barman",
                                    trait: "L'Alchimiste",
                                    desc: "Créativité, Gestion des stocks & Aisance relationnelle.",
                                    icon: Wine,
                                    color: "bg-rose-50 text-rose-600",
                                    border: "hover:border-rose-200"
                                },
                                {
                                    role: "Serveur / Limonadier",
                                    slug: "serveur",
                                    trait: "L'Électron Libre",
                                    desc: "Agilité, Mémoire immédiate & Relation client.",
                                    icon: Coffee,
                                    color: "bg-emerald-50 text-emerald-600",
                                    border: "hover:border-emerald-200"
                                }
                            ].map((profile, index) => {
                                const Icon = profile.icon;
                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleRoleClick(profile.slug)}
                                        className={`group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${profile.border} hover:-translate-y-1`}
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={`p-4 rounded-2xl ${profile.color} transition-colors ring-1 ring-inset ring-black/5`}>
                                                <Icon size={24} />
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                                            {profile.role}
                                        </h3>

                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                                            {profile.trait}
                                        </div>

                                        <p className="text-slate-600 leading-relaxed font-medium">
                                            {profile.desc}
                                        </p>

                                        {/* Petit indicateur visuel au survol */}
                                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                            <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
};

// LIGHT THEME CARD COMPONENT
const RoleCard = ({ title, code, desc, onClick, onCopy, icon: Icon, color, highlight = false }) => (
    <div
        onClick={onClick}
        className={`group relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden
            ${highlight
                ? 'bg-white border-purple-100 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-1'
                : 'bg-white border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/80 hover:-translate-y-1'}`}
    >
        <div className="flex justify-between items-start mb-6">
            <div className={`p-3 rounded-2xl ${color}`}>
                <Icon size={24} strokeWidth={2.5} />
            </div>
            <button
                onClick={onCopy}
                className="text-slate-300 hover:text-slate-600 transition-colors p-2 hover:bg-slate-50 rounded-full"
                title="Copier le lien"
            >
                <Share2 size={18} />
            </button>
        </div>

        <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{code}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
        </div>
    </div>
);

export default Hub;
