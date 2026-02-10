import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Lock, Mail, User, Building2 } from 'lucide-react';

const AuthPage = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock authentication - Redirect to Roles selection
        navigate('/choix-du-poste');
    };

    return (
        <div className="min-h-screen bg-[#F5F5F0] flex flex-col font-sans selection:bg-orange-200 selection:text-orange-900">
            {/* Header Simple */}
            <div className="p-6 flex items-center gap-3 border-b-2 border-stone-900 bg-white">
                <div onClick={() => navigate('/')} className="cursor-pointer flex items-center gap-3">
                    <div className="bg-stone-900 text-white w-10 h-10 flex items-center justify-center font-black text-xl rounded-sm">
                        R.
                    </div>
                    <div className="leading-none">
                        <span className="block text-2xl font-black tracking-tighter uppercase">LA RELÈVE</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white border-2 border-stone-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 relative overflow-hidden">

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-orange-600 transform translate-x-8 -translate-y-8 rotate-45"></div>

                    <div className="mb-10 text-center">
                        <h1 className="text-3xl font-black uppercase text-stone-900 mb-2">
                            {isLogin ? 'Bon retour' : 'Rejoindre la relève'}
                        </h1>
                        <p className="text-stone-500 font-medium text-sm">
                            {isLogin
                                ? 'Connectez-vous pour accéder à vos opportunités.'
                                : 'Créez votre profil et trouvez le poste qui vous correspond.'}
                        </p>
                    </div>

                    {/* Toggle Tabs */}
                    <div className="flex border-2 border-stone-900 p-1 mb-8 bg-stone-100">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest transition-all ${isLogin ? 'bg-white text-stone-900 shadow-sm border border-stone-200' : 'text-stone-400 hover:text-stone-600'}`}
                        >
                            Connexion
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest transition-all ${!isLogin ? 'bg-white text-stone-900 shadow-sm border border-stone-200' : 'text-stone-400 hover:text-stone-600'}`}
                        >
                            Inscription
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-stone-900">Prénom & Nom</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        className="w-full bg-stone-50 border-2 border-stone-200 p-4 pl-12 font-medium text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
                                        placeholder="Auguste Escoffier"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-stone-900">Email Professionnel</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-stone-50 border-2 border-stone-200 p-4 pl-12 font-medium text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
                                    placeholder="chef@cuisine.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-stone-900">Mot de passe</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
                                <input
                                    type="password"
                                    required
                                    className="w-full bg-stone-50 border-2 border-stone-200 p-4 pl-12 font-medium text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-stone-900 text-white py-4 font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] flex items-center justify-center gap-3"
                        >
                            {isLogin ? 'Se connecter' : "C'est parti"}
                            <ArrowRight size={20} />
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <a href="#" className="text-xs font-bold text-stone-400 hover:text-stone-900 uppercase tracking-widest border-b border-transparent hover:border-stone-900 transition-colors">
                            Mot de passe oublié ?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
