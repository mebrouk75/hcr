
const SERVEUR_DATA = [
    {
        section: "Diagnostic Leadership",
        id: "PHASE1",
        items: [
            {
                id: "SVR_1",
                category: "EMPATHIE",
                title: "EMPATHIE : L'Attente",
                description: "Une table attend depuis 10 minutes. Ils s'impatientent.",
                type: "PSYCHOLOGIQUE",
                options: [
                    { label: "Je vais les voir tout de suite pour m'excuser et discuter.", value: "A", profile: "CONFIDENT" },
                    { label: "Je leur envoie une bouteille d'eau pour les calmer, mais je ne m'arrête pas.", value: "D", profile: "PIRATE" },
                    { label: "Je suis le plan de salle. Chacun son tour. Pas de favoritisme.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je fais une blague en arrivant pour détendre l'atmosphère !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_2",
                category: "VENTE",
                title: "VENTE : Le Vin",
                description: "Un client hésite sur le vin. Que proposes-tu ?",
                type: "SJT",
                options: [
                    { label: "Le plus cher. Il faut faire du chiffre.", value: "D", profile: "PIRATE" },
                    { label: "Celui qui s'accorde techniquement le mieux avec le plat.", value: "B", profile: "MÉTRONOME" },
                    { label: "Un vin que j'adore personnellement, je raconte son histoire.", value: "A", profile: "CONFIDENT" },
                    { label: "Une bouteille Magnum ! Pour marquer le coup !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_3",
                category: "HYGIÈNE",
                title: "HYGIÈNE : La Miette",
                description: "Une miette traîne sur une table 'propre'.",
                type: "PIEGE",
                options: [
                    { label: "Je l'enlève discrètement avec le doigt.", value: "D", profile: "PIRATE" },
                    { label: "Je rechange toute la nappe. Zéro défaut.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je fais une poussière imaginaire pour faire rire le client.", value: "C", profile: "SHOWMAN" },
                    { label: "Je ne la vois même pas, je regarde les gens dans les yeux.", value: "A", profile: "CONFIDENT" }
                ]
            },
            {
                id: "SVR_4",
                category: "STRESS",
                title: "STRESS : La Queue",
                description: "Le restaurant est complet, il y a la queue dehors.",
                type: "DILEMME",
                options: [
                    { label: "Je stresse et je cours partout pour libérer les tables.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je les installe au bar et je leur vends des cocktails en attendant.", value: "C", profile: "SHOWMAN" },
                    { label: "Je prends le temps de rassurer ceux qui attendent.", value: "A", profile: "CONFIDENT" },
                    { label: "Je dis aux clients qui ont fini de partir. Rentabilité.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "SVR_5",
                category: "BRIGADE",
                title: "BRIGADE : Erreur Cuisine",
                description: "La cuisine se trompe de cuisson. Le client râle.",
                type: "SJT",
                options: [
                    { label: "Je dis que c'est la faute du Chef, je me dédouane.", value: "D", profile: "PIRATE" },
                    { label: "Je présente des excuses officielles au nom de la maison.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je suis désolé pour lui, je lui offre le café.", value: "A", profile: "CONFIDENT" },
                    { label: "Je retourne le plat en cuisine en faisant un scandale théâtral !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_6",
                category: "OBSERVATION",
                title: "OBSERVATION : Le Dessert",
                description: "Sais-tu qui va prendre un dessert avant même la commande ?",
                type: "INVENTIF",
                options: [
                    { label: "Non, je demande toujours. Procédure.", value: "B", profile: "MÉTRONOME" },
                    { label: "Oui, je le sens. Intuition.", value: "A", profile: "CONFIDENT" },
                    { label: "Je force la vente en amenant le chariot directement !", value: "C", profile: "SHOWMAN" },
                    { label: "Je regarde s'ils ont fini leur vin. Si oui, pas de dessert.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "SVR_7",
                category: "ENDURANCE",
                title: "ENDURANCE : Fin de Service",
                description: "Tes pieds te font souffrir à 23h30.",
                type: "PIEGE",
                options: [
                    { label: "Je m'assois dès que je peux.", value: "A", profile: "CONFIDENT" },
                    { label: "Je tiens bon. Posture impeccable jusqu'à la fin.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je ralentis le rythme pour m'économiser.", value: "D", profile: "PIRATE" },
                    { label: "Je danse pour oublier la douleur !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_8",
                category: "ÉTHIQUE",
                title: "ÉTHIQUE : L'Oubli",
                description: "Tu as oublié de facturer une bouteille à 80€. Le client ne dit rien.",
                type: "DILEMME",
                options: [
                    { label: "Tant pis, c'est pour ma pomme si le patron voit.", value: "D", profile: "PIRATE" },
                    { label: "Je cours après le client pour lui dire. Honnêteté.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je laisse couler, c'est un cadeau du destin pour lui.", value: "A", profile: "CONFIDENT" },
                    { label: "Je lui dis discrètement pour qu'il me laisse un gros pourboire.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_9",
                category: "AUTONOMIE",
                title: "AUTONOMIE : L'Anniversaire",
                description: "Un client demande un café gratuit pour son anniv.",
                type: "SJT",
                options: [
                    { label: "Je demande au manager. Je ne décide rien.", value: "B", profile: "MÉTRONOME" },
                    { label: "J'offre, c'est important de faire plaisir.", value: "A", profile: "CONFIDENT" },
                    { label: "J'offre et je chante 'Joyeux Anniversaire' devant tout le resto !", value: "C", profile: "SHOWMAN" },
                    { label: "Je lui dis que la machine est cassée. Pas de gratuité.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "SVR_10",
                category: "SÉCURITÉ",
                title: "SÉCURITÉ : Le Geste Déplacé",
                description: "Un client te touche le bras de façon insistante.",
                type: "DILEMME",
                options: [
                    { label: "Je recule poliment mais je ne dis rien.", value: "A", profile: "CONFIDENT" },
                    { label: "Je lui dis fermement : 'On ne touche pas'.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je lui renverse son verre dessus 'par accident'.", value: "D", profile: "PIRATE" },
                    { label: "Je lui fais une scène pour l'afficher devant ses amis.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_11",
                category: "RÉACTIVITÉ",
                title: "RÉACTIVITÉ : L'Enfant",
                description: "Un enfant renverse son coca par terre.",
                type: "PSYCHOLOGIQUE",
                options: [
                    { label: "Je rassure l'enfant d'abord, il a peur.", value: "A", profile: "CONFIDENT" },
                    { label: "J'arrive avec la serpillière en 30 secondes. Efficacité.", value: "D", profile: "PIRATE" },
                    { label: "Je balise la zone pour la sécurité. Protocole.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je fais un tour de magie avec une serviette pour le faire rire.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_12",
                category: "HONNÊTETÉ",
                title: "HONNÊTETÉ : Le Tip",
                description: "Un client te donne 20€ 'pour toi seulement'.",
                type: "PIEGE",
                options: [
                    { label: "Je le garde. Il a précisé 'pour moi'.", value: "D", profile: "PIRATE" },
                    { label: "Je le mets au pot commun. Règle d'équipe.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je partage avec ceux qui m'ont aidé ce soir.", value: "A", profile: "CONFIDENT" },
                    { label: "Je le montre à tout le monde pour frimer !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_13",
                category: "MÉMOIRE",
                title: "MÉMOIRE : La Commande",
                description: "6 personnes, modifications complexes. Tu notes ?",
                type: "STANDARD",
                options: [
                    { label: "Toujours. Sécurité avant tout.", value: "B", profile: "MÉTRONOME" },
                    { label: "Jamais. J'ai une mémoire d'acier.", value: "C", profile: "SHOWMAN" },
                    { label: "J'essaie de retenir, mais j'oublie souvent un truc.", value: "A", profile: "CONFIDENT" },
                    { label: "Je note juste les trucs chiants.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "SVR_14",
                category: "STABILITÉ",
                title: "STABILITÉ : L'Allure",
                description: "En fin de service, ton dos s'affaisse ?",
                type: "STANDARD",
                options: [
                    { label: "Oui, je suis crevé, ça se voit.", value: "A", profile: "CONFIDENT" },
                    { label: "Non, je reste droit comme un i. Tenue.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je m'appuie contre les murs dès que je peux.", value: "D", profile: "PIRATE" },
                    { label: "Je bombe le torse, je suis sur scène !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_15",
                category: "PSYCHOLOGIE",
                title: "PSYCHOLOGIE : Le Couple",
                description: "Un couple se dispute à ton rang.",
                type: "INVENTIF",
                options: [
                    { label: "Je n'interviens pas. Discrétion absolue.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je leur demande si ça va, j'essaie d'aider.", value: "A", profile: "CONFIDENT" },
                    { label: "Je fais une blague pour détendre l'atmosphère.", value: "C", profile: "SHOWMAN" },
                    { label: "J'évite leur table, pas envie de problèmes.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "SVR_16",
                category: "VENTE",
                title: "VENTE : L'Eau",
                description: "Bouteille vide. Tu en proposes une autre ?",
                type: "STANDARD",
                options: [
                    { label: "Systématiquement. Réflexe commercial.", value: "D", profile: "PIRATE" },
                    { label: "Seulement s'ils me regardent.", value: "A", profile: "CONFIDENT" },
                    { label: "Je la change sans rien dire, service palace.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je leur sers théâtralement la dernière goutte.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_17",
                category: "COOPÉRATION",
                title: "COOPÉRATION : Bar Débordé",
                description: "Le bar est sous l'eau. Tes cafés n'arriveront pas.",
                type: "SJT",
                options: [
                    { label: "Je passe derrière pour les faire moi-même.", value: "D", profile: "PIRATE" },
                    { label: "J'attends à la passe. C'est pas mon poste.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je vais encourager le barman, il en a besoin.", value: "A", profile: "CONFIDENT" },
                    { label: "Je gueule 'Bar !!' pour qu'il se bouge.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_18",
                category: "DIPLOMATIE",
                title: "DIPLOMATIE : La Musique",
                description: "Client : 'La musique est trop forte !'",
                type: "SJT",
                options: [
                    { label: "Je baisse un peu pour lui faire plaisir.", value: "A", profile: "CONFIDENT" },
                    { label: "Je lui dis que c'est le concept, on ne change rien.", value: "C", profile: "SHOWMAN" },
                    { label: "Je vérifie le niveau décibel autorisé. Si OK, je laisse.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je fais semblant de baisser.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "SVR_19",
                category: "RIGUEUR",
                title: "RIGUEUR : Le Dressage",
                description: "Tu vérifies chaque verre à la lumière ?",
                type: "STANDARD",
                options: [
                    { label: "Oui. Une trace de doigt = retour plonge.", value: "B", profile: "MÉTRONOME" },
                    { label: "Non, ça passe, le client ne verra rien.", value: "D", profile: "PIRATE" },
                    { label: "Je frotte avec ma serviette vite fait.", value: "C", profile: "SHOWMAN" },
                    { label: "Si c'est sale, je m'excuse platement.", value: "A", profile: "CONFIDENT" }
                ]
            },
            {
                id: "SVR_20",
                category: "SINCÉRITÉ",
                title: "SINCÉRITÉ : L'Argent ou l'Amour",
                description: "Tu préfères un gros pourboire ou un client qui te dit merci ?",
                type: "VALEURS",
                options: [
                    { label: "Le pourboire. Je bosse pour l'argent.", value: "D", profile: "PIRATE" },
                    { label: "Le merci. La reconnaissance c'est tout.", value: "A", profile: "CONFIDENT" },
                    { label: "Le travail bien fait. C'est ma satisfaction.", value: "B", profile: "MÉTRONOME" },
                    { label: "La gloire. Je veux être le serveur préféré.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_21",
                category: "STRESS",
                title: "STRESS : La Chute",
                description: "Une assiette s'écrase par terre. Réaction ?",
                type: "PSYCHOLOGIQUE",
                options: [
                    { label: "Je sursaute et je crie.", value: "A", profile: "CONFIDENT" },
                    { label: "Je reste de marbre. Je sécurise la zone.", value: "B", profile: "MÉTRONOME" },
                    { label: "J'applaudis ! 'Opa !'", value: "C", profile: "SHOWMAN" },
                    { label: "Je regarde qui a fait tomber ça pour l'engueuler.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "SVR_22",
                category: "HYGIÈNE",
                title: "HYGIÈNE : Lavage Mains",
                description: "Tu te laves les mains après chaque débarrassage ?",
                type: "PIEGE",
                options: [
                    { label: "Oui, protocole HACCP.", value: "B", profile: "MÉTRONOME" },
                    { label: "Non, pas le temps. Je me lave une fois par heure.", value: "D", profile: "PIRATE" },
                    { label: "J'utilise du gel hydroalcoolique devant le client.", value: "C", profile: "SHOWMAN" },
                    { label: "J'y pense pas, je suis trop dans le jus.", value: "A", profile: "CONFIDENT" }
                ]
            },
            {
                id: "SVR_23",
                category: "STRATÉGIE",
                title: "STRATÉGIE : La Table VIP",
                description: "Tu as une table VIP et une table d'étudiants.",
                type: "SJT",
                options: [
                    { label: "Je traite tout le monde pareil. Égalité.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je privilégie les VIP, ils paient plus.", value: "D", profile: "PIRATE" },
                    { label: "Je suis super sympa avec les étudiants, ils sont cools.", value: "A", profile: "CONFIDENT" },
                    { label: "Je fais le show pour les VIP pour me faire repérer.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_24",
                category: "ADAPTATION",
                title: "ADAPTATION : Langage",
                description: "Tu changes ta façon de parler selon le client ?",
                type: "INVENTIF",
                options: [
                    { label: "Oui, je suis un caméléon.", value: "C", profile: "SHOWMAN" },
                    { label: "Non, je suis poli et standard avec tous.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je parle naturellement, comme je suis.", value: "A", profile: "CONFIDENT" },
                    { label: "Je suis plus sec avec les clients pénibles.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "SVR_25",
                category: "MAINTENANCE",
                title: "MAINTENANCE : Les Pieds de Table",
                description: "Une table est bancale.",
                type: "STANDARD",
                options: [
                    { label: "Je la règle immédiatement avec une cale.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je laisse comme ça, le client ne dira rien.", value: "D", profile: "PIRATE" },
                    { label: "Je m'excuse 10 fois auprès du client.", value: "A", profile: "CONFIDENT" },
                    { label: "Je fais une blague : 'C'est le charme de l'ancien !'", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_26",
                category: "ANTICIPATION",
                title: "ANTICIPATION : L'Accueil",
                description: "Le client arrive à sa table.",
                type: "STANDARD",
                options: [
                    { label: "Tout est déjà prêt : eau, pain, menu.", value: "B", profile: "MÉTRONOME" },
                    { label: "J'attends qu'il s'assoie pour voir ce qu'il veut.", value: "A", profile: "CONFIDENT" },
                    { label: "Je lui tire sa chaise comme un prince.", value: "C", profile: "SHOWMAN" },
                    { label: "Je lui jette le menu en passant.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "SVR_27",
                category: "FATIGUE",
                title: "FATIGUE : Le Regard",
                description: "En fin de service, tu évites de croiser le regard des clients ?",
                type: "PIEGE",
                options: [
                    { label: "Oui, j'ai peur qu'ils me demandent un truc.", value: "D", profile: "PIRATE" },
                    { label: "Non, je reste disponible jusqu'à la dernière seconde.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je suis trop fatigué pour voir quoi que ce soit.", value: "A", profile: "CONFIDENT" },
                    { label: "Je les regarde fixement pour qu'ils partent !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_28",
                category: "ÉQUIPE",
                title: "ÉQUIPE : L'Aide",
                description: "Ton collègue est dans le jus. Tu l'aides ?",
                type: "SJT",
                options: [
                    { label: "Toujours. La brigade, c'est la famille.", value: "A", profile: "CONFIDENT" },
                    { label: "Seulement si j'ai fini mon rang.", value: "B", profile: "MÉTRONOME" },
                    { label: "Non, chacun sa merde.", value: "D", profile: "PIRATE" },
                    { label: "Je l'aide en le faisant savoir bien fort.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_29",
                category: "VENTE",
                title: "VENTE : Le Plat Raté",
                description: "Tu vends un plat que tu n'aimes pas ?",
                type: "STANDARD",
                options: [
                    { label: "Oui, je le vends comme si c'était le meilleur.", value: "C", profile: "SHOWMAN" },
                    { label: "Non, je conseille autre chose. Honnêteté.", value: "A", profile: "CONFIDENT" },
                    { label: "Je le vends si le Chef a dit de le pousser.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je le vends pour vider les stocks.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "SVR_30",
                category: "SÉCURITÉ",
                title: "SÉCURITÉ : Le Filou",
                description: "Tu penses qu'un client va partir sans payer (grivèlerie).",
                type: "INVENTIF",
                options: [
                    { label: "Je ne le lâche pas du regard.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je préviens la sécurité discrètement.", value: "D", profile: "PIRATE" },
                    { label: "Je vais lui parler pour voir s'il est sympa.", value: "A", profile: "CONFIDENT" },
                    { label: "Je lui apporte l'addition bien fort devant tout le monde.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_31",
                category: "PRÉCISION",
                title: "PRÉCISION : L'Étiquette",
                description: "Tu présentes l'étiquette du vin face au client ?",
                type: "STANDARD",
                options: [
                    { label: "Toujours. C'est la base du service.", value: "B", profile: "MÉTRONOME" },
                    { label: "Ça dépend si j'ai le temps.", value: "D", profile: "PIRATE" },
                    { label: "Je le fais avec un geste théâtral.", value: "C", profile: "SHOWMAN" },
                    { label: "Je lui sers direct, on s'en fout de l'étiquette.", value: "A", profile: "CONFIDENT" }
                ]
            },
            {
                id: "SVR_32",
                category: "HONNÊTETÉ",
                title: "HONNÊTETÉ : La Frite",
                description: "Tu piques une frite dans une assiette qui part ?",
                type: "PIEGE",
                options: [
                    { label: "Jamais de la vie. Dégueulasse.", value: "B", profile: "MÉTRONOME" },
                    { label: "Une petite, personne ne voit.", value: "D", profile: "PIRATE" },
                    { label: "Si j'ai trop faim... je suis faible.", value: "A", profile: "CONFIDENT" },
                    { label: "Je le fais devant le Chef pour le provoquer !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "SVR_33",
                category: "OBSERVATION",
                title: "OBSERVATION : L'Addition",
                description: "Le client veut l'addition. Tu l'as vue avant qu'il demande ?",
                type: "PSYCHOLOGIQUE",
                options: [
                    { label: "Oui, j'ai vu son langage corporel.", value: "C", profile: "SHOWMAN" },
                    { label: "Non, j'attends qu'il m'appelle.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je lui amène le café, ça veut dire 'partez'.", value: "D", profile: "PIRATE" },
                    { label: "Je discute encore avec lui, je ne suis pas pressé.", value: "A", profile: "CONFIDENT" }
                ]
            },
            {
                id: "SVR_34",
                category: "STRESS",
                title: "STRESS : Le Sifflet",
                description: "Un client te siffle pour t'appeler.",
                type: "DILEMME",
                options: [
                    { label: "Je l'ignore totalement. Je ne suis pas un chien.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je vais le voir et je lui dis de ne pas refaire ça.", value: "C", profile: "SHOWMAN" },
                    { label: "J'y vais quand même, le client est roi.", value: "A", profile: "CONFIDENT" },
                    { label: "Je lui crache dans sa soupe (en pensée).", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "SVR_35",
                category: "RÉACTIVITÉ",
                title: "RÉACTIVITÉ : Le Bouchon",
                description: "Le vin est bouchonné.",
                type: "SJT",
                options: [
                    { label: "Je goûte pour vérifier. Je ne fais pas confiance.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je change la bouteille immédiatement avec le sourire.", value: "C", profile: "SHOWMAN" },
                    { label: "Je dis que c'est le goût du terroir.", value: "D", profile: "PIRATE" },
                    { label: "Je suis désolé, je ne sais pas quoi faire.", value: "A", profile: "CONFIDENT" }
                ]
            }
        ]
    }
];
