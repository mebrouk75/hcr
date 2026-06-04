import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import SiteNavbar from './SiteNavbar';
import SiteFooter from './SiteFooter';

const TarifsPage = () => {
    const navigate = useNavigate();
    const plans = [
        {
            name: "Candidat",
            price: "Gratuit",
            sub: "Pour toujours",
            desc: "Vous cherchez votre prochaine maison. On vous aide à trouver l'établissement qui vous correspond vraiment.",
            cta: "Créer mon profil",
            ctaAction: () => navigate('/connexion'),
            highlight: false,
            features: [
                "Test Sentinel complet (180 questions)",
                "Profil psychométrique détaillé",
                "Matching avec établissements compatibles",
                "Upload CV sécurisé",
                "Visibilité auprès des recruteurs certifiés",
            ],
        },
        {
            name: "Établissement",
            price: "149€",
            sub: "par mois · sans engagement",
            desc: "Pour les restaurateurs qui veulent recruter intelligemment et arrêter de perdre du temps et de l'argent.",
            cta: "Demander une démo",
            ctaAction: () => navigate('/#demo'),
            highlight: true,
            badge: "Le plus populaire",
            features: [
                "Test ADN Entreprise complet",
                "Accès aux profils compatibles",
                "Algorithme anti-toxique activé",
                "Filtres par poste et disponibilité",
                "5 contacts candidats / mois",
                "Support prioritaire",
            ],
        },
        {
            name: "Groupe & Chaîne",
            price: "Sur devis",
            sub: "Multi-établissements",
            desc: "Vous gérez plusieurs adresses. On adapte la plateforme à votre volume et vos process RH.",
            cta: "Demander un devis",
            ctaAction: () => navigate('/#demo'),
            highlight: false,
            features: [
                "Tout le plan Établissement",
                "Contacts candidats illimités",
                "Multi-sites centralisés",
                "Tableau de bord RH groupe",
                "Intégration API possible",
                "Customer Success Manager dédié",
            ],
        }
    ];

    return (
        <div className="min-h-screen bg-[#0A0A0A] font-sans text-white">
            <SiteNavbar />
            <div className="pt-32 pb-20 bg-[#0A0A0A] min-h-[calc(100vh-200px)]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 text-center max-w-2xl mx-auto">
                        <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] block mb-4">— Tarifs</span>
                        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-5">
                            Un investissement rentable.
                        </h1>
                        <p className="text-stone-500 font-medium text-sm leading-relaxed">
                            Un mauvais recrutement coûte en moyenne 6 mois de salaire. Choisissez le plan adapté à vos besoins et sécurisez votre brigade.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {plans.map((plan, i) => (
                            <div key={i} className={`relative p-8 flex flex-col ${plan.highlight ? 'bg-[#0D0D0D] border-2 border-[#C9A84C] shadow-[0_0_40px_rgba(201,168,76,0.1)] transform md:-translate-y-4' : 'bg-[#111] border border-stone-800'}`}>
                                {plan.badge && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-black text-[9px] font-black uppercase tracking-widest px-3 py-1">
                                        {plan.badge}
                                    </div>
                                )}
                                <div className="mb-6">
                                    <h3 className="text-white font-black uppercase text-xl mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-3xl font-black text-[#C9A84C]">{plan.price}</span>
                                    </div>
                                    <span className="text-stone-500 text-[10px] font-bold uppercase tracking-widest block">{plan.sub}</span>
                                </div>

                                <p className="text-stone-400 text-xs font-medium leading-relaxed mb-8 flex-1">
                                    {plan.desc}
                                </p>

                                <button
                                    onClick={plan.ctaAction}
                                    className={`w-full py-4 text-[11px] font-black uppercase tracking-widest transition-all mb-8 ${plan.highlight ? 'bg-[#C9A84C] text-black hover:bg-[#F0D080]' : 'border border-stone-700 text-white hover:border-[#C9A84C] hover:text-[#C9A84C]'}`}
                                >
                                    {plan.cta}
                                </button>

                                <div className="space-y-4">
                                    {plan.features.map((feat, j) => (
                                        <div key={j} className="flex items-start gap-3">
                                            <Check size={14} className="text-[#C9A84C] shrink-0 mt-0.5" />
                                            <span className="text-stone-300 text-xs font-medium">{feat}</span>
                                        </div>
                                    ))}
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

export default TarifsPage;
