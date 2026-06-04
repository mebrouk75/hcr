import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Menu, X, Shield, ChefHat, TrendingUp, Users, Star, Mail, Phone, Calendar, Check, Zap } from 'lucide-react';

// ─── ILLUSTRATION SVG ABSTRAITE — CARTOGRAPHIE ADN ───────────────────────────
const HCRIllustration = () => (
  <svg viewBox="0 0 480 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="480" height="520" fill="#0A0A0A" />
    {[...Array(9)].map((_, i) => <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="520" stroke="#1a1a1a" strokeWidth="1" />)}
    {[...Array(9)].map((_, i) => <line key={`h${i}`} x1="0" y1={65 * i} x2="480" y2={65 * i} stroke="#1a1a1a" strokeWidth="1" />)}
    <circle cx="240" cy="220" r="130" stroke="#C9A84C" strokeWidth="1" strokeDasharray="3 7" opacity="0.3" />
    <circle cx="240" cy="220" r="90" stroke="#C9A84C" strokeWidth="0.5" opacity="0.15" />
    <circle cx="240" cy="220" r="50" stroke="#C9A84C" strokeWidth="0.5" opacity="0.1" />
    <line x1="240" y1="60" x2="240" y2="380" stroke="#C9A84C" strokeWidth="0.5" opacity="0.25" />
    <line x1="90" y1="220" x2="390" y2="220" stroke="#C9A84C" strokeWidth="0.5" opacity="0.25" />
    <line x1="240" y1="138" x2="318" y2="183" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
    <line x1="240" y1="138" x2="162" y2="183" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
    <line x1="322" y1="198" x2="314" y2="260" stroke="#C9A84C" strokeWidth="1" opacity="0.35" />
    <line x1="158" y1="198" x2="166" y2="260" stroke="#C9A84C" strokeWidth="1" opacity="0.35" />
    <line x1="302" y1="272" x2="178" y2="272" stroke="#C9A84C" strokeWidth="1" opacity="0.25" />
    <circle cx="240" cy="122" r="18" fill="#C9A84C" />
    <text x="240" y="127" textAnchor="middle" fill="#0A0A0A" fontSize="9" fontWeight="bold" fontFamily="sans-serif">DIR</text>
    <circle cx="326" cy="190" r="14" fill="#E8E0D0" opacity="0.8" />
    <text x="326" y="195" textAnchor="middle" fill="#0A0A0A" fontSize="8" fontWeight="bold" fontFamily="sans-serif">MGR</text>
    <circle cx="314" cy="270" r="11" fill="#E8E0D0" opacity="0.55" />
    <text x="314" y="275" textAnchor="middle" fill="#0A0A0A" fontSize="7" fontFamily="sans-serif">ADJ</text>
    <circle cx="166" cy="270" r="11" fill="#E8E0D0" opacity="0.55" />
    <text x="166" y="275" textAnchor="middle" fill="#0A0A0A" fontSize="7" fontFamily="sans-serif">CR</text>
    <circle cx="154" cy="190" r="14" fill="#E8E0D0" opacity="0.8" />
    <text x="154" y="195" textAnchor="middle" fill="#0A0A0A" fontSize="8" fontWeight="bold" fontFamily="sans-serif">BAR</text>
    <rect x="216" y="196" width="48" height="48" fill="#0A0A0A" stroke="#C9A84C" strokeWidth="2" />
    <text x="240" y="215" textAnchor="middle" fill="#C9A84C" fontSize="8" fontWeight="bold" fontFamily="sans-serif">PATRON</text>
    <text x="240" y="228" textAnchor="middle" fill="#C9A84C" fontSize="8" fontWeight="bold" fontFamily="sans-serif">ENGAGÉ</text>
    <circle cx="385" cy="115" r="22" fill="#100808" stroke="#7f1d1d" strokeWidth="1.5" />
    <line x1="370" y1="100" x2="400" y2="130" stroke="#ef4444" strokeWidth="2" opacity="0.7" />
    <text x="385" y="119" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold" fontFamily="sans-serif">FRI</text>
    <line x1="363" y1="126" x2="335" y2="152" stroke="#7f1d1d" strokeWidth="1" strokeDasharray="3 3" />
    <text x="316" y="165" textAnchor="middle" fill="#7f1d1d" fontSize="7" fontFamily="sans-serif">BLOQUÉ</text>
    <rect x="24" y="368" width="110" height="52" fill="#111" stroke="#C9A84C" strokeWidth="1" />
    <text x="79" y="387" textAnchor="middle" fill="#C9A84C" fontSize="8" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">MATCH</text>
    <text x="79" y="408" textAnchor="middle" fill="#E8E0D0" fontSize="22" fontWeight="bold" fontFamily="sans-serif">94%</text>
    <rect x="346" y="368" width="110" height="52" fill="#100808" stroke="#7f1d1d" strokeWidth="1" />
    <text x="401" y="387" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">FRICTION</text>
    <text x="401" y="408" textAnchor="middle" fill="#E8E0D0" fontSize="22" fontWeight="bold" fontFamily="sans-serif">0</text>
    <rect x="160" y="368" width="160" height="52" fill="#111" stroke="#222" strokeWidth="1" />
    <text x="240" y="384" textAnchor="middle" fill="#555" fontSize="7" fontFamily="sans-serif" letterSpacing="1">DIMENSIONS SENTINEL</text>
    {['RES', 'EMP', 'AUT', 'INT', 'ADA'].map((d, i) => {
      const heights = [36, 28, 42, 22, 30];
      const h = heights[i] * 0.45;
      return (
        <g key={d}>
          <rect x={172 + i * 28} y={408 - h} width="16" height={h} fill="#C9A84C" opacity="0.6" />
          <text x={180 + i * 28} y="412" textAnchor="middle" fill="#444" fontSize="6" fontFamily="sans-serif">{d}</text>
        </g>
      );
    })}
    <text x="240" y="455" textAnchor="middle" fill="#C9A84C" fontSize="9" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4" opacity="0.6">HCR SENTINEL v5.2</text>
    <text x="240" y="472" textAnchor="middle" fill="#2a2a2a" fontSize="8" fontFamily="sans-serif" letterSpacing="2">ALGORITHME DE COMPATIBILITÉ</text>
    <polygon points="432,0 480,0 480,48" fill="#C9A84C" opacity="0.12" />
    <polygon points="0,472 0,520 48,520" fill="#C9A84C" opacity="0.12" />
  </svg>
);

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/96 backdrop-blur-sm border-b border-[#C9A84C]/15' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-[#C9A84C]/60 flex items-center justify-center group-hover:border-[#C9A84C] transition-colors">
            <span className="text-[#C9A84C] font-black text-xs">R.</span>
          </div>
          <div className="leading-none">
            <span className="block text-white font-black text-base tracking-tighter uppercase">HCR SENTINEL</span>
            <span className="block text-[9px] font-bold tracking-[0.22em] uppercase text-[#C9A84C]/70">Restauration Nouvelle</span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-6">
          <a href="#methode" className="text-stone-500 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">Méthode</a>
          <a href="#tarifs" className="text-stone-500 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">Tarifs</a>
          <a href="#demo" className="text-stone-500 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">Contact</a>
          <button onClick={() => navigate('/connexion')} className="text-stone-500 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">Connexion</button>
          <a href="#demo" className="border border-[#C9A84C]/60 text-[#C9A84C] px-5 py-2 text-[11px] font-black uppercase tracking-widest hover:bg-[#C9A84C] hover:text-black hover:border-[#C9A84C] transition-all">
            Demander une démo
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-stone-900 px-6 py-6 space-y-5">
          <a href="#methode" onClick={() => setOpen(false)} className="block text-stone-400 text-xs font-bold uppercase tracking-widest">Méthode</a>
          <a href="#tarifs" onClick={() => setOpen(false)} className="block text-stone-400 text-xs font-bold uppercase tracking-widest">Tarifs</a>
          <a href="#demo" onClick={() => setOpen(false)} className="block text-stone-400 text-xs font-bold uppercase tracking-widest">Contact</a>
          <button onClick={() => { navigate('/connexion'); setOpen(false); }} className="block text-stone-400 text-xs font-bold uppercase tracking-widest">Connexion</button>
          <a href="#demo" onClick={() => setOpen(false)} className="block w-full text-center border border-[#C9A84C] text-[#C9A84C] py-3 text-xs font-black uppercase tracking-widest">
            Demander une démo
          </a>
        </div>
      )}
    </nav>
  );
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen bg-[#0A0A0A] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '100px' }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 border border-[#C9A84C]/25 px-4 py-2 bg-[#C9A84C]/5">
            <Star size={10} className="text-[#C9A84C] fill-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.2em]">Test anti-bullshit · Secteur HCR</span>
          </div>

          <div>
            <h1 className="text-[76px] md:text-[104px] font-black leading-[0.86] tracking-[-3px] uppercase">
              <span className="block text-white">ASSUREZ</span>
              <span className="block" style={{ background: 'linear-gradient(120deg, #C9A84C 0%, #F0D080 45%, #C9A84C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>LA RELÈVE.</span>
            </h1>
          </div>

          <p className="text-stone-400 text-lg font-medium leading-relaxed max-w-md border-l-2 border-[#C9A84C]/35 pl-5">
            On ne bâtit pas une brigade solide avec des profils toxiques.
            Nous connectons les <span className="text-white font-bold">patrons engagés</span> avec les talents qui ont <span className="text-white font-bold">la flamme</span>.
          </p>

          <div className="flex gap-8 pt-1">
            {[{ val: "73%", label: "turnover en HCR" }, { val: "94%", label: "précision matching" }, { val: "0", label: "profil friction validé" }].map((s, i) => (
              <div key={i} className={i > 0 ? 'border-l border-stone-800 pl-6' : ''}>
                <span className="block text-2xl font-black text-[#C9A84C] leading-none">{s.val}</span>
                <span className="block text-[10px] font-bold text-stone-600 uppercase tracking-wide mt-1">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a href="#demo" className="group flex items-center justify-between px-6 py-4 bg-[#C9A84C] text-black font-black uppercase text-[11px] tracking-widest hover:bg-[#F0D080] transition-colors">
              <div className="text-left">
                <span className="block opacity-50 text-[9px] mb-0.5">Restaurateur</span>
                <span>Demander une démo</span>
              </div>
              <ArrowRight size={15} className="ml-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <button onClick={() => navigate('/connexion')} className="group flex items-center justify-between px-6 py-4 border border-stone-700 text-white font-black uppercase text-[11px] tracking-widest hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
              <div className="text-left">
                <span className="block opacity-50 text-[9px] mb-0.5">Candidat</span>
                <span>Passer le test</span>
              </div>
              <ArrowRight size={15} className="ml-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {[{ icon: <Shield size={10} />, label: "RGPD Conforme" }, { icon: <ChefHat size={10} />, label: "Conçu terrain HCR" }, { icon: <TrendingUp size={10} />, label: "Algo validé" }].map((b, i) => (
              <div key={i} className="flex items-center gap-1.5 border border-stone-800 px-3 py-1.5 text-stone-500">
                <span className="text-stone-600">{b.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="relative border border-stone-800 shadow-[0_0_80px_rgba(201,168,76,0.06)]">
            <HCRIllustration />
            <div className="absolute top-4 left-4 bg-black/70 border border-[#C9A84C]/25 px-3 py-1.5 backdrop-blur-sm">
              <span className="text-[#C9A84C] text-[9px] font-black uppercase tracking-[0.2em]">Cartographie ADN · Live</span>
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#C9A84C]/8 -z-10" />
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-stone-800 -z-20" />
        </div>
      </div>
    </section>
  );
};

// ─── BANDE STATS ──────────────────────────────────────────────────────────────
const StatsBand = () => (
  <div className="bg-[#C9A84C] border-y border-[#a88838] py-4">
    <div className="flex flex-wrap justify-center md:justify-between max-w-7xl mx-auto px-6 gap-4 md:gap-0">
      {[{ val: "73%", label: "des restaurants souffrent de turnover" }, { val: "6 mois", label: "coût moyen d'un mauvais recrutement HCR" }, { val: "1 sur 3", label: "démissionne dans les 90 premiers jours" }].map((s, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-black font-black text-xl tracking-tight">{s.val}</span>
          <span className="text-black/60 text-xs font-bold uppercase tracking-wide">{s.label}</span>
        </div>
      ))}
    </div>
  </div>
);

// ─── MÉTHODE ─────────────────────────────────────────────────────────────────
const Methode = () => (
  <section id="methode" className="bg-[#0D0D0D] py-28 px-6 border-t border-stone-900">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 max-w-xl">
        <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] block mb-4">— La Méthode</span>
        <h2 className="text-5xl md:text-6xl font-black text-white uppercase leading-[0.9] tracking-tight">
          Pas de blabla.<br /><span className="text-stone-700">Du concret.</span>
        </h2>
        <p className="text-stone-500 font-medium mt-5 text-sm leading-relaxed">
          Conçu par des pros de la restauration. Chaque scénario vient du terrain — pas d'un manuel RH.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-900">
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
  </section>
);

// ─── TARIFS ──────────────────────────────────────────────────────────────────
const Tarifs = () => {
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
      ctaAction: () => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' }),
      highlight: true,
      badge: "Le plus populaire",
      features: [
        "Test ADN Entreprise complet",
        "Accès aux profils compatibles",
        "Algorithme anti-friction activé",
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
      ctaAction: () => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' }),
      highlight: false,
      features: [
        "Tout le plan Établissement",
        "Contacts candidats illimités",
        "Multi-sites centralisés",
        "Tableau de bord RH groupe",
        "Intégration process RH existants",
        "Account manager dédié",
      ],
    },
  ];

  return (
    <section id="tarifs" className="bg-[#0A0A0A] py-28 px-6 border-t border-stone-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] block mb-4">— Tarifs</span>
          <h2 className="text-5xl font-black text-white uppercase leading-[0.9] tracking-tight mb-4">
            Simple et transparent.
          </h2>
          <p className="text-stone-500 font-medium max-w-lg mx-auto text-sm">
            Pas de frais cachés, pas de commission sur les recrutements. Un abonnement mensuel fixe, sans engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <div key={i} className={`relative border-2 p-8 flex flex-col ${plan.highlight
                ? 'border-[#C9A84C] bg-[#0f0e0a] shadow-[0_0_40px_rgba(201,168,76,0.12)]'
                : 'border-stone-800 bg-[#0D0D0D]'
              }`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              <div className="mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A84C] block mb-3">{plan.name}</span>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                </div>
                <span className="text-stone-600 text-xs font-bold uppercase tracking-wide">{plan.sub}</span>
              </div>

              <p className="text-stone-500 text-sm font-medium leading-relaxed mb-6 pb-6 border-b border-stone-800">
                {plan.desc}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                    <span className="text-stone-400 text-xs font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={plan.ctaAction}
                className={`w-full py-3.5 font-black uppercase text-xs tracking-widest transition-all ${plan.highlight
                    ? 'bg-[#C9A84C] text-black hover:bg-[#F0D080]'
                    : 'border border-stone-700 text-white hover:border-[#C9A84C] hover:text-[#C9A84C]'
                  }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-700 text-xs font-medium mt-8">
          Pas sûr de votre choix ? <a href="#demo" className="text-[#C9A84C] hover:underline">Discutons-en directement →</a>
        </p>
      </div>
    </section>
  );
};

// ─── SECTION DÉMO / CONTACT ───────────────────────────────────────────────────
const Demo = () => {
  const [form, setForm] = useState({ nom: '', etablissement: '', email: '', tel: '', type: 'demo', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu brancheras Supabase ou un service email (Resend, EmailJS, etc.)
    console.log('Formulaire soumis :', form);
    setSent(true);
  };

  return (
    <section id="demo" className="bg-[#0D0D0D] py-28 px-6 border-t border-stone-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Gauche — texte */}
        <div className="space-y-8">
          <div>
            <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] block mb-4">— Contact & Démo</span>
            <h2 className="text-5xl font-black text-white uppercase leading-[0.9] tracking-tight">
              Parlons de<br />
              <span style={{ background: 'linear-gradient(120deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>votre brigade.</span>
            </h2>
          </div>

          <p className="text-stone-400 font-medium leading-relaxed">
            Vous avez des questions sur la plateforme, vous voulez voir une démo en live, ou vous gérez plusieurs établissements et voulez un devis sur mesure ? On vous répond sous 24h.
          </p>

          <div className="space-y-5">
            {[
              { icon: <Calendar size={16} />, title: "Démo en visio", desc: "30 minutes pour voir la plateforme en live et poser vos questions." },
              { icon: <Zap size={16} />, title: "Accès immédiat", desc: "Vous pouvez aussi vous inscrire directement et tester gratuitement." },
              { icon: <Mail size={16} />, title: "hcrsentinel@hotmail.com", desc: "Réponse garantie sous 24 heures ouvrées." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 border border-stone-800 flex items-center justify-center text-[#C9A84C] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <span className="block text-white font-black text-sm uppercase tracking-wide">{item.title}</span>
                  <span className="block text-stone-500 text-xs font-medium mt-0.5">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Droite — formulaire */}
        <div className="bg-[#0A0A0A] border border-stone-800 p-8">
          {sent ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center mx-auto mb-6">
                <Check size={28} className="text-[#C9A84C]" />
              </div>
              <h3 className="text-white font-black text-xl uppercase mb-3">Message envoyé ✓</h3>
              <p className="text-stone-500 font-medium text-sm leading-relaxed">
                Merci. On vous répond sous 24h pour organiser votre démo ou répondre à vos questions.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.2em] block mb-5">Votre demande</span>
                {/* Type de demande */}
                <div className="flex gap-2 mb-4">
                  {[{ val: 'demo', label: 'Demander une démo' }, { val: 'devis', label: 'Demander un devis' }, { val: 'info', label: 'Renseignements' }].map(opt => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setForm({ ...form, type: opt.val })}
                      className={`flex-1 py-2 text-[10px] font-black uppercase tracking-wide border transition-colors ${form.type === opt.val
                          ? 'border-[#C9A84C] bg-[#C9A84C]/10 text-[#C9A84C]'
                          : 'border-stone-800 text-stone-600 hover:border-stone-600'
                        }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-600 block mb-1.5">Nom *</label>
                  <input
                    type="text" required
                    value={form.nom}
                    onChange={e => setForm({ ...form, nom: e.target.value })}
                    placeholder="Votre nom"
                    className="w-full bg-[#111] border border-stone-800 focus:border-[#C9A84C] px-3 py-2.5 text-white text-sm font-medium outline-none transition-colors placeholder-stone-700"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-600 block mb-1.5">Établissement *</label>
                  <input
                    type="text" required
                    value={form.etablissement}
                    onChange={e => setForm({ ...form, etablissement: e.target.value })}
                    placeholder="Nom du restaurant"
                    className="w-full bg-[#111] border border-stone-800 focus:border-[#C9A84C] px-3 py-2.5 text-white text-sm font-medium outline-none transition-colors placeholder-stone-700"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-600 block mb-1.5">Email *</label>
                <input
                  type="email" required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="votre@email.fr"
                  className="w-full bg-[#111] border border-stone-800 focus:border-[#C9A84C] px-3 py-2.5 text-white text-sm font-medium outline-none transition-colors placeholder-stone-700"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-600 block mb-1.5">Téléphone</label>
                <input
                  type="tel"
                  value={form.tel}
                  onChange={e => setForm({ ...form, tel: e.target.value })}
                  placeholder="06 00 00 00 00"
                  className="w-full bg-[#111] border border-stone-800 focus:border-[#C9A84C] px-3 py-2.5 text-white text-sm font-medium outline-none transition-colors placeholder-stone-700"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-600 block mb-1.5">Message</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Combien d'établissements ? Quel poste à pourvoir ? Des questions spécifiques ?"
                  className="w-full bg-[#111] border border-stone-800 focus:border-[#C9A84C] px-3 py-2.5 text-white text-sm font-medium outline-none transition-colors placeholder-stone-700 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C9A84C] text-black py-4 font-black uppercase text-xs tracking-widest hover:bg-[#F0D080] transition-colors flex items-center justify-center gap-2"
              >
                Envoyer ma demande
                <ArrowRight size={14} />
              </button>

              <p className="text-stone-700 text-[10px] font-medium text-center">
                🔒 Vos données ne sont jamais revendues · RGPD conforme
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// ─── CONFIANCE ────────────────────────────────────────────────────────────────
const Confiance = () => (
  <section className="bg-[#0A0A0A] py-16 px-6 border-t border-stone-900">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-900">
      {[
        { icon: <Shield size={16} />, title: "RGPD Conforme", desc: "Données hébergées en Europe. Droit à l'effacement garanti." },
        { icon: <Users size={16} />, title: "Usage exclusif HCR", desc: "Résultats partagés uniquement avec votre accord." },
        { icon: <TrendingUp size={16} />, title: "Données non vendues", desc: "Aucune revente ni transmission à des tiers." },
        { icon: <ChefHat size={16} />, title: "Algorithme éthique", desc: "Compétences uniquement. Zéro critère discriminant." },
      ].map((item, i) => (
        <div key={i} className="bg-[#0A0A0A] p-6 group hover:bg-[#0e0e0e] transition-colors">
          <div className="text-[#C9A84C]/50 group-hover:text-[#C9A84C] transition-colors mb-4">{item.icon}</div>
          <h3 className="text-white font-black text-xs uppercase tracking-widest mb-1.5">{item.title}</h3>
          <p className="text-stone-600 text-xs font-medium leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

// ─── FOOTER ──────────────────────────────────────────────────────────────────
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#060606] border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-7 border border-[#C9A84C]/40 flex items-center justify-center">
              <span className="text-[#C9A84C] font-black text-xs">R.</span>
            </div>
            <span className="text-white font-black text-sm uppercase tracking-tight">HCR SENTINEL</span>
          </div>
          <p className="text-stone-700 text-xs font-medium leading-relaxed max-w-xs">
            La première plateforme de recrutement anti-friction pour le secteur Hôtellerie-Restauration-Cafés.
          </p>
          <div className="flex gap-4 mt-5">
            <a href="mailto:hcrsentinel@hotmail.com" className="flex items-center gap-2 text-stone-600 hover:text-[#C9A84C] text-xs font-bold transition-colors">
              <Mail size={12} />hcrsentinel@hotmail.com
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-[#C9A84C] text-[9px] font-black uppercase tracking-[0.25em] mb-5">Navigation</h3>
          <ul className="space-y-2.5">
            {[{ label: "La Méthode", href: "#methode" }, { label: "Tarifs", href: "#tarifs" }, { label: "Démo & Contact", href: "#demo" }, { label: "Connexion", path: "/connexion" }].map((l, i) => (
              <li key={i}>
                {l.href
                  ? <a href={l.href} className="text-stone-600 hover:text-[#C9A84C] text-xs font-bold uppercase tracking-wide transition-colors">{l.label}</a>
                  : <button onClick={() => navigate(l.path)} className="text-stone-600 hover:text-[#C9A84C] text-xs font-bold uppercase tracking-wide transition-colors">{l.label}</button>
                }
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[#C9A84C] text-[9px] font-black uppercase tracking-[0.25em] mb-5">Légal</h3>
          <ul className="space-y-2.5">
            {["Mentions légales", "Politique de confidentialité", "Vos droits RGPD", "Gérer les cookies"].map((l, i) => (
              <li key={i}>
                <button
                  onClick={() => i < 3 ? navigate('/mentions-legales') : (localStorage.removeItem('hcr_cookie_consent'), window.location.reload())}
                  className="text-stone-600 hover:text-[#C9A84C] text-xs font-bold uppercase tracking-wide transition-colors text-left"
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-900 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-stone-800 text-[10px] font-bold uppercase tracking-widest">© {new Date().getFullYear()} HCR SENTINEL — Tous droits réservés</span>
          <span className="text-stone-800 text-[10px] font-bold uppercase tracking-widest">RGPD (UE) 2016/679 · LCEN</span>
        </div>
      </div>
    </footer>
  );
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
const LaRelevePage = () => (
  <div className="bg-[#0A0A0A]">
    <Navbar />
    <Hero />
    <StatsBand />
    <Methode />
    <Tarifs />
    <Demo />
    <Confiance />
    <Footer />
  </div>
);

export default LaRelevePage;
