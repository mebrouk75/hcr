import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MBTI_BARMAN_DATA } from './data/mbti_barman_data';
import { MBTI_SERVEUR_DATA } from './data/mbti_serveur_data';
import { MBTI_CHEF_DE_RANG_DATA } from './data/mbti_chef_de_rang_data';
import { MBTI_MANAGER_ADJOINT_DATA } from './data/mbti_manager_adjoint_data';
import { MBTI_MANAGER_DATA } from './data/mbti_manager_data';
import { MBTI_DIRECTEUR_DATA } from './data/mbti_directeur_data';

const MbtiTest = () => {
    const { roleId } = useParams();
    const navigate = useNavigate();

    const [showPreTestAlert, setShowPreTestAlert] = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [selectedValue, setSelectedValue] = useState(null);

    const normalizedRole = roleId.toUpperCase();

    const MBTI_DATA_MAP = {
        'BARMAN': MBTI_BARMAN_DATA,
        'SERVEUR': MBTI_SERVEUR_DATA,
        'CHEF-DE-RANG': MBTI_CHEF_DE_RANG_DATA,
        'MANAGER-ADJ': MBTI_MANAGER_ADJOINT_DATA,
        'MANAGER': MBTI_MANAGER_DATA,
        'DIRECTEUR': MBTI_DIRECTEUR_DATA,
    };
    const data = MBTI_DATA_MAP[normalizedRole] || null;
    const questions = data ? data.questions : [];

    const calculateProfile = (finalAnswers) => {
        if (!data) return;
        const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        questions.forEach(q => {
            const val = finalAnswers[q.id];
            if (!val) return;
            const optA = q.options[0].val;
            const optB = q.options[1].val;
            if (val === 1) scores[optA] += 2;
            if (val === 2) scores[optA] += 1;
            if (val === 4) scores[optB] += 1;
            if (val === 5) scores[optB] += 2;
        });
        const profileCode = [
            scores.E >= scores.I ? 'E' : 'I',
            scores.S >= scores.N ? 'S' : 'N',
            scores.T >= scores.F ? 'T' : 'F',
            scores.J >= scores.P ? 'J' : 'P'
        ].join('');
        const profile = data.profiles[profileCode];
        localStorage.setItem(`mbti_result_${roleId}`, JSON.stringify(profile));

        // REDIRECT TO COGNITIVE TEST FOR MANAGER
        navigate(`/test/${roleId}`, {
            state: { mbtiProfile: profile, mbtiScores: scores, skipAlert: true }
        });
    };

    const handleCircleClick = (val) => {
        setSelectedValue(val);
        // Auto-advance after a short delay
        setTimeout(() => {
            const question = questions[currentQuestionIndex];
            const newAnswers = { ...answers, [question.id]: val };
            setAnswers(newAnswers);

            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                setSelectedValue(newAnswers[questions[currentQuestionIndex + 1]?.id] ?? null);
            } else {
                calculateProfile(newAnswers);
            }
        }, 300);
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            const prevIndex = currentQuestionIndex - 1;
            setCurrentQuestionIndex(prevIndex);
            setSelectedValue(answers[questions[prevIndex].id] ?? null);
        }
    };

    if (!data) {
        return (
            <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-8 font-sans">
                <h1 className="text-3xl font-black text-rose-500 mb-4 uppercase">Poste non configuré</h1>
                <p className="text-stone-400 mb-8 font-medium">Le test n'est pas encore disponible pour ce rôle.</p>
                <button onClick={() => navigate(`/test/${roleId}`)} className="bg-[#C9A84C] text-black px-6 py-3 font-black uppercase text-xs tracking-widest hover:bg-[#F0D080] transition-colors">
                    Passer au Test Technique &gt;
                </button>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];
    const totalQuestions = questions.length;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    // Pre-test alert screen
    if (showPreTestAlert && data.pretest_alert) {
        const alert = data.pretest_alert;
        return (
            <div className="min-h-screen bg-[#0A0A0A] flex flex-col font-sans p-6 text-white justify-center">
                <div className="max-w-4xl mx-auto w-full">
                    <div className="bg-[#0D0D0D] border border-stone-800 p-8 md:p-12 relative">
                        {/* Overlay accent line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#C9A84C]"></div>

                        <div className="text-center mb-10">
                            <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] block mb-4">
                                {alert.titre || "Avertissement"}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-black uppercase mb-4 text-white">
                                {alert.sous_titre}
                            </h1>
                            <p className="text-stone-400 font-medium text-sm max-w-2xl mx-auto">
                                {alert.message_principal}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            {[
                                { icon: '🏃', title: 'Physique', items: alert.conditions_requises.physique },
                                { icon: '🧠', title: 'Mental', items: alert.conditions_requises.mental },
                                { icon: '🏢', title: 'Environnement', items: alert.conditions_requises.environnement },
                            ].map((section, idx) => (
                                <div key={idx} className="bg-[#111] border border-stone-800 p-6">
                                    <h3 className="text-xs font-black uppercase tracking-widest text-stone-300 mb-4 flex items-center gap-2">
                                        <span>{section.icon}</span> {section.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {section.items.map((c, i) => (
                                            <li key={i} className="flex items-start gap-3 text-xs text-stone-500 font-medium">
                                                <span className="text-[#C9A84C] font-bold">✓</span> <span className="flex-1">{c}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="bg-rose-950/20 border border-rose-900/50 p-5 mb-8">
                            <p className="text-rose-500/90 text-xs font-bold leading-relaxed uppercase tracking-wide">
                                ⚠️ {alert.avertissement}
                            </p>
                        </div>

                        <div className="bg-[#111] border border-stone-800 p-6 mb-10">
                            <h3 className="text-xs font-black uppercase tracking-widest text-[#C9A84C] mb-4">
                                Aperçu de l'évaluation
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[alert.apercu_test.phase_1, alert.apercu_test.phase_2, alert.apercu_test.pause, alert.apercu_test.phase_3, alert.apercu_test.phase_4].filter(Boolean).map((p, i) => (
                                    <div key={i} className="bg-stone-900 text-stone-400 text-[10px] font-bold uppercase tracking-widest px-4 py-2 border border-stone-800">
                                        {p}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button onClick={() => navigate('/choix-du-poste')} className="px-8 py-4 border border-stone-800 text-stone-400 text-xs font-black uppercase tracking-widest hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
                                {alert.boutons.reporter}
                            </button>
                            <button onClick={() => setShowPreTestAlert(false)} className="px-8 py-4 bg-[#C9A84C] text-black text-xs font-black uppercase tracking-widest hover:bg-[#F0D080] transition-colors shadow-[0_0_30px_rgba(201,168,76,0.15)]">
                                {alert.boutons.commencer}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Likert circle config (matched to Sentinel theme)
    const circleConfig = [
        { val: 1, label: 'Tout à fait A' },
        { val: 2, label: 'Plutôt A' },
        { val: 3, label: 'Neutre' },
        { val: 4, label: 'Plutôt B' },
        { val: 5, label: 'Tout à fait B' },
    ];

    return (
        <div className="min-h-screen bg-[#0A0A0A] flex flex-col font-sans">
            {/* Nav Header */}
            <div className="px-6 py-4 flex justify-between items-center border-b border-[#C9A84C]/15 sticky top-0 bg-[#0A0A0A] z-10 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center border border-[#C9A84C]/60 text-[#C9A84C] font-black text-xs">
                        R.
                    </div>
                    <div>
                        <span className="block text-white font-black text-sm uppercase tracking-tight">Sentinel HCR</span>
                        <span className="block text-stone-500 text-[9px] font-bold uppercase tracking-widest">Évaluation des Traits</span>
                    </div>
                </div>
                <div className="text-right">
                    <span className="block text-stone-500 text-[9px] font-bold uppercase tracking-widest">Question</span>
                    <span className="block text-white font-black text-lg">{currentQuestionIndex + 1} / {totalQuestions}</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-stone-900 shrink-0">
                <div
                    className="h-full bg-[#C9A84C] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="flex-1 flex flex-col justify-center px-4 py-8">
                <div className="max-w-3xl mx-auto w-full">
                    {/* Question Card */}
                    <div className="bg-[#0D0D0D] border border-stone-800 p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                        <div className="text-center mb-16">
                            <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] block mb-6">
                                Étape 1 · Mise en Situation
                            </span>
                            <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                                {currentQuestion.text}
                            </h2>
                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {/* Option A */}
                            <div className="bg-[#111] border border-stone-800 p-6 relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#C9A84C]/50" />
                                <span className="text-stone-500 text-[10px] font-black uppercase tracking-widest block mb-4">Option A</span>
                                <p className="text-white text-sm font-medium leading-relaxed">
                                    {currentQuestion.options[0].text}
                                </p>
                            </div>

                            {/* Option B */}
                            <div className="bg-[#111] border border-stone-800 p-6 relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#C9A84C]" />
                                <span className="text-[#C9A84C]/70 text-[10px] font-black uppercase tracking-widest block mb-4">Option B</span>
                                <p className="text-white text-sm font-medium leading-relaxed">
                                    {currentQuestion.options[1].text}
                                </p>
                            </div>
                        </div>

                        {/* Likert Scale */}
                        <div className="pt-8 border-t border-stone-800">
                            <div className="flex justify-between items-center gap-2 mb-6 text-[10px] font-black uppercase tracking-widest text-[#C9A84C]">
                                <span className="opacity-60 hidden sm:block">← Je penche A</span>
                                <span className="text-center w-full">Votre réponse</span>
                                <span className="hidden sm:block">Je penche B →</span>
                            </div>

                            <div className="flex justify-between items-end gap-2 sm:gap-4 max-w-xl mx-auto">
                                {circleConfig.map((circle) => {
                                    const isActive = selectedValue === circle.val;
                                    let circleSize = circle.val === 3 ? 'w-10 h-10 sm:w-12 sm:h-12' : (circle.val === 2 || circle.val === 4) ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-14 h-14 sm:w-16 sm:h-16';
                                    let bgActive = circle.val < 3 ? 'bg-[#C9A84C]/40 border-[#C9A84C]/50 text-white' : circle.val > 3 ? 'bg-[#C9A84C] border-[#C9A84C] text-black shadow-[0_0_15px_rgba(201,168,76,0.3)]' : 'bg-stone-700 border-stone-600 text-white';

                                    return (
                                        <button
                                            key={circle.val}
                                            onClick={() => handleCircleClick(circle.val)}
                                            className="flex flex-col items-center gap-3 group outline-none"
                                        >
                                            <div className={`
                                                ${circleSize} rounded-full flex items-center justify-center transition-all duration-200 border-2
                                                ${isActive ? bgActive : 'bg-transparent border-stone-800 group-hover:border-stone-600'}
                                            `}>
                                                {isActive && <div className={`w-2 h-2 rounded-full ${circle.val > 3 ? 'bg-black' : 'bg-white'}`} />}
                                            </div>
                                            <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-center
                                                ${isActive ? (circle.val > 3 ? 'text-[#C9A84C]' : 'text-stone-300') : 'text-stone-600 group-hover:text-stone-400'}
                                            `}>
                                                {circle.label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Footer Nav */}
                    <div className="mt-8">
                        <button
                            onClick={handlePrevious}
                            disabled={currentQuestionIndex === 0}
                            className="text-stone-500 hover:text-white text-[10px] font-bold uppercase tracking-widest disabled:opacity-30 disabled:hover:text-stone-500 transition-colors"
                        >
                            ← Revenir à la question précédente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MbtiTest;
