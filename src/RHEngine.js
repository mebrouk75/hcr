// ═══════════════════════════════════════════════════════════════════════
// LA RELÈVE — RH ENGINE
// 6 dimensions · 42 facettes · 100 questions Likert 1-5
// 1 = Pas du tout d'accord  ·  5 = Tout à fait d'accord
// ═══════════════════════════════════════════════════════════════════════

export const QUESTIONS_RH = [

  // ══════════════════════════════════════════════════
  // DIMENSION INT — Conformité & Éthique (Q1-Q17)
  // Score élevé = intégrité = bon signe
  // ══════════════════════════════════════════════════

  // Facette 1 — Application réelle du droit du travail
  { id: 1,  dim: "INT", facette: "application_droit",
    q: "Quand un manager me demande de valider un planning illégal pour une bonne raison, je refuse systématiquement." },
  { id: 2,  dim: "INT", facette: "application_droit",
    q: "Je refuse de trouver des montages contractuels à la limite de la légalité, même si la direction m'y invite." },

  // Facette 2 — Gestion des zones grises contractuelles
  { id: 3,  dim: "INT", facette: "zones_grises",
    q: "Je signale systématiquement les CDD abusifs même quand le manager concerné est bien vu de la direction." },
  { id: 4,  dim: "INT", facette: "zones_grises",
    q: "Je refuse qu'un candidat travaille sans contrat signé, même pour une seule journée." },

  // Facette 3 — Rapport à l'inspection du travail
  { id: 5,  dim: "INT", facette: "rapport_inspection",
    q: "En cas de contrôle de l'inspection du travail, je collabore pleinement sans chercher à minimiser les constats." },
  { id: 6,  dim: "INT", facette: "rapport_inspection",
    q: "Je ne prépare pas les équipes à «bien présenter» les choses lors d'un contrôle — je préfère être conforme en amont." },

  // Facette 4 — Équité de traitement
  { id: 7,  dim: "INT", facette: "equite_traitement",
    q: "Quand je découvre des écarts de salaire injustifiés entre deux employés au même poste, j'agis pour les corriger." },
  { id: 8,  dim: "INT", facette: "equite_traitement",
    q: "Les règles RH que j'applique sont les mêmes pour tout le monde, y compris pour les proches de la direction." },

  // Facette 5 — Gestion des plaintes internes
  { id: 9,  dim: "INT", facette: "plaintes_internes",
    q: "Quand un employé me signale un problème avec son manager, je traite ça sérieusement même sans preuves formelles." },
  { id: 10, dim: "INT", facette: "plaintes_internes",
    q: "Je maintiens ma position sur une plainte interne même quand la direction préfèrerait que ça disparaisse." },

  // Facette 6 — Cohérence politique RH
  { id: 11, dim: "INT", facette: "coherence_politique",
    q: "Je refuse de préparer un dossier de licenciement si je sais que le fond n'est pas justifié." },
  { id: 12, dim: "INT", facette: "coherence_politique",
    q: "Les pratiques RH que j'applique sont cohérentes d'un établissement à l'autre au sein du groupe." },

  // Facette 7 — Confidentialité
  { id: 13, dim: "INT", facette: "confidentialite",
    q: "Je ne partage jamais d'informations personnelles sur un employé sans son consentement, même à sa hiérarchie directe." },
  { id: 14, dim: "INT", facette: "confidentialite",
    q: "Je traite les données RH sensibles avec la même rigueur que des données médicales." },

  // Questions complémentaires INT
  { id: 15, dim: "INT", facette: "coherence_politique",
    q: "Si un employé portait plainte aux prud'hommes demain, je serais serein sur le fond de nos pratiques." },
  { id: 16, dim: "INT", facette: "application_droit",
    q: "Je documente systématiquement les avertissements et suivis de performance avant toute rupture de contrat." },
  { id: 17, dim: "INT", facette: "zones_grises",
    q: "Je refuse de répondre aux avis négatifs Glassdoor avec des messages corporate qui nient une réalité que je connais." },

  // ══════════════════════════════════════════════════
  // DIMENSION EMP — Bien-être & Humain (Q18-Q34)
  // Score élevé = bienveillance = bon signe
  // ══════════════════════════════════════════════════

  // Facette 8 — Détection du mal-être
  { id: 18, dim: "EMP", facette: "detection_maletre",
    q: "Une hausse de l'absentéisme dans un département m'alerte immédiatement, même sans plainte formelle." },
  { id: 19, dim: "EMP", facette: "detection_maletre",
    q: "Je sais identifier les signaux faibles d'un burn-out avant qu'il devienne visible pour tout le monde." },

  // Facette 9 — Prévention des risques psychosociaux
  { id: 20, dim: "EMP", facette: "prevention_rps",
    q: "Quand plusieurs employés d'une même équipe sont en arrêt maladie, je cherche la cause systémique." },
  { id: 21, dim: "EMP", facette: "prevention_rps",
    q: "Je prends l'initiative de soulever les risques psychosociaux auprès de la direction même quand elle ne le demande pas." },

  // Facette 10 — Gestion du harcèlement
  { id: 22, dim: "EMP", facette: "gestion_harcelement",
    q: "Je traite une suspicion de harcèlement avec la même rigueur qu'un problème légal avéré." },
  { id: 23, dim: "EMP", facette: "gestion_harcelement",
    q: "Je protège un employé qui signale du harcèlement, même si l'accusé est bien vu de la direction." },

  // Facette 11 — Conditions de travail
  { id: 24, dim: "EMP", facette: "conditions_travail",
    q: "Je porte les problèmes de conditions de travail auprès de la direction même quand ce n'est pas urgent pour eux." },
  { id: 25, dim: "EMP", facette: "conditions_travail",
    q: "Je considère que les espaces de repos et vestiaires du personnel reflètent le respect qu'on leur porte." },

  // Facette 12 — Retour après arrêt maladie
  { id: 26, dim: "EMP", facette: "retour_arret",
    q: "Je prépare activement le retour d'un employé après un arrêt long, sans attendre que le manager le fasse." },
  { id: 27, dim: "EMP", facette: "retour_arret",
    q: "Je m'assure qu'un employé revenant d'un burn-out ne retourne pas immédiatement dans les mêmes conditions." },

  // Facette 13 — Charge de travail
  { id: 28, dim: "EMP", facette: "charge_travail",
    q: "Quand un poste reste vacant trop longtemps, j'alerte sur l'impact de la surcharge sur l'équipe restante." },
  { id: 29, dim: "EMP", facette: "charge_travail",
    q: "Je refuse de valider une organisation du travail qui crée structurellement de la surcharge." },

  // Facette 14 — Empathie opérationnelle
  { id: 30, dim: "EMP", facette: "empathie_operationnelle",
    q: "Quand un employé pleure dans mon bureau, je suis capable d'être présent avant d'être dans le process." },
  { id: 31, dim: "EMP", facette: "empathie_operationnelle",
    q: "Je me souviens des situations personnelles difficiles de mes interlocuteurs et j'en tiens compte." },

  // Questions complémentaires EMP
  { id: 32, dim: "EMP", facette: "detection_maletre",
    q: "Un turnover élevé dans un établissement me conduit à questionner le management avant de questionner les employés." },
  { id: 33, dim: "EMP", facette: "prevention_rps",
    q: "Je pense que le RH a une responsabilité directe dans la santé mentale des équipes qu'il sert." },
  { id: 34, dim: "EMP", facette: "empathie_operationnelle",
    q: "Je traite un extra avec le même niveau de considération qu'un cadre en CDI." },

  // ══════════════════════════════════════════════════
  // DIMENSION AUT — Courage managérial (Q35-Q51)
  // Pour le RH, AUT = courage face à la direction
  // Score élevé = courage = bon signe (NON inversé)
  // ══════════════════════════════════════════════════

  // Facette 15 — Courage face à la direction
  { id: 35, dim: "AUT", facette: "courage_direction",
    q: "Je remonte à la direction des décisions RH que je considère comme des erreurs, même si ça crée des tensions." },
  { id: 36, dim: "AUT", facette: "courage_direction",
    q: "J'ai déjà refusé d'exécuter une instruction de la direction parce qu'elle allait contre mes valeurs professionnelles." },

  // Facette 16 — Crédibilité terrain
  { id: 37, dim: "AUT", facette: "credibilite_terrain",
    q: "Les managers opérationnels viennent me consulter parce qu'ils savent que j'apporte une vraie valeur ajoutée." },
  { id: 38, dim: "AUT", facette: "credibilite_terrain",
    q: "Je suis capable de tenir une position RH face à un manager qui fait pression pour obtenir ce qu'il veut." },

  // Facette 17 — Gestion des conflits direction/employé
  { id: 39, dim: "AUT", facette: "gestion_conflits",
    q: "Quand j'ai conclu qu'un manager a tort dans un litige avec un employé, je le lui dis directement." },
  { id: 40, dim: "AUT", facette: "gestion_conflits",
    q: "Je refuse de «gérer discrètement» une situation qui mérite une vraie procédure formelle." },

  // Facette 18 — Positionnement direction/terrain
  { id: 41, dim: "AUT", facette: "positionnement",
    q: "Je suis capable de dire à la direction ce qu'elle ne veut pas entendre sur ses pratiques managériales." },
  { id: 42, dim: "AUT", facette: "positionnement",
    q: "Je ne me laisse pas instrumentaliser par la direction pour faire passer des décisions inéquitables." },

  // Facette 19 — Communication en temps de crise
  { id: 43, dim: "AUT", facette: "communication_crise",
    q: "Quand la direction me demande de communiquer une mauvaise nouvelle de façon trompeuse, je m'y oppose." },
  { id: 44, dim: "AUT", facette: "communication_crise",
    q: "En période de restructuration, je suis transparent avec les équipes dans les limites de ce que je peux dire." },

  // Facette 20 — Impact RH
  { id: 45, dim: "AUT", facette: "impact_rh",
    q: "Je suis capable de démontrer concrètement la valeur ajoutée du RH à une direction qui ne la voit pas." },
  { id: 46, dim: "AUT", facette: "impact_rh",
    q: "Je prends des initiatives RH sans attendre que la direction me les demande." },

  // Facette 21 — Politique interne
  { id: 47, dim: "AUT", facette: "politique_interne",
    q: "Je traite un litige de la même façon quelle que soit la position hiérarchique de la personne impliquée." },
  { id: 48, dim: "AUT", facette: "politique_interne",
    q: "Je refuse qu'une décision RH soit annulée pour des raisons purement politiques sans justification valable." },

  // Questions complémentaires AUT
  { id: 49, dim: "AUT", facette: "courage_direction",
    q: "J'ai déjà quitté ou envisagé de quitter un poste parce que les pratiques RH n'étaient pas compatibles avec mes valeurs." },
  { id: 50, dim: "AUT", facette: "credibilite_terrain",
    q: "Les managers me consultent avant de prendre des décisions RH importantes, pas après." },
  { id: 51, dim: "AUT", facette: "gestion_conflits",
    q: "Quand la direction veut licencier quelqu'un sans dossier solide, je refuse de construire un dossier factice." },

  // ══════════════════════════════════════════════════
  // DIMENSION ADA — Vision & Adaptabilité (Q52-Q68)
  // Score élevé = vision stratégique = bon signe
  // ══════════════════════════════════════════════════

  // Facette 22 — Vision long terme vs urgence
  { id: 52, dim: "ADA", facette: "vision_long_terme",
    q: "Je consacre du temps à des sujets RH stratégiques même quand les urgences opérationnelles s'accumulent." },
  { id: 53, dim: "ADA", facette: "vision_long_terme",
    q: "Je suis capable d'anticiper les besoins RH à 12-18 mois plutôt que de juste réagir aux demandes." },

  // Facette 23 — Rapport au changement organisationnel
  { id: 54, dim: "ADA", facette: "changement_organisationnel",
    q: "Je sais accompagner une transformation organisationnelle sans perdre la confiance des équipes." },
  { id: 55, dim: "ADA", facette: "changement_organisationnel",
    q: "Face à la résistance au changement, je cherche à comprendre les craintes avant d'imposer." },

  // Facette 24 — Mesure de l'impact RH
  { id: 56, dim: "ADA", facette: "mesure_impact",
    q: "Je mesure régulièrement des indicateurs RH concrets (turnover, absentéisme, délai recrutement) pour piloter mes actions." },
  { id: 57, dim: "ADA", facette: "mesure_impact",
    q: "Je sais quel indicateur donne le plus d'information sur la santé réelle d'une organisation HCR." },

  // Facette 25 — Marque employeur
  { id: 58, dim: "ADA", facette: "marque_employeur",
    q: "Je travaille activement à améliorer la marque employeur plutôt que de juste gérer l'administratif." },
  { id: 59, dim: "ADA", facette: "marque_employeur",
    q: "Je suis capable de défendre honnêtement l'entreprise comme employeur sans nier ses défauts." },

  // Facette 26 — Gestion des talents
  { id: 60, dim: "ADA", facette: "gestion_talents",
    q: "J'identifie et accompagne les hauts potentiels même quand la direction n'en fait pas une priorité." },
  { id: 61, dim: "ADA", facette: "gestion_talents",
    q: "Quand un talent veut partir parce qu'il ne voit pas d'évolution, je lui dis la vérité plutôt que de le retenir avec de fausses promesses." },

  // Facette 27 — Culture feedback
  { id: 62, dim: "ADA", facette: "culture_feedback",
    q: "Je prends des initiatives pour créer une culture du feedback dans l'organisation, même sans mandat explicite." },
  { id: 63, dim: "ADA", facette: "culture_feedback",
    q: "Quand un sondage interne révèle un problème, je porte les résultats à la direction même s'ils sont inconfortables." },

  // Facette 28 — Formation et développement
  { id: 64, dim: "ADA", facette: "formation",
    q: "Quand le budget formation est coupé, je cherche des alternatives plutôt que d'abandonner le développement des équipes." },
  { id: 65, dim: "ADA", facette: "formation",
    q: "Je défends activement les besoins de formation auprès de la direction même sous contrainte budgétaire." },

  // Questions complémentaires ADA
  { id: 66, dim: "ADA", facette: "vision_long_terme",
    q: "Je suis capable de faire évoluer mes pratiques RH quand je réalise qu'elles ne correspondent plus aux besoins." },
  { id: 67, dim: "ADA", facette: "mesure_impact",
    q: "Je comprends pourquoi certains établissements HCR fidélisent leurs équipes quand d'autres perdent la moitié chaque année." },
  { id: 68, dim: "ADA", facette: "culture_feedback",
    q: "Je sollicite régulièrement des retours sur ma propre façon de travailler auprès des managers et des employés." },

  // ══════════════════════════════════════════════════
  // DIMENSION RES — Gestion sous pression (Q69-Q85)
  // Score élevé = résistance = bon signe
  // ══════════════════════════════════════════════════

  // Facette 29 — Recrutement sous pression
  { id: 69, dim: "RES", facette: "recrutement_pression",
    q: "Je maintiens mes standards de recrutement même quand un poste doit être pourvu en urgence." },
  { id: 70, dim: "RES", facette: "recrutement_pression",
    q: "Face à la pression d'un manager pour recruter vite, je maintiens mon processus si je pense que le candidat n'est pas le bon." },

  // Facette 30 — Résistance à la politique interne
  { id: 71, dim: "RES", facette: "resistance_politique",
    q: "Je maintiens mes positions RH même quand des personnes influentes dans l'organisation s'y opposent." },
  { id: 72, dim: "RES", facette: "resistance_politique",
    q: "Je ne laisse pas la pression hiérarchique me faire appliquer une règle différemment selon les personnes." },

  // Facette 31 — Gestion des crises RH
  { id: 73, dim: "RES", facette: "crise_rh",
    q: "En situation de crise RH (plan social, conflit collectif), je garde ma lucidité et mon éthique." },
  { id: 74, dim: "RES", facette: "crise_rh",
    q: "Quand je gère simultanément plusieurs dossiers sensibles, je maintiens la même qualité de traitement pour chacun." },

  // Facette 32 — Équilibre urgence/stratégie
  { id: 75, dim: "RES", facette: "equilibre_urgence",
    q: "Je suis capable de gérer les urgences opérationnelles sans sacrifier les sujets de fond." },
  { id: 76, dim: "RES", facette: "equilibre_urgence",
    q: "La pression du quotidien ne m'empêche pas de travailler sur les sujets RH structurants." },

  // Facette 33 — Résistance à la flatterie et manipulation
  { id: 77, dim: "RES", facette: "resistance_manipulation",
    q: "Je sais quand un manager cherche à me manipuler pour obtenir une décision RH favorable." },
  { id: 78, dim: "RES", facette: "resistance_manipulation",
    q: "Je prends les mêmes décisions qu'un manager soit sympa avec moi ou pas." },

  // Facette 34 — Biais de recrutement
  { id: 79, dim: "RES", facette: "biais_recrutement",
    q: "Je suis capable de reconnaître et corriger mes propres biais dans un processus de recrutement." },
  { id: 80, dim: "RES", facette: "biais_recrutement",
    q: "Quand un manager demande à ne recruter que des profils similaires à son équipe, je le challenge." },

  // Facette 35 — Mobilité interne
  { id: 81, dim: "RES", facette: "mobilite_interne",
    q: "Je facilite la mobilité interne d'un bon employé même quand son manager actuel s'y oppose." },
  { id: 82, dim: "RES", facette: "mobilite_interne",
    q: "Je défends les intérêts de l'employé dans un processus de mobilité interne, pas seulement ceux du manager." },

  // Questions complémentaires RES
  { id: 83, dim: "RES", facette: "resistance_politique",
    q: "Je serais à l'aise si toutes mes décisions RH de l'année dernière étaient examinées par un auditeur externe." },
  { id: 84, dim: "RES", facette: "crise_rh",
    q: "Je suis capable de gérer un dossier prud'homal sans me laisser déstabiliser par la pression de la direction." },
  { id: 85, dim: "RES", facette: "resistance_manipulation",
    q: "Je traite une plainte anonyme avec autant de sérieux qu'une plainte signée." },

  // ══════════════════════════════════════════════════
  // QUESTIONS CROISÉES — Détection incohérence (Q86-Q100)
  // ══════════════════════════════════════════════════

  { id: 86,  dim: "INT", facette: "coherence_politique",
    q: "Si les employés de mon organisation pouvaient évaluer le RH anonymement, je serais serein sur les résultats." },
  { id: 87,  dim: "EMP", facette: "empathie_operationnelle",
    q: "Je suis du côté des employés ET de la direction — j'ai trouvé comment tenir les deux sans me trahir." },
  { id: 88,  dim: "AUT", facette: "courage_direction",
    q: "J'ai déjà dit non à la direction pour des raisons éthiques — et je l'ai bien vécu." },
  { id: 89,  dim: "ADA", facette: "vision_long_terme",
    q: "Ma façon de travailler en RH aujourd'hui est fondamentalement différente de ce qu'elle était il y a 3 ans." },
  { id: 90,  dim: "RES", facette: "resistance_politique",
    q: "Dans mon organisation, tout le monde peut porter plainte contre n'importe qui — y compris la direction." },
  { id: 91,  dim: "INT", facette: "plaintes_internes",
    q: "J'ai déjà pris une décision RH qui déplaisait à la direction parce que c'était la bonne chose à faire." },
  { id: 92,  dim: "EMP", facette: "detection_maletre",
    q: "Je serais capable de décrire précisément l'état de santé psychologique des équipes que je sers." },
  { id: 93,  dim: "AUT", facette: "positionnement",
    q: "Un bon RH n'est ni du côté de l'employé ni du côté de la direction — il est du côté de la vérité." },
  { id: 94,  dim: "RES", facette: "biais_recrutement",
    q: "Je suis capable de reconnaître un manager toxique même quand il sait se montrer sous son meilleur jour." },
  { id: 95,  dim: "ADA", facette: "culture_feedback",
    q: "Je sollicite activement des retours négatifs sur mes pratiques RH — pas seulement des validations." },
  { id: 96,  dim: "INT", facette: "confidentialite",
    q: "Je n'utiliserais jamais une information personnelle qu'un employé m'a confiée pour servir un autre agenda." },
  { id: 97,  dim: "EMP", facette: "gestion_harcelement",
    q: "Quand je détecte un comportement managérial toxique, j'interviens avant qu'une plainte formelle soit déposée." },
  { id: 98,  dim: "AUT", facette: "impact_rh",
    q: "Le RH peut changer une culture d'entreprise — j'en ai été le témoin ou l'acteur." },
  { id: 99,  dim: "RES", facette: "crise_rh",
    q: "Je suis capable de gérer ma propre charge émotionnelle quand les dossiers que je traite sont lourds." },
  { id: 100, dim: "ADA", facette: "vision_long_terme",
    q: "Dans 5 ans, je veux que les employés de l'organisation que je sers la décrivent comme un endroit où ils ont été bien traités." },
];

// ═══════════════════════════════════════════════════════════════════════
// MOTEUR DE CALCUL RH
// ═══════════════════════════════════════════════════════════════════════

export const calculateRHScore = (reponses) => {

  // 1. Regrouper les scores bruts par dimension
  const raw = { INT: [], EMP: [], AUT: [], ADA: [], RES: [] };

  QUESTIONS_RH.forEach(q => {
    const score = reponses[q.id];
    if (score !== undefined) {
      raw[q.dim].push(((score - 1) / 4) * 100);
    }
  });

  // 2. Moyenne par dimension
  const avg = arr => arr.length > 0
    ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length)
    : 50;

  const intBrut = avg(raw.INT);
  const empBrut = avg(raw.EMP);
  const autBrut = avg(raw.AUT); // Pour le RH, AUT = courage — NON inversé
  const adaBrut = avg(raw.ADA);
  const resBrut = avg(raw.RES);

  // 3. Calcul TOX (Friction)
  // Pour le RH : friction = manque d'intégrité + manque de courage
  const toxScore = Math.min(100, Math.max(0,
    Math.round(((100 - intBrut) * 0.55) + ((100 - autBrut) * 0.45))
  ));

  // 4. Dimensions finales
  const dimensions = {
    INT: intBrut,
    EMP: empBrut,
    AUT: autBrut,  // Courage managérial (non inversé pour RH)
    ADA: adaBrut,
    RES: resBrut,
    TOX: toxScore,
  };

  // 5. Score global pondéré (sans TOX)
  const globalScore = Math.round(
    intBrut * 0.25 +
    empBrut * 0.25 +
    autBrut * 0.15 +
    adaBrut * 0.20 +
    resBrut * 0.15
  );

  // 6. Compatible avec la plateforme ?
  const compatible = toxScore < 65 && intBrut > 35;

  // 7. Profil
  const profil = getProfilRH(dimensions);

  // 8. Scores par facette
  const facetteScores = {};
  QUESTIONS_RH.forEach(q => {
    const score = reponses[q.id];
    if (score !== undefined) {
      if (!facetteScores[q.facette]) facetteScores[q.facette] = [];
      facetteScores[q.facette].push(((score - 1) / 4) * 100);
    }
  });
  const facettes = {};
  Object.entries(facetteScores).forEach(([f, scores]) => {
    facettes[f] = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  });

  // 9. Top forces et axes d'amélioration
  const sorted = ['INT','EMP','AUT','ADA','RES']
    .map(d => ({ dim: d, score: dimensions[d] }))
    .sort((a, b) => b.score - a.score);

  return {
    type: 'rh',
    dimensions,
    globalScore,
    profil: profil.label,
    profilDesc: profil.desc,
    compatible,
    blocageRaison: !compatible ? getBlocageRaisonRH(dimensions) : null,
    topForces: sorted.slice(0, 3).map(x => x.dim),
    axesAmelioration: sorted.slice(-2).map(x => x.dim),
    facettes,
  };
};

// ─── PROFILS RH ───────────────────────────────────────────────────────────────

const getProfilRH = ({ INT, EMP, AUT, ADA, RES, TOX }) => {
  if (TOX >= 65) return {
    label: "PROFIL À RISQUE",
    desc: "Des indicateurs problématiques ont été détectés. L'accès à la plateforme n'est pas disponible."
  };
  if (INT <= 35) return {
    label: "PROFIL INCOMPATIBLE",
    desc: "Indicateurs d'intégrité critiques détectés. Accès à la plateforme non disponible."
  };
  if (INT >= 75 && EMP >= 70 && AUT >= 65) return {
    label: "RH STRATÈGE",
    desc: "Rigueur éthique, empathie et courage managérial. Profil d'excellence."
  };
  if (INT >= 70 && EMP >= 70 && AUT >= 55) return {
    label: "RH BIENVEILLANT",
    desc: "Vous protégez les employés et tenez vos positions. Profil solide."
  };
  if (AUT >= 70 && INT >= 65 && RES >= 65) return {
    label: "RH OPÉRATIONNEL",
    desc: "Efficace et rigoureux. À équilibrer avec plus d'empathie opérationnelle."
  };
  if (ADA >= 70 && INT >= 60) return {
    label: "RH VISIONNAIRE",
    desc: "Vision long terme et adaptabilité. Profil en développement positif."
  };
  return {
    label: "RH EN DÉVELOPPEMENT",
    desc: "Des axes d'amélioration existent. Compatible avec accompagnement."
  };
};

const getBlocageRaisonRH = ({ TOX, INT }) => {
  if (TOX >= 65) return "Des indicateurs de pratiques problématiques ont été détectés.";
  if (INT <= 35) return "Des indicateurs d'intégrité critiques ont été détectés. Contactez notre équipe.";
  return "Votre profil n'est pas compatible avec la plateforme dans sa configuration actuelle.";
};

// ─── LABELS UI ────────────────────────────────────────────────────────────────

export const RH_DIM_LABELS = {
  INT: { label: "Intégrité",           desc: "Conformité, éthique et cohérence",         icon: "🎯" },
  EMP: { label: "Intelligence humaine",desc: "Bien-être, écoute, protection",             icon: "🤝" },
  AUT: { label: "Courage managérial",  desc: "Tenir ses positions face à la direction",   icon: "⚡" },
  ADA: { label: "Vision stratégique",  desc: "Adaptabilité et vision long terme",         icon: "🔄" },
  RES: { label: "Résilience",          desc: "Tenue sous pression et indépendance",       icon: "💪" },
  TOX: { label: "Friction",            desc: "Indice de tension dans les pratiques RH",   icon: "⚠️" },
};

export const RH_FACETTE_LABELS = {
  application_droit:          "Application du droit du travail",
  zones_grises:               "Zones grises contractuelles",
  rapport_inspection:         "Rapport à l'inspection",
  equite_traitement:          "Équité de traitement",
  plaintes_internes:          "Gestion des plaintes",
  coherence_politique:        "Cohérence politique RH",
  confidentialite:            "Confidentialité",
  detection_maletre:          "Détection du mal-être",
  prevention_rps:             "Prévention des RPS",
  gestion_harcelement:        "Gestion du harcèlement",
  conditions_travail:         "Conditions de travail",
  retour_arret:               "Retour après arrêt",
  charge_travail:             "Charge de travail",
  empathie_operationnelle:    "Empathie opérationnelle",
  courage_direction:          "Courage face à la direction",
  credibilite_terrain:        "Crédibilité terrain",
  gestion_conflits:           "Gestion des conflits",
  positionnement:             "Positionnement RH",
  communication_crise:        "Communication en crise",
  impact_rh:                  "Impact RH",
  politique_interne:          "Résistance politique interne",
  vision_long_terme:          "Vision long terme",
  changement_organisationnel: "Conduite du changement",
  mesure_impact:              "Mesure de l'impact RH",
  marque_employeur:           "Marque employeur",
  gestion_talents:            "Gestion des talents",
  culture_feedback:           "Culture du feedback",
  formation:                  "Formation et développement",
  recrutement_pression:       "Recrutement sous pression",
  resistance_politique:       "Résistance politique",
  crise_rh:                   "Gestion de crise RH",
  equilibre_urgence:          "Équilibre urgence/stratégie",
  resistance_manipulation:    "Résistance à la manipulation",
  biais_recrutement:          "Biais de recrutement",
  mobilite_interne:           "Mobilité interne",
};
