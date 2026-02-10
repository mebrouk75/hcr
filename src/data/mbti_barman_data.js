export const MBTI_BARMAN_DATA = {
    "meta": {
        "role_target": "BARMAN_MIXOLOGUE",
        "total_questions": 60,
        "structure": "4 Dimensions x 15 Questions",
        "estimated_time": "12-15 minutes",
        "scoring_type": "MBTI_DICHOTOMOUS",
        "total_profiles": 16
    },

    "dimensions": {
        "EI": {
            "name": "ÉNERGIE",
            "pole_E": "Showman - Extraverti",
            "pole_I": "Alchimiste - Introverti",
            "description": "Comment le barman tire son énergie et interagit avec les clients"
        },
        "SN": {
            "name": "CRÉATION",
            "pole_S": "Technique - Sensation",
            "pole_N": "Concept - Intuition",
            "description": "Comment le barman aborde la création de cocktails et traite l'information"
        },
        "TF": {
            "name": "DÉCISION",
            "pole_T": "Règle - Thinking",
            "pole_F": "Feeling - Humain",
            "description": "Comment le barman prend ses décisions au bar"
        },
        "JP": {
            "name": "ORGANISATION",
            "pole_J": "Mise en place - Judging",
            "pole_P": "Freestyle - Perceiving",
            "description": "Comment le barman organise son poste et gère l'imprévu"
        }
    },

    "scoring_rules": {
        "method": "MAJORITY_PER_DIMENSION",
        "description": "Pour chaque dimension (E/I, S/N, T/F, J/P), compter le nombre de réponses pour chaque pôle. La lettre majoritaire est retenue. Assembler les 4 lettres pour obtenir le code MBTI final (ex: ESTJ).",
        "example": {
            "dimension_EI": {
                "E_count": 9,
                "I_count": 6,
                "result": "E"
            },
            "dimension_SN": {
                "S_count": 11,
                "N_count": 4,
                "result": "S"
            },
            "dimension_TF": {
                "T_count": 8,
                "F_count": 7,
                "result": "T"
            },
            "dimension_JP": {
                "J_count": 10,
                "P_count": 5,
                "result": "J"
            },
            "final_profile": "ESTJ"
        }
    },

    "pretest_alert": {
        "titre": "Phase 1 : Profil Barman",
        "sous_titre": "Derrière chaque comptoir se cache une personnalité unique.",
        "message_principal": "Cette première étape définit ton style de bar naturel.",
        "conditions_requises": {
            "physique": [
                "12 à 15 minutes de disponibilité",
                "Pas de distraction (mode avion conseillé)",
                "Connexion stable"
            ],
            "mental": [
                "Répondre instinctivement",
                "Pas de 'bonne' ou 'mauvaise' réponse",
                "Être honnête sur sa réalité terrain"
            ],
            "environnement": [
                "Endroit calme si possible",
                "Son activé (recommandé)",
                "Luminosité adaptée"
            ]
        },
        "avertissement": "Attention : Ce test n'est pas un examen de connaissances, mais une analyse de personnalité professionnelle. Tes résultats influenceront les questions de la phase technique.",
        "apercu_test": {
            "phase_1": "Profil MBTI",
            "phase_2": "Test Technique",
            "pause": "Pause",
            "phase_3": "Mise en Situation"
        },
        "boutons": {
            "reporter": "Reporter",
            "commencer": "Commencer l'analyse"
        }
    },

    "questions": [
        // --- DIMENSION 1 : EXTRAVERSION (Showman) vs INTROVERSION (Alchimiste) ---

        {
            "id": "BAR_EI_01", "dimension": "EI", "text": "Le bar est plein à craquer, la musique est forte.", "options": [
                { "text": "Je nourris l'ambiance : je blague avec les clients, je mets le feu.", "val": "E" },
                { "text": "Je baisse la tête et j'enchaîne les tickets à fond, je produis.", "val": "I" }
            ]
        },
        {
            "id": "BAR_EI_02", "dimension": "EI", "text": "Un client seul s'assoit au comptoir.", "options": [
                { "text": "J'engage la conversation direct tout en essuyant mes verres.", "val": "E" },
                { "text": "Je dis bonsoir et j'attends qu'il me sollicite.", "val": "I" }
            ]
        },
        {
            "id": "BAR_EI_03", "dimension": "EI", "text": "Tu préfères travailler...", "options": [
                { "text": "Au bar d'envoi (Service salle uniquement).", "val": "I" },
                { "text": "Au bar client (Contact direct).", "val": "E" }
            ]
        },
        {
            "id": "BAR_EI_04", "dimension": "EI", "text": "Ton moment préféré ?", "options": [
                { "text": "Le rush de 22h quand ça crie.", "val": "E" },
                { "text": "La mise en place tranquille de 17h.", "val": "I" }
            ]
        },
        {
            "id": "BAR_EI_05", "dimension": "EI", "text": "Quand tu crées un cocktail, tu veux...", "options": [
                { "text": "Qu'il soit visuel pour qu'on le prenne en photo.", "val": "E" },
                { "text": "Que l'équilibre des saveurs soit parfait, même si c'est simple visuellement.", "val": "I" }
            ]
        },
        {
            "id": "BAR_EI_06", "dimension": "EI", "text": "Un groupe de filles te demande un shot surprise.", "options": [
                { "text": "Je fais un truc avec du feu ou de la fumée pour le show.", "val": "E" },
                { "text": "Je fais un truc très bon et technique.", "val": "I" }
            ]
        },
        {
            "id": "BAR_EI_07", "dimension": "EI", "text": "Tu as fini ton service. Tu fais quoi ?", "options": [
                { "text": "Je vais boire un coup dans le bar d'à côté pour voir les collègues.", "val": "E" },
                { "text": "Je rentre, j'ai besoin de silence.", "val": "I" }
            ]
        },
        {
            "id": "BAR_EI_08", "dimension": "EI", "text": "Un client filme ton service pour Instagram.", "options": [
                { "text": "Cool, je joue le jeu, je fais un truc spectaculaire.", "val": "E" },
                { "text": "Ça me gêne, je préfère rester discret.", "val": "I" }
            ]
        },
        {
            "id": "BAR_EI_09", "dimension": "EI", "text": "Tu préfères une équipe...", "options": [
                { "text": "Grande gueule et fêtarde.", "val": "E" },
                { "text": "Calme et précise.", "val": "I" }
            ]
        },
        {
            "id": "BAR_EI_10", "dimension": "EI", "text": "Un client te demande ton avis sur sa vie perso.", "options": [
                { "text": "Je donne mon avis, on discute.", "val": "E" },
                { "text": "Je hoche la tête et je change de sujet.", "val": "I" }
            ]
        },
        {
            "id": "BAR_EI_11", "dimension": "EI", "text": "Si tu dois former un petit nouveau...", "options": [
                { "text": "Je lui montre comment interagir avec les gens.", "val": "E" },
                { "text": "Je lui montre comment tenir son jigger.", "val": "I" }
            ]
        },
        {
            "id": "BAR_EI_12", "dimension": "EI", "text": "Pour toi, un bon barman c'est...", "options": [
                { "text": "Un hôte qui met l'ambiance.", "val": "E" },
                { "text": "Un technicien du goût.", "val": "I" }
            ]
        },
        {
            "id": "BAR_EI_13", "dimension": "EI", "text": "Il n'y a personne dans le bar.", "options": [
                { "text": "Je m'ennuie, je tourne en rond.", "val": "E" },
                { "text": "J'en profite pour lire des bouquins de mixo ou ranger.", "val": "I" }
            ]
        },
        {
            "id": "BAR_EI_14", "dimension": "EI", "text": "Les concours de cocktails...", "options": [
                { "text": "J'adore monter sur scène.", "val": "E" },
                { "text": "Je préfère créer la recette dans l'ombre.", "val": "I" }
            ]
        },
        {
            "id": "BAR_EI_15", "dimension": "EI", "text": "Un client te drague ouvertement.", "options": [
                { "text": "Je joue le jeu, c'est bon pour le pourboire.", "val": "E" },
                { "text": "Je reste pro et distant.", "val": "I" }
            ]
        },

        // --- DIMENSION 2 : SENSATION (Technique) vs INTUITION (Concept) ---

        {
            "id": "BAR_SN_01", "dimension": "SN", "text": "Pour faire un Old Fashioned...", "options": [
                { "text": "Je pèse mon sucre, je mesure mes bitters au millimètre.", "val": "S" },
                { "text": "Je le fais au feeling et à l'œil.", "val": "N" }
            ]
        },
        {
            "id": "BAR_SN_02", "dimension": "SN", "text": "Tu entres dans un nouveau bar, tu regardes quoi ?", "options": [
                { "text": "La propreté des stations et l'état des fruits.", "val": "S" },
                { "text": "La déco, l'ambiance, le concept.", "val": "N" }
            ]
        },
        {
            "id": "BAR_SN_03", "dimension": "SN", "text": "On te demande d'inventer un cocktail.", "options": [
                { "text": "Je pars d'un alcool (Base) et je construis autour.", "val": "S" },
                { "text": "Je pars d'une histoire ou d'une émotion.", "val": "N" }
            ]
        },
        {
            "id": "BAR_SN_04", "dimension": "SN", "text": "La verrerie (les verres)...", "options": [
                { "text": "Doit être solide et empilable.", "val": "S" },
                { "text": "Doit être originale, même si fragile.", "val": "N" }
            ]
        },
        {
            "id": "BAR_SN_05", "dimension": "SN", "text": "Un client te demande un truc 'Frais et pas trop sucré'.", "options": [
                { "text": "Je lui fais un Gin Tonic ou un Moscow Mule (Valeurs sûres).", "val": "S" },
                { "text": "Je lui improvise une création selon mon humeur.", "val": "N" }
            ]
        },
        {
            "id": "BAR_SN_06", "dimension": "SN", "text": "Ta garniture (déco) préférée ?", "options": [
                { "text": "Un zeste de citron parfait.", "val": "S" },
                { "text": "Une fleur comestible, de la poudre d'or, un truc fou.", "val": "N" }
            ]
        },
        {
            "id": "BAR_SN_07", "dimension": "SN", "text": "Apprendre une nouvelle carte...", "options": [
                { "text": "J'apprends les fiches techniques par cœur.", "val": "S" },
                { "text": "Je retiens les goûts et les grandes lignes.", "val": "N" }
            ]
        },
        {
            "id": "BAR_SN_08", "dimension": "SN", "text": "Le dosage au Jigger (doseur)...", "options": [
                { "text": "Obligatoire. Constance absolue.", "val": "S" },
                { "text": "Ennuyeux. Je préfère le Free Pour (verser à la bouteille).", "val": "N" }
            ]
        },
        {
            "id": "BAR_SN_09", "dimension": "SN", "text": "Le Chef te parle de 'Food Pairing' (Accord Mets/Cocktails).", "options": [
                { "text": "Je demande à goûter le plat pour voir les ingrédients.", "val": "S" },
                { "text": "J'imagine déjà les associations d'idées.", "val": "N" }
            ]
        },
        {
            "id": "BAR_SN_10", "dimension": "SN", "text": "Pour toi, le plus important c'est...", "options": [
                { "text": "Que le cocktail ait le même goût à chaque fois.", "val": "S" },
                { "text": "Que le cocktail surprenne le client.", "val": "N" }
            ]
        },
        {
            "id": "BAR_SN_11", "dimension": "SN", "text": "Tu dois commander les alcools.", "options": [
                { "text": "Je reprends exactement la même commande que la semaine dernière.", "val": "S" },
                { "text": "J'en profite pour commander une bouteille bizarre pour tester.", "val": "N" }
            ]
        },
        {
            "id": "BAR_SN_12", "dimension": "SN", "text": "Un client te demande la recette de ton sirop maison.", "options": [
                { "text": "Je lui donne les grammages exacts.", "val": "S" },
                { "text": "Je lui explique le principe général.", "val": "N" }
            ]
        },
        {
            "id": "BAR_SN_13", "dimension": "SN", "text": "L'organisation des bouteilles (Speed Rack)...", "options": [
                { "text": "Ne doit jamais changer. Vodka à gauche, Gin à droite.", "val": "S" },
                { "text": "On peut changer selon la carte du moment.", "val": "N" }
            ]
        },
        {
            "id": "BAR_SN_14", "dimension": "SN", "text": "Tu préfères travailler avec...", "options": [
                { "text": "Des recettes classiques (Negroni, Manhattan).", "val": "S" },
                { "text": "Des infusions maison et des rotovaps.", "val": "N" }
            ]
        },
        {
            "id": "BAR_SN_15", "dimension": "SN", "text": "La glace, pour toi c'est...", "options": [
                { "text": "Un outil de refroidissement. Du moment qu'elle est propre et froide, c'est bon.", "val": "S" },
                { "text": "Un élément de design. Clear ice, sphères sculptées, ça fait partie du spectacle.", "val": "N" }
            ]
        },

        // --- DIMENSION 3 : THINKING (Règle) vs FEELING (Humain) ---

        {
            "id": "BAR_TF_01", "dimension": "TF", "text": "Un habitué est manifestement trop ivre.", "options": [
                { "text": "Je refuse de le servir. C'est la loi et la sécurité.", "val": "T" },
                { "text": "Je lui sers un verre d'eau et je discute doucement pour le calmer.", "val": "F" }
            ]
        },
        {
            "id": "BAR_TF_02", "dimension": "TF", "text": "Un client râle sur le prix du cocktail (15€).", "options": [
                { "text": "Je lui explique le coût des produits et la TVA.", "val": "T" },
                { "text": "Je lui offre des olives et je souris pour faire passer la pilule.", "val": "F" }
            ]
        },
        {
            "id": "BAR_TF_03", "dimension": "TF", "text": "Gros rush. Le serveur t'envoie 10 bons d'un coup.", "options": [
                { "text": "Je les sors dans l'ordre d'arrivée. Premier arrivé, premier servi.", "val": "T" },
                { "text": "Je regarde s'il y a des VIP ou des amis et je priorise.", "val": "F" }
            ]
        },
        {
            "id": "BAR_TF_04", "dimension": "TF", "text": "Un collègue casse une bouteille chère.", "options": [
                { "text": "Je lui dis de faire gaffe, ça coûte une blinde.", "val": "T" },
                { "text": "Je lui demande s'il ne s'est pas coupé.", "val": "F" }
            ]
        },
        {
            "id": "BAR_TF_05", "dimension": "TF", "text": "Le patron change les horaires sans prévenir.", "options": [
                { "text": "Je vérifie si c'est légal sur mon contrat.", "val": "T" },
                { "text": "Je lui dis que ça m'arrange pas pour ma vie de famille.", "val": "F" }
            ]
        },
        {
            "id": "BAR_TF_06", "dimension": "TF", "text": "Tu te trompes dans un cocktail (oublié un ingrédient).", "options": [
                { "text": "Je le jette et je recommence. C'est pas la recette = poubelle.", "val": "T" },
                { "text": "Si le client est content du goût, je laisse partir, pas la peine de gâcher.", "val": "F" }
            ]
        },
        {
            "id": "BAR_TF_07", "dimension": "TF", "text": "Un client drague lourdement la serveuse.", "options": [
                { "text": "Je sors de mon bar et je le vire.", "val": "T" },
                { "text": "J'appelle la sécu ou le manager pour gérer sans violence.", "val": "F" }
            ]
        },
        {
            "id": "BAR_TF_08", "dimension": "TF", "text": "Le client veut un 'Mojito sans menthe'. C'est une hérésie.", "options": [
                { "text": "Je lui dis que c'est impossible, c'est pas la recette.", "val": "T" },
                { "text": "Je lui fais un truc au citron vert qui y ressemble pour lui faire plaisir.", "val": "F" }
            ]
        },
        {
            "id": "BAR_TF_09", "dimension": "TF", "text": "Tu préfères un manager...", "options": [
                { "text": "Juste et carré.", "val": "T" },
                { "text": "Sympa et compréhensif.", "val": "F" }
            ]
        },
        {
            "id": "BAR_TF_10", "dimension": "TF", "text": "Ton collègue est lent ce soir.", "options": [
                { "text": "Je prends ses tickets pour avancer le service.", "val": "T" },
                { "text": "Je lui demande ce qui ne va pas.", "val": "F" }
            ]
        },
        {
            "id": "BAR_TF_11", "dimension": "TF", "text": "La fermeture du bar.", "options": [
                { "text": "À 2h00 pile, je coupe la musique et j'allume les lumières.", "val": "T" },
                { "text": "Je laisse les clients finir tranquillement, tant pis si je finis tard.", "val": "F" }
            ]
        },
        {
            "id": "BAR_TF_12", "dimension": "TF", "text": "Un client VIP demande un cocktail hors-carte en plein rush.", "options": [
                { "text": "Non. Ça va bloquer la production.", "val": "T" },
                { "text": "Oui. Il faut le chouchouter.", "val": "F" }
            ]
        },
        {
            "id": "BAR_TF_13", "dimension": "TF", "text": "Gestion des pourboires (Tips).", "options": [
                { "text": "On divise aux heures travaillées. C'est mathématique.", "val": "T" },
                { "text": "On divise au mérite ou à l'ancienneté.", "val": "F" }
            ]
        },
        {
            "id": "BAR_TF_14", "dimension": "TF", "text": "Un client insiste pour te payer un shot pendant le service.", "options": [
                { "text": "Non merci, c'est la règle, je bois pas au boulot.", "val": "T" },
                { "text": "Allez, juste un petit, pour lui faire plaisir.", "val": "F" }
            ]
        },
        {
            "id": "BAR_TF_15", "dimension": "TF", "text": "L'inventaire de fin de mois.", "options": [
                { "text": "Nécessaire pour la gestion.", "val": "T" },
                { "text": "Une corvée inhumaine.", "val": "F" }
            ]
        },

        // --- DIMENSION 4 : JUDGING (Mise en place) vs PERCEIVING (Freestyle) ---

        {
            "id": "BAR_JP_01", "dimension": "JP", "text": "L'état de ton poste (station) à 23h.", "options": [
                { "text": "Impeccable. Je nettoie après chaque verre (Clean as you go).", "val": "J" },
                { "text": "Un champ de bataille, mais j'envoie vite. Je nettoierai à la fin.", "val": "P" }
            ]
        },
        {
            "id": "BAR_JP_02", "dimension": "JP", "text": "La découpe des fruits (Garnish).", "options": [
                { "text": "Je coupe tout avant le service, des bacs pleins.", "val": "J" },
                { "text": "Je coupe à la demande pour que ce soit frais.", "val": "P" }
            ]
        },
        {
            "id": "BAR_JP_03", "dimension": "JP", "text": "Un groupe arrive à l'improviste.", "options": [
                { "text": "Stress. J'avais pas prévu assez de menthe.", "val": "J" },
                { "text": "Cool. C'est du chiffre.", "val": "P" }
            ]
        },
        {
            "id": "BAR_JP_04", "dimension": "JP", "text": "Ta façon de faire les tickets.", "options": [
                { "text": "Je finis un ticket avant de commencer le suivant.", "val": "J" },
                { "text": "Je lance 4 tickets en même temps (Multitasking).", "val": "P" }
            ]
        },
        {
            "id": "BAR_JP_05", "dimension": "JP", "text": "La Check-list d'ouverture.", "options": [
                { "text": "Je la suis point par point.", "val": "J" },
                { "text": "Je fais au feeling, je sais ce qu'il faut faire.", "val": "P" }
            ]
        },
        {
            "id": "BAR_JP_06", "dimension": "JP", "text": "Il manque un sirop en plein service.", "options": [
                { "text": "Impossible, j'ai tout vérifié avant.", "val": "J" },
                { "text": "Pas grave, j'improvise avec autre chose.", "val": "P" }
            ]
        },
        {
            "id": "BAR_JP_07", "dimension": "JP", "text": "Les recettes de la carte.", "options": [
                { "text": "Je les suis à la lettre.", "val": "J" },
                { "text": "Je les modifie un peu selon mon goût du jour.", "val": "P" }
            ]
        },
        {
            "id": "BAR_JP_08", "dimension": "JP", "text": "Ton plan de carrière.", "options": [
                { "text": "Dans 2 ans je suis Chef Barman, dans 5 ans j'ai mon bar.", "val": "J" },
                { "text": "Je verrai bien, je vis au jour le jour.", "val": "P" }
            ]
        },
        {
            "id": "BAR_JP_09", "dimension": "JP", "text": "Le rangement des bouteilles vides.", "options": [
                { "text": "Je les jette au fur et à mesure.", "val": "J" },
                { "text": "Ça s'empile, je ferai un voyage à la fin.", "val": "P" }
            ]
        },
        {
            "id": "BAR_JP_10", "dimension": "JP", "text": "On te propose un extra pour ce soir à la dernière minute.", "options": [
                { "text": "Non, j'ai prévu autre chose.", "val": "J" },
                { "text": "Carrément, j'arrive !", "val": "P" }
            ]
        },
        {
            "id": "BAR_JP_11", "dimension": "JP", "text": "Tu préfères être de...", "options": [
                { "text": "Fermeture. J'aime tout ranger, tout contrôler avant de partir.", "val": "J" },
                { "text": "Ouverture. J'aime gérer l'imprévu du service qui commence.", "val": "P" }
            ]
        },
        {
            "id": "BAR_JP_12", "dimension": "JP", "text": "Si le bar est mal organisé par le collègue d'avant...", "options": [
                { "text": "Je refais tout avant de commencer.", "val": "J" },
                { "text": "Je m'adapte, tant pis.", "val": "P" }
            ]
        },
        {
            "id": "BAR_JP_13", "dimension": "JP", "text": "Les stocks.", "options": [
                { "text": "Je déteste tomber en rupture.", "val": "J" },
                { "text": "Ça arrive, on fait avec.", "val": "P" }
            ]
        },
        {
            "id": "BAR_JP_14", "dimension": "JP", "text": "La routine.", "options": [
                { "text": "Ça me rassure.", "val": "J" },
                { "text": "Ça me tue.", "val": "P" }
            ]
        },
        {
            "id": "BAR_JP_15", "dimension": "JP", "text": "Ta station de travail idéale.", "options": [
                { "text": "Ergonomique et fixe.", "val": "J" },
                { "text": "Flexible et changeante.", "val": "P" }
            ]
        }
    ],

    "profiles": {
        "ESTJ": {
            "code": "ESTJ",
            "title": "Le Chef d'Orchestre",
            "subtitle": "Showman • Technique • Règle • Structure",
            "description": "Tu es le barman qui mène la danse avec une main de fer dans un gant de velours. Tu excelles dans les bars à fort volume où il faut de la discipline et du spectacle en même temps. Tu connais tes classiques par cœur, tu respectes les recettes à la lettre, et tu gères ton poste comme un chef de chantier : tout doit être carré. Ta capacité à garder le contrôle en plein rush tout en assurant le show fait de toi un pilier fiable. Tu imposes le respect par ta rigueur et ton professionnalisme. Les clients adorent ton énergie contrôlée et ta précision chirurgicale.",
            "forces": [
                "Organisation militaire du poste - Rien ne t'échappe",
                "Leadership naturel en cuisine et en salle",
                "Fiabilité absolue même sous pression",
                "Capacité à former des équipes disciplinées",
                "Respect strict des standards qualité"
            ],
            "vigilance": [
                "Risque de rigidité face aux demandes hors-norme",
                "Peut manquer de patience avec les collègues moins structurés",
                "Tendance à imposer ta méthode sans écouter les alternatives"
            ],
            "ideal_environment": {
                "type_bar": "Bar d'hôtel haut de gamme, Brasserie premium, Bar à cocktails de volume",
                "clientele": "Clientèle d'affaires et exigeante qui valorise le professionnalisme",
                "team_size": "Équipe moyenne à grande (5-10 personnes) où tu peux structurer"
            },
            "career_advice": "Tu es fait pour devenir Chef Barman ou Bar Manager rapidement. Développe ton empathie pour équilibrer ta rigueur et tu deviendras imbattable. Apprends à déléguer sans tout contrôler.",
            "famous_example": "Le barman d'un palace parisien qui gère 200 couverts par soir sans un verre cassé"
        },

        "ESFJ": {
            "code": "ESFJ",
            "title": "L'Hôte Parfait",
            "subtitle": "Showman • Technique • Humain • Structure",
            "description": "Tu es le barman qui crée une ambiance familiale même dans le chaos. Tu connais le prénom de tes habitués, leurs cocktails préférés, et tu as toujours un mot gentil même en plein rush. Ta force c'est ton empathie combinée à ta rigueur technique : tu fais des cocktails impeccables tout en créant du lien humain. Tu es celui qui transforme un bar en lieu de vie. Les clients reviennent autant pour tes Negronis parfaits que pour ta présence chaleureuse. Tu adores prendre soin des gens et ça se voit.",
            "forces": [
                "Relation client exceptionnelle - Tu fidélises naturellement",
                "Capacité à créer une atmosphère conviviale",
                "Technique solide et constante",
                "Gestion harmonieuse des équipes",
                "Mémoire incroyable des goûts et préférences clients"
            ],
            "vigilance": [
                "Risque de burn-out émotionnel à force de trop donner",
                "Difficulté à dire non aux clients exigeants",
                "Peut prendre les critiques trop personnellement"
            ],
            "ideal_environment": {
                "type_bar": "Bar de quartier haut de gamme, Wine bar, Bar à cocktails intimiste",
                "clientele": "Clientèle d'habitués qui apprécient le service personnalisé",
                "team_size": "Petite équipe soudée (2-5 personnes) où l'ambiance compte"
            },
            "career_advice": "Tu excelleras dans des bars où la relation client prime sur le volume. Apprends à te protéger émotionnellement pour durer dans le métier. Ta capacité à créer du lien est ton or.",
            "famous_example": "Le barman de quartier dont tout le monde connaît le nom et qui se souvient du cocktail de chaque régulier"
        },

        "ENTJ": {
            "code": "ENTJ",
            "title": "Le Stratège du Bar",
            "subtitle": "Showman • Concept • Règle • Structure",
            "description": "Tu es le barman visionnaire qui voit trois coups d'avance. Tu ne te contentes pas de faire des cocktails, tu construis des concepts, tu optimises des cartes, tu révolutionnes des process. Tu combines le charisme du showman avec l'esprit stratégique d'un entrepreneur. Tu es celui qui propose au patron de refondre toute la carte pour augmenter la marge de 15%. Tu vois le bar comme un système à perfectionner, pas juste un poste de travail. Les gens te suivent parce que tu inspires une vision claire.",
            "forces": [
                "Vision stratégique du business bar",
                "Capacité à innover tout en restant rentable",
                "Leadership inspirant et ambitieux",
                "Optimisation constante des process",
                "Charisme naturel qui attire les clients et motive l'équipe"
            ],
            "vigilance": [
                "Risque d'impatience avec les collègues moins rapides",
                "Peut négliger l'humain au profit de l'efficacité",
                "Tendance à vouloir tout contrôler et tout améliorer"
            ],
            "ideal_environment": {
                "type_bar": "Bar à cocktails innovant, Speakeasy concept, Bar gastronomique",
                "clientele": "Clientèle curieuse et exigeante qui valorise l'innovation",
                "team_size": "Équipe ambitieuse prête à suivre ta vision"
            },
            "career_advice": "Tu es fait pour ouvrir ton propre bar ou diriger un concept ambitieux. Développe ton intelligence émotionnelle pour équilibrer ton efficacité. Les meilleurs stratèges savent aussi écouter.",
            "famous_example": "Le Head Bartender qui a révolutionné la carte d'un bar étoilé et doublé le CA en 6 mois"
        },

        "ENFJ": {
            "code": "ENFJ",
            "title": "Le Motivateur",
            "subtitle": "Showman • Concept • Humain • Structure",
            "description": "Tu es le barman qui inspire autant qu'il régale. Tu crées des cocktails qui racontent des histoires et tu fédères ton équipe autour d'une vision commune. Tu as le charisme pour captiver une salle tout en ayant l'empathie pour comprendre chaque membre de ton équipe. Tu transformes le bar en expérience émotionnelle. Les clients se souviennent de toi des années après parce que tu leur as fait vivre quelque chose d'unique. Tu es un leader né qui élève les autres.",
            "forces": [
                "Charisme exceptionnel et capacité à fédérer",
                "Créativité au service de l'expérience client",
                "Empathie profonde avec l'équipe et les clients",
                "Capacité à raconter des histoires autour des cocktails",
                "Leader inspirant qui fait grandir son équipe"
            ],
            "vigilance": [
                "Risque de se perdre dans la vision au détriment de l'exécution",
                "Peut trop s'investir émotionnellement dans les conflits d'équipe",
                "Tendance à vouloir plaire à tout le monde"
            ],
            "ideal_environment": {
                "type_bar": "Bar à cocktails conceptuel, Rooftop expérientiel, Bar événementiel",
                "clientele": "Clientèle en quête d'expérience mémorable",
                "team_size": "Équipe créative et soudée qui partage ta vision"
            },
            "career_advice": "Tu es fait pour créer des concepts uniques ou diriger des équipes ambitieuses. Apprends à déléguer l'opérationnel pour te concentrer sur ta vision. Ton impact se mesure autant en émotions qu'en cocktails vendus.",
            "famous_example": "Le barman star qui a créé un pop-up bar dont tout le monde parle et qui a lancé trois carrières"
        },

        "ESTP": {
            "code": "ESTP",
            "title": "Le Performer",
            "subtitle": "Showman • Technique • Règle • Freestyle",
            "description": "Tu es le barman qui transforme le service en spectacle vivant. Tu maîtrises la technique classique mais tu la détournes avec style. Tu es celui qui jongle avec les shakers en plein rush et qui sort 50 cocktails parfaits à l'heure tout en faisant rire la salle. Tu vis dans l'instant présent et tu excelles sous pression. L'adrénaline du rush du samedi soir, c'est ton carburant. Tu es efficace, rapide, et spectaculaire à la fois. Les clients viennent autant pour le show que pour le cocktail.",
            "forces": [
                "Vitesse d'exécution impressionnante",
                "Capacité à improviser sous pression",
                "Charisme naturel et sens du spectacle",
                "Technique solide et gestes précis",
                "Sang-froid inébranlable en rush"
            ],
            "vigilance": [
                "Risque de s'ennuyer dans les moments calmes",
                "Peut négliger la planification au profit de l'action",
                "Tendance à prendre des raccourcis quand ça traîne"
            ],
            "ideal_environment": {
                "type_bar": "Bar de nuit à fort volume, Bar festif, Club avec bar premium",
                "clientele": "Clientèle jeune et festive qui valorise l'énergie",
                "team_size": "Équipe dynamique qui suit le rythme"
            },
            "career_advice": "Tu es fait pour les bars à haute intensité où l'action ne s'arrête jamais. Développe ta patience pour les moments calmes. Ta capacité à performer sous pression est rare et précieuse.",
            "famous_example": "Le barman de Ibiza qui gère 300 cocktails par nuit en jonglant avec les bouteilles"
        },

        "ESFP": {
            "code": "ESFP",
            "title": "L'Entertaineur",
            "subtitle": "Showman • Technique • Humain • Freestyle",
            "description": "Tu es le barman qui transforme chaque service en fête. Tu as le don de faire sourire même le client le plus grognon. Ta technique est solide mais c'est ton énergie contagieuse qui fait la différence. Tu danses derrière le bar, tu fais goûter tes créations, tu crées une ambiance où tout le monde se sent bien. Tu es spontané, généreux, et authentique. Les clients ne viennent pas juste pour boire, ils viennent pour toi. Tu es le cœur battant du bar.",
            "forces": [
                "Énergie communicative qui crée l'ambiance",
                "Spontanéité et authenticité désarmante",
                "Générosité naturelle avec les clients",
                "Capacité à improviser et à s'adapter",
                "Technique solide au service de l'humain"
            ],
            "vigilance": [
                "Risque de trop donner et de s'épuiser",
                "Peut manquer de structure dans la gestion du poste",
                "Tendance à se laisser distraire par l'ambiance"
            ],
            "ideal_environment": {
                "type_bar": "Bar de plage, Bar festif, Bar à vin convivial, Bar de quartier animé",
                "clientele": "Clientèle décontractée qui vient pour l'ambiance",
                "team_size": "Équipe fun et bienveillante"
            },
            "career_advice": "Tu es fait pour les bars où l'humain prime sur le protocole. Apprends à canaliser ton énergie pour durer. Ton authenticité est ton super-pouvoir, ne la perds jamais.",
            "famous_example": "Le barman de bar de plage qui connaît tous les prénoms et dont les clients deviennent des amis"
        },

        "ENTP": {
            "code": "ENTP",
            "title": "L'Innovateur",
            "subtitle": "Showman • Concept • Règle • Freestyle",
            "description": "Tu es le barman qui réinvente les règles en permanence. Tu maîtrises les classiques mais tu les déconstruis pour créer quelque chose de nouveau. Tu es celui qui expérimente avec des techniques moléculaires, qui infuse des alcools improbables, qui propose des associations audacieuses. Tu adores débattre avec les clients, challenger leurs goûts, les faire sortir de leur zone de confort. Tu es un innovateur insatiable qui déteste la routine. Chaque service est une opportunité d'expérimenter.",
            "forces": [
                "Créativité débordante et esprit d'innovation",
                "Capacité à challenger les conventions",
                "Charisme intellectuel qui captive",
                "Vision stratégique de la mixologie",
                "Adaptabilité et réactivité exceptionnelles"
            ],
            "vigilance": [
                "Risque de se disperser entre trop de projets",
                "Peut négliger les basiques au profit de l'innovation",
                "Tendance à s'ennuyer des recettes qui marchent"
            ],
            "ideal_environment": {
                "type_bar": "Bar à cocktails d'avant-garde, Lab Bar, Bar R&D",
                "clientele": "Clientèle curieuse et ouverte à l'expérimentation",
                "team_size": "Équipe créative qui ose tester"
            },
            "career_advice": "Tu es fait pour les bars innovants où l'expérimentation est valorisée. Apprends à finir ce que tu commences. Les meilleures innovations viennent de l'exécution, pas juste de l'idée.",
            "famous_example": "Le barman qui a révolutionné le Paris Bar Scene avec des techniques empruntées à la cuisine moléculaire"
        },

        "ENFP": {
            "code": "ENFP",
            "title": "L'Artiste Social",
            "subtitle": "Showman • Concept • Humain • Freestyle",
            "description": "Tu es le barman qui voit chaque cocktail comme une œuvre d'art et chaque client comme une histoire. Tu crées des expériences uniques basées sur les émotions et les connexions humaines. Tu improvises des créations sur mesure selon l'humeur du client, tu racontes des histoires autour de chaque verre, tu transformes le bar en théâtre vivant. Tu es spontané, chaleureux, et profondément créatif. Les clients repartent avec bien plus qu'un cocktail, ils repartent avec un souvenir.",
            "forces": [
                "Créativité au service de l'expérience humaine",
                "Empathie exceptionnelle et écoute active",
                "Capacité à créer des moments uniques",
                "Charisme authentique et spontané",
                "Innovation constante guidée par l'émotion"
            ],
            "vigilance": [
                "Risque de manquer de structure et de constance",
                "Peut se perdre dans la créativité au détriment de la rentabilité",
                "Tendance à trop s'investir émotionnellement"
            ],
            "ideal_environment": {
                "type_bar": "Bar à cocktails intimiste, Bar artistique, Pop-up conceptuel",
                "clientele": "Clientèle bohème et ouverte qui valorise l'expérience",
                "team_size": "Petite équipe créative et bienveillante"
            },
            "career_advice": "Tu es fait pour créer des expériences uniques, pas pour le volume. Apprends à structurer ta créativité pour qu'elle devienne viable économiquement. Ton authenticité est ton trésor.",
            "famous_example": "Le barman de speakeasy qui crée des cocktails sur mesure basés sur 3 questions et dont les clients pleurent de joie"
        },

        "ISTJ": {
            "code": "ISTJ",
            "title": "Le Technicien Fiable",
            "subtitle": "Alchimiste • Technique • Règle • Structure",
            "description": "Tu es le barman sur qui on peut compter les yeux fermés. Tu maîtrises chaque recette classique à la perfection, tu connais chaque ratio par cœur, et ton poste est toujours impeccable. Tu préfères la précision au spectacle, la constance à l'improvisation. Tu es celui qui produit 100 Negronis parfaitement identiques en plein rush sans transpirer. Ta rigueur et ta fiabilité font de toi un pilier indispensable. Tu ne brilles pas par le show mais par l'excellence technique pure.",
            "forces": [
                "Maîtrise technique absolue des classiques",
                "Fiabilité et constance sans faille",
                "Organisation méthodique du poste",
                "Respect strict des standards qualité",
                "Efficacité tranquille et sans stress"
            ],
            "vigilance": [
                "Risque de rigidité face aux demandes créatives",
                "Peut manquer de chaleur humaine avec les clients",
                "Tendance à résister aux changements de process"
            ],
            "ideal_environment": {
                "type_bar": "Bar d'hôtel classique, Bar à whisky traditionnel, Bar d'envoi en gastronomie",
                "clientele": "Clientèle exigeante qui valorise la perfection technique",
                "team_size": "Équipe structurée avec des process clairs"
            },
            "career_advice": "Tu es fait pour les environnements où la constance et la qualité sont non-négociables. Développe ton aisance sociale pour compléter ton excellence technique. Ta fiabilité est une denrée rare.",
            "famous_example": "Le barman du Ritz qui fait le même Dry Martini parfait depuis 20 ans et que personne n'égalera jamais"
        },

        "ISFJ": {
            "code": "ISFJ",
            "title": "Le Gardien du Détail",
            "subtitle": "Alchimiste • Technique • Humain • Structure",
            "description": "Tu es le barman discret qui remarque tout et qui prend soin de chacun. Tu connais les préférences de tes habitués par cœur, tu anticipes leurs besoins avant même qu'ils ne parlent, et chaque cocktail est fait avec une attention méticuleuse. Tu es celui qui se souvient que Monsieur Dupont aime son Negroni avec 2 glaçons, pas 3. Ta force c'est ta constance bienveillante. Tu crées une bulle de confort et de perfection autour de tes clients sans jamais forcer l'attention.",
            "forces": [
                "Attention aux détails exceptionnelle",
                "Mémoire client incroyable",
                "Bienveillance discrète et efficace",
                "Technique irréprochable et constante",
                "Loyauté et dévouement au service"
            ],
            "vigilance": [
                "Risque de s'oublier à force de servir les autres",
                "Difficulté à s'affirmer face aux clients difficiles",
                "Peut résister aux changements même bénéfiques"
            ],
            "ideal_environment": {
                "type_bar": "Bar de palace, Bar à vin intimiste, Bar de club privé",
                "clientele": "Clientèle d'habitués exigeants qui valorise le service personnalisé",
                "team_size": "Petite équipe stable et bienveillante"
            },
            "career_advice": "Tu es fait pour les bars où la relation client sur le long terme compte plus que le volume. Apprends à te faire respecter autant que tu respectes les autres. Ta discrétion est une force, pas une faiblesse.",
            "famous_example": "Le barman de club privé que les membres réclament et qui connaît trois générations de la même famille"
        },

        "INTJ": {
            "code": "INTJ",
            "title": "L'Architecte du Goût",
            "subtitle": "Alchimiste • Concept • Règle • Structure",
            "description": "Tu es le barman scientifique qui décortique chaque aspect de la mixologie. Tu ne fais pas des cocktails, tu construis des systèmes de saveurs. Tu analyses les ratios, tu optimises les process, tu expérimentes avec une rigueur méthodique. Tu es celui qui passe des heures à perfectionner une infusion, qui teste 15 variantes avant de valider une recette. Tu vois la mixologie comme une science à maîtriser, pas un art à ressentir. Ta quête de la perfection rationnelle est inébranlable.",
            "forces": [
                "Vision stratégique de la mixologie",
                "Rigueur scientifique dans l'expérimentation",
                "Capacité à innover par la méthode",
                "Indépendance et autonomie totales",
                "Excellence technique poussée à l'extrême"
            ],
            "vigilance": [
                "Risque de sur-intellectualiser au détriment de l'émotion",
                "Peut manquer de patience avec les collègues moins rigoureux",
                "Tendance à s'isoler dans sa quête de perfection"
            ],
            "ideal_environment": {
                "type_bar": "Bar R&D, Bar gastronomique étoilé, Lab Bar conceptuel",
                "clientele": "Clientèle curieuse et éduquée qui valorise l'innovation technique",
                "team_size": "Petite équipe autonome et rigoureuse"
            },
            "career_advice": "Tu es fait pour repousser les limites de la mixologie. Apprends à vulgariser ta science pour la rendre accessible. Les meilleures innovations techniques doivent aussi émouvoir.",
            "famous_example": "Le barman chercheur qui a publié un livre sur la fermentation appliquée à la mixologie"
        },

        "INFJ": {
            "code": "INFJ",
            "title": "Le Créateur Consciencieux",
            "subtitle": "Alchimiste • Concept • Humain • Structure",
            "description": "Tu es le barman philosophe qui crée des cocktails chargés de sens. Chaque création raconte une histoire profonde, chaque service est une quête de connexion authentique. Tu combines une vision artistique claire avec une exécution méticuleuse et une empathie rare. Tu es celui qui crée un cocktail pour célébrer un moment important dans la vie d'un client, qui comprend ce dont les gens ont besoin avant qu'ils ne le disent. Tu transformes le bar en espace de réflexion et d'émotion.",
            "forces": [
                "Profondeur conceptuelle unique",
                "Empathie exceptionnelle et intuition des besoins",
                "Créativité au service du sens et de l'émotion",
                "Rigueur dans l'exécution de ta vision",
                "Capacité à créer des expériences transformatrices"
            ],
            "vigilance": [
                "Risque de burn-out par sur-investissement émotionnel",
                "Peut être trop perfectionniste et jamais satisfait",
                "Tendance à s'isoler pour protéger son monde intérieur"
            ],
            "ideal_environment": {
                "type_bar": "Bar à cocktails conceptuel intimiste, Bar artistique, Bar de collection",
                "clientele": "Clientèle en quête de profondeur et d'expérience authentique",
                "team_size": "Petite équipe alignée sur des valeurs communes"
            },
            "career_advice": "Tu es fait pour créer des concepts qui marquent les esprits. Apprends à protéger ton énergie émotionnelle. Ta capacité à donner du sens est un don rare dans ce métier.",
            "famous_example": "Le barman qui a créé une carte de 12 cocktails racontant l'histoire de sa ville natale et qui fait pleurer les clients"
        },

        "ISTP": {
            "code": "ISTP",
            "title": "Le Craftsman",
            "subtitle": "Alchimiste • Technique • Règle • Freestyle",
            "description": "Tu es le barman artisan qui maîtrise son craft avec une aisance naturelle. Tu n'as pas besoin de parler, tes gestes parlent pour toi. Tu es celui qui fait des cocktails parfaits avec une économie de mouvements impressionnante, qui résout les problèmes techniques en un coup d'œil, qui improvise des solutions brillantes sous pression. Tu vis dans l'action, pas dans les mots. Ta technique est fluide, intuitive, et redoutablement efficace. Le silence du professionnel absolu.",
            "forces": [
                "Maîtrise technique intuitive et fluide",
                "Résolution de problèmes pragmatique",
                "Sang-froid absolu sous pression",
                "Adaptabilité instantanée",
                "Efficacité maximale sans effort apparent"
            ],
            "vigilance": [
                "Risque de sous-communiquer avec l'équipe",
                "Peut manquer d'engagement émotionnel avec les clients",
                "Tendance à s'ennuyer dans la routine"
            ],
            "ideal_environment": {
                "type_bar": "Bar craft à forte technicité, Bar de mixologues, Bar d'envoi gastronomique",
                "clientele": "Clientèle qui valorise la maîtrise technique plus que le show",
                "team_size": "Équipe autonome et compétente"
            },
            "career_advice": "Tu es fait pour les environnements techniques où l'excellence silencieuse est valorisée. Développe ta communication pour transmettre ton savoir. Ta maîtrise est un art.",
            "famous_example": "Le barman japonais qui fait des cocktails parfaits en 90 secondes sans jamais parler et que tout le monde respecte"
        },

        "ISFP": {
            "code": "ISFP",
            "title": "L'Artisan Sensible",
            "subtitle": "Alchimiste • Technique • Humain • Freestyle",
            "description": "Tu es le barman artiste qui crée dans le silence et l'authenticité. Chaque cocktail est une expression de ton âme, fait avec amour et attention. Tu privilégies les ingrédients nobles, les gestes justes, l'harmonie des saveurs. Tu n'es pas là pour le show mais pour créer de la beauté et du réconfort. Tu es celui qui sent intuitivement ce dont le client a besoin et qui crée en conséquence. Ta douceur et ta sincérité touchent profondément ceux qui savent voir.",
            "forces": [
                "Sensibilité esthétique exceptionnelle",
                "Créativité authentique et personnelle",
                "Empathie naturelle et non-verbale",
                "Attention aux détails sensoriels",
                "Humilité et générosité dans le service"
            ],
            "vigilance": [
                "Risque de ne pas s'affirmer assez",
                "Peut être trop sensible aux critiques",
                "Tendance à éviter les conflits même nécessaires"
            ],
            "ideal_environment": {
                "type_bar": "Bar à vin intimiste, Bar de quartier bohème, Bar craft confidentiel",
                "clientele": "Clientèle sensible qui valorise l'authenticité",
                "team_size": "Petite équipe bienveillante et respectueuse"
            },
            "career_advice": "Tu es fait pour les bars où l'humain et l'authenticité priment. Apprends à te faire entendre sans trahir ta nature. Ta sensibilité est ta signature.",
            "famous_example": "Le barman de cave à vin naturel qui crée des accords parfaits en silence et dont les clients sont des disciples"
        },

        "INTP": {
            "code": "INTP",
            "title": "Le Scientifique du Cocktail",
            "subtitle": "Alchimiste • Concept • Règle • Freestyle",
            "description": "Tu es le barman chercheur qui déconstruit tout pour comprendre. Tu ne suis pas les recettes, tu les analyses, tu les questionnes, tu les réinventes par la logique. Tu es celui qui lit des études scientifiques sur l'extraction des arômes, qui teste des hypothèses avec rigueur, qui crée des cocktails comme des équations à résoudre. Tu vois la mixologie comme un puzzle intellectuel infini. Ta curiosité insatiable te pousse à explorer des territoires inconnus.",
            "forces": [
                "Curiosité intellectuelle sans limite",
                "Capacité d'analyse et de déconstruction",
                "Innovation par la logique et l'expérimentation",
                "Indépendance d'esprit totale",
                "Résolution de problèmes complexes"
            ],
            "vigilance": [
                "Risque de se perdre dans la théorie au détriment de la pratique",
                "Peut manquer de structure dans l'exécution",
                "Tendance à négliger l'aspect humain du service"
            ],
            "ideal_environment": {
                "type_bar": "Lab Bar, Bar R&D, Bar de mixologues avant-gardistes",
                "clientele": "Clientèle curieuse et ouverte aux concepts intellectuels",
                "team_size": "Petite équipe de chercheurs-barmans"
            },
            "career_advice": "Tu es fait pour repousser les frontières conceptuelles de la mixologie. Apprends à finir tes projets et à les rendre accessibles. La science sans application reste de la théorie.",
            "famous_example": "Le barman qui a écrit une thèse sur la dilution optimale et qui a révolutionné la compréhension du stirring"
        },

        "INFP": {
            "code": "INFP",
            "title": "Le Rêveur Créatif",
            "subtitle": "Alchimiste • Concept • Humain • Freestyle",
            "description": "Tu es le barman poète qui transforme chaque cocktail en émotion liquide. Tu crées guidé par tes valeurs et tes rêves, pas par les conventions. Tu es celui qui compose des cocktails comme on écrit des poèmes, qui cherche à toucher l'âme plus que les papilles. Tu travailles dans ton monde intérieur riche et tu partages tes créations avec une humilité désarmante. Ta sensibilité profonde et ton authenticité créent des moments magiques pour ceux qui savent les voir.",
            "forces": [
                "Créativité profonde et personnelle",
                "Authenticité et intégrité absolues",
                "Empathie intuitive exceptionnelle",
                "Capacité à créer des expériences émotionnelles uniques",
                "Vision idéaliste qui inspire"
            ],
            "vigilance": [
                "Risque de manquer de structure et de constance",
                "Peut être trop sensible aux environnements négatifs",
                "Tendance à se perdre dans l'idéal au détriment du réel"
            ],
            "ideal_environment": {
                "type_bar": "Bar artistique confidentiel, Bar expérimental intimiste, Pop-up conceptuel",
                "clientele": "Clientèle bohème et ouverte qui cherche l'authenticité",
                "team_size": "Très petite équipe alignée sur des valeurs communes"
            },
            "career_advice": "Tu es fait pour créer des expériences qui touchent l'âme, pas pour le volume. Trouve un environnement qui respecte ta sensibilité. Ton authenticité est ton don le plus précieux.",
            "famous_example": "Le barman qui a créé un bar éphémère de 6 mois où chaque cocktail était une méditation et dont les clients parlent encore 10 ans après"
        }
    }
};
