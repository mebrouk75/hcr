export const MBTI_CHEF_DE_RANG_DATA = {
    "meta": {
        "role_target": "CHEF_DE_RANG",
        "total_questions": 60,
        "structure": "4 Dimensions x 15 Questions",
        "estimated_time": "12-15 minutes",
        "scoring_type": "MBTI_DICHOTOMOUS",
        "total_profiles": 16
    },

    "dimensions": {
        "EI": {
            "name": "LEADERSHIP RELATIONNEL",
            "pole_E": "Capitaine - Extraverti",
            "pole_I": "Maestro - Introverti",
            "description": "Comment le chef de rang tire son énergie et dirige son rang"
        },
        "SN": {
            "name": "GESTION DU SERVICE",
            "pole_S": "Précision - Sensation",
            "pole_N": "Orchestration - Intuition",
            "description": "Comment le chef de rang perçoit et organise le service"
        },
        "TF": {
            "name": "STYLE DE MANAGEMENT",
            "pole_T": "Autorité - Thinking",
            "pole_F": "Inspiration - Feeling",
            "description": "Comment le chef de rang gère son équipe et prend ses décisions"
        },
        "JP": {
            "name": "APPROCHE DU SERVICE",
            "pole_J": "Contrôle - Judging",
            "pole_P": "Fluidité - Perceiving",
            "description": "Comment le chef de rang structure et adapte son service"
        }
    },

    "scoring_rules": {
        "method": "MAJORITY_PER_DIMENSION",
        "description": "Pour chaque dimension (E/I, S/N, T/F, J/P), compter le nombre de réponses pour chaque pôle. La lettre majoritaire est retenue. Assembler les 4 lettres pour obtenir le code MBTI final (ex: ENTJ).",
        "example": {
            "dimension_EI": {
                "E_count": 11,
                "I_count": 4,
                "result": "E"
            },
            "dimension_SN": {
                "S_count": 7,
                "N_count": 8,
                "result": "N"
            },
            "dimension_TF": {
                "T_count": 9,
                "F_count": 6,
                "result": "T"
            },
            "dimension_JP": {
                "J_count": 12,
                "P_count": 3,
                "result": "J"
            },
            "final_profile": "ENTJ"
        }
    },

    "questions": [
        // --- DIMENSION 1 : EXTRAVERSION (Capitaine) vs INTROVERSION (Maestro) ---

        {
            "id": "CDR_EI_01", "dimension": "EI", "text": "Tu arrives pour ton service, ton équipe de 4 serveurs t'attend.", "options": [
                { "text": "Je fais un briefing motivant debout, je mets l'énergie dès le départ.", "val": "E" },
                { "text": "Je vérifie discrètement que tout est prêt et je donne les consignes calmement.", "val": "I" }
            ]
        },
        {
            "id": "CDR_EI_02", "dimension": "EI", "text": "Le Maître d'hôtel te demande de gérer une table VIP.", "options": [
                { "text": "J'y vais moi-même, je prends en charge la relation directe.", "val": "E" },
                { "text": "J'envoie mon meilleur serveur et je supervise de loin.", "val": "I" }
            ]
        },
        {
            "id": "CDR_EI_03", "dimension": "EI", "text": "Un client mécontent demande à parler au responsable.", "options": [
                { "text": "J'y vais direct, je gère face à face avec confiance.", "val": "E" },
                { "text": "J'observe d'abord la situation avant d'intervenir.", "val": "I" }
            ]
        },
        {
            "id": "CDR_EI_04", "dimension": "EI", "text": "Ton moment préféré du service ?", "options": [
                { "text": "Le coup de feu quand je dirige l'équipe en pleine action.", "val": "E" },
                { "text": "Le moment où tout roule parfaitement sans que j'aie à intervenir.", "val": "I" }
            ]
        },
        {
            "id": "CDR_EI_05", "dimension": "EI", "text": "Tu dois former un nouveau serveur.", "options": [
                { "text": "Je lui montre en live pendant le service, je le coache à voix haute.", "val": "E" },
                { "text": "Je lui explique calmement avant le service et je le laisse faire.", "val": "I" }
            ]
        },
        {
            "id": "CDR_EI_06", "dimension": "EI", "text": "Fin de service, débriefing avec l'équipe.", "options": [
                { "text": "Je réunis tout le monde, on discute tous ensemble de ce qui s'est passé.", "val": "E" },
                { "text": "Je fais des points individuels discrets avec ceux qui en ont besoin.", "val": "I" }
            ]
        },
        {
            "id": "CDR_EI_07", "dimension": "EI", "text": "Un serveur panique en plein rush.", "options": [
                { "text": "Je le remotivie à voix haute : 'Respire, tu gères, on y va !'", "val": "E" },
                { "text": "Je viens l'aider en silence et je prends une de ses tables.", "val": "I" }
            ]
        },
        {
            "id": "CDR_EI_08", "dimension": "EI", "text": "Pour toi, un bon chef de rang c'est...", "options": [
                { "text": "Un leader visible qui inspire l'équipe.", "val": "E" },
                { "text": "Un chef d'orchestre invisible qui fait tourner la machine.", "val": "I" }
            ]
        },
        {
            "id": "CDR_EI_09", "dimension": "EI", "text": "Salle vide, l'équipe s'ennuie.", "options": [
                { "text": "Je lance une discussion pour garder l'énergie.", "val": "E" },
                { "text": "Je les laisse souffler tranquillement.", "val": "I" }
            ]
        },
        {
            "id": "CDR_EI_10", "dimension": "EI", "text": "Un client complimente ton service devant toute la salle.", "options": [
                { "text": "Je remercie à voix haute et je valorise mon équipe publiquement.", "val": "E" },
                { "text": "Je remercie discrètement et je m'éclipse.", "val": "I" }
            ]
        },
        {
            "id": "CDR_EI_11", "dimension": "EI", "text": "La direction te demande ton avis sur le nouveau concept.", "options": [
                { "text": "J'adore donner mon avis et débattre des idées.", "val": "E" },
                { "text": "Je préfère envoyer un email réfléchi.", "val": "I" }
            ]
        },
        {
            "id": "CDR_EI_12", "dimension": "EI", "text": "Tu préfères gérer...", "options": [
                { "text": "Un grand rang de 12 tables avec une équipe de 5.", "val": "E" },
                { "text": "Un petit rang de 6 tables avec 2 serveurs d'élite.", "val": "I" }
            ]
        },
        {
            "id": "CDR_EI_13", "dimension": "EI", "text": "Un journaliste veut interviewer l'équipe.", "options": [
                { "text": "J'y vais, j'adore représenter la maison.", "val": "E" },
                { "text": "Je délègue à un serveur qui aime ça.", "val": "I" }
            ]
        },
        {
            "id": "CDR_EI_14", "dimension": "EI", "text": "L'ambiance dans ton rang idéal ?", "options": [
                { "text": "Dynamique et communicative.", "val": "E" },
                { "text": "Calme et efficace.", "val": "I" }
            ]
        },
        {
            "id": "CDR_EI_15", "dimension": "EI", "text": "Tu dois annoncer un changement de procédure.", "options": [
                { "text": "Je réunis tout le monde et j'explique en direct.", "val": "E" },
                { "text": "J'envoie une note écrite claire.", "val": "I" }
            ]
        },

        // --- DIMENSION 2 : SENSATION (Précision) vs INTUITION (Orchestration) ---

        {
            "id": "CDR_SN_01", "dimension": "SN", "text": "Avant le service, tu vérifies quoi en priorité ?", "options": [
                { "text": "Chaque détail : couverts, nappes, verres, mise en place technique.", "val": "S" },
                { "text": "L'atmosphère générale et l'état d'esprit de l'équipe.", "val": "N" }
            ]
        },
        {
            "id": "CDR_SN_02", "dimension": "SN", "text": "Un serveur te demande comment gérer une table difficile.", "options": [
                { "text": "Je lui donne des consignes précises étape par étape.", "val": "S" },
                { "text": "Je lui explique la stratégie globale et je le laisse s'adapter.", "val": "N" }
            ]
        },
        {
            "id": "CDR_SN_03", "dimension": "SN", "text": "Tu sens que le service va être compliqué ce soir.", "options": [
                { "text": "Je ne sens rien, j'attends de voir les réservations.", "val": "S" },
                { "text": "Je le sens à l'énergie de la salle et je prépare l'équipe.", "val": "N" }
            ]
        },
        {
            "id": "CDR_SN_04", "dimension": "SN", "text": "Former un nouveau serveur, tu insistes sur...", "options": [
                { "text": "Les procédures exactes et les standards techniques.", "val": "S" },
                { "text": "La philosophie du service et l'état d'esprit.", "val": "N" }
            ]
        },
        {
            "id": "CDR_SN_05", "dimension": "SN", "text": "Une table de 10 arrive sans prévenir.", "options": [
                { "text": "Je compte les chaises, je vérifie les couverts disponibles.", "val": "S" },
                { "text": "Je visualise mentalement l'impact sur le flux du service.", "val": "N" }
            ]
        },
        {
            "id": "CDR_SN_06", "dimension": "SN", "text": "Tu organises ton rang selon...", "options": [
                { "text": "Un plan de salle fixe et optimisé.", "val": "S" },
                { "text": "L'énergie du moment et les profils clients.", "val": "N" }
            ]
        },
        {
            "id": "CDR_SN_07", "dimension": "SN", "text": "Un serveur oublie un plat.", "options": [
                { "text": "Je vérifie immédiatement tous les tickets en cours.", "val": "S" },
                { "text": "Je comprends tout de suite quelle table et je gère.", "val": "N" }
            ]
        },
        {
            "id": "CDR_SN_08", "dimension": "SN", "text": "Pour toi, un service parfait c'est...", "options": [
                { "text": "Zéro erreur technique, tout est exécuté à la lettre.", "val": "S" },
                { "text": "Une expérience fluide où tout s'enchaîne naturellement.", "val": "N" }
            ]
        },
        {
            "id": "CDR_SN_09", "dimension": "SN", "text": "Le Maître d'hôtel te dit 'Adapte-toi ce soir'.", "options": [
                { "text": "Je demande des consignes précises.", "val": "S" },
                { "text": "Je comprends l'intention et j'improvise.", "val": "N" }
            ]
        },
        {
            "id": "CDR_SN_10", "dimension": "SN", "text": "Tu briefes ton équipe avant le service.", "options": [
                { "text": "Je donne les infos factuelles : réservations, allergies, spéciaux.", "val": "S" },
                { "text": "Je donne l'ambiance du soir et la stratégie globale.", "val": "N" }
            ]
        },
        {
            "id": "CDR_SN_11", "dimension": "SN", "text": "Tu regardes ton rang, tu vois quoi ?", "options": [
                { "text": "Tables 3 et 7 ont fini l'entrée, table 5 attend le pain.", "val": "S" },
                { "text": "Le flux général et les tables qui vont bientôt avoir besoin d'attention.", "val": "N" }
            ]
        },
        {
            "id": "CDR_SN_12", "dimension": "SN", "text": "Un client regarde la carte depuis 10 minutes.", "options": [
                { "text": "J'attends qu'il m'appelle, c'est la procédure.", "val": "S" },
                { "text": "Je sens qu'il a besoin d'aide et je m'approche.", "val": "N" }
            ]
        },
        {
            "id": "CDR_SN_13", "dimension": "SN", "text": "Tu dois réorganiser le plan de salle.", "options": [
                { "text": "Je calcule les distances, les rotations, l'optimisation pure.", "val": "S" },
                { "text": "Je visualise les flux et l'harmonie d'ensemble.", "val": "N" }
            ]
        },
        {
            "id": "CDR_SN_14", "dimension": "SN", "text": "Un serveur te dit 'Je sens que ça va partir en vrille'.", "options": [
                { "text": "Je demande des faits concrets.", "val": "S" },
                { "text": "Je fais confiance à son intuition et je me prépare.", "val": "N" }
            ]
        },
        {
            "id": "CDR_SN_15", "dimension": "SN", "text": "Pour améliorer le service, tu...", "options": [
                { "text": "Analyses les chiffres et les temps de service.", "val": "S" },
                { "text": "Observes l'expérience client globale.", "val": "N" }
            ]
        },

        // --- DIMENSION 3 : THINKING (Autorité) vs FEELING (Inspiration) ---

        {
            "id": "CDR_TF_01", "dimension": "TF", "text": "Un serveur arrive en retard pour la 3ème fois.", "options": [
                { "text": "Je le convoque : 'Encore une fois et c'est sanctionné.'", "val": "T" },
                { "text": "Je lui demande ce qui se passe dans sa vie.", "val": "F" }
            ]
        },
        {
            "id": "CDR_TF_02", "dimension": "TF", "text": "Un client insulte un de tes serveurs.", "options": [
                { "text": "Je sors le client immédiatement. Respect non-négociable.", "val": "T" },
                { "text": "Je calme la situation et je réconforte mon serveur après.", "val": "F" }
            ]
        },
        {
            "id": "CDR_TF_03", "dimension": "TF", "text": "Deux serveurs se disputent devant les clients.", "options": [
                { "text": "Je les sépare et je sanctionne : 'Jamais devant les clients.'", "val": "T" },
                { "text": "Je les prends à part pour comprendre le problème.", "val": "F" }
            ]
        },
        {
            "id": "CDR_TF_04", "dimension": "TF", "text": "Un serveur fait une erreur qui coûte cher.", "options": [
                { "text": "J'explique l'impact financier et les conséquences.", "val": "T" },
                { "text": "Je vérifie d'abord qu'il va bien avant de parler de l'erreur.", "val": "F" }
            ]
        },
        {
            "id": "CDR_TF_05", "dimension": "TF", "text": "Le Directeur change les horaires de ton équipe.", "options": [
                { "text": "Je vérifie si c'est conforme aux contrats.", "val": "T" },
                { "text": "Je défends mon équipe et leur vie personnelle.", "val": "F" }
            ]
        },
        {
            "id": "CDR_TF_06", "dimension": "TF", "text": "Un serveur pleure dans le vestiaire.", "options": [
                { "text": "Je lui demande s'il peut assurer le service ou s'il doit rentrer.", "val": "T" },
                { "text": "Je m'assois avec lui et je l'écoute.", "val": "F" }
            ]
        },
        {
            "id": "CDR_TF_07", "dimension": "TF", "text": "Distribution des pourboires.", "options": [
                { "text": "Système mathématique selon les heures.", "val": "T" },
                { "text": "Je prends en compte qui a galéré ce soir.", "val": "F" }
            ]
        },
        {
            "id": "CDR_TF_08", "dimension": "TF", "text": "Tu dois virer quelqu'un de ton équipe.", "options": [
                { "text": "Je reste pro, j'explique les faits, je coupe.", "val": "T" },
                { "text": "C'est la pire partie du job, je culpabilise pendant des jours.", "val": "F" }
            ]
        },
        {
            "id": "CDR_TF_09", "dimension": "TF", "text": "Tu préfères qu'on te respecte pour...", "options": [
                { "text": "Ta compétence et ta justesse.", "val": "T" },
                { "text": "Ton humanité et ton écoute.", "val": "F" }
            ]
        },
        {
            "id": "CDR_TF_10", "dimension": "TF", "text": "Un serveur demande un jour de congé de dernière minute.", "options": [
                { "text": "Non, les congés se demandent 2 semaines avant.", "val": "T" },
                { "text": "Je vérifie pourquoi et j'essaie de m'arranger.", "val": "F" }
            ]
        },
        {
            "id": "CDR_TF_11", "dimension": "TF", "text": "Le service a été catastrophique ce soir.", "options": [
                { "text": "Je débriefe froidement les erreurs pour qu'elles ne se reproduisent pas.", "val": "T" },
                { "text": "Je remonte le moral de l'équipe avant de parler des problèmes.", "val": "F" }
            ]
        },
        {
            "id": "CDR_TF_12", "dimension": "TF", "text": "Un serveur est lent mais gentil.", "options": [
                { "text": "La performance prime, je le recadre ou je le change de poste.", "val": "T" },
                { "text": "Je le garde et je compense avec le reste de l'équipe.", "val": "F" }
            ]
        },
        {
            "id": "CDR_TF_13", "dimension": "TF", "text": "Conflit entre toi et le Chef de cuisine.", "options": [
                { "text": "Je pose les faits et je défends mon point avec des arguments.", "val": "T" },
                { "text": "J'essaie de trouver un terrain d'entente pour apaiser.", "val": "F" }
            ]
        },
        {
            "id": "CDR_TF_14", "dimension": "TF", "text": "Un serveur te reproche d'être trop dur.", "options": [
                { "text": "Je maintiens mes standards, c'est mon job.", "val": "T" },
                { "text": "Je remets en question ma façon de faire.", "val": "F" }
            ]
        },
        {
            "id": "CDR_TF_15", "dimension": "TF", "text": "L'équipe te demande ton soutien face à la direction.", "options": [
                { "text": "Je regarde les faits avant de prendre position.", "val": "T" },
                { "text": "Je défends toujours mon équipe d'abord.", "val": "F" }
            ]
        },

        // --- DIMENSION 4 : JUDGING (Contrôle) vs PERCEIVING (Fluidité) ---

        {
            "id": "CDR_JP_01", "dimension": "JP", "text": "Ta check-list de mise en place.", "options": [
                { "text": "70 points à vérifier avant d'ouvrir, jamais d'exception.", "val": "J" },
                { "text": "Je connais les essentiels, je m'adapte selon le soir.", "val": "P" }
            ]
        },
        {
            "id": "CDR_JP_02", "dimension": "JP", "text": "Le plan de salle est chamboulé à la dernière minute.", "options": [
                { "text": "Ça me stresse, j'avais tout organisé.", "val": "J" },
                { "text": "Pas grave, je réorganise à la volée.", "val": "P" }
            ]
        },
        {
            "id": "CDR_JP_03", "dimension": "JP", "text": "Un serveur improvise une technique de service.", "options": [
                { "text": "Non, on suit les protocoles établis.", "val": "J" },
                { "text": "Si ça marche mieux, pourquoi pas.", "val": "P" }
            ]
        },
        {
            "id": "CDR_JP_04", "dimension": "JP", "text": "Organisation de ton rang.", "options": [
                { "text": "Chaque serveur a sa zone fixe, pas de changement.", "val": "J" },
                { "text": "On se répartit les tables selon qui est disponible.", "val": "P" }
            ]
        },
        {
            "id": "CDR_JP_05", "dimension": "JP", "text": "Le timing du service.", "options": [
                { "text": "Entrée à 20h15, plat à 20h45, dessert à 21h30. Chrono.", "val": "J" },
                { "text": "On s'adapte au rythme de chaque table.", "val": "P" }
            ]
        },
        {
            "id": "CDR_JP_06", "dimension": "JP", "text": "Un client demande un plat hors timing.", "options": [
                { "text": "Désolé, on ne sert plus les entrées après 21h.", "val": "J" },
                { "text": "Je vois avec la cuisine si c'est possible.", "val": "P" }
            ]
        },
        {
            "id": "CDR_JP_07", "dimension": "JP", "text": "L'ordre de tes priorités en rush.", "options": [
                { "text": "Liste mentale stricte que je déroule point par point.", "val": "J" },
                { "text": "Je jongle entre tout en fonction de l'urgence du moment.", "val": "P" }
            ]
        },
        {
            "id": "CDR_JP_08", "dimension": "JP", "text": "Ton plan de carrière.", "options": [
                { "text": "Dans 2 ans Maître d'hôtel, dans 5 ans Directeur de salle.", "val": "J" },
                { "text": "Je verrai selon les opportunités.", "val": "P" }
            ]
        },
        {
            "id": "CDR_JP_09", "dimension": "JP", "text": "Les procédures de service.", "options": [
                { "text": "À respecter à la lettre, c'est ce qui fait la constance.", "val": "J" },
                { "text": "Ce sont des guides, on adapte selon le contexte.", "val": "P" }
            ]
        },
        {
            "id": "CDR_JP_10", "dimension": "JP", "text": "On te propose une promotion dans un autre restaurant.", "options": [
                { "text": "Je réfléchis 2 semaines, j'évalue tout.", "val": "J" },
                { "text": "Si le feeling est bon, je fonce.", "val": "P" }
            ]
        },
        {
            "id": "CDR_JP_11", "dimension": "JP", "text": "Gestion des imprévus.", "options": [
                { "text": "J'ai des plans B, C, D pour chaque scénario.", "val": "J" },
                { "text": "Je gère au moment M, c'est plus efficace.", "val": "P" }
            ]
        },
        {
            "id": "CDR_JP_12", "dimension": "JP", "text": "Si le service d'avant a mal préparé ton rang...", "options": [
                { "text": "Je refais tout avant d'ouvrir, même si ça me met en retard.", "val": "J" },
                { "text": "Je corrige l'essentiel et je m'adapte.", "val": "P" }
            ]
        },
        {
            "id": "CDR_JP_13", "dimension": "JP", "text": "Les réservations.", "options": [
                { "text": "Système strict, aucune exception.", "val": "J" },
                { "text": "On peut toujours trouver une solution.", "val": "P" }
            ]
        },
        {
            "id": "CDR_JP_14", "dimension": "JP", "text": "La routine.", "options": [
                { "text": "Me rassure et me permet d'être excellent.", "val": "J" },
                { "text": "M'ennuie et me dévitalise.", "val": "P" }
            ]
        },
        {
            "id": "CDR_JP_15", "dimension": "JP", "text": "Ton rang idéal.", "options": [
                { "text": "Parfaitement organisé et prévisible.", "val": "J" },
                { "text": "Dynamique et changeant.", "val": "P" }
            ]
        }
    ],

    "profiles": {
        "ESTJ": {
            "code": "ESTJ",
            "title": "Le Général",
            "subtitle": "Capitaine • Précision • Autorité • Contrôle",
            "description": "Tu es le chef de rang qui dirige son rang comme un général dirige son régiment. Aucun détail ne t'échappe, chaque serveur connaît sa mission, et ton autorité naturelle impose le respect. Tu combines présence charismatique et rigueur militaire. Tu es celui qui peut gérer 15 tables en rush sans transpirer, qui forme des équipes disciplinées, et qui transforme le chaos en ballet organisé. Les directions t'adorent car tu es fiable à 100% et tu fais tourner la salle avec une efficacité redoutable. Tu es le pilier sur lequel tout repose.",
            "forces": [
                "Leadership naturel et autorité assumée",
                "Organisation militaire du service",
                "Capacité à gérer de grandes équipes",
                "Fiabilité absolue même sous pression",
                "Excellence technique et respect des standards"
            ],
            "vigilance": [
                "Risque de rigidité face aux situations atypiques",
                "Peut manquer de souplesse avec l'équipe",
                "Tendance à imposer ta méthode sans écouter"
            ],
            "ideal_environment": {
                "type_restaurant": "Palace, Restaurant gastronomique étoilé, Grand hôtel international",
                "clientele": "Clientèle exigeante et institutionnelle",
                "team_size": "Grande équipe (6-12 serveurs) nécessitant structure forte"
            },
            "career_advice": "Tu es fait pour devenir Maître d'hôtel puis Directeur de salle rapidement. Développe ton empathie pour équilibrer ton autorité. Les meilleurs généraux savent aussi écouter leurs troupes.",
            "famous_example": "Le Chef de rang du Plaza Athénée qui gère 20 couverts simultanés sans jamais perdre le contrôle"
        },

        "ESFJ": {
            "code": "ESFJ",
            "title": "Le Capitaine Bienveillant",
            "subtitle": "Capitaine • Précision • Inspiration • Contrôle",
            "description": "Tu es le chef de rang qui dirige avec la tête et le cœur. Tu connais chaque membre de ton équipe par cœur, leurs forces, leurs fragilités, leurs histoires personnelles. Tu combines rigueur technique et bienveillance authentique. Tu es celui qui crée une équipe soudée où chacun donne le meilleur de lui-même par loyauté envers toi. Les clients adorent ton professionnalisme chaleureux, et ton équipe te suivrait les yeux fermés. Tu transforms le service en expérience familiale et performante.",
            "forces": [
                "Leadership bienveillant qui fédère",
                "Excellence technique irréprochable",
                "Capacité à créer une équipe loyale et soudée",
                "Relation client exceptionnelle",
                "Organisation rigoureuse avec humanité"
            ],
            "vigilance": [
                "Risque de burn-out à force de trop donner",
                "Difficulté à sanctionner même quand nécessaire",
                "Peut prendre les critiques trop personnellement"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant gastronomique familial, Table étoilée à taille humaine, Établissement de tradition",
                "clientele": "Clientèle d'habitués fidèles",
                "team_size": "Équipe moyenne stable (4-8 serveurs)"
            },
            "career_advice": "Tu es fait pour les restaurants où la fidélisation (clients ET équipe) est clé. Apprends à te protéger émotionnellement sans perdre ton humanité. Ta capacité à créer du lien est ton trésor.",
            "famous_example": "Le Chef de rang de maison familiale étoilée dont l'équipe ne part jamais et dont les clients reviennent depuis 20 ans"
        },

        "ENTJ": {
            "code": "ENTJ",
            "title": "Le Stratège de Guerre",
            "subtitle": "Capitaine • Orchestration • Autorité • Contrôle",
            "description": "Tu es le chef de rang visionnaire qui voit dix coups d'avance. Tu ne gères pas un service, tu orchestres une stratégie. Tu anticipes les besoins avant qu'ils n'émergent, tu optimises chaque flux, tu proposes des révolutions de process. Tu combines charisme naturel, intelligence stratégique et exécution implacable. Tu es celui qui calcule mentalement comment augmenter le CA de 20% en réorganisant les rotations de tables. Les directions te voient déjà comme leur futur Directeur. Tu imposes le respect par ta vision et ton efficacité.",
            "forces": [
                "Vision stratégique exceptionnelle du service",
                "Anticipation et planification de haut niveau",
                "Leadership inspirant et ambitieux",
                "Capacité à révolutionner les process",
                "Charisme naturel qui rassure clients et équipe"
            ],
            "vigilance": [
                "Risque d'impatience avec les moins rapides",
                "Peut négliger l'humain au profit de l'efficacité",
                "Tendance à vouloir tout contrôler et optimiser"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant gastronomique ambitieux, Groupe en expansion, Établissement innovant",
                "clientele": "Clientèle exigeante qui valorise l'excellence",
                "team_size": "Grande équipe performante à faire grandir"
            },
            "career_advice": "Tu es fait pour diriger des salles prestigieuses ou créer des concepts révolutionnaires. Développe ton intelligence émotionnelle. Les meilleurs stratèges savent aussi inspirer.",
            "famous_example": "Le Chef de rang devenu Directeur de salle à 28 ans qui a doublé le CA et révolutionné le service"
        },

        "ENFJ": {
            "code": "ENFJ",
            "title": "Le Leader Inspirant",
            "subtitle": "Capitaine • Orchestration • Inspiration • Contrôle",
            "description": "Tu es le chef de rang qui élève le service au rang de mission collective. Tu anticipes les émotions de ton équipe et des clients, tu crées une vision commune qui inspire, tu transforms chaque service en performance d'équipe mémorable. Tu fédères par ton charisme et ton authenticité. Tu es celui qui donne du sens au métier et qui fait grandir chaque membre de ton équipe. Les clients se souviennent de l'expérience, ton équipe parle de toi comme d'un mentor. Tu changes la vie des gens.",
            "forces": [
                "Charisme exceptionnel et empathie profonde",
                "Anticipation intuitive des besoins émotionnels",
                "Capacité à créer une vision inspirante",
                "Leadership qui fait grandir les autres",
                "Excellence technique au service de l'humain"
            ],
            "vigilance": [
                "Risque de se perdre dans la vision au détriment de l'exécution",
                "Peut trop s'investir émotionnellement",
                "Tendance à vouloir sauver tout le monde"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant d'exception à forte identité, Table expérientielle, Établissement à mission",
                "clientele": "Clientèle en quête d'expérience transformatrice",
                "team_size": "Équipe passionnée qui partage ta vision"
            },
            "career_advice": "Tu es fait pour créer des concepts uniques ou former la prochaine génération. Apprends à déléguer l'opérationnel. Ton impact se mesure en vies transformées.",
            "famous_example": "Le Chef de rang devenu formateur star dont les anciens collaborateurs sont tous devenus excellents"
        },

        "ESTP": {
            "code": "ESTP",
            "title": "Le Guerrier",
            "subtitle": "Capitaine • Précision • Autorité • Fluidité",
            "description": "Tu es le chef de rang qui excelle dans le feu de l'action. Tu diriges ton équipe avec un mélange de charisme naturel et d'autorité pragmatique. L'adrénaline du rush, c'est ton carburant. Tu es celui qui peut sauver un service catastrophique par ta réactivité et ton sang-froid. Tu maîtrises la technique mais tu la détournes avec style. Tu vis dans l'instant présent et tu prends les meilleures décisions sous pression. Ton équipe te suit parce que tu es crédible dans l'action.",
            "forces": [
                "Réactivité impressionnante sous pression",
                "Leadership pragmatique et crédible",
                "Sang-froid inébranlable en rush",
                "Charisme naturel et présence physique",
                "Capacité à improviser avec excellence"
            ],
            "vigilance": [
                "Risque de s'ennuyer dans les moments calmes",
                "Peut négliger la planification stratégique",
                "Tendance à prendre des raccourcis"
            ],
            "ideal_environment": {
                "type_restaurant": "Brasserie à fort volume, Restaurant festif, Établissement à haute intensité",
                "clientele": "Clientèle dynamique et exigeante",
                "team_size": "Équipe solide qui suit le rythme"
            },
            "career_advice": "Tu es fait pour les services à haute intensité où chaque soir est un combat. Développe ta vision long terme. Ta capacité à performer sous feu est exceptionnelle.",
            "famous_example": "Le Chef de rang de brasserie parisienne qui gère 80 couverts en rush avec une équipe de 6"
        },

        "ESFP": {
            "code": "ESFP",
            "title": "Le Capitaine Joyeux",
            "subtitle": "Capitaine • Précision • Inspiration • Fluidité",
            "description": "Tu es le chef de rang qui transforme chaque service en célébration. Tu diriges avec ton cœur et ton énergie contagieuse. Ton équipe t'adore parce que tu es authentique, généreux, et que tu sais créer une ambiance où le travail devient plaisir. Les clients adorent ton professionnalisme chaleureux. Tu combines rigueur technique et spontanéité joyeuse. Tu es celui qui remonte le moral de toute la salle juste par ta présence. Le service avec toi n'est jamais une corvée.",
            "forces": [
                "Énergie communicative qui motive l'équipe",
                "Spontanéité et authenticité désarmante",
                "Leadership par l'exemple et la joie",
                "Excellence technique avec légèreté",
                "Adaptabilité exceptionnelle"
            ],
            "vigilance": [
                "Risque de trop donner et de s'épuiser",
                "Peut manquer de structure dans l'organisation",
                "Tendance à éviter les conflits nécessaires"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant convivial haut de gamme, Brasserie familiale, Établissement festif",
                "clientele": "Clientèle qui vient pour l'expérience et l'ambiance",
                "team_size": "Équipe soudée et bienveillante"
            },
            "career_advice": "Tu es fait pour les restaurants où l'humain et la joie priment. Apprends à structurer sans perdre ta spontanéité. Ton authenticité est ton super-pouvoir.",
            "famous_example": "Le Chef de rang de restaurant de quartier dont toute la salle connaît le nom et l'équipe ne veut jamais partir"
        },

        "ENTP": {
            "code": "ENTP",
            "title": "Le Révolutionnaire",
            "subtitle": "Capitaine • Orchestration • Autorité • Fluidité",
            "description": "Tu es le chef de rang qui réinvente les codes du service en permanence. Tu maîtrises les règles mais tu les challenges avec intelligence. Tu es celui qui propose des innovations audacieuses, qui teste de nouvelles approches, qui transforme le service en laboratoire d'excellence. Tu diriges par l'exemple et le défi intellectuel. Ton équipe te suit parce que tu les pousse à dépasser les conventions. Tu détestes la routine et tu cherches constamment la prochaine révolution.",
            "forces": [
                "Créativité dans l'approche du leadership",
                "Capacité à challenger et innover",
                "Charisme intellectuel qui captive",
                "Vision stratégique disruptive",
                "Adaptabilité et réactivité exceptionnelles"
            ],
            "vigilance": [
                "Risque de se disperser entre trop de projets",
                "Peut négliger les basiques au profit de l'innovation",
                "Tendance à s'ennuyer de ce qui marche"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant innovant, Concept expérimental, Établissement avant-gardiste",
                "clientele": "Clientèle curieuse et ouverte à la nouveauté",
                "team_size": "Équipe créative qui ose prendre des risques"
            },
            "career_advice": "Tu es fait pour révolutionner l'industrie ou créer des concepts disruptifs. Apprends à finir ce que tu commences. Les meilleures révolutions viennent de l'exécution.",
            "famous_example": "Le Chef de rang qui a importé des techniques de service asiatiques et révolutionné la scène parisienne"
        },

        "ENFP": {
            "code": "ENFP",
            "title": "L'Inspirateur",
            "subtitle": "Capitaine • Orchestration • Inspiration • Fluidité",
            "description": "Tu es le chef de rang qui voit chaque service comme une aventure collective unique. Tu diriges avec ton cœur, ton intuition, et ta capacité à inspirer. Tu crées des connexions authentiques avec ton équipe et tes clients. Tu anticipes les besoins émotionnels et tu t'adaptes à chaque personnalité. Tu es spontané, créatif, et profondément humain. Ton équipe te suit par amour du métier que tu leur transmets. Tu transformes le service en expérience émotionnelle et collaborative.",
            "forces": [
                "Créativité au service du leadership",
                "Empathie exceptionnelle avec l'équipe",
                "Capacité à créer des moments uniques",
                "Charisme authentique et inspirant",
                "Adaptabilité intuitive exceptionnelle"
            ],
            "vigilance": [
                "Risque de manquer de structure opérationnelle",
                "Peut se perdre dans la créativité",
                "Tendance à trop s'investir émotionnellement"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant intimiste à forte personnalité, Table d'auteur, Établissement bohème chic",
                "clientele": "Clientèle sensible qui valorise l'authenticité",
                "team_size": "Petite équipe créative et passionnée"
            },
            "career_advice": "Tu es fait pour créer des expériences uniques qui marquent. Apprends à structurer ta créativité. Ton authenticité et ton inspiration sont tes trésors.",
            "famous_example": "Le Chef de rang de restaurant conceptuel dont l'équipe pleure le dernier jour et les clients deviennent amis"
        },

        "ISTJ": {
            "code": "ISTJ",
            "title": "Le Pilier",
            "subtitle": "Maestro • Précision • Autorité • Contrôle",
            "description": "Tu es le chef de rang sur qui on peut compter les yeux fermés. Tu diriges dans l'ombre avec une rigueur absolue. Chaque protocole est maîtrisé, chaque détail est contrôlé, ton service est d'une régularité parfaite. Tu préfères la précision au show, la constance à l'improvisation. Tu es celui qui produit le même service impeccable jour après jour pendant des années. Ta fiabilité et ton excellence technique font de toi un pilier indispensable. Tu diriges par l'exemple silencieux.",
            "forces": [
                "Maîtrise technique absolue",
                "Fiabilité et constance sans faille",
                "Organisation méthodique parfaite",
                "Respect strict des standards d'excellence",
                "Leadership par l'exemple et la rigueur"
            ],
            "vigilance": [
                "Risque de rigidité face aux situations atypiques",
                "Peut manquer de chaleur dans le management",
                "Tendance à résister aux changements"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant gastronomique classique, Palace traditionnel, Maison de prestige",
                "clientele": "Clientèle exigeante qui valorise la perfection technique",
                "team_size": "Équipe structurée avec des process clairs"
            },
            "career_advice": "Tu es fait pour les maisons de prestige où la constance est non-négociable. Développe ton aisance relationnelle. Ta fiabilité est une denrée extrêmement rare.",
            "famous_example": "Le Chef de rang du Ritz qui fait le même service parfait depuis 25 ans et que personne n'égalera jamais"
        },

        "ISFJ": {
            "code": "ISFJ",
            "title": "Le Gardien de l'Excellence",
            "subtitle": "Maestro • Précision • Inspiration • Contrôle",
            "description": "Tu es le chef de rang discret qui prend soin de tout et de tous. Tu diriges avec bienveillance et rigueur. Tu connais chaque membre de ton équipe par cœur, tu anticipes leurs besoins, et tu crées une bulle de perfection et de sécurité. Tu es celui qui se souvient de chaque détail, qui protège son équipe des turbulences, qui maintient l'excellence par la constance et l'attention. Ta loyauté et ton dévouement sont légendaires. Tu es l'ombre protectrice qui fait briller les autres.",
            "forces": [
                "Attention aux détails exceptionnelle",
                "Bienveillance discrète et efficace",
                "Loyauté et dévouement absolus",
                "Excellence technique irréprochable",
                "Capacité à créer une équipe stable et performante"
            ],
            "vigilance": [
                "Risque de s'oublier à force de servir les autres",
                "Difficulté à s'affirmer face aux conflits",
                "Peut résister aux changements même bénéfiques"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant de palace, Maison familiale étoilée, Club privé",
                "clientele": "Clientèle d'habitués exigeants et fidèles",
                "team_size": "Équipe stable et soudée"
            },
            "career_advice": "Tu es fait pour les maisons où la relation long terme compte plus que le volume. Apprends à te faire respecter autant que tu respectes. Ta discrétion est une force.",
            "famous_example": "Le Chef de rang de club privé que trois générations de membres réclament et dont l'équipe ne part jamais"
        },

        "INTJ": {
            "code": "INTJ",
            "title": "L'Architecte",
            "subtitle": "Maestro • Orchestration • Autorité • Contrôle",
            "description": "Tu es le chef de rang scientifique qui construit des systèmes d'excellence. Tu ne diriges pas, tu architectures la perfection. Tu analyses chaque flux, tu optimises chaque geste, tu anticipes avec une précision chirurgicale. Tu es celui qui a modélisé mentalement chaque scénario possible et préparé la réponse optimale. Tu diriges par ta vision stratégique et ton expertise incontestable. Ta quête de la perfection rationnelle est inébranlable. Tu travailles dans l'ombre mais ton impact est immense.",
            "forces": [
                "Vision stratégique exceptionnelle",
                "Anticipation analytique de haut niveau",
                "Rigueur méthodologique absolue",
                "Indépendance et autonomie totales",
                "Excellence technique poussée à l'extrême"
            ],
            "vigilance": [
                "Risque de sur-intellectualiser le service",
                "Peut manquer de chaleur dans le management",
                "Tendance à s'isoler dans sa quête de perfection"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant triplement étoilé, Maison d'exception, Établissement de référence mondiale",
                "clientele": "Clientèle ultra-exigeante qui valorise l'excellence absolue",
                "team_size": "Équipe d'élite autonome et rigoureuse"
            },
            "career_advice": "Tu es fait pour repousser les limites du service et créer de nouveaux standards. Apprends à vulgariser ton expertise. Les meilleures architectures doivent aussi émouvoir.",
            "famous_example": "Le Chef de rang devenu consultant qui a écrit le manuel de service référence utilisé dans le monde entier"
        },

        "INFJ": {
            "code": "INFJ",
            "title": "Le Sage",
            "subtitle": "Maestro • Orchestration • Inspiration • Contrôle",
            "description": "Tu es le chef de rang philosophe qui transforme le service en art subtil. Tu anticipes les besoins émotionnels profonds de ton équipe et des clients. Tu diriges avec une vision claire, une exécution méticuleuse, et une empathie rare. Tu es celui qui comprend ce dont les gens ont vraiment besoin avant qu'ils ne le sachent. Tu crées une atmosphère de paix et d'élévation dans ta salle. Ton équipe te respecte profondément car tu les fais grandir. Ton service est une méditation collective.",
            "forces": [
                "Profondeur d'anticipation unique",
                "Empathie exceptionnelle et vision inspirante",
                "Excellence technique au service du sens",
                "Leadership qui transforme les personnes",
                "Capacité à créer une culture d'excellence"
            ],
            "vigilance": [
                "Risque de burn-out par sur-investissement",
                "Peut être trop perfectionniste et jamais satisfait",
                "Tendance à s'isoler pour protéger son énergie"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant conceptuel d'exception, Maison à forte identité philosophique, Table spirituelle",
                "clientele": "Clientèle en quête de profondeur et de sens",
                "team_size": "Équipe alignée sur des valeurs profondes"
            },
            "career_advice": "Tu es fait pour créer des expériences qui touchent l'âme et former la prochaine génération. Apprends à protéger ton énergie. Ta capacité à donner du sens est un don rare.",
            "famous_example": "Le Chef de rang de restaurant zen trois étoiles dont les clients et l'équipe repartent transformés"
        },

        "ISTP": {
            "code": "ISTP",
            "title": "Le Maître Silencieux",
            "subtitle": "Maestro • Précision • Autorité • Fluidité",
            "description": "Tu es le chef de rang artisan qui maîtrise son craft avec une aisance naturelle. Tu diriges en faisant, pas en parlant. Ton équipe te suit parce que ta compétence est indiscutable. Tu es celui qui résout tous les problèmes techniques en un coup d'œil, qui improvise des solutions brillantes sous pression, qui fait un service parfait avec une économie de mouvements impressionnante. Tu vis dans l'action. Ta technique est fluide, intuitive, et redoutablement efficace. Le silence du maître absolu.",
            "forces": [
                "Maîtrise technique intuitive et fluide",
                "Résolution de problèmes pragmatique",
                "Sang-froid absolu sous pression",
                "Leadership par l'exemple technique",
                "Adaptabilité instantanée"
            ],
            "vigilance": [
                "Risque de sous-communiquer avec l'équipe",
                "Peut manquer d'engagement émotionnel",
                "Tendance à s'ennuyer dans la routine administrative"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant gastronomique exigeant, Table technique de haut niveau, Établissement premium",
                "clientele": "Clientèle qui valorise la maîtrise technique",
                "team_size": "Équipe autonome et compétente"
            },
            "career_advice": "Tu es fait pour les environnements où l'excellence technique silencieuse est valorisée. Développe ta communication. Ta maîtrise est un art rare.",
            "famous_example": "Le Chef de rang japonais légendaire qui dirige par le geste parfait et que toute la profession respecte"
        },

        "ISFP": {
            "code": "ISFP",
            "title": "L'Artisan Discret",
            "subtitle": "Maestro • Précision • Inspiration • Fluidité",
            "description": "Tu es le chef de rang artiste qui crée dans le silence et l'authenticité. Tu diriges avec ton cœur et ta sensibilité. Chaque geste de ton service est pensé, chaque membre de ton équipe est compris. Tu es celui qui crée une atmosphère de beauté et de sérénité. Tu diriges par l'exemple doux et la bienveillance. Ton équipe te suit par respect profond de ton authenticité. Tu n'es pas là pour le pouvoir mais pour créer du beau. Ta présence apaise et élève.",
            "forces": [
                "Sensibilité esthétique exceptionnelle",
                "Authenticité et humilité dans le leadership",
                "Empathie naturelle avec l'équipe",
                "Excellence technique discrète",
                "Adaptabilité fluide et intuitive"
            ],
            "vigilance": [
                "Risque de ne pas s'affirmer assez face aux conflits",
                "Peut être trop sensible aux critiques",
                "Tendance à éviter l'autorité même nécessaire"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant intimiste raffiné, Table d'auteur sensible, Maison artistique",
                "clientele": "Clientèle sensible qui valorise la beauté et l'authenticité",
                "team_size": "Petite équipe soudée et respectueuse"
            },
            "career_advice": "Tu es fait pour les maisons où l'humain et la beauté priment sur le volume. Apprends à assumer ton autorité sans trahir ta nature. Ta sensibilité est ta force.",
            "famous_example": "Le Chef de rang de petit restaurant d'exception dont l'équipe ne partirait pour rien au monde"
        },

        "INTP": {
            "code": "INTP",
            "title": "Le Chercheur",
            "subtitle": "Maestro • Orchestration • Autorité • Fluidité",
            "description": "Tu es le chef de rang chercheur qui déconstruit le service pour le réinventer. Tu diriges par l'innovation logique et l'expérimentation méthodique. Tu es celui qui analyse les patterns, qui teste des hypothèses, qui voit le service comme un système complexe à optimiser. Tu diriges ton équipe en les faisant réfléchir, en questionnant les conventions. Ta curiosité insatiable te pousse à comprendre le pourquoi de chaque geste. Tu travailles dans ta tête autant que dans la salle.",
            "forces": [
                "Curiosité intellectuelle appliquée au service",
                "Capacité d'analyse et d'innovation",
                "Vision systémique du service",
                "Indépendance d'esprit totale",
                "Résolution de problèmes complexes"
            ],
            "vigilance": [
                "Risque de se perdre dans la théorie",
                "Peut manquer de structure dans le management quotidien",
                "Tendance à négliger l'aspect émotionnel de l'équipe"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant innovant, Table expérimentale, Concept avant-gardiste",
                "clientele": "Clientèle curieuse et intellectuelle",
                "team_size": "Équipe de réflexion et d'innovation"
            },
            "career_advice": "Tu es fait pour repousser les frontières conceptuelles du service. Apprends à finir tes projets et à gérer l'humain. L'innovation sans exécution reste théorique.",
            "famous_example": "Le Chef de rang qui a révolutionné la formation avec une méthode basée sur la psychologie cognitive"
        },

        "INFP": {
            "code": "INFP",
            "title": "Le Poète",
            "subtitle": "Maestro • Orchestration • Inspiration • Fluidité",
            "description": "Tu es le chef de rang poète qui transforme chaque service en acte de générosité collective. Tu diriges guidé par tes valeurs profondes et ton idéal d'hospitalité. Tu es celui qui crée une bulle de sens et de beauté pour ton équipe et tes clients. Tu diriges par l'inspiration et l'authenticité. Ton équipe te suit parce que tu leur donnes un pourquoi, pas juste un comment. Ta sensibilité profonde et ton intégrité créent une culture unique. Tu es la conscience bienveillante et inspirante de la salle.",
            "forces": [
                "Authenticité et intégrité absolues",
                "Empathie intuitive exceptionnelle",
                "Capacité à créer du sens et de l'inspiration",
                "Vision idéaliste qui transforme",
                "Leadership par les valeurs et l'exemple"
            ],
            "vigilance": [
                "Risque de manquer de structure opérationnelle",
                "Peut être trop sensible aux environnements négatifs",
                "Tendance à se perdre dans l'idéal au détriment du réel"
            ],
            "ideal_environment": {
                "type_restaurant": "Restaurant à forte âme, Maison à mission, Établissement alternatif de qualité",
                "clientele": "Clientèle sensible qui cherche l'authenticité et le sens",
                "team_size": "Petite équipe alignée sur des valeurs profondes"
            },
            "career_advice": "Tu es fait pour créer des expériences qui touchent l'âme et bâtir des équipes autour de valeurs. Trouve un environnement qui respecte ta sensibilité. Ton authenticité est ton don.",
            "famous_example": "Le Chef de rang de restaurant végétarien étoilé dont l'équipe et les clients parlent comme d'une expérience spirituelle"
        }
    }
};
