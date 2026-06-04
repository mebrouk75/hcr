export const FULL_SERVEUR = [
    {
        section: "Évaluation Situationnelle (100 Questions)",
        id: "FULL_EVAL",
        items: [
            {
                id: "SERV_001",
                category: "RÉSILIENT",
                title: "Situation 1",
                description: "Un client te parle mal devant toute la salle.",
                type: "SJT",
                options: [
                    { label: "Je reste calme, professionnel, et je continue mon service", value: "A", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je m'excuse immédiatement même si ce n'est pas ma faute", value: "B", profile: "CONCILIANT", trait: "CONCILIANT" },
                    { label: "Je réponds fermement mais poliment qu'il n'a pas à me parler ainsi", value: "C", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Ça me blesse, je vais me calmer 2 minutes dans les vestiaires", value: "D", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "J'appelle le manager pour gérer la situation", value: "E", profile: "AUTONOME", trait: "AUTONOME" }
                ]
            },
            {
                id: "SERV_002",
                category: "OBÉISSANT",
                title: "Situation 2",
                description: "Le Chef de Rang te demande de refaire un dressage. Tu trouves ça injuste.",
                type: "SJT",
                options: [
                    { label: "Je refais sans discuter, c'est lui le chef", value: "A", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je demande calmement pourquoi ce n'est pas bon", value: "B", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je le vis comme une humiliation", value: "C", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "Je refais rapidement pour ne pas perdre de temps", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je refais en notant mentalement ce qu'il veut pour la prochaine fois", value: "E", profile: "RÉSILIENT", trait: "RÉSILIENT" }
                ]
            },
            {
                id: "SERV_003",
                category: "RÉSILIENT",
                title: "Situation 3",
                description: "Il manque un serveur ce soir. Le service va être la guerre.",
                type: "SJT",
                options: [
                    { label: "Pas grave, on va gérer, j'adore les défis", value: "A", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je stresse énormément à l'avance", value: "B", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "Je réorganise mentalement mon rang pour optimiser", value: "C", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" },
                    { label: "J'attends les consignes du Chef de Rang", value: "D", profile: "SUIVEUR", trait: "SUIVEUR" },
                    { label: "Je propose un plan d'action à l'équipe", value: "E", profile: "MENEUR", trait: "MENEUR" }
                ]
            },
            {
                id: "SERV_004",
                category: "OBÉISSANT",
                title: "Situation 4",
                description: "Un client te demande un plat qui n'est pas sur la carte.",
                type: "SJT",
                options: [
                    { label: "Désolé, c'est impossible, la carte est fixe", value: "A", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je vais voir en cuisine ce qu'on peut improviser", value: "B", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" },
                    { label: "Je lui propose une alternative attractive de la carte", value: "C", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "J'appelle le Chef de Rang pour décider", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je compose un plat sur mesure avec ce qu'on a", value: "E", profile: "CRÉATIF", trait: "CRÉATIF" }
                ]
            },
            {
                id: "SERV_005",
                category: "RÉSILIENT",
                title: "Situation 5",
                description: "Tu casses une assiette pleine en plein coup de feu.",
                type: "SJT",
                options: [
                    { label: "Je nettoie rapidement et je repasse la commande sans paniquer", value: "A", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je suis mort de honte, ça me poursuit toute la soirée", value: "B", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "Je gère l'urgence puis je m'excuse au Chef en fin de service", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "J'analyse pourquoi c'est arrivé pour ne plus le refaire", value: "D", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je trouve une solution pour que le client ne s'en rende pas compte", value: "E", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" }
                ]
            },
            {
                id: "SERV_006",
                category: "CONCILIANT",
                title: "Situation 6",
                description: "Un collègue te demande de couvrir son rang 10 minutes. Il disparaît 45 minutes.",
                type: "SJT",
                options: [
                    { label: "Je gère sans rien dire, on est une équipe", value: "A", profile: "CONCILIANT", trait: "CONCILIANT" },
                    { label: "Je lui dis clairement que ce n'est pas correct", value: "B", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je préviens le Chef de Rang immédiatement", value: "C", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je gère mais je ne le referai plus pour lui", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je gère les deux rangs sans broncher, ça forge", value: "E", profile: "RÉSILIENT", trait: "RÉSILIENT" }
                ]
            },
            {
                id: "SERV_007",
                category: "SENSIBLE",
                title: "Situation 7",
                description: "Le Chef de Rang te critique devant un client.",
                type: "SJT",
                options: [
                    { label: "Je suis humilié, ça me détruit", value: "A", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "Je garde mon calme, on en parlera plus tard", value: "B", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je lui demande poliment de me parler en privé", value: "C", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'accepte la critique même si la forme est mauvaise", value: "D", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je vais voir le Directeur après le service", value: "E", profile: "AUTONOME", trait: "AUTONOME" }
                ]
            },
            {
                id: "SERV_008",
                category: "RIGOUREUX",
                title: "Situation 8",
                description: "Un client te laisse 50€ de pourboire rien que pour toi.",
                type: "SJT",
                options: [
                    { label: "Je mets tout dans le pot commun comme le veut la règle", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je garde 25€ et je mets 25€ dans le pot", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je demande au Chef de Rang ce que je dois faire", value: "C", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je garde tout, c'était pour moi", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je partage équitablement avec toute l'équipe", value: "E", profile: "CHALEUREUX", trait: "CHALEUREUX" }
                ]
            },
            {
                id: "SERV_009",
                category: "RIGOUREUX",
                title: "Situation 9",
                description: "La cuisine envoie une assiette ratée. Le client n'a rien vu encore.",
                type: "SJT",
                options: [
                    { label: "Je la renvoie immédiatement en cuisine", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je répare discrètement le dressage moi-même", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je demande au Chef de Rang ce qu'il faut faire", value: "C", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "J'arrange l'assiette en 10 secondes et je sers", value: "D", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" },
                    { label: "Je sers en valorisant le plat pour détourner l'attention", value: "E", profile: "COMMERCIAL", trait: "COMMERCIAL" }
                ]
            },
            {
                id: "SERV_010",
                category: "COMMERCIAL",
                title: "Situation 10",
                description: "Un client veut une table qui n'est pas dans ton rang.",
                type: "SJT",
                options: [
                    { label: "Je lui vante les avantages de ma zone", value: "A", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Désolé, c'est le plan de salle, impossible", value: "B", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je négocie un échange de table avec mon collègue", value: "C", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" },
                    { label: "Je demande au Chef de Rang de trancher", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je lui donne la table même si ce n'est pas mon rang", value: "E", profile: "CONCILIANT", trait: "CONCILIANT" }
                ]
            },
            {
                id: "SERV_011",
                category: "OBÉISSANT",
                title: "Situation 11",
                description: "Le Directeur change les horaires au dernier moment.",
                type: "SJT",
                options: [
                    { label: "J'accepte sans discuter, c'est lui le patron", value: "A", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "J'explique que j'avais prévu autre chose et je négocie", value: "B", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Ça m'énerve mais je ne dis rien et je rumine", value: "C", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "Je m'adapté, c'est la restauration", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Pas de souci, je gère, ça arrive", value: "E", profile: "RÉSILIENT", trait: "RÉSILIENT" }
                ]
            },
            {
                id: "SERV_012",
                category: "RÉSILIENT",
                title: "Situation 12",
                description: "Tu es seul en salle avec 12 tables qui arrivent en même temps.",
                type: "SJT",
                options: [
                    { label: "Pas de panique, je priorise et j'y vais méthodiquement", value: "A", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je panique intérieurement mais je fais semblant", value: "B", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "Je trouve des astuces pour tout gérer en parallèle", value: "C", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" },
                    { label: "Je demande de l'aide au bar ou à la cuisine", value: "D", profile: "MENEUR", trait: "MENEUR" },
                    { label: "Je fonce à fond de balle, vitesse max", value: "E", profile: "RAPIDE", trait: "RAPIDE" }
                ]
            },
            {
                id: "SERV_013",
                category: "TECHNIQUE",
                title: "Situation 13",
                description: "Un client demande ton avis personnel sur un vin.",
                type: "SJT",
                options: [
                    { label: "Je décris les caractéristiques œnologiques précises", value: "A", profile: "TECHNIQUE", trait: "TECHNIQUE" },
                    { label: "Je suggère le vin le plus cher qui correspond", value: "B", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je partage mon ressenti personnel et mes préférences", value: "C", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "J'appelle le Sommelier, c'est pas mon domaine", value: "D", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je raconte l'histoire du domaine pour le séduire", value: "E", profile: "CRÉATIF", trait: "CRÉATIF" }
                ]
            },
            {
                id: "SERV_014",
                category: "OBÉISSANT",
                title: "Situation 14",
                description: "Le Chef de Rang te demande de débarrasser pendant que tu prends une commande.",
                type: "SJT",
                options: [
                    { label: "Je m'excuse auprès du client et j'obéis", value: "A", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je finis ma prise de commande puis je débarrasse", value: "B", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je fais les deux en même temps", value: "C", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" },
                    { label: "Je débarrasse rapidement et je reviens au client", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je priorise le client, c'est lui qui compte", value: "E", profile: "ATTENTIF", trait: "ATTENTIF" }
                ]
            },
            {
                id: "SERV_015",
                category: "AFFIRMÉ",
                title: "Situation 15",
                description: "Un client te drague lourdement pendant tout le service.",
                type: "SJT",
                options: [
                    { label: "Je pose gentiment mais fermement les limites", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je joue le jeu pour le pourboire", value: "B", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "J'évite la table et je demande à un collègue de prendre le relais", value: "C", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je reste aimable mais je redirige sur le professionnel", value: "D", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "J'en parle au Chef de Rang pour qu'il gère", value: "E", profile: "AUTONOME", trait: "AUTONOME" }
                ]
            },
            {
                id: "SERV_016",
                category: "COMMERCIAL",
                title: "Situation 16",
                description: "La cuisine est en retard de 40 minutes sur une table.",
                type: "SJT",
                options: [
                    { label: "J'offre l'apéritif et je valorise l'attente (fait maison, etc.)", value: "A", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je m'excuse sincèrement et je reste attentif à eux", value: "B", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "J'explique factuellement le retard sans sur-jouer", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je trouve des petites attentions pour les faire patienter", value: "D", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" },
                    { label: "J'attends les consignes du Chef de Rang", value: "E", profile: "OBÉISSANT", trait: "OBÉISSANT" }
                ]
            },
            {
                id: "SERV_017",
                category: "OBÉISSANT",
                title: "Situation 17",
                description: "Le Directeur te demande de travailler un jour férié non prévu.",
                type: "SJT",
                options: [
                    { label: "Oui chef, aucun problème", value: "A", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je refuse poliment, j'avais prévu autre chose", value: "B", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je négocie une contrepartie (récup, prime)", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "J'accepte à contrecœur pour ne pas faire de vagues", value: "D", profile: "CONCILIANT", trait: "CONCILIANT" },
                    { label: "Pas de souci, ça fait partie du jeu", value: "E", profile: "RÉSILIENT", trait: "RÉSILIENT" }
                ]
            },
            {
                id: "SERV_018",
                category: "CHALEUREUX",
                title: "Situation 18",
                description: "Un enfant renverse son verre sur la nappe blanche.",
                type: "SJT",
                options: [
                    { label: "Je rassure les parents en souriant, ce n'est rien", value: "A", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je nettoie en 30 secondes sans faire d'histoire", value: "B", profile: "RAPIDE", trait: "RAPIDE" },
                    { label: "Je change la nappe complète selon le protocole", value: "C", profile: "TECHNIQUE", trait: "TECHNIQUE" },
                    { label: "Je cache la tache avec un set et je continue", value: "D", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" },
                    { label: "Je nettoie parfaitement même si ça prend du temps", value: "E", profile: "RIGOUREUX", trait: "RIGOUREUX" }
                ]
            },
            {
                id: "SERV_019",
                category: "MENEUR",
                title: "Situation 19",
                description: "Le Chef de Rang est absent. Personne ne prend le lead.",
                type: "SJT",
                options: [
                    { label: "Je prends les choses en main et je coordonne", value: "A", profile: "MENEUR", trait: "MENEUR" },
                    { label: "J'attends qu'un manager descende", value: "B", profile: "SUIVEUR", trait: "SUIVEUR" },
                    { label: "Je gère mon rang impeccablement, les autres se débrouillent", value: "C", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je propose un plan simple pour tenir le service", value: "D", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" },
                    { label: "Je fais exactement ce qui était prévu, pas plus", value: "E", profile: "OBÉISSANT", trait: "OBÉISSANT" }
                ]
            },
            {
                id: "SERV_020",
                category: "TECHNIQUE",
                title: "Situation 20",
                description: "Un client te demande de lui recommander LE meilleur plat.",
                type: "SJT",
                options: [
                    { label: "Je détaille les techniques de cuisson et ingrédients", value: "A", profile: "TECHNIQUE", trait: "TECHNIQUE" },
                    { label: "Je pousse le plat le plus cher", value: "B", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je partage mon coup de cœur personnel", value: "C", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je pose des questions sur ses goûts avant de conseiller", value: "D", profile: "ATTENTIF", trait: "ATTENTIF" },
                    { label: "Je raconte l'histoire du plat pour le faire rêver", value: "E", profile: "CRÉATIF", trait: "CRÉATIF" }
                ]
            },
            {
                id: "SERV_021",
                category: "RIGOUREUX",
                title: "Situation 21",
                description: "Tu trouves une erreur dans l'addition d'un client (en sa faveur).",
                type: "SJT",
                options: [
                    { label: "Je corrige immédiatement, c'est une question de principe", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Si c'est petit, je laisse filer", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je demande au Chef de Rang ce qu'il faut faire", value: "C", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je laisse, ça créera de la bonne volonté", value: "D", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je ne dis rien, ce n'est pas mon problème", value: "E", profile: "DISCRET", trait: "DISCRET" }
                ]
            },
            {
                id: "SERV_022",
                category: "CHALEUREUX",
                title: "Situation 22",
                description: "Un collègue pleure dans les vestiaires avant le service.",
                type: "SJT",
                options: [
                    { label: "Je prends 5 minutes pour écouter et rassurer", value: "A", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je lui demande s'il peut tenir le service", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je le laisse tranquille, c'est sa vie privée", value: "C", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je préviens le Chef de Rang", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je propose de couvrir son rang s'il ne peut pas", value: "E", profile: "MENEUR", trait: "MENEUR" }
                ]
            },
            {
                id: "SERV_023",
                category: "AFFIRMÉ",
                title: "Situation 23",
                description: "Le Directeur te demande ton avis sur le nouveau menu.",
                type: "SJT",
                options: [
                    { label: "Je donne mon avis franc et argumenté", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je dis que c'est parfait même si j'ai des doutes", value: "B", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je propose des améliorations créatives", value: "C", profile: "CRÉATIF", trait: "CRÉATIF" },
                    { label: "J'analyse factuellement ce qui marche/marche pas", value: "D", profile: "TECHNIQUE", trait: "TECHNIQUE" },
                    { label: "Je ne dis rien, je ne suis qu'un serveur", value: "E", profile: "DISCRET", trait: "DISCRET" }
                ]
            },
            {
                id: "SERV_024",
                category: "DÉBROUILLARD",
                title: "Situation 24",
                description: "Un VIP demande une table non disponible.",
                type: "SJT",
                options: [
                    { label: "Je trouve une solution créative pour libérer la table", value: "A", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" },
                    { label: "Je lui propose la meilleure alternative avec valorisation", value: "B", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Désolé, c'est réservé, je ne peux rien faire", value: "C", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je demande au Directeur de gérer", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je négocie un échange avec les clients déjà installés", value: "E", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" }
                ]
            },
            {
                id: "SERV_025",
                category: "AFFIRMÉ",
                title: "Situation 25",
                description: "Tu sens que l'ambiance dans l'équipe est toxique.",
                type: "SJT",
                options: [
                    { label: "J'en parle ouvertement en réunion d'équipe", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je fais mon job et j'évite les conflits", value: "B", profile: "DISCRET", trait: "DISCRET" },
                    { label: "J'organise un moment informel pour détendre l'atmosphère", value: "C", profile: "MENEUR", trait: "MENEUR" },
                    { label: "J'alerte le Directeur en privé", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je ne me laisse pas affecter, je reste focus", value: "E", profile: "RÉSILIENT", trait: "RÉSILIENT" }
                ]
            },
            {
                id: "SERV_026",
                category: "RIGOUREUX",
                title: "Situation 26",
                description: "Un client allergique demande si un plat contient de l'arachide. Tu ne sais pas.",
                type: "SJT",
                options: [
                    { label: "Je vais vérifier EN CUISINE, c'est vital", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je lis la carte et je déduis", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "J'appelle le Chef de Rang immédiatement", value: "C", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je propose un plat dont je suis sûr qu'il est safe", value: "D", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" },
                    { label: "Je connais la composition de chaque plat par cœur", value: "E", profile: "TECHNIQUE", trait: "TECHNIQUE" }
                ]
            },
            {
                id: "SERV_027",
                category: "PRAGMATIQUE",
                title: "Situation 27",
                description: "Le service est calme. Le Chef de Rang t'autorise à partir 1h plus tôt.",
                type: "SJT",
                options: [
                    { label: "Je pars direct, content de récupérer", value: "A", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je finis mes tâches de fin de service avant de partir", value: "B", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je propose à un collègue fatigué de partir à ma place", value: "C", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je demande si je peux vraiment partir ou si je reste par sécurité", value: "D", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je reste pour aider à préparer le service du lendemain", value: "E", profile: "MENEUR", trait: "MENEUR" }
                ]
            },
            {
                id: "SERV_028",
                category: "OBÉISSANT",
                title: "Situation 28",
                description: "Un client te demande le WiFi alors que c'est interdit.",
                type: "SJT",
                options: [
                    { label: "Désolé, c'est la politique de la maison", value: "A", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je lui file discrètement le code staff", value: "B", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" },
                    { label: "J'explique gentiment pourquoi on ne le donne pas", value: "C", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je demande au manager s'il y a une exception possible", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je fais une exception, ça ne mange pas de pain", value: "E", profile: "CONCILIANT", trait: "CONCILIANT" }
                ]
            },
            {
                id: "SERV_029",
                category: "RIGOUREUX",
                title: "Situation 29",
                description: "Tu oublies de transmettre une allergie à la cuisine. Le plat arrive.",
                type: "SJT",
                options: [
                    { label: "Je bloque l'assiette immédiatement et je la renvoie", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je panique intérieurement, je culpabilise énormément", value: "B", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "Je vérifie discrètement la composition avant de servir", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "J'assume mon erreur auprès du client et je corrige", value: "D", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je retire moi-même l'allergène si possible", value: "E", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" }
                ]
            },
            {
                id: "SERV_030",
                category: "MENEUR",
                title: "Situation 30",
                description: "Le Directeur te propose de devenir Chef de Rang.",
                type: "SJT",
                options: [
                    { label: "J'accepte avec enthousiasme, j'attendais ça", value: "A", profile: "MENEUR", trait: "MENEUR" },
                    { label: "Je flippe de la responsabilité mais j'accepte", value: "B", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "Je négocie les conditions (salaire, horaires) avant d'accepter", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Challenge accepté, je vais me donner à fond", value: "D", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je refuse, je préfère rester serveur sans pression", value: "E", profile: "SUIVEUR", trait: "SUIVEUR" }
                ]
            },
            {
                id: "SERV_031",
                category: "RÉSILIENT",
                title: "Situation 31",
                description: "Un client critique violemment le plat devant toi.",
                type: "SJT",
                options: [
                    { label: "Je ne le prends pas personnellement, je reste pro", value: "A", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je m'excuse sincèrement et propose une alternative", value: "B", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je défends poliment le travail du Chef", value: "C", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'appelle le manager pour gérer", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je transforme ça en opportunité de vente croisée", value: "E", profile: "COMMERCIAL", trait: "COMMERCIAL" }
                ]
            },
            {
                id: "SERV_032",
                category: "RIGOUREUX",
                title: "Situation 32",
                description: "Le Chef de Rang te demande de mentir sur la provenance d'un produit.",
                type: "SJT",
                options: [
                    { label: "Je refuse catégoriquement, c'est illégal", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je mens comme demandé, c'est lui le chef", value: "B", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "J'en parle au Directeur", value: "C", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'évite de répondre précisément à la question", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je change de sujet avec le client", value: "E", profile: "DISCRET", trait: "DISCRET" }
                ]
            },
            {
                id: "SERV_033",
                category: "RÉSILIENT",
                title: "Situation 33",
                description: "Une table de 12 ne laisse AUCUN pourboire après 3h de service impeccable.",
                type: "SJT",
                options: [
                    { label: "Pas grave, ça arrive, je passe à autre chose", value: "A", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je suis déçu et blessé", value: "B", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "C'est la vie, je compense sur les autres tables", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je demande poliment s'il y avait un souci", value: "D", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'analyse ce que j'aurais pu mieux vendre", value: "E", profile: "COMMERCIAL", trait: "COMMERCIAL" }
                ]
            },

            {
                id: "SERV_034",
                category: "DISCRET",
                title: "Situation 34",
                description: "Un couple se dispute violemment à table.",
                type: "SJT",
                options: [
                    { label: "Je fais comme si je ne voyais rien", value: "A", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je viens détendre l'atmosphère avec humour", value: "B", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je préviens le Chef de Rang", value: "C", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je reste à proximité au cas où ça dégénère", value: "D", profile: "ATTENTIF", trait: "ATTENTIF" },
                    { label: "J'accélère le service pour qu'ils partent vite", value: "E", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" }
                ]
            },
            {
                id: "SERV_035",
                category: "AFFIRMÉ",
                title: "Situation 35",
                description: "Le Directeur te demande de travailler gratuitement pour une soirée privée.",
                type: "SJT",
                options: [
                    { label: "Je refuse, c'est illégal et irrespectueux", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'accepte, je ne veux pas de problèmes", value: "B", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je négocie une contrepartie (récup, cadeau)", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "J'accepte à contrecœur pour garder ma place", value: "D", profile: "CONCILIANT", trait: "CONCILIANT" },
                    { label: "Je contacte les RH ou un délégué du personnel", value: "E", profile: "AUTONOME", trait: "AUTONOME" }
                ]
            },
            {
                id: "SERV_036",
                category: "RÉSILIENT",
                title: "Situation 36",
                description: "Un client fait une crise cardiaque en plein service.",
                type: "SJT",
                options: [
                    { label: "Je garde mon sang-froid, j'appelle les secours, je gère", value: "A", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je panique complètement", value: "B", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "J'applique les gestes de premiers secours que je connais", value: "C", profile: "TECHNIQUE", trait: "TECHNIQUE" },
                    { label: "J'appelle immédiatement le Directeur", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je coordonne l'évacuation et je rassure les autres clients", value: "E", profile: "MENEUR", trait: "MENEUR" }
                ]
            },
            {
                id: "SERV_037",
                category: "RIGOUREUX",
                title: "Situation 37",
                description: "Tu remarques qu'un collègue vole dans la caisse.",
                type: "SJT",
                options: [
                    { label: "Je le dénonce au Directeur immédiatement", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je lui parle directement pour qu'il arrête", value: "B", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Ce n'est pas mon problème, je ne dis rien", value: "C", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je note mentalement et j'observe avant d'agir", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je lui demande s'il a des problèmes d'argent", value: "E", profile: "CHALEUREUX", trait: "CHALEUREUX" }
                ]
            },
            {
                id: "SERV_038",
                category: "AFFIRMÉ",
                title: "Situation 38",
                description: "Le Chef de Rang favorise ouvertement certains serveurs.",
                type: "SJT",
                options: [
                    { label: "J'en parle directement avec lui", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'alerte le Directeur", value: "B", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je travaille deux fois plus pour prouver ma valeur", value: "C", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je l'accepte en silence, c'est comme ça partout", value: "D", profile: "DISCRET", trait: "DISCRET" },
                    { label: "J'essaie de rentrer dans ses bonnes grâces", value: "E", profile: "SUIVEUR", trait: "SUIVEUR" }
                ]
            },
            {
                id: "SERV_039",
                category: "AFFIRMÉ",
                title: "Situation 39",
                description: "Un client ivre insiste pour reprendre sa voiture.",
                type: "SJT",
                options: [
                    { label: "Je refuse de le laisser partir et j'appelle un taxi", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je lui propose un café et je temporise", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Ce n'est pas mon rôle, je le laisse partir", value: "C", profile: "DISCRET", trait: "DISCRET" },
                    { label: "J'appelle le Directeur ou la police", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je le convaincs gentiment de laisser sa voiture", value: "E", profile: "CHALEUREUX", trait: "CHALEUREUX" }
                ]
            },
            {
                id: "SERV_040",
                category: "RIGOUREUX",
                title: "Situation 40",
                description: "Le restaurant est vide un soir de semaine. Que fais-tu ?",
                type: "SJT",
                options: [
                    { label: "Je prépare méticuleusement pour le lendemain", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je demande à partir plus tôt", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je propose des idées pour attirer plus de clients", value: "C", profile: "CRÉATIF", trait: "CRÉATIF" },
                    { label: "J'attends les consignes du Chef de Rang", value: "D", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je reste disponible sans rien faire", value: "E", profile: "DISCRET", trait: "DISCRET" }
                ]
            },
            {
                id: "SERV_041",
                category: "AFFIRMÉ",
                title: "Situation 41",
                description: "Un client te demande ton numéro de téléphone.",
                type: "SJT",
                options: [
                    { label: "Je refuse poliment mais fermement", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je joue l'ambiguïté pour le pourboire", value: "B", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je donne mon Instagram professionnel à la place", value: "C", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je fais semblant de ne pas avoir entendu", value: "D", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je donne un faux numéro", value: "E", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" }
                ]
            },
            {
                id: "SERV_042",
                category: "RÉSILIENT",
                title: "Situation 42",
                description: "Le Chef t'engueule violemment en cuisine devant tout le monde.",
                type: "SJT",
                options: [
                    { label: "J'encaisse sans broncher, ça passe", value: "A", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je suis humilié, ça me marque longtemps", value: "B", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "Je lui demande de me parler en privé", value: "C", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'en parle au Directeur après le service", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "J'accepte, il a sûrement raison", value: "E", profile: "OBÉISSANT", trait: "OBÉISSANT" }
                ]
            },
            {
                id: "SERV_043",
                category: "MENEUR",
                title: "Situation 43",
                description: "Un nouveau serveur t'observe pour apprendre.",
                type: "SJT",
                options: [
                    { label: "Je prends le temps de lui expliquer mes techniques", value: "A", profile: "MENEUR", trait: "MENEUR" },
                    { label: "Il observe, je réponds à ses questions", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je fais mon job normalement, il se débrouille", value: "C", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je le mets en confiance et je le rassure", value: "D", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je lui transmets les protocoles précis", value: "E", profile: "TECHNIQUE", trait: "TECHNIQUE" }
                ]
            },
            {
                id: "SERV_044",
                category: "AFFIRMÉ",
                title: "Situation 44",
                description: "Le Directeur te demande ton avis sur un collègue en difficulté.",
                type: "SJT",
                options: [
                    { label: "Je donne mon avis honnête et constructif", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je refuse de balancer un collègue", value: "B", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je rapporte des faits objectifs sans jugement", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je défends mon collègue et propose de l'aider", value: "D", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je dis ce que le Directeur veut entendre", value: "E", profile: "OBÉISSANT", trait: "OBÉISSANT" }
                ]
            },
            {
                id: "SERV_045",
                category: "RÉSILIENT",
                title: "Situation 45",
                description: "Un client part sans payer (addition de 150€).",
                type: "SJT",
                options: [
                    { label: "Je cours après lui calmement mais fermement", value: "A", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je panique, je vais me faire engueuler", value: "B", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "J'alerte immédiatement le Directeur", value: "C", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je note la description et j'appelle la police", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je ne dis rien, j'ai peur qu'on me fasse payer", value: "E", profile: "DISCRET", trait: "DISCRET" }
                ]
            },
            {
                id: "SERV_046",
                category: "OBÉISSANT",
                title: "Situation 46",
                description: "Le Chef de Rang te demande de faire ses tâches à sa place.",
                type: "SJT",
                options: [
                    { label: "Je le fais sans discuter", value: "A", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je refuse, ce n'est pas mon rôle", value: "B", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je le fais cette fois mais je pose mes limites", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je le fais pour éviter les conflits", value: "D", profile: "CONCILIANT", trait: "CONCILIANT" },
                    { label: "J'en parle au Directeur", value: "E", profile: "AUTONOME", trait: "AUTONOME" }
                ]
            },
            {
                id: "SERV_047",
                category: "RÉSILIENT",
                title: "Situation 47",
                description: "Un critique gastronomique anonyme est peut-être dans la salle.",
                type: "SJT",
                options: [
                    { label: "Je reste naturel, je fais mon job impeccable comme d'hab", value: "A", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je stresse énormément, ça me paralyse", value: "B", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "Je sur-perfectionne chaque détail", value: "C", profile: "PERFECTIONNISTE", trait: "PERFECTIONNISTE" },
                    { label: "Je fais du bon boulot sans me mettre la pression", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je vérifie 3 fois chaque protocole", value: "E", profile: "TECHNIQUE", trait: "TECHNIQUE" }
                ]
            },
            {
                id: "SERV_048",
                category: "RIGOUREUX",
                title: "Situation 48",
                description: "Un collègue fait une grosse erreur. Le Chef de Rang cherche le coupable.",
                type: "SJT",
                options: [
                    { label: "Je dis la vérité même si c'est mon collègue", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je me tais, je ne balance personne", value: "B", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je couvre mon collègue", value: "C", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "J'encourage mon collègue à assumer", value: "D", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je dis que je ne sais pas", value: "E", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" }
                ]
            },
            {
                id: "SERV_049",
                category: "RIGOUREUX",
                title: "Situation 49",
                description: "Le Directeur te propose une prime contre des heures sup non déclarées.",
                type: "SJT",
                options: [
                    { label: "Je refuse, c'est illégal", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "J'accepte si la prime est intéressante", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "J'accepte, c'est le patron", value: "C", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je négocie des heures déclarées au lieu de la prime", value: "D", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'accepte et je ne dis rien", value: "E", profile: "DISCRET", trait: "DISCRET" }
                ]
            },
            {
                id: "SERV_050",
                category: "DISCRET",
                title: "Situation 50",
                description: "Un client célèbre vient dîner incognito.",
                type: "SJT",
                options: [
                    { label: "Je le traite exactement comme n'importe qui", value: "A", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je lui fais comprendre discrètement que j'ai reconnu mais je respecte", value: "B", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je surjoue l'attention pour créer du lien", value: "C", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Service impeccable sans en faire des tonnes", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Célébrité ou pas, même exigence de qualité", value: "E", profile: "RÉSILIENT", trait: "RÉSILIENT" }
                ]
            },
            {
                id: "SERV_051",
                category: "AFFIRMÉ",
                title: "Situation 51",
                description: "Le planning affiché ne respecte pas les 11h de repos légal.",
                type: "SJT",
                options: [
                    { label: "Je le signale au Directeur immédiatement", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je suis le planning sans rien dire", value: "B", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je négocie un aménagement avec le Chef de Rang", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je contacte l'inspection du travail", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je tiens le coup, ça passera", value: "E", profile: "RÉSILIENT", trait: "RÉSILIENT" }
                ]
            },
            {
                id: "SERV_052",
                category: "RIGOUREUX",
                title: "Situation 52",
                description: "Un client te donne un objet de valeur à garder (montre, portefeuille).",
                type: "SJT",
                options: [
                    { label: "Je refuse poliment, je ne suis pas responsable", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je le mets dans le coffre selon la procédure", value: "B", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je le garde sur moi le temps du service", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "J'accepte pour lui rendre service", value: "D", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je lui conseille de le garder avec lui", value: "E", profile: "DISCRET", trait: "DISCRET" }
                ]
            },
            {
                id: "SERV_053",
                category: "MENEUR",
                title: "Situation 53",
                description: "Le Chef de Rang est clairement incompétent.",
                type: "SJT",
                options: [
                    { label: "Je prends le lead discrètement pour sauver le service", value: "A", profile: "MENEUR", trait: "MENEUR" },
                    { label: "J'en parle au Directeur", value: "B", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je suis ses ordres même si c'est mauvais", value: "C", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je fais mon job et je ne me mêle pas", value: "D", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je l'aide discrètement sans le ridiculiser", value: "E", profile: "CHALEUREUX", trait: "CHALEUREUX" }
                ]
            },
            {
                id: "SERV_054",
                category: "OBÉISSANT",
                title: "Situation 54",
                description: "Un client demande à voir le Chef pour le féliciter.",
                type: "SJT",
                options: [
                    { label: "Je transmets au Chef de Rang qui décide", value: "A", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je vais chercher le Chef moi-même", value: "B", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" },
                    { label: "Je valorise encore plus le Chef avant d'aller le chercher", value: "C", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je vérifie que le Chef est dispo avant", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "J'accompagne le client en cuisine pour créer le moment", value: "E", profile: "CHALEUREUX", trait: "CHALEUREUX" }
                ]
            },
            {
                id: "SERV_055",
                category: "OBÉISSANT",
                title: "Situation 55",
                description: "Tu es malade mais le service est déjà short en personnel.",
                type: "SJT",
                options: [
                    { label: "Je viens quand même, le service passe avant", value: "A", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je reste chez moi, je ne peux pas bosser malade", value: "B", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je viens mais je préviens que je tiens pas toute la soirée", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je viens à contrecœur pour ne pas laisser tomber l'équipe", value: "D", profile: "CONCILIANT", trait: "CONCILIANT" },
                    { label: "Je viens, un Doliprane et ça passe", value: "E", profile: "RÉSILIENT", trait: "RÉSILIENT" }
                ]
            },
            {
                id: "SERV_056",
                category: "AUTONOME",
                title: "Situation 56",
                description: "Un client veut absolument parler au Directeur (pour se plaindre).",
                type: "SJT",
                options: [
                    { label: "J'appelle le Directeur immédiatement", value: "A", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "J'essaie de désamorcer moi-même avant", value: "B", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je transmets au Chef de Rang qui gère", value: "C", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "J'écoute sa plainte et je le rassure", value: "D", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je lui propose une compensation immédiate", value: "E", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" }
                ]
            },
            {
                id: "SERV_057",
                category: "OBÉISSANT",
                title: "Situation 57",
                description: "Le Directeur te demande d'espionner un collègue suspect.",
                type: "SJT",
                options: [
                    { label: "J'accepte et je surveille", value: "A", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je refuse, ce n'est pas mon rôle", value: "B", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'observe sans m'impliquer", value: "C", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je demande pourquoi avant d'accepter", value: "D", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je préviens mon collègue", value: "E", profile: "CHALEUREUX", trait: "CHALEUREUX" }
                ]
            },
            {
                id: "SERV_058",
                category: "RIGOUREUX",
                title: "Situation 58",
                description: "Un client laisse son téléphone sur la table et part.",
                type: "SJT",
                options: [
                    { label: "Je cours après lui immédiatement", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je le donne au Chef de Rang", value: "B", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je le garde derrière le bar et j'attends qu'il revienne", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "J'appelle le dernier numéro pour le prévenir", value: "D", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" },
                    { label: "Je le mets dans le coffre sans rien dire", value: "E", profile: "DISCRET", trait: "DISCRET" }
                ]
            },
            {
                id: "SERV_059",
                category: "AFFIRMÉ",
                title: "Situation 59",
                description: "Le Chef de Rang te reproche une erreur que tu n'as pas faite.",
                type: "SJT",
                options: [
                    { label: "Je rétablis la vérité calmement mais fermement", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'accepte pour éviter le conflit", value: "B", profile: "CONCILIANT", trait: "CONCILIANT" },
                    { label: "Je dis que ce n'est pas moi mais je ne cherche pas le coupable", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Peu importe, je passe à autre chose", value: "D", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je m'excuse quand même", value: "E", profile: "OBÉISSANT", trait: "OBÉISSANT" }
                ]
            },
            {
                id: "SERV_060",
                category: "RIGOUREUX",
                title: "Situation 60",
                description: "Un collègue sent l'alcool pendant le service.",
                type: "SJT",
                options: [
                    { label: "Je le signale au Chef de Rang immédiatement", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je lui demande discrètement s'il va bien", value: "B", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Ce n'est pas mon problème", value: "C", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je couvre son rang s'il est en difficulté", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je lui demande de partir avant qu'il fasse une erreur", value: "E", profile: "MENEUR", trait: "MENEUR" }
                ]
            },
            {
                id: "SERV_061",
                category: "AFFIRMÉ",
                title: "Situation 61",
                description: "Le Directeur te propose un CDI mais avec un salaire inférieur au marché.",
                type: "SJT",
                options: [
                    { label: "Je négocie fermement un salaire juste", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'accepte, au moins j'ai la sécurité", value: "B", profile: "CONCILIANT", trait: "CONCILIANT" },
                    { label: "J'accepte temporairement en cherchant mieux ailleurs", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "J'accepte sans discuter", value: "D", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je refuse et je cherche ailleurs", value: "E", profile: "AUTONOME", trait: "AUTONOME" }
                ]
            },
            {
                id: "SERV_062",
                category: "CHALEUREUX",
                title: "Situation 62",
                description: "Un client te raconte sa vie pendant 20 minutes alors que tu as d'autres tables.",
                type: "SJT",
                options: [
                    { label: "J'écoute attentivement, c'est important pour lui", value: "A", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "J'écoute 2 minutes puis je m'excuse poliment", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je lui coupe gentiment la parole", value: "C", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'écoute si c'est un gros client", value: "D", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je fais semblant d'écouter en pensant à autre chose", value: "E", profile: "DISCRET", trait: "DISCRET" }
                ]
            },
            {
                id: "SERV_063",
                category: "RIGOUREUX",
                title: "Situation 63",
                description: "Le Chef de Rang te demande de servir du vin bouchonné sans le dire.",
                type: "SJT",
                options: [
                    { label: "Je refuse catégoriquement", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je le fais comme demandé", value: "B", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "J'en parle au Directeur", value: "C", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je change discrètement la bouteille", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je sers en croisant les doigts que le client ne s'en rende pas compte", value: "E", profile: "COMMERCIAL", trait: "COMMERCIAL" }
                ]
            },
            {
                id: "SERV_064",
                category: "COMMERCIAL",
                title: "Situation 64",
                description: "Un client régulier te demande une faveur (table réservée à une autre).",
                type: "SJT",
                options: [
                    { label: "Je fais tout pour lui faire plaisir", value: "A", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Désolé, impossible, il faut respecter les réservations", value: "B", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je trouve une solution créative", value: "C", profile: "DÉBROUILLARD", trait: "DÉBROUILLARD" },
                    { label: "Je demande au Chef de Rang", value: "D", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je lui propose une table équivalente", value: "E", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" }
                ]
            },
            {
                id: "SERV_065",
                category: "OBÉISSANT",
                title: "Situation 65",
                description: "Le service est fini. Le Chef de Rang demande qui veut rester pour nettoyer à fond.",
                type: "SJT",
                options: [
                    { label: "Je reste si on me le demande", value: "A", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je pars, j'ai fait mes heures", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je propose qu'on le fasse tous ensemble rapidement", value: "C", profile: "MENEUR", trait: "MENEUR" },
                    { label: "Je reste, pas de souci", value: "D", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je file avant qu'on me désigne", value: "E", profile: "DISCRET", trait: "DISCRET" }
                ]
            },
            {
                id: "SERV_066",
                category: "RIGOUREUX",
                title: "Situation 66",
                description: "Un client te demande si le poisson est vraiment frais.",
                type: "SJT",
                options: [
                    { label: "Je vérifie en cuisine avant de répondre", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Bien sûr, arrivage du matin (même si je ne sais pas)", value: "B", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je lui explique notre circuit d'approvisionnement", value: "C", profile: "TECHNIQUE", trait: "TECHNIQUE" },
                    { label: "Je répète ce qu'on m'a dit de dire", value: "D", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je lui propose un autre plat si j'ai un doute", value: "E", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" }
                ]
            },

            {
                id: "SERV_067",
                category: "AFFIRMÉ",
                title: "Situation 67",
                description: "Le Directeur te demande de venir à une réunion non payée.",
                type: "SJT",
                options: [
                    { label: "Je demande à être payé pour cette réunion", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je viens gratuitement", value: "B", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je viens si c'est court, sinon je refuse", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je viens pour ne pas faire de vagues", value: "D", profile: "CONCILIANT", trait: "CONCILIANT" },
                    { label: "Je refuse, c'est illégal", value: "E", profile: "AUTONOME", trait: "AUTONOME" }
                ]
            },
            {
                id: "SERV_068",
                category: "AFFIRMÉ",
                title: "Situation 68",
                description: "Un client te fait un compliment très appuyé sur ton physique.",
                type: "SJT",
                options: [
                    { label: "Je recadre poliment mais fermement", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je souris et j'encaisse pour le pourboire", value: "B", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je fais comme si je n'avais pas entendu", value: "C", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je dédramatise avec humour", value: "D", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "J'en parle au Chef de Rang", value: "E", profile: "AUTONOME", trait: "AUTONOME" }
                ]
            },
            {
                id: "SERV_069",
                category: "AFFIRMÉ",
                title: "Situation 69",
                description: "Le Chef de Rang favorise un serveur qui fait moins bien que toi.",
                type: "SJT",
                options: [
                    { label: "Je demande une explication au Chef de Rang", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je continue d'exceller, ça finira par payer", value: "B", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je le vis mal et ça me démotive", value: "C", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "J'en parle au Directeur", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je cherche un autre restaurant", value: "E", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" }
                ]
            },
            {
                id: "SERV_070",
                category: "RÉSILIENT",
                title: "Situation 70",
                description: "Un inspecteur hygiène surprise arrive en plein service.",
                type: "SJT",
                options: [
                    { label: "Je reste calme et professionnel", value: "A", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je stresse énormément", value: "B", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "Je préviens immédiatement le Directeur", value: "C", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "J'attends les consignes", value: "D", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je suis serein, on respecte toutes les normes", value: "E", profile: "RIGOUREUX", trait: "RIGOUREUX" }
                ]
            },
            {
                id: "SERV_071",
                category: "CHALEUREUX",
                title: "Situation 71",
                description: "Un collègue te demande de couvrir ses erreurs auprès du Chef de Rang.",
                type: "SJT",
                options: [
                    { label: "Je le couvre, on est une équipe", value: "A", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je refuse, il doit assumer", value: "B", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je couvre cette fois mais c'est la dernière", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je lui dis d'aller s'expliquer lui-même", value: "D", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je ne dis rien ni pour ni contre", value: "E", profile: "DISCRET", trait: "DISCRET" }
                ]
            },
            {
                id: "SERV_072",
                category: "AFFIRMÉ",
                title: "Situation 72",
                description: "Le Directeur te propose de travailler au black quelques services.",
                type: "SJT",
                options: [
                    { label: "Je refuse catégoriquement", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'accepte si c'est bien payé", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "J'accepte sans réfléchir", value: "C", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "J'accepte pour ne pas perdre ma place", value: "D", profile: "CONCILIANT", trait: "CONCILIANT" },
                    { label: "Je signale aux autorités", value: "E", profile: "AUTONOME", trait: "AUTONOME" }
                ]
            },
            {
                id: "SERV_073",
                category: "RÉSILIENT",
                title: "Situation 73",
                description: "Un client demande à modifier 5 fois son plat avec des demandes impossibles.",
                type: "SJT",
                options: [
                    { label: "Je reste patient et je gère", value: "A", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je pose gentiment les limites du possible", value: "B", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'essaie de le convaincre vers quelque chose de faisable", value: "C", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "J'appelle le Chef de Rang", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Ça m'énerve mais je ne le montre pas", value: "E", profile: "SENSIBLE", trait: "SENSIBLE" }
                ]
            },
            {
                id: "SERV_074",
                category: "AFFIRMÉ",
                title: "Situation 74",
                description: "Le Chef de Rang te critique systématiquement devant les clients.",
                type: "SJT",
                options: [
                    { label: "Je lui demande fermement d'arrêter", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Ça me détruit psychologiquement", value: "B", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "J'en parle au Directeur", value: "C", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je tiens bon, ça me forge", value: "D", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "J'accepte, il a peut-être raison", value: "E", profile: "OBÉISSANT", trait: "OBÉISSANT" }
                ]
            },
            {
                id: "SERV_075",
                category: "CHALEUREUX",
                title: "Situation 75",
                description: "Un client demande l'addition puis change d'avis et commande un dessert.",
                type: "SJT",
                options: [
                    { label: "Aucun problème, je suis ravi de vous garder plus longtemps", value: "A", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Parfait, je lui vends le dessert le plus cher", value: "B", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Pas de souci, je modifie", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Intérieurement ça m'agace mais je ne le montre pas", value: "D", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "Je modifie l'addition proprement", value: "E", profile: "RIGOUREUX", trait: "RIGOUREUX" }
                ]
            },
            {
                id: "SERV_076",
                category: "AFFIRMÉ",
                title: "Situation 76",
                description: "Le Directeur te demande ton avis sur une augmentation générale des prix.",
                type: "SJT",
                options: [
                    { label: "Je donne mon avis franc basé sur les clients", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je dis oui, c'est lui qui décide", value: "B", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je donne mon avis marketing (positionnement, concurrence)", value: "C", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je ne me sens pas légitime pour donner mon avis", value: "D", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je propose une augmentation ciblée, pas générale", value: "E", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" }
                ]
            },
            {
                id: "SERV_077",
                category: "RÉSILIENT",
                title: "Situation 77",
                description: "Un couple oublie son bébé qui dort dans la poussette en partant.",
                type: "SJT",
                options: [
                    { label: "Je cours après eux calmement", value: "A", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je panique complètement", value: "B", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "Je les appelle ou je cours vite dehors", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "J'appelle le Directeur immédiatement", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je garde le bébé en sécurité et j'attends qu'ils reviennent", value: "E", profile: "CHALEUREUX", trait: "CHALEUREUX" }
                ]
            },
            {
                id: "SERV_078",
                category: "MENEUR",
                title: "Situation 78",
                description: "Le Chef de Rang part en plein service sans prévenir.",
                type: "SJT",
                options: [
                    { label: "Je prends le commandement et je gère le service", value: "A", profile: "MENEUR", trait: "MENEUR" },
                    { label: "Je panique, je ne sais pas quoi faire", value: "B", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "J'appelle le Directeur", value: "C", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je continue mon rang normalement", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "J'attends les consignes", value: "E", profile: "OBÉISSANT", trait: "OBÉISSANT" }
                ]
            },
            {
                id: "SERV_079",
                category: "AFFIRMÉ",
                title: "Situation 79",
                description: "Un client très important critique ouvertement le restaurant sur les réseaux pendant qu'il mange.",
                type: "SJT",
                options: [
                    { label: "Je vais lui parler calmement pour comprendre", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'alerte le Directeur immédiatement", value: "B", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "J'offre quelque chose pour inverser la tendance", value: "C", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je ne dis rien, ce n'est pas mon rôle", value: "D", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je suis stressé, ça va nous faire du tort", value: "E", profile: "SENSIBLE", trait: "SENSIBLE" }
                ]
            },
            {
                id: "SERV_080",
                category: "CHALEUREUX",
                title: "Situation 80",
                description: "Le Directeur te demande de choisir entre garder ton collègue ami ou un nouveau plus performant.",
                type: "SJT",
                options: [
                    { label: "Je garde mon collègue, l'humain avant tout", value: "A", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je choisis le plus performant", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je refuse de choisir, ce n'est pas mon rôle", value: "C", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je dis ce que le Directeur veut entendre", value: "D", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "J'analyse objectivement les performances", value: "E", profile: "RIGOUREUX", trait: "RIGOUREUX" }
                ]
            },
            {
                id: "SERV_081",
                category: "OBÉISSANT",
                title: "Situation 81",
                description: "Un client te demande de lui faire un prix car il est ami avec le Directeur.",
                type: "SJT",
                options: [
                    { label: "Je fais une réduction", value: "A", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je refuse poliment, pas de passe-droit", value: "B", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je demande au Directeur de confirmer", value: "C", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je fais une petite geste symbolique", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je lui offre un digestif au lieu d'une réduction", value: "E", profile: "COMMERCIAL", trait: "COMMERCIAL" }
                ]
            },
            {
                id: "SERV_082",
                category: "OBÉISSANT",
                title: "Situation 82",
                description: "Le Chef de Rang te met la pression pour vendre un plat que tu trouves médiocre.",
                type: "SJT",
                options: [
                    { label: "Je le vends comme demandé", value: "A", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je refuse de mentir au client", value: "B", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je le vends en valorisant au maximum", value: "C", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je le propose sans insister", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "J'en parle au Directeur", value: "E", profile: "RIGOUREUX", trait: "RIGOUREUX" }
                ]
            },
            {
                id: "SERV_083",
                category: "AFFIRMÉ",
                title: "Situation 83",
                description: "Un client laisse un avis négatif injuste sur Google pendant qu'il est encore à table.",
                type: "SJT",
                options: [
                    { label: "Je vais lui demander ce qui ne va pas", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'offre quelque chose pour qu'il modifie", value: "B", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je préviens le Directeur", value: "C", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je ne dis rien", value: "D", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Ça me blesse, je le prends personnellement", value: "E", profile: "SENSIBLE", trait: "SENSIBLE" }
                ]
            },
            {
                id: "SERV_084",
                category: "OBÉISSANT",
                title: "Situation 84",
                description: "Le Directeur organise une soirée d'équipe obligatoire non payée.",
                type: "SJT",
                options: [
                    { label: "Je viens sans discuter", value: "A", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je demande à être payé", value: "B", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je viens si c'est court et sympa", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je viens à contrecœur", value: "D", profile: "CONCILIANT", trait: "CONCILIANT" },
                    { label: "Je refuse, c'est illégal", value: "E", profile: "AUTONOME", trait: "AUTONOME" }
                ]
            },
            {
                id: "SERV_085",
                category: "RIGOUREUX",
                title: "Situation 85",
                description: "Un client te donne 200€ de pourboire en te demandant de ne rien dire à personne.",
                type: "SJT",
                options: [
                    { label: "Je le mets dans le pot commun quand même", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je garde tout discrètement", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je partage avec l'équipe", value: "C", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je demande au Chef de Rang ce qu'il faut faire", value: "D", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je garde et je ne dis rien", value: "E", profile: "DISCRET", trait: "DISCRET" }
                ]
            },
            {
                id: "SERV_086",
                category: "AFFIRMÉ",
                title: "Situation 86",
                description: "Le Chef de Rang fait une blague raciste devant toi.",
                type: "SJT",
                options: [
                    { label: "Je lui dis que ce n'est pas acceptable", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je ne dis rien mais je désapprouve", value: "B", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je ris poliment pour ne pas créer de conflit", value: "C", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "J'en parle au Directeur", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je change de sujet", value: "E", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" }
                ]
            },
            {
                id: "SERV_087",
                category: "OBÉISSANT",
                title: "Situation 87",
                description: "Un client demande à payer en liquide une grosse addition (500€).",
                type: "SJT",
                options: [
                    { label: "Aucun problème, j'accepte", value: "A", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je vérifie chaque billet", value: "B", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "J'accepte en comptant rapidement", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je demande au Chef de Rang de vérifier", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je préfère la carte mais j'accepte le liquide", value: "E", profile: "COMMERCIAL", trait: "COMMERCIAL" }
                ]
            },
            {
                id: "SERV_088",
                category: "AFFIRMÉ",
                title: "Situation 88",
                description: "Le Directeur te demande de virer un collègue à sa place.",
                type: "SJT",
                options: [
                    { label: "Je refuse, ce n'est pas mon rôle", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je le fais comme demandé", value: "B", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "J'accepte si c'est justifié et avec les mots justes", value: "C", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je refuse, je ne veux pas briser mon collègue", value: "D", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je délègue à quelqu'un d'autre", value: "E", profile: "DISCRET", trait: "DISCRET" }
                ]
            },
            {
                id: "SERV_089",
                category: "RÉSILIENT",
                title: "Situation 89",
                description: "Un client fait un malaise et tombe inconscient.",
                type: "SJT",
                options: [
                    { label: "Je garde mon sang-froid et j'appelle les secours", value: "A", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "J'applique les premiers secours", value: "B", profile: "TECHNIQUE", trait: "TECHNIQUE" },
                    { label: "Je panique", value: "C", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "J'appelle le Directeur", value: "D", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je coordonne l'intervention et je rassure", value: "E", profile: "MENEUR", trait: "MENEUR" }
                ]
            },
            {
                id: "SERV_090",
                category: "RIGOUREUX",
                title: "Situation 90",
                description: "Le Chef de Rang te demande de servir une assiette tombée par terre (remise en état).",
                type: "SJT",
                options: [
                    { label: "Je refuse catégoriquement", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je la sers comme demandé", value: "B", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "J'en parle au Directeur", value: "C", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je la renvoie discrètement en cuisine", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je sers en croisant les doigts", value: "E", profile: "COMMERCIAL", trait: "COMMERCIAL" }
                ]
            },
            {
                id: "SERV_091",
                category: "PRAGMATIQUE",
                title: "Situation 91",
                description: "Un client régulier te propose un job mieux payé dans son restaurant.",
                type: "SJT",
                options: [
                    { label: "J'écoute l'offre et je compare", value: "A", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je refuse par loyauté", value: "B", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "J'en parle à mon Directeur pour négocier", value: "C", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je refuse, c'est ma maison", value: "D", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "J'accepte si l'offre est vraiment meilleure", value: "E", profile: "AUTONOME", trait: "AUTONOME" }
                ]
            },
            {
                id: "SERV_092",
                category: "RIGOUREUX",
                title: "Situation 92",
                description: "Le Directeur te demande de tricher sur les dates de péremption.",
                type: "SJT",
                options: [
                    { label: "Je refuse, c'est illégal et dangereux", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je le fais comme demandé", value: "B", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je menace de signaler aux autorités", value: "C", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je refuse mais je ne dénonce pas", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je démissionne", value: "E", profile: "AUTONOME", trait: "AUTONOME" }
                ]
            },
            {
                id: "SERV_093",
                category: "CHALEUREUX",
                title: "Situation 93",
                description: "Un collègue te demande de l'argent pour une urgence personnelle.",
                type: "SJT",
                options: [
                    { label: "Je lui prête sans hésiter", value: "A", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je lui prête un petit montant", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je refuse poliment", value: "C", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je fais semblant de ne pas avoir", value: "D", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je lui prête avec un contrat écrit", value: "E", profile: "RIGOUREUX", trait: "RIGOUREUX" }
                ]
            },
            {
                id: "SERV_094",
                category: "AFFIRMÉ",
                title: "Situation 94",
                description: "Le Chef de Rang te harcèle sexuellement.",
                type: "SJT",
                options: [
                    { label: "Je lui pose immédiatement les limites", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'en parle au Directeur", value: "B", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je porte plainte", value: "C", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je subis en silence", value: "D", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "Je démissionne", value: "E", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" }
                ]
            },
            {
                id: "SERV_095",
                category: "RIGOUREUX",
                title: "Situation 95",
                description: "Un client oublie 1000€ en liquide sur la table.",
                type: "SJT",
                options: [
                    { label: "Je cours après lui immédiatement", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je garde l'argent en sécurité et j'attends qu'il revienne", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je le donne au Chef de Rang", value: "C", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je le garde pour moi", value: "D", profile: "DISCRET", trait: "DISCRET" },
                    { label: "Je partage avec l'équipe si personne ne revient", value: "E", profile: "CHALEUREUX", trait: "CHALEUREUX" }
                ]
            },
            {
                id: "SERV_096",
                category: "PRAGMATIQUE",
                title: "Situation 96",
                description: "Le Directeur te propose une promotion mais tu dois trahir un collègue pour l'obtenir.",
                type: "SJT",
                options: [
                    { label: "J'accepte, c'est le jeu", value: "A", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je refuse par loyauté", value: "B", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je demande une promotion sur mes mérites", value: "C", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "J'accepte ce qu'on me propose", value: "D", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je refuse ce type de manipulation", value: "E", profile: "RIGOUREUX", trait: "RIGOUREUX" }
                ]
            },
            {
                id: "SERV_097",
                category: "AFFIRMÉ",
                title: "Situation 97",
                description: "Un client exige que tu jettes de la nourriture devant lui pour prouver qu'elle est fraîche.",
                type: "SJT",
                options: [
                    { label: "Je refuse poliment cette absurdité", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Je le fais pour le satisfaire", value: "B", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "J'appelle le Directeur", value: "C", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "Je lui explique autrement la fraîcheur", value: "D", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Je lui montre les étiquettes de traçabilité", value: "E", profile: "RIGOUREUX", trait: "RIGOUREUX" }
                ]
            },
            {
                id: "SERV_098",
                category: "RÉSILIENT",
                title: "Situation 98",
                description: "Le Directeur ferme le restaurant sans prévenir et disparaît avec la caisse.",
                type: "SJT",
                options: [
                    { label: "Je cherche un nouveau job immédiatement", value: "A", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Je suis effondré", value: "B", profile: "SENSIBLE", trait: "SENSIBLE" },
                    { label: "Je contacte les Prud'hommes", value: "C", profile: "AUTONOME", trait: "AUTONOME" },
                    { label: "J'organise les employés pour récupérer nos dus", value: "D", profile: "MENEUR", trait: "MENEUR" },
                    { label: "Je passe à autre chose", value: "E", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" }
                ]
            },
            {
                id: "SERV_099",
                category: "RIGOUREUX",
                title: "Situation 99",
                description: "Un client demande si vous recommandez vraiment ce restaurant pour un événement important.",
                type: "SJT",
                options: [
                    { label: "Je suis 100% honnête selon la qualité réelle", value: "A", profile: "RIGOUREUX", trait: "RIGOUREUX" },
                    { label: "Je survends le restaurant", value: "B", profile: "COMMERCIAL", trait: "COMMERCIAL" },
                    { label: "Je dis oui automatiquement", value: "C", profile: "OBÉISSANT", trait: "OBÉISSANT" },
                    { label: "Je partage mon expérience personnelle sincère", value: "D", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Je recommande selon le type d'événement", value: "E", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" }
                ]
            },
            {
                id: "SERV_100",
                category: "AFFIRMÉ",
                title: "Situation 100",
                description: "ULTIME : Si vous pouviez changer une chose dans ce métier, ce serait quoi ?",
                type: "SJT",
                options: [
                    { label: "Le respect et la reconnaissance du métier", value: "A", profile: "AFFIRMÉ", trait: "AFFIRMÉ" },
                    { label: "Les horaires et le salaire", value: "B", profile: "PRAGMATIQUE", trait: "PRAGMATIQUE" },
                    { label: "Moins de toxicité, plus d'humanité", value: "C", profile: "CHALEUREUX", trait: "CHALEUREUX" },
                    { label: "Rien, j'aime ce métier tel qu'il est", value: "D", profile: "RÉSILIENT", trait: "RÉSILIENT" },
                    { label: "Plus de liberté et de créativité dans le service", value: "E", profile: "CRÉATIF", trait: "CRÉATIF" }
                ]
            }
        ]
    }
];
