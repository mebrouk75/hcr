
export const CHEF_RANG_DATA = [
    {
        id: "CDR_1",
        category: "ACCUEIL",
        title: "Le VIP Inattendu",
        description: "Un client VIP arrive sans réservation. Le restaurant est complet.",
        type: "SJT",
        options: [
            { label: "Je déplace une table de clients 'normaux' qui ont fini pour lui faire de la place.", value: "D", profile: "PIRATE" },
            { label: "Je lui explique poliment qu'on est complet. Pas d'exception.", value: "B", profile: "MÉTRONOME" },
            { label: "Je panique et je vais chercher le Manager.", value: "A", profile: "CONFIDENT" },
            { label: "Je lui propose une coupe au bar en attendant qu'une table se libère (je gère le show).", value: "C", profile: "SHOWMAN" }
        ]
    },
    {
        id: "CDR_2",
        category: "AUTORITÉ",
        title: "L'Erreur du Commis",
        description: "Ton commis fait tomber des couverts devant une table importante.",
        type: "SJT",
        options: [
            { label: "Je le reprends sèchement devant le client pour montrer que je maîtrise.", value: "D", profile: "PIRATE" },
            { label: "Je ramasse avec lui en souriant et je m'excuse pour deux.", value: "A", profile: "CONFIDENT" },
            { label: "Je l'ignore et j'envoie un autre commis nettoyer.", value: "C", profile: "SHOWMAN" },
            { label: "Je lui fais un signe discret et on débriefe en office (procédure).", value: "B", profile: "MÉTRONOME" }
        ]
    },
    {
        id: "CDR_3",
        category: "VENTE",
        title: "Upselling Vin",
        description: "Un couple hésite entre le vin maison (30€) et un Cru Classé (120€).",
        type: "INVENTIF",
        options: [
            { label: "Je pousse le 120€ en disant que le 30€ est 'moyen'.", value: "D", profile: "PIRATE" },
            { label: "Je leur raconte l'histoire magnifique du domaine à 120€.", value: "C", profile: "SHOWMAN" },
            { label: "Je leur demande leur budget pour ne pas les gêner.", value: "A", profile: "CONFIDENT" },
            { label: "Je décris techniquement les deux pour qu'ils choisissent.", value: "B", profile: "MÉTRONOME" }
        ]
    },
    {
        id: "CDR_4",
        category: "CUISINE",
        title: "Plat Raté",
        description: "Le Chef a raté la cuisson (trop cuit). Le client se plaint.",
        type: "DILEMME",
        options: [
            { label: "Je dis que c'est la faute du Chef, il déconne ce soir.", value: "A", profile: "CONFIDENT" },
            { label: "Je reprends l'assiette sans un mot et je fais refaire.", value: "B", profile: "MÉTRONOME" },
            { label: "Je négocie un dessert offert pour faire passer la pilule.", value: "D", profile: "PIRATE" },
            { label: "Je fais un show au guéridon pour rattraper le coup avec une découpe.", value: "C", profile: "SHOWMAN" }
        ]
    },
    {
        id: "CDR_5",
        category: "RIGUEUR",
        title: "Mise en Place",
        description: "Il manque 2 cm d'alignement sur tes tables.",
        type: "STANDARD",
        options: [
            { label: "Je sors mon mètre. Tout doit être au millimètre.", value: "B", profile: "MÉTRONOME" },
            { label: "C'est bon, ça ne se voit pas dans l'ambiance.", value: "C", profile: "SHOWMAN" },
            { label: "Je corrigerai pendant le service si j'ai le temps.", value: "D", profile: "PIRATE" },
            { label: "Je demande à mon équipe si ça les choque.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_6",
        category: "STRESS",
        title: "Le Rush",
        description: "Tous tes clients arrivent en même temps (20h30).",
        type: "SJT",
        options: [
            { label: "Je cours partout, je transpire mais je sers.", value: "D", profile: "PIRATE" },
            { label: "Je priorise froidement : Prise de commande d'abord, boissons ensuite.", value: "B", profile: "MÉTRONOME" },
            { label: "Je fais des blagues à la volée pour les faire patienter.", value: "C", profile: "SHOWMAN" },
            { label: "Je stresse et je deviens sec avec mes collègues.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_7",
        category: "CONNAISSANCE",
        title: "Question Piège",
        description: "Un client te demande les allergènes exacts de la sauce secrète.",
        type: "PIEGE",
        options: [
            { label: "J'invente un truc rassurant.", value: "D", profile: "PIRATE" },
            { label: "Je vais chercher le classeur des allergènes en cuisine.", value: "B", profile: "MÉTRONOME" },
            { label: "Je demande au Chef (en le dérangeant).", value: "A", profile: "CONFIDENT" },
            { label: "Je lui dis que c'est un secret magique (détourner l'attention).", value: "C", profile: "SHOWMAN" }
        ]
    },
    {
        id: "CDR_8",
        category: "POURBOIRE",
        title: "Erreur Billet",
        description: "Un client laisse 50€ au lieu de 5€ (billets qui se ressemblent).",
        type: "ETHIQUE",
        options: [
            { label: "Je lui rends immédiatement en lui signalant.", value: "B", profile: "MÉTRONOME" },
            { label: "Je garde. Tant pis pour lui.", value: "D", profile: "PIRATE" },
            { label: "Je lui dis 'Wow, merci monsieur !' très fort pour valider.", value: "C", profile: "SHOWMAN" },
            { label: "J'hésite, je demande à mes collègues quoi faire.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_9",
        category: "POSTURE",
        title: "Fatigue",
        description: "Fin de service, tu es épuisé. Ta posture ?",
        type: "STANDARD",
        options: [
            { label: "Toujours droite. Comme au début.", value: "B", profile: "MÉTRONOME" },
            { label: "Je m'appuie discrètement sur la console.", value: "A", profile: "CONFIDENT" },
            { label: "Je m'assois avec un client habitué pour finir.", value: "D", profile: "PIRATE" },
            { label: "Je danse en débarrassant pour garder l'énergie.", value: "C", profile: "SHOWMAN" }
        ]
    },
    {
        id: "CDR_10",
        category: "CONFLIT",
        title: "Client Difficile",
        description: "Un client est odieux avec ta stagiaire.",
        type: "SJT",
        options: [
            { label: "Je le remets à sa place sèchement.", value: "D", profile: "PIRATE" },
            { label: "J'interviens avec un grand sourire ultra-poli (technique du miroir).", value: "B", profile: "MÉTRONOME" },
            { label: "Je retire la stagiaire et je m'excuse pour elle.", value: "A", profile: "CONFIDENT" },
            { label: "Je le charme pour le désamorcer.", value: "C", profile: "SHOWMAN" }
        ]
    },
    {
        id: "CDR_11",
        category: "ANTICIPATION",
        title: "L'Addition",
        description: "Comment sais-tu qu'une table veut l'addition ?",
        type: "PSYCHOLOGIQUE",
        options: [
            { label: "Je surveille le langage corporel (serviette, regard).", value: "B", profile: "MÉTRONOME" },
            { label: "Je leur demande 'Ça a été ?' toutes les 5 minutes.", value: "A", profile: "CONFIDENT" },
            { label: "Je la pose d'office avec le café pour gagner du temps.", value: "D", profile: "PIRATE" },
            { label: "J'attends qu'ils m'appellent.", value: "C", profile: "SHOWMAN" } // Showman is simpler here
        ]
    },
    {
        id: "CDR_12",
        category: "VENTE",
        title: "Café Gourmand",
        description: "Ils ne veulent pas de dessert.",
        type: "INVENTIF",
        options: [
            { label: "Je lâche l'affaire.", value: "B", profile: "MÉTRONOME" },
            { label: "Je leur dis 'Allez, juste un petit café gourmand pour partager !'.", value: "C", profile: "SHOWMAN" },
            { label: "J'insiste un peu lourdement.", value: "D", profile: "PIRATE" },
            { label: "Je leur demande si ça leur a plu quand même.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_13",
        category: "LEADERSHIP",
        title: "Commis Lent",
        description: "Ton commis traîne.",
        type: "SJT",
        options: [
            { label: "Je fais le boulot à sa place, ça va plus vite.", value: "D", profile: "PIRATE" },
            { label: "Je lui réexplique la méthode calmement après le service.", value: "B", profile: "MÉTRONOME" },
            { label: "Je le booste en criant 'Allez champion !'.", value: "C", profile: "SHOWMAN" },
            { label: "Je lui demande s'il est fatigué.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_14",
        category: "HYGIÈNE",
        title: "Ongles",
        description: "Tu as oublié de te couper les ongles, ils sont un peu longs.",
        type: "STANDARD",
        options: [
            { label: "Je file aux toilettes les couper avant de commencer.", value: "B", profile: "MÉTRONOME" },
            { label: "Je cache mes mains quand je sers.", value: "A", profile: "CONFIDENT" },
            { label: "Personne ne regarde ça.", value: "C", profile: "SHOWMAN" },
            { label: "Tant qu'ils sont propres, ça passe.", value: "D", profile: "PIRATE" }
        ]
    },
    {
        id: "CDR_15",
        category: "SANG-FROID",
        title: "Verre Renversé",
        description: "Tu renverses du vin rouge sur la chemise d'un client.",
        type: "SJT",
        options: [
            { label: "Je propose de payer le pressing immédiatement (procédure).", value: "B", profile: "MÉTRONOME" },
            { label: "Je fais une blague pour dédramatiser.", value: "C", profile: "SHOWMAN" },
            { label: "Je lui offre le repas pour qu'il se taise.", value: "D", profile: "PIRATE" },
            { label: "Je suis mort de honte, je ne sais plus où me mettre.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_16",
        category: "DÉTAIL",
        title: "Trace de Doigt",
        description: "Une trace sur le pied du verre.",
        type: "STANDARD",
        options: [
            { label: "Je change le verre immédiatement.", value: "B", profile: "MÉTRONOME" },
            { label: "Je frotte avec mon liteau discrètement.", value: "D", profile: "PIRATE" },
            { label: "Si le client n'a pas vu, c'est bon.", value: "C", profile: "SHOWMAN" },
            { label: "Ça m'angoisse.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_17",
        category: "RELATIONNEL",
        title: "Bavard",
        description: "Une table veut te raconter sa vie, mais tu es dans le jus.",
        type: "PSYCHOLOGIQUE",
        options: [
            { label: "Je reste 5 min, je rattraperai le retard en courant.", value: "C", profile: "SHOWMAN" },
            { label: "Je m'excuse poliment et je retourne travailler.", value: "B", profile: "MÉTRONOME" },
            { label: "Je les écoute, je n'ose pas partir.", value: "A", profile: "CONFIDENT" },
            { label: "Je coupe court : 'Désolé, j'ai du boulot'.", value: "D", profile: "PIRATE" }
        ]
    },
    {
        id: "CDR_18",
        category: "DIPLOMATIE",
        title: "Enfants Terribles",
        description: "Des enfants courent partout et gênent le service.",
        type: "SJT",
        options: [
            { label: "Je demande aux parents de les tenir.", value: "B", profile: "MÉTRONOME" },
            { label: "Je joue avec eux pour les canaliser.", value: "C", profile: "SHOWMAN" },
            { label: "Je les engueule discrètement quand les parents ne voient pas.", value: "D", profile: "PIRATE" },
            { label: "Je subis en silence.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_19",
        category: "HONNÊTETÉ",
        title: "Dégustation",
        description: "Le Chef sort un plat test. Tu goûtes ?",
        type: "PIEGE",
        options: [
            { label: "Oui, je dois connaître le produit pour le vendre.", value: "B", profile: "MÉTRONOME" },
            { label: "Je mange tout ce qui traîne.", value: "D", profile: "PIRATE" },
            { label: "Je demande la permission d'abord.", value: "A", profile: "CONFIDENT" },
            { label: "Je donne mon avis d'expert gastonome.", value: "C", profile: "SHOWMAN" }
        ]
    },
    {
        id: "CDR_20",
        category: "VISION",
        title: "Ton Rang",
        description: "C'est quoi un Rang pour toi ?",
        type: "VALEUERS",
        options: [
            { label: "Une zone de guerre à conquérir.", value: "D", profile: "PIRATE" },
            { label: "Une scène de théâtre.", value: "C", profile: "SHOWMAN" },
            { label: "Une horloge suisse.", value: "B", profile: "MÉTRONOME" },
            { label: "Une grande famille.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_21",
        category: "ADAPTATION",
        title: "Végétarien",
        description: "Un client demande si le bouillon de bœuf est végétarien.",
        type: "CONNAISSANCE",
        options: [
            { label: "Je dis oui pour pas m'embêter.", value: "D", profile: "PIRATE" },
            { label: "Je lui explique techniquement ce qu'est un fond de veau.", value: "B", profile: "MÉTRONOME" },
            { label: "Je me moque un peu de lui gentiment.", value: "C", profile: "SHOWMAN" },
            { label: "Je vais demander au Chef en panique.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_22",
        category: "MÉMOIRE",
        title: "Sans Note",
        description: "Prendre une commande de 8 personnes sans noter.",
        type: "STANDARD",
        options: [
            { label: "Impossible. Risque d'erreur trop élevé. Je note.", value: "B", profile: "MÉTRONOME" },
            { label: "Facile. Je le fais pour le show.", value: "C", profile: "SHOWMAN" },
            { label: "Je note sur ma main si besoin.", value: "D", profile: "PIRATE" },
            { label: "J'essaie, mais j'oublie souvent un truc.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_23",
        category: "STRESS",
        title: "Décantage",
        description: "Décanter un vin à 300€ devant 10 personnes qui regardent.",
        type: "SJT",
        options: [
            { label: "J'adore ça, je fais le spectacle.", value: "C", profile: "SHOWMAN" },
            { label: "Je me concentre sur la flamme et le geste technique.", value: "B", profile: "MÉTRONOME" },
            { label: "Je tremble un peu.", value: "A", profile: "CONFIDENT" },
            { label: "Je le fais en office pour aller plus vite.", value: "D", profile: "PIRATE" }
        ]
    },
    {
        id: "CDR_24",
        category: "ÉTHIQUE",
        title: "Fromage",
        description: "Le chariot de fromages est un peu sec.",
        type: "DILEMME",
        options: [
            { label: "Je le vends quand même, faut écouler les stocks.", value: "D", profile: "PIRATE" },
            { label: "Je le renvoie en cuisine, inacceptable.", value: "B", profile: "MÉTRONOME" },
            { label: "Je préviens le client que ce n'est pas top.", value: "A", profile: "CONFIDENT" },
            { label: "Je coupe les bords secs devant le client (service).", value: "C", profile: "SHOWMAN" }
        ]
    },
    {
        id: "CDR_25",
        category: "FIDÉLITÉ",
        title: "Critique Chef",
        description: "Le client dit que c'est dégueulasse.",
        type: "VALEURS",
        options: [
            { label: "Je suis d'accord avec lui pour le calmer.", value: "D", profile: "PIRATE" },
            { label: "Je défends le travail de l'équipe et je propose un échange.", value: "B", profile: "MÉTRONOME" },
            { label: "Je le prends personnellement.", value: "A", profile: "CONFIDENT" },
            { label: "Je lui fais goûter autre chose en 'cadeau' (pour frimer).", value: "C", profile: "SHOWMAN" }
        ]
    },
    {
        id: "CDR_26",
        category: "OBSERVATION",
        title: "Le Relou",
        description: "Tu repères le client pénible...",
        type: "PSYCHOLOGIQUE",
        options: [
            { label: "Dès son entrée dans le restaurant.", value: "C", profile: "SHOWMAN" },
            { label: "Au moment de la prise de commande.", value: "B", profile: "MÉTRONOME" },
            { label: "Quand il commence à râler.", value: "A", profile: "CONFIDENT" },
            { label: "Je m'en fous, je le gère.", value: "D", profile: "PIRATE" }
        ]
    },
    {
        id: "CDR_27",
        category: "PRÉCISION",
        title: "Annonce",
        description: "Annoncer les plats.",
        type: "STANDARD",
        options: [
            { label: "Description poétique et théâtrale.", value: "C", profile: "SHOWMAN" },
            { label: "Intitulé exact et cuisson, ni plus ni moins.", value: "B", profile: "MÉTRONOME" },
            { label: "Juste le nom du plat ('Votre Entrecôte').", value: "D", profile: "PIRATE" },
            { label: "Je bafouille parfois.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_28",
        category: "DÉLÉGATION",
        title: "L'Encaissement",
        description: "Une table veut payer séparément (division compliquée).",
        type: "SJT",
        options: [
            { label: "Je sors ma calculatrice et je le fais au centime près.", value: "B", profile: "MÉTRONOME" },
            { label: "Je dis 'on divise par 4 ?' pour aller vite.", value: "D", profile: "PIRATE" },
            { label: "Je laisse le commis se débrouiller.", value: "C", profile: "SHOWMAN" },
            { label: "Je stresse devant les clients qui s'impatientent.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_29",
        category: "FATIGUE",
        title: "Coup de Pompe",
        description: "Coup de barre à 22h.",
        type: "STANDARD",
        options: [
            { label: "Je bois un café serré et je repars.", value: "B", profile: "MÉTRONOME" },
            { label: "Je ralentis le rythme.", value: "A", profile: "CONFIDENT" },
            { label: "Je motive l'équipe en criant.", value: "C", profile: "SHOWMAN" },
            { label: "Je disparais fumer 5 min.", value: "D", profile: "PIRATE" }
        ]
    },
    {
        id: "CDR_30",
        category: "INVENTIVITÉ",
        title: "Hors Carte",
        description: "Client veut des pâtes au beurre (pas à la carte).",
        type: "SJT",
        options: [
            { label: "Non. On n'est pas un snack.", value: "B", profile: "MÉTRONOME" },
            { label: "Oui, je facture ça 25€.", value: "D", profile: "PIRATE" },
            { label: "Je demande au Chef de faire un truc spécial.", value: "A", profile: "CONFIDENT" },
            { label: "Je lui vends le risotto à la place (mon talent).", value: "C", profile: "SHOWMAN" }
        ]
    },
    {
        id: "CDR_31",
        category: "SÉCURITÉ",
        title: "Alarme Incendie",
        description: "L'alarme sonne (fausse alerte probable).",
        type: "STANDARD",
        options: [
            { label: "J'évacue tout le monde selon la procédure. On ne sait jamais.", value: "B", profile: "MÉTRONOME" },
            { label: "Je dis aux clients de rester assis.", value: "D", profile: "PIRATE" },
            { label: "Je fais une blague 'C'est le Chef qui flambe !'.", value: "C", profile: "SHOWMAN" },
            { label: "Je panique.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_32",
        category: "SINCÉRITÉ",
        title: "Cuisine vs Salle",
        description: "Qui travaille le plus dur ?",
        type: "VALEURS",
        options: [
            { label: "La Salle. On gère l'humain.", value: "C", profile: "SHOWMAN" },
            { label: "La Cuisine. C'est physique.", value: "A", profile: "CONFIDENT" },
            { label: "C'est complémentaire. 50/50.", value: "B", profile: "MÉTRONOME" },
            { label: "Moi.", value: "D", profile: "PIRATE" }
        ]
    },
    {
        id: "CDR_33",
        category: "RIGUEUR",
        title: "Le Pli",
        description: "Un pli sur la nappe.",
        type: "STANDARD",
        options: [
            { label: "Je repasse sur table avant le service.", value: "B", profile: "MÉTRONOME" },
            { label: "Je mets le set de table desssus.", value: "D", profile: "PIRATE" },
            { label: "Je dis que c'est du design.", value: "C", profile: "SHOWMAN" },
            { label: "Je ne l'avais pas vu.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_34",
        category: "VENTE",
        title: "Addition",
        description: "Vendre après l'addition ?",
        type: "INVENTIF",
        options: [
            { label: "Impossible.", value: "B", profile: "MÉTRONOME" },
            { label: "Je tente le digestif offert (pour le pourboire).", value: "D", profile: "PIRATE" },
            { label: "Je vends une bouteille à emporter.", value: "C", profile: "SHOWMAN" },
            { label: "Je les laisse partir.", value: "A", profile: "CONFIDENT" }
        ]
    },
    {
        id: "CDR_35",
        category: "EMPATHIE",
        title: "Allergie",
        description: "Le client a peur des allergènes.",
        type: "PSYCHOLOGIQUE",
        options: [
            { label: "Je lui apporte le tableau officiel signé.", value: "B", profile: "MÉTRONOME" },
            { label: "Je le rassure en lui prenant la main.", value: "A", profile: "CONFIDENT" },
            { label: "Je lui dis 'Faites-moi confiance, je gère'.", value: "C", profile: "SHOWMAN" },
            { label: "Je lui conseille la salade verte, zéro risque.", value: "D", profile: "PIRATE" }
        ]
    }
];
