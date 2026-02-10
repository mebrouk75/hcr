export const MBTI_DIRECTEUR_DATA = {
    meta: {
        role_target: "DIRECTEUR",
        total_questions: 60,
        structure: "4 Dimensions x 15 Questions",
        estimated_time: "12-15 minutes",
        scoring_type: "MBTI_DICHOTOMOUS",
        total_profiles: 16,
        version: "1.0",
        date: "2026-02-08"
    },

    pretest_alert: {
        titre: "⚠️ CONDITIONS OPTIMALES REQUISES",
        sous_titre: "Ce test dure environ 15-20 minutes et nécessite votre pleine attention",
        message_principal: "Pour des résultats fiables, assurez-vous que :",
        conditions_requises: {
            physique: [
                "Vous avez bien dormi (minimum 6 heures)",
                "Vous êtes reposé et en forme",
                "Vous n'avez pas consommé d'alcool",
                "Vous n'êtes pas sous l'effet de médicaments affectant la concentration"
            ],
            mental: [
                "Vous êtes concentré et attentif",
                "Vous n'êtes pas stressé ou sous pression émotionnelle",
                "Vous n'êtes pas en situation de conflit ou de crise personnelle"
            ],
            environnement: [
                "Vous avez 20-30 minutes devant vous sans interruption",
                "Vous êtes dans un endroit calme sans distractions",
                "Vous n'êtes pas pressé par le temps"
            ]
        },
        ne_pas_faire_test_si: [
            "Vous êtes fatigué ou manquez de sommeil",
            "Vous êtes distrait ou avez l'esprit ailleurs",
            "Vous êtes émotionnellement perturbé",
            "Vous êtes sous pression (deadline, stress professionnel)",
            "Vous n'avez pas le temps de finir le test en une seule session"
        ],
        avertissement: "⚠️ ATTENTION : Un test passé dans de mauvaises conditions donnera des résultats INVALIDES et TROMPEURS. Il est préférable de reporter le test plutôt que d'obtenir un profil inexact.",
        apercu_test: {
            phase_1: "60 questions - 5-7 min",
            phase_2: "84 questions - 8-10 min",
            pause: "PAUSE",
            phase_3: "42 questions - 4-5 min",
            phase_4: "20 questions - 3-4 min"
        },
        instructions: [
            "Répondez spontanément et honnêtement",
            "Il n'y a pas de bonnes ou de mauvaises réponses",
            "Choisissez ce que vous feriez VRAIMENT, pas ce qui est 'bien' moralement",
            "Basez-vous sur votre expérience concrète, pas sur l'idéal"
        ],
        boutons: {
            commencer: "Oui, je suis dans de bonnes conditions - COMMENCER LE TEST",
            reporter: "Non, je reviendrai plus tard"
        }
    },

    structure_generale: {
        phase_1: { nom: "MBTI Personnalité", questions: "1-60", format: "Échelle Likert 5 niveaux" },
        phase_2: { nom: "Leadership Style", questions: "61-144", format: "5 choix multiples" },
        pause: { apres_question: 144, duree: "5 minutes" },
        phase_3: { nom: "Dimensions Complémentaires", questions: "145-186", format: "Échelle Likert 5 niveaux" },
        phase_4: { nom: "Hardcore Dilemmes", questions: "187-206", format: "5 choix multiples" },
        resultat: { affichage: "Une seule fois à la fin complète (après Q206)" }
    },

    dimensions: {
        EI: {
            name: "Style de Direction",
            pole_E: "Visible - Extraverti",
            pole_I: "Stratégique - Introverti",
            description: "Comment le directeur incarne et transmet sa vision"
        },
        SN: {
            name: "Vision",
            pole_S: "Opérationnel - Sensation",
            pole_N: "Conceptuel - Intuition",
            description: "Comment le directeur définit le succès et l'avenir"
        },
        TF: {
            name: "Décision",
            pole_T: "Rentabilité - Thinking",
            pole_F: "Équilibre - Feeling",
            description: "Comment le directeur prend les décisions stratégiques majeures"
        },
        JP: {
            name: "Approche",
            pole_J: "Systèmes - Judging",
            pole_P: "Agilité - Perceiving",
            description: "Comment le directeur structure et adapte sa stratégie"
        }
    },

    scoring_method: "MAJORITY_PER_DIMENSION",

    questions: [
        { id: "Q001", dimension: "EI", text: "Samedi soir, ton resto est plein à craquer.", options: [{ text: "Je suis en salle, je supervise, je parle aux clients", val: "E" }, { text: "Je suis dans mon bureau, j'ai les écrans, je surveille les chiffres", val: "I" }] },
        { id: "Q002", dimension: "EI", text: "Après une grosse journée de merde, tu recharges comment ?", options: [{ text: "Je sors boire un verre avec l'équipe, ça me vide la tête", val: "E" }, { text: "Je rentre chez moi seul, j'ai besoin de silence", val: "I" }] },
        { id: "Q003", dimension: "EI", text: "Comment tu remotives tes Managers après une semaine difficile ?", options: [{ text: "Réunion collective, on en parle tous ensemble, je fais un speech", val: "E" }, { text: "Points individuels avec chacun, objectifs clairs par écrit", val: "I" }] },
        { id: "Q004", dimension: "EI", text: "Un client VIP arrive sans réservation.", options: [{ text: "Je sors l'accueillir personnellement, je lui trouve une table", val: "E" }, { text: "Je brieffe mon Manager, il gère, je supervise", val: "I" }] },
        { id: "Q005", dimension: "EI", text: "Ton Manager t'appelle paniqué : \"Chambre froide en panne, 8000€ de perte.\"", options: [{ text: "J'arrive au resto dans 15 minutes, on gère ensemble sur place", val: "E" }, { text: "Je lui donne les instructions par téléphone, il exécute", val: "I" }] },
        { id: "Q006", dimension: "EI", text: "Tu recrutes un nouveau Manager. Comment tu décides ?", options: [{ text: "Au feeling : son énergie, comment il parle, son contact", val: "E" }, { text: "J'analyse son CV, ses résultats chiffrés, ses références", val: "I" }] },
        { id: "Q007", dimension: "EI", text: "Le proprio débarque sans prévenir un vendredi soir.", options: [{ text: "Je l'accueille, on fait le tour en salle ensemble", val: "E" }, { text: "Je le reçois dans mon bureau, on regarde les chiffres au calme", val: "I" }] },
        { id: "Q008", dimension: "EI", text: "Fin de service, l'équipe traîne au bar pour décompresser.", options: [{ text: "Je reste avec eux, on débriefe autour d'un verre", val: "E" }, { text: "Je rentre chez moi, demain est un autre jour", val: "I" }] },
        { id: "Q009", dimension: "EI", text: "Réunion hebdo avec tes Managers.", options: [{ text: "Discussion ouverte, brainstorming, tout le monde participe", val: "E" }, { text: "Ordre du jour strict, chacun présente ses KPI, efficace et rapide", val: "I" }] },
        { id: "Q010", dimension: "EI", text: "Une crise éclate en plein service.", options: [{ text: "Je descends immédiatement en salle, je prends le commandement", val: "E" }, { text: "J'appelle mon Manager, on fait le point, je pilote depuis mon bureau", val: "I" }] },
        { id: "Q011", dimension: "EI", text: "Comment tu passes ton dimanche off ?", options: [{ text: "Je sors, je vois du monde, j'ai besoin d'interactions", val: "E" }, { text: "Chez moi tranquille, je récupère seul", val: "I" }] },
        { id: "Q012", dimension: "EI", text: "Le resto marche bien. Comment tu célèbres ?", options: [{ text: "Grande soirée avec toute l'équipe, on fait la fête ensemble", val: "E" }, { text: "Je félicite chacun individuellement, pas besoin de grand événement", val: "I" }] },
        { id: "Q013", dimension: "EI", text: "Conflit entre deux Managers.", options: [{ text: "Je les réunis tous les deux, on règle ça face à face", val: "E" }, { text: "Je les vois séparément, je comprends chaque version", val: "I" }] },
        { id: "Q014", dimension: "EI", text: "Grosse soirée événementielle ce soir.", options: [{ text: "Je suis présent en salle pendant tout le service", val: "E" }, { text: "Je supervise de loin, j'interviens seulement si gros problème", val: "I" }] },
        { id: "Q015", dimension: "EI", text: "T'as 2h de libre dans ta journée.", options: [{ text: "Je vais en salle échanger avec les clients et l'équipe", val: "E" }, { text: "Je reste dans mon bureau bosser sur la stratégie", val: "I" }] },
        { id: "Q016", dimension: "SN", text: "Le CA baisse de 20% en 3 mois. Ta priorité ?", options: [{ text: "J'épluche le P&L ligne par ligne : food cost, masse salariale, ticket moyen", val: "S" }, { text: "Je repense ma stratégie globale : concept, positionnement, clientèle", val: "N" }] },
        { id: "Q017", dimension: "SN", text: "T'as 40 000€ à investir.", options: [{ text: "Four neuf, chambre froide, rénovation, équipement concret", val: "S" }, { text: "Refonte du concept, nouveau menu signature, gros coup marketing", val: "N" }] },
        { id: "Q018", dimension: "SN", text: "Qu'est-ce que tu vends à tes clients ?", options: [{ text: "De bons plats, un service efficace, un bon rapport qualité-prix", val: "S" }, { text: "Une expérience, une émotion, un moment inoubliable", val: "N" }] },
        { id: "Q019", dimension: "SN", text: "Tu dois refaire la carte.", options: [{ text: "J'analyse les ventes plat par plat, je garde ce qui marche", val: "S" }, { text: "Je réinvente complètement, je pars sur une nouvelle vision", val: "N" }] },
        { id: "Q020", dimension: "SN", text: "Un concurrent ouvre en face avec un concept innovant.", options: [{ text: "Je renforce mes points forts actuels : qualité, service, régularité", val: "S" }, { text: "Je crée un concept encore plus fort pour le dominer", val: "N" }] },
        { id: "Q021", dimension: "SN", text: "Comment tu mesures la réussite de ton resto ?", options: [{ text: "Chiffres concrets : CA, marge, taux de remplissage, notes Google", val: "S" }, { text: "Réputation : bouche-à-oreille, reconnaissance, impact sur le quartier", val: "N" }] },
        { id: "Q022", dimension: "SN", text: "Service catastrophique hier : 2h d'attente, clients furieux.", options: [{ text: "J'analyse chaque erreur précise, je corrige process par process", val: "S" }, { text: "Je repense toute l'organisation pour transformer le système", val: "N" }] },
        { id: "Q023", dimension: "SN", text: "Formation de tes Managers.", options: [{ text: "Techniques concrètes : gestion stocks, plannings, ratios, process", val: "S" }, { text: "Vision stratégique, innovation, leadership, transformation", val: "N" }] },
        { id: "Q024", dimension: "SN", text: "Dans 5 ans, ton resto c'est quoi ?", options: [{ text: "Plus rentable, mieux organisé, +30% de CA", val: "S" }, { text: "Une référence du secteur, un nom reconnu, un héritage", val: "N" }] },
        { id: "Q025", dimension: "SN", text: "Food cost qui explose à +6%.", options: [{ text: "Je vérifie les bons de commande, je pèse les portions, je traque chaque euro", val: "S" }, { text: "Je repense tout le système d'achat et la carte", val: "N" }] },
        { id: "Q026", dimension: "SN", text: "Comment tu gères ton budget annuel ?", options: [{ text: "Tableur détaillé, chaque ligne budgétée, suivi mensuel précis", val: "S" }, { text: "Vision globale, grandes masses, j'ajuste en cours d'année", val: "N" }] },
        { id: "Q027", dimension: "SN", text: "Présentation au proprio.", options: [{ text: "Slides avec chiffres, graphiques, résultats concrets", val: "S" }, { text: "Je présente ma vision, les opportunités, la stratégie future", val: "N" }] },
        { id: "Q028", dimension: "SN", text: "Comment tu choisis tes fournisseurs ?", options: [{ text: "Prix, qualité, délais, fiabilité : je compare factuellement", val: "S" }, { text: "Relation, valeurs partagées, vision commune", val: "N" }] },
        { id: "Q029", dimension: "SN", text: "Baisse de fréquentation depuis 2 mois.", options: [{ text: "J'analyse : nombre de couverts, tickets moyens, jours creux", val: "S" }, { text: "Je réfléchis : image du resto, positionnement, expérience client", val: "N" }] },
        { id: "Q030", dimension: "SN", text: "Nouveau plat à tester.", options: [{ text: "Je calcule le food cost, je teste les portions, je vérifie la rentabilité", val: "S" }, { text: "J'imagine l'expérience client, l'histoire du plat, l'émotion", val: "N" }] },
        { id: "Q031", dimension: "TF", text: "Ton Manager fidèle depuis 10 ans devient moins performant.", options: [{ text: "Je le garde, il mérite ma loyauté", val: "F" }, { text: "Je le remplace, la performance avant le sentiment", val: "T" }] },
        { id: "Q032", dimension: "TF", text: "Il faut virer 3 personnes pour sauver le resto.", options: [{ text: "Je garde les anciens et ceux qui ont des familles", val: "F" }, { text: "Je garde les 3 plus performants, point final", val: "T" }] },
        { id: "Q033", dimension: "TF", text: "Un serveur pleure dans ton bureau avant le service.", options: [{ text: "Je prends 10 minutes pour l'écouter et le rassurer", val: "F" }, { text: "On gère ça après le service, là on a des clients", val: "T" }] },
        { id: "Q034", dimension: "TF", text: "Food cost qui explose. Le Chef accuse l'inflation.", options: [{ text: "J'écoute ses explications, on cherche des solutions ensemble", val: "F" }, { text: "Je plonge dans les bons de commande, je veux des preuves", val: "T" }] },
        { id: "Q035", dimension: "TF", text: "Il faut couper 20 000€ de masse salariale.", options: [{ text: "Je coupe d'abord ailleurs pour préserver les emplois", val: "F" }, { text: "Je coupe la masse salariale, c'est le plus flexible", val: "T" }] },
        { id: "Q036", dimension: "TF", text: "Un serveur fait une erreur à 2000€.", options: [{ text: "J'analyse le contexte : fatigue, surcharge, circonstances", val: "F" }, { text: "Erreur = sanction, je ne veux pas de précédent", val: "T" }] },
        { id: "Q037", dimension: "TF", text: "Ton Manager toxique fait +35% de CA mais détruit l'ambiance.", options: [{ text: "Je le vire, l'humain avant les chiffres", val: "F" }, { text: "Je le garde, les résultats justifient tout", val: "T" }] },
        { id: "Q038", dimension: "TF", text: "Distribution des primes annuelles.", options: [{ text: "Je prends en compte l'effort, le contexte personnel, l'engagement", val: "F" }, { text: "100% basé sur les résultats mesurables", val: "T" }] },
        { id: "Q039", dimension: "TF", text: "Conflit entre deux Managers.", options: [{ text: "Je cherche à comprendre leurs émotions, je réconcilie", val: "F" }, { text: "Je tranche factuellement : qui a tort, qui a raison", val: "T" }] },
        { id: "Q040", dimension: "TF", text: "Un Manager demande son jour off pour un anniversaire important.", options: [{ text: "J'accepte, c'est important pour lui", val: "F" }, { text: "Je refuse, on a besoin de lui ce jour-là", val: "T" }] },
        { id: "Q041", dimension: "TF", text: "Rentabilité vs Bien-être de l'équipe : priorité ?", options: [{ text: "Équipe heureuse = clients heureux = rentabilité long terme", val: "F" }, { text: "Rentabilité d'abord = salaires payés = équipe stable", val: "T" }] },
        { id: "Q042", dimension: "TF", text: "Un Manager froid mais redoutablement efficace.", options: [{ text: "Je lui demande de développer son empathie", val: "F" }, { text: "Parfait, il fait le job, c'est tout ce qui compte", val: "T" }] },
        { id: "Q043", dimension: "TF", text: "Le proprio te demande une décision injuste.", options: [{ text: "Je refuse, ça va contre mes valeurs", val: "F" }, { text: "J'exécute, c'est rationnel même si désagréable", val: "T" }] },
        { id: "Q044", dimension: "TF", text: "Feedback à un Manager moyen.", options: [{ text: "J'encourage ses efforts, je valorise ses qualités humaines", val: "F" }, { text: "Je pointe factuellement ce qui doit être amélioré", val: "T" }] },
        { id: "Q045", dimension: "TF", text: "Réduction des coûts imposée : 20%.", options: [{ text: "Je coupe d'abord les investissements pour sauver les jobs", val: "F" }, { text: "Je coupe où c'est le plus rentable, même si c'est dur humainement", val: "T" }] },
        { id: "Q046", dimension: "JP", text: "Ton planning de la semaine.", options: [{ text: "Structuré à l'heure près : réunions, inventaires, formations", val: "J" }, { text: "Grandes lignes, je gère au fil de l'eau", val: "P" }] },
        { id: "Q047", dimension: "JP", text: "Un imprévu majeur bouleverse ta journée.", options: [{ text: "Ça me perturbe, je préfère quand tout est sous contrôle", val: "J" }, { text: "Pas de problème, j'improvise et je m'adapte", val: "P" }] },
        { id: "Q048", dimension: "JP", text: "Un fournisseur te propose une promo (-30%) mais décision immédiate.", options: [{ text: "Je vérifie mon budget, mes stocks, je rappelle demain", val: "J" }, { text: "Si c'est une bonne affaire, je fonce", val: "P" }] },
        { id: "Q049", dimension: "JP", text: "Service en galère : 3 serveurs absents, cuisine débordée.", options: [{ text: "Ça me stresse, je déteste quand c'est pas maîtrisé", val: "J" }, { text: "Pas grave, j'improvise, je redistribue, on gère", val: "P" }] },
        { id: "Q050", dimension: "JP", text: "Comment tu gères ton inventaire ?", options: [{ text: "Fichier Excel à jour, comptage systématique chaque semaine", val: "J" }, { text: "Je compte quand je sens qu'il manque des trucs", val: "P" }] },
        { id: "Q051", dimension: "JP", text: "Tes process et procédures.", options: [{ text: "Tout écrit, protocoles stricts, fiches techniques", val: "J" }, { text: "Grandes lignes, on s'adapte selon les situations", val: "P" }] },
        { id: "Q052", dimension: "JP", text: "Ton bureau et tes dossiers.", options: [{ text: "Tout classé, rangé, chaque chose à sa place", val: "J" }, { text: "Bordel apparent mais je sais où tout est", val: "P" }] },
        { id: "Q053", dimension: "JP", text: "Le proprio débarque : \"Inspection sanitaire demain.\"", options: [{ text: "Je panique, on n'est pas prêts, je fais tout refaire", val: "J" }, { text: "On gère, je mobilise l'équipe, on met les priorités", val: "P" }] },
        { id: "Q054", dimension: "JP", text: "Un Manager te propose une idée non planifiée.", options: [{ text: "On en parle en réunion la semaine prochaine", val: "J" }, { text: "On teste maintenant si c'est pertinent", val: "P" }] },
        { id: "Q055", dimension: "JP", text: "Deadlines compta et reporting.", options: [{ text: "Je finis toujours 2-3 jours avant", val: "J" }, { text: "Je livre dans les temps mais au dernier moment", val: "P" }] },
        { id: "Q056", dimension: "JP", text: "Tu lances un nouveau process.", options: [{ text: "Protocole écrit, formation, suivi strict", val: "J" }, { text: "Grandes lignes, on ajuste en temps réel", val: "P" }] },
        { id: "Q057", dimension: "JP", text: "Horaires de tes Managers.", options: [{ text: "Planning fixe 3 semaines à l'avance", val: "J" }, { text: "Planning ajusté chaque semaine selon besoins", val: "P" }] },
        { id: "Q058", dimension: "JP", text: "Projet de rénovation.", options: [{ text: "Cahier des charges précis, planning strict, suivi étape par étape", val: "J" }, { text: "Vision globale, on ajuste en fonction des imprévus", val: "P" }] },
        { id: "Q059", dimension: "JP", text: "Ta journée idéale de Directeur.", options: [{ text: "Tout se déroule comme prévu, aucune surprise", val: "J" }, { text: "Dynamique, pleine d'imprévus stimulants", val: "P" }] },
        { id: "Q060", dimension: "JP", text: "Ta philosophie de gestion.", options: [{ text: "Structure, discipline, process = excellence", val: "J" }, { text: "Flexibilité, agilité, adaptation = performance", val: "P" }] }
    ],

    profiles: {
        ESTJ: {
            code: "ESTJ",
            title: "Le Bâtisseur d'Empire",
            subtitle: "Incarnation • Croissance • Business • Contrôle",
            description: "Tu es le directeur qui construit des empires rentables par la discipline et la présence. Tu incarnes ta vision publiquement, tu inspires par ton leadership visible, et tu construis par des systèmes rigoureux. Ta force c'est ta capacité à combiner charisme personnel et excellence opérationnelle.",
            forces: ["Capacité à scaler rapidement avec discipline", "Leadership charismatique qui inspire confiance", "Excellence opérationnelle et systèmes rigoureux", "Présence terrain qui galvanise les équipes", "Track record de résultats financiers solides"],
            vigilance: ["Risque de privilégier la croissance sur la culture", "Peut manquer de flexibilité face aux disruptions", "Tendance à sous-estimer l'importance de l'innovation"],
            ideal_environment: { type_bar: "Groupe en expansion, Chaîne structurée, Franchise premium", clientele: "Marchés stables avec potentiel de réplication", team_size: "Fonds d'investissement valorisant la croissance rentable" },
            career_advice: "Tu es fait pour bâtir des groupes multi-sites. Développe ton agilité stratégique pour anticiper les disruptions. Les meilleurs empires savent aussi évoluer.",
            famous_example: "Ray Kroc (McDonald's)"
        },
        ESFJ: {
            code: "ESFJ",
            title: "Le Patriarche/Matriarche",
            subtitle: "Incarnation • Croissance • Mission • Contrôle",
            description: "Tu es le directeur qui construit une famille professionnelle autant qu'une entreprise. Tu incarnes des valeurs fortes, tu es présent pour tes équipes, et tu crées une culture de fidélité et d'excellence.",
            forces: ["Capacité à créer une culture de loyauté exceptionnelle", "Leadership bienveillant qui inspire le dévouement", "Excellence opérationnelle avec humanité", "Présence chaleureuse qui fédère", "Équilibre entre croissance et valeurs"],
            vigilance: ["Risque de résister aux changements nécessaires par attachement", "Peut avoir du mal à prendre des décisions difficiles", "Tendance à privilégier l'harmonie sur la performance"],
            ideal_environment: { type_bar: "Groupe familial, Maisons de tradition", clientele: "Marchés valorisant la fidélité et la transmission", team_size: "Investisseurs patients valorisant la pérennité" },
            career_advice: "Tu es fait pour bâtir des institutions durables. Apprends à prendre les décisions difficiles sans culpabilité.",
            famous_example: "Niki Nakayama (n/naka)"
        },
        ENTJ: {
            code: "ENTJ",
            title: "Le Conquérant",
            subtitle: "Incarnation • Héritage • Business • Contrôle",
            description: "Tu es le directeur visionnaire qui transforme l'industrie tout en bâtissant un empire rentable. Tu combines charisme de leader, vision disruptive, et excellence d'exécution.",
            forces: ["Vision stratégique exceptionnelle et disruptive", "Leadership charismatique qui inspire l'ambition", "Capacité à exécuter l'impossible", "Excellence financière et innovation combinées", "Impact durable sur l'industrie"],
            vigilance: ["Risque d'impatience avec ceux qui ne suivent pas le rythme", "Peut négliger l'humain au profit de la vision", "Tendance à vouloir tout contrôler et révolutionner"],
            ideal_environment: { type_bar: "Concepts disruptifs, Groupes ambitieux, Startups de la food-tech", clientele: "Marchés en transformation", team_size: "VC et fonds qui valorisent l'innovation et la croissance agressive" },
            career_advice: "Tu es fait pour créer des licornes de la restauration. Développe ton empathie pour emmener les gens avec toi.",
            famous_example: "Danny Meyer (Union Square Hospitality)"
        },
        ENFJ: {
            code: "ENFJ",
            title: "Le Transformateur",
            subtitle: "Incarnation • Héritage • Mission • Contrôle",
            description: "Tu es le directeur qui transforme des vies autant que l'industrie. Tu incarnes une mission qui dépasse le business, tu inspires par ta vision humaniste, et tu construis une culture qui change le métier.",
            forces: ["Charisme exceptionnel et vision inspirante", "Capacité à créer une mission mobilisatrice", "Leadership qui transforme les personnes", "Excellence culturelle qui génère la performance", "Impact durable sur l'industrie et les vies"],
            vigilance: ["Risque de se perdre dans la vision au détriment des résultats", "Peut trop s'investir émotionnellement", "Tendance à vouloir sauver tout le monde"],
            ideal_environment: { type_bar: "Concepts à mission sociale, Restaurants engagés", clientele: "Marchés valorisant l'impact et les valeurs", team_size: "Impact investors, fonds ESG, mécènes" },
            career_advice: "Tu es fait pour créer des mouvements qui transforment l'industrie. Apprends à déléguer l'opérationnel.",
            famous_example: "Alice Waters (Chez Panisse)"
        },
        ESTP: {
            code: "ESTP",
            title: "L'Empire Builder Agile",
            subtitle: "Incarnation • Croissance • Business • Opportunisme",
            description: "Tu es le directeur entrepreneur qui construit vite et qui ajuste en temps réel. Tu combines présence terrain, flair pour les opportunités, et exécution rapide.",
            forces: ["Réactivité exceptionnelle aux opportunités", "Leadership pragmatique et crédible", "Capacité à scaler rapidement", "Flair commercial naturel", "Excellence d'exécution sous pression"],
            vigilance: ["Risque de croissance trop rapide et non maîtrisée", "Peut négliger les systèmes au profit de l'action", "Tendance à sous-estimer l'importance de la culture long terme"],
            ideal_environment: { type_bar: "Concepts scalables, Fast-casual premium, Dark kitchens", clientele: "Marchés dynamiques avec opportunités rapides", team_size: "Investisseurs valorisant la rapidité d'exécution" },
            career_advice: "Tu es fait pour les marchés dynamiques où la vitesse prime. Apprends à construire des systèmes qui tiennent dans la durée.",
            famous_example: "David Chang (Momofuku)"
        },
        ESFP: {
            code: "ESFP",
            title: "L'Icône",
            subtitle: "Incarnation • Croissance • Mission • Opportunisme",
            description: "Tu es le directeur star qui crée des expériences mémorables et qui scale avec passion. Tu incarnes ta marque publiquement, tu crées une culture de célébration, et tu saisis les opportunités avec enthousiasme contagieux.",
            forces: ["Charisme médiatique exceptionnel", "Capacité à créer des expériences virales", "Énergie contagieuse qui mobilise", "Authenticité qui crée la connexion", "Sens aigu des tendances et du timing"],
            vigilance: ["Risque de privilégier le buzz sur la rentabilité", "Peut manquer de rigueur opérationnelle", "Tendance à s'épuiser à force de donner"],
            ideal_environment: { type_bar: "Concepts lifestyle, Pop-ups hype, Restaurants événementiels", clientele: "Marchés urbains tendance", team_size: "Investisseurs valorisant la marque et le lifestyle" },
            career_advice: "Tu es fait pour créer des marques cultes. Entoure-toi d'opérationnels solides.",
            famous_example: "Guy Fieri (concept restaurants)"
        },
        ENTP: {
            code: "ENTP",
            title: "Le Disrupteur",
            subtitle: "Incarnation • Héritage • Business • Opportunisme",
            description: "Tu es le directeur qui casse les codes et qui crée des nouvelles catégories. Tu combines charisme intellectuel, innovation permanente, et opportunisme stratégique.",
            forces: ["Créativité stratégique exceptionnelle", "Capacité à créer de nouvelles catégories", "Charisme intellectuel qui fascine", "Agilité et rapidité d'exécution", "Vision disruptive qui transforme les marchés"],
            vigilance: ["Risque de se disperser entre trop d'innovations", "Peut négliger l'exécution au profit de l'idée", "Tendance à s'ennuyer de ce qui marche"],
            ideal_environment: { type_bar: "Concepts disruptifs, R&D culinaire, Food-tech", clientele: "Marchés en transformation, early adopters", team_size: "VC qui parient sur l'innovation" },
            career_advice: "Tu es fait pour révolutionner l'industrie. Apprends à finir ce que tu commences.",
            famous_example: "José Andrés (ThinkFoodGroup)"
        },
        ENFP: {
            code: "ENFP",
            title: "Le Créateur de Mouvement",
            subtitle: "Incarnation • Héritage • Mission • Opportunisme",
            description: "Tu es le directeur qui crée des mouvements culturels autour de la nourriture. Tu combines passion authentique, vision humaniste, et agilité entrepreneuriale.",
            forces: ["Créativité et authenticité exceptionnelles", "Capacité à créer des communautés engagées", "Vision humaniste qui inspire", "Agilité et adaptation naturelles", "Impact culturel durable"],
            vigilance: ["Risque de manquer de structure opérationnelle", "Peut se perdre dans la créativité", "Tendance à trop s'investir émotionnellement"],
            ideal_environment: { type_bar: "Concepts engagés, Restaurants communautaires", clientele: "Marchés valorisant l'authenticité et l'impact", team_size: "Impact investors, crowdfunding, mécènes" },
            career_advice: "Tu es fait pour créer des expériences qui touchent l'âme. Structure ta créativité avec des opérationnels solides.",
            famous_example: "René Redzepi (Noma)"
        },
        ISTJ: {
            code: "ISTJ",
            title: "L'Architecte Silencieux",
            subtitle: "Architecture • Croissance • Business • Contrôle",
            description: "Tu es le directeur qui bâtit des empires par la discipline et les systèmes. Tu pilotes en coulisses avec une rigueur absolue, tu construis une machine parfaitement huilée, et tu livres des résultats constants.",
            forces: ["Excellence opérationnelle et systèmes rigoureux", "Fiabilité absolue dans l'exécution", "Capacité à scaler par réplication", "Discipline financière irréprochable", "Stabilité et pérennité"],
            vigilance: ["Risque de rigidité face aux disruptions", "Peut manquer de visibilité et d'inspiration", "Tendance à résister aux innovations nécessaires"],
            ideal_environment: { type_bar: "Chaînes établies, Franchises, Groupes institutionnels", clientele: "Marchés stables valorisant la constance", team_size: "Fonds valorisant la prévisibilité et la rentabilité stable" },
            career_advice: "Tu es fait pour gérer de grands groupes établis. Développe ton agilité stratégique.",
            famous_example: "Howard Schultz (Starbucks)"
        },
        ISFJ: {
            code: "ISFJ",
            title: "Le Gardien du Temple",
            subtitle: "Architecture • Croissance • Mission • Contrôle",
            description: "Tu es le directeur qui protège l'héritage tout en le faisant grandir. Tu pilotes avec bienveillance et rigueur, tu crées une culture de loyauté exceptionnelle, et tu construis pour durer.",
            forces: ["Fidélisation exceptionnelle des équipes", "Excellence opérationnelle avec humanité", "Capacité à préserver la culture en scalant", "Loyauté et stabilité à long terme", "Croissance maîtrisée et durable"],
            vigilance: ["Risque de résister aux évolutions nécessaires", "Peut manquer de visibilité externe", "Tendance à privilégier la stabilité sur l'innovation"],
            ideal_environment: { type_bar: "Maisons historiques, Groupes familiaux, Institutions culinaires", clientele: "Marchés valorisant la tradition et la transmission", team_size: "Famille, fonds patients, repreneurs respectueux" },
            career_advice: "Tu es fait pour préserver et développer des héritages. Apprends à innover sans trahir.",
            famous_example: "Paul Bocuse (L'Auberge du Pont de Collonges)"
        },
        INTJ: {
            code: "INTJ",
            title: "Le Grand Stratège",
            subtitle: "Architecture • Héritage • Business • Contrôle",
            description: "Tu es le directeur qui construit des empires par la vision et les systèmes. Tu pilotes en coulisses avec une intelligence stratégique rare, tu anticipes les mouvements du marché, et tu construis une domination durable.",
            forces: ["Vision stratégique exceptionnelle à long terme", "Anticipation des disruptions et préparation", "Excellence systémique et architecture parfaite", "Indépendance et autonomie totales", "Capacité à créer des avantages compétitifs durables"],
            vigilance: ["Risque de sur-intellectualiser au détriment de l'humain", "Peut manquer de visibilité et de charisme", "Tendance à sous-estimer l'importance de la culture"],
            ideal_environment: { type_bar: "Groupes stratégiques, Holdings", clientele: "Marchés complexes nécessitant une vision long terme", team_size: "Fonds valorisant la stratégie et l'avantage compétitif" },
            career_advice: "Tu es fait pour créer des empires durables. Apprends à inspirer et à communiquer ta vision.",
            famous_example: "Ferran Adrià (elBulli)"
        },
        INFJ: {
            code: "INFJ",
            title: "Le Visionnaire Silencieux",
            subtitle: "Architecture • Héritage • Mission • Contrôle",
            description: "Tu es le directeur qui transforme l'industrie par une vision profonde et des systèmes pensés. Tu pilotes avec une mission claire et une exécution méticuleuse, tu anticipes les besoins de société, et tu construis pour l'impact.",
            forces: ["Vision transformatrice exceptionnelle", "Capacité à créer une mission mobilisatrice durable", "Excellence culturelle et systémique combinées", "Anticipation des besoins sociétaux", "Impact profond et durable"],
            vigilance: ["Risque de burn-out par sur-investissement dans la mission", "Peut être trop perfectionniste et jamais satisfait", "Tendance à s'isoler dans sa quête"],
            ideal_environment: { type_bar: "Concepts à mission profonde, Restaurants régénératifs", clientele: "Marchés en quête de sens et d'impact", team_size: "Impact investors, fondations, mécènes visionnaires" },
            career_advice: "Tu es fait pour créer des héritages qui transforment. Apprends à déléguer et à protéger ton énergie.",
            famous_example: "Dan Barber (Blue Hill)"
        },
        ISTP: {
            code: "ISTP",
            title: "Le Tacticien Agile",
            subtitle: "Architecture • Croissance • Business • Opportunisme",
            description: "Tu es le directeur qui construit en testant et qui scale par l'adaptation. Tu pilotes par les données et l'expérimentation, tu saisis les opportunités avec pragmatisme, et tu optimises en temps réel.",
            forces: ["Pragmatisme et agilité exceptionnels", "Capacité à tester et scaler rapidement", "Excellence opérationnelle adaptative", "Approche data-driven rigoureuse", "Sang-froid dans les pivots stratégiques"],
            vigilance: ["Risque de manquer de vision long terme", "Peut sous-communiquer avec les équipes", "Tendance à négliger l'aspect culturel"],
            ideal_environment: { type_bar: "Concepts test & learn, Multi-marques, Portfolios diversifiés", clientele: "Marchés dynamiques nécessitant adaptation rapide", team_size: "Fonds valorisant l'agilité et l'expérimentation" },
            career_advice: "Tu es fait pour les environnements en constante évolution. Développe ta communication de vision.",
            famous_example: "Richard Branson (Virgin restaurants)"
        },
        ISFP: {
            code: "ISFP",
            title: "L'Artisan Discret",
            subtitle: "Architecture • Croissance • Mission • Opportunisme",
            description: "Tu es le directeur qui construit avec authenticité et qui scale en préservant l'âme. Tu pilotes avec sensibilité et pragmatisme, tu crées une culture artisanale, et tu saisis les opportunités alignées avec tes valeurs.",
            forces: ["Authenticité et intégrité exceptionnelles", "Capacité à scaler en préservant la culture", "Sensibilité esthétique et humaine", "Adaptation fluide aux opportunités", "Fidélisation par l'authenticité"],
            vigilance: ["Risque de croissance trop lente par excès de prudence", "Peut avoir du mal à s'affirmer stratégiquement", "Tendance à éviter les décisions difficiles nécessaires"],
            ideal_environment: { type_bar: "Groupe artisanal, Maisons de créateurs, Concepts authentiques", clientele: "Marchés valorisant l'authenticité et la qualité", team_size: "Investisseurs patients respectant les valeurs" },
            career_advice: "Tu es fait pour créer des groupes où l'âme reste intacte. Apprends à t'affirmer stratégiquement.",
            famous_example: "Dominique Crenn (Atelier Crenn)"
        },
        INTP: {
            code: "INTP",
            title: "L'Innovateur Systémique",
            subtitle: "Architecture • Héritage • Business • Opportunisme",
            description: "Tu es le directeur qui réinvente les modèles par l'innovation systémique. Tu pilotes par l'expérimentation et l'analyse, tu créés de nouvelles catégories, et tu construis des systèmes révolutionnaires.",
            forces: ["Innovation systémique exceptionnelle", "Capacité à créer de nouveaux modèles", "Intelligence analytique rare", "Agilité dans l'expérimentation", "Vision disruptive des business models"],
            vigilance: ["Risque de se perdre dans la théorie", "Peut manquer de présence et de communication", "Tendance à négliger l'aspect humain et culturel"],
            ideal_environment: { type_bar: "R&D culinaire, Food-tech, Concepts disruptifs", clientele: "Marchés en transformation nécessitant innovation", team_size: "VC early-stage, labs d'innovation" },
            career_advice: "Tu es fait pour révolutionner les modèles. Apprends à vendre ta vision et à finir tes projets.",
            famous_example: "Heston Blumenthal (The Fat Duck)"
        },
        INFP: {
            code: "INFP",
            title: "L'Idéaliste Rebelle",
            subtitle: "Architecture • Héritage • Mission • Opportunisme",
            description: "Tu es le directeur qui construit des restaurants pour changer le monde. Tu pilotes par tes valeurs profondes et ta vision idéaliste, tu crées une culture unique, et tu saisis les opportunités alignées avec ta mission.",
            forces: ["Authenticité et intégrité absolues", "Vision idéaliste qui inspire profondément", "Capacité à créer une culture unique", "Agilité dans la poursuite de la mission", "Impact transformateur sur l'industrie"],
            vigilance: ["Risque de sacrifier la viabilité économique", "Peut manquer de structure et de rigueur", "Tendance à s'épuiser dans sa quête idéaliste"],
            ideal_environment: { type_bar: "Concepts engagés, Restaurants régénératifs, Mouvements alternatifs", clientele: "Marchés en quête de sens et d'alternative", team_size: "Impact investors, crowdfunding, mécènes alignés" },
            career_advice: "Tu es fait pour créer des alternatives qui transforment. Entoure-toi d'opérationnels solides.",
            famous_example: "Yotam Ottolenghi (Ottolenghi restaurants)"
        }
    }
};
