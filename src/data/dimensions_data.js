/**
 * QUESTIONS DIMENSION (Likert 1-5) pour BARMAN, SERVEUR, CHEF DE RANG
 * 
 * 7 dimensions × 4 questions = 28 questions par rôle
 * Chaque question a : id, description, category, type: "DIMENSION", pole_faible, pole_fort
 * 
 * Dimensions :
 * - INFLUENCE : Capacité à influencer, convaincre, entraîner
 * - CONSIDÉRATION : Empathie, écoute, bienveillance (= Agreeableness)
 * - CRÉATIVITÉ : Innovation, improvisation, originalité
 * - RIGUEUR : Précision, méthode, respect des process
 * - ÉQUILIBRE : Gestion vie pro/perso, stabilité émotionnelle
 * - STRESS : Résistance à la pression, gestion du rush
 * - DARK_EMPATHY : Manipulation émotionnelle, détection/exploitation des faiblesses
 */

// ═══════════════════════════════════════════════════════════════
// BARMAN — 28 questions
// ═══════════════════════════════════════════════════════════════
export const BARMAN_DIMENSIONS = {
    section: "Dimensions — Soft Skills & Valeurs",
    id: "PHASE_DIM",
    items: [
        // INFLUENCE (4 questions)
        { id: "BM_DIM_01", description: "Quand je recommande un cocktail, le client le prend.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Rarement", pole_fort: "Toujours" },
        { id: "BM_DIM_02", description: "Je donne naturellement le rythme au bar.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Non", pole_fort: "Oui" },
        { id: "BM_DIM_03", description: "Les collègues suivent mes suggestions sans que j'insiste.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Jamais", pole_fort: "Systématiquement" },
        { id: "BM_DIM_04", description: "Je convaincs facilement un client hésitant.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Difficilement", pole_fort: "Très facilement" },

        // CONSIDÉRATION (4 questions) — Agreeableness
        { id: "BM_DIM_05", description: "Je sens quand un client traverse un moment difficile.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Pas du tout", pole_fort: "Immédiatement" },
        { id: "BM_DIM_06", description: "Je prends le temps d'écouter un collègue en galère, même en plein rush.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Non", pole_fort: "Oui" },
        { id: "BM_DIM_07", description: "Le bien-être de l'équipe est plus important que la productivité.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Pas d'accord", pole_fort: "Totalement d'accord" },
        { id: "BM_DIM_08", description: "Je fais passer les besoins des autres avant les miens au travail.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Rarement", pole_fort: "Souvent" },

        // CRÉATIVITÉ (4 questions)
        { id: "BM_DIM_09", description: "J'invente régulièrement de nouvelles recettes de cocktails.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Jamais", pole_fort: "Tout le temps" },
        { id: "BM_DIM_10", description: "J'improvise quand il manque un ingrédient.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Ça me bloque", pole_fort: "J'adore ça" },
        { id: "BM_DIM_11", description: "Je propose des idées pour améliorer le service.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Rarement", pole_fort: "Constamment" },
        { id: "BM_DIM_12", description: "Je sors des sentiers battus pour surprendre le client.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Non", pole_fort: "Systématiquement" },

        // RIGUEUR (4 questions)
        { id: "BM_DIM_13", description: "Je respecte les dosages au millilitre près.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Approximatif", pole_fort: "Au gramme près" },
        { id: "BM_DIM_14", description: "Mon bar est toujours rangé et propre, même en rush.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Pas toujours", pole_fort: "Impeccable" },
        { id: "BM_DIM_15", description: "Je suis les recettes à la lettre avant de les modifier.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Je modifie d'emblée", pole_fort: "Toujours la base d'abord" },
        { id: "BM_DIM_16", description: "Je fais l'inventaire avec précision.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "À l'à-peu-près", pole_fort: "Au centime près" },

        // ÉQUILIBRE (4 questions)
        { id: "BM_DIM_17", description: "Je déconnecte facilement après le service.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Très difficile", pole_fort: "Très facilement" },
        { id: "BM_DIM_18", description: "Je maintiens une vie sociale en dehors du travail.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Pas du tout", pole_fort: "Oui, équilibrée" },
        { id: "BM_DIM_19", description: "Je sais dire non quand on me demande des heures en plus.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Jamais", pole_fort: "Quand c'est nécessaire" },
        { id: "BM_DIM_20", description: "Mes émotions du travail ne débordent pas sur ma vie perso.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Elles débordent", pole_fort: "Compartimenté" },

        // STRESS (4 questions)
        { id: "BM_DIM_21", description: "Plus il y a de monde, plus je suis performant.", category: "STRESS", type: "DIMENSION", pole_faible: "Je perds mes moyens", pole_fort: "Je m'épanouis" },
        { id: "BM_DIM_22", description: "Un client agressif ne me déstabilise pas.", category: "STRESS", type: "DIMENSION", pole_faible: "Ça me paralyse", pole_fort: "Je gère calmement" },
        { id: "BM_DIM_23", description: "Quand tout part en vrille, je reste lucide.", category: "STRESS", type: "DIMENSION", pole_faible: "Je panique", pole_fort: "Je suis un roc" },
        { id: "BM_DIM_24", description: "Je récupère vite après un service intense.", category: "STRESS", type: "DIMENSION", pole_faible: "Plusieurs jours", pole_fort: "En quelques heures" },

        // DARK_EMPATHY (4 questions)
        { id: "BM_DIM_25", description: "Je détecte rapidement les failles émotionnelles d'un client.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "Oui, instinctivement" },
        { id: "BM_DIM_26", description: "Je sais faire consommer plus un client sans qu'il s'en rende compte.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "Facilement" },
        { id: "BM_DIM_27", description: "J'utilise le charme pour obtenir de meilleurs pourboires.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Jamais", pole_fort: "Systématiquement" },
        { id: "BM_DIM_28", description: "Je sais retourner une situation tendue à mon avantage.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "Toujours" },
    ]
};

// ═══════════════════════════════════════════════════════════════
// SERVEUR — 28 questions
// ═══════════════════════════════════════════════════════════════
export const SERVEUR_DIMENSIONS = {
    section: "Dimensions — Soft Skills & Valeurs",
    id: "PHASE_DIM",
    items: [
        // INFLUENCE
        { id: "SV_DIM_01", description: "Quand je suggère un plat, le client suit mon conseil.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Rarement", pole_fort: "Presque toujours" },
        { id: "SV_DIM_02", description: "J'entraîne naturellement la salle dans un rythme positif.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Non", pole_fort: "Oui" },
        { id: "SV_DIM_03", description: "Les nouveaux se tournent vers moi pour savoir comment faire.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Pas spécialement", pole_fort: "Systématiquement" },
        { id: "SV_DIM_04", description: "Je fais monter l'addition moyenne sans effort.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Non", pole_fort: "Naturellement" },

        // CONSIDÉRATION
        { id: "SV_DIM_05", description: "Je remarque quand un collègue est au bout du rouleau.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Pas du tout", pole_fort: "Tout de suite" },
        { id: "SV_DIM_06", description: "Je couvre un collègue en difficulté même si ça me surcharge.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Non", pole_fort: "Sans hésiter" },
        { id: "SV_DIM_07", description: "Un client mécontent mérite qu'on l'écoute avant de répondre.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Pas forcément", pole_fort: "Absolument" },
        { id: "SV_DIM_08", description: "L'harmonie de l'équipe passe avant mes objectifs perso.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Non", pole_fort: "Toujours" },

        // CRÉATIVITÉ
        { id: "SV_DIM_09", description: "Je personnalise mon service selon le type de client.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Service standard", pole_fort: "Toujours adapté" },
        { id: "SV_DIM_10", description: "J'ai des astuces perso pour mémoriser les commandes complexes.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Non", pole_fort: "Oui, plein" },
        { id: "SV_DIM_11", description: "Je trouve des solutions originales quand le matériel fait défaut.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Je bloque", pole_fort: "Je m'adapte" },
        { id: "SV_DIM_12", description: "Je propose des améliorations pour la mise en place.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Jamais", pole_fort: "Régulièrement" },

        // RIGUEUR
        { id: "SV_DIM_13", description: "Ma mise en place est irréprochable à chaque service.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Variable", pole_fort: "Toujours parfaite" },
        { id: "SV_DIM_14", description: "Je vérifie systématiquement chaque plat avant de l'envoyer.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Pas toujours", pole_fort: "Sans exception" },
        { id: "SV_DIM_15", description: "Je respecte les temps d'attente maximum entre les plats.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Approximatif", pole_fort: "Au chrono" },
        { id: "SV_DIM_16", description: "Je note et remonte les anomalies (température, présentation).", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Rarement", pole_fort: "Systématiquement" },

        // ÉQUILIBRE
        { id: "SV_DIM_17", description: "Je quitte le restaurant mentalement dès que je passe la porte.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Le boulot me suit", pole_fort: "Coupure nette" },
        { id: "SV_DIM_18", description: "Je gère bien les coupures entre midi et soir.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "C'est épuisant", pole_fort: "J'en profite" },
        { id: "SV_DIM_19", description: "Je ne sacrifie pas ma santé pour le service.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Je me sacrifie", pole_fort: "Je me préserve" },
        { id: "SV_DIM_20", description: "J'arrive à gérer travail et vie perso sans conflit.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Difficile", pole_fort: "Sans problème" },

        // STRESS
        { id: "SV_DIM_21", description: "Un rush de samedi soir me booste plutôt que me stresser.", category: "STRESS", type: "DIMENSION", pole_faible: "Ça me tue", pole_fort: "J'adore" },
        { id: "SV_DIM_22", description: "Un retour en cuisine ne me fait pas perdre mon sourire.", category: "STRESS", type: "DIMENSION", pole_faible: "Ça m'énerve", pole_fort: "Je reste pro" },
        { id: "SV_DIM_23", description: "Je garde mon calme quand 3 tables me demandent en même temps.", category: "STRESS", type: "DIMENSION", pole_faible: "Je panique", pole_fort: "Je priorise calmement" },
        { id: "SV_DIM_24", description: "Après un mauvais service, je rebondis vite au suivant.", category: "STRESS", type: "DIMENSION", pole_faible: "Ça me mine", pole_fort: "Page tournée" },

        // DARK_EMPATHY
        { id: "SV_DIM_25", description: "Je repère vite quel type de client va laisser un bon pourboire.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "Instinctivement" },
        { id: "SV_DIM_26", description: "Je sais ajuster mon attitude pour maximiser mes avantages.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "Naturellement" },
        { id: "SV_DIM_27", description: "Je sais quand un client est vulnérable et j'adapte mon approche.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "Toujours" },
        { id: "SV_DIM_28", description: "Je peux amener un client à commander plus cher sans qu'il le réalise.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "Facilement" },
    ]
};

// ═══════════════════════════════════════════════════════════════
// CHEF DE RANG — 28 questions
// ═══════════════════════════════════════════════════════════════
export const CHEF_RANG_DIMENSIONS = {
    section: "Dimensions — Soft Skills & Valeurs",
    id: "PHASE_DIM",
    items: [
        // INFLUENCE
        { id: "CR_DIM_01", description: "Mon équipe de rang suit mes consignes sans les remettre en question.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Ils discutent", pole_fort: "Exécution immédiate" },
        { id: "CR_DIM_02", description: "Je convaincs le maître d'hôtel quand j'ai une idée.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Difficilement", pole_fort: "Facilement" },
        { id: "CR_DIM_03", description: "Les serveurs de mon rang me considèrent comme un leader.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Non", pole_fort: "Clairement" },
        { id: "CR_DIM_04", description: "Je sais orienter les choix du client avec subtilité.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Pas mon fort", pole_fort: "Mon point fort" },

        // CONSIDÉRATION
        { id: "CR_DIM_05", description: "Je prends le temps de former les commis, même sous pression.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Pas le temps", pole_fort: "Priorité absolue" },
        { id: "CR_DIM_06", description: "Je défends mon équipe face à un client injuste.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Le client a raison", pole_fort: "Je protège mon équipe" },
        { id: "CR_DIM_07", description: "L'ambiance de mon rang est aussi importante que le chiffre.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Le chiffre prime", pole_fort: "L'ambiance prime" },
        { id: "CR_DIM_08", description: "Je tiens compte de la fatigue de mes serveurs dans la répartition.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Non, c'est pareil pour tous", pole_fort: "Oui, j'adapte" },

        // CRÉATIVITÉ
        { id: "CR_DIM_09", description: "Je réorganise la salle pour optimiser le flux quand c'est plein.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "On garde le plan", pole_fort: "J'adapte en temps réel" },
        { id: "CR_DIM_10", description: "Je crée des scripts de vente différents selon le profil client.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Script standard", pole_fort: "Personnalisé" },
        { id: "CR_DIM_11", description: "J'innove dans la présentation ou le service des plats.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Non", pole_fort: "Régulièrement" },
        { id: "CR_DIM_12", description: "Je trouve des solutions créatives quand il y a une erreur de commande.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Procédure classique", pole_fort: "Solution sur mesure" },

        // RIGUEUR
        { id: "CR_DIM_13", description: "Mon briefing de service est structuré et complet.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Informel", pole_fort: "Cadré et précis" },
        { id: "CR_DIM_14", description: "Je contrôle la qualité de chaque table avant l'arrivée des clients.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Survol rapide", pole_fort: "Inspection détaillée" },
        { id: "CR_DIM_15", description: "Je connais les allergènes de chaque plat par cœur.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Je vérifie à chaque fois", pole_fort: "Sur le bout des doigts" },
        { id: "CR_DIM_16", description: "Mes additions sont vérifiées deux fois avant envoi.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Une fois suffit", pole_fort: "Toujours deux fois" },

        // ÉQUILIBRE
        { id: "CR_DIM_17", description: "Je sépare bien mon rôle de chef de rang et ma vie privée.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Ça déborde", pole_fort: "Cloison étanche" },
        { id: "CR_DIM_18", description: "Je gère la pression du responsable sans la transmettre à mon équipe.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Elle se transmet", pole_fort: "Je l'absorbe" },
        { id: "CR_DIM_19", description: "Je refuse les demandes déraisonnables de la hiérarchie.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "J'accepte tout", pole_fort: "Je sais poser des limites" },
        { id: "CR_DIM_20", description: "Je prends soin de moi autant que de mon équipe.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "L'équipe d'abord", pole_fort: "Équilibre maintenu" },

        // STRESS
        { id: "CR_DIM_21", description: "Plus le service est intense, plus je suis focalisé.", category: "STRESS", type: "DIMENSION", pole_faible: "Je me disperse", pole_fort: "Laser focus" },
        { id: "CR_DIM_22", description: "Une erreur d'un serveur ne me fait pas exploser.", category: "STRESS", type: "DIMENSION", pole_faible: "Ça m'énerve", pole_fort: "Je corrige calmement" },
        { id: "CR_DIM_23", description: "Je gère un VIP exigeant et 10 tables simultanément.", category: "STRESS", type: "DIMENSION", pole_faible: "Très difficile", pole_fort: "Ma routine" },
        { id: "CR_DIM_24", description: "Un imprévu en plein service ne change pas mon humeur.", category: "STRESS", type: "DIMENSION", pole_faible: "Ça me déstabilise", pole_fort: "Je reste serein" },

        // DARK_EMPATHY
        { id: "CR_DIM_25", description: "Je repère instantanément la dynamique de pouvoir à une table.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "Toujours" },
        { id: "CR_DIM_26", description: "Je sais sur quel client de la table concentrer mon attention pour maximiser l'addition.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "Instinctivement" },
        { id: "CR_DIM_27", description: "J'utilise les informations personnelles d'un client régulier pour influencer ses choix.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Jamais", pole_fort: "Systématiquement" },
        { id: "CR_DIM_28", description: "Je sais transformer une plainte en opportunité de vente.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "À chaque fois" },
    ]
};

// ═══════════════════════════════════════════════════════════════
// MANAGER ADJOINT — 28 questions
// ═══════════════════════════════════════════════════════════════
export const MANAGER_ADJOINT_DIMENSIONS = {
    section: "Dimensions — Soft Skills & Valeurs",
    id: "PHASE_DIM",
    items: [
        // INFLUENCE
        { id: "MA_DIM_01", description: "Mon équipe suit mes directives même quand le manager n'est pas là.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Ils relâchent", pole_fort: "Même discipline" },
        { id: "MA_DIM_02", description: "Je convaincs le manager principal quand je propose un changement.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Rarement", pole_fort: "Presque toujours" },
        { id: "MA_DIM_03", description: "Les serveurs viennent me voir avant d'aller voir le manager.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Non", pole_fort: "Systématiquement" },
        { id: "MA_DIM_04", description: "Je fais adhérer l'équipe aux nouvelles procédures sans friction.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Difficilement", pole_fort: "Naturellement" },

        // CONSIDÉRATION
        { id: "MA_DIM_05", description: "Je détecte quand un membre de l'équipe va craquer.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Pas du tout", pole_fort: "Avant qu'il le dise" },
        { id: "MA_DIM_06", description: "Je défends mon équipe face au manager quand c'est justifié.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "J'obéis", pole_fort: "Je les protège" },
        { id: "MA_DIM_07", description: "Je prends le temps de féliciter individuellement après un bon service.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Jamais", pole_fort: "Systématiquement" },
        { id: "MA_DIM_08", description: "J'adapte le planning aux contraintes perso de l'équipe.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Les besoins du resto d'abord", pole_fort: "Équilibre humain" },

        // CRÉATIVITÉ
        { id: "MA_DIM_09", description: "Je propose des améliorations d'organisation que le manager adopte.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Jamais", pole_fort: "Régulièrement" },
        { id: "MA_DIM_10", description: "Je trouve des solutions originales pour gérer les sous-effectifs.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Je subis", pole_fort: "J'innove" },
        { id: "MA_DIM_11", description: "J'utilise des méthodes pédagogiques différentes selon les profils.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Même méthode pour tous", pole_fort: "Personnalisé" },
        { id: "MA_DIM_12", description: "J'imagine des systèmes de motivation pour l'équipe.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Non", pole_fort: "Tout le temps" },

        // RIGUEUR
        { id: "MA_DIM_13", description: "Mon brief de service est structuré et complet.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Informel", pole_fort: "Cadré au minute" },
        { id: "MA_DIM_14", description: "Je vérifie que chaque process est suivi avant de partir.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Confiance aveugle", pole_fort: "Contrôle systématique" },
        { id: "MA_DIM_15", description: "Je tiens un suivi des performances de chaque membre.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Dans ma tête", pole_fort: "Documenté" },
        { id: "MA_DIM_16", description: "Mes comptes de caisse sont justes du premier coup.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Il y a souvent des écarts", pole_fort: "Toujours juste" },

        // ÉQUILIBRE
        { id: "MA_DIM_17", description: "Je ne ramène pas les problèmes du resto à la maison.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Ça me suit", pole_fort: "Coupure nette" },
        { id: "MA_DIM_18", description: "Je gère la pression du manager sans la transférer à l'équipe.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Elle se transmet", pole_fort: "Je filtre" },
        { id: "MA_DIM_19", description: "Je sais quand dire stop pour préserver ma santé.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Jamais", pole_fort: "Quand il faut" },
        { id: "MA_DIM_20", description: "Mon investissement au travail ne nuit pas à ma vie perso.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Ma vie perso en souffre", pole_fort: "Équilibre maintenu" },

        // STRESS
        { id: "MA_DIM_21", description: "Un service chaotique me rend plus efficace.", category: "STRESS", type: "DIMENSION", pole_faible: "Je suis débordé", pole_fort: "Je suis à mon meilleur" },
        { id: "MA_DIM_22", description: "Un conflit entre deux serveurs ne me déstabilise pas.", category: "STRESS", type: "DIMENSION", pole_faible: "Ça me stresse", pole_fort: "Je médiate calmement" },
        { id: "MA_DIM_23", description: "Je gère une annulation de groupe + rush simultanément.", category: "STRESS", type: "DIMENSION", pole_faible: "Situation cauchemar", pole_fort: "Ma routine" },
        { id: "MA_DIM_24", description: "Après une soirée catastrophe, je reviens le lendemain motivé.", category: "STRESS", type: "DIMENSION", pole_faible: "J'ai envie de démissionner", pole_fort: "Plus déterminé" },

        // DARK_EMPATHY
        { id: "MA_DIM_25", description: "Je sais quels leviers utiliser pour motiver chaque membre de l'équipe.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "Je connais leurs failles" },
        { id: "MA_DIM_26", description: "Je détecte quand un serveur ment sur une absence.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "Toujours" },
        { id: "MA_DIM_27", description: "Je sais comment cadrer un élément perturbateur sans confrontation directe.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "Subtilement" },
        { id: "MA_DIM_28", description: "Je perçois les jeux de pouvoir dans l'équipe et je les utilise.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "À mon avantage" },
    ]
};

// ═══════════════════════════════════════════════════════════════
// MANAGER PRINCIPAL — 28 questions
// ═══════════════════════════════════════════════════════════════
export const MANAGER_PRINCIPAL_DIMENSIONS = {
    section: "Dimensions — Soft Skills & Valeurs",
    id: "PHASE_DIM",
    items: [
        // INFLUENCE
        { id: "MP_DIM_01", description: "Ma vision du restaurant est partagée par toute l'équipe.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Pas vraiment", pole_fort: "Unanimement" },
        { id: "MP_DIM_02", description: "Je fais changer d'avis le propriétaire quand j'ai une conviction.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Jamais", pole_fort: "Régulièrement" },
        { id: "MP_DIM_03", description: "Les autres managers me consultent avant de prendre une décision.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Rarement", pole_fort: "Systématiquement" },
        { id: "MP_DIM_04", description: "Je fédère l'équipe autour d'un objectif commun.", category: "INFLUENCE", type: "DIMENSION", pole_faible: "Difficilement", pole_fort: "Naturellement" },

        // CONSIDÉRATION
        { id: "MP_DIM_05", description: "Je connais la situation personnelle de chaque membre de l'équipe.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Non", pole_fort: "En détail" },
        { id: "MP_DIM_06", description: "Je sacrifie du CA pour préserver un employé en difficulté.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Le CA prime", pole_fort: "L'humain d'abord" },
        { id: "MP_DIM_07", description: "Je prends des nouvelles d'un employé absent pour maladie.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Non", pole_fort: "Le jour même" },
        { id: "MP_DIM_08", description: "Je favorise l'évolution de carrière de mes employés, même si ça me prive.", category: "CONSIDÉRATION", type: "DIMENSION", pole_faible: "Je les garde", pole_fort: "Je les pousse à grandir" },

        // CRÉATIVITÉ
        { id: "MP_DIM_09", description: "Je renouvelle régulièrement le concept ou l'offre du restaurant.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "On garde ce qui marche", pole_fort: "Innovation constante" },
        { id: "MP_DIM_10", description: "Je trouve des solutions business quand le chiffre baisse.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Je coupe les coûts", pole_fort: "Je crée de la valeur" },
        { id: "MP_DIM_11", description: "J'imagine des systèmes opérationnels que personne n'a essayés.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Non", pole_fort: "Régulièrement" },
        { id: "MP_DIM_12", description: "Je m'inspire d'autres industries pour améliorer la restauration.", category: "CRÉATIVITÉ", type: "DIMENSION", pole_faible: "Non", pole_fort: "Constamment" },

        // RIGUEUR
        { id: "MP_DIM_13", description: "Je maîtrise tous les chiffres clés de mon établissement.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Vaguement", pole_fort: "Au centime" },
        { id: "MP_DIM_14", description: "Je contrôle les process même quand tout va bien.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Pas si tout roule", pole_fort: "Toujours" },
        { id: "MP_DIM_15", description: "Mes reportings sont livrés à l'heure et complets.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "En retard parfois", pole_fort: "Toujours ponctuel" },
        { id: "MP_DIM_16", description: "J'anticipe les problèmes administratifs avant qu'ils ne surviennent.", category: "RIGUEUR", type: "DIMENSION", pole_faible: "Je gère au coup par coup", pole_fort: "Anticipation totale" },

        // ÉQUILIBRE
        { id: "MP_DIM_17", description: "Je prends mes jours de congé sans culpabiliser.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Je culpabilise", pole_fort: "Sans problème" },
        { id: "MP_DIM_18", description: "Ma famille ne souffre pas de mes horaires.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Ils en souffrent", pole_fort: "Équilibre trouvé" },
        { id: "MP_DIM_19", description: "Je délègue suffisamment pour ne pas tout porter seul.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Je porte tout", pole_fort: "Délégation maîtrisée" },
        { id: "MP_DIM_20", description: "Je préserve ma santé malgré la charge de travail.", category: "ÉQUILIBRE", type: "DIMENSION", pole_faible: "Ma santé trinque", pole_fort: "Priorité santé" },

        // STRESS
        { id: "MP_DIM_21", description: "Un contrôle sanitaire surprise ne me stresse pas.", category: "STRESS", type: "DIMENSION", pole_faible: "Panique", pole_fort: "Confiant" },
        { id: "MP_DIM_22", description: "Je gère un démission en plein rush sans perdre ma lucidité.", category: "STRESS", type: "DIMENSION", pole_faible: "Ça me démolit", pole_fort: "Solution immédiate" },
        { id: "MP_DIM_23", description: "Plusieurs crises simultanées ne m'empêchent pas de prioriser.", category: "STRESS", type: "DIMENSION", pole_faible: "Je me noie", pole_fort: "Je trie et j'agis" },
        { id: "MP_DIM_24", description: "Un mois de chiffre catastrophique ne me fait pas douter de moi.", category: "STRESS", type: "DIMENSION", pole_faible: "Je doute de tout", pole_fort: "Je reste confiant" },

        // DARK_EMPATHY
        { id: "MP_DIM_25", description: "Je sais quelles ficelles tirer pour obtenir le meilleur d'un fournisseur.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "Expert en négociation" },
        { id: "MP_DIM_26", description: "Je détecte un employé qui veut partir avant qu'il le dise.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "Toujours" },
        { id: "MP_DIM_27", description: "Je sais comment recadrer sans que la personne se sente attaquée.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Ça claque souvent", pole_fort: "Chirurgical" },
        { id: "MP_DIM_28", description: "Je lis les dynamiques de groupe et je les oriente à mon avantage.", category: "DARK_EMPATHY", type: "DIMENSION", pole_faible: "Non", pole_fort: "Instinctivement" },
    ]
};
