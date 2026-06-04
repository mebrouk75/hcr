import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Building2, Users, UserPlus, UtensilsCrossed, Wine, Coffee } from 'lucide-react';

const RolesPage = () => {
    const navigate = useNavigate();

    const profiles = [
        {
            role: "Directeur de Site",
            slug: "directeur",
            trait: "Le Visionnaire",
            desc: "Leadership, Gestion de crise & Stratégie globale.",
            icon: <Building2 size={24} />,
            color: "text-[#C9A84C]"
        },
        {
            role: "Manager",
            slug: "manager",
            trait: "Le Chef d'Orchestre",
            desc: "Pilotage terrain, Animation d'équipe & Culture du résultat.",
            icon: <Users size={24} />,
            color: "text-[#C9A84C]"
        },
        {
            role: "Manager Adjoint",
            slug: "manager-adj",
            trait: "Le Bras Droit",
            desc: "Soutien opérationnel, Relais terrain & Fiabilité.",
            icon: <UserPlus size={24} />,
            color: "text-[#C9A84C]"
        },
        {
            role: "Chef de Rang",
            slug: "chef-de-rang",
            trait: "L'Ambassadeur",
            desc: "Technique de service, Vente additionnelle & Posture.",
            icon: <UtensilsCrossed size={24} />,
            color: "text-[#C9A84C]"
        },
        {
            role: "Barman / Mixologue",
            slug: "barman",
            trait: "L'Alchimiste",
            desc: "Créativité, Gestion des stocks & Aisance relationnelle.",
            icon: <Wine size={24} />,
            color: "text-[#C9A84C]"
        },
        {
            role: "Serveur / Limonadier",
            slug: "serveur",
            trait: "L'Électron Libre",
            desc: "Agilité, Mémoire immédiate & Relation client.",
            icon: <Coffee size={24} />,
            color: "text-[#C9A84C]"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0A0A0A] flex flex-col font-sans selection:bg-[#C9A84C] selection:text-black">
            <nav className="border-b border-[#C9A84C]/15 px-6 py-5 flex justify-between items-center bg-[#0A0A0A] sticky top-0 z-50">
                {/* LOGO */}
                <div onClick={() => navigate('/')} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-8 h-8 border border-[#C9A84C]/60 flex items-center justify-center group-hover:border-[#C9A84C] transition-colors">
                        <span className="text-[#C9A84C] font-black text-xs">R.</span>
                    </div>
                    <div className="leading-none">
                        <span className="block text-white font-black text-base tracking-tighter uppercase">Sentinel HCR</span>
                        <span className="block text-[9px] font-bold tracking-[0.22em] uppercase text-[#C9A84C]/70">
                            Espace Talent
                        </span>
                    </div>
                </div>
                {/* LOGOUT */}
                <button onClick={() => navigate('/')} className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] hover:text-white transition-colors">
                    Déconnexion
                </button>
            </nav>

            <section id="roles-grid" className="w-full flex-1 py-12 md:py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] block mb-4">
                            Mon Profil
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase">
                            Quel est votre poste ?
                        </h2>
                        <p className="text-stone-500 max-w-2xl mx-auto text-sm font-medium leading-relaxed">
                            Chaque rôle a ses codes et ses exigences. Sélectionnez votre métier pour démarrer l'évaluation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {profiles.map((profile, index) => (
                            <div
                                key={index}
                                onClick={() => navigate(`/mbti/${profile.slug}`)}
                                className={`group relative p-8 bg-[#0D0D0D] border-2 border-stone-800 hover:border-[#C9A84C] transition-all duration-300 cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.5)]`}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-12 h-12 flex items-center justify-center border border-[#C9A84C]/25 bg-[#C9A84C]/5 ${profile.color}`}>
                                        {profile.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-black text-white mb-1 group-hover:text-[#C9A84C] transition-colors uppercase">
                                    {profile.role}
                                </h3>

                                <div className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-4">
                                    {profile.trait}
                                </div>

                                <p className="text-stone-400 leading-relaxed font-medium text-xs mb-8">
                                    {profile.desc}
                                </p>

                                <div className="mt-auto flex items-center text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] opacity-70 group-hover:opacity-100 transition-opacity">
                                    Démarrer le test <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RolesPage;
