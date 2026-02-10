
import React from 'react';
import { motion } from 'framer-motion';
import {
    Award, Target, Shield, Zap, Brain, Activity,
    TrendingUp, AlertTriangle, CheckCircle, BarChart2,
    Briefcase, Users, Layout, Map, Compass, Lock
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const SENTINEL_THEME = {
    bg: '#0f172a',
    card: '#1e293b',
    text: '#f8fafc',
    textMuted: '#94a3b8',
    primary: '#3b82f6',
    accent: '#f59e0b',
    success: '#10b981',
    danger: '#ef4444',
    warning: '#f59e0b',
    info: '#0ea5e9'
};

const PROFILES_DESC = {
    "TYRAN": { title: "Le Tyran", subtitle: "Force • Résultats • Court terme" },
    "RADAR": { title: "Le Radar", subtitle: "Équilibre • Stratégie • Justesse" },
    "SAGE": { title: "Le Sage", subtitle: "Transmission • Humanisme • Héritage" },
    "BUREAUCRATE": { title: "Le Bureaucrate", subtitle: "Process • Conformité • Structure" },
    "CAMÉLÉON": { title: "Le Caméléon", subtitle: "Adaptation • Polyvalence • Survie" },
    "VISIONNAIRE": { title: "Le Visionnaire", subtitle: "Innovation • Disruption • Création" },
    "OPPORTUNISTE": { title: "L'Opportuniste", subtitle: "Vitesse • Opportunités • Agilité" }
};

export const DirectorResultView = ({ data, mbtiProfile }) => {
    const {
        dominantProfile, secondaryProfile, profileCounts, specificScores,
        globalScore, reliability, verdict, dimensions
    } = data;

    // --- SAFETY CHECKS ---
    const safeReliability = reliability || 0;
    const safeSpecificScores = specificScores || {};
    const safeProfileCounts = profileCounts || {};
    const safeMbti = mbtiProfile || { code: '????', title: 'Profil Inconnu', description: 'Pas de données MBTI', forces: [] };

    // --- 1. COHERENCE ---
    const reliabilityColor = safeReliability > 89 ? 'text-emerald-500' : safeReliability > 59 ? 'text-amber-500' : 'text-rose-500';
    const reliabilityText = safeReliability > 89 ? 'Excellent' : safeReliability > 59 ? 'Moyen' : 'Faible';

    // --- 3. LEADERSHIP DISTRIBUTION ---
    const totalVotes = Object.values(safeProfileCounts).reduce((a, b) => a + b, 0);
    const leadershipData = totalVotes > 0 ? Object.entries(safeProfileCounts)
        .map(([key, val]) => ({
            name: key,
            value: Math.round((val / totalVotes) * 100),
            full: 100
        }))
        .sort((a, b) => b.value - a.value) : [];

    // --- 4. DIMENSIONS ---
    const dimMap = {
        'INFLUENCE': 'Influence',
        'CONSIDERATION': 'Considération',
        'CREATIVITE': 'Créativité',
        'RIGUEUR': 'Rigueur',
        'EQUILIBRE': 'Équilibre',
        'STRESS': 'Gestion Stress',
        'DARK_EMPATHY': 'Dark Empathy'
    };

    const dimensionData = Object.keys(dimMap).map(key => ({
        subject: dimMap[key],
        A: safeSpecificScores[key] || 0,
        fullMark: 100,
        color: key === 'DARK_EMPATHY' ? '#ef4444' : '#3b82f6'
    }));

    return (
        <div className="max-w-7xl mx-auto space-y-12 p-6 text-slate-200 font-sans">

            {/* HEADER */}
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                    RÉSULTATS <span className="text-blue-500">SENTINEL</span> DIRECTEUR
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Analyse croisée de vos réflexes de leadership, de votre profil psychologique et de vos compétences opérationnelles.
                </p>
            </div>

            {/* SECTION 1: ANALYSE DE COHÉRENCE */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-sm"
            >
                <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                    <Activity className={reliabilityColor} size={28} />
                    <h2 className="text-2xl font-bold text-white tracking-wide">1. ANALYSE DE COHÉRENCE</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="text-6xl font-black mb-2 flex items-baseline gap-2">
                            <span className={reliabilityColor}>{safeReliability}%</span>
                            <span className="text-lg text-slate-500 font-medium uppercase tracking-widest">Fiabilité</span>
                        </div>
                        <p className={`text-xl font-bold mb-4 ${reliabilityColor}`}>
                            Niveau : {reliabilityText}
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            {safeReliability > 89
                                ? "Vos réponses sont remarquablement cohérentes entre les différentes phases. Votre profil est stable et fiable."
                                : safeReliability > 59
                                    ? "Quelques contradictions mineures détectées entre vos réflexes et vos valeurs déclarées."
                                    : "Des incohérences majeures ont été relevées. Il est possible que vous ayez répondu ce qu'il fallait plutôt que ce que vous feriez."}
                        </p>
                    </div>
                    {/* Visual Gauge or Alerts */}
                    <div className="space-y-3">
                        {safeSpecificScores['DARK_EMPATHY'] > 70 && safeSpecificScores['CONSIDERATION'] < 30 && (
                            <div className="bg-rose-500/10 border border-rose-500/30 p-4 rounded-xl flex items-center gap-3 text-rose-300">
                                <AlertTriangle size={20} />
                                <span className="font-bold text-rose-400">Alerte : Profil Toxique détecté (Dark Empathy élevé + Faible Considération)</span>
                            </div>
                        )}
                        {safeSpecificScores['EQUILIBRE'] < 40 && (
                            <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl flex items-center gap-3 text-amber-300">
                                <AlertTriangle size={20} />
                                <span>Alerte : Risque de Burn-out (Score Équilibre faible)</span>
                            </div>
                        )}
                        {safeReliability > 89 && (
                            <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl flex items-center gap-3 text-emerald-300">
                                <CheckCircle size={20} />
                                <span>Aucune contradiction majeure détectée.</span>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* SECTION 2: PROFIL MBTI */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50"
                >
                    <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                        <Brain className="text-purple-400" size={28} />
                        <h2 className="text-2xl font-bold text-white tracking-wide">2. PROFIL MBTI</h2>
                    </div>

                    <div className="text-center mb-8">
                        <h3 className="text-6xl font-black text-white mb-2 tracking-tighter">{safeMbti.code}</h3>
                        <div className="text-2xl font-bold text-purple-400 mb-1">{safeMbti.title}</div>
                        <div className="text-sm text-slate-400 uppercase tracking-widest">{safeMbti.aka}</div>
                    </div>

                    <p className="text-slate-300 mb-6 italic border-l-4 border-purple-500 pl-4 py-2 bg-purple-500/5 rounded-r-lg">
                        "{safeMbti.description}"
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center">
                        {safeMbti.forces?.slice(0, 4).map((f, i) => (
                            <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-200 text-sm font-bold rounded-full border border-purple-500/30">
                                {f}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* SECTION 3: PROFIL LEADERSHIP */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50"
                >
                    <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                        <Award className="text-blue-400" size={28} />
                        <h2 className="text-2xl font-bold text-white tracking-wide">3. PROFIL LEADERSHIP</h2>
                    </div>

                    {dominantProfile && (
                        <div className="text-center mb-6">
                            <h3 className="text-5xl font-black text-blue-400 mb-2">{PROFILES_DESC[dominantProfile]?.title || dominantProfile}</h3>
                            <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">
                                {PROFILES_DESC[dominantProfile]?.subtitle}
                            </p>
                        </div>
                    )}

                    {/* Simple Bar Chart for Distribution */}
                    <div className="space-y-3">
                        {leadershipData.length > 0 ? leadershipData.slice(0, 4).map((item, idx) => (
                            <div key={idx} className="space-y-1">
                                <div className="flex justify-between text-xs font-bold uppercase text-slate-400">
                                    <span>{item.name}</span>
                                    <span>{item.value}%</span>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${item.value}%` }}
                                        transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                                        className={`h-full ${idx === 0 ? 'bg-blue-500' : 'bg-slate-500'}`}
                                    />
                                </div>
                            </div>
                        )) : (
                            <div className="text-center text-slate-500 italic py-4">Données de leadership insuffisantes</div>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* SECTION 4: SCORES 7 DIMENSIONS */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50"
            >
                <div className="flex items-center gap-4 mb-8 border-b border-slate-700 pb-4">
                    <BarChart2 className="text-orange-400" size={28} />
                    <h2 className="text-2xl font-bold text-white tracking-wide">4. SCORES SUR 7 DIMENSIONS</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* RADAR CHART */}
                    <div className="h-[350px] w-full bg-slate-900/50 rounded-2xl border border-slate-800 p-4 flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={dimensionData}>
                                <PolarGrid stroke="#334155" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 'bold' }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar name="Score" dataKey="A" stroke="#f97316" fill="#f97316" fillOpacity={0.4} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                                    itemStyle={{ color: '#f8fafc' }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* BARS */}
                    <div className="space-y-6 flex flex-col justify-center">
                        {dimensionData.map((d, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="font-bold text-slate-300">{d.subject}</span>
                                    <span className={`font-black text-xl ${d.A > 75 ? 'text-emerald-400' : d.A < 40 ? 'text-rose-400' : 'text-blue-400'}`}>
                                        {d.A}/100
                                    </span>
                                </div>
                                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${d.A}%` }}
                                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: d.color === '#ef4444' ? '#ef4444' : (d.A > 75 ? '#10b981' : d.A < 40 ? '#ef4444' : '#3b82f6') }}
                                    />
                                </div>
                                <p className="text-xs text-slate-500 mt-1 italic">
                                    {d.A > 75 ? "Point fort majeur" : d.A < 40 ? "Zone de vigilance critique" : "Niveau opérationnel standard"}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* SECTION 5: PROFIL COMBINÉ */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
            >
                <div className="bg-slate-900 rounded-[22px] p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Zap size={120} />
                    </div>

                    <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-bold uppercase tracking-widest text-sm mb-6 border border-blue-500/20">
                        Section 5 : Profil Combiné
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                        {safeMbti.code} <span className="text-slate-600 mx-2">×</span> <span className="text-blue-400">{dominantProfile || "?"}</span>
                    </h2>

                    <div className="text-2xl font-medium text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        "La <span className="text-purple-400">Vision Stratégique</span> du {safeMbti.title} rencontre le <span className="text-blue-400">Pragmatisme</span> du {PROFILES_DESC[dominantProfile]?.title || dominantProfile || "Leader"}"
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                <TrendingUp size={18} className="text-emerald-400" /> Synergies
                            </h4>
                            <p className="text-sm text-slate-400">Votre capacité d'analyse ({safeMbti.code[2]}) renforce la précision de vos décisions ({dominantProfile}).</p>
                        </div>
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                <AlertTriangle size={18} className="text-amber-400" /> Tensions
                            </h4>
                            <p className="text-sm text-slate-400">Risque de conflit entre votre besoin de contrôle ({safeMbti.code[3]}) et la réalité du terrain.</p>
                        </div>
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                <Target size={18} className="text-blue-400" /> Impact
                            </h4>
                            <p className="text-sm text-slate-400">Style de direction orienté vers la performance durable et la structuration.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* SECTIONS 6-7-8-9 GRID */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* FORCES */}
                <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50">
                    <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                        <CheckCircle /> VOS FORCES ULTIMES
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Capacité à trancher dans l'incertitude",
                            "Vision systémique de l'entreprise",
                            "Leadership naturel en temps de crise",
                            "Fidélité aux principes fondamentaux"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-slate-300">
                                <span className="text-emerald-500 mt-1">✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* VIGILANCES */}
                <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50">
                    <h3 className="text-xl font-bold text-rose-400 mb-6 flex items-center gap-2">
                        <AlertTriangle /> VOS VIGILANCES
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Attention à ne pas isoler les opinions divergentes",
                            "Risque d'épuisement par sur-responsabilisation",
                            "Nécessité de déléguer plus massivement",
                            "Dark Empathy: Surveillez votre cynisme"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-slate-300">
                                <span className="text-rose-500 mt-1">!</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* FOOTER */}
            <div className="border-t border-slate-800 pt-12 text-center text-slate-500 text-sm">
                <p>Analyse générée par HCR Sentinel AI v2.4 • Confidentialité garantie</p>
                <div className="flex justify-center gap-4 mt-4">
                    <button className="text-slate-400 hover:text-white transition-colors">Télécharger PDF</button>
                    <button className="text-slate-400 hover:text-white transition-colors">Partager</button>
                </div>
            </div>

        </div>
    );
};
