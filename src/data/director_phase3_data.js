export const DIRECTOR_PHASE3_DATA = [
    {
        id: "DIR_81",
        category: "HARDCORE",
        title: "Drogue au Travail",
        description: "On retrouve un sachet de cocaïne dans les toilettes du personnel. Impossible de savoir à qui c'est.",
        type: "HARDCORE",
        options: [
            { label: "J'appelle la police immédiatement pour une fouille avec chiens.", value: "A", profile: "TYRAN" },
            { label: "Je convoque l'équipe pour un dernier avertissement collectif.", value: "B", profile: "RADAR" },
            { label: "Je ne fais rien, tant que le service tourne.", value: "C", profile: "NAIF" },
            { label: "Je fais une note de service.", value: "D", profile: "BUREAUCRATE" },
            { label: "Autre (Décrivez votre action)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_82",
        category: "HARDCORE",
        title: "Violence Client",
        description: "Un client très alcoolisé menace physiquement votre hôtesse d'accueil. Il fait 2 mètres.",
        type: "HARDCORE",
        options: [
            { label: "Je saute le comptoir et je le frappe.", value: "A", profile: "TYRAN" }, // Suicidaire -> Tyran/Impulsif
            { label: "J'appelle la police et je mets mon staff en sécurité en attendant.", value: "B", profile: "RADAR" },
            { label: "Je lui offre un verre pour le calmer.", value: "C", profile: "NAIF" },
            { label: "Je lui rappelle les articles de loi.", value: "D", profile: "BUREAUCRATE" },
            { label: "Autre (Décrivez votre action)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_83",
        category: "HARDCORE",
        title: "Fraude Sociale",
        description: "Votre comptable vous propose une astuce pour ne pas payer les heures supplémentaires (illégal mais indétectable).",
        type: "HARDCORE",
        options: [
            { label: "On fonce.", value: "A", profile: "TYRAN" }, // Escroc
            { label: "Je refuse catégoriquement par principe moral.", value: "B", profile: "NAIF" },
            { label: "J'analyse le risque réel : si c'est pénal, non. Si c'est juste financier, je réfléchis.", value: "C", profile: "RADAR" },
            { label: "Je change de comptable.", value: "D", profile: "BUREAUCRATE" },
            { label: "Autre (Décrivez votre position)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_84",
        category: "HARDCORE",
        title: "Alcool Staff",
        description: "Un serveur arrive avec 45 min de retard le samedi soir. Il sent l'alcool mais il tient debout.",
        type: "HARDCORE",
        options: [
            { label: "Il prend son rang, j'ai besoin de bras, on verra après.", value: "A", profile: "RADAR" }, // Pragmatique
            { label: "Je le renvoie chez lui immédiatement.", value: "B", profile: "BUREAUCRATE" }, // Sécurité/Règle
            { label: "Je lui fais passer un alcootest devant tout le monde.", value: "C", profile: "TYRAN" },
            { label: "Je le mets à la plonge pour le cacher.", value: "D", profile: "NAIF" },
            { label: "Autre (Décrivez votre action)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_85",
        category: "HARDCORE",
        title: "Choix de Licenciement",
        description: "Si vous deviez virer quelqu'un ce soir : le Chef (compétent mais toxique) ou le Second (loyal mais lent) ?",
        type: "HARDCORE",
        options: [
            { label: "Le Chef. L'ambiance avant tout.", value: "A", profile: "NAIF" },
            { label: "Le Second. La performance avant tout.", value: "B", profile: "TYRAN" },
            { label: "Les deux. Je repars à zéro.", value: "C", profile: "BUREAUCRATE" }, // Rigidité
            { label: "Aucun. Je ne vire personne sans remplaçant prêt.", value: "D", profile: "RADAR" },
            { label: "Autre (Expliquez votre choix)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_86",
        category: "HARDCORE",
        title: "Argent Trouvé",
        description: "Vous trouvez 50€ par terre en salle en fin de service. Personne ne les réclame.",
        type: "HARDCORE",
        options: [
            { label: "Je les garde pour moi.", value: "A", profile: "TYRAN" }, // Voleur
            { label: "Je les mets dans les pourboires de l'équipe.", value: "B", profile: "RADAR" }, // Leader/Politique
            { label: "Je les enregistre en 'Divers Caisse'.", value: "C", profile: "BUREAUCRATE" },
            { label: "Je les donne à une association.", value: "D", profile: "NAIF" },
            { label: "Autre (Que faites-vous ?)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_87",
        category: "HARDCORE",
        title: "Exploitation",
        description: "Acceptez-vous de travailler 70h par semaine sans être payé plus ?",
        type: "HARDCORE",
        options: [
            { label: "Oui, je suis un guerrier, je ne compte pas.", value: "A", profile: "TYRAN" }, // Menteur/Esclave
            { label: "Non, je respecte mon contrat de 39h.", value: "B", profile: "BUREAUCRATE" },
            { label: "Oui, si j'ai un intéressement aux résultats (Bonus).", value: "C", profile: "RADAR" },
            { label: "Non, c'est illégal.", value: "D", profile: "NAIF" }, // Naïveté juridique vs Bureaucrate stricte, interchangeable mais OK
            { label: "Autre (Nuancez votre réponse)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_88",
        category: "HARDCORE",
        title: "Inspection Travail",
        description: "Un inspecteur du travail vous demande les plannings réels (pas les officiels). Vous avez des 'trous' illégaux.",
        type: "HARDCORE",
        options: [
            { label: "Je lui donne les faux plannings officiels.", value: "A", profile: "TYRAN" }, // Risque Prison
            { label: "Je refuse de donner les documents.", value: "B", profile: "BUREAUCRATE" }, // Délit d'entrave / Règle stupide
            { label: "Je lui donne ce que j'ai affiché, sans avouer de faute. S'il trouve, il trouve.", value: "C", profile: "RADAR" },
            { label: "J'avoue tout en pleurant pour demander la clémence.", value: "D", profile: "NAIF" },
            { label: "Autre (Quelle est votre stratégie ?)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_89",
        category: "HARDCORE",
        title: "Amitié & Business",
        description: "Votre meilleur ami (qui est aussi votre fournisseur) augmente ses prix de 20% sans prévenir.",
        type: "HARDCORE",
        options: [
            { label: "J'accepte, c'est mon ami.", value: "A", profile: "NAIF" }, // Pigeon
            { label: "Je change de fournisseur immédiatement. Le business n'a pas d'amis.", value: "B", profile: "RADAR" },
            { label: "Je négocie 10% pour couper la poire en deux.", value: "C", profile: "BUREAUCRATE" }, // Mou/Compromis
            { label: "Je lui fais la gueule.", value: "D", profile: "TYRAN" }, // Enfant/Emotionnel
            { label: "Autre (Que lui dites-vous ?)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_90",
        category: "HARDCORE",
        title: "Client Ivre & Riche",
        description: "Un client très riche commande une bouteille à 2000€. Il est visiblement déjà très ivre.",
        type: "HARDCORE",
        options: [
            { label: "Je sers. C'est du chiffre facile.", value: "A", profile: "TYRAN" }, // Vautour
            { label: "Je refuse. Ma responsabilité pénale est engagée s'il a un accident.", value: "B", profile: "BUREAUCRATE" },
            { label: "Je sers, mais je le force à manger.", value: "C", profile: "RADAR" }, // Compromis
            { label: "J'appelle sa femme pour demander l'autorisation.", value: "D", profile: "NAIF" }, // Intrusif/Naïf
            { label: "Autre (Que faites-vous ?)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_91",
        category: "HARDCORE",
        title: "Dettes du Chef",
        description: "Votre Chef vous demande une avance sur salaire pour payer ses dettes de jeu urgentes.",
        type: "HARDCORE",
        options: [
            { label: "Oui, je l'aide, c'est humain.", value: "A", profile: "NAIF" }, // Dangereux
            { label: "Non. Je ne finance pas une addiction.", value: "B", profile: "RADAR" },
            { label: "Oui, mais au noir (caisse).", value: "C", profile: "TYRAN" }, // Illégal
            { label: "Je lui fais la morale.", value: "D", profile: "BUREAUCRATE" }, // Inutile
            { label: "Autre (Que lui répondez-vous ?)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_92",
        category: "HARDCORE",
        title: "Accident Enfant",
        description: "Un serveur renverse de la soupe brûlante sur un enfant.",
        type: "HARDCORE",
        options: [
            { label: "Je gueule sur le serveur.", value: "A", profile: "TYRAN" },
            { label: "J'appelle l'assurance tout de suite.", value: "B", profile: "BUREAUCRATE" },
            { label: "Je gère l'urgence médicale et je sécurise la famille. Le reste attendra.", value: "C", profile: "RADAR" },
            { label: "J'offre l'addition complète.", value: "D", profile: "NAIF" },
            { label: "Autre (Quelle est votre procédure ?)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_93",
        category: "HARDCORE",
        title: "Vol Ancien Employé",
        description: "Vous découvrez que votre prédécesseur volait dans la caisse. Il est parti il y a un mois.",
        type: "HARDCORE",
        options: [
            { label: "Je porte plainte contre lui.", value: "A", profile: "BUREAUCRATE" }, // Guerre coûteuse
            { label: "Je sécurise mon système pour l'avenir et j'avance. Le passé est mort.", value: "B", profile: "RADAR" },
            { label: "Je le traque pour lui casser la figure.", value: "C", profile: "TYRAN" }, // Vengeance
            { label: "Je le dis à tous les employés.", value: "D", profile: "NAIF" }, // Ragots
            { label: "Autre (Quelle est votre réaction ?)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_94",
        category: "HARDCORE",
        title: "Faillite & Triche",
        description: "Tricheriez-vous pour sauver l'entreprise de la faillite ?",
        type: "HARDCORE",
        options: [
            { label: "Jamais.", value: "A", profile: "NAIF" }, // Naïf/Honnête extrême
            { label: "Oui, toujours.", value: "B", profile: "TYRAN" }, // Escroc
            { label: "Ça dépend du risque pénal.", value: "C", profile: "RADAR" },
            { label: "Seulement si personne ne le sait.", value: "D", profile: "BUREAUCRATE" }, // Lâche/Caché
            { label: "Autre (Développez votre éthique)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_95",
        category: "HARDCORE",
        title: "Client Roi ?",
        description: "Le client a-t-il toujours raison ?",
        type: "HARDCORE",
        options: [
            { label: "Oui, c'est la règle d'or.", value: "A", profile: "NAIF" }, // Esclave
            { label: "Non, jamais.", value: "B", profile: "TYRAN" }, // Arrogant
            { label: "Non, mais il doit toujours avoir l'impression d'avoir raison.", value: "C", profile: "RADAR" }, // Diplomate
            { label: "C'est un partenaire, pas un juge.", value: "D", profile: "BUREAUCRATE" }, // Théorique
            { label: "Autre (Quelle est votre philosophie ?)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_96",
        category: "HARDCORE",
        title: "Chantage Influenceuse",
        description: "Une influenceuse menace de vous détruire sur Instagram si vous ne lui offrez pas l'addition.",
        type: "HARDCORE",
        options: [
            { label: "J'offre, j'ai peur.", value: "A", profile: "NAIF" }, // Faible
            { label: "Je la vire du restaurant.", value: "B", profile: "TYRAN" },
            { label: "Je lui fais payer. Je ne négocie pas avec les terroristes.", value: "C", profile: "RADAR" },
            { label: "Je lui fais 50%.", value: "D", profile: "BUREAUCRATE" }, // Mou/Compromis
            { label: "Autre (Que lui dites-vous ?)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_97",
        category: "HARDCORE",
        title: "Panne Frigo",
        description: "Le frigo tombe en panne. La viande est à 12°C. Perte : 2000€.",
        type: "HARDCORE",
        options: [
            { label: "On cuit tout bien cuit.", value: "A", profile: "TYRAN" }, // Criminel
            { label: "Je jette tout.", value: "B", profile: "BUREAUCRATE" },
            { label: "Je trie, je jette le sensible, je garde le reste, je fais marcher l'assurance.", value: "C", profile: "RADAR" },
            { label: "Je sers en priant.", value: "D", profile: "NAIF" }, // Irresponsable
            { label: "Autre (Votre gestion de crise ?)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_98",
        category: "HARDCORE",
        title: "Couple Staff",
        description: "Votre Maître d'Hôtel et votre Chef sont en couple. Ils s'engueulent pendant le service.",
        type: "HARDCORE",
        options: [
            { label: "Je m'en fous.", value: "A", profile: "NAIF" }, // Aveugle
            { label: "Je vire l'un des deux.", value: "B", profile: "TYRAN" },
            { label: "Vos histoires restent dehors. Au moindre problème, je vire les deux.", value: "C", profile: "RADAR" },
            { label: "Je leur conseille une thérapie.", value: "D", profile: "BUREAUCRATE" }, // Déconnecté
            { label: "Autre (Comment gérez-vous ?)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_99",
        category: "HARDCORE",
        title: "Pot-de-vin",
        description: "Un fournisseur vous propose une enveloppe de cash (pots-de-vin) pour Noël.",
        type: "HARDCORE",
        options: [
            { label: "Je prends.", value: "A", profile: "TYRAN" }, // Voleur
            { label: "Je refuse choqué.", value: "B", profile: "NAIF" },
            { label: "Transforme ça en avoir sur la prochaine facture.", value: "C", profile: "RADAR" },
            { label: "Je demande à mon patron.", value: "D", profile: "BUREAUCRATE" },
            { label: "Autre (Votre réponse ?)", value: "E", profile: "OPEN", openText: true }
        ]
    },
    {
        id: "DIR_100",
        category: "HARDCORE",
        title: "L'Incendie",
        description: "LA FINALE : Tout brûler pour toucher l'assurance ? (Vous êtes en faillite totale).",
        type: "HARDCORE",
        options: [
            { label: "Je craque l'allumette.", value: "A", profile: "TYRAN" }, // Criminel
            { label: "Je liquide et j'assume l'échec.", value: "B", profile: "RADAR" },
            { label: "Je relis mon contrat d'assurance.", value: "C", profile: "BUREAUCRATE" },
            { label: "Je pleure.", value: "D", profile: "NAIF" },
            { label: "Autre (Quelle est votre ultime décision ?)", value: "E", profile: "OPEN", openText: true }
        ]
    }
];
