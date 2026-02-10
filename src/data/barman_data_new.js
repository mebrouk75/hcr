
const BARMAN_DATA = [
    {
        section: "Diagnostic Leadership",
        id: "PHASE1",
        items: [
            {
                id: "BM_1",
                category: "INTEGRITÉ",
                title: "INTEGRITÉ : L'Extra Gratuit",
                description: "Un client habituel te demande un 'petit extra' gratuit dans son verre.",
                type: "DILEMME",
                options: [
                    { label: "Je refuse net. C'est du vol, point barre.", value: "B", profile: "MÉTRONOME" },
                    { label: "J'accepte, c'est lui qui me fait vivre avec ses pourboires.", value: "D", profile: "PIRATE" },
                    { label: "Je lui offre carrément le verre entier, ça me fait plaisir.", value: "A", profile: "CONFIDENT" },
                    { label: "Je lui dis oui pour cette fois, mais je le note sur mon ardoise perso.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_2",
                category: "STRESS",
                title: "STRESS : Le Verre Cassé",
                description: "Un verre éclate près du bac à glaçons en plein rush.",
                type: "SJT",
                options: [
                    { label: "Je continue à servir en faisant attention, pas le temps de tout vider.", value: "D", profile: "PIRATE" },
                    { label: "Je stoppe tout immédiatement. Sécurité avant tout, on vide le bac.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je panique et j'appelle le manager à l'aide.", value: "A", profile: "CONFIDENT" },
                    { label: "Je gueule un coup pour évacuer la pression et je nettoie vite fait.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_3",
                category: "PSYCHOLOGIE",
                title: "PSYCHOLOGIE : Le Client Triste",
                description: "Un client seul semble très triste et commande beaucoup.",
                type: "DILEMME",
                options: [
                    { label: "Je continue à le servir tant qu'il paie, c'est du chiffre.", value: "D", profile: "PIRATE" },
                    { label: "Je m'assois avec lui 5 minutes pour l'écouter.", value: "A", profile: "CONFIDENT" },
                    { label: "Je lui refuse la prochaine commande. Responsabilité civile.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je lui offre un shot pour lui remonter le moral !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_4",
                category: "ÉTHIQUE",
                title: "ÉTHIQUE : Le Shot en Cachette",
                description: "Tu vois un collègue serveur boire un shot en cachette derrière ton bar.",
                type: "SJT",
                options: [
                    { label: "Je le dénonce tout de suite au manager.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je lui en sers un deuxième pour qu'on trinquent !", value: "D", profile: "PIRATE" },
                    { label: "Je fais semblant de rien voir, je ne veux pas d'histoires.", value: "A", profile: "CONFIDENT" },
                    { label: "Je l'engueule : 'C'est MON bar ici !'", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_5",
                category: "VITESSE",
                title: "VITESSE : Le Doseur",
                description: "Pour envoyer 10 cocktails en 2 minutes, tu acceptes de ne pas utiliser le doseur ?",
                type: "DILEMME",
                options: [
                    { label: "Jamais. La recette doit être précise au millilitre près.", value: "B", profile: "MÉTRONOME" },
                    { label: "Bien sûr, je fais tout au 'free pour', ça va plus vite.", value: "D", profile: "PIRATE" },
                    { label: "Je fais un show avec les bouteilles, tant pis pour le dosage.", value: "C", profile: "SHOWMAN" },
                    { label: "Je stresse et je tremble un peu, mais j'essaie.", value: "A", profile: "CONFIDENT" }
                ]
            },
            {
                id: "BM_6",
                category: "EGO",
                title: "EGO : La Critique",
                description: "Un client critique ton cocktail signature.",
                type: "SJT",
                options: [
                    { label: "Je m'excuse platement et je lui en refais un autre.", value: "A", profile: "CONFIDENT" },
                    { label: "Je lui explique techniquement pourquoi il a tort.", value: "C", profile: "SHOWMAN" },
                    { label: "Je m'en fous, tant qu'il paie.", value: "D", profile: "PIRATE" },
                    { label: "Je lui propose la fiche technique pour qu'il vérifie la recette.", value: "B", profile: "MÉTRONOME" }
                ]
            },
            {
                id: "BM_7",
                category: "LOYAUTÉ",
                title: "LOYAUTÉ : Le Billet Trouvé",
                description: "Tu trouves 50€ par terre derrière le bar.",
                type: "SJT",
                options: [
                    { label: "Hop, dans ma poche. Trouvé, gardé.", value: "D", profile: "PIRATE" },
                    { label: "Je les mets dans le pot commun des pourboires.", value: "A", profile: "CONFIDENT" },
                    { label: "Je les donne au manager pour la caisse.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je paie une tournée générale avec !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_8",
                category: "HYGIÈNE",
                title: "HYGIÈNE : La Main Sale",
                description: "Tu touches de la monnaie sale puis tu dois préparer une déco citron.",
                type: "PIEGE",
                options: [
                    { label: "Je me lave les mains 30 secondes au savon. Obligatoire.", value: "B", profile: "MÉTRONOME" },
                    { label: "Un petit coup d'eau rapide et c'est bon.", value: "D", profile: "PIRATE" },
                    { label: "Je prends le citron avec une pince, je suis pro.", value: "C", profile: "SHOWMAN" },
                    { label: "J'oublie souvent, je suis tellement concentré sur le client...", value: "A", profile: "CONFIDENT" }
                ]
            },
            {
                id: "BM_9",
                category: "STABILITÉ",
                title: "STABILITÉ : Le Sourire",
                description: "Après 10h de shift, tu es capable de sourire avec la même sincérité qu'à l'ouverture ?",
                type: "DILEMME",
                options: [
                    { label: "Non, je fais la gueule, je suis humain.", value: "D", profile: "PIRATE" },
                    { label: "Oui, le client n'y est pour rien. Professionnalisme.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je suis épuisé mais je continue à écouter les clients.", value: "A", profile: "CONFIDENT" },
                    { label: "Je carbure à l'adrénaline, je suis encore plus fou !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_10",
                category: "SÉCURITÉ",
                title: "SÉCURITÉ : Le Client Lourd",
                description: "Un client ivre devient lourd avec une cliente.",
                type: "SJT",
                options: [
                    { label: "Je saute par-dessus le bar pour le virer moi-même.", value: "C", profile: "SHOWMAN" },
                    { label: "J'appelle la sécurité ou le manager. Procédure.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je demande gentiment à la cliente si ça va...", value: "A", profile: "CONFIDENT" },
                    { label: "Je lui sers un dernier verre bien chargé pour l'assommer.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "BM_11",
                category: "PRÉCISION",
                title: "PRÉCISION : Les 5 Verres",
                description: "Tu peux servir 5 verres identiques à l'œil nu ?",
                type: "STANDARD",
                options: [
                    { label: "Non, j'utilise toujours un jigger (doseur).", value: "B", profile: "MÉTRONOME" },
                    { label: "Oui, j'ai le compas dans l'œil.", value: "D", profile: "PIRATE" },
                    { label: "Je préfère en mettre un peu plus pour faire plaisir.", value: "A", profile: "CONFIDENT" },
                    { label: "Je les aligne et je verse en cascade, ça impressionne !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_12",
                category: "VENTE",
                title: "VENTE : L'Upsell",
                description: "Tu proposes l'alcool le plus cher sans que le client le demande.",
                type: "DILEMME",
                options: [
                    { label: "Toujours. C'est comme ça qu'on fait du chiffre.", value: "D", profile: "PIRATE" },
                    { label: "Jamais, je respecte le budget du client.", value: "A", profile: "CONFIDENT" },
                    { label: "Seulement si c'est pertinent pour le cocktail.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je vends celui qui a la plus belle bouteille pour le style.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_13",
                category: "ÉQUIPE",
                title: "ÉQUIPE : Salle vs Bar",
                description: "La salle coule, mais ton bar est calme.",
                type: "SJT",
                options: [
                    { label: "Je sors de mon bar pour aller porter des assiettes.", value: "A", profile: "CONFIDENT" },
                    { label: "Je reste à mon poste. Chacun son job.", value: "B", profile: "MÉTRONOME" },
                    { label: "J'en profite pour faire mes comptes ou pause clope.", value: "D", profile: "PIRATE" },
                    { label: "Je prépare des plateaux de shots pour motiver les serveurs !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_14",
                category: "HONNÊTETÉ",
                title: "HONNÊTETÉ : Le Verre Ami",
                description: "Tu offres un verre à un ami sans l'accord du patron ?",
                type: "PIEGE",
                options: [
                    { label: "Jamais. Tout doit être ticketé.", value: "B", profile: "MÉTRONOME" },
                    { label: "Souvent. C'est mes potes, c'est normal.", value: "D", profile: "PIRATE" },
                    { label: "Je lui offre, mais je le paie de ma poche.", value: "A", profile: "CONFIDENT" },
                    { label: "Je lui sers le cocktail le plus complexe pour frimer.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_15",
                category: "SANG-FROID",
                title: "SANG-FROID : Le Serveur Énervé",
                description: "Un serveur te crie dessus pour avoir sa commande.",
                type: "STANDARD",
                options: [
                    { label: "Je lui crie dessus plus fort.", value: "C", profile: "SHOWMAN" },
                    { label: "Je l'ignore et je sers le client au comptoir d'abord.", value: "D", profile: "PIRATE" },
                    { label: "Je lui dis calmement d'attendre son tour. Ordre d'arrivée.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je me dépêche de le servir pour qu'il se calme.", value: "A", profile: "CONFIDENT" }
                ]
            },
            {
                id: "BM_16",
                category: "ANTICIPATION",
                title: "ANTICIPATION : Le Profilage",
                description: "Tu sais ce que le client va boire avant qu'il ne parle ?",
                type: "PSYCHOLOGIQUE",
                options: [
                    { label: "Oui, je juge à l'apparence. Souvent juste.", value: "C", profile: "SHOWMAN" },
                    { label: "Non, j'attends sa commande exacte.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je sens son humeur et je propose en fonction.", value: "A", profile: "CONFIDENT" },
                    { label: "Je propose le truc le plus rapide à faire.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "BM_17",
                category: "MAINTENANCE",
                title: "MAINTENANCE : Le Nettoyage",
                description: "Tu nettoies tes becs de tirage à 3h du matin ?",
                type: "STANDARD",
                options: [
                    { label: "Oui, tous les soirs. Hygiène irréprochable.", value: "B", profile: "MÉTRONOME" },
                    { label: "Non, ça attendra demain midi.", value: "D", profile: "PIRATE" },
                    { label: "Je le fais si j'ai encore de l'énergie.", value: "A", profile: "CONFIDENT" },
                    { label: "Je paie le barback pour le faire à ma place.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_18",
                category: "DISCRÉTION",
                title: "DISCRÉTION : Le Secret",
                description: "Tu entends une conversation confidentielle importante.",
                type: "SJT",
                options: [
                    { label: "Je n'écoute pas, je fais mon travail.", value: "B", profile: "MÉTRONOME" },
                    { label: "J'écoute tout et je le répète aux collègues !", value: "C", profile: "SHOWMAN" },
                    { label: "Je garde ça pour moi, je suis une tombe.", value: "A", profile: "CONFIDENT" },
                    { label: "Si ça peut me servir, je note l'info.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "BM_19",
                category: "ADAPTATION",
                title: "ADAPTATION : L'Inconnu",
                description: "Un client veut un cocktail qui n'existe pas.",
                type: "INVENTIF",
                options: [
                    { label: "Je refuse. On ne fait que la carte.", value: "B", profile: "MÉTRONOME" },
                    { label: "J'invente un truc incroyable sur le moment !", value: "C", profile: "SHOWMAN" },
                    { label: "Je lui demande ce qu'il aime et j'essaie de faire plaisir.", value: "A", profile: "CONFIDENT" },
                    { label: "Je lui sers un mélange fond de bouteille et je lui donne un nom cool.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "BM_20",
                category: "VALEUR",
                title: "VALEUR : Le Meilleur",
                description: "Tu préfères être le barman le plus rapide ou le plus apprécié ?",
                type: "VALEURS",
                options: [
                    { label: "Le plus rapide. Time is money.", value: "D", profile: "PIRATE" },
                    { label: "Le plus apprécié. J'aime les gens.", value: "A", profile: "CONFIDENT" },
                    { label: "Le plus technique. La perfection.", value: "B", profile: "MÉTRONOME" },
                    { label: "Le plus célèbre. Je veux être une star.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_21",
                category: "RIGUEUR",
                title: "RIGUEUR : Le Ticket",
                description: "Tu vérifies le ticket de caisse de chaque boisson ?",
                type: "STANDARD",
                options: [
                    { label: "Toujours. Pas de ticket, pas de boisson.", value: "B", profile: "MÉTRONOME" },
                    { label: "Rarement. Je fais confiance à ma mémoire.", value: "D", profile: "PIRATE" },
                    { label: "Seulement quand le chef est là.", value: "C", profile: "SHOWMAN" },
                    { label: "Si le serveur a l'air débordé, je l'aide sans ticket.", value: "A", profile: "CONFIDENT" }
                ]
            },
            {
                id: "BM_22",
                category: "STRESS",
                title: "STRESS : Panne de Glace",
                description: "La machine à glaçons tombe en panne en plein mois d'août.",
                type: "SJT",
                options: [
                    { label: "C'est la catastrophe, je ne sais plus quoi faire.", value: "A", profile: "CONFIDENT" },
                    { label: "J'appelle le réparateur et je note l'incident.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je vais acheter des sacs de glace au supermarché du coin.", value: "D", profile: "PIRATE" },
                    { label: "J'improvise des cocktails chauds ou sans glace, concept !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_23",
                category: "PSYCHOLOGIE",
                title: "PSYCHOLOGIE : Le Bavard",
                description: "Un client trop bavard te tient la jambe.",
                type: "STANDARD",
                options: [
                    { label: "Je l'écoute patiemment, je n'ose pas le couper.", value: "A", profile: "CONFIDENT" },
                    { label: "Je lui dis cash que j'ai du boulot.", value: "D", profile: "PIRATE" },
                    { label: "Je continue à bosser en hochant la tête poliment.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je m'en sers comme public pour mes blagues !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_24",
                category: "SÉCURITÉ",
                title: "SÉCURITÉ : La Femme Enceinte",
                description: "Une femme enceinte commande un cocktail alcoolisé.",
                type: "DILEMME",
                options: [
                    { label: "Je refuse de servir. Responsabilité.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je sers. C'est son choix, pas mon problème.", value: "D", profile: "PIRATE" },
                    { label: "Je lui propose gentiment un mocktail délicieux à la place.", value: "A", profile: "CONFIDENT" },
                    { label: "Je lui fais la morale devant tout le monde.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_25",
                category: "HONNÊTETÉ",
                title: "HONNÊTETÉ : Boire en Service",
                description: "Tu consommes de l'alcool pendant ton service ?",
                type: "PIEGE",
                options: [
                    { label: "Jamais. Interdit et dangereux.", value: "B", profile: "MÉTRONOME" },
                    { label: "Un petit shot de temps en temps pour l'énergie.", value: "D", profile: "PIRATE" },
                    { label: "Seulement si un client me l'offre.", value: "A", profile: "CONFIDENT" },
                    { label: "Oui, je suis le meilleur client de mon bar !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_26",
                category: "ÉQUIPE",
                title: "ÉQUIPE : Les Secrets",
                description: "Tu partages tes recettes secrètes avec les nouveaux ?",
                type: "SJT",
                options: [
                    { label: "Non, je garde mes secrets pour rester indispensable.", value: "C", profile: "SHOWMAN" },
                    { label: "Oui, tout est dans le manuel de formation.", value: "B", profile: "MÉTRONOME" },
                    { label: "Bien sûr, je veux qu'ils réussissent.", value: "A", profile: "CONFIDENT" },
                    { label: "Je leur donne les mauvaises recettes pour rire.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "BM_27",
                category: "VITESSE",
                title: "VITESSE : Le Mojito",
                description: "Tu détestes préparer les Mojitos (trop long) ?",
                type: "PIEGE",
                options: [
                    { label: "Oui, je dis souvent qu'il n'y a plus de menthe.", value: "D", profile: "PIRATE" },
                    { label: "Non, je le fais avec la même rigueur que le reste.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je le fais si le client est sympa.", value: "A", profile: "CONFIDENT" },
                    { label: "Je le revisite à ma façon pour que ce soit fun.", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_28",
                category: "DIPLOMATIE",
                title: "DIPLOMATIE : Trop Léger",
                description: "Le client trouve son verre trop léger en alcool.",
                type: "SJT",
                options: [
                    { label: "Je rajoute une goutte (ou de la glace) pour le calmer.", value: "D", profile: "PIRATE" },
                    { label: "Je lui montre le dosage exact utilisé. Pas de discussion.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je lui en refais un plus chargé, tant pis pour le stock.", value: "A", profile: "CONFIDENT" },
                    { label: "Je goûte son verre devant lui pour vérifier !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_29",
                category: "PROPRETÉ",
                title: "PROPRETÉ : Plan de Travail",
                description: "Ton plan de travail est-il sec en permanence ?",
                type: "STANDARD",
                options: [
                    { label: "Oui, maniaque. Un bar propre est un bar efficace.", value: "B", profile: "MÉTRONOME" },
                    { label: "Non, c'est le chantier mais ça sort vite.", value: "D", profile: "PIRATE" },
                    { label: "J'essaie, mais je suis souvent débordé.", value: "A", profile: "CONFIDENT" },
                    { label: "C'est le chaos artistique, mais c'est beau !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_30",
                category: "SINCÉRITÉ",
                title: "SINCÉRITÉ : Le Client Odieux",
                description: "Le client a-t-il toujours raison ?",
                type: "VALEURS",
                options: [
                    { label: "Non, si il est con, je lui dis.", value: "C", profile: "SHOWMAN" },
                    { label: "Oui, c'est la règle d'or du service.", value: "B", profile: "MÉTRONOME" },
                    { label: "Non, mais je fais semblant pour avoir la paix.", value: "D", profile: "PIRATE" },
                    { label: "Ça me blesse quand ils sont méchants.", value: "A", profile: "CONFIDENT" }
                ]
            },
            {
                id: "BM_31",
                category: "ÉTHIQUE",
                title: "ÉTHIQUE : La Drogue",
                description: "Tu vois un client mettre quelque chose dans le verre d'un autre.",
                type: "SJT",
                options: [
                    { label: "J'interviens immédiatement et je jette le verre.", value: "B", profile: "MÉTRONOME" },
                    { label: "Je saute sur le type pour le maîtriser.", value: "C", profile: "SHOWMAN" },
                    { label: "Je préviens discrètement la victime.", value: "A", profile: "CONFIDENT" },
                    { label: "Je regarde ailleurs, pas mes oignons.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "BM_32",
                category: "MÉMOIRE",
                title: "MÉMOIRE : La Commande",
                description: "Retiens-tu 8 boissons sans noter ?",
                type: "STANDARD",
                options: [
                    { label: "Oui, facile. J'ai une mémoire d'éléphant.", value: "C", profile: "SHOWMAN" },
                    { label: "Non, je note tout. Sécurité.", value: "B", profile: "MÉTRONOME" },
                    { label: "J'essaie, mais j'en oublie toujours une.", value: "A", profile: "CONFIDENT" },
                    { label: "Je fais à l'instinct, si je me trompe je corrige.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "BM_33",
                category: "ARGENT",
                title: "ARGENT : La Caisse",
                description: "Tu as peur d'avoir un écart de caisse ?",
                type: "PIEGE",
                options: [
                    { label: "Oui, je compte tout trois fois.", value: "B", profile: "MÉTRONOME" },
                    { label: "Non, si il manque, je mets de ma poche.", value: "A", profile: "CONFIDENT" },
                    { label: "Non, je m'arrange toujours pour que ça tombe juste...", value: "D", profile: "PIRATE" },
                    { label: "Les artistes ne comptent pas !", value: "C", profile: "SHOWMAN" }
                ]
            },
            {
                id: "BM_34",
                category: "STABILITÉ",
                title: "STABILITÉ : Le Bruit",
                description: "La musique forte t'épuise-t-elle ?",
                type: "PSYCHOLOGIQUE",
                options: [
                    { label: "Oui, j'ai besoin de calme après le service.", value: "A", profile: "CONFIDENT" },
                    { label: "Non, j'adore ça, je monte le son !", value: "C", profile: "SHOWMAN" },
                    { label: "Je mets des bouchons d'oreille discrets.", value: "B", profile: "MÉTRONOME" },
                    { label: "Tant qu'il y a du monde, je ne sens rien.", value: "D", profile: "PIRATE" }
                ]
            },
            {
                id: "BM_35",
                category: "TECHNIQUE",
                title: "TECHNIQUE : Le Flair",
                description: "Fais-tu du flair (jonglage) avec les bouteilles ?",
                type: "INVENTIF",
                options: [
                    { label: "Toujours ! Le show fait vendre.", value: "C", profile: "SHOWMAN" },
                    { label: "Jamais. Risque de casse inutile.", value: "B", profile: "MÉTRONOME" },
                    { label: "Juste un petit tour pour impressionner les filles.", value: "D", profile: "PIRATE" },
                    { label: "J'aimerais bien mais je suis maladroit.", value: "A", profile: "CONFIDENT" }
                ]
            }
        ]
    }
];
