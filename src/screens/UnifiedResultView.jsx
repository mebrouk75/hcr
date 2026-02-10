
import React from 'react';
import { motion } from 'framer-motion';
import {
    Award, Target, Shield, Zap, Brain, Activity,
    TrendingUp, AlertTriangle, CheckCircle, BarChart2,
    Briefcase, Users, UserCheck, ArrowRight
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

// Role-specific configurations
const ROLE_CONFIG = {
    'barman': {
        title: 'BARMAN',
        subtitle: 'Évaluation complète des compétences opérationnelles et du profil comportemental.',
        accent: '#f59e0b',
        showLeadership: false,
        forcesList: [
            "Rapidité d'exécution sous pression",
            "Contact client naturel et efficace",
            "Polyvalence technique au bar",
            "Gestion du stress en pic d'activité"
        ],
        vigilancesList: [
            "Risque d'automatisme sans personnalisation",
            "Attention à la rigueur d'hygiène constante",
            "Gestion de la fatigue en fin de service",
            "Équilibre entre rapidité et qualité"
        ]
    },
    'serveur': {
        title: 'SERVEUR',
        subtitle: 'Analyse des aptitudes de service, empathie client et résilience terrain.',
        accent: '#10b981',
        showLeadership: false,
        forcesList: [
            "Sens du service et de l'accueil",
            "Capacité d'écoute active du client",
            "Résistance physique et mentale",
            "Travail en équipe fluide"
        ],
        vigilancesList: [
            "Gestion des clients difficiles",
            "Risque de désinvestissement en creux d'activité",
            "Attention au respect des procédures",
            "Équilibre vie professionnelle/personnelle"
        ]
    },
    'chef-de-rang': {
        title: 'CHEF DE RANG',
        subtitle: 'Évaluation du leadership de proximité, coordination et excellence de service.',
        accent: '#8b5cf6',
        showLeadership: true,
        forcesList: [
            "Leadership naturel sur sa zone",
            "Coordination équipe / cuisine efficace",
            "Excellence dans la relation client",
            "Capacité à former et encadrer"
        ],
        vigilancesList: [
            "Risque de micro-management",
            "Attention à la délégation effective",
            "Gestion des conflits inter-équipes",
            "Maintien de la qualité sous pression"
        ]
    },
    'manager-adj': {
        title: 'MANAGER ADJOINT',
        subtitle: 'Analyse du potentiel managérial, prise de décision et intelligence situationnelle.',
        accent: '#3b82f6',
        showLeadership: true,
        forcesList: [
            "Capacité d'analyse des situations complexes",
            "Support efficace au Manager Principal",
            "Prise de décision en autonomie",
            "Gestion des priorités multiples"
        ],
        vigilancesList: [
            "Risque de dépendance au Manager Principal",
            "Affirmation de l'autorité face à l'équipe",
            "Gestion de la pression hiérarchique",
            "Développement de la vision stratégique"
        ]
    },
    'manager': {
        title: 'MANAGER',
        subtitle: 'Évaluation du leadership opérationnel, gestion d\'équipe et performance globale.',
        accent: '#ef4444',
        showLeadership: true,
        forcesList: [
            "Leadership opérationnel affirmé",
            "Vision globale de l'établissement",
            "Capacité à motiver et fédérer",
            "Réactivité en situation de crise"
        ],
        vigilancesList: [
            "Risque d'épuisement par sur-responsabilisation",
            "Attention à la communication descendante",
            "Délégation vs. contrôle total",
            "Maintien de l'exemplarité sous pression"
        ]
    }
};

const UnifiedResultView = ({ data, mbtiProfile, roleId, onNavigateHome }) => {
    const {
        dimensions, reliability, verdict, verdictColor,
        adaptabilityVerdict, synthesisText, flags,
        globalScore, synthesis, dominantProfile, profileData
    } = data;

    const config = ROLE_CONFIG[roleId] || ROLE_CONFIG['barman'];
    const safeReliability = reliability || 0;
    const safeMbti = mbtiProfile || { code: '????', title: 'Profil Inconnu', description: 'Pas de données MBTI', forces: [] };

    // Reliability
    const reliabilityColor = safeReliability > 89 ? 'text-emerald-500' : safeReliability > 59 ? 'text-amber-500' : 'text-rose-500';
    const reliabilityText = safeReliability > 89 ? 'Excellent' : safeReliability > 59 ? 'Moyen' : 'Faible';

    // Radar data
    const radarData = [
        { subject: 'Résilience', A: dimensions?.RES || 0, fullMark: 100 },
        { subject: 'Empathie', A: dimensions?.EMP || 0, fullMark: 100 },
        { subject: 'Autorité', A: dimensions?.AUT || 0, fullMark: 100 },
        { subject: 'Intégrité', A: dimensions?.INT || 0, fullMark: 100 },
        { subject: 'Vigilance', A: dimensions?.TOX || 0, fullMark: 100 },
        { subject: 'Adaptabilité', A: dimensions?.ADA || 0, fullMark: 100 },
    ];

    // Score color helper
    const scoreColor = (val) => val > 75 ? 'text-emerald-400' : val < 40 ? 'text-rose-400' : 'text-blue-400';
    const barColor = (val) => val > 75 ? '#10b981' : val < 40 ? '#ef4444' : '#3b82f6';

    return (
        <div className="max-w-7xl mx-auto space-y-12 p-6 text-slate-200 font-sans">

            {/* HEADER */}
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                    RÉSULTATS <span style={{ color: config.accent }}>SENTINEL</span> {config.title}
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    {config.subtitle}
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
                    <div className="space-y-3">
                        {/* Score global */}
                        <div className="bg-slate-700/30 border border-slate-600/50 p-6 rounded-xl text-center">
                            <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Score Global</div>
                            <div className="text-5xl font-black" style={{ color: config.accent }}>{globalScore || 0}<span className="text-xl text-slate-500">/100</span></div>
                        </div>
                        {/* Flags */}
                        {flags && flags.length > 0 && flags.map((flag, i) => (
                            <div key={i} className="bg-rose-500/10 border border-rose-500/30 p-4 rounded-xl flex items-center gap-3 text-rose-300">
                                <AlertTriangle size={20} />
                                <span className="font-bold text-rose-400 text-sm">{flag}</span>
                            </div>
                        ))}
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
                        {safeMbti.aka && (
                            <div className="text-sm text-slate-400 uppercase tracking-widest">{safeMbti.aka}</div>
                        )}
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

                {/* SECTION 3: PROFIL OPÉRATIONNEL */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50"
                >
                    <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                        <Award style={{ color: config.accent }} size={28} />
                        <h2 className="text-2xl font-bold text-white tracking-wide">3. PROFIL OPÉRATIONNEL</h2>
                    </div>

                    {profileData ? (
                        <div>
                            <div className="text-center mb-6">
                                <h3 className="text-3xl font-black mb-2" style={{ color: config.accent }}>
                                    {profileData.title}
                                </h3>
                                <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">
                                    {profileData.desc}
                                </p>
                            </div>
                            <p className="text-slate-300 leading-relaxed italic border-l-4 pl-4 py-2 rounded-r-lg" style={{ borderColor: config.accent, backgroundColor: `${config.accent}10` }}>
                                "{profileData.full_text}"
                            </p>
                        </div>
                    ) : dominantProfile ? (
                        <div className="text-center">
                            <h3 className="text-4xl font-black mb-2" style={{ color: config.accent }}>
                                {dominantProfile}
                            </h3>
                            <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">
                                Profil Dominant Détecté
                            </p>
                        </div>
                    ) : (
                        <div className="text-center text-slate-500 italic py-4">
                            Données de profil insuffisantes
                        </div>
                    )}

                    {/* Verdict */}
                    {verdict && (
                        <div className="mt-6 bg-slate-700/30 rounded-xl p-4 border border-slate-600/50">
                            <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Verdict Global</div>
                            <p className="text-lg font-bold" style={{ color: verdictColor?.includes('red') || verdictColor?.includes('rose') ? '#ef4444' : verdictColor?.includes('green') || verdictColor?.includes('emerald') ? '#10b981' : config.accent }}>
                                {verdict}
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* SECTION 4: SCORES 6 DIMENSIONS */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50"
            >
                <div className="flex items-center gap-4 mb-8 border-b border-slate-700 pb-4">
                    <BarChart2 className="text-orange-400" size={28} />
                    <h2 className="text-2xl font-bold text-white tracking-wide">4. SCORES SUR 6 DIMENSIONS</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* RADAR CHART */}
                    <div className="h-[350px] w-full bg-slate-900/50 rounded-2xl border border-slate-800 p-4 flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                                <PolarGrid stroke="#334155" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 'bold' }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar name="Score" dataKey="A" stroke={config.accent} fill={config.accent} fillOpacity={0.4} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                                    itemStyle={{ color: '#f8fafc' }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* BARS */}
                    <div className="space-y-6 flex flex-col justify-center">
                        {radarData.map((d, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="font-bold text-slate-300">{d.subject}</span>
                                    <span className={`font-black text-xl ${scoreColor(d.A)}`}>
                                        {d.A}/100
                                    </span>
                                </div>
                                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${d.A}%` }}
                                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: barColor(d.A) }}
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

            {/* SECTION 5: ANALYSE CROISÉE (only for leadership roles) */}
            {mbtiProfile && config.showLeadership && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="rounded-3xl p-1"
                    style={{ background: `linear-gradient(to right, ${config.accent}33, #8b5cf633)` }}
                >
                    <div className="bg-slate-900 rounded-[22px] p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Zap size={120} />
                        </div>

                        <div className="inline-block px-4 py-1 rounded-full text-sm mb-6 border font-bold uppercase tracking-widest"
                            style={{ backgroundColor: `${config.accent}15`, color: config.accent, borderColor: `${config.accent}30` }}>
                            Section 5 : Profil Combiné
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                            {safeMbti.code} <span className="text-slate-600 mx-2">×</span> <span style={{ color: config.accent }}>{config.title}</span>
                        </h2>

                        <div className="text-2xl font-medium text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            "La <span className="text-purple-400">personnalité</span> du {safeMbti.title} appliquée au poste de <span style={{ color: config.accent }}>{config.title}</span>"
                        </div>

                        {/* Synthesis text */}
                        {synthesisText && (
                            <div className="max-w-3xl mx-auto text-left mb-8">
                                <p className="text-slate-300 text-sm leading-relaxed italic border-l-4 pl-4 py-2 rounded-r-lg" style={{ borderColor: config.accent, backgroundColor: `${config.accent}08` }}>
                                    "{synthesisText}"
                                </p>
                            </div>
                        )}

                        <div className="grid md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
                            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <TrendingUp size={18} className="text-emerald-400" /> Synergies
                                </h4>
                                <p className="text-sm text-slate-400">
                                    Votre profil {safeMbti.code} apporte une vision naturelle qui renforce vos compétences sur le poste de {config.title}.
                                </p>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <AlertTriangle size={18} className="text-amber-400" /> Tensions
                                </h4>
                                <p className="text-sm text-slate-400">
                                    {adaptabilityVerdict || "Évaluez l'équilibre entre vos préférences naturelles et les exigences du poste."}
                                </p>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Target size={18} style={{ color: config.accent }} /> Impact
                                </h4>
                                <p className="text-sm text-slate-400">
                                    Score global de {globalScore || 0}/100 — {globalScore > 70 ? "Profil très prometteur pour ce poste." : globalScore > 50 ? "Potentiel avec axes d'amélioration." : "Accompagnement recommandé."}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* SECTIONS 6-7: FORCES & VIGILANCES */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* FORCES */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50"
                >
                    <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                        <CheckCircle /> VOS FORCES
                    </h3>
                    <ul className="space-y-4">
                        {(synthesis?.strengths || config.forcesList).map((item, i) => (
                            <li key={i} className="flex gap-3 text-slate-300">
                                <span className="text-emerald-500 mt-1">✓</span>
                                <span>{typeof item === 'string' ? item : <><strong className="text-emerald-300">{item.label} :</strong> {item.text}</>}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* VIGILANCES */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50"
                >
                    <h3 className="text-xl font-bold text-rose-400 mb-6 flex items-center gap-2">
                        <AlertTriangle /> POINTS DE VIGILANCE
                    </h3>
                    <ul className="space-y-4">
                        {(synthesis?.weaknesses || config.vigilancesList).map((item, i) => (
                            <li key={i} className="flex gap-3 text-slate-300">
                                <span className="text-rose-500 mt-1">!</span>
                                <span>{typeof item === 'string' ? item : <><strong className="text-rose-300">{item.label} :</strong> {item.text}</>}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* FOOTER */}
            <div className="border-t border-slate-800 pt-12 text-center text-slate-500 text-sm">
                <p>Analyse générée par HCR Sentinel v3.0 • Confidentialité garantie</p>
                <div className="flex justify-center gap-4 mt-4">
                    <button className="text-slate-400 hover:text-white transition-colors">Télécharger PDF</button>
                    <button className="text-slate-400 hover:text-white transition-colors">Partager</button>
                    <button
                        onClick={onNavigateHome}
                        className="px-6 py-2 rounded-xl font-bold transition-colors border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white ml-4"
                    >
                        Retour au Hub
                    </button>
                </div>
            </div>

        </div>
    );
};

export default UnifiedResultView;
