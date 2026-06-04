
import React from 'react';
import { motion } from 'framer-motion';
import {
    Award, Target, Shield, Zap, Brain, Activity,
    TrendingUp, AlertTriangle, CheckCircle, BarChart2,
    Briefcase, Users, Layout, Map, Compass, Lock, Star, Crown
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

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

export const DirectorResultView = ({ data, mbtiProfile }) => {
    // Role labels mapping
    const ROLE_LABELS = {
        'DIRECTEUR': 'Directeur',
        'MANAGER': 'Manager Adjoint',
        'MANAGER_PRINCIPAL': 'Manager',
        'BARMAN': 'Barman',
        'SERVEUR': 'Serveur',
        'CHEF_RANG': 'Chef de Rang',
        'CHEF_DE_RANG': 'Chef de Rang',
        'ADN_ENTREPRISE': 'ADN Entreprise'
    };

    // NEW v5.2 Structure
    const {
        version,
        profil_dominant,
        macro_classement = [],
        top5_facettes = [],
        scores_normalises_facettes = {}, // NEW: All facettes with scores
        dimensions_brutes = {},
        structure_recommandee,
        profil_textuel,
        alertes = [],
        macro_profils = {},
        questions_repondues = {},
        role = 'DIRECTEUR'
    } = data || {};

    const roleLabel = ROLE_LABELS[role] || role;

    // Safety checks
    const safeMbti = mbtiProfile || { code: '????', title: 'Profil Inconnu', description: 'Pas de données MBTI', forces: [] };

    // Prepare ALL Facettes sorted by score (not just top 5)
    const all_facettes = Object.entries(scores_normalises_facettes)
        .sort((a, b) => b[1] - a[1])
        .map(([facette, score]) => ({ facette, score }));

    // Prepare Radar Data for Macro-Profils
    const radarData = Object.entries(macro_profils).map(([profil, score]) => ({
        subject: profil,
        score: Math.round(score),
        fullMark: 100
    }));

    // Prepare Dimensions Data
    const dimensionLabels = {
        'INFLUENCE': 'Influence',
        'CONSIDÉRATION': 'Considération',
        'CRÉATIVITÉ': 'Créativité',
        'RIGUEUR': 'Rigueur',
        'ÉQUILIBRE': 'Équilibre',
        'STRESS': 'Gestion Stress',
        'DARK_EMPATHY': 'Dark Empathy'
    };

    const dimensionData = Object.entries(dimensions_brutes).map(([key, value]) => ({
        label: dimensionLabels[key] || key,
        value: value !== null ? Math.round(value * 25) : 0, // 0-4 → 0-100
        rawValue: value,
        isDark: key === 'DARK_EMPATHY'
    }));

    return (
        <div className="max-w-7xl mx-auto space-y-12 p-6 text-slate-200 font-sans">

            {/* HEADER */}
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                    RÉSULTATS <span className="text-blue-500">SENTINEL</span> {roleLabel.toUpperCase()}
                </h1>
                <p className="text-stone-500 text-lg max-w-2xl mx-auto">
                    Analyse v{version} - Rapport psychométrique basé sur {questions_repondues.sjt || 0} situations & {questions_repondues.dimensions || 0} questions dimensionnelles
                </p>
            </div>

            {/* ALERTES SECTION */}
            {alertes.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    {alertes.map((alerte, idx) => (
                        <div
                            key={idx}
                            className={`${alerte.type === 'WARNING' ? 'bg-rose-500/10 border-rose-500/30 text-rose-300' : 'bg-[#0A0A0A]mber-500/10 border-amber-500/30 text-amber-300'} border p-6 rounded-xl flex items-center gap-4`}
                        >
                            <AlertTriangle size={24} className={alerte.type === 'WARNING' ? 'text-rose-400' : 'text-amber-400'} />
                            <div>
                                <div className="font-bold text-lg mb-1">[{alerte.type}]</div>
                                <div>{alerte.message}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}

            <div className="grid md:grid-cols-2 gap-8">
                {/* SECTION 1: PROFIL MBTI */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-stone-900/50 rounded-3xl p-8 border border-slate-700/50"
                >
                    <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                        <Brain className="text-purple-400" size={28} />
                        <h2 className="text-2xl font-bold text-white tracking-wide">1. PROFIL MBTI</h2>
                    </div>

                    <div className="text-center mb-8">
                        <h3 className="text-6xl font-black text-white mb-2 tracking-tighter">{safeMbti.code}</h3>
                        <div className="text-2xl font-bold text-purple-400 mb-1">{safeMbti.title}</div>
                        <div className="text-sm text-stone-500 uppercase tracking-widest">{safeMbti.aka}</div>
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

                {/* SECTION 2: PROFIL DOMINANT */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-3xl p-8 border border-blue-500/30"
                >
                    <div className="flex items-center gap-4 mb-6 border-b border-blue-500/30 pb-4">
                        <Crown className="text-blue-400" size={28} />
                        <h2 className="text-2xl font-bold text-white tracking-wide">2. PROFIL DOMINANT</h2>
                    </div>

                    <div className="text-center mb-6">
                        <h3 className="text-6xl font-black text-blue-400 mb-4">{profil_dominant || "N/A"}</h3>
                        <div className="text-lg text-slate-300 leading-relaxed whitespace-pre-line">
                            {profil_textuel || "Aucune description disponible"}
                        </div>
                    </div>

                    {structure_recommandee && (
                        <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/30 text-center">
                            <div className="text-xs uppercase font-bold text-blue-400 mb-2">📍 Structure Recommandée</div>
                            <div className="text-sm font-bold text-white">{structure_recommandee}</div>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* SECTION 3: 9 FACETTES DOMINANTES */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-stone-900/50 rounded-3xl p-8 border border-slate-700/50"
            >
                <div className="flex items-center gap-4 mb-8 border-b border-slate-700 pb-4">
                    <Star className="text-yellow-400" size={28} />
                    <h2 className="text-2xl font-bold text-white tracking-wide">3. LES 9 FACETTES DOMINANTES</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {all_facettes.slice(0, 9).map((facette, idx) => (
                        <div key={idx} className={idx === 0 ? "md:col-span-3" : ""}>
                            <div className="flex justify-between items-end mb-2">
                                <div className="flex items-center gap-3">
                                    <span className={`${idx === 0 ? 'text-3xl' : 'text-xl'} font-black text-yellow-500`}>#{idx + 1}</span>
                                    <span className={`font-bold ${idx === 0 ? 'text-2xl' : 'text-base'} text-slate-200`}>
                                        {facette.facette}
                                    </span>
                                    {idx === 0 && <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full font-bold">★ DOMINANT</span>}
                                </div>
                                <span className={`font-black ${idx === 0 ? 'text-3xl' : 'text-xl'} ${facette.score > 75 ? 'text-emerald-400' : facette.score > 50 ? 'text-blue-400' : 'text-stone-500'}`}>
                                    {facette.score.toFixed(1)}%
                                </span>
                            </div>
                            <div className={`${idx === 0 ? 'h-5' : 'h-3'} bg-slate-700 rounded-full overflow-hidden`}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${facette.score}%` }}
                                    transition={{ duration: 1, delay: 0.2 + (idx * 0.08) }}
                                    className={`h-full rounded-full ${idx === 0 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-blue-500'}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* SECTION 4: MACRO-PROFILS RADAR */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-stone-900/50 rounded-3xl p-8 border border-slate-700/50"
            >
                <div className="flex items-center gap-4 mb-8 border-b border-slate-700 pb-4">
                    <Compass className="text-orange-400" size={28} />
                    <h2 className="text-2xl font-bold text-white tracking-wide">4. ANALYSE DES 9 MACRO-PROFILS</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* RADAR CHART */}
                    <div className="h-[400px] w-full bg-black/50 rounded-2xl border border-stone-800 p-4 flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                                <PolarGrid stroke="#334155" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar name="Score" dataKey="score" stroke="#f97316" fill="#f97316" fillOpacity={0.6} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* BARS */}
                    <div className="space-y-4 flex flex-col justify-center">
                        {macro_classement.slice(0, 9).map((mp, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-end mb-1">
                                    <span className={`font-bold ${mp.profil === profil_dominant ? 'text-orange-400' : 'text-slate-300'}`}>
                                        {mp.profil}
                                        {mp.profil === profil_dominant && <span className="text-xs ml-2 text-[#C9A84C]">← DOMINANT</span>}
                                    </span>
                                    <span className={`font-black text-lg ${mp.score > 40 ? 'text-emerald-400' : mp.score > 25 ? 'text-blue-400' : 'text-stone-500'}`}>
                                        {mp.score.toFixed(1)}%
                                    </span>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${mp.score}%` }}
                                        transition={{ duration: 1, delay: 0.5 + (i * 0.05) }}
                                        className={`h-full rounded-full ${mp.profil === profil_dominant ? 'bg-[#C9A84C]' : 'bg-blue-500'}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* SECTION 5: DIMENSIONS BRUTES (Phase 3) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-stone-900/50 rounded-3xl p-8 border border-slate-700/50"
            >
                <div className="flex items-center gap-4 mb-8 border-b border-slate-700 pb-4">
                    <BarChart2 className="text-cyan-400" size={28} />
                    <h2 className="text-2xl font-bold text-white tracking-wide">5. SCORES DIMENSIONS (Phase 3)</h2>
                </div>

                <div className="space-y-6">
                    {dimensionData.map((d, i) => (
                        <div key={i}>
                            <div className="flex justify-between items-end mb-2">
                                <span className="font-bold text-slate-300">{d.label}</span>
                                <span className={`font-black text-xl ${d.rawValue > 3 ? 'text-emerald-400' : d.rawValue < 1.5 ? 'text-rose-400' : 'text-blue-400'}`}>
                                    {d.rawValue !== null ? d.rawValue.toFixed(2) : 'N/A'} / 4.00
                                </span>
                            </div>
                            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${d.value}%` }}
                                    transition={{ duration: 1, delay: 0.7 + (i * 0.1) }}
                                    className="h-full rounded-full"
                                    style={{
                                        backgroundColor: d.isDark ? '#ef4444' : (d.rawValue > 3 ? '#10b981' : d.rawValue < 1.5 ? '#ef4444' : '#3b82f6')
                                    }}
                                />
                            </div>
                            <p className="text-xs text-stone-500 mt-1 italic">
                                {d.rawValue > 3 ? "Score très élevé" : d.rawValue < 1.5 ? "Score très faible" : "Score modéré"}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* SECTION 6: AUDIT FINAL - TYPE DE PERSONNALITÉ */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-orange-900/30 to-slate-900/50 rounded-3xl p-8 md:p-12 border border-[#C9A84C]/50/30"
            >
                <div className="flex items-center gap-4 mb-8 border-b border-[#C9A84C]/50/30 pb-4">
                    <Briefcase className="text-orange-400" size={32} />
                    <h2 className="text-3xl font-black text-white tracking-wide">6. AUDIT PERSONNALITÉ — {roleLabel.toUpperCase()}</h2>
                </div>

                {/* Profil Textuel */}
                <div className="bg-stone-900/50 p-6 rounded-2xl mb-8 border border-slate-700">
                    <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                        <Brain size={24} />
                        Synthèse Psychologique
                    </h3>
                    <p className="text-lg text-slate-200 leading-relaxed whitespace-pre-line">
                        {profil_textuel || "Profil en cours d'analyse..."}
                    </p>
                </div>

                {/* Sections Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Profil Dominant + Structure */}
                    <div className="bg-stone-900/50 p-6 rounded-2xl border border-slate-700">
                        <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                            <Crown size={20} />
                            Archétype Dominant
                        </h3>
                        <div className="text-center mb-4">
                            <div className="text-4xl font-black text-blue-400 mb-2">{profil_dominant || "N/A"}</div>
                            <div className="text-sm text-stone-500">
                                Score : {macro_profils[profil_dominant]?.toFixed(1) || 0}%
                            </div>
                        </div>
                        {structure_recommandee && (
                            <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/30 text-center">
                                <div className="text-xs uppercase font-bold text-blue-400 mb-1">📍 Environnement Optimal</div>
                                <div className="text-sm font-bold text-white">{structure_recommandee}</div>
                            </div>
                        )}
                    </div>

                    {/* MBTI Integration */}
                    <div className="bg-stone-900/50 p-6 rounded-2xl border border-slate-700">
                        <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2">
                            <Brain size={20} />
                            Profil Cognitif (MBTI)
                        </h3>
                        <div className="text-center mb-4">
                            <div className="text-4xl font-black text-purple-400 mb-2">{safeMbti.code}</div>
                            <div className="text-sm text-purple-300 mb-2">{safeMbti.title}</div>
                        </div>
                        <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/30">
                            <p className="text-xs text-slate-300 italic">"{safeMbti.description}"</p>
                        </div>
                    </div>
                </div>

                {/* Analyse Croisée */}
                <div className="bg-stone-900/50 p-6 rounded-2xl border border-slate-700 mb-8">
                    <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                        <Target size={20} />
                        Analyse Croisée : MBTI × Macro-Profil
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        La combinaison <span className="text-purple-400 font-bold">{safeMbti.code}</span> × <span className="text-blue-400 font-bold">{profil_dominant}</span> indique un profil adapté au poste de {roleLabel} en restauration.
                        {` `}Le candidat présente un équilibre entre son profil cognitif ({safeMbti.code}) et ses comportements situationnels ({profil_dominant}).
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/30 text-center">
                            <div className="text-xs uppercase font-bold text-emerald-400 mb-1">Compatibilité</div>
                            <div className="text-2xl font-black text-emerald-400">
                                {macro_profils[profil_dominant] > 40 ? "Excellente" : macro_profils[profil_dominant] > 30 ? "Bonne" : "Moyenne"}
                            </div>
                        </div>
                        <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/30 text-center">
                            <div className="text-xs uppercase font-bold text-blue-400 mb-1">Leadership</div>
                            <div className="text-2xl font-black text-blue-400">
                                {all_facettes[0]?.score > 80 ? "Fort" : all_facettes[0]?.score > 60 ? "Modéré" : "Émergent"}
                            </div>
                        </div>
                        <div className="bg-[#C9A84C]/10 p-3 rounded-lg border border-[#C9A84C]/50/30 text-center">
                            <div className="text-xs uppercase font-bold text-orange-400 mb-1">Risque</div>
                            <div className="text-2xl font-black text-orange-400">
                                {(macro_profils.LOUP || 0) > 50 ? "Élevé" : (macro_profils.OMBRE || 0) > 40 ? "Modéré" : "Faible"}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Indicateur Agréabilité */}
                {(() => {
                    const considScore = dimensions_brutes['CONSIDÉRATION'];
                    const agreeLevel = considScore !== null && considScore !== undefined
                        ? (considScore > 2.5 ? 'HIGH' : considScore < 1.5 ? 'LOW' : 'MODERATE')
                        : null;
                    const agreePercent = considScore !== null && considScore !== undefined
                        ? Math.round((considScore / 4) * 100)
                        : 0;

                    return agreeLevel !== null ? (
                        <div className="bg-stone-900/50 p-6 rounded-2xl border border-slate-700 mb-8">
                            <h3 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                                <Users size={20} />
                                Indice d'Agréabilité (Big Five)
                            </h3>
                            <div className="flex items-center gap-6">
                                {/* Gauge visuelle */}
                                <div className="flex-1">
                                    <div className="flex justify-between text-xs font-bold uppercase mb-2">
                                        <span className="text-rose-400">Low Agreeableness</span>
                                        <span className="text-stone-500">Moderate</span>
                                        <span className="text-emerald-400">High Agreeableness</span>
                                    </div>
                                    <div className="h-4 bg-gradient-to-r from-rose-900 via-slate-700 to-emerald-900 rounded-full relative overflow-hidden">
                                        <div
                                            className="absolute top-0 h-full w-1.5 bg-[#0D0D0D] rounded-full shadow-lg shadow-white/50 transition-all"
                                            style={{ left: `${Math.max(2, Math.min(98, agreePercent))}%` }}
                                        />
                                    </div>
                                    <div className="text-center mt-2">
                                        <span className={`text-2xl font-black ${agreeLevel === 'HIGH' ? 'text-emerald-400' : agreeLevel === 'LOW' ? 'text-rose-400' : 'text-amber-400'}`}>
                                            {agreeLevel === 'HIGH' ? '🟢 HIGH AGREEABLENESS' : agreeLevel === 'LOW' ? '🔴 LOW AGREEABLENESS' : '🟡 MODERATE'}
                                        </span>
                                        <span className="text-stone-500 ml-3">({considScore?.toFixed(2)}/4.00)</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-stone-500 mt-3 italic">
                                {agreeLevel === 'HIGH'
                                    ? "Profil empathique et coopératif. Favorise l'harmonie d'équipe. Attention au risque de complaisance en situation de crise."
                                    : agreeLevel === 'LOW'
                                        ? "Profil direct et exigeant. Efficace en restructuration mais risque de friction relationnelle avec les équipes."
                                        : "Profil équilibré entre fermeté et coopération. Bonne adaptabilité relationnelle."
                                }
                            </p>
                        </div>
                    ) : null;
                })()}

                {/* Recommandations */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-stone-900/50 p-6 rounded-2xl border border-slate-700">
                        <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                            <CheckCircle size={20} />
                            Points Forts
                        </h3>
                        <ul className="space-y-3">
                            {all_facettes.slice(0, 3).map((f, i) => (
                                <li key={i} className="flex gap-2 text-slate-300">
                                    <span className="text-emerald-500 mt-1">✓</span>
                                    <span><strong className="text-emerald-400">{f.facette}</strong> ({f.score.toFixed(1)}%) - Atout majeur pour la direction</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-stone-900/50 p-6 rounded-2xl border border-slate-700">
                        <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
                            <AlertTriangle size={20} />
                            Axes de Vigilance
                        </h3>
                        <ul className="space-y-3">
                            {alertes.length > 0 ? alertes.map((a, i) => (
                                <li key={i} className="flex gap-2 text-slate-300">
                                    <span className="text-amber-500 mt-1">⚠</span>
                                    <span className="text-sm">{a.message}</span>
                                </li>
                            )) : (
                                <li className="flex gap-2 text-slate-300">
                                    <span className="text-emerald-500 mt-1">✓</span>
                                    <span>Aucune alerte majeure détectée. Profil équilibré.</span>
                                </li>
                            )}
                            {(macro_profils.OMBRE || 0) > 30 && (
                                <li className="flex gap-2 text-slate-300">
                                    <span className="text-amber-500 mt-1">!</span>
                                    <span>Tendance passive détectée - Vérifier l'assertivité en entretien</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Verdict Final */}
                <div className="mt-8 bg-gradient-to-r from-blue-600/20 to-[#A68A3D]/20 p-6 rounded-2xl border border-blue-500/30">
                    <h3 className="text-2xl font-black text-white mb-3 text-center">VERDICT FINAL</h3>
                    <p className="text-lg text-center text-slate-200 font-bold mb-2">
                        Profil <span className="text-emerald-400">
                            {macro_profils[profil_dominant] > 40 ? "RECOMMANDÉ" : macro_profils[profil_dominant] > 30 ? "VALIDÉ" : "À ÉVALUER"}
                        </span> pour un poste de {roleLabel} en Restauration
                    </p>
                    <p className="text-sm text-center text-stone-500">
                        Basé sur {questions_repondues.sjt || 0} questions situationnelles & {questions_repondues.dimensions || 0} dimensions psychologiques
                    </p>
                </div>
            </motion.div>

            {/* FOOTER */}
            <div className="border-t border-stone-800 pt-12 text-center text-stone-500 text-sm">
                <p>Analyse générée par HCR Sentinel AI v{version} • Spécialisé Restauration • Confidentialité garantie</p>
                <div className="flex justify-center gap-4 mt-4">
                    <button className="text-stone-500 hover:text-white transition-colors">Télécharger PDF</button>
                    <button className="text-stone-500 hover:text-white transition-colors">Partager</button>
                </div>
            </div>

        </div>
    );
};
