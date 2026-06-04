import React from 'react';
import { useNavigate } from 'react-router-dom';

const SiteFooter = () => {
    const navigate = useNavigate();
    return (
        <footer className="bg-[#0A0A0A] text-stone-500 py-12 px-6 border-t border-stone-900 relative z-10 w-full">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-stone-800 flex items-center justify-center">
                        <span className="text-stone-600 font-black text-xs">R.</span>
                    </div>
                    <div>
                        <span className="text-white font-black text-sm uppercase tracking-tight block text-left">Sentinel HCR</span>
                        <span className="text-stone-600 text-[9px] font-bold uppercase tracking-[0.2em] block text-left">Restauration Nouvelle</span>
                    </div>
                </div>
                <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
                    <button onClick={() => navigate('/mentions-legales')} className="hover:text-[#C9A84C] transition-colors">Mentions Légales</button>
                    <button onClick={() => navigate('/connexion')} className="hover:text-[#C9A84C] transition-colors">Espace Membre</button>
                </div>
                <div className="text-stone-800 text-[10px] font-bold uppercase tracking-widest">
                    © {new Date().getFullYear()} Sentinel HCR — Tous droits réservés
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
