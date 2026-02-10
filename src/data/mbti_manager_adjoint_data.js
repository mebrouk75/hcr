export const MBTI_MANAGER_ADJOINT_DATA = {
    "meta": {
        "role_target": "MANAGER_ADJOINT",
        "total_questions": 60,
        "structure": "4 Dimensions x 15 Questions",
        "estimated_time": "12-15 minutes",
        "scoring_type": "MBTI_DICHOTOMOUS",
        "total_profiles": 16
    },
    "dimensions": {
        "EI": {
            "name": "POSTURE DE LEADERSHIP",
            "pole_E": "Terrain - Extraverti",
            "pole_I": "Pilotage - Introverti"
        },
        "SN": {
            "name": "FOCUS MANAGÉRIAL",
            "pole_S": "Pompier - Sensation",
            "pole_N": "Bâtisseur - Intuition"
        },
        "TF": {
            "name": "STYLE DE MANAGEMENT",
            "pole_T": "Gestionnaire - Thinking",
            "pole_F": "Coach - Feeling"
        },
        "JP": {
            "name": "GESTION DU CHAOS",
            "pole_J": "Protocole - Judging",
            "pole_P": "Système D - Perceiving"
        }
    },
    "scores": {
        "method": "MAJORITY_PER_DIMENSION",
        "description": "Pour chaque dimension (E/I, S/N, T/F, J/P), compter le nombre de réponses pour chaque pôle. La lettre majoritaire est retenue. Assembler les 4 lettres pour obtenir le code MBTI final (ex: ENTJ)."
    },

    "pretest_alert": {
        "titre": "Phase 1 : Profil Manager Adjoint",
        "sous_titre": "Le bras droit qui fait tourner la machine au quotidien.",
        "message_principal": "Cette première étape définit ton style de management opérationnel.",
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
        { "id": "MAD_EI_01", "dimension": "EI", "text": "Le Manager est absent, grosse soirée ce soir.", "options": [{ "text": "Je descends en salle, je motive l'équipe, je suis visible.", "val": "E" }, { "text": "Je pilote depuis le bureau, je surveille les chiffres et j'interviens si nécessaire.", "val": "I" }] },
        { "id": "MAD_EI_02", "dimension": "EI", "text": "Un conflit éclate entre deux chefs de rang.", "options": [{ "text": "Je les réunis tous les deux immédiatement et on règle ça ensemble.", "val": "E" }, { "text": "Je les convoque séparément pour comprendre chaque version.", "val": "I" }] },
        { "id": "MAD_EI_03", "dimension": "EI", "text": "C'est toi qui fais le briefing ce matin.", "options": [{ "text": "Je réunis tout le monde debout, je mets l'énergie, je motive.", "val": "E" }, { "text": "J'envoie un message écrit clair avec les points clés.", "val": "I" }] },
        { "id": "MAD_EI_04", "dimension": "EI", "text": "Ton rôle idéal pendant le service ?", "options": [{ "text": "En salle avec l'équipe, je donne des coups de main.", "val": "E" }, { "text": "Au bureau, je gère les indicateurs et j'anticipe.", "val": "I" }] },
        { "id": "MAD_EI_05", "dimension": "EI", "text": "Un serveur panique en plein rush.", "options": [{ "text": "Je vais le voir direct, je le remotivie à voix haute.", "val": "E" }, { "text": "Je prends discrètement une de ses tables pour le soulager.", "val": "I" }] },
        { "id": "MAD_EI_06", "dimension": "EI", "text": "Le Directeur te demande un rapport sur l'équipe.", "options": [{ "text": "Je prends rendez-vous pour en parler en face à face.", "val": "E" }, { "text": "J'envoie un rapport écrit détaillé avec les données.", "val": "I" }] },
        { "id": "MAD_EI_07", "dimension": "EI", "text": "Tu dois annoncer un changement de planning.", "options": [{ "text": "Je réunis l'équipe et j'explique en direct.", "val": "E" }, { "text": "J'affiche le nouveau planning avec une note explicative.", "val": "I" }] },
        { "id": "MAD_EI_08", "dimension": "EI", "text": "Pour toi, un bon manager adjoint c'est...", "options": [{ "text": "Quelqu'un de présent et visible qui inspire l'équipe.", "val": "E" }, { "text": "Quelqu'un qui pilote efficacement en coulisses.", "val": "I" }] },
        { "id": "MAD_EI_09", "dimension": "EI", "text": "Service calme, l'équipe s'ennuie.", "options": [{ "text": "Je descends discuter avec eux pour garder l'énergie.", "val": "E" }, { "text": "J'en profite pour avancer sur mes tâches administratives.", "val": "I" }] },
        { "id": "MAD_EI_10", "dimension": "EI", "text": "Le Directeur te félicite devant toute l'équipe.", "options": [{ "text": "Je remercie et je valorise l'équipe publiquement.", "val": "E" }, { "text": "Je remercie discrètement et je retourne à mon poste.", "val": "I" }] },
        { "id": "MAD_EI_11", "dimension": "EI", "text": "Tu dois former un nouveau chef de rang.", "options": [{ "text": "Je le forme en live pendant le service, je coache à voix haute.", "val": "E" }, { "text": "Je lui donne des documents et je le laisse observer puis je débriefe.", "val": "I" }] },
        { "id": "MAD_EI_12", "dimension": "EI", "text": "Tu préfères gérer...", "options": [{ "text": "Une grande équipe dynamique où je suis au cœur de l'action.", "val": "E" }, { "text": "Une petite équipe autonome que je pilote stratégiquement.", "val": "I" }] },
        { "id": "MAD_EI_13", "dimension": "EI", "text": "Un journaliste veut interviewer l'équipe.", "options": [{ "text": "J'y vais, j'adore représenter la maison.", "val": "E" }, { "text": "Je délègue au Manager ou à un chef de rang qui aime ça.", "val": "I" }] },
        { "id": "MAD_EI_14", "dimension": "EI", "text": "L'ambiance de travail que tu préfères ?", "options": [{ "text": "Dynamique et communicative.", "val": "E" }, { "text": "Calme et efficace.", "val": "I" }] },
        { "id": "MAD_EI_15", "dimension": "EI", "text": "Fin de service, débriefing.", "options": [{ "text": "Je réunis tout le monde, on discute ensemble de ce qui s'est passé.", "val": "E" }, { "text": "Je fais des points individuels avec ceux qui en ont besoin.", "val": "I" }] },
        { "id": "MAD_SN_01", "dimension": "SN", "text": "Le Manager te demande un projet pour améliorer le restaurant.", "options": [{ "text": "J'optimise les plannings et je règle les problèmes de mise en place.", "val": "S" }, { "text": "Je crée un programme de formation pour monter l'équipe en compétences.", "val": "N" }] },
        { "id": "MAD_SN_02", "dimension": "SN", "text": "Ton focus principal au quotidien ?", "options": [{ "text": "Gérer les urgences du jour : absences, conflits, problèmes techniques.", "val": "S" }, { "text": "Améliorer les process et anticiper les problèmes futurs.", "val": "N" }] },
        { "id": "MAD_SN_03", "dimension": "SN", "text": "Un serveur fait toujours la même erreur.", "options": [{ "text": "Je lui montre concrètement comment faire autrement.", "val": "S" }, { "text": "Je lui explique pourquoi c'est important et je le laisse trouver sa méthode.", "val": "N" }] },
        { "id": "MAD_SN_04", "dimension": "SN", "text": "Le Directeur te demande ton avis sur la stratégie 2026.", "options": [{ "text": "Je lui présente les chiffres actuels et les optimisations possibles.", "val": "S" }, { "text": "Je lui présente une vision des tendances du marché et des opportunités.", "val": "N" }] },
        { "id": "MAD_SN_05", "dimension": "SN", "text": "Tu arrives le matin, tu fais quoi en premier ?", "options": [{ "text": "Je vérifie que tout est prêt pour le service (stocks, mise en place).", "val": "S" }, { "text": "Je vérifie l'état d'esprit de l'équipe et l'ambiance générale.", "val": "N" }] },
        { "id": "MAD_SN_06", "dimension": "SN", "text": "Le restaurant a perdu 10% de CA ce mois-ci.", "options": [{ "text": "J'analyse les chiffres jour par jour pour trouver le problème.", "val": "S" }, { "text": "Je réfléchis aux tendances du quartier et à notre positionnement.", "val": "N" }] },
        { "id": "MAD_SN_07", "dimension": "SN", "text": "Former l'équipe, tu insistes sur...", "options": [{ "text": "Les procédures concrètes et les gestes techniques.", "val": "S" }, { "text": "La philosophie du service et l'état d'esprit.", "val": "N" }] },
        { "id": "MAD_SN_08", "dimension": "SN", "text": "Pour toi, un bon manager adjoint doit...", "options": [{ "text": "Résoudre les problèmes quotidiens efficacement.", "val": "S" }, { "text": "Faire grandir l'équipe et améliorer l'organisation.", "val": "N" }] },
        { "id": "MAD_SN_09", "dimension": "SN", "text": "Le Manager te dit 'Fais comme tu veux pour améliorer le service'.", "options": [{ "text": "Je corrige les points qui bloquent aujourd'hui.", "val": "S" }, { "text": "Je réfléchis à un système qui améliorera durablement.", "val": "N" }] },
        { "id": "MAD_SN_10", "dimension": "SN", "text": "Tu fais le planning de la semaine.", "options": [{ "text": "Je regarde les réservations et j'optimise le nombre de personnes.", "val": "S" }, { "text": "Je pense aux binômes qui fonctionnent bien et au développement des compétences.", "val": "N" }] },
        { "id": "MAD_SN_11", "dimension": "SN", "text": "Un chef de rang te demande des conseils pour progresser.", "options": [{ "text": "Je lui donne des tips concrets sur les points à améliorer.", "val": "S" }, { "text": "Je l'aide à définir sa vision de carrière et un plan de développement.", "val": "N" }] },
        { "id": "MAD_SN_12", "dimension": "SN", "text": "Le service a été catastrophique ce soir.", "options": [{ "text": "Je liste les erreurs concrètes pour les corriger demain.", "val": "S" }, { "text": "Je réfléchis à ce qui n'a pas fonctionné dans l'organisation globale.", "val": "N" }] },
        { "id": "MAD_SN_13", "dimension": "SN", "text": "Un nouveau concurrent ouvre dans la rue.", "options": [{ "text": "Je vais voir sa carte et ses prix pour adapter les nôtres.", "val": "S" }, { "text": "Je réfléchis à comment renforcer notre identité unique.", "val": "N" }] },
        { "id": "MAD_SN_14", "dimension": "SN", "text": "Tu préfères travailler sur...", "options": [{ "text": "Des problèmes concrets à résoudre maintenant.", "val": "S" }, { "text": "Des projets d'amélioration à moyen terme.", "val": "N" }] },
        { "id": "MAD_SN_15", "dimension": "SN", "text": "Le Directeur veut innover.", "options": [{ "text": "Je propose des améliorations concrètes et testées ailleurs.", "val": "S" }, { "text": "Je propose des concepts originaux adaptés à notre ADN.", "val": "N" }] },
        { "id": "MAD_TF_01", "dimension": "TF", "text": "Tu dois licencier un employé loyal mais sous-performant.", "options": [{ "text": "Je coupe proprement avec les faits, c'est mon job.", "val": "T" }, { "text": "C'est la pire partie du métier, je culpabilise et j'aide à la transition.", "val": "F" }] },
        { "id": "MAD_TF_02", "dimension": "TF", "text": "Le Manager impose une décision que ton équipe déteste.", "options": [{ "text": "Je l'applique, c'est mon job de faire respecter les directives.", "val": "T" }, { "text": "J'explique à l'équipe mais je fais remonter leurs inquiétudes au Manager.", "val": "F" }] },
        { "id": "MAD_TF_03", "dimension": "TF", "text": "Deux serveurs se disputent devant les clients.", "options": [{ "text": "Je les sépare et je sanctionne : 'Jamais devant les clients.'", "val": "T" }, { "text": "Je les calme puis je les prends à part pour comprendre le problème.", "val": "F" }] },
        { "id": "MAD_TF_04", "dimension": "TF", "text": "Un chef de rang fait une grosse erreur qui coûte cher.", "options": [{ "text": "J'explique l'impact financier et les conséquences.", "val": "T" }, { "text": "Je vérifie d'abord qu'il va bien avant de parler de l'erreur.", "val": "F" }] },
        { "id": "MAD_TF_05", "dimension": "TF", "text": "Le Directeur change les horaires de l'équipe sans prévenir.", "options": [{ "text": "Je vérifie si c'est conforme aux contrats.", "val": "T" }, { "text": "Je défends mon équipe et leur vie personnelle auprès du Directeur.", "val": "F" }] },
        { "id": "MAD_TF_06", "dimension": "TF", "text": "Un serveur pleure dans le vestiaire, service dans 10 minutes.", "options": [{ "text": "Je lui demande s'il peut assurer le service ou s'il doit rentrer.", "val": "T" }, { "text": "Je le réconforte 2 minutes et je redistribue ses tables.", "val": "F" }] },
        { "id": "MAD_TF_07", "dimension": "TF", "text": "Distribution des primes de fin d'année.", "options": [{ "text": "Système mathématique selon les heures et la performance.", "val": "T" }, { "text": "Je prends en compte qui a galéré cette année.", "val": "F" }] },
        { "id": "MAD_TF_08", "dimension": "TF", "text": "Un chef de rang te reproche d'être trop dur.", "options": [{ "text": "Je maintiens mes standards, c'est mon job.", "val": "T" }, { "text": "Je remets en question ma façon de faire.", "val": "F" }] },
        { "id": "MAD_TF_09", "dimension": "TF", "text": "Tu préfères qu'on te respecte pour...", "options": [{ "text": "Ta compétence et ta justesse.", "val": "T" }, { "text": "Ton humanité et ton écoute.", "val": "F" }] },
        { "id": "MAD_TF_10", "dimension": "TF", "text": "Un serveur demande un jour de congé de dernière minute.", "options": [{ "text": "Non, les congés se demandent 2 semaines avant.", "val": "T" }, { "text": "Je vérifie pourquoi et j'essaie de m'arranger.", "val": "F" }] },
        { "id": "MAD_TF_11", "dimension": "TF", "text": "Le service a été catastrophique ce soir.", "options": [{ "text": "Je débriefe froidement les erreurs pour qu'elles ne se reproduisent pas.", "val": "T" }, { "text": "Je remonte le moral de l'équipe avant de parler des problèmes.", "val": "F" }] },
        { "id": "MAD_TF_12", "dimension": "TF", "text": "Un serveur est lent mais très gentil avec les clients.", "options": [{ "text": "La performance prime, je le recadre ou je le change de poste.", "val": "T" }, { "text": "Je le garde et je compense avec le reste de l'équipe.", "val": "F" }] },
        { "id": "MAD_TF_13", "dimension": "TF", "text": "Conflit entre toi et le Chef de cuisine.", "options": [{ "text": "Je pose les faits et je défends mon point avec des arguments.", "val": "T" }, { "text": "J'essaie de trouver un terrain d'entente pour apaiser.", "val": "F" }] },
        { "id": "MAD_TF_14", "dimension": "TF", "text": "L'équipe te demande ton soutien face au Manager.", "options": [{ "text": "Je regarde les faits avant de prendre position.", "val": "T" }, { "text": "Je défends toujours mon équipe d'abord.", "val": "F" }] },
        { "id": "MAD_TF_15", "dimension": "TF", "text": "Un client insulte un de tes serveurs.", "options": [{ "text": "Je sors le client immédiatement. Respect non-négociable.", "val": "T" }, { "text": "Je calme la situation et je réconforte mon serveur après.", "val": "F" }] },
        { "id": "MAD_JP_01", "dimension": "JP", "text": "Panne d'électricité en plein service.", "options": [{ "text": "Je vérifie le protocole de crise et j'appelle le Manager.", "val": "J" }, { "text": "Je gère à la volée : bougies, menu froid, je sauve le service.", "val": "P" }] },
        { "id": "MAD_JP_02", "dimension": "JP", "text": "Le planning que tu as fait saute à cause d'un arrêt maladie.", "options": [{ "text": "Ça m'agace, j'avais tout optimisé.", "val": "J" }, { "text": "Pas grave, je réorganise en 5 minutes.", "val": "P" }] },
        { "id": "MAD_JP_03", "dimension": "JP", "text": "Un chef de rang improvise une nouvelle méthode de service.", "options": [{ "text": "Non, on suit les protocoles établis.", "val": "J" }, { "text": "Si ça marche mieux, pourquoi pas.", "val": "P" }] },
        { "id": "MAD_JP_04", "dimension": "JP", "text": "Ton organisation de travail.", "options": [{ "text": "Planning précis de la semaine avec chaque tâche planifiée.", "val": "J" }, { "text": "Liste de priorités que je gère selon les urgences du jour.", "val": "P" }] },
        { "id": "MAD_JP_05", "dimension": "JP", "text": "Le Manager te dit 'Gère comme tu veux'.", "options": [{ "text": "Je mets en place des process clairs et structurés.", "val": "J" }, { "text": "Je m'adapte au jour le jour selon les besoins.", "val": "P" }] },
        { "id": "MAD_JP_06", "dimension": "JP", "text": "Un client demande quelque chose qui n'est pas dans les règles.", "options": [{ "text": "Désolé, c'est pas possible, c'est la procédure.", "val": "J" }, { "text": "Je vois avec la cuisine/le Manager si on peut s'arranger.", "val": "P" }] },
        { "id": "MAD_JP_07", "dimension": "JP", "text": "Gestion des priorités en rush.", "options": [{ "text": "Liste mentale stricte que je déroule point par point.", "val": "J" }, { "text": "Je jongle entre tout en fonction de l'urgence du moment.", "val": "P" }] },
        { "id": "MAD_JP_08", "dimension": "JP", "text": "Ton plan de carrière.", "options": [{ "text": "Dans 2 ans Manager, dans 5 ans Directeur.", "val": "J" }, { "text": "Je verrai selon les opportunités.", "val": "P" }] },
        { "id": "MAD_JP_09", "dimension": "JP", "text": "Les procédures de service.", "options": [{ "text": "À respecter à la lettre, c'est ce qui fait la constance.", "val": "J" }, { "text": "Ce sont des guides, on adapte selon le contexte.", "val": "P" }] },
        { "id": "MAD_JP_10", "dimension": "JP", "text": "On te propose une promotion dans un autre restaurant.", "options": [{ "text": "Je réfléchis 2 semaines, j'évalue tout.", "val": "J" }, { "text": "Si le feeling est bon, je fonce.", "val": "P" }] },
        { "id": "MAD_JP_11", "dimension": "JP", "text": "Gestion des imprévus.", "options": [{ "text": "J'ai des plans B, C, D pour chaque scénario.", "val": "J" }, { "text": "Je gère au moment M, c'est plus efficace.", "val": "P" }] },
        { "id": "MAD_JP_12", "dimension": "JP", "text": "Le service d'avant a mal préparé.", "options": [{ "text": "Je refais tout avant d'ouvrir, même si ça me met en retard.", "val": "J" }, { "text": "Je corrige l'essentiel et je m'adapte.", "val": "P" }] },
        { "id": "MAD_JP_13", "dimension": "JP", "text": "Les réservations.", "options": [{ "text": "Système strict, aucune exception.", "val": "J" }, { "text": "On peut toujours trouver une solution.", "val": "P" }] },
        { "id": "MAD_JP_14", "dimension": "JP", "text": "La routine.", "options": [{ "text": "Me rassure et me permet d'être excellent.", "val": "J" }, { "text": "M'ennuie et me dévitalise.", "val": "P" }] },
        { "id": "MAD_JP_15", "dimension": "JP", "text": "Ton restaurant idéal.", "options": [{ "text": "Parfaitement organisé et prévisible.", "val": "J" }, { "text": "Dynamique et changeant.", "val": "P" }] }
    ],
    "profiles": {
        "ESTJ": {
            "code": "ESTJ",
            "title": "Le Lieutenant",
            "subtitle": "Terrain • Pompier • Gestionnaire • Protocole",
            "description": "Tu es le manager adjoint sur qui tout repose. Fiable, carré, organisé.",
            "forces": ["Organisation", "Fiabilité", "Rigueur"],
            "vigilance": ["Rigidité", "Manque d'écoute"],
            "ideal_environment": { "type_restaurant": "Structuré", "clientele": "Exigeante" },
            "career_advice": "Vise le poste de Manager rapidement.",
            "famous_example": "Le bras droit indispensable."
        },
        "ESFJ": {
            "code": "ESFJ",
            "title": "Le Pilier Humain",
            "subtitle": "Terrain • Pompier • Coach • Protocole",
            "description": "Tu es le cœur de l'équipe. Bienveillant, attentif, tu fais le lien.",
            "forces": ["Bienveillance", "Cohésion", "Loyauté"],
            "vigilance": ["Trop affectif", "Difficulté à trancher"],
            "ideal_environment": { "type_restaurant": "Familial", "clientele": "Fidèle" },
            "career_advice": "Protège-toi émotionnellement.",
            "famous_example": "Celui que tout le monde adore."
        },
        "ENTJ": {
            "code": "ENTJ",
            "title": "Le Futur Directeur",
            "subtitle": "Terrain • Bâtisseur • Gestionnaire • Protocole",
            "description": "Tu as déjà la vision du chef. Stratège, ambitieux, efficace.",
            "forces": ["Vision", "Ambition", "Efficacité"],
            "vigilance": ["Impatience", "Arrogance"],
            "ideal_environment": { "type_restaurant": "Ambitieux", "clientele": "Business" },
            "career_advice": "Travaille ton humilité.",
            "famous_example": "L'étoile montante."
        },
        "ENFJ": {
            "code": "ENFJ",
            "title": "Le Mentor",
            "subtitle": "Terrain • Bâtisseur • Coach • Protocole",
            "description": "Tu inspires et fais grandir les autres. Charismatique, visionnaire.",
            "forces": ["Inspiration", "Empathie", "Charisme"],
            "vigilance": ["Idéalisme", "Burn-out"],
            "ideal_environment": { "type_restaurant": "Concept fort", "clientele": "Fan base" },
            "career_advice": "Délègue plus.",
            "famous_example": "Le leader spirituel de l'équipe."
        },
        "ESTP": {
            "code": "ESTP",
            "title": "Le Pompier",
            "subtitle": "Terrain • Pompier • Gestionnaire • Système D",
            "description": "Tu gères les crises comme personne. Réactif, pragmatique, flexible.",
            "forces": ["Réactivité", "Pragmatisme", "Sang-froid"],
            "vigilance": ["Court-termisme", "Désorganisation"],
            "ideal_environment": { "type_restaurant": "Gros volume", "clientele": "Pressée" },
            "career_advice": "Structure-toi.",
            "famous_example": "Le sauveur de service."
        },
        "ESFP": {
            "code": "ESFP",
            "title": "L'Énergiseur",
            "subtitle": "Terrain • Pompier • Coach • Système D",
            "description": "Tu met l'ambiance et motives les troupes. Joyeux, spontané.",
            "forces": ["Énergie", "Spontanéité", "Relationnel"],
            "vigilance": ["Superficiel", "Dispersé"],
            "ideal_environment": { "type_restaurant": "Festif", "clientele": "Jeune" },
            "career_advice": "Canalise ton énergie.",
            "famous_example": "Le bout-en-train."
        },
        "ENTP": {
            "code": "ENTP",
            "title": "L'Innovateur",
            "subtitle": "Terrain • Bâtisseur • Gestionnaire • Système D",
            "description": "Tu challenges le statu quo. Créatif, intelligent, debrouillard.",
            "forces": ["Innovation", "Agilité", "Intelligence"],
            "vigilance": ["Provocation", "Instabilité"],
            "ideal_environment": { "type_restaurant": "Nouveau concept", "clientele": "Curieuse" },
            "career_advice": "Va au bout des choses.",
            "famous_example": "Le disruptif."
        },
        "ENFP": {
            "code": "ENFP",
            "title": "Le Catalyseur",
            "subtitle": "Terrain • Bâtisseur • Coach • Système D",
            "description": "Tu connectes les gens et les idées. Enthousiaste, créatif.",
            "forces": ["Créativité", "Enthousiasme", "Connexion"],
            "vigilance": ["Émotionnel", "Désorganisé"],
            "ideal_environment": { "type_restaurant": "Original", "clientele": "Sympa" },
            "career_advice": "Structure tes idées.",
            "famous_example": "L'âme du lieu."
        },
        "ISTJ": {
            "code": "ISTJ",
            "title": "Le Roc Silencieux",
            "subtitle": "Pilotage • Pompier • Gestionnaire • Protocole",
            "description": "Tu assures les arrières. Méthodique, discret, fiable.",
            "forces": ["Méthode", "Discrétion", "Fiabilité"],
            "vigilance": ["Rigidité", "Froideur"],
            "ideal_environment": { "type_restaurant": "Classique", "clientele": "Habituée" },
            "career_advice": "Communique plus.",
            "famous_example": "La force tranquille."
        },
        "ISFJ": {
            "code": "ISFJ",
            "title": "Le Gardien Dévoué",
            "subtitle": "Pilotage • Pompier • Coach • Protocole",
            "description": "Tu veilles sur tout le monde. Dévoué, attentif, protecteur.",
            "forces": ["Dévouement", "Attention", "Protection"],
            "vigilance": ["Surcharge", "Effacement"],
            "ideal_environment": { "type_restaurant": "Maison", "clientele": "Calme" },
            "career_advice": "Affirme-toi.",
            "famous_example": "La bonne fée."
        },
        "INTJ": {
            "code": "INTJ",
            "title": "L'Architecte Silencieux",
            "subtitle": "Pilotage • Bâtisseur • Gestionnaire • Protocole",
            "description": "Tu optimises tout dans l'ombre. Analytique, stratégique, solitaire.",
            "forces": ["Analyse", "Stratégie", "Perfectionnisme"],
            "vigilance": ["Isolement", "Critique"],
            "ideal_environment": { "type_restaurant": "Haut de gamme", "clientele": "Élitiste" },
            "career_advice": "Connecte-toi aux autres.",
            "famous_example": "Le cerveau."
        },
        "INFJ": {
            "code": "INFJ",
            "title": "Le Sage Discret",
            "subtitle": "Pilotage • Bâtisseur • Coach • Protocole",
            "description": "Tu comprends tout avant tout le monde. Intuitif, profond, inspirant.",
            "forces": ["Intuition", "Profondeur", "Inspiration"],
            "vigilance": ["Perfectionnisme", "Stress"],
            "ideal_environment": { "type_restaurant": "Sens et valeurs", "clientele": "Avertie" },
            "career_advice": "Lâche prise.",
            "famous_example": "Le conseiller de l'ombre."
        },
        "ISTP": {
            "code": "ISTP",
            "title": "Le Résolveur Silencieux",
            "subtitle": "Pilotage • Pompier • Gestionnaire • Système D",
            "description": "Tu répares tout ce qui casse. Pragmatique, habile, calme.",
            "forces": ["Habilité", "Calme", "Logique"],
            "vigilance": ["Cynisme", "Détachement"],
            "ideal_environment": { "type_restaurant": "Technique", "clientele": "Efficace" },
            "career_advice": "Partage ton savoir.",
            "famous_example": "Le technicien hors pair."
        },
        "ISFP": {
            "code": "ISFP",
            "title": "L'Artisan Bienveillant",
            "subtitle": "Pilotage • Pompier • Coach • Système D",
            "description": "Tu fais les choses avec cœur. Esthète, gentil, flexible.",
            "forces": ["Esthétique", "Gentillesse", "Flexibilité"],
            "vigilance": ["Fragilité", "Indécision"],
            "ideal_environment": { "type_restaurant": "Beau", "clientele": "Sensible" },
            "career_advice": "Durcis-toi un peu.",
            "famous_example": "L'artiste."
        },
        "INTP": {
            "code": "INTP",
            "title": "Le Chercheur",
            "subtitle": "Pilotage • Bâtisseur • Gestionnaire • Système D",
            "description": "Tu analyses le système pour le comprendre. Curieux, logique, abstrait.",
            "forces": ["Analyse", "Logique", "Curiosité"],
            "vigilance": ["Abstraction", "Désordre"],
            "ideal_environment": { "type_restaurant": "Laboratoire", "clientele": "Geek" },
            "career_advice": "Passe à l'action.",
            "famous_example": "Le prof."
        },
        "INFP": {
            "code": "INFP",
            "title": "Le Visionnaire Discret",
            "subtitle": "Pilotage • Bâtisseur • Coach • Système D",
            "description": "Tu rêves d'un monde meilleur. Idéaliste, créatif, passionné.",
            "forces": ["Idéalisme", "Créativité", "Passion"],
            "vigilance": ["Déconnexion", "Susceptibilité"],
            "ideal_environment": { "type_restaurant": "engagé", "clientele": "Militante" },
            "career_advice": "Ancre-toi dans le réel.",
            "famous_example": "Le rêveur."
        }
    }
};
