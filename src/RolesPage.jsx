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
            color: "bg-indigo-50 text-indigo-600",
            border: "hover:border-indigo-200"
        },
        {
            role: "Manager",
            slug: "manager",
            trait: "Le Chef d'Orchestre",
            desc: "Pilotage terrain, Animation d'équipe & Culture du résultat.",
            icon: <Users size={24} />,
            color: "bg-violet-50 text-violet-600",
            border: "hover:border-violet-200"
        },
        {
            role: "Manager Adjoint",
            slug: "manager-adj",
            trait: "Le Bras Droit",
            desc: "Soutien opérationnel, Relais terrain & Fiabilité.",
            icon: <UserPlus size={24} />,
            color: "bg-blue-50 text-blue-600",
            border: "hover:border-blue-200"
        },
        {
            role: "Chef de Rang",
            slug: "chef-de-rang",
            trait: "L'Ambassadeur",
            desc: "Technique de service, Vente additionnelle & Posture.",
            icon: <UtensilsCrossed size={24} />,
            color: "bg-orange-50 text-orange-600",
            border: "hover:border-orange-200"
        },
        {
            role: "Barman / Mixologue",
            slug: "barman",
            trait: "L'Alchimiste",
            desc: "Créativité, Gestion des stocks & Aisance relationnelle.",
            icon: <Wine size={24} />,
            color: "bg-rose-50 text-rose-600",
            border: "hover:border-rose-200"
        },
        {
            role: "Serveur / Limonadier",
            slug: "serveur",
            trait: "L'Électron Libre",
            desc: "Agilité, Mémoire immédiate & Relation client.",
            icon: <Coffee size={24} />,
            color: "bg-emerald-50 text-emerald-600",
            border: "hover:border-emerald-200"
        }
    ];

    return (
        <div className="min-h-screen bg-[#FAfaf9] flex flex-col font-sans selection:bg-orange-200 selection:text-orange-900">
            <nav className="border-b-2 border-stone-900 px-6 py-5 flex justify-between items-center bg-white sticky top-0 z-50">
                {/* LOGO */}
                <div onClick={() => navigate('/')} className="flex items-center gap-3 cursor-pointer">
                    <div className="bg-stone-900 text-white w-10 h-10 flex items-center justify-center font-black text-xl rounded-sm">
                        R.
                    </div>
                    <div className="leading-none">
                        <span className="block text-2xl font-black tracking-tighter uppercase">LA RELÈVE</span>
                        <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-orange-600">
                            Espace Talent
                        </span>
                    </div>
                </div>
                {/* LOGOUT */}
                <button onClick={() => navigate('/')} className="text-xs font-bold uppercase tracking-widest text-stone-900 hover:text-orange-600 transition-colors">
                    Déconnexion
                </button>
            </nav>

            <section id="roles-grid" className="w-full flex-1 py-12 md:py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <span className="bg-stone-900 text-white px-2 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                            Mon Profil
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-4 uppercase">
                            Quel est votre poste ?
                        </h2>
                        <p className="text-stone-500 max-w-2xl mx-auto text-lg font-medium">
                            Chaque rôle a ses codes. Sélectionnez votre métier pour démarrer l'évaluation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {profiles.map((profile, index) => (
                            <div
                                key={index}
                                onClick={() => navigate(`/mbti/${profile.slug}`)}
                                className={`group relative p-8 bg-white border-2 border-stone-200 hover:border-orange-600 transition-all duration-300 cursor-pointer hover:-translate-y-1 shadow-sm hover:shadow-[4px_4px_0px_0px_#ea580c]`}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-4 rounded-none border border-stone-100 ${profile.color} bg-opacity-20`}>
                                        {profile.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-black text-stone-900 mb-1 group-hover:text-orange-600 transition-colors uppercase">
                                    {profile.role}
                                </h3>

                                <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">
                                    {profile.trait}
                                </div>

                                <p className="text-stone-600 leading-relaxed font-medium text-sm">
                                    {profile.desc}
                                </p>

                                <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-stone-300 group-hover:text-orange-600 transition-colors">
                                    Démarrer le test <ArrowRight size={14} className="ml-2" />
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
