import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DirectorResultView } from './screens/SentinelDirecteur';
import UnifiedResultView from './screens/UnifiedResultView';
import { AlertTriangle, ShieldCheck, Brain, Zap, HeartHandshake, UserCheck, BrainCircuit, Activity, ChefHat, Heart, Siren, Users, CheckCircle2, Coins } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ReferenceArea } from 'recharts';
import { HCR_DATA, HCR_ROLES } from './data/hcr_questions';
import { MBTI_DIRECTEUR_DATA } from './data/mbti_directeur_data';
import { MBTI_MANAGER_ADJOINT_DATA } from './data/mbti_manager_adjoint_data';
import { MBTI_MANAGER_DATA } from './data/mbti_manager_data';
import { MBTI_BARMAN_DATA } from './data/mbti_barman_data';
import { MBTI_SERVEUR_DATA } from './data/mbti_serveur_data';
import { MBTI_CHEF_DE_RANG_DATA } from './data/mbti_chef_de_rang_data';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { SentinelEngine } from './logic/SentinelEngine';
import SentinelEngineV52 from './logic/SentinelEngineV52';
import { supabase } from './lib/supabase';

const SENTINEL_THEME = {
    bg: "#0A0A0A", // Slate-50 (Light)
    card: "#0D0D0D", // White
    text: "#ffffff", // Slate-900
    accent: "#C9A84C", // Orange Sentinel
    success: "#22c55e",
    warning: "#eab308",
    danger: "#ef4444",
    textMuted: "#a8a29e", // Slate-500
    border: "#292524" // Slate-200
};

// Instantiate Engines
const engine = new SentinelEngine();
const engineV52 = new SentinelEngineV52();

// --- LIKERT SCALE COMPONENT (Phase 3) ---
const LikertScale = ({ onChange, value, poleFaible, poleFort }) => {
    return (
        <div className="w-full flex flex-col gap-8 py-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-start gap-4">
                <div className="flex-1 bg-[#111111] rounded-xl p-4 border-l-4 border-stone-700">
                    <span className="text-[10px] font-black text-stone-500 uppercase tracking-tighter mb-1 block">Pôle A (Faible)</span>
                    <p className="text-sm font-semibold text-stone-400 leading-tight">{poleFaible}</p>
                </div>
                <div className="flex-1 bg-[#111111] rounded-xl p-4 border-r-4 border-stone-700 text-right">
                    <span className="text-[10px] font-black text-stone-500 uppercase tracking-tighter mb-1 block">Pôle B (Fort)</span>
                    <p className="text-sm font-semibold text-stone-400 leading-tight">{poleFort}</p>
                </div>
            </div>

            <div className="relative flex justify-between items-center px-2">
                {/* Visual Gradient Line */}
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-slate-200 via-orange-200 to-orange-500 top-1/2 -translate-y-1/2 rounded-full -z-10 opacity-30" />

                {[1, 2, 3, 4, 5].map((val) => {
                    const isActive = value === val;
                    const size = val === 1 || val === 5 ? "w-14 h-14" : val === 2 || val === 4 ? "w-12 h-12" : "w-10 h-10";
                    const activeColor = val <= 2 ? "bg-slate-700" : val === 3 ? "bg-[#C9A84C]/80" : "bg-[#C9A84C]";

                    return (
                        <button
                            key={val}
                            onClick={() => onChange(val)}
                            className="flex flex-col items-center group relative"
                        >
                            <div className={`
                                ${size} rounded-full flex items-center justify-center border-4 transition-all duration-300
                                ${isActive
                                    ? `${activeColor} border-white shadow-xl scale-110`
                                    : "bg-[#0D0D0D] border-stone-800 hover:border-orange-300 hover:scale-105 shadow-sm"}
                            `}>
                                {isActive && <div className="w-3 h-3 bg-[#0D0D0D] rounded-full animate-pulse" />}
                                {!isActive && <span className="text-xs font-bold text-stone-500">{val}</span>}
                            </div>
                        </button>
                    );
                })}
            </div>

            <div className="flex justify-between text-[10px] font-black text-stone-500 uppercase tracking-[2px] px-2">
                <span>Désaccord Total</span>
                <span>Neutre</span>
                <span>Accord Total</span>
            </div>
        </div>
    );
};


const saveResultsToSupabase = async (mappedResult, roleId) => {
    try {
        let authUser = (await supabase.auth.getUser()).data.user;
        let targetUserId = authUser ? authUser.id : "00000000-0000-0000-0000-000000000000";
        
        let verdictText = mappedResult.verdictColor === "text-emerald-500" ? "PERFORMANCE" : (mappedResult.verdictColor === "text-rose-500" ? "INCOMPATIBLE" : "STANDARD");

        const payload = {
            user_id: targetUserId,
            role_id: roleId,
            role_label: roleId.toUpperCase(),
            global_score: mappedResult.globalScore || 0,
            verdict: verdictText,
            dim_res: mappedResult.dimensions?.RES || 0,
            dim_emp: mappedResult.dimensions?.EMP || 0,
            dim_aut: mappedResult.dimensions?.AUT || 0,
            dim_int: mappedResult.dimensions?.INT || 0,
            dim_tox: mappedResult.dimensions?.TOX || 0,
            dim_ada: mappedResult.dimensions?.ADA || 0,
            top_traits: mappedResult.topTraits ? mappedResult.topTraits.map(t => t[0]) : [],
            profil: mappedResult.dominantProfile || mappedResult.profil_dominant || "STANDARD"
        };
        
        console.log("Saving to Supabase:", payload);
        const { data, error } = await supabase.from('resultats_candidats').insert(payload);
        if (error) throw error;
        
        // Save to local storage for dashboards that still rely on it
        localStorage.setItem('sentinel_results', JSON.stringify({
           roleLabel: payload.role_label,
           globalScore: payload.global_score,
           verdict: payload.verdict,
           verdictColor: mappedResult.verdictColor,
           dimensions: mappedResult.dimensions,
           topTraits: payload.top_traits,
           profil: payload.profil,
           testDone: true
        }));

    } catch (err) {
        console.error('Erreur sauvegarde résultats:', err);
    }
};

export default function Sentinel() {
    const { roleId } = useParams();
    const location = useLocation();

    // Attempt to get MBTI from state, fallback to localStorage
    const [mbtiProfile, setMbtiProfile] = useState(() => {
        if (location.state?.mbtiProfile) return location.state.mbtiProfile;
        try {
            const saved = localStorage.getItem(`mbti_result_${roleId}`);
            return saved ? JSON.parse(saved) : null;
        } catch (e) {
            console.error("Failed to load MBTI from storage", e);
            return null;
        }
    });

    const navigate = useNavigate();

    const [selectedRole, setSelectedRole] = useState(roleId || null);
    const [scores, setScores] = useState({});
    const [textAnswers, setTextAnswers] = useState({}); // Stores open text answers (Option E)
    const [showResults, setShowResults] = useState(false);
    const [evaluation, setEvaluation] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showPreTestAlert, setShowPreTestAlert] = useState(() => {
        return !location.state?.skipAlert;
    });

    // New state for Open Text Answer (Phase 3)
    const [isTypingOpenAnswer, setIsTypingOpenAnswer] = useState(false);
    const [openAnswerDraft, setOpenAnswerDraft] = useState("");

    // Stabilize questions with state instead of memo to prevent re-shuffles
    const [questions, setQuestions] = useState([]);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Get questions for the selected role
    useEffect(() => {
        if (!selectedRole) return;

        console.log("Initializing Test for Role:", selectedRole);
        let normalizedRole = selectedRole.toUpperCase();

        // FIX: Map URL slugs to Data Keys
        if (normalizedRole === 'CHEF-DE-RANG') normalizedRole = 'CHEF_RANG';
        if (normalizedRole === 'MANAGER-ADJ') normalizedRole = 'MANAGER'; // Manager Adj uses MANAGER data
        else if (normalizedRole === 'MANAGER') normalizedRole = 'MANAGER_PRINCIPAL'; // Manager uses MANAGER_PRINCIPAL data
        if (normalizedRole === 'AUDIT-ORGANISATIONNEL') normalizedRole = 'ADN_ENTREPRISE';

        const roleData = HCR_DATA[normalizedRole] || [];

        // Robust Flattening Logic
        let flatQuestions = [];
        if (roleData.length > 0) {
            flatQuestions = roleData.flatMap(item => {
                // If it's a section with items
                if (item.items && Array.isArray(item.items)) {
                    return item.items;
                }
                // If it's a direct question object (has id)
                if (item.id) {
                    return [item];
                }
                return [];
            });
        }

        // Add index logging
        console.log("Loaded questions count:", flatQuestions.length);

        // FISHER-YATES SHUFFLE
        // The user explicitly requested randomization ("questions were mixed")
        // BUT for DIRECTEUR, we must preserve Phase 1 (MBTI) -> Phase 2 (SJT) order.
        if (selectedRole !== 'directeur' && selectedRole !== 'manager') {
            for (let i = flatQuestions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [flatQuestions[i], flatQuestions[j]] = [flatQuestions[j], flatQuestions[i]];
            }
        } else {
            console.log("Shuffle disabled for DIRECTEUR to maintain phase order");
        }

        // Ensure unique IDs (Safety check)
        const uniqueQuestions = [];
        const seenIds = new Set();
        flatQuestions.forEach(q => {
            if (!seenIds.has(q.id)) {
                seenIds.add(q.id);
                uniqueQuestions.push(q);
            } else {
                console.warn("Duplicate Question ID removed:", q.id);
            }
        });

        // IF coming from MBTI phase, filter out MBTI questions (for DIRECTEUR and MANAGER)
        if ((normalizedRole === 'DIRECTEUR' || normalizedRole === 'MANAGER') && location.state?.mbtiProfile) {
            const phase2Questions = uniqueQuestions.filter(q => !q.dimension);
            console.log("Filtering out Phase 1 (MBTI). Remaining:", phase2Questions.length);
            setQuestions(phase2Questions);
            setScores(prev => ({ ...prev, ...location.state.mbtiScores }));
        } else {
            setQuestions(uniqueQuestions);
        }
    }, [selectedRole]);

    const totalQuestions = questions.length;
    const currentQuestion = questions[currentQuestionIndex];

    // Profile calculation helper
    const getProfileDetails = () => {
        if (!evaluation || !evaluation.profileData) return null;
        return evaluation.profileData;
    };

    // Handle answer selection
    const handleAnswer = (answerId) => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        try {
            console.log(`Answering Question ${currentQuestionIndex + 1}/${totalQuestions}`, { id: currentQuestion.id, answerId });

            const questionId = currentQuestion.id;

            // Save the answer
            setScores(prev => ({
                ...prev,
                [questionId]: answerId
            }));

            // Move to next question or show results
            if (currentQuestionIndex < totalQuestions - 1) {
                setTimeout(() => {
                    setCurrentQuestionIndex(prev => prev + 1);
                    setIsTransitioning(false);
                }, 300);
            } else {
                console.log("End of test reached. Calculating results...");
                setTimeout(() => {
                    const finalScores = { ...scores, [questionId]: answerId };

                    // CALCULATE MBTI IF DIRECTOR OR MANAGER
                    if (selectedRole === 'directeur' || selectedRole === 'manager') {
                        try {
                            const mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
                            let mbtiCount = 0;

                            questions.forEach(q => {
                                if (q.dimension) {
                                    mbtiCount++;
                                    const val = finalScores[q.id]; // 1-5
                                    if (val) {
                                        const optA = q.options[0].val; // e.g. 'E'
                                        const optB = q.options[1].val; // e.g. 'I'
                                        // Scoring: 1->+2 A, 2->+1 A, 3->0, 4->+1 B, 5->+2 B
                                        if (val === 1) mbtiScores[optA] += 2;
                                        if (val === 2) mbtiScores[optA] += 1;
                                        if (val === 4) mbtiScores[optB] += 1;
                                        if (val === 5) mbtiScores[optB] += 2;
                                    }
                                }
                            });

                            if (mbtiCount > 0) {
                                const profileCode = [
                                    mbtiScores.E >= mbtiScores.I ? 'E' : 'I',
                                    mbtiScores.S >= mbtiScores.N ? 'S' : 'N',
                                    mbtiScores.T >= mbtiScores.F ? 'T' : 'F',
                                    mbtiScores.J >= mbtiScores.P ? 'J' : 'P'
                                ].join('');

                                const MBTI_DATA_MAP = {
                                    'directeur': MBTI_DIRECTEUR_DATA,
                                    'manager': MBTI_MANAGER_DATA,
                                    'manager-adj': MBTI_MANAGER_ADJOINT_DATA,
                                    'barman': MBTI_BARMAN_DATA,
                                    'serveur': MBTI_SERVEUR_DATA,
                                    'chef-de-rang': MBTI_CHEF_DE_RANG_DATA,
                                };
                                const mbtiData = MBTI_DATA_MAP[selectedRole] || MBTI_MANAGER_ADJOINT_DATA;
                                const calculatedProfile = mbtiData.profiles[profileCode];
                                console.log("Calculated MBTI:", profileCode, calculatedProfile);
                                setMbtiProfile(calculatedProfile);
                                localStorage.setItem(`mbti_result_${selectedRole}`, JSON.stringify(calculatedProfile));
                            }
                        } catch (err) {
                            console.error("Error calculating MBTI:", err);
                        }
                    }

                    // v5.2 Engine pour TOUS les rôles
                    const roleKey = selectedRole.toUpperCase();
                    console.log(`Using SentinelEngineV52 for ${roleKey}...`);
                    let evaluationResult = engineV52.evaluateCandidate(
                        roleKey,
                        questions,
                        finalScores,
                        textAnswers
                    );

                    // Add mapping for UnifiedResultView / DirectorResultView
                    // v5.2 doesn't return globalScore natively for universal logic, so we compute an average or adapt
                    const mappedResult = {
                        ...evaluationResult,
                        globalScore: evaluationResult.globalScore !== undefined ? evaluationResult.globalScore :
                            (evaluationResult.macro_profils ? Math.round(Object.values(evaluationResult.macro_profils).reduce((a, b) => a + b, 0) / Math.max(1, Object.keys(evaluationResult.macro_profils).length)) : 0),
                        reliability: evaluationResult.reliability || 95, // Fallback if missing
                        verdictColor: evaluationResult.verdictColor || (evaluationResult.alertes && evaluationResult.alertes.some(a => a.type === "WARNING") ? "text-rose-500" : "text-emerald-500"),
                        flags: (evaluationResult.flags || []).concat((evaluationResult.alertes || []).map(a => a.message)),
                        hasTraitData: true,
                        macroScores: evaluationResult.macro_profils || {},
                        topTraits: evaluationResult.top5_facettes ? evaluationResult.top5_facettes.map(f => [f.facette, f.score]) : [],
                        traitPercentages: evaluationResult.scores_normalises_facettes || {},
                        dimensions: evaluationResult.dimensions_brutes || {}, // Keep dimensions for ADN_ENTREPRISE
                        synthesisText: evaluationResult.profil_textuel,
                        dominantProfile: evaluationResult.profil_dominant
                    };

                    console.log("Mapped Evaluation Result:", mappedResult);
                    setEvaluation(mappedResult);
                    saveResultsToSupabase(mappedResult, selectedRole);
                    setShowResults(true);
                }, 100);
            }
        } catch (error) {
            console.error("Error in handleAnswer:", error);
            alert("Une erreur est survenue lors de l'enregistrement de la réponse. Veuillez réessayer.");
            setIsTransitioning(false); // Reset transition state on error
        }
    };

    // RESULTS DASHBOARD (PREMIUM UNIFIED)
    if (showResults && evaluation) {
        // v5.2 RESULT VIEW
        if (selectedRole === 'directeur') {
            return (
                <div className="min-h-screen bg-black text-slate-200 p-4 font-sans">
                    <DirectorResultView data={evaluation} mbtiProfile={mbtiProfile} />
                </div>
            );
        } else {
            return (
                <div className="min-h-screen bg-black text-slate-200 p-4 font-sans">
                    <UnifiedResultView data={evaluation} mbtiProfile={mbtiProfile} roleId={selectedRole} onNavigateHome={() => navigate('/')} />
                </div>
            );
        }
    }


    // If no role selected, show role selector
    if (!selectedRole || questions.length === 0) {
        return (
            <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Test Sentinel</h1>
                    <p className="text-stone-400">Chargement...</p>
                </div>
            </div>
        );
    }

    // PRE-TEST ALERT (CONDITIONS OPTIMALES) - DIRECTEUR ONLY
    if (selectedRole === 'directeur' && showPreTestAlert) {
        const alert = MBTI_DIRECTEUR_DATA.pretest_alert;
        return (
            <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center justify-center p-4 md:p-8 font-sans">
                <div className="bg-black rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-500/30 w-full max-w-3xl mx-auto animate-in fade-in zoom-in duration-500">

                    {/* Titre */}
                    <h1 className="text-2xl md:text-4xl font-bold text-amber-400 text-center mb-4">
                        {alert.titre}
                    </h1>
                    <p className="text-lg text-stone-500 text-center mb-8">
                        {alert.sous_titre}
                    </p>

                    {/* Conditions Requises */}
                    <div className="mb-8">
                        <p className="text-white font-bold mb-4 text-center">{alert.message_principal}</p>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-stone-900 rounded-xl p-4 border border-slate-700">
                                <h3 className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <Activity size={16} /> Physique
                                </h3>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    {alert.conditions_requises.physique.map((c, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-emerald-400">✓</span> {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-stone-900 rounded-xl p-4 border border-slate-700">
                                <h3 className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <Brain size={16} /> Mental
                                </h3>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    {alert.conditions_requises.mental.map((c, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-blue-400">✓</span> {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-stone-900 rounded-xl p-4 border border-slate-700">
                                <h3 className="text-purple-400 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <UserCheck size={16} /> Environnement
                                </h3>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    {alert.conditions_requises.environnement.map((c, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-purple-400">✓</span> {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Avertissement */}
                    <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 mb-8 flex items-start gap-3">
                        <AlertTriangle className="text-red-500 shrink-0 mt-1" size={24} />
                        <p className="text-red-200 text-sm font-medium leading-relaxed">
                            {alert.avertissement}
                        </p>
                    </div>

                    {/* Aperçu du test */}
                    <div className="bg-stone-900/50 rounded-xl p-6 mb-8 border border-slate-700/50">
                        <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4 text-center">📋 Structure de l'évaluation</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs text-center">
                            <div className="bg-slate-700/50 rounded-lg p-3 text-slate-300 border border-slate-600">
                                <span className="block font-bold mb-1 text-slate-100">Phase 1</span>
                                {alert.apercu_test.phase_1}
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-3 text-slate-300 border border-slate-600">
                                <span className="block font-bold mb-1 text-slate-100">Phase 2</span>
                                {alert.apercu_test.phase_2}
                            </div>
                            <div className="bg-[#0A0A0A]mber-900/40 rounded-lg p-3 text-amber-200 border border-amber-500/30 flex items-center justify-center font-bold">
                                ☕ {alert.apercu_test.pause}
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-3 text-slate-300 border border-slate-600">
                                <span className="block font-bold mb-1 text-slate-100">Phase 3</span>
                                {alert.apercu_test.phase_3}
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-3 text-slate-300 border border-slate-600">
                                <span className="block font-bold mb-1 text-slate-100">Phase 4</span>
                                {alert.apercu_test.phase_4}
                            </div>
                        </div>
                    </div>

                    {/* Boutons */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                        <button
                            onClick={() => navigate('/choix-du-poste')}
                            className="px-6 py-4 bg-stone-900 hover:bg-slate-700 rounded-xl font-bold transition-all text-stone-500 border border-slate-700 hover:border-slate-600"
                        >
                            {alert.boutons.reporter}
                        </button>
                        <button
                            onClick={() => setShowPreTestAlert(false)}
                            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 rounded-xl font-bold transition-all text-white text-lg shadow-lg shadow-emerald-900/20 transform hover:-translate-y-1"
                        >
                            {alert.boutons.commencer}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // LOADING GUARD
    if (!questions || questions.length === 0) {
        return (
            <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6">
                <div className="text-center animate-pulse">
                    <h1 className="text-3xl font-bold text-white mb-4">Test Sentinel</h1>
                    <p className="text-stone-400">Chargement du test en cours...</p>
                </div>
            </div>
        );
    }

    if (!currentQuestion) {
        return (
            <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Test Sentinel</h1>
                    <p className="text-stone-400">Erreur: Aucune question disponible pour l'index {currentQuestionIndex}</p>
                    <button onClick={() => navigate('/')} className="mt-4 px-6 py-2 bg-black text-white rounded-lg">
                        Retour
                    </button>
                </div>
            </div>
        );
    }

    // DEBUG: Validate Question Structure
    if (currentQuestion) {
        if (currentQuestion.dimension && (!currentQuestion.options || currentQuestion.options.length < 2)) {
            console.error("CRITICAL: Malformed MBTI Question", currentQuestion);
            // Fallback to avoid crash
            return <div>Erreur: Question MBTI mal formée ({currentQuestion.id})</div>;
        }
    }

    return (
        <div style={{ backgroundColor: SENTINEL_THEME.bg, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', color: SENTINEL_THEME.text, fontFamily: 'Inter, sans-serif' }}>
            {/* HEADER COMPACT */}
            <div style={{ width: '100%', maxWidth: '600px', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* ROLE BADGE (NEW) */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{
                        backgroundColor: '#eef2ff', color: '#4f46e5',
                        padding: '0.5rem 1.5rem', borderRadius: '999px',
                        fontSize: '0.85rem', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                    }}>
                        {selectedRole === 'ADN_ENTREPRISE' ? "AUDIT RH" : `POSTE : ${selectedRole}`}
                    </span>
                </div>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.8rem', padding: '0 0.5rem' }}>
                    <p style={{ fontSize: '0.75rem', color: SENTINEL_THEME.textMuted, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', margin: 0 }}>
                        {currentQuestionIndex + 1} / {totalQuestions}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: SENTINEL_THEME.accent, fontWeight: '700', margin: 0 }}>
                        SENTINEL v3.0
                    </p>
                </div>

                {/* Progress Bar */}
                <div style={{ height: '8px', width: '100%', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                    <motion.div
                        style={{ height: '100%', background: SENTINEL_THEME.accent }}
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}% ` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* QUESTION CARD */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestion.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{
                        width: '100%', maxWidth: '500px',
                        padding: '1.5rem',
                        borderRadius: '20px',
                        border: `1px solid ${SENTINEL_THEME.border}`,
                        backgroundColor: SENTINEL_THEME.card,
                        boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.05)'
                    }}
                >
                    <p style={{ color: SENTINEL_THEME.textMuted, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.65rem', fontWeight: '700' }}>
                        {currentQuestion.sectionTitle || "Évaluation Situationnelle"}
                    </p>

                    <h2 style={{ fontSize: '1.1rem', fontWeight: '700', lineHeight: '1.3', marginBottom: '1.5rem', minHeight: 'auto', color: '#1e293b' }}>
                        "{currentQuestion.description || currentQuestion.text}"
                    </h2>

                    {/* Options Grid */}
                    {/* Options Grid */}
                    {currentQuestion.dimension ? (
                        // MBTI LAYOUT (5-Point Scale)
                        <div className="w-full flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-300">
                            {/* Option A */}
                            <div className="w-full bg-[#111111] rounded-xl p-5 border-l-4 border-slate-500">
                                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2 block">Option A</span>
                                <p className="text-base md:text-lg font-medium text-stone-300">{currentQuestion.options[0].text}</p>
                            </div>

                            {/* ÉCHELLE UNIQUE */}
                            <div className="w-full py-4">
                                <div className="flex items-center justify-between gap-2 md:gap-4">
                                    <div className="flex-1 flex justify-center gap-3 md:gap-6 items-end">
                                        {[
                                            { val: 1, label: "← Tout à fait", color: "bg-slate-700", borderColor: "border-slate-700", bgColor: "bg-[#0A0A0A]", size: "w-14 h-14" },
                                            { val: 2, label: "D'accord", color: "bg-[#0A0A0A]0", borderColor: "border-slate-500", bgColor: "bg-[#0A0A0A]", size: "w-12 h-12" },
                                            { val: 3, label: "Neutre", color: "bg-slate-300", borderColor: "border-stone-700", bgColor: "bg-[#0A0A0A]", size: "w-10 h-10" },
                                            { val: 4, label: "D'accord", color: "bg-[#0A0A0A]0", borderColor: "border-slate-500", bgColor: "bg-[#0A0A0A]", size: "w-12 h-12" },
                                            { val: 5, label: "Tout à fait →", color: "bg-slate-700", borderColor: "border-slate-700", bgColor: "bg-[#0A0A0A]", size: "w-14 h-14" }
                                        ].map((opt) => (
                                            <button
                                                key={opt.val}
                                                onClick={() => handleAnswer(opt.val)}
                                                className="flex flex-col items-center gap-2 group"
                                            >
                                                <div className={`
                                                    ${opt.size} rounded-full flex items-center justify-center border-4 transition-all
                                                    ${scores[currentQuestion.id] === opt.val
                                                        ? `scale-110 shadow-xl ${opt.color} border-white`
                                                        : `${opt.val === 3 ? 'border-stone-800 bg-[#0A0A0A]' : `${opt.borderColor} ${opt.bgColor}`} hover:scale-105`}
                                                `}>
                                                    {scores[currentQuestion.id] === opt.val && <div className="w-3 h-3 bg-[#0D0D0D] rounded-full" />}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-between w-full px-4 mt-2">
                                    <span className="text-xs font-bold text-stone-400">ACCORD A</span>
                                    <span className="text-xs font-bold text-stone-500">NEUTRE</span>
                                    <span className="text-xs font-bold text-stone-400">ACCORD B</span>
                                </div>
                            </div>

                            {/* Option B */}
                            <div className="w-full bg-[#111111] rounded-xl p-5 border-l-4 border-slate-500">
                                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2 block">Option B</span>
                                <p className="text-base md:text-lg font-medium text-stone-300">{currentQuestion.options[1].text}</p>
                            </div>
                        </div>
                    ) : currentQuestion.type === "DIMENSION" ? (
                        <LikertScale
                            onChange={handleAnswer}
                            value={scores[currentQuestion.id]}
                            poleFaible={currentQuestion.pole_faible}
                            poleFort={currentQuestion.pole_fort}
                        />
                    ) : !isTypingOpenAnswer ? (
                        <div style={{ display: 'grid', gridTemplateColumns: currentQuestion.options ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)', gap: '0.75rem' }}>
                            {(currentQuestion.options ? [...currentQuestion.options].sort((a, b) => (a.value || "").localeCompare(b.value || "")) : [
                                { id: '0', label: 'NON', sub: 'Jamais' },
                                { id: '1', label: 'PARFOIS', sub: 'Variable' },
                                { id: '2', label: 'OUI', sub: 'Toujours' }
                            ]).map((opt) => (
                                <button
                                    key={opt.id || opt.value}
                                    onClick={() => {
                                        if (opt.openText) {
                                            setIsTypingOpenAnswer(true);
                                            setOpenAnswerDraft("");
                                        } else {
                                            handleAnswer(opt.id || (opt.value === 'A' ? 0 : opt.value === 'B' ? 1 : opt.value === 'C' ? 2 : opt.value === 'D' ? 3 : opt.value === 'E' ? 4 : opt.value));
                                        }
                                    }}
                                    className="option-btn"
                                    style={{
                                        position: 'relative',
                                        display: 'flex', flexDirection: currentQuestion.options ? 'row' : 'column',
                                        alignItems: currentQuestion.options ? 'center' : 'center',
                                        justifyContent: currentQuestion.options ? 'flex-start' : 'center',
                                        textAlign: currentQuestion.options ? 'left' : 'center',
                                        padding: '1rem 1.25rem',
                                        borderRadius: '16px',
                                        border: '1px solid transparent',
                                        background: '#f1f5f9',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        color: '#334155',
                                        gap: currentQuestion.options ? '1rem' : '0'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#e2e8f0'; // Light Slate
                                        e.currentTarget.style.borderColor = '#94a3b8';
                                        e.currentTarget.style.color = '#1e293b';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = '#f1f5f9';
                                        e.currentTarget.style.borderColor = 'transparent';
                                        e.currentTarget.style.color = '#334155';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {currentQuestion.options && (
                                        <span style={{
                                            fontSize: '1.5rem',
                                            fontWeight: '900',
                                            marginBottom: '0',
                                            opacity: 1,
                                            transition: 'all 0.2s',
                                            color: '#64748b',
                                            minWidth: '40px'
                                        }}>
                                            {opt.value || opt.id}
                                        </span>
                                    )}
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontSize: currentQuestion.options ? '0.95rem' : '1.5rem', fontWeight: currentQuestion.options ? '600' : '900', letterSpacing: currentQuestion.options ? '0' : '1px', lineHeight: '1.3' }}>{opt.label}</span>
                                        {opt.sub && <span style={{ fontSize: '0.65rem', color: SENTINEL_THEME.textMuted, marginTop: '0.2rem', textTransform: 'uppercase' }}>{opt.sub}</span>}
                                    </div>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-4 animate-in fade-in zoom-in duration-300">
                            <h3 className="text-lg font-bold text-stone-200">Votre réponse détaillée :</h3>
                            <textarea
                                value={openAnswerDraft}
                                onChange={(e) => setOpenAnswerDraft(e.target.value)}
                                placeholder="Décrivez votre action ici..."
                                className="w-full p-4 border border-stone-700 rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-[#C9A84C]/50 min-h-[150px] text-base"
                                autoFocus
                            />
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setIsTypingOpenAnswer(false)}
                                    className="flex-1 px-6 py-3 bg-[#111111] text-stone-400 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                                >
                                    Annuler
                                </button>
                                <button
                                    onClick={() => {
                                        if (openAnswerDraft.trim().length < 5) {
                                            alert("Veuillez développer votre réponse (min 5 caractères).");
                                            return;
                                        }
                                        // Save text answer
                                        setTextAnswers(prev => ({ ...prev, [currentQuestion.id]: openAnswerDraft }));

                                        // Find option E (Open) value
                                        const openOption = currentQuestion.options.find(o => o.openText);
                                        const val = openOption ? openOption.value : 'E';

                                        // Submit standard answer 'E' (or equivalent)
                                        handleAnswer(val);

                                        // Reset UI
                                        setIsTypingOpenAnswer(false);
                                        setOpenAnswerDraft("");
                                    }}
                                    className="flex-1 px-6 py-3 bg-[#C9A84C] text-white font-bold rounded-xl hover:bg-[#C9A84C] transition-colors shadow-lg shadow-orange-500/20"
                                >
                                    Valider ma réponse
                                </button>
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* FOOTER HINTS */}
            <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', opacity: 0.5 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: SENTINEL_THEME.textMuted }}>
                    <span style={{ padding: '0.2rem 0.5rem', border: '1px solid #333', borderRadius: '4px' }}>0-2</span> CLAVIER
                </div>
                {/* ADMIN BUTTON ADDED HERE */}
                <button
                    onClick={() => setShowResults(true)}
                    style={{ background: 'transparent', border: 'none', color: '#555', fontSize: '0.7rem', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    MODE ADMIN : TERMINER
                </button>
            </div>


        </div>
    );
}

const ProfileSynthesis = ({ data, mbtiProfile, roleId }) => {
    return (
        <>
            {/* ALERTE FIABILITÉ < 50% */}
            {data.reliability < 50 && (
                <div style={{
                    padding: '1.5rem',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.5)',
                    textAlign: 'center',
                    marginBottom: '2rem'
                }}>
                    <h3 style={{ color: '#ef4444', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <AlertTriangle /> PROFIL NON FIABLE ({data.reliability}%)
                    </h3>
                    <p style={{ color: '#fca5a5', fontSize: '0.9rem' }}>
                        Incohérences détectées. Entretien de vérification recommandé.
                    </p>
                </div>
            )}

            {/* MBTI PROFILE (RICH DESCRIPTION) */}
            {mbtiProfile && (
                <div style={{
                    padding: '2rem',
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                    marginBottom: '2rem',
                    border: '1px solid rgba(255,255,255,0.1)',
                    textAlign: 'center',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        background: 'linear-gradient(90deg, #10b981 0%, #3b82f6 100%)'
                    }} />

                    <h3 style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        VOTRE PROFIL PERSONNEL
                    </h3>

                    <div style={{ fontSize: '3rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem', lineHeight: 1 }}>
                        {mbtiProfile.title}
                    </div>

                    <div style={{ color: '#10b981', fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
                        {mbtiProfile.code} • {mbtiProfile.subtitle}
                    </div>

                    <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto', fontStyle: 'italic' }}>
                        "{mbtiProfile.description}"
                    </p>

                    <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                        {mbtiProfile.forces && mbtiProfile.forces.slice(0, 3).map((f, i) => (
                            <span key={i} style={{
                                background: 'rgba(255,255,255,0.05)',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '20px',
                                fontSize: '0.85rem',
                                color: '#94a3b8',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                ✨ {f}
                            </span>
                        ))}
                    </div>
                </div>
            )}


            {/* DOMINANT SPECIFIC PROFILE (NEW) */}
            {data.dominantProfile && (
                <div style={{
                    padding: '2rem',
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                    marginBottom: '2rem',
                    border: '1px solid rgba(255,255,255,0.1)',
                    textAlign: 'center',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                }}>
                    <h3 style={{ color: '#94a3b8', fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                        {['DIRECTEUR', 'MANAGER', 'MANAGER-ADJ', 'MANAGER_PRINCIPAL'].includes(roleId?.toUpperCase())
                            ? "STYLE DE LEADERSHIP PREDOMINANT"
                            : "STYLE DE PERSONNALITÉ PREDOMINANT"}
                    </h3>
                    <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#60a5fa', marginBottom: '1rem', letterSpacing: '-1px', textShadow: '0 0 20px rgba(96, 165, 250, 0.3)' }}>
                        {data.dominantProfile}
                    </div>
                    <p style={{ color: '#cbd5e1', fontSize: '0.9rem', maxWidth: '80%', margin: '0 auto' }}>
                        Ce profil reflète vos tendances instinctives en situation de dilemme.
                    </p>
                </div>
            )}

            {/* SYNTHÈSE NORMALE (TOUJOURS VISIBLE) */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginTop: data.reliability < 50 ? '0' : '3rem'
            }}>
                {/* POINTS FORTS */}
                <div style={{
                    padding: '2rem',
                    borderRadius: '24px',
                    backgroundColor: 'rgba(34, 197, 94, 0.05)',
                    border: '1px solid rgba(34, 197, 94, 0.2)'
                }}>
                    <h3 style={{ color: '#22c55e', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <Zap size={24} /> Atouts Opérationnels
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {data.strength.map((item, idx) => (
                            <li key={idx} style={{ marginBottom: '1rem', color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                <strong style={{ color: 'slate-800' }}>{item.label} :</strong> <span className="text-stone-400">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* POINTS DE VIGILANCE */}
                <div style={{
                    padding: '2rem',
                    borderRadius: '24px',
                    backgroundColor: 'rgba(249, 115, 22, 0.05)',
                    border: '1px solid rgba(249, 115, 22, 0.2)'
                }}>
                    <h3 style={{ color: '#f97316', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <AlertTriangle size={24} /> Points de Vigilance
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {data.weaknesses.map((item, idx) => (
                            <li key={idx} style={{ marginBottom: '1rem', color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                <strong style={{ color: 'slate-800' }}>{item.label} :</strong> <span className="text-stone-400">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};
