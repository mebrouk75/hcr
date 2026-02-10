
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import COGNITIVE_DATA from '../data/cognitive_test.json';
import { Brain, Clock, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

export default function CognitiveTest() {
    const { roleId } = useParams();
    const navigate = useNavigate();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({}); // { questionId: selectedOptionIndex }
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [startTime, setStartTime] = useState(Date.now());
    const [elapsedTime, setElapsedTime] = useState(0);

    const questions = COGNITIVE_DATA.test_cognitif_management.questions;
    const totalQuestions = questions.length;
    const currentQuestion = questions[currentQuestionIndex];

    useEffect(() => {
        const timer = setInterval(() => {
            setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
        }, 1000);
        return () => clearInterval(timer);
    }, [startTime, showResults]);

    const handleOptionSelect = (optionIndex) => {
        setAnswers(prev => ({
            ...prev,
            [currentQuestion.id]: optionIndex
        }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            finishTest();
        }
    };

    const finishTest = () => {
        // Calculate Score
        let finalScore = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.reponse_correcte) {
                finalScore += 1;
            }
        });
        setScore(finalScore);
        setShowResults(true);
    };

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    };

    if (showResults) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans text-white">
                <div className="max-w-2xl w-full bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-8 text-center">
                    <Brain className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Test Cognitif Terminé</h2>

                    <div className="bg-slate-700/50 rounded-xl p-6 mb-8">
                        <div className="text-sm text-slate-400 uppercase tracking-wider mb-2">Score Final</div>
                        <div className="text-5xl font-bold text-white mb-2">{score} / {totalQuestions}</div>
                        <div className="text-[#D4AF37] text-lg font-medium">
                            Temps: {formatTime(elapsedTime)}
                        </div>
                    </div>

                    <div className="text-slate-300 mb-8">
                        Merci d'avoir complété l'évaluation cognitive. Vos résultats ont été enregistrés.
                    </div>

                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-3 bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white rounded-lg font-bold hover:shadow-lg transition-transform transform active:scale-95"
                    >
                        Retour à l'accueil
                    </button>
                </div>
            </div>
        );
    }

    const progress = ((currentQuestionIndex) / totalQuestions) * 100;

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col font-sans text-white selection:bg-[#D4AF37] selection:text-slate-900">

            {/* Header */}
            <div className="w-full h-2 bg-slate-800 fixed top-0 left-0 z-50">
                <div
                    className="h-full bg-gradient-to-r from-[#4A90E2] to-[#D4AF37] transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-4 pt-10">
                <div className="w-full max-w-3xl">

                    {/* Top Info */}
                    <div className="flex justify-between items-center mb-8 px-2">
                        <div className="flex items-center space-x-2 text-slate-400">
                            <span className="text-sm font-medium">Question {currentQuestion.numero}/{totalQuestions}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full">
                            <Clock className="w-4 h-4" />
                            <span className="font-mono font-bold">{formatTime(elapsedTime)}</span>
                        </div>
                    </div>

                    {/* Question Card */}
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[400px] flex flex-col animate-fade-in-up">

                        {/* Dimension Badge */}
                        <div className="bg-slate-50 border-b border-slate-100 p-4 flex justify-between items-center">
                            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                                {currentQuestion.dimension}
                            </span>
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 leading-tight whitespace-pre-wrap">
                                {currentQuestion.question}
                            </h2>

                            <div className="space-y-3">
                                {currentQuestion.options.map((option, idx) => {
                                    const isSelected = answers[currentQuestion.id] === idx;

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionSelect(idx)}
                                            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center group ${isSelected
                                                    ? 'border-[#4A90E2] bg-[#4A90E2]/5'
                                                    : 'border-slate-100 hover:border-[#4A90E2]/30 hover:bg-slate-50'
                                                }`}
                                        >
                                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 transition-colors ${isSelected
                                                    ? 'border-[#4A90E2] bg-[#4A90E2] text-white'
                                                    : 'border-slate-200 text-slate-400 group-hover:border-[#4A90E2]/50'
                                                }`}>
                                                {String.fromCharCode(65 + idx)}
                                            </div>
                                            <span className={`text-lg ${isSelected ? 'text-[#4A90E2] font-semibold' : 'text-slate-600'}`}>
                                                {option}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="bg-slate-50 p-6 border-t border-slate-100 flex justify-end">
                            <button
                                onClick={handleNext}
                                disabled={answers[currentQuestion.id] === undefined}
                                className={`px-8 py-3 rounded-lg font-bold flex items-center space-x-2 transition-all ${answers[currentQuestion.id] !== undefined
                                        ? 'bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                    }`}
                            >
                                <span>{currentQuestionIndex === totalQuestions - 1 ? 'Terminer' : 'Suivant'}</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
