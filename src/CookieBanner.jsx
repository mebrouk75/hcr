import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, BarChart2 } from 'lucide-react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,       // Toujours activé
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('hcr_cookie_consent');
    if (!consent) {
      // Délai pour que la page charge d'abord
      setTimeout(() => setVisible(true), 1200);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      date: new Date().toISOString(),
      version: '1.0'
    };
    localStorage.setItem('hcr_cookie_consent', JSON.stringify(consent));
    setVisible(false);
  };

  const refuseAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      date: new Date().toISOString(),
      version: '1.0'
    };
    localStorage.setItem('hcr_cookie_consent', JSON.stringify(consent));
    setVisible(false);
  };

  const savePreferences = () => {
    const consent = {
      ...preferences,
      necessary: true,
      date: new Date().toISOString(),
      version: '1.0'
    };
    localStorage.setItem('hcr_cookie_consent', JSON.stringify(consent));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center p-4 pointer-events-none">
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/30 pointer-events-auto" />

      <div className="relative w-full max-w-2xl bg-white border-2 border-stone-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] pointer-events-auto mb-4 font-sans">
        
        {/* Header */}
        <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Cookie size={20} className="text-orange-400" />
            <span className="font-black uppercase tracking-widest text-sm">Respect de vos données</span>
          </div>
          <button
            onClick={refuseAll}
            className="text-stone-400 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-stone-700 font-medium leading-relaxed mb-4">
            Sentinel HCR utilise des cookies pour faire fonctionner le site et, avec votre accord, 
            analyser l'audience. Vos données ne sont <strong>jamais vendues</strong> à des tiers.
            Vous pouvez modifier vos choix à tout moment.{' '}
            <a href="/mentions-legales" className="text-orange-600 font-bold underline hover:text-orange-700">
              En savoir plus →
            </a>
          </p>

          {/* Détails des cookies */}
          {showDetails && (
            <div className="mb-5 space-y-3 border-t-2 border-stone-100 pt-4">
              {/* Nécessaires */}
              <div className="flex items-start justify-between gap-4 p-3 bg-stone-50 border border-stone-200">
                <div className="flex gap-3">
                  <Shield size={18} className="text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="block font-black text-sm uppercase text-stone-900">Cookies essentiels</span>
                    <span className="text-xs text-stone-500">Authentification, sécurité, navigation. Obligatoires.</span>
                  </div>
                </div>
                <div className="shrink-0">
                  <span className="text-xs font-bold text-green-600 uppercase bg-green-100 px-2 py-1">Toujours actif</span>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 p-3 bg-stone-50 border border-stone-200">
                <div className="flex gap-3">
                  <BarChart2 size={18} className="text-orange-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="block font-black text-sm uppercase text-stone-900">Cookies analytics</span>
                    <span className="text-xs text-stone-500">Mesure d'audience anonymisée (pages visitées, durée).</span>
                  </div>
                </div>
                <button
                  onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                  className={`shrink-0 w-12 h-6 rounded-full transition-colors border-2 border-stone-900 ${
                    preferences.analytics ? 'bg-orange-500' : 'bg-stone-200'
                  }`}
                  aria-label="Basculer analytics"
                >
                  <span className={`block w-4 h-4 bg-white rounded-full mx-auto transition-transform ${
                    preferences.analytics ? 'translate-x-3' : '-translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 p-3 bg-stone-50 border border-stone-200">
                <div className="flex gap-3">
                  <Cookie size={18} className="text-purple-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="block font-black text-sm uppercase text-stone-900">Cookies marketing</span>
                    <span className="text-xs text-stone-500">Publicité personnalisée et retargeting.</span>
                  </div>
                </div>
                <button
                  onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                  className={`shrink-0 w-12 h-6 rounded-full transition-colors border-2 border-stone-900 ${
                    preferences.marketing ? 'bg-orange-500' : 'bg-stone-200'
                  }`}
                  aria-label="Basculer marketing"
                >
                  <span className={`block w-4 h-4 bg-white rounded-full mx-auto transition-transform ${
                    preferences.marketing ? 'translate-x-3' : '-translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          )}

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={acceptAll}
              className="flex-1 bg-orange-600 text-white font-black uppercase text-xs tracking-widest py-4 px-6 hover:bg-orange-700 transition-colors border-2 border-stone-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Tout accepter
            </button>
            <button
              onClick={refuseAll}
              className="flex-1 bg-white text-stone-900 font-black uppercase text-xs tracking-widest py-4 px-6 hover:bg-stone-100 transition-colors border-2 border-stone-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Tout refuser
            </button>
            {showDetails ? (
              <button
                onClick={savePreferences}
                className="flex-1 bg-stone-900 text-white font-black uppercase text-xs tracking-widest py-4 px-6 hover:bg-stone-700 transition-colors border-2 border-stone-900"
              >
                Enregistrer
              </button>
            ) : (
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 bg-stone-100 text-stone-700 font-bold uppercase text-xs tracking-widest py-4 px-6 hover:bg-stone-200 transition-colors border-2 border-stone-300"
              >
                Personnaliser
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
