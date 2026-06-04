import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const SiteNavbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-[#0A0A0A]/96 backdrop-blur-sm border-b border-[#C9A84C]/15' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <button onClick={() => navigate('/')} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 border border-[#C9A84C]/60 flex items-center justify-center group-hover:border-[#C9A84C] transition-colors">
                        <span className="text-[#C9A84C] font-black text-xs">R.</span>
                    </div>
                    <div className="leading-none text-left">
                        <span className="block text-white font-black text-base tracking-tighter uppercase">Sentinel HCR</span>
                        <span className="block text-[9px] font-bold tracking-[0.22em] uppercase text-[#C9A84C]/70">Restauration Nouvelle</span>
                    </div>
                </button>

                <div className="hidden md:flex items-center gap-6">
                    <button onClick={() => navigate('/methode')} className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${location.pathname === '/methode' ? 'text-white' : 'text-stone-500 hover:text-white'}`}>Méthode</button>
                    <button onClick={() => navigate('/tarifs')} className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${location.pathname === '/tarifs' ? 'text-white' : 'text-stone-500 hover:text-white'}`}>Tarifs</button>
                    <button onClick={() => navigate('/#demo')} className="text-stone-500 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">Contact</button>
                    <button onClick={() => navigate('/connexion')} className="text-stone-500 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">Connexion</button>
                    <button onClick={() => navigate('/#demo')} className="border border-[#C9A84C]/60 text-[#C9A84C] px-5 py-2 text-[11px] font-black uppercase tracking-widest hover:bg-[#C9A84C] hover:text-black hover:border-[#C9A84C] transition-all">
                        Demander une démo
                    </button>
                </div>

                <button onClick={() => setOpen(!open)} className="md:hidden text-white">
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-[#0A0A0A] border-t border-stone-900 px-6 py-6 space-y-5">
                    <button onClick={() => { navigate('/methode'); setOpen(false); }} className="block w-full text-left text-stone-400 text-xs font-bold uppercase tracking-widest">Méthode</button>
                    <button onClick={() => { navigate('/tarifs'); setOpen(false); }} className="block w-full text-left text-stone-400 text-xs font-bold uppercase tracking-widest">Tarifs</button>
                    <button onClick={() => { navigate('/#demo'); setOpen(false); }} className="block w-full text-left text-stone-400 text-xs font-bold uppercase tracking-widest">Contact</button>
                    <button onClick={() => { navigate('/connexion'); setOpen(false); }} className="block w-full text-left text-stone-400 text-xs font-bold uppercase tracking-widest">Connexion</button>
                    <button onClick={() => { navigate('/#demo'); setOpen(false); }} className="block w-full text-center border border-[#C9A84C] text-[#C9A84C] py-3 text-xs font-black uppercase tracking-widest">
                        Demander une démo
                    </button>
                </div>
            )}
        </nav>
    );
};

export default SiteNavbar;
