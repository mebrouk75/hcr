// ═══════════════════════════════════════════════════════════════════════
// LA RELÈVE — PATRON ENGINE
// 6 dimensions · 42 facettes · 100 questions Likert 1-5
// 1 = Pas du tout d'accord  ·  5 = Tout à fait d'accord
// ═══════════════════════════════════════════════════════════════════════

export const QUESTIONS_PATRON = [

  // ══════════════════════════════════════════════════
  // DIMENSION AUT — Pouvoir & Autorité (Q1-Q17)
  // INVERSÉ au calcul : score élevé = autoritarisme = mauvais
  // ══════════════════════════════════════════════════

  // Facette 1 — Tolérance à la contradiction
  { id: 1,  dim: "AUT", facette: "tolerance_contradiction",
    q: "Quand un employé me contredit devant l'équipe, je maintiens ma position pour ne pas perdre mon autorité." },
  { id: 2,  dim: "AUT", facette: "tolerance_contradiction",
    q: "Je me sens déstabilisé quand quelqu'un de moins expérimenté que moi a une meilleure idée." },

  // Facette 2 — Besoin de contrôle
  { id: 3,  dim: "AUT", facette: "besoin_controle",
    q: "Quand mon adjoint prend de bonnes décisions sans me consulter, ça me met quand même mal à l'aise." },
  { id: 4,  dim: "AUT", facette: "besoin_controle",
    q: "Je vérifie régulièrement ce qui se passe dans mon établissement même quand mon équipe gère bien." },

  // Facette 3 — Réaction au désaccord
  { id: 5,  dim: "AUT", facette: "reaction_desaccord",
    q: "Un employé qui résiste à mes directives pendant le service mérite une sanction immédiate." },
  { id: 6,  dim: "AUT", facette: "reaction_desaccord",
    q: "Quand toute mon équipe pense que j'ai tort, je maintiens quand même ma décision." },

  // Facette 4 — Délégation réelle
  { id: 7,  dim: "AUT", facette: "delegation_reelle",
    q: "Déléguer une tâche importante me met mal à l'aise car je ne contrôle plus le résultat." },
  { id: 8,  dim: "AUT", facette: "delegation_reelle",
    q: "Je reprends la main sur une décision de mon manager même si le résultat est satisfaisant." },

  // Facette 5 — Ego face au succès de l'équipe
  { id: 9,  dim: "AUT", facette: "ego_succes_equipe",
    q: "Quand la presse parle de mon établissement en citant un employé plutôt que moi, ça m'agace." },
  { id: 10, dim: "AUT", facette: "ego_succes_equipe",
    q: "J'ai du mal à féliciter publiquement un employé dont les idées sont meilleures que les miennes." },

  // Facette 6 — Réaction à l'erreur
  { id: 11, dim: "AUT", facette: "reaction_erreur",
    q: "Corriger un employé devant ses collègues est parfois nécessaire pour que le message passe." },
  { id: 12, dim: "AUT", facette: "reaction_erreur",
    q: "Quand un employé fait une erreur coûteuse, ma première réaction est de le sanctionner." },

  // Facette 7 — Rapport à la critique externe
  { id: 13, dim: "AUT", facette: "critique_externe",
    q: "Quand un consultant critique mon organisation, je le vis comme une remise en cause personnelle." },
  { id: 14, dim: "AUT", facette: "critique_externe",
    q: "Un avis négatif sur mon management me met sur la défensive plutôt que de m'amener à réfléchir." },

  // Questions complémentaires AUT
  { id: 15, dim: "AUT", facette: "besoin_controle",
    q: "Je préfère que mon équipe me demande la permission plutôt que de prendre des initiatives." },
  { id: 16, dim: "AUT", facette: "reaction_desaccord",
    q: "La peur est parfois un outil de management utile pour maintenir l'ordre." },
  { id: 17, dim: "AUT", facette: "tolerance_contradiction",
    q: "Élever la voix pour recadrer un employé pendant un service est parfois nécessaire." },

  // ══════════════════════════════════════════════════
  // DIMENSION EMP — Équipe & Humain (Q18-Q34)
  // Score élevé = bienveillance = bon signe
  // ══════════════════════════════════════════════════

  // Facette 8 — Détection du mal-être
  { id: 18, dim: "EMP", facette: "detection_maletre",
    q: "Je remarque rapidement quand un employé ne va pas bien, même s'il ne le dit pas." },
  { id: 19, dim: "EMP", facette: "detection_maletre",
    q: "Je connais les signaux faibles qui précèdent une démission dans mon équipe." },

  // Facette 9 — Reconnaissance
  { id: 20, dim: "EMP", facette: "reconnaissance",
    q: "Je dis explicitement à mes employés ce qu'ils font bien, pas seulement ce qui doit s'améliorer." },
  { id: 21, dim: "EMP", facette: "reconnaissance",
    q: "Je m'assure que chaque employé sait que sa contribution compte pour moi." },

  // Facette 10 — Gestion des départs
  { id: 22, dim: "EMP", facette: "gestion_departs",
    q: "Quand un bon employé part, je m'interroge sur ma part de responsabilité dans ce départ." },
  { id: 23, dim: "EMP", facette: "gestion_departs",
    q: "Je fais des entretiens de sortie pour comprendre les vraies raisons d'un départ." },

  // Facette 11 — Protection de l'équipe
  { id: 24, dim: "EMP", facette: "protection_equipe",
    q: "Je protège mon équipe face à un client agressif ou irrespectueux, même si c'est un bon client." },
  { id: 25, dim: "EMP", facette: "protection_equipe",
    q: "Le bien-être de mon équipe est aussi important que mes résultats financiers." },

  // Facette 12 — Équité de traitement
  { id: 26, dim: "EMP", facette: "equite_traitement",
    q: "Quand j'ai un favori dans mon équipe, j'en suis conscient et je fais attention à rester équitable." },
  { id: 27, dim: "EMP", facette: "equite_traitement",
    q: "Mes règles s'appliquent à tous de la même façon, indépendamment de l'ancienneté ou des affinités." },

  // Facette 13 — Intégration des nouveaux
  { id: 28, dim: "EMP", facette: "integration",
    q: "Je m'implique personnellement dans l'intégration des nouveaux employés." },
  { id: 29, dim: "EMP", facette: "integration",
    q: "Quand un nouvel employé est mal accueilli par l'équipe en place, j'interviens." },

  // Facette 14 — Communication difficile
  { id: 30, dim: "EMP", facette: "communication_difficile",
    q: "Je crée des conditions pour que mon équipe puisse me dire les choses difficiles." },
  { id: 31, dim: "EMP", facette: "communication_difficile",
    q: "Je m'excuse auprès de mon équipe quand j'ai pris une mauvaise décision." },

  // Questions complémentaires EMP
  { id: 32, dim: "EMP", facette: "detection_maletre",
    q: "J'adapte les plannings quand je détecte des signes de fatigue ou de surmenage." },
  { id: 33, dim: "EMP", facette: "reconnaissance",
    q: "La reconnaissance verbale au quotidien réduit le turnover plus que les augmentations seules." },
  { id: 34, dim: "EMP", facette: "protection_equipe",
    q: "Je pense que les erreurs font partie de l'apprentissage et je le montre concrètement." },

  // ══════════════════════════════════════════════════
  // DIMENSION INT — Éthique & Légal (Q35-Q51)
  // Score élevé = intégrité = bon signe
  // ══════════════════════════════════════════════════

  // Facette 15 — Respect droit du travail
  { id: 35, dim: "INT", facette: "droit_travail",
    q: "Je respecte les majorations légales (nuits, dimanches, fériés) même quand la trésorerie est tendue." },
  { id: 36, dim: "INT", facette: "droit_travail",
    q: "Je pourrais passer un contrôle de l'inspection du travail demain sans stress particulier." },

  // Facette 16 — Contrats et déclarations
  { id: 37, dim: "INT", facette: "contrats_declarations",
    q: "Aucune heure travaillée ne reste non déclarée dans mon établissement." },
  { id: 38, dim: "INT", facette: "contrats_declarations",
    q: "Je régularise en CDI les extras qui travaillent régulièrement pour moi depuis plusieurs mois." },

  // Facette 17 — Zones grises financières
  { id: 39, dim: "INT", facette: "zones_grises",
    q: "Je refuse les arrangements financiers non tracés avec des fournisseurs, même avantageux." },
  { id: 40, dim: "INT", facette: "zones_grises",
    q: "Je n'utilise pas les CDD en chaîne pour éviter de proposer des CDI." },

  // Facette 18 — Gestion des plaintes internes
  { id: 41, dim: "INT", facette: "plaintes_internes",
    q: "Je prends au sérieux toute plainte d'un employé sur un manager, même si j'apprécie ce manager." },
  { id: 42, dim: "INT", facette: "plaintes_internes",
    q: "Je n'accepte pas qu'un manager de mon équipe soit irrespectueux avec les employés." },

  // Facette 19 — Équité salariale
  { id: 43, dim: "INT", facette: "equite_salariale",
    q: "Les heures supplémentaires sont systématiquement payées ou récupérées selon les règles." },
  { id: 44, dim: "INT", facette: "equite_salariale",
    q: "Je divise les pourboires de façon équitable et transparente selon les règles en vigueur." },

  // Facette 20 — Cohérence valeurs/actes
  { id: 45, dim: "INT", facette: "coherence_valeurs",
    q: "Mes valeurs affichées correspondent à mon comportement réel au quotidien." },
  { id: 46, dim: "INT", facette: "coherence_valeurs",
    q: "La pérennité de mon établissement ne justifie pas des décisions contraires à mes valeurs." },

  // Facette 21 — Rapport à l'inspection
  { id: 47, dim: "INT", facette: "rapport_inspection",
    q: "Je collabore pleinement avec l'inspection du travail sans chercher à minimiser les constats." },
  { id: 48, dim: "INT", facette: "rapport_inspection",
    q: "Je documente les problèmes de performance avant d'envisager une rupture de contrat." },

  // Questions complémentaires INT
  { id: 49, dim: "INT", facette: "coherence_valeurs",
    q: "Je reconnais publiquement mes erreurs de gestion quand elles ont impacté mon équipe." },
  { id: 50, dim: "INT", facette: "droit_travail",
    q: "Je ne propose jamais de périodes d'essai non officielles ou non rémunérées." },
  { id: 51, dim: "INT", facette: "equite_salariale",
    q: "Je suis transparent avec mon équipe sur la situation financière de l'établissement." },

  // ══════════════════════════════════════════════════
  // DIMENSION RES — Résilience & Gestion de crise (Q52-Q68)
  // Score élevé = bonne résistance = bon signe
  // ══════════════════════════════════════════════════

  // Facette 22 — Stress financier
  { id: 52, dim: "RES", facette: "stress_financier",
    q: "En période de difficultés financières, la pression que je ressens ne change pas mon comportement avec mon équipe." },
  { id: 53, dim: "RES", facette: "stress_financier",
    q: "Avant de couper dans les effectifs, j'explore toutes les autres options possibles." },

  // Facette 23 — Rush catastrophique
  { id: 54, dim: "RES", facette: "rush_catastrophique",
    q: "Face à une crise opérationnelle soudaine (panne, absence de dernière minute), je garde mon calme." },
  { id: 55, dim: "RES", facette: "rush_catastrophique",
    q: "En haute saison sous forte pression, mon management reste cohérent et respectueux." },

  // Facette 24 — Crise de réputation
  { id: 56, dim: "RES", facette: "crise_reputation",
    q: "Face à un avis négatif viral ou une crise de réputation en ligne, je gère sans paniquer." },
  { id: 57, dim: "RES", facette: "crise_reputation",
    q: "Je sais distinguer une mauvaise passe temporaire d'un problème structurel qui nécessite une vraie décision." },

  // Facette 25 — Décision en urgence
  { id: 58, dim: "RES", facette: "decision_urgence",
    q: "Je suis capable de prendre des décisions difficiles rapidement quand la situation l'exige." },
  { id: 59, dim: "RES", facette: "decision_urgence",
    q: "J'ai une vision claire de ce que je ferais si mon CA baissait de 30% demain." },

  // Facette 26 — Échec public
  { id: 60, dim: "RES", facette: "echec_public",
    q: "Quand une décision stratégique que j'ai prise échoue, je l'admets et je rectifie rapidement." },
  { id: 61, dim: "RES", facette: "echec_public",
    q: "Je peux encaisser des critiques sévères sur mon établissement sans me déstabiliser." },

  // Facette 27 — Conflit grave en équipe
  { id: 62, dim: "RES", facette: "conflit_equipe",
    q: "Quand deux membres clés de mon équipe sont en conflit ouvert, j'interviens rapidement et efficacement." },
  { id: 63, dim: "RES", facette: "conflit_equipe",
    q: "Quand je dois licencier quelqu'un pour raison économique, je gère cet entretien avec humanité." },

  // Facette 28 — Résistance à la panique
  { id: 64, dim: "RES", facette: "resistance_panique",
    q: "Je peux fonctionner plusieurs semaines sous forte pression sans que mon comportement se dégrade." },
  { id: 65, dim: "RES", facette: "resistance_panique",
    q: "Quand les choses vont vraiment mal, je cherche des solutions plutôt que des coupables." },

  // Questions complémentaires RES
  { id: 66, dim: "RES", facette: "stress_financier",
    q: "En période de pertes, je maintiens mes engagements envers mon équipe dans la mesure du possible." },
  { id: 67, dim: "RES", facette: "decision_urgence",
    q: "J'ai un réseau ou un soutien extérieur sur lequel m'appuyer dans les moments difficiles." },
  { id: 68, dim: "RES", facette: "echec_public",
    q: "Je suis capable de me remettre en question après un échec sans m'effondrer ni me braquer." },

  // ══════════════════════════════════════════════════
  // DIMENSION ADA — Intelligence émotionnelle (Q69-Q85)
  // Score élevé = maturité = bon signe
  // ══════════════════════════════════════════════════

  // Facette 29 — Lucidité sur ses défauts
  { id: 69, dim: "ADA", facette: "lucidite_defauts",
    q: "Je connais mes points faibles en tant que patron et je travaille activement à les corriger." },
  { id: 70, dim: "ADA", facette: "lucidite_defauts",
    q: "Je sais ce que mes employés diraient de moi si on les interrogeait anonymement." },

  // Facette 30 — Cohérence discours/comportement
  { id: 71, dim: "ADA", facette: "coherence_discours",
    q: "Ce que je dis à mon équipe correspond à ce que je fais réellement." },
  { id: 72, dim: "ADA", facette: "coherence_discours",
    q: "Je ne demande pas à mon équipe des efforts que je ne suis pas prêt à faire moi-même." },

  // Facette 31 — Capacité à s'excuser
  { id: 73, dim: "ADA", facette: "capacite_excuses",
    q: "Je m'excuse auprès d'un employé quand je reconnais avoir eu tort, sans chercher à minimiser." },
  { id: 74, dim: "ADA", facette: "capacite_excuses",
    q: "Reconnaître une erreur devant mon équipe renforce mon autorité plutôt que de la fragiliser." },

  // Facette 32 — Résistance à la flatterie
  { id: 75, dim: "ADA", facette: "resistance_flatterie",
    q: "Je sais distinguer un employé loyal qui me dit la vérité d'un employé qui me dit ce que je veux entendre." },
  { id: 76, dim: "ADA", facette: "resistance_flatterie",
    q: "Quand tout le monde est d'accord avec moi, ça m'amène à questionner si les gens osent vraiment s'exprimer." },

  // Facette 33 — Solitude du dirigeant
  { id: 77, dim: "ADA", facette: "solitude_dirigeant",
    q: "J'ai appris à gérer sainement la solitude liée à mon rôle de patron." },
  { id: 78, dim: "ADA", facette: "solitude_dirigeant",
    q: "Je suis capable de reconnaître quand j'ai besoin d'aide extérieure et de la demander." },

  // Facette 34 — Apprentissage par l'échec
  { id: 79, dim: "ADA", facette: "apprentissage_echec",
    q: "J'apprends concrètement des erreurs de gestion que j'ai commises par le passé." },
  { id: 80, dim: "ADA", facette: "apprentissage_echec",
    q: "Je suis capable d'apprendre de quelqu'un qui a moins d'expérience que moi." },

  // Facette 35 — Adaptabilité managériale
  { id: 81, dim: "ADA", facette: "adaptabilite_manageriale",
    q: "J'adapte mon style de management selon les personnalités de mon équipe." },
  { id: 82, dim: "ADA", facette: "adaptabilite_manageriale",
    q: "Je teste de nouvelles façons de manager même si ça sort de ma zone de confort." },

  // Questions complémentaires ADA
  { id: 83, dim: "ADA", facette: "lucidite_defauts",
    q: "Je remets régulièrement en question mes pratiques managériales." },
  { id: 84, dim: "ADA", facette: "coherence_discours",
    q: "Mon ambition pour l'établissement ne prend pas le dessus sur le bien-être de mon équipe." },
  { id: 85, dim: "ADA", facette: "resistance_flatterie",
    q: "Je suis conscient de l'impact que mon humeur peut avoir sur toute mon équipe." },

  // ══════════════════════════════════════════════════
  // QUESTIONS CROISÉES — Détection incohérence (Q86-Q100)
  // Ces questions semblent neutres mais croisent
  // les réponses des dimensions précédentes
  // ══════════════════════════════════════════════════

  { id: 86,  dim: "AUT", facette: "tolerance_contradiction",
    q: "Je suis capable de changer d'avis suite au retour de mon équipe, même en public." },
  { id: 87,  dim: "EMP", facette: "gestion_departs",
    q: "Mon taux de turnover est inférieur à la moyenne du secteur HCR." },
  { id: 88,  dim: "INT", facette: "coherence_valeurs",
    q: "J'ai déjà refusé une opportunité financière parce qu'elle allait contre mes valeurs." },
  { id: 89,  dim: "RES", facette: "stress_financier",
    q: "En période de crise, les membres de mon équipe me voient comme un point d'ancrage stable." },
  { id: 90,  dim: "ADA", facette: "lucidite_defauts",
    q: "Je comprends pourquoi certains établissements fidélisent leurs équipes et d'autres non." },
  { id: 91,  dim: "AUT", facette: "delegation_reelle",
    q: "Mon équipe prend des initiatives sans me demander la permission pour les décisions du quotidien." },
  { id: 92,  dim: "EMP", facette: "communication_difficile",
    q: "Les membres de mon équipe me parlent de leurs difficultés personnelles quand elles impactent leur travail." },
  { id: 93,  dim: "INT", facette: "plaintes_internes",
    q: "Si un employé portait plainte contre mon établissement aux prud'hommes, je serais serein sur le fond." },
  { id: 94,  dim: "RES", facette: "resistance_panique",
    q: "Je suis capable de prendre soin de mon équipe même dans les périodes où moi-même je suis sous pression." },
  { id: 95,  dim: "ADA", facette: "apprentissage_echec",
    q: "Les erreurs que j'ai faites en début de carrière ont fondamentalement changé ma façon de manager." },
  { id: 96,  dim: "AUT", facette: "ego_succes_equipe",
    q: "La réussite de mon équipe me rend fier, même quand elle n'est pas directement liée à mes décisions." },
  { id: 97,  dim: "EMP", facette: "equite_traitement",
    q: "Je traite un employé en CDI et un extra avec le même niveau de respect et de considération." },
  { id: 98,  dim: "INT", facette: "zones_grises",
    q: "Je serais à l'aise si mes pratiques de gestion RH étaient totalement transparentes et visibles de tous." },
  { id: 99,  dim: "RES", facette: "echec_public",
    q: "Quand mon établissement traverse une mauvaise période, j'analyse sans chercher de coupables." },
  { id: 100, dim: "ADA", facette: "coherence_discours",
    q: "Dans 5 ans, je veux que mes anciens employés parlent de moi comme d'un patron qui les a fait grandir." },
];

// ═══════════════════════════════════════════════════════════════════════
// MOTEUR DE CALCUL
// ═══════════════════════════════════════════════════════════════════════

export const calculatePatronScore = (reponses) => {

  // 1. Regrouper les scores bruts par dimension
  const raw = { AUT: [], EMP: [], INT: [], RES: [], ADA: [] };

  QUESTIONS_PATRON.forEach(q => {
    const score = reponses[q.id];
    if (score !== undefined) {
      // Normaliser Likert 1-5 → 0-100
      raw[q.dim].push(((score - 1) / 4) * 100);
    }
  });

  // 2. Moyenne par dimension
  const avg = arr => arr.length > 0
    ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length)
    : 50;

  const autBrut = avg(raw.AUT); // Autoritarisme brut — élevé = mauvais
  const empBrut = avg(raw.EMP);
  const intBrut = avg(raw.INT);
  const resBrut = avg(raw.RES);
  const adaBrut = avg(raw.ADA);

  // 3. AUT inversé pour le matching
  // Plus le patron est autoritaire → plus son score AUT est bas
  const autScore = Math.round(100 - autBrut);

  // 4. Calcul TOX (Friction)
  // Friction = autoritarisme élevé + manque d'empathie
  const toxScore = Math.min(100, Math.max(0,
    Math.round((autBrut * 0.55) + ((100 - empBrut) * 0.45))
  ));

  // 5. Dimensions finales
  const dimensions = {
    AUT: autScore,   // Autorité saine (inversée)
    EMP: empBrut,    // Intelligence humaine
    INT: intBrut,    // Intégrité
    RES: resBrut,    // Résilience
    ADA: adaBrut,    // Maturité
    TOX: toxScore,   // Friction (calculée)
  };

  // 6. Score global pondéré (sans TOX)
  const globalScore = Math.round(
    autScore * 0.20 +
    empBrut  * 0.25 +
    intBrut  * 0.20 +
    resBrut  * 0.20 +
    adaBrut  * 0.15
  );

  // 7. Compatible avec la plateforme ?
  // Bloqué si friction >= 65 OU intégrité <= 35
  const compatible = toxScore < 65 && intBrut > 35;

  // 8. Profil
  const profil = getProfilPatron(dimensions);

  // 9. Scores par facette (pour affichage détaillé)
  const facetteScores = {};
  QUESTIONS_PATRON.forEach(q => {
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

  // 10. Top forces et axes d'amélioration
  const sorted = ['AUT','EMP','INT','RES','ADA']
    .map(d => ({ dim: d, score: dimensions[d] }))
    .sort((a, b) => b.score - a.score);

  return {
    type: 'patron',
    dimensions,
    globalScore,
    profil: profil.label,
    profilDesc: profil.desc,
    compatible,
    blocageRaison: !compatible ? getBlocageRaison(dimensions) : null,
    topForces: sorted.slice(0, 3).map(x => x.dim),
    axesAmelioration: sorted.slice(-2).map(x => x.dim),
    facettes,
  };
};

// ─── PROFILS ─────────────────────────────────────────────────────────────────

const getProfilPatron = ({ AUT, EMP, INT, RES, ADA, TOX }) => {
  if (TOX >= 65) return {
    label: "ENVIRONNEMENT À RISQUE",
    desc: "Friction trop élevée. L'accès aux candidats n'est pas disponible dans ces conditions."
  };
  if (INT <= 35) return {
    label: "PROFIL INCOMPATIBLE",
    desc: "Indicateurs d'intégrité critiques détectés. Accès à la plateforme non disponible."
  };
  if (EMP >= 70 && INT >= 70 && AUT >= 65 && TOX < 35) return {
    label: "PATRON BÂTISSEUR",
    desc: "Vous construisez sur le long terme. Votre équipe est votre principal actif. Compatible avec tous les profils."
  };
  if (AUT >= 60 && EMP >= 55 && INT >= 65 && TOX < 50) return {
    label: "PATRON EXIGEANT",
    desc: "Standards élevés, respect de l'équipe. Compatible avec les profils résilients et autonomes."
  };
  if (RES >= 70 && EMP >= 60 && TOX < 50) return {
    label: "PATRON PRAGMATIQUE",
    desc: "Bon équilibre économique et humain. Profil solide."
  };
  if (ADA >= 70 && EMP >= 60) return {
    label: "PATRON ÉVOLUTIF",
    desc: "En remise en question constante. Profil en développement positif."
  };
  return {
    label: "PATRON EN DÉVELOPPEMENT",
    desc: "Des axes d'amélioration existent sur certaines dimensions. Compatible avec accompagnement."
  };
};

const getBlocageRaison = ({ TOX, INT }) => {
  if (TOX >= 65) return "L'indice de friction de votre établissement est trop élevé pour nos candidats.";
  if (INT <= 35) return "Des indicateurs d'intégrité critiques ont été détectés. Contactez notre équipe.";
  return "Votre profil n'est pas compatible avec la plateforme dans sa configuration actuelle.";
};

// ─── LABELS UI ────────────────────────────────────────────────────────────────

export const PATRON_DIM_LABELS = {
  AUT: { label: "Autorité saine",       desc: "Diriger sans écraser",                  icon: "⚡" },
  EMP: { label: "Intelligence humaine", desc: "Écoute, reconnaissance, bienveillance", icon: "🤝" },
  INT: { label: "Intégrité",            desc: "Cohérence valeurs / actes / légal",      icon: "🎯" },
  RES: { label: "Résilience",           desc: "Tenue sous pression et en crise",        icon: "💪" },
  ADA: { label: "Maturité",             desc: "Lucidité sur soi et adaptabilité",       icon: "🔄" },
  TOX: { label: "Friction",             desc: "Indice de tension de l'environnement",   icon: "⚠️" },
};

export const PATRON_FACETTE_LABELS = {
  tolerance_contradiction: "Tolérance à la contradiction",
  besoin_controle:         "Besoin de contrôle",
  reaction_desaccord:      "Réaction au désaccord",
  delegation_reelle:       "Délégation réelle",
  ego_succes_equipe:       "Ego face au succès de l'équipe",
  reaction_erreur:         "Réaction à l'erreur",
  critique_externe:        "Rapport à la critique externe",
  detection_maletre:       "Détection du mal-être",
  reconnaissance:          "Reconnaissance",
  gestion_departs:         "Gestion des départs",
  protection_equipe:       "Protection de l'équipe",
  equite_traitement:       "Équité de traitement",
  integration:             "Intégration des nouveaux",
  communication_difficile: "Communication difficile",
  droit_travail:           "Respect droit du travail",
  contrats_declarations:   "Contrats et déclarations",
  zones_grises:            "Zones grises",
  plaintes_internes:       "Gestion des plaintes",
  equite_salariale:        "Équité salariale",
  coherence_valeurs:       "Cohérence valeurs/actes",
  rapport_inspection:      "Rapport à l'inspection",
  stress_financier:        "Stress financier",
  rush_catastrophique:     "Rush catastrophique",
  crise_reputation:        "Crise de réputation",
  decision_urgence:        "Décision en urgence",
  echec_public:            "Échec public",
  conflit_equipe:          "Conflit grave",
  resistance_panique:      "Résistance à la panique",
  lucidite_defauts:        "Lucidité sur ses défauts",
  coherence_discours:      "Cohérence discours/comportement",
  capacite_excuses:        "Capacité à s'excuser",
  resistance_flatterie:    "Résistance à la flatterie",
  solitude_dirigeant:      "Solitude du dirigeant",
  apprentissage_echec:     "Apprentissage par l'échec",
  adaptabilite_manageriale:"Adaptabilité managériale",
};
