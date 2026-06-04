import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Database, Mail, FileText, Clock, Trash2 } from 'lucide-react';

const Section = ({ icon, title, children }) => (
  <div className="border-2 border-stone-200 bg-white p-6 md:p-8">
    <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-stone-100">
      <div className="text-orange-600">{icon}</div>
      <h2 className="text-xl font-black uppercase text-stone-900 tracking-tight">{title}</h2>
    </div>
    <div className="text-stone-600 font-medium leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

const MentionsLegales = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('mentions');

  const tabs = [
    { id: 'mentions', label: 'Mentions Légales', icon: <FileText size={14} /> },
    { id: 'confidentialite', label: 'Confidentialité', icon: <Shield size={14} /> },
    { id: 'cookies', label: 'Cookies', icon: <Eye size={14} /> },
    { id: 'droits', label: 'Vos Droits', icon: <Database size={14} /> },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0] font-sans">
      {/* Header */}
      <div className="bg-stone-900 text-white py-12 px-6 border-b-4 border-orange-600">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-wider"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </button>
          <div className="flex items-center gap-3 mb-3">
            <Shield size={28} className="text-orange-400" />
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">Protection des données</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase leading-tight">
            Transparence & Légalité
          </h1>
          <p className="text-stone-400 mt-3 font-medium">
            Mise à jour : Janvier 2026 · Conforme RGPD (UE) 2016/679
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 bg-white border-b-2 border-stone-900 z-40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-4 text-xs font-black uppercase tracking-widest whitespace-nowrap transition-colors border-b-4 -mb-[2px] ${activeTab === tab.id
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">

        {/* ===== MENTIONS LÉGALES ===== */}
        {activeTab === 'mentions' && (
          <>
            <div className="bg-orange-50 border-2 border-orange-200 p-4">
              <p className="text-orange-800 font-bold text-sm">
                ⚖️ Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN),
                voici les informations légales obligatoires.
              </p>
            </div>

            <Section icon={<FileText size={22} />} title="Éditeur du site">
              <p><strong className="text-stone-900">Nom commercial :</strong> Sentinel HCR — HCR Sentinel</p>
              <p><strong className="text-stone-900">Responsable de publication :</strong> Mehdi Boussekine</p>
              <p><strong className="text-stone-900">Statut :</strong> [À compléter : SASU / Auto-entrepreneur / SAS]</p>
              <p><strong className="text-stone-900">SIRET :</strong> [À compléter avant mise en ligne]</p>
              <p><strong className="text-stone-900">Siège social :</strong> [Adresse complète]</p>
              <p><strong className="text-stone-900">Email :</strong>{' '}
                <a href="mailto:hcrsentinel@hotmail.com" className="text-orange-600 underline">hcrsentinel@hotmail.com</a>
              </p>
              <p><strong className="text-stone-900">Téléphone :</strong> [À compléter]</p>
            </Section>

            <Section icon={<Database size={22} />} title="Hébergement">
              <p><strong className="text-stone-900">Hébergeur :</strong> [À compléter : Vercel / Netlify / OVH / etc.]</p>
              <p><strong className="text-stone-900">Adresse :</strong> [Adresse de l'hébergeur]</p>
              <p><strong className="text-stone-900">Localisation des serveurs :</strong> [France / UE — à préciser]</p>
              <p className="text-sm text-orange-700 bg-orange-50 p-3 border border-orange-200">
                <strong>Important RGPD :</strong> Si vos serveurs sont hors UE, vous devez mentionner les garanties
                de transfert (clauses contractuelles types, etc.)
              </p>
            </Section>

            <Section icon={<Shield size={22} />} title="Propriété intellectuelle">
              <p>
                L'ensemble des contenus présents sur ce site (textes, visuels, algorithmes de test,
                résultats de profils, logotypes) est la propriété exclusive de Sentinel HCR et est protégé
                par le droit d'auteur français et international.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou
                partie des éléments du site, par quelque procédé que ce soit, est interdite sauf
                autorisation écrite préalable.
              </p>
              <p>
                <strong className="text-stone-900">Les résultats des tests de personnalité</strong> générés par la plateforme
                sont produits pour l'usage exclusif du candidat évalué et de l'employeur destinataire.
                Toute diffusion ou reproduction commerciale est interdite.
              </p>
            </Section>

            <Section icon={<FileText size={22} />} title="Activité réglementée — Recrutement HCR">
              <p>
                Sentinel HCR opère en tant que <strong className="text-stone-900">intermédiaire de mise en relation</strong> entre
                employeurs du secteur Hôtellerie-Restauration-Cafés (HCR) et candidats.
              </p>
              <p>
                Conformément au <strong className="text-stone-900">Code du travail (art. L5321-1 et suivants)</strong>,
                les activités de placement de travailleurs sont soumises à déclaration.
              </p>
              <p>
                Les évaluations de personnalité réalisées sur cette plateforme sont des outils d'aide à la
                décision. Elles ne constituent pas une décision d'embauche automatisée au sens de l'art. 22
                du RGPD. L'employeur reste seul décisionnaire du recrutement.
              </p>
            </Section>
          </>
        )}

        {/* ===== CONFIDENTIALITÉ ===== */}
        {activeTab === 'confidentialite' && (
          <>
            <div className="bg-orange-50 border-2 border-orange-200 p-4">
              <p className="text-orange-800 font-bold text-sm">
                🔐 Conforme au Règlement (UE) 2016/679 (RGPD) · Base légale : consentement & exécution du contrat
              </p>
            </div>

            <Section icon={<Database size={22} />} title="Données collectées">
              <p className="font-black text-stone-900">Pour les candidats :</p>
              <ul className="list-none space-y-1 pl-4 border-l-2 border-orange-200">
                <li>• Email et mot de passe (authentification)</li>
                <li>• Poste visé (Directeur, Manager, Adjoint...)</li>
                <li>• Réponses aux questions du test (180 items)</li>
                <li>• Résultats et profil de personnalité généré</li>
                <li>• Date et heure de passation du test</li>
              </ul>
              <p className="font-black text-stone-900 mt-4">Pour les restaurateurs :</p>
              <ul className="list-none space-y-1 pl-4 border-l-2 border-orange-200">
                <li>• Email professionnel et informations établissement</li>
                <li>• Critères de recherche de profil</li>
                <li>• Historique des consultations de candidats</li>
              </ul>
              <p className="font-black text-stone-900 mt-4">Données techniques automatiques :</p>
              <ul className="list-none space-y-1 pl-4 border-l-2 border-orange-200">
                <li>• Adresse IP (anonymisée après 30 jours)</li>
                <li>• Type de navigateur et système d'exploitation</li>
                <li>• Pages visitées et durée de session</li>
              </ul>
            </Section>

            <Section icon={<Eye size={22} />} title="Finalités du traitement">
              <div className="space-y-3">
                {[
                  { finalite: "Fonctionnement du test", base: "Exécution du contrat", duree: "Durée du compte + 3 ans" },
                  { finalite: "Mise en relation recruteur/candidat", base: "Consentement explicite", duree: "Jusqu'au retrait du consentement" },
                  { finalite: "Amélioration de l'algorithme", base: "Intérêt légitime (données anonymisées)", duree: "5 ans maximum" },
                  { finalite: "Communications transactionnelles", base: "Exécution du contrat", duree: "Durée du compte" },
                  { finalite: "Newsletter / actualités secteur HCR", base: "Consentement", duree: "Jusqu'au désabonnement" },
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2 p-3 bg-stone-50 border border-stone-200 text-sm">
                    <span className="font-bold text-stone-900">{item.finalite}</span>
                    <span className="text-orange-700 font-medium">{item.base}</span>
                    <span className="text-stone-500 flex items-center gap-1">
                      <Clock size={12} />
                      {item.duree}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            <Section icon={<Shield size={22} />} title="Partage des données">
              <p>
                <strong className="text-stone-900">Avec les restaurateurs abonnés :</strong> uniquement votre profil
                de personnalité et votre poste cible — jamais vos données d'identité directe sans
                votre accord explicite.
              </p>
              <p>
                <strong className="text-stone-900">Sous-traitants techniques :</strong> hébergement (voir mentions légales),
                éventuellement service d'emailing. Tous liés par un accord de traitement de données
                conforme RGPD.
              </p>
              <p className="bg-green-50 border-2 border-green-200 p-3 text-green-800 font-bold">
                ✅ Vos données ne sont JAMAIS vendues, louées ou cédées à des tiers commerciaux.
              </p>
              <p>
                <strong className="text-stone-900">Obligations légales :</strong> Nous pouvons transmettre vos données
                si la loi l'exige (réquisition judiciaire, CNIL, etc.)
              </p>
            </Section>

            <Section icon={<Shield size={22} />} title="Sécurité des données">
              <p>Sentinel HCR met en œuvre les mesures techniques et organisationnelles suivantes :</p>
              <ul className="list-none space-y-2 pl-4 border-l-2 border-orange-200">
                <li>• Chiffrement HTTPS (TLS 1.3) sur toutes les pages</li>
                <li>• Mots de passe hashés (bcrypt, jamais stockés en clair)</li>
                <li>• Accès aux données restreint au personnel autorisé</li>
                <li>• Sauvegardes régulières chiffrées</li>
                <li>• Journalisation des accès aux données sensibles</li>
              </ul>
              <p className="text-sm text-stone-500 mt-2">
                En cas de violation de données susceptible d'engendrer un risque pour vos droits,
                nous nous engageons à vous notifier dans les 72h conformément à l'art. 34 RGPD.
              </p>
            </Section>
          </>
        )}

        {/* ===== COOKIES ===== */}
        {activeTab === 'cookies' && (
          <>
            <Section icon={<Eye size={22} />} title="Qu'est-ce qu'un cookie ?">
              <p>
                Un cookie est un petit fichier texte déposé sur votre appareil lors de votre visite.
                Il permet de mémoriser vos préférences, votre session de connexion et d'analyser
                l'utilisation du site.
              </p>
              <p>
                Conformément à la directive ePrivacy et aux recommandations CNIL, nous demandons
                votre consentement <strong className="text-stone-900">avant</strong> tout dépôt de cookie
                non essentiel.
              </p>
            </Section>

            <Section icon={<Database size={22} />} title="Liste des cookies utilisés">
              <div className="space-y-4">
                {[
                  {
                    type: "Essentiels",
                    color: "green",
                    items: [
                      { nom: "hcr_session", usage: "Maintien de la connexion", duree: "Session" },
                      { nom: "hcr_cookie_consent", usage: "Mémorise vos choix de cookies", duree: "12 mois" },
                      { nom: "hcr_auth_token", usage: "Authentification sécurisée", duree: "7 jours" },
                    ]
                  },
                  {
                    type: "Analytics (optionnels)",
                    color: "orange",
                    items: [
                      { nom: "_ga, _gid", usage: "Google Analytics — mesure d'audience anonymisée", duree: "13 mois" },
                    ]
                  },
                  {
                    type: "Marketing (optionnels)",
                    color: "purple",
                    items: [
                      { nom: "_fbp", usage: "Meta Pixel — publicité ciblée Facebook/Instagram", duree: "3 mois" },
                    ]
                  }
                ].map((group, i) => (
                  <div key={i}>
                    <h3 className={`text-xs font-black uppercase tracking-widest mb-2 ${group.color === 'green' ? 'text-green-700' :
                      group.color === 'orange' ? 'text-orange-600' : 'text-purple-600'
                      }`}>{group.type}</h3>
                    {group.items.map((cookie, j) => (
                      <div key={j} className="grid grid-cols-3 gap-2 p-3 bg-stone-50 border border-stone-200 text-sm mb-1">
                        <span className="font-mono font-bold text-stone-900">{cookie.nom}</span>
                        <span className="text-stone-600">{cookie.usage}</span>
                        <span className="text-stone-500 flex items-center gap-1">
                          <Clock size={12} />
                          {cookie.duree}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Section>

            <Section icon={<Trash2 size={22} />} title="Gérer ou supprimer les cookies">
              <p>
                Vous pouvez modifier vos préférences à tout moment en cliquant sur
                <button
                  onClick={() => {
                    localStorage.removeItem('hcr_cookie_consent');
                    window.location.reload();
                  }}
                  className="mx-2 text-orange-600 font-bold underline hover:text-orange-700"
                >
                  Rouvrir le gestionnaire de cookies
                </button>
              </p>
              <p>
                Vous pouvez également désactiver les cookies directement dans votre navigateur :
              </p>
              <ul className="list-none space-y-1 pl-4 border-l-2 border-orange-200 text-sm">
                <li>• <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Google Chrome</a></li>
                <li>• <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Mozilla Firefox</a></li>
                <li>• <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Apple Safari</a></li>
              </ul>
            </Section>
          </>
        )}

        {/* ===== VOS DROITS ===== */}
        {activeTab === 'droits' && (
          <>
            <div className="bg-stone-900 text-white p-6">
              <p className="font-black text-lg uppercase mb-2">Vos droits RGPD — Art. 15 à 22</p>
              <p className="text-stone-300 font-medium">
                En tant qu'utilisateur de Sentinel HCR, vous disposez des droits suivants sur vos données personnelles.
                Toute demande est traitée <strong className="text-orange-400">dans un délai maximum de 30 jours</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  droit: "Droit d'accès",
                  article: "Art. 15",
                  desc: "Obtenir une copie de toutes vos données personnelles traitées par Sentinel HCR, y compris vos résultats de test.",
                  icon: <Eye size={20} />
                },
                {
                  droit: "Droit de rectification",
                  article: "Art. 16",
                  desc: "Corriger des données inexactes ou incomplètes vous concernant (email, informations de profil).",
                  icon: <FileText size={20} />
                },
                {
                  droit: "Droit à l'effacement",
                  article: "Art. 17",
                  desc: "Demander la suppression définitive de votre compte et de toutes vos données, y compris vos résultats de test.",
                  icon: <Trash2 size={20} />
                },
                {
                  droit: "Droit d'opposition",
                  article: "Art. 21",
                  desc: "Vous opposer au traitement de vos données à des fins de marketing ou de profilage commercial.",
                  icon: <Shield size={20} />
                },
                {
                  droit: "Droit à la portabilité",
                  article: "Art. 20",
                  desc: "Recevoir vos données dans un format structuré et lisible (JSON/CSV) pour les transférer à un autre service.",
                  icon: <Database size={20} />
                },
                {
                  droit: "Droit de limitation",
                  article: "Art. 18",
                  desc: "Demander la suspension du traitement de vos données en cas de contestation ou de vérification.",
                  icon: <Clock size={20} />
                },
              ].map((item, i) => (
                <div key={i} className="border-2 border-stone-200 bg-white p-5 hover:border-orange-300 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-orange-600 mt-0.5">{item.icon}</div>
                    <div>
                      <span className="font-black text-stone-900 uppercase text-sm">{item.droit}</span>
                      <span className="block text-xs text-orange-600 font-bold">{item.article} RGPD</span>
                    </div>
                  </div>
                  <p className="text-stone-600 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <Section icon={<Mail size={22} />} title="Exercer vos droits">
              <p>Pour toute demande relative à vos données personnelles :</p>
              <div className="bg-stone-900 text-white p-5 mt-3">
                <p className="font-black text-lg mb-1">Par email :</p>
                <a href="mailto:hcrsentinel@hotmail.com" className="text-orange-400 font-bold text-lg underline">
                  hcrsentinel@hotmail.com
                </a>
                <p className="text-stone-400 text-sm mt-2">
                  Objet recommandé : "Exercice droit RGPD — [Type de droit]"<br />
                  Joindre une pièce d'identité pour les demandes d'accès ou d'effacement.
                </p>
              </div>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
                réclamation auprès de la <strong className="text-stone-900">CNIL</strong> :
              </p>
              <a
                href="https://www.cnil.fr/fr/plaintes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-600 font-bold underline hover:text-orange-700"
              >
                cnil.fr/fr/plaintes →
              </a>
            </Section>

            <Section icon={<Shield size={22} />} title="Décision automatisée & profilage">
              <p>
                <strong className="text-stone-900">Information importante :</strong> Sentinel HCR utilise un algorithme
                pour générer des profils de personnalité à partir de vos réponses au test.
              </p>
              <p>
                Conformément à l'<strong className="text-stone-900">art. 22 RGPD</strong>, ce traitement
                <strong className="text-orange-600"> ne constitue pas une décision entièrement automatisée</strong> ayant
                des effets juridiques. Les résultats sont des <strong>outils d'aide à la décision</strong> —
                le recruteur humain reste décisionnaire de l'embauche.
              </p>
              <p>
                Vous pouvez demander une explication de la logique de l'algorithme et contester
                un résultat qui vous semblerait inexact ou injuste en nous contactant.
              </p>
            </Section>
          </>
        )}

        {/* Contact footer */}
        <div className="bg-stone-900 text-white p-6 border-t-4 border-orange-600">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="font-black uppercase tracking-widest text-sm text-orange-400 mb-1">Contact DPO</p>
              <p className="font-medium text-stone-300">
                Délégué à la Protection des Données : Sentinel HCR
              </p>
              <a href="mailto:hcrsentinel@hotmail.com" className="text-orange-400 font-bold underline">
                hcrsentinel@hotmail.com
              </a>
            </div>
            <div className="text-right text-stone-400 text-xs">
              <p>Version 1.0 — Janvier 2026</p>
              <p>Applicable en France et dans l'UE</p>
              <p>CNIL : cnil.fr</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MentionsLegales;
