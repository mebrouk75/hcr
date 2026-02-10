export const MBTI_SERVEUR_DATA = {
    "meta": {
        "role_target": "SERVEUR",
        "total_questions": 60,
        "structure": "4 Dimensions x 15 Questions",
        "estimated_time": "12-15 minutes",
        "scoring_type": "MBTI_DICHOTOMOUS",
        "total_profiles": 16
    },

    "dimensions": {
        "EI": {
            "name": "ÉNERGIE RELATIONNELLE",
            "pole_E": "Ambassadeur - Extraverti",
            "pole_I": "Efficace - Introverti",
            "description": "Comment le serveur tire son énergie et interagit avec les clients"
        },
        "SN": {
            "name": "MODE DE PERCEPTION",
            "pole_S": "Exécution - Sensation",
            "pole_N": "Anticipation - Intuition",
            "description": "Comment le serveur traite l'information et lit les situations"
        },
        "TF": {
            "name": "PRISE DE DÉCISION",
            "pole_T": "Protocole - Thinking",
            "pole_F": "Empathie - Feeling",
            "description": "Comment le serveur prend ses décisions en salle"
        },
        "JP": {
            "name": "ORGANISATION",
            "pole_J": "Rigoureux - Judging",
            "pole_P": "Adaptable - Perceiving",
            "description": "Comment le serveur organise son travail et gère l'imprévu"
        }
    },

    "scoring_rules": {
        "method": "MAJORITY_PER_DIMENSION",
        "description": "Pour chaque dimension (E/I, S/N, T/F, J/P), compter le nombre de réponses pour chaque pôle. La lettre majoritaire est retenue. Assembler les 4 lettres pour obtenir le code MBTI final (ex: ESFJ).",
        "example": {
            "dimension_EI": {
                "E_count": 10,
                "I_count": 5,
                "result": "E"
            },
            "dimension_SN": {
                "S_count": 8,
                "N_count": 7,
                "result": "S"
            },
            "dimension_TF": {
                "T_count": 6,
                "F_count": 9,
                "result": "F"
            },
            "dimension_JP": {
                "J_count": 11,
                "P_count": 4,
                "result": "J"
            },
            "final_profile": "ESFJ"
        }
    },

    "pretest_alert": {
        "titre": "Phase 1 : Profil Serveur",
        "sous_titre": "Pour servir avec excellence, il faut se connaître soi-même.",
        "message_principal": "Cette première étape définit ton style de service naturel.",
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
        // --- DIMENSION 1 : EXTRAVERSION (Ambassadeur) vs INTROVERSION (Efficace) ---

        {
            "id": "SRV_EI_01", "dimension": "EI", "text": "Un couple s'installe à ta table.", "options": [
                { "text": "Je les accueille avec le sourire, je fais la conversation, je les mets à l'aise.", "val": "E" },
                { "text": "Je dis bonjour, je donne la carte, j'attends qu'ils m'appellent.", "val": "I" }
            ]
        },
        {
            "id": "SRV_EI_02", "dimension": "EI", "text": "Tu as 6 tables en même temps.", "options": [
                { "text": "Je passe voir chaque table régulièrement pour papoter et créer du lien.", "val": "E" },
                { "text": "Je gère mes rotations efficacement sans perdre de temps en discussion.", "val": "I" }
            ]
        },
        {
            "id": "SRV_EI_03", "dimension": "EI", "text": "Un client mange seul et lit un livre.", "options": [
                { "text": "Je lui fais la conversation pour qu'il se sente moins seul.", "val": "E" },
                { "text": "Je le laisse tranquille, il a l'air concentré.", "val": "I" }
            ]
        },
        {
            "id": "SRV_EI_04", "dimension": "EI", "text": "Ton moment préféré du service ?", "options": [
                { "text": "Le coup de feu quand ça parle, ça rit, ça vit.", "val": "E" },
                { "text": "La mise en place tranquille avant l'ouverture.", "val": "I" }
            ]
        },
        {
            "id": "SRV_EI_05", "dimension": "EI", "text": "Une table d'habitués arrive.", "options": [
                { "text": "Je les accueille comme des amis, on discute de leur semaine.", "val": "E" },
                { "text": "Je leur souris et je leur sers ce qu'ils prennent d'habitude.", "val": "I" }
            ]
        },
        {
            "id": "SRV_EI_06", "dimension": "EI", "text": "Tu as fini ton service.", "options": [
                { "text": "Je reste boire un verre avec les collègues pour débriefer.", "val": "E" },
                { "text": "Je rentre direct, j'ai besoin de silence.", "val": "I" }
            ]
        },
        {
            "id": "SRV_EI_07", "dimension": "EI", "text": "Un client te demande des recommandations.", "options": [
                { "text": "J'adore ça, je raconte l'histoire de chaque plat avec passion.", "val": "E" },
                { "text": "Je lui donne 2-3 choix concrets sans m'étaler.", "val": "I" }
            ]
        },
        {
            "id": "SRV_EI_08", "dimension": "EI", "text": "Pour toi, un bon service c'est...", "options": [
                { "text": "Créer une vraie connexion avec les clients.", "val": "E" },
                { "text": "Être efficace et professionnel.", "val": "I" }
            ]
        },
        {
            "id": "SRV_EI_09", "dimension": "EI", "text": "Il n'y a personne en salle.", "options": [
                { "text": "Je m'ennuie, j'attends que ça remplisse.", "val": "E" },
                { "text": "J'en profite pour peaufiner ma mise en place.", "val": "I" }
            ]
        },
        {
            "id": "SRV_EI_10", "dimension": "EI", "text": "Un client te pose une question perso ('T'es d'où ?').", "options": [
                { "text": "Je réponds et j'engage la conversation.", "val": "E" },
                { "text": "Je réponds brièvement et je reviens au service.", "val": "I" }
            ]
        },
        {
            "id": "SRV_EI_11", "dimension": "EI", "text": "Si tu dois former un nouveau...", "options": [
                { "text": "Je lui montre comment créer du lien avec les clients.", "val": "E" },
                { "text": "Je lui montre les procédures et les placements.", "val": "I" }
            ]
        },
        {
            "id": "SRV_EI_12", "dimension": "EI", "text": "Tu préfères travailler...", "options": [
                { "text": "En salle avec les clients.", "val": "E" },
                { "text": "Au bar d'envoi ou en débarrassage (moins de contact).", "val": "I" }
            ]
        },
        {
            "id": "SRV_EI_13", "dimension": "EI", "text": "Une table de 8 personnes très bruyante.", "options": [
                { "text": "Cool, l'ambiance monte, j'adore ça.", "val": "E" },
                { "text": "Épuisant, je préfère les petites tables calmes.", "val": "I" }
            ]
        },
        {
            "id": "SRV_EI_14", "dimension": "EI", "text": "Un client te complimente sur ton service.", "options": [
                { "text": "Ça me booste, j'adore les retours positifs.", "val": "E" },
                { "text": "Je dis merci discrètement et je continue.", "val": "I" }
            ]
        },
        {
            "id": "SRV_EI_15", "dimension": "EI", "text": "Tu préfères une équipe...", "options": [
                { "text": "Bavarde et chaleureuse.", "val": "E" },
                { "text": "Calme et professionnelle.", "val": "I" }
            ]
        },

        // --- DIMENSION 2 : SENSATION (Exécution) vs INTUITION (Anticipation) ---

        {
            "id": "SRV_SN_01", "dimension": "SN", "text": "Le client dit 'Je prendrais quelque chose de léger'.", "options": [
                { "text": "Je lui propose les plats marqués 'légers' sur la carte.", "val": "S" },
                { "text": "Je devine ce qu'il veut vraiment (poisson ? salade ?) et je propose directement.", "val": "N" }
            ]
        },
        {
            "id": "SRV_SN_02", "dimension": "SN", "text": "Tu arrives en salle, tu regardes quoi en premier ?", "options": [
                { "text": "L'état des tables (propreté, dressage, couverts).", "val": "S" },
                { "text": "L'ambiance générale et le mood des clients.", "val": "N" }
            ]
        },
        {
            "id": "SRV_SN_03", "dimension": "SN", "text": "Apprendre une nouvelle carte.", "options": [
                { "text": "J'apprends par cœur les ingrédients de chaque plat.", "val": "S" },
                { "text": "Je retiens les grandes lignes et j'improvise les détails.", "val": "N" }
            ]
        },
        {
            "id": "SRV_SN_04", "dimension": "SN", "text": "Un couple n'a pas parlé depuis 10 minutes.", "options": [
                { "text": "Je fais mon boulot, c'est pas mon problème.", "val": "S" },
                { "text": "Je sens qu'ils sont en froid, j'adapte mon approche.", "val": "N" }
            ]
        },
        {
            "id": "SRV_SN_05", "dimension": "SN", "text": "Le dressage d'une assiette.", "options": [
                { "text": "Doit être exactement comme sur la photo de formation.", "val": "S" },
                { "text": "Doit raconter une histoire visuelle.", "val": "N" }
            ]
        },
        {
            "id": "SRV_SN_06", "dimension": "SN", "text": "Un client hésite entre 2 plats.", "options": [
                { "text": "Je lui décris précisément les ingrédients de chacun.", "val": "S" },
                { "text": "Je lui demande ce qu'il recherche (lourd/léger, viande/poisson) pour l'orienter.", "val": "N" }
            ]
        },
        {
            "id": "SRV_SN_07", "dimension": "SN", "text": "Tu sens qu'un client va te demander quelque chose.", "options": [
                { "text": "J'attends qu'il m'appelle, je ne devine pas.", "val": "S" },
                { "text": "Je m'approche avant qu'il lève la main.", "val": "N" }
            ]
        },
        {
            "id": "SRV_SN_08", "dimension": "SN", "text": "La mise en place parfaite, c'est...", "options": [
                { "text": "Tout est à sa place selon le plan de salle.", "val": "S" },
                { "text": "L'atmosphère est juste, même si 2-3 détails manquent.", "val": "N" }
            ]
        },
        {
            "id": "SRV_SN_09", "dimension": "SN", "text": "Un client dit 'Surprise-moi'.", "options": [
                { "text": "Je lui propose notre best-seller.", "val": "S" },
                { "text": "Je compose un menu selon son profil.", "val": "N" }
            ]
        },
        {
            "id": "SRV_SN_10", "dimension": "SN", "text": "Pour toi, le plus important c'est...", "options": [
                { "text": "Que le service soit impeccable techniquement.", "val": "S" },
                { "text": "Que les clients vivent une expérience.", "val": "N" }
            ]
        },
        {
            "id": "SRV_SN_11", "dimension": "SN", "text": "Une famille avec enfants arrive.", "options": [
                { "text": "Je leur donne les menus enfants standards.", "val": "S" },
                { "text": "Je propose directement une table calme et j'anticipe les crayons.", "val": "N" }
            ]
        },
        {
            "id": "SRV_SN_12", "dimension": "SN", "text": "Un client regarde l'heure plusieurs fois.", "options": [
                { "text": "Je ne remarque pas.", "val": "S" },
                { "text": "Je comprends qu'il est pressé et j'accélère le service.", "val": "N" }
            ]
        },
        {
            "id": "SRV_SN_13", "dimension": "SN", "text": "L'ordre des plats sur la carte.", "options": [
                { "text": "Ne doit jamais changer, c'est la procédure.", "val": "S" },
                { "text": "Peut être adapté selon les saisons ou l'ambiance.", "val": "N" }
            ]
        },
        {
            "id": "SRV_SN_14", "dimension": "SN", "text": "Tu préfères travailler avec...", "options": [
                { "text": "Des fiches produits précises.", "val": "S" },
                { "text": "Ta connaissance instinctive des goûts.", "val": "N" }
            ]
        },
        {
            "id": "SRV_SN_15", "dimension": "SN", "text": "Un client allergique.", "options": [
                { "text": "Je vérifie mot à mot la liste des ingrédients.", "val": "S" },
                { "text": "Je connais déjà les plats sans allergènes et je propose directement.", "val": "N" }
            ]
        },

        // --- DIMENSION 3 : THINKING (Protocole) vs FEELING (Empathie) ---

        {
            "id": "SRV_TF_01", "dimension": "TF", "text": "Un client se plaint que son plat est froid.", "options": [
                { "text": "J'applique la procédure : je le ramène en cuisine, je fais réchauffer.", "val": "T" },
                { "text": "Je m'excuse chaleureusement, je lui propose une compensation (apéro offert).", "val": "F" }
            ]
        },
        {
            "id": "SRV_TF_02", "dimension": "TF", "text": "Un enfant fait du bruit et dérange les autres tables.", "options": [
                { "text": "Je demande poliment aux parents de le calmer (règlement).", "val": "T" },
                { "text": "Je propose un coloriage ou je fais diversion pour aider les parents.", "val": "F" }
            ]
        },
        {
            "id": "SRV_TF_03", "dimension": "TF", "text": "Un habitué arrive sans réservation un soir complet.", "options": [
                { "text": "Désolé, c'est complet, c'est la règle.", "val": "T" },
                { "text": "Je lui trouve une petite table ou je le fais patienter au bar.", "val": "F" }
            ]
        },
        {
            "id": "SRV_TF_04", "dimension": "TF", "text": "Un collègue casse une pile d'assiettes.", "options": [
                { "text": "Je lui dis de faire gaffe, ça coûte cher.", "val": "T" },
                { "text": "Je lui demande si il va bien et je l'aide à nettoyer.", "val": "F" }
            ]
        },
        {
            "id": "SRV_TF_05", "dimension": "TF", "text": "Le manager change ton planning sans te prévenir.", "options": [
                { "text": "Je vérifie si c'est conforme à mon contrat.", "val": "T" },
                { "text": "Je lui explique que ça me met dans la merde personnellement.", "val": "F" }
            ]
        },
        {
            "id": "SRV_TF_06", "dimension": "TF", "text": "Tu te trompes de plat pour une table.", "options": [
                { "text": "Je m'excuse, je corrige l'erreur, point.", "val": "T" },
                { "text": "Je suis vraiment désolé, je leur offre un dessert pour me faire pardonner.", "val": "F" }
            ]
        },
        {
            "id": "SRV_TF_07", "dimension": "TF", "text": "Un client est désagréable avec toi sans raison.", "options": [
                { "text": "Je reste pro et froid, je fais mon job.", "val": "T" },
                { "text": "J'essaie de comprendre pourquoi il est énervé.", "val": "F" }
            ]
        },
        {
            "id": "SRV_TF_08", "dimension": "TF", "text": "Une cliente pleure discrètement à sa table.", "options": [
                { "text": "Je fais comme si je ne voyais rien, c'est sa vie privée.", "val": "T" },
                { "text": "Je lui demande doucement si tout va bien.", "val": "F" }
            ]
        },
        {
            "id": "SRV_TF_09", "dimension": "TF", "text": "Tu préfères un manager...", "options": [
                { "text": "Juste et équitable.", "val": "T" },
                { "text": "Compréhensif et humain.", "val": "F" }
            ]
        },
        {
            "id": "SRV_TF_10", "dimension": "TF", "text": "Un collègue est lent ce soir.", "options": [
                { "text": "Je prends ses tables pour accélérer le service.", "val": "T" },
                { "text": "Je lui demande ce qui ne va pas.", "val": "F" }
            ]
        },
        {
            "id": "SRV_TF_11", "dimension": "TF", "text": "La fermeture du restaurant.", "options": [
                { "text": "À 22h30 pile, je préviens les clients qu'on ferme.", "val": "T" },
                { "text": "Je laisse les clients finir tranquillement, tant pis si je finis tard.", "val": "F" }
            ]
        },
        {
            "id": "SRV_TF_12", "dimension": "TF", "text": "Un client VIP demande une table non disponible.", "options": [
                { "text": "Non, c'est réservé, règle pour tous.", "val": "T" },
                { "text": "Je déplace des réservations pour l'accommoder.", "val": "F" }
            ]
        },
        {
            "id": "SRV_TF_13", "dimension": "TF", "text": "Gestion des pourboires.", "options": [
                { "text": "On divise équitablement selon les heures.", "val": "T" },
                { "text": "On donne plus à ceux qui ont galéré ce soir.", "val": "F" }
            ]
        },
        {
            "id": "SRV_TF_14", "dimension": "TF", "text": "Le Chef te gueule dessus en plein service.", "options": [
                { "text": "Je reste pro, je finis mon service, je règle ça après.", "val": "T" },
                { "text": "Ça me touche, j'ai du mal à continuer normalement.", "val": "F" }
            ]
        },
        {
            "id": "SRV_TF_15", "dimension": "TF", "text": "Un couple fête un anniversaire.", "options": [
                { "text": "Je note l'info, je préviens en cuisine pour le dessert.", "val": "T" },
                { "text": "Je fais en sorte que ce soit vraiment spécial (chanson, bougie, etc).", "val": "F" }
            ]
        },

        // --- DIMENSION 4 : JUDGING (Rigoureux) vs PERCEIVING (Adaptable) ---

        {
            "id": "SRV_JP_01", "dimension": "JP", "text": "Ta mise en place avant le service.", "options": [
                { "text": "Je suis ma check-list point par point, tout doit être parfait.", "val": "J" },
                { "text": "Je fais au feeling, je sais ce qui est important.", "val": "P" }
            ]
        },
        {
            "id": "SRV_JP_02", "dimension": "JP", "text": "Un client te demande de changer 3 ingrédients dans un plat.", "options": [
                { "text": "Ça m'agace, ça complique tout.", "val": "J" },
                { "text": "Pas de problème, je transmets et je m'adapte.", "val": "P" }
            ]
        },
        {
            "id": "SRV_JP_03", "dimension": "JP", "text": "Un groupe arrive à l'improviste sans réservation.", "options": [
                { "text": "Stress, j'avais pas prévu, ça déséquilibre mon plan.", "val": "J" },
                { "text": "Cool, je réorganise les tables à la volée.", "val": "P" }
            ]
        },
        {
            "id": "SRV_JP_04", "dimension": "JP", "text": "Ta façon de prendre les commandes.", "options": [
                { "text": "Je finis une table avant de passer à la suivante.", "val": "J" },
                { "text": "Je jongle entre plusieurs tables en même temps.", "val": "P" }
            ]
        },
        {
            "id": "SRV_JP_05", "dimension": "JP", "text": "Le plan de salle.", "options": [
                { "text": "Ne doit jamais changer, chacun sa zone.", "val": "J" },
                { "text": "On s'adapte selon le flux et qui est disponible.", "val": "P" }
            ]
        },
        {
            "id": "SRV_JP_06", "dimension": "JP", "text": "Il manque des couverts en plein service.", "options": [
                { "text": "Impossible, j'ai tout vérifié avant.", "val": "J" },
                { "text": "Pas grave, je vais en chercher rapidement.", "val": "P" }
            ]
        },
        {
            "id": "SRV_JP_07", "dimension": "JP", "text": "L'ordre de service (entrée, plat, dessert).", "options": [
                { "text": "Doit être respecté à la lettre.", "val": "J" },
                { "text": "Peut être adapté selon les demandes clients.", "val": "P" }
            ]
        },
        {
            "id": "SRV_JP_08", "dimension": "JP", "text": "Ton plan de carrière.", "options": [
                { "text": "Dans 2 ans je suis Chef de rang, dans 5 ans Maître d'hôtel.", "val": "J" },
                { "text": "Je verrai bien, je vis au jour le jour.", "val": "P" }
            ]
        },
        {
            "id": "SRV_JP_09", "dimension": "JP", "text": "Le débarrassage des tables.", "options": [
                { "text": "Je débarrasse dès qu'un plat est fini.", "val": "J" },
                { "text": "J'attends que tout le monde ait fini pour ne pas presser.", "val": "P" }
            ]
        },
        {
            "id": "SRV_JP_10", "dimension": "JP", "text": "On te propose un extra pour ce soir à la dernière minute.", "options": [
                { "text": "Non, j'ai prévu autre chose.", "val": "J" },
                { "text": "Carrément, j'arrive !", "val": "P" }
            ]
        },
        {
            "id": "SRV_JP_11", "dimension": "JP", "text": "Tu préfères être de...", "options": [
                { "text": "Ouverture. J'aime tout préparer méthodiquement.", "val": "J" },
                { "text": "Fermeture. J'aime gérer l'imprévu du service.", "val": "P" }
            ]
        },
        {
            "id": "SRV_JP_12", "dimension": "JP", "text": "Si le collègue d'avant a mal fait la mise en place...", "options": [
                { "text": "Je refais tout avant de commencer.", "val": "J" },
                { "text": "Je m'adapte, tant pis.", "val": "P" }
            ]
        },
        {
            "id": "SRV_JP_13", "dimension": "JP", "text": "Les réservations.", "options": [
                { "text": "Système strict, on ne déroge pas.", "val": "J" },
                { "text": "On peut s'arranger selon les situations.", "val": "P" }
            ]
        },
        {
            "id": "SRV_JP_14", "dimension": "JP", "text": "La routine.", "options": [
                { "text": "Ça me rassure.", "val": "J" },
                { "text": "Ça me tue.", "val": "P" }
            ]
        },
        {
            "id": "SRV_JP_15", "dimension": "JP", "text": "Ton rang de travail idéal.", "options": [
                { "text": "Fixe et organisé.", "val": "J" },
                { "text": "Flexible et changeant.", "val": "P" }
            ]
        }
    ],

    "profiles": {
        "ESTJ": {
            "code": "ESTJ",
            "title": "Le Sergent de Salle",
            "subtitle": "Ambassadeur • Exécution • Protocole • Rigoureux",
            "description": "Tu es le serveur militaire qui fait tourner la salle comme une horloge suisse. Tu connais chaque protocole par cœur, tu gères tes tables avec une efficacité redoutable, et tu ne laisses rien passer. Ta présence rassure les clients car ils savent qu'avec toi, tout sera parfait. Tu es celui qui peut gérer 8 tables en même temps sans transpirer, qui forme les nouveaux à la dure, et qui impose le respect par ta rigueur professionnelle. Les managers t'adorent car tu es fiable à 100%. Tu transforms le chaos du coup de feu en ballet organisé.",
            "forces": [
                "Organisation militaire du service",
                "Leadership naturel en salle",
                "Fiabilité absolue même sous pression",
                "Capacité à former des équipes disciplinées",
                "Respect strict des standards de service"
            ],
            "vigilance": [
                "Risque de rigidité face aux demandes atypiques",
                "Peut manquer de souplesse avec les clients difficiles",
                "Tendance à imposer ta méthode sans écouter"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant gastronomique, Brasserie haut de gamme, Hôtel palace",
                "clientele": "Clientèle exigeante qui valorise le professionnalisme",
                "team_size": "Grande équipe (8-15 personnes) où la structure est essentielle"
            },
            "career_advice": "Tu es fait pour devenir Chef de rang puis Maître d'hôtel rapidement. Développe ton empathie pour équilibrer ta rigueur. Les meilleurs leaders savent aussi s'adapter.",
            "famous_example": "Le serveur de palace parisien qui gère 12 tables sans jamais oublier un détail"
        },

        "ESFJ": {
            "code": "ESFJ",
            "title": "L'Ange Gardien",
            "subtitle": "Ambassadeur • Exécution • Empathie • Rigoureux",
            "description": "Tu es le serveur qui transforme chaque table en famille. Tu connais les prénoms de tes habitués, leurs allergies, leurs anniversaires. Ta chaleur naturelle combinée à ta rigueur technique fait de toi un pilier irremplaçable. Tu es celui qui devine quand un client a besoin d'attention et quand il veut être tranquille. Tu crées une bulle de confort autour de chaque table. Les clients reviennent autant pour ton sourire sincère que pour la qualité du service. Tu prends soin des gens et ça se voit dans chaque geste.",
            "forces": [
                "Relation client exceptionnelle et authentique",
                "Mémoire incroyable des préférences clients",
                "Technique de service impeccable",
                "Capacité à créer une atmosphère chaleureuse",
                "Gestion harmonieuse des situations délicates"
            ],
            "vigilance": [
                "Risque de burn-out émotionnel à force de trop donner",
                "Difficulté à dire non aux clients exigeants",
                "Peut prendre les critiques trop personnellement"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant de quartier haut de gamme, Bistrot chic, Table familiale étoilée",
                "clientele": "Clientèle d'habitués qui apprécient le service personnalisé",
                "team_size": "Équipe moyenne soudée (4-8 personnes)"
            },
            "career_advice": "Tu excelleras dans les restaurants où la fidélisation client est clé. Apprends à te protéger émotionnellement. Ta capacité à créer du lien est ton trésor le plus précieux.",
            "famous_example": "Le serveur de quartier dont tout le monde connaît le nom et qui se souvient de chaque habitué"
        },

        "ENTJ": {
            "code": "ENTJ",
            "title": "Le Stratège de Salle",
            "subtitle": "Ambassadeur • Anticipation • Protocole • Rigoureux",
            "description": "Tu es le serveur qui voit trois coups d'avance et optimise chaque geste. Tu ne fais pas que servir, tu orchestres l'expérience client comme un chef d'orchestre. Tu anticipes les besoins avant qu'ils ne soient exprimés, tu optimises les rotations de tables, tu proposes des améliorations de process. Tu es celui qui calcule mentalement comment faire 15% de CA en plus sur un service. Tu combines charisme, intelligence stratégique et exécution parfaite. Les managers te voient déjà comme leur futur remplaçant.",
            "forces": [
                "Vision stratégique du service",
                "Anticipation exceptionnelle des besoins",
                "Leadership inspirant et efficace",
                "Optimisation constante des process",
                "Charisme naturel qui rassure les clients"
            ],
            "vigilance": [
                "Risque d'impatience avec les collègues moins rapides",
                "Peut négliger l'humain au profit de l'efficacité",
                "Tendance à vouloir tout contrôler"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant gastronomique ambitieux, Table innovante, Établissement multi-services",
                "clientele": "Clientèle exigeante qui valorise l'excellence",
                "team_size": "Grande équipe où ton leadership peut s'exprimer"
            },
            "career_advice": "Tu es fait pour diriger une salle ou ouvrir ton restaurant. Développe ton intelligence émotionnelle pour équilibrer ton efficacité. Les meilleurs stratèges savent aussi écouter.",
            "famous_example": "Le serveur qui est devenu Directeur de salle à 25 ans et qui a révolutionné le service"
        },

        "ENFJ": {
            "code": "ENFJ",
            "title": "Le Maestro",
            "subtitle": "Ambassadeur • Anticipation • Empathie • Rigoureux",
            "description": "Tu es le serveur qui élève le service au rang d'art. Tu anticipes les émotions des clients, tu lis leur langage corporel, tu crées une expérience sur mesure pour chaque table. Tu fédères ton équipe autour d'une vision commune du service parfait. Tu es celui qui transforme un repas ordinaire en souvenir mémorable. Les clients se souviennent de toi des années après. Tu es un leader naturel qui inspire autant qu'il sert. Ta présence change l'atmosphère d'une salle.",
            "forces": [
                "Charisme exceptionnel et empathie profonde",
                "Anticipation intuitive des besoins émotionnels",
                "Capacité à créer des expériences mémorables",
                "Leadership inspirant qui élève l'équipe",
                "Excellence technique au service de l'humain"
            ],
            "vigilance": [
                "Risque de se perdre dans la vision au détriment de l'exécution",
                "Peut trop s'investir émotionnellement",
                "Tendance à vouloir plaire à tout le monde"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant d'exception, Table expérientielle, Établissement à forte identité",
                "clientele": "Clientèle en quête d'expérience unique",
                "team_size": "Équipe passionnée qui partage ta vision"
            },
            "career_advice": "Tu es fait pour créer des expériences uniques ou former des équipes d'exception. Apprends à déléguer l'opérationnel. Ton impact se mesure en émotions, pas en tables servies.",
            "famous_example": "Le Maître d'hôtel qui a fait pleurer des clients de joie et dont on parle encore 10 ans après"
        },

        "ESTP": {
            "code": "ESTP",
            "title": "Le Félin",
            "subtitle": "Ambassadeur • Exécution • Protocole • Adaptable",
            "description": "Tu es le serveur qui danse en salle avec une aisance naturelle. Tu jonglés entre les tables, tu improvises, tu résous les problèmes à la volée avec un sourire. L'adrénaline du coup de feu, c'est ton carburant. Tu es celui qui peut sauver un service désastreux par ta réactivité et ton sang-froid. Tu maîtrises la technique mais tu la détournes avec style. Tu vis dans l'instant présent et tu excelles sous pression. Les clients adorent ton énergie contagieuse.",
            "forces": [
                "Réactivité impressionnante sous pression",
                "Capacité à improviser avec élégance",
                "Sang-froid inébranlable en rush",
                "Charisme naturel et présence physique",
                "Technique solide utilisée avec souplesse"
            ],
            "vigilance": [
                "Risque de s'ennuyer dans les moments calmes",
                "Peut négliger la planification",
                "Tendance à prendre des raccourcis"
            ],
            "ideal_environment": {
                "type_restaurant": "Brasserie à fort volume, Restaurant festif, Établissement dynamique",
                "clientele": "Clientèle vivante qui apprécie l'énergie",
                "team_size": "Équipe dynamique qui suit le rythme"
            },
            "career_advice": "Tu es fait pour les services à haute intensité où l'action ne s'arrête jamais. Développe ta patience pour les moments calmes. Ta capacité à performer sous pression est rare.",
            "famous_example": "Le serveur de brasserie parisienne qui gère 50 couverts en terrasse sans transpirer"
        },

        "ESFP": {
            "code": "ESFP",
            "title": "Le Rayon de Soleil",
            "subtitle": "Ambassadeur • Exécution • Empathie • Adaptable",
            "description": "Tu es le serveur qui transforme chaque service en fête. Tu as le don de faire sourire même le client le plus grognon. Ta spontanéité et ta générosité créent une ambiance où tout le monde se sent bien. Tu es authentique, chaleureux, et tu apportes de la joie partout où tu passes. Les clients ne viennent pas juste pour manger, ils viennent pour toi. Tu es le cœur battant de la salle. Ta bonne humeur est contagieuse et change l'énergie du restaurant.",
            "forces": [
                "Énergie communicative qui crée l'ambiance",
                "Spontanéité et authenticité désarmante",
                "Générosité naturelle avec les clients",
                "Adaptabilité exceptionnelle",
                "Technique solide au service de la relation"
            ],
            "vigilance": [
                "Risque de trop donner et de s'épuiser",
                "Peut manquer de structure dans l'organisation",
                "Tendance à se laisser distraire"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant convivial, Guinguette, Bistrot de quartier animé",
                "clientele": "Clientèle décontractée qui vient pour l'ambiance",
                "team_size": "Équipe fun et bienveillante"
            },
            "career_advice": "Tu es fait pour les restaurants où l'humain prime sur le protocole. Apprends à canaliser ton énergie pour durer. Ton authenticité est ton super-pouvoir.",
            "famous_example": "Le serveur de guinguette dont les clients deviennent des amis et qui fait danser la salle"
        },

        "ENTP": {
            "code": "ENTP",
            "title": "L'Innovateur",
            "subtitle": "Ambassadeur • Anticipation • Protocole • Adaptable",
            "description": "Tu es le serveur qui réinvente les codes du service. Tu maîtrises les règles mais tu les détournes avec intelligence. Tu es celui qui propose des améliorations de process, qui teste de nouvelles approches, qui challenge les conventions. Tu adores débattre avec les clients curieux, leur faire découvrir des associations audacieuses. Tu transformes le service en expérimentation permanente. Chaque table est une opportunité d'innover. Tu détestes la routine et tu cherches constamment à améliorer l'expérience.",
            "forces": [
                "Créativité dans l'approche du service",
                "Capacité à challenger les conventions",
                "Charisme intellectuel qui captive",
                "Vision stratégique de l'expérience client",
                "Adaptabilité et réactivité exceptionnelles"
            ],
            "vigilance": [
                "Risque de se disperser entre trop d'idées",
                "Peut négliger les basiques au profit de l'innovation",
                "Tendance à s'ennuyer de ce qui marche"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant innovant, Table expérimentale, Établissement avant-gardiste",
                "clientele": "Clientèle curieuse et ouverte à la nouveauté",
                "team_size": "Équipe créative qui ose tester"
            },
            "career_advice": "Tu es fait pour les restaurants innovants où l'expérimentation est valorisée. Apprends à finir ce que tu commences. Les meilleures innovations viennent de l'exécution.",
            "famous_example": "Le serveur qui a révolutionné le service en introduisant des concepts venus d'autres industries"
        },

        "ENFP": {
            "code": "ENFP",
            "title": "L'Enchanteur",
            "subtitle": "Ambassadeur • Anticipation • Empathie • Adaptable",
            "description": "Tu es le serveur qui voit chaque table comme une rencontre unique. Tu crées des connexions authentiques, tu improvises selon l'énergie du moment, tu transforms le service en expérience émotionnelle. Tu es spontané, chaleureux, et profondément créatif. Tu anticipes les besoins émotionnels des clients et tu t'adaptes à chaque personnalité. Les clients repartent avec bien plus qu'un repas, ils repartent avec un souvenir. Tu apportes de la magie dans l'ordinaire.",
            "forces": [
                "Créativité au service de l'expérience humaine",
                "Empathie exceptionnelle et écoute active",
                "Capacité à créer des moments uniques",
                "Charisme authentique et spontané",
                "Adaptabilité intuitive aux situations"
            ],
            "vigilance": [
                "Risque de manquer de structure et constance",
                "Peut se perdre dans la créativité",
                "Tendance à trop s'investir émotionnellement"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant intimiste, Table d'auteur, Établissement à forte personnalité",
                "clientele": "Clientèle bohème et ouverte qui valorise l'authenticité",
                "team_size": "Petite équipe créative et bienveillante"
            },
            "career_advice": "Tu es fait pour créer des expériences uniques, pas pour le volume. Apprends à structurer ta créativité. Ton authenticité est ton trésor le plus précieux.",
            "famous_example": "Le serveur de petit restaurant qui crée une ambiance unique et dont les clients pleurent le dernier soir"
        },

        "ISTJ": {
            "code": "ISTJ",
            "title": "Le Roc",
            "subtitle": "Efficace • Exécution • Protocole • Rigoureux",
            "description": "Tu es le serveur sur qui on peut compter les yeux fermés. Tu maîtrises chaque protocole à la perfection, tu connais chaque détail de la carte, et ton service est d'une régularité absolue. Tu préfères la précision à la performance, la constance au spectacle. Tu es celui qui produit le même service impeccable jour après jour sans jamais faiblir. Ta rigueur et ta fiabilité font de toi un pilier indispensable. Tu ne brilles pas par le show mais par l'excellence technique pure.",
            "forces": [
                "Maîtrise technique absolue du service",
                "Fiabilité et constance sans faille",
                "Organisation méthodique du rang",
                "Respect strict des standards",
                "Efficacité tranquille et sans stress"
            ],
            "vigilance": [
                "Risque de rigidité face aux demandes atypiques",
                "Peut manquer de chaleur avec les clients",
                "Tendance à résister aux changements"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant gastronomique classique, Établissement traditionnel, Table institutionnelle",
                "clientele": "Clientèle exigeante qui valorise la perfection technique",
                "team_size": "Équipe structurée avec des process clairs"
            },
            "career_advice": "Tu es fait pour les environnements où la constance et la qualité sont non-négociables. Développe ton aisance sociale. Ta fiabilité est une denrée rare.",
            "famous_example": "Le serveur du Grand Véfour qui fait le même service parfait depuis 20 ans"
        },

        "ISFJ": {
            "code": "ISFJ",
            "title": "Le Gardien Discret",
            "subtitle": "Efficace • Exécution • Empathie • Rigoureux",
            "description": "Tu es le serveur discret qui remarque tout et qui prend soin de chacun. Tu connais les préférences de tes habitués par cœur, tu anticipes leurs besoins en silence, et chaque détail de ton service est pensé. Tu es celui qui se souvient que Madame Dupont préfère sa carafe d'eau sans glaçons. Ta force c'est ta constance bienveillante. Tu crées une bulle de confort et de perfection autour de tes clients sans jamais forcer l'attention. Tu es l'ombre protectrice.",
            "forces": [
                "Attention aux détails exceptionnelle",
                "Mémoire client incroyable",
                "Bienveillance discrète et efficace",
                "Technique irréprochable et constante",
                "Loyauté et dévouement au service"
            ],
            "vigilance": [
                "Risque de s'oublier à force de servir",
                "Difficulté à s'affirmer face aux clients difficiles",
                "Peut résister aux changements bénéfiques"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant de palace, Table intimiste, Club privé",
                "clientele": "Clientèle d'habitués exigeants qui valorise le service personnalisé",
                "team_size": "Petite équipe stable et bienveillante"
            },
            "career_advice": "Tu es fait pour les restaurants où la relation client long terme compte. Apprends à te faire respecter autant que tu respectes. Ta discrétion est une force.",
            "famous_example": "Le serveur de club privé que trois générations de la même famille réclament"
        },

        "INTJ": {
            "code": "INTJ",
            "title": "L'Architecte du Service",
            "subtitle": "Efficace • Anticipation • Protocole • Rigoureux",
            "description": "Tu es le serveur scientifique qui décortique chaque aspect du service. Tu n'exécutes pas, tu construis des systèmes d'excellence. Tu analyses les flux, tu optimises chaque geste, tu anticipes avec une précision chirurgicale. Tu es celui qui a cartographié mentalement chaque table, chaque timing, chaque interaction possible. Tu vois le service comme une science à maîtriser. Ta quête de la perfection rationnelle est inébranlable. Tu travailles dans l'ombre mais ton impact est immense.",
            "forces": [
                "Vision stratégique du service",
                "Anticipation analytique exceptionnelle",
                "Rigueur méthodologique dans l'exécution",
                "Indépendance et autonomie totales",
                "Excellence technique poussée à l'extrême"
            ],
            "vigilance": [
                "Risque de sur-intellectualiser le service",
                "Peut manquer de chaleur humaine",
                "Tendance à s'isoler dans sa quête de perfection"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant gastronomique étoilé, Table d'exception, Établissement ultra-premium",
                "clientele": "Clientèle exigeante qui valorise l'excellence absolue",
                "team_size": "Petite équipe autonome et rigoureuse"
            },
            "career_advice": "Tu es fait pour repousser les limites du service. Apprends à vulgariser ton expertise. Les meilleures innovations techniques doivent aussi émouvoir.",
            "famous_example": "Le Chef de rang qui a écrit le manuel de service parfait utilisé dans toutes les écoles hôtelières"
        },

        "INFJ": {
            "code": "INFJ",
            "title": "Le Guide Silencieux",
            "subtitle": "Efficace • Anticipation • Empathie • Rigoureux",
            "description": "Tu es le serveur philosophe qui transforme le service en art subtil. Tu anticipes les besoins émotionnels profonds des clients, tu lis entre les lignes, tu crées une expérience chargée de sens. Tu combines vision artistique, exécution méticuleuse et empathie rare. Tu es celui qui comprend ce dont les gens ont vraiment besoin avant qu'ils ne le sachent eux-mêmes. Tu transforms la salle en espace de paix et d'élévation. Ton service est une méditation.",
            "forces": [
                "Profondeur d'anticipation unique",
                "Empathie exceptionnelle et intuition des besoins",
                "Excellence technique au service du sens",
                "Rigueur dans l'exécution de ta vision",
                "Capacité à créer des expériences transformatrices"
            ],
            "vigilance": [
                "Risque de burn-out par sur-investissement émotionnel",
                "Peut être trop perfectionniste",
                "Tendance à s'isoler pour protéger son énergie"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant conceptuel intimiste, Table d'auteur, Établissement spirituel",
                "clientele": "Clientèle en quête de profondeur et d'authenticité",
                "team_size": "Petite équipe alignée sur des valeurs communes"
            },
            "career_advice": "Tu es fait pour créer des expériences qui touchent l'âme. Apprends à protéger ton énergie émotionnelle. Ta capacité à donner du sens est un don rare.",
            "famous_example": "Le serveur de restaurant zen dont les clients repartent transformés et apaisés"
        },

        "ISTP": {
            "code": "ISTP",
            "title": "Le Craftsman Silencieux",
            "subtitle": "Efficace • Exécution • Protocole • Adaptable",
            "description": "Tu es le serveur artisan qui maîtrise son craft avec une aisance naturelle. Tu n'as pas besoin de parler, tes gestes parlent pour toi. Tu es celui qui fait un service parfait avec une économie de mouvements impressionnante, qui résout les problèmes techniques en un coup d'œil, qui improvise des solutions brillantes sous pression. Tu vis dans l'action, pas dans les mots. Ta technique est fluide, intuitive, et redoutablement efficace. Le silence du professionnel absolu.",
            "forces": [
                "Maîtrise technique intuitive et fluide",
                "Résolution de problèmes pragmatique",
                "Sang-froid absolu sous pression",
                "Adaptabilité instantanée",
                "Efficacité maximale sans effort apparent"
            ],
            "vigilance": [
                "Risque de sous-communiquer avec l'équipe",
                "Peut manquer d'engagement émotionnel",
                "Tendance à s'ennuyer dans la routine"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant à forte technicité, Table gastronomique exigeante, Établissement premium",
                "clientele": "Clientèle qui valorise la maîtrise technique",
                "team_size": "Équipe autonome et compétente"
            },
            "career_advice": "Tu es fait pour les environnements techniques où l'excellence silencieuse est valorisée. Développe ta communication. Ta maîtrise est un art.",
            "famous_example": "Le serveur japonais qui fait un service parfait en 90 secondes sans jamais parler"
        },

        "ISFP": {
            "code": "ISFP",
            "title": "L'Artisan Sensible",
            "subtitle": "Efficace • Exécution • Empathie • Adaptable",
            "description": "Tu es le serveur artiste qui crée dans le silence et l'authenticité. Chaque geste de ton service est une expression de ton âme. Tu privilégies la justesse, l'harmonie, la beauté dans les détails. Tu n'es pas là pour le show mais pour créer du confort et de la beauté. Tu es celui qui sent intuitivement ce dont le client a besoin et qui s'adapte en conséquence. Ta douceur et ta sincérité touchent profondément ceux qui savent voir. Tu es l'ombre bienveillante.",
            "forces": [
                "Sensibilité esthétique exceptionnelle",
                "Authenticité et humilité dans le service",
                "Empathie naturelle et non-verbale",
                "Attention aux détails sensoriels",
                "Adaptabilité fluide et discrète"
            ],
            "vigilance": [
                "Risque de ne pas s'affirmer assez",
                "Peut être trop sensible aux critiques",
                "Tendance à éviter les conflits nécessaires"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant intimiste, Table bohème, Établissement artistique",
                "clientele": "Clientèle sensible qui valorise l'authenticité",
                "team_size": "Petite équipe bienveillante et respectueuse"
            },
            "career_advice": "Tu es fait pour les restaurants où l'humain et l'authenticité priment. Apprends à te faire entendre sans trahir ta nature. Ta sensibilité est ta signature.",
            "famous_example": "Le serveur de petit restaurant d'auteur qui crée une bulle de douceur et dont les habitués sont des disciples"
        },

        "INTP": {
            "code": "INTP",
            "title": "L'Analyste",
            "subtitle": "Efficace • Anticipation • Protocole • Adaptable",
            "description": "Tu es le serveur chercheur qui déconstruit le service pour le comprendre. Tu ne suis pas les protocoles, tu les analyses, tu les questionnes, tu les réinventes par la logique. Tu es celui qui observe les patterns de comportement clients, qui teste des hypothèses sur les timings, qui voit le service comme un puzzle intellectuel. Ta curiosité insatiable te pousse à comprendre le pourquoi de chaque geste. Tu travailles dans ta tête autant que dans tes mains.",
            "forces": [
                "Curiosité intellectuelle appliquée au service",
                "Capacité d'analyse et de déconstruction",
                "Innovation par la logique",
                "Indépendance d'esprit totale",
                "Résolution de problèmes complexes"
            ],
            "vigilance": [
                "Risque de se perdre dans la théorie",
                "Peut manquer de structure dans l'exécution",
                "Tendance à négliger l'aspect émotionnel"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant innovant, Table expérimentale, Établissement conceptuel",
                "clientele": "Clientèle curieuse et ouverte aux concepts",
                "team_size": "Petite équipe de réflexion"
            },
            "career_advice": "Tu es fait pour repousser les frontières conceptuelles du service. Apprends à finir tes projets et à les rendre accessibles. L'innovation sans application reste théorique.",
            "famous_example": "Le serveur qui a écrit une thèse sur la psychologie du service et révolutionné la formation"
        },

        "INFP": {
            "code": "INFP",
            "title": "Le Rêveur Bienveillant",
            "subtitle": "Efficace • Anticipation • Empathie • Adaptable",
            "description": "Tu es le serveur poète qui transforme chaque service en acte de générosité. Tu sers guidé par tes valeurs profondes et ton idéal d'hospitalité. Tu es celui qui crée une bulle de douceur pour chaque client, qui cherche à toucher les cœurs plus qu'à impressionner. Tu travailles dans ton monde intérieur riche et tu partages ta vision avec une humilité désarmante. Ta sensibilité profonde et ton authenticité créent des moments magiques pour ceux qui savent les voir. Tu es la conscience bienveillante de la salle.",
            "forces": [
                "Authenticité et intégrité absolues",
                "Empathie intuitive exceptionnelle",
                "Capacité à créer des moments émotionnels uniques",
                "Vision idéaliste du service qui inspire",
                "Adaptabilité guidée par les valeurs"
            ],
            "vigilance": [
                "Risque de manquer de structure et constance",
                "Peut être trop sensible aux environnements négatifs",
                "Tendance à se perdre dans l'idéal"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant intimiste à forte âme, Table bohème, Établissement à valeurs",
                "clientele": "Clientèle sensible qui cherche l'authenticité",
                "team_size": "Très petite équipe alignée sur des valeurs communes"
            },
            "career_advice": "Tu es fait pour créer des expériences qui touchent l'âme, pas pour le volume. Trouve un environnement qui respecte ta sensibilité. Ton authenticité est ton don.",
            "famous_example": "Le serveur de petit restaurant végétarien dont les clients parlent encore 10 ans après avoir quitté la ville"
        }
    }
};
