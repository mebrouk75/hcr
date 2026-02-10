import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MBTI_BARMAN_DATA } from './data/mbti_barman_data';
import { MBTI_SERVEUR_DATA } from './data/mbti_serveur_data';
import { MBTI_CHEF_DE_RANG_DATA } from './data/mbti_chef_de_rang_data';
import { MBTI_MANAGER_ADJOINT_DATA } from './data/mbti_manager_adjoint_data';
import { MBTI_MANAGER_DATA } from './data/mbti_manager_data';
import { MBTI_DIRECTEUR_DATA } from './data/mbti_directeur_data';

const COLORS = {
    blue: '#4A90E2',
    blueLight: '#7FB4F0',
    gold: '#D4AF37',
    goldLight: '#E8D89B',
    neutral: '#E5E5E5',
    dark: '#0A1628',
    darkAlt: '#1a2942',
    text: '#334155',
    textMuted: '#64748b',
};

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
        navigate(`/test/${roleId}`, {
            state: { mbtiProfile: profile, mbtiScores: scores, skipAlert: true }
        });
    };

    const handleCircleClick = (val) => {
        setSelectedValue(val);
    };

    const handleNext = () => {
        if (selectedValue === null) return;
        const question = questions[currentQuestionIndex];
        const newAnswers = { ...answers, [question.id]: selectedValue };
        setAnswers(newAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedValue(newAnswers[questions[currentQuestionIndex + 1]?.id] ?? null);
        } else {
            calculateProfile(newAnswers);
        }
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
            <div style={{ minHeight: '100vh', background: COLORS.dark, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 32, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
                <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16, color: '#ef4444' }}>Poste non configuré</h1>
                <p style={{ marginBottom: 32 }}>Le test MBTI n'est pas encore disponible pour ce rôle.</p>
                <button onClick={() => navigate(`/test/${roleId}`)} style={{ padding: '12px 24px', background: '#ef4444', color: 'white', border: 'none', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}>
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
            <div style={{ minHeight: '100vh', background: `linear-gradient(135deg, ${COLORS.dark} 0%, ${COLORS.darkAlt} 100%)`, color: '#e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
                <div style={{ background: 'rgba(255,255,255,0.98)', borderRadius: 24, padding: '48px 40px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', maxWidth: 800, width: '100%' }}>
                    <h1 style={{ fontSize: 28, fontWeight: 700, color: COLORS.dark, textAlign: 'center', marginBottom: 12 }}>{alert.titre}</h1>
                    <p style={{ fontSize: 16, color: COLORS.textMuted, textAlign: 'center', marginBottom: 32 }}>{alert.sous_titre}</p>

                    <p style={{ color: COLORS.dark, fontWeight: 700, marginBottom: 16 }}>{alert.message_principal}</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
                        {[
                            { icon: '🏃', title: 'Physique', items: alert.conditions_requises.physique },
                            { icon: '🧠', title: 'Mental', items: alert.conditions_requises.mental },
                            { icon: '🏠', title: 'Environnement', items: alert.conditions_requises.environnement },
                        ].map((section, idx) => (
                            <div key={idx} style={{ background: '#f8fafc', borderRadius: 16, padding: 16 }}>
                                <h3 style={{ fontSize: 12, fontWeight: 700, color: COLORS.blue, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>{section.icon} {section.title}</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {section.items.map((c, i) => (
                                        <li key={i} style={{ fontSize: 13, color: COLORS.text, marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                            <span style={{ color: COLORS.blue, fontWeight: 700 }}>✓</span> {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 12, padding: 16, marginBottom: 24 }}>
                        <p style={{ color: '#dc2626', fontSize: 13, fontWeight: 500 }}>{alert.avertissement}</p>
                    </div>

                    <div style={{ background: '#f8fafc', borderRadius: 12, padding: 16, marginBottom: 32 }}>
                        <h3 style={{ fontSize: 12, fontWeight: 700, color: COLORS.dark, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>📋 Aperçu du test</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {[alert.apercu_test.phase_1, alert.apercu_test.phase_2, alert.apercu_test.pause, alert.apercu_test.phase_3, alert.apercu_test.phase_4].map((p, i) => (
                                <div key={i} style={{ background: '#e2e8f0', borderRadius: 8, padding: '8px 12px', fontSize: 11, color: COLORS.text, flex: '1 1 120px', textAlign: 'center' }}>{p}</div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button onClick={() => navigate('/choix-du-poste')} style={{ padding: '14px 28px', background: '#f1f5f9', color: COLORS.textMuted, border: 'none', borderRadius: 12, fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>
                            {alert.boutons.reporter}
                        </button>
                        <button onClick={() => setShowPreTestAlert(false)} style={{ padding: '16px 36px', background: `linear-gradient(135deg, ${COLORS.blue}, #357ABD)`, color: 'white', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: 17, cursor: 'pointer', boxShadow: '0 10px 25px rgba(74,144,226,0.4)' }}>
                            {alert.boutons.commencer}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Circle scale config
    const circleConfig = [
        { val: 1, label: 'Tout à fait', borderColor: COLORS.blue, activeColor: COLORS.blue, glowColor: 'rgba(74,144,226,0.6)' },
        { val: 2, label: 'Plutôt', borderColor: COLORS.blueLight, activeColor: COLORS.blueLight, glowColor: 'rgba(127,180,240,0.6)' },
        { val: 3, label: 'Neutre', borderColor: COLORS.neutral, activeColor: COLORS.neutral, glowColor: 'rgba(229,229,229,0.6)' },
        { val: 4, label: 'Plutôt', borderColor: COLORS.goldLight, activeColor: COLORS.goldLight, glowColor: 'rgba(232,216,155,0.6)' },
        { val: 5, label: 'Tout à fait', borderColor: COLORS.gold, activeColor: COLORS.gold, glowColor: 'rgba(212,175,55,0.6)' },
    ];

    return (
        <div style={{
            minHeight: '100vh',
            background: `linear-gradient(135deg, ${COLORS.dark} 0%, ${COLORS.darkAlt} 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        }}>
            <div style={{ maxWidth: 900, width: '100%' }}>
                <div
                    key={currentQuestion.id}
                    style={{
                        background: 'rgba(255, 255, 255, 0.98)',
                        borderRadius: 24,
                        padding: window.innerWidth < 768 ? '32px 24px' : 60,
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                        animation: 'fadeIn 0.4s ease-out'
                    }}
                >
                    {/* Progress Bar */}
                    <div style={{ width: '100%', height: 6, background: '#f1f5f9', borderRadius: 10, marginBottom: 40, overflow: 'hidden' }}>
                        <div style={{
                            height: '100%',
                            background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.gold})`,
                            width: `${progress}%`,
                            transition: 'width 0.3s ease',
                            borderRadius: 10
                        }} />
                    </div>

                    {/* Question Header */}
                    <div style={{ textAlign: 'center', marginBottom: 50 }}>
                        <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.textMuted, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 24 }}>
                            Question {currentQuestionIndex + 1}/{totalQuestions}
                        </div>
                        <div style={{ fontSize: window.innerWidth < 768 ? 22 : 28, fontWeight: 600, color: COLORS.dark, lineHeight: 1.4 }}>
                            {currentQuestion.text}
                        </div>
                    </div>

                    {/* Option A */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: 20, marginBottom: 30, padding: 24, borderRadius: 16,
                        background: `linear-gradient(to right, rgba(74,144,226,0.08), transparent)`,
                        borderLeft: `4px solid ${COLORS.blue}`
                    }}>
                        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', minWidth: 80, color: COLORS.blue }}>← Option A</div>
                        <div style={{ fontSize: 16, fontWeight: 600, color: COLORS.text, lineHeight: 1.6, flex: 1 }}>{currentQuestion.options[0].text}</div>
                    </div>

                    {/* Arrow Labels */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, padding: '0 40px' }}>
                        <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: COLORS.blue }}>← Tout à fait A</div>
                        <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: COLORS.gold }}>Tout à fait B →</div>
                    </div>

                    {/* Scale with circles */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, margin: '60px 0', position: 'relative' }}>
                        {/* Gradient line */}
                        <div style={{
                            position: 'absolute', top: '35%', left: '10%', width: '80%', height: 2,
                            background: `linear-gradient(to right, ${COLORS.blue} 0%, ${COLORS.neutral} 50%, ${COLORS.gold} 100%)`,
                            zIndex: 0, transform: 'translateY(-50%)'
                        }} />

                        {/* Circles */}
                        <div style={{ display: 'flex', gap: window.innerWidth < 768 ? 16 : 28, position: 'relative', zIndex: 1 }}>
                            {circleConfig.map((circle) => {
                                const isActive = selectedValue === circle.val;
                                return (
                                    <div
                                        key={circle.val}
                                        onClick={() => handleCircleClick(circle.val)}
                                        style={{
                                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
                                            cursor: 'pointer', transition: 'transform 0.2s ease',
                                            transform: isActive ? 'scale(1.1)' : 'scale(1)',
                                        }}
                                        onMouseEnter={e => { if (!isActive) e.currentTarget.style.transform = 'scale(1.1)'; }}
                                        onMouseLeave={e => { if (!isActive) e.currentTarget.style.transform = 'scale(1)'; }}
                                    >
                                        <div style={{
                                            width: 40, height: 40, borderRadius: '50%',
                                            border: `3px solid ${circle.borderColor}`,
                                            background: isActive ? circle.activeColor : 'white',
                                            boxShadow: isActive ? `0 0 20px ${circle.glowColor}` : 'none',
                                            transition: 'all 0.3s ease',
                                            transform: isActive ? 'scale(1.2)' : 'scale(1)',
                                        }} />
                                        <div style={{
                                            fontSize: 11, fontWeight: 600, color: COLORS.textMuted,
                                            textAlign: 'center', maxWidth: 70, lineHeight: 1.3
                                        }}>
                                            {circle.label}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Option B */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: 20, marginBottom: 30, padding: 24, borderRadius: 16,
                        background: `linear-gradient(to left, rgba(212,175,55,0.08), transparent)`,
                        borderRight: `4px solid ${COLORS.gold}`,
                        marginTop: 30,
                    }}>
                        <div style={{ fontSize: 16, fontWeight: 600, color: COLORS.text, lineHeight: 1.6, flex: 1 }}>{currentQuestion.options[1].text}</div>
                        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', minWidth: 80, color: COLORS.gold, textAlign: 'right' }}>Option B →</div>
                    </div>

                    {/* Navigation */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 }}>
                        <button
                            onClick={handlePrevious}
                            disabled={currentQuestionIndex === 0}
                            style={{
                                padding: '14px 32px', borderRadius: 12, fontSize: 15, fontWeight: 600, cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer',
                                border: 'none', background: '#f1f5f9', color: COLORS.textMuted,
                                opacity: currentQuestionIndex === 0 ? 0.4 : 1,
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={e => { if (currentQuestionIndex > 0) e.currentTarget.style.background = '#e2e8f0'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = '#f1f5f9'; }}
                        >
                            ← Précédent
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={selectedValue === null}
                            style={{
                                padding: '14px 32px', borderRadius: 12, fontSize: 15, fontWeight: 600,
                                cursor: selectedValue === null ? 'not-allowed' : 'pointer',
                                border: 'none',
                                background: selectedValue === null ? '#94a3b8' : `linear-gradient(135deg, ${COLORS.blue}, #357ABD)`,
                                color: 'white',
                                opacity: selectedValue === null ? 0.5 : 1,
                                transition: 'all 0.3s ease',
                                boxShadow: selectedValue !== null ? `0 10px 25px rgba(74,144,226,0.4)` : 'none',
                                transform: selectedValue !== null ? 'translateY(0)' : 'none',
                            }}
                            onMouseEnter={e => { if (selectedValue !== null) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 30px rgba(74,144,226,0.5)'; } }}
                            onMouseLeave={e => { if (selectedValue !== null) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(74,144,226,0.4)'; } }}
                        >
                            {currentQuestionIndex < questions.length - 1 ? 'Suivant →' : 'Terminer ✓'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MbtiTest;
