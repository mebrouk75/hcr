/* SENTINEL v3.0 - MULTI-ROLE DATASET */
import { DIRECTOR_PHASE3_DATA } from './director_phase3_data.js';
import { CHEF_RANG_DATA } from './chef_de_rang_data.js';
import { FULL_SERVEUR } from './serveur_data_v2.js';
import { MANAGER_ADJOINT_DATA } from './manager_adjoint_data.js';
import { MBTI_MANAGER_ADJOINT_DATA } from './mbti_manager_adjoint_data.js';

export const HCR_ROLES = [
    { id: 'BARMAN', label: 'Barman / Barmaid', icon: 'Martini' },
    { id: 'SERVEUR', label: 'Serveur / Limonadier', icon: 'Utensils' },
    { id: 'CHEF_RANG', label: 'Chef de Rang', icon: 'UserCheck' },
    { id: 'MANAGER', label: 'Manager Adjoint', icon: 'Briefcase' },
    { id: 'MANAGER_PRINCIPAL', label: 'Manager', icon: 'Briefcase' },
    { id: 'DIRECTEUR', label: 'Directeur', icon: 'Building' },
    { id: 'ADN_ENTREPRISE', label: 'Audit ADN Entreprise', icon: 'Shield', description: "Pour vous garantir les candidats les plus compatibles, Sentinel doit d'abord cartographier votre ADN. Ce diagnostic de 100 points identifie les forces de votre management et les zones de friction potentielles. Le résultat ? Un recrutement chirurgical qui divise votre turnover par trois." }
];

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

const BARMAN_PHASE2 = [
    {
        section: "Analyse Approfondie",
        id: "PHASE2",
        items: [
            { id: "BM_36", category: "HYGIÈNE", title: "HYGIÈNE", description: "Tu utilises le même torchon pour tes mains et pour essuyer le comptoir ?", type: "PIEGE" },
            { id: "BM_37", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Un client te raconte ses problèmes. Tu l'écoutes vraiment ou tu fais semblant ?", type: "SJT" },
            { id: "BM_38", category: "VENTE", title: "VENTE", description: "Tu sais vendre un vin blanc à quelqu'un qui voulait une bière ?", type: "INVENTIF" },
            { id: "BM_39", category: "SÉCURITÉ", title: "SÉCURITÉ", description: "Tu sers un groupe de jeunes qui ont l'air d'avoir 17 ans sans demander leur ID ?", type: "SJT" },
            { id: "BM_40", category: "EGO", title: "EGO", description: "Tu acceptes qu'un serveur te dise comment faire ton métier ?", type: "VALEURS" },
            { id: "BM_41", category: "MAINTENANCE", title: "MAINTENANCE", description: "Tu sais changer une tête de fût de bière en moins de 30 secondes ?", type: "STANDARD" },
            { id: "BM_42", category: "PRODUIT", title: "PRODUIT", description: "Tu goûtes chaque nouvelle bouteille qui arrive pour pouvoir mieux la vendre ?", type: "STANDARD" },
            { id: "BM_43", category: "STRESS", title: "STRESS", description: "Tu as 20 bons de commande. Tu commences par les plus simples ou les plus anciens ?", type: "SJT" },
            { id: "BM_44", category: "RELATIONNEL", title: "RELATIONNEL", description: "Tu retiens les prénoms de tes 20 meilleurs clients ?", type: "STANDARD" },
            { id: "BM_45", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Le patron fait une erreur de gestion. Tu le protèges face au comptable ?", type: "Dilemme" },
            { id: "BM_46", category: "PRÉCISION", title: "PRÉCISION", description: "Tu détestes quand une goutte tombe à côté du verre lors du service ?", type: "STANDARD" },
            { id: "BM_47", category: "ADAPTATION", title: "ADAPTATION", description: "Tu peux travailler avec une main attachée dans le dos si nécessaire ?", type: "INVENTIF" },
            { id: "BM_48", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu repères le 'leader' d'un groupe pour le servir en premier ?", type: "SJT" },
            { id: "BM_49", category: "SINCÉRITÉ", title: "SINCÉRITÉ", description: "Tu travailles ici pour l'argent ou pour l'art du cocktail ?", type: "VALEURS" },
            { id: "BM_50", category: "AMBITION", title: "AMBITION", description: "Tu penses être capable de diriger ce bar d'ici 6 mois ?", type: "VALEURS" },
            { id: "BM_51", category: "HONNÊTETÉ", title: "HONNÊTETÉ", description: "Tu as déjà 'oublié' de rendre la monnaie sur un petit montant ?", type: "PIEGE" },
            { id: "BM_52", category: "ÉQUIPE", title: "ÉQUIPE", description: "Tu préfères fermer le bar seul ou avec de l'aide ?", type: "SJT" },
            { id: "BM_53", category: "VITESSE", title: "VITESSE", description: "Le bruit du shaker t'apaise ou t'agace en fin de soirée ?", type: "PSYCHOLOGIQUE" },
            { id: "BM_54", category: "HYGIÈNE", title: "HYGIÈNE", description: "Tu rinces ton shaker à l'eau claire entre chaque cocktail ou tu le laves au savon ?", type: "STANDARD" },
            { id: "BM_55", category: "SÉCURITÉ", title: "SÉCURITÉ", description: "Tu sais dire 'non' à un client agressif sans monter le ton ?", type: "SJT" },
            { id: "BM_56", category: "RIGUEUR", title: "RIGUEUR", description: "Tu suis les fiches techniques à la lettre, même si tu penses avoir une meilleure recette ?", type: "Dilemme" },
            { id: "BM_57", category: "ANTICIPATION", title: "ANTICIPATION", description: "Tu prépares tes citrons 2 heures avant ou à la minute ?", type: "STANDARD" },
            { id: "BM_58", category: "STABILITÉ", title: "STABILITÉ", description: "Les cris des clients ivres t'empêchent de dormir en rentrant chez toi ?", type: "PIEGE" },
            { id: "BM_59", category: "RELATIONNEL", title: "RELATIONNEL", description: "Tu offres de l'eau aux clients qui ont trop bu sans qu'ils le demandent ?", type: "SJT" },
            { id: "BM_60", category: "DÉCORATION", title: "DÉCORATION", description: "L'aspect visuel du verre est aussi important que le goût ?", type: "STANDARD" },
            { id: "BM_61", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais quand un couple est en train de rompre à ton comptoir ?", type: "INVENTIF" },
            { id: "BM_62", category: "ARGENT", title: "ARGENT", description: "Tu préfères un gros salaire fixe ou un petit fixe avec de gros pourboires ?", type: "VALEURS" },
            { id: "BM_63", category: "VENTE", title: "VENTE", description: "Tu sais vendre un cocktail sans alcool à un prix élevé ?", type: "SJT" },
            { id: "BM_64", category: "SANG-FROID", title: "SANG-FROID", description: "Une bouteille de spiritueux très chère explose au sol. Tu continues de servir ?", type: "SJT" },
            { id: "BM_65", category: "ÉTHIQUE", title: "ÉTHIQUE", description: "Tu acceptes les cadeaux personnels des clients (vêtements, montres) ?", type: "Dilemme" },
            { id: "BM_66", category: "PRÉCISION", title: "PRÉCISION", description: "Tu sais faire un dégradé de couleurs parfait dans un cocktail ?", type: "STANDARD" },
            { id: "BM_67", category: "STRESS", title: "STRESS", description: "Le son de l'imprimante à bons te donne des sueurs froides ?", type: "PIEGE" },
            { id: "BM_68", category: "ÉQUIPE", title: "ÉQUIPE", description: "Tu défends un serveur qui s'est trompé face au client ?", type: "SJT" },
            { id: "BM_69", category: "MAINTENANCE", title: "MAINTENANCE", description: "Tu nettoies ton frigo à boissons tous les lundis ?", type: "STANDARD" },
            { id: "BM_70", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Tu restes si un collègue est malade, même si c'est ton jour de repos ?", type: "SJT" },
            { id: "BM_71", category: "HONNÊTETÉ", title: "HONNÊTETÉ", description: "Tu as déjà menti sur l'origine d'un alcool pour justifier son prix ?", type: "PIEGE" },
            { id: "BM_72", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais faire rire un client qui vient de passer une sale journée ?", type: "SJT" },
            { id: "BM_73", category: "VITESSE", title: "VITESSE", description: "Tu peux servir 3 bières pression en même temps avec une seule main ?", type: "INVENTIF" },
            { id: "BM_74", category: "HYGIÈNE", title: "HYGIÈNE", description: "Tu jettes une bouteille si un bouchon de liège est tombé dedans ?", type: "STANDARD" },
            { id: "BM_75", category: "SÉCURITÉ", title: "SÉCURITÉ", description: "Tu appelles la police si un client part en voiture après avoir trop bu ?", type: "Dilemme" },
            { id: "BM_76", category: "RIGUEUR", title: "RIGUEUR", description: "Tu vérifies la température de ton frigo à lait toutes les heures ?", type: "STANDARD" },
            { id: "BM_77", category: "ANTICIPATION", title: "ANTICIPATION", description: "Tu sais quand une bouteille va être vide avant de la prendre en main ?", type: "PIEGE" },
            { id: "BM_78", category: "STABILITÉ", title: "STABILITÉ", description: "Tu aimes travailler dans le noir avec des lumières stroboscopiques ?", type: "STANDARD" },
            { id: "BM_79", category: "RELATIONNEL", title: "RELATIONNEL", description: "Tu parles plus de 3 langues couramment derrière ton bar ?", type: "STANDARD" },
            { id: "BM_80", category: "DÉCORATION", title: "DÉCORATION", description: "Tu passes plus de 10 secondes sur la décoration d'un verre ?", type: "Dilemme" },
            { id: "BM_81", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais repérer un inspecteur du guide Michelin ou un client mystère ?", type: "INVENTIF" },
            { id: "BM_82", category: "ARGENT", title: "ARGENT", description: "Tu penses que les pourboires doivent être partagés avec la cuisine ?", type: "VALEURS" },
            { id: "BM_83", category: "VENTE", title: "VENTE", description: "Tu proposes des olives ou des cacahuètes pour donner soif aux clients ?", type: "SJT" },
            { id: "BM_84", category: "SANG-FROID", title: "SANG-FROID", description: "Le bar prend feu (petite flamme). Tu éteins et tu continues comme si de rien n'était ?", type: "SJT" },
            { id: "BM_85", category: "ÉTHIQUE", title: "ÉTHIQUE", description: "Tu sers ton manager s'il vient boire un verre sur son temps libre ?", type: "STANDARD" },
            { id: "BM_86", category: "PRÉCISION", title: "PRÉCISION", description: "Tu sais mesurer 2cl rien qu'au temps d'écoulement (free pour) ?", type: "STANDARD" },
            { id: "BM_87", category: "STRESS", title: "STRESS", description: "Tu préfères un bar bondé ou un bar avec 3 clients ?", type: "VALEURS" },
            { id: "BM_88", category: "ÉQUIPE", title: "ÉQUIPE", description: "Tu acceptes de faire la plonge si le plongeur est absent ?", type: "SJT" },
            { id: "BM_89", category: "BONUS", title: "BONUS", description: "Tu te considères comme un artiste ou un ouvrier spécialisé ?", type: "VALEURS" },
            { id: "BM_90", category: "MAINTENANCE", title: "MAINTENANCE", description: "Tu sais réparer une fuite sur un robinet de bar toi-même ?", type: "INVENTIF" },
            { id: "BM_91", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Tu parles en bien de ton établissement même quand tu es en vacances ?", type: "PIEGE" },
            { id: "BM_92", category: "HONNÊTETÉ", title: "HONNÊTETÉ", description: "Tu as déjà piqué dans le stock de pailles ou de serviettes pour chez toi ?", type: "PIEGE" },
            { id: "BM_93", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu adaptes ton niveau de langage à chaque client ?", type: "STANDARD" },
            { id: "BM_94", category: "VITESSE", title: "VITESSE", description: "Tu penses que la rapidité est plus importante que la courtoisie ?", type: "Dilemme" },
            { id: "BM_95", category: "HYGIÈNE", title: "HYGIÈNE", description: "Tu nettoies les bouteilles de spiritueux tous les matins ?", type: "STANDARD" },
            { id: "BM_96", category: "SÉCURITÉ", title: "SÉCURITÉ", description: "Tu refuses de servir un collègue qui finit son service mais qui est déjà ivre ?", type: "Dilemme" },
            { id: "BM_97", category: "RIGUEUR", title: "RIGUEUR", description: "Tu vérifies la monnaie que tu rends deux fois avant de la donner ?", type: "STANDARD" },
            { id: "BM_98", category: "ANTICIPATION", title: "ANTICIPATION", description: "Tu as déjà ton plateau prêt avant que le serveur n'arrive ?", type: "SJT" },
            { id: "BM_99", category: "STABILITÉ", title: "STABILITÉ", description: "Tu peux travailler 14 heures debout sans t'asseoir une seule fois ?", type: "PIEGE" },
            { id: "BM_100", category: "FINAL", title: "FINAL", description: "Si tu gagnes au loto demain, tu continues de faire ce métier ?", type: "VALEURS" }
        ]
    }
];

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

const SERVEUR_PHASE2 = [
    {
        section: "Analyse Approfondie",
        id: "PHASE2",
        items: [
            { id: "SVR_36", category: "BRIGADE", title: "BRIGADE", description: "Tu considères que le plongeur est aussi important que toi pour le service ?", type: "VALEURS" },
            { id: "SVR_37", category: "VENTE", title: "VENTE", description: "Tu sais transformer un 'juste un café' en un 'café gourmand' par la parole ?", type: "INVENTIF" },
            { id: "SVR_38", category: "HYGIÈNE", title: "HYGIÈNE", description: "Tu utilises ton propre tablier pour essuyer une assiette avant envoi ?", type: "PIEGE" },
            { id: "SVR_39", category: "DIPLOMATIE", title: "DIPLOMATIE", description: "Un client se plaint du prix. Tu te justifies ou tu l'écoutes en silence ?", type: "SJT" },
            { id: "SVR_40", category: "STABILITÉ", title: "STABILITÉ", description: "Tu peux porter un plateau de 10 verres pleins dans une salle bondée sans regarder tes pieds ?", type: "STANDARD" },
            { id: "SVR_41", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais faire rire une table de clients qui viennent de s'engueuler ?", type: "INVENTIF" },
            { id: "SVR_42", category: "ÉTHIQUE", title: "ÉTHIQUE", description: "Tu sers un digestif offert par la maison à des clients déjà ivres ?", type: "Dilemme" },
            { id: "SVR_43", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Tu parles en mal du patron avec les clients que tu apprécies ?", type: "PIEGE" },
            { id: "SVR_44", category: "VITESSE", title: "VITESSE", description: "Tu préfères marcher vite et être un peu brusque, ou marcher calmement et être plus lent ?", type: "VALEURS" },
            { id: "SVR_45", category: "ORGANISATION", title: "ORGANISATION", description: "Tu prépares tes additions à l'avance pour ne pas perdre de temps ?", type: "STANDARD" },
            { id: "SVR_46", category: "EMPATHIE", title: "EMPATHIE", description: "Tu te sens mal quand un client ne finit pas son assiette ?", type: "PSYCHOLOGIQUE" },
            { id: "SVR_47", category: "VENTE", title: "VENTE", description: "Tu connais la provenance de chaque viande à la carte ?", type: "STANDARD" },
            { id: "SVR_48", category: "STRESS", title: "STRESS", description: "Le logiciel de caisse tombe en panne. Tu gères de tête ou tu paniques ?", type: "SJT" },
            { id: "SVR_49", category: "BRIGADE", title: "BRIGADE", description: "Tu aides le barman à ranger ses verres quand tu n'as plus de clients ?", type: "SJT" },
            { id: "SVR_50", category: "AMBITION", title: "AMBITION", description: "Tu veux devenir Chef de Rang d'ici la fin de la saison ?", type: "VALEURS" },
            { id: "SVR_51", category: "PRÉCISION", title: "PRÉCISION", description: "Tu annonces chaque plat en le posant avec le nom exact de la carte ?", type: "STANDARD" },
            { id: "SVR_52", category: "ADAPTATION", title: "ADAPTATION", description: "Tu sais servir une table en anglais sans faire de fautes ?", type: "STANDARD" },
            { id: "SVR_53", category: "ANTICIPATION", title: "ANTICIPATION", description: "Tu as déjà la chaise haute prête quand tu vois une poussette à l'entrée ?", type: "INVENTIF" },
            { id: "SVR_54", category: "HONNÊTETÉ", title: "HONNÊTETÉ", description: "Tu as déjà menti sur la fraîcheur d'un poisson pour ne pas perdre une vente ?", type: "PIEGE" },
            { id: "SVR_55", category: "SÉCURITÉ", title: "SÉCURITÉ", description: "Tu ramasses immédiatement un morceau de verre au sol, même si tes mains sont pleines ?", type: "SJT" },
            { id: "SVR_56", category: "DIPLOMATIE", title: "DIPLOMATIE", description: "Un client demande un changement dans un plat que le Chef refuse de faire. Tu te bats pour le client ?", type: "Dilemme" },
            { id: "SVR_57", category: "FATIGUE", title: "FATIGUE", description: "Tu t'assois dès que tu as 2 minutes de calme en salle ?", type: "PIEGE" },
            { id: "SVR_58", category: "ÉQUIPE", title: "ÉQUIPE", description: "Tu acceptes de faire le rang d'un collègue qui a une urgence ?", type: "SJT" },
            { id: "SVR_59", category: "RIGUEUR", title: "RIGUEUR", description: "Tu vérifies que les salières sont pleines avant chaque début de service ?", type: "STANDARD" },
            { id: "SVR_60", category: "STRESS", title: "STRESS", description: "Tu arrives à chanter ou fredonner dans ta tête pendant un rush violent ?", type: "PSYCHOLOGIQUE" },
            { id: "SVR_61", category: "HYGIÈNE", title: "HYGIÈNE", description: "Tu touches tes cheveux ou ton visage pendant le service ?", type: "PIEGE" },
            { id: "SVR_62", category: "STRATÉGIE", title: "STRATÉGIE", description: "Tu sais placer les clients à la fenêtre pour donner l'impression que le resto est plein ?", type: "INVENTIF" },
            { id: "SVR_63", category: "EMPATHIE", title: "EMPATHIE", description: "Tu te rappelles du prénom des enfants des clients réguliers ?", type: "STANDARD" },
            { id: "SVR_64", category: "VENTE", title: "VENTE", description: "Tu sais vendre un vin rouge au verre à quelqu'un qui prend du poisson ?", type: "Dilemme" },
            { id: "SVR_65", category: "ÉTHIQUE", title: "ÉTHIQUE", description: "Tu acceptes de servir un mineur si ses parents te disent que 'c'est ok' ?", type: "PIEGE" },
            { id: "SVR_66", category: "ADAPTATION", title: "ADAPTATION", description: "Tu sais expliquer la carte des vins avec passion ?", type: "STANDARD" },
            { id: "SVR_67", category: "MAINTENANCE", title: "MAINTENANCE", description: "Tu vérifies la propreté des toilettes toutes les heures ?", type: "STANDARD" },
            { id: "SVR_68", category: "STABILITÉ", title: "STABILITÉ", description: "Tu gardes ton sang-froid face à un client qui te hurle dessus pour rien ?", type: "SJT" },
            { id: "SVR_69", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais quand il faut arrêter de parler et laisser les clients entre eux ?", type: "INVENTIF" },
            { id: "SVR_70", category: "BRIGADE", title: "BRIGADE", description: "Tu dis 'merci' à la cuisine à chaque fois que tu récupères un plat ?", type: "STANDARD" },
            { id: "SVR_71", category: "HONNÊTETÉ", title: "HONNÊTETÉ", description: "Tu as déjà bu le reste d'un verre de vin client en cachette ?", type: "PIEGE" },
            { id: "SVR_72", category: "VITESSE", title: "VITESSE", description: "Tu sais débarrasser une table de 4 personnes en un seul passage ?", type: "STANDARD" },
            { id: "SVR_73", category: "ORGANISATION", title: "ORGANISATION", description: "Ton carnet de commande est-il toujours parfaitement lisible ?", type: "STANDARD" },
            { id: "SVR_74", category: "CLIENT", title: "CLIENT", description: "Tu sers toujours les femmes en premier, sans exception ?", type: "STANDARD" },
            { id: "SVR_75", category: "DIPLOMATIE", title: "DIPLOMATIE", description: "Un client se plaint d'un courant d'air. Tu fais semblant de fermer une fenêtre pour lui plaire ?", type: "INVENTIF" },
            { id: "SVR_76", category: "ÉQUIPE", title: "ÉQUIPE", description: "Tu partages tes pourboires avec les commis et les stagiaires ?", type: "VALEURS" },
            { id: "SVR_77", category: "STRESS", title: "STRESS", description: "Tu as déjà pleuré en réserve à cause de la pression ?", type: "PIEGE" },
            { id: "SVR_78", category: "HYGIÈNE", title: "HYGIÈNE", description: "Tu jettes un bout de pain tombé dans la corbeille ou tu le laisses ?", type: "SJT" },
            { id: "SVR_79", category: "SINCÉRITÉ", title: "SINCÉRITÉ", description: "Tu penses que les clients sont souvent des gens difficiles ?", type: "VALEURS" },
            { id: "SVR_80", category: "ANTICIPATION", title: "ANTICIPATION", description: "Tu as déjà les cendriers propres prêts avant que les clients ne sortent fumer ?", type: "STANDARD" },
            { id: "SVR_81", category: "VENTE", title: "VENTE", description: "Tu sais vendre un café même si le client demande l'addition directement ?", type: "INVENTIF" },
            { id: "SVR_82", category: "PRÉCISION", title: "PRÉCISION", description: "Tu sers l'eau à droite du client, systématiquement ?", type: "STANDARD" },
            { id: "SVR_83", category: "EMPATHIE", title: "EMPATHIE", description: "Tu sais repérer un client qui a un régime alimentaire spécial sans qu'il ne le dise ?", type: "PSYCHOLOGIQUE" },
            { id: "SVR_84", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Tu défends ton restaurant quand tu entends des critiques injustes sur internet ?", type: "SJT" },
            { id: "SVR_85", category: "FATIGUE", title: "FATIGUE", description: "Tu oublies de polir tes verres en fin de service ?", type: "PIEGE" },
            { id: "SVR_86", category: "BRIGADE", title: "BRIGADE", description: "Tu acceptes de débarrasser les tables d'un collègue sans qu'il ne te le demande ?", type: "SJT" },
            { id: "SVR_87", category: "HYGIÈNE", title: "HYGIÈNE", description: "Tu touches le bord des verres avec tes doigts quand tu les portes ?", type: "PIEGE" },
            { id: "SVR_88", category: "STRATÉGIE", title: "STRATÉGIE", description: "Tu proposes les plats les plus longs à cuire aux tables qui ont le temps ?", type: "INVENTIF" },
            { id: "SVR_89", category: "SÉCURITÉ", title: "SÉCURITÉ", description: "Tu empêches un client de fumer en terrasse si c'est interdit, même s'il s'énerve ?", type: "SJT" },
            { id: "SVR_90", category: "STABILITÉ", title: "STABILITÉ", description: "Tu gardes ton sourire même quand tu as renversé de la sauce sur ton pantalon ?", type: "Dilemme" },
            { id: "SVR_91", category: "HONNÊTETÉ", title: "HONNÊTETÉ", description: "Tu as déjà piqué un stylo ou un briquet à un client ?", type: "PIEGE" },
            { id: "SVR_92", category: "VENTE", title: "VENTE", description: "Tu sais décrire le goût d'un plat sans utiliser le mot 'bon' ?", type: "INVENTIF" },
            { id: "SVR_93", category: "MAINTENANCE", title: "MAINTENANCE", description: "Tu polis les couverts à chaque mise en place ?", type: "STANDARD" },
            { id: "SVR_94", category: "ÉQUIPE", title: "ÉQUIPE", description: "Tu considères que ton manager a toujours raison ?", type: "VALEURS" },
            { id: "SVR_95", category: "VITESSE", title: "VITESSE", description: "Tu es capable de prendre 3 commandes en même temps ?", type: "STANDARD" },
            { id: "SVR_96", category: "STRESS", title: "STRESS", description: "Tu aimes le bruit et l'agitation d'un restaurant plein ?", type: "VALEURS" },
            { id: "SVR_97", category: "DIPLOMATIE", title: "DIPLOMATIE", description: "Tu sais dire à un client qu'il doit libérer la table sans le vexer ?", type: "INVENTIF" },
            { id: "SVR_98", category: "HYGIÈNE", title: "HYGIÈNE", description: "Tu vides tes poubelles de salle tous les soirs ?", type: "STANDARD" },
            { id: "SVR_99", category: "ANTICIPATION", title: "ANTICIPATION", description: "Tu sais quand un client va faire tomber sa fourchette avant qu'il ne le fasse ?", type: "PSYCHOLOGIQUE" },
            { id: "SVR_100", category: "FINAL", title: "FINAL", description: "Tu es fier de dire que tu es serveur quand on te demande ton métier ?", type: "VALEURS" }
        ]
    }
];

const OLD_CHEF_RANG_DATA = []; // Deprecated

const CHEF_RANG_PHASE2 = [
    {
        section: "Analyse Approfondie",
        id: "PHASE2",
        items: [
            { id: "CDR_36", category: "BRIGADE", title: "BRIGADE", description: "Tu aides le plongeur à vider ses poubelles si tu vois qu'il coule, même avec ta veste blanche ?", type: "Dilemme" },
            { id: "CDR_37", category: "STRESS", title: "STRESS", description: "Ton manager te fait une remarque injuste devant tes clients. Tu souris et tu continues sans répondre ?", type: "SJT" },
            { id: "CDR_38", category: "ADAPTATION", title: "ADAPTATION", description: "Tu sais gérer une table de 12 enfants sans perdre ton élégance ?", type: "INVENTIF" },
            { id: "CDR_39", category: "HONNÊTETÉ", title: "HONNÊTETÉ", description: "Tu as déjà gonflé une addition de quelques euros en pensant que le client ne verrait rien ?", type: "PIEGE" },
            { id: "CDR_40", category: "AMBITION", title: "AMBITION", description: "Tu te vois Manager de ce restaurant d'ici 12 mois ?", type: "VALEURS" },
            { id: "CDR_41", category: "TECHNIQUE", title: "TECHNIQUE", description: "Tu maîtrises le découpage des volailles ou le filetage des poissons au guéridon ?", type: "STANDARD" },
            { id: "CDR_42", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais rompre le silence d'une table gênée avec une phrase d'humour parfaitement dosée ?", type: "INVENTIF" },
            { id: "CDR_43", category: "ARGENT", title: "ARGENT", description: "Tu préfères un rang avec beaucoup de tables (petit ticket) ou deux tables de luxe (très gros ticket) ?", type: "VALEURS" },
            { id: "CDR_44", category: "ORGANISATION", title: "ORGANISATION", description: "Ton carnet d'ordre est-il compréhensible par n'importe quel autre serveur en cas d'urgence ?", type: "STANDARD" },
            { id: "CDR_45", category: "SÉCURITÉ", title: "SÉCURITÉ", description: "Tu refuses de servir du vin à une femme enceinte, même si elle insiste ?", type: "Dilemme" },
            { id: "CDR_46", category: "DIPLOMATIE", title: "DIPLOMATIE", description: "Un client critique la décoration. Tu entres dans son jeu pour créer une complicité ou tu défends le lieu ?", type: "SJT" },
            { id: "CDR_47", category: "VITESSE", title: "VITESSE", description: "Tu sais marcher de manière extrêmement rapide sans jamais donner l'impression de courir ?", type: "STANDARD" },
            { id: "CDR_48", category: "ANTICIPATION", title: "ANTICIPATION", description: "Tu changes les cendriers (terrasse) dès qu'il y a une seule cendre dedans ?", type: "STANDARD" },
            { id: "CDR_49", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Tu signales au manager un collègue Chef de Rang qui arrive systématiquement avec 5 minutes de retard ?", type: "Dilemme" },
            { id: "CDR_50", category: "SINCÉRITÉ", title: "SINCÉRITÉ", description: "Tu penses que le pourboire est un dû et non une récompense ?", type: "VALEURS" },
            { id: "CDR_51", category: "ÉVOLUTION", title: "ÉVOLUTION", description: "Tu proposes de nouvelles techniques de service au Directeur pour améliorer l'expérience ?", type: "INVENTIF" },
            { id: "CDR_52", category: "MAINTENANCE", title: "MAINTENANCE", description: "Tu vérifies la stabilité de chaque table avant chaque service ?", type: "STANDARD" },
            { id: "CDR_53", category: "STABILITÉ", title: "STABILITÉ", description: "Tu peux porter 4 assiettes pleines sans que rien ne bouge, même dans les escaliers ?", type: "STANDARD" },
            { id: "CDR_54", category: "HYGIÈNE", title: "HYGIÈNE", description: "Tu jettes une serviette en tissu qui a touché le sol une seconde ?", type: "STANDARD" },
            { id: "CDR_55", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais identifier le 'décideur' à une table de business pour lui présenter l'addition en premier ?", type: "SJT" },
            { id: "CDR_56", category: "VENTE", title: "VENTE", description: "Tu sais suggérer un alcool fort en fin de repas sans jamais paraître insistant ?", type: "INVENTIF" },
            { id: "CDR_57", category: "RÉSILIENCE", title: "RÉSILIENCE", description: "Un plateau entier tombe à tes pieds. Ton visage ne trahit aucune émotion ?", type: "PSYCHOLOGIQUE" },
            { id: "CDR_58", category: "BRIGADE", title: "BRIGADE", description: "Tu partages ton savoir-faire avec les stagiaires avec patience, même pendant le rush ?", type: "SJT" },
            { id: "CDR_59", category: "HONNÊTETÉ", title: "HONNÊTETÉ", description: "Tu as déjà menti sur l'origine d'un vin car tu ne connaissais pas la réponse ?", type: "PIEGE" },
            { id: "CDR_60", category: "PERFECTION", title: "PERFECTION", description: "Tu ne supportes pas de voir un client se servir lui-même de l'eau ou du vin ?", type: "VALEURS" },
            { id: "CDR_61", category: "STRESS", title: "STRESS", description: "La cuisine annonce 45 minutes d'attente. Tu arrives à faire patienter tes clients avec le sourire ?", type: "SJT" },
            { id: "CDR_62", category: "DÉLÉGATION", title: "DÉLÉGATION", description: "Tu sais dire 'non' au manager qui veut te rajouter une table si ton rang est déjà saturé ?", type: "Dilemme" },
            { id: "CDR_63", category: "CULTURE", title: "CULTURE", description: "Tu lis la presse gastronomique pour te tenir au courant des tendances ?", type: "STANDARD" },
            { id: "CDR_64", category: "ADAPTATION", title: "ADAPTATION", description: "Tu sais gérer une table de clients ivres mais polis sans que cela ne dérange le reste de la salle ?", type: "SJT" },
            { id: "CDR_65", category: "ÉTHIQUE", title: "ÉTHIQUE", description: "Tu acceptes les avances d'un client/cliente pour obtenir un avantage ?", type: "PIEGE" },
            { id: "CDR_66", category: "PRÉCISION", title: "PRÉCISION", description: "Tu connais par cœur les numéros de toutes tes tables ?", type: "STANDARD" },
            { id: "CDR_67", category: "MAINTENANCE", title: "MAINTENANCE", description: "Tu polis tes verres avec de la vapeur d'eau à chaque mise en place ?", type: "STANDARD" },
            { id: "CDR_68", category: "EMPATHIE", title: "EMPATHIE", description: "Tu ressens physiquement le stress de tes clients quand ils sont pressés ?", type: "PSYCHOLOGIQUE" },
            { id: "CDR_69", category: "BONUS", title: "BONUS", description: "Es-tu prêt à former ton remplaçant dès demain ?", type: "VALEURS" },
            { id: "CDR_70", category: "VENTE", title: "VENTE", description: "Tu sais vendre un supplément truffe ou caviar sur un plat classique ?", type: "INVENTIF" },
            { id: "CDR_71", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Tu restes après ton service pour aider le barman à ranger, sans être payé ?", type: "Dilemme" },
            { id: "CDR_72", category: "SANG-FROID", title: "SANG-FROID", description: "Un client s'étouffe à ton rang. Tu sais pratiquer les gestes de premier secours immédiatement ?", type: "SJT" },
            { id: "CDR_73", category: "RIGUEUR", title: "RIGUEUR", description: "Tu vérifies le pliage de chaque serviette, une par une ?", type: "STANDARD" },
            { id: "CDR_74", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais identifier un couple illégitime et tu restes d'une discrétion absolue ?", type: "INVENTIF" },
            { id: "CDR_75", category: "FATIGUE", title: "FATIGUE", description: "Tes chaussures sont-elles toujours aussi brillantes qu'au début du shift ?", type: "PIEGE" },
            { id: "CDR_76", category: "ÉQUIPE", title: "ÉQUIPE", description: "Tu préfères travailler avec un commis efficace mais désagréable, ou un commis sympa mais lent ?", type: "VALEURS" },
            { id: "CDR_77", category: "VENTE", title: "VENTE", description: "Tu sais proposer un vin au verre qui coûte le prix d'une demi-bouteille ?", type: "INVENTIF" },
            { id: "CDR_78", category: "ANTICIPATION", title: "ANTICIPATION", description: "Tu as déjà les manteaux des clients prêts au vestiaire avant qu'ils ne se lèvent ?", type: "SJT" },
            { id: "CDR_79", category: "HYGIÈNE", title: "HYGIÈNE", description: "Tu refuses de servir un plat si l'assiette n'est pas brûlante (pour un plat chaud) ?", type: "STANDARD" },
            { id: "CDR_80", category: "SINCÉRITÉ", title: "SINCÉRITÉ", description: "Tu penses que tu pourrais faire un meilleur travail que ton Manager ?", type: "VALEURS" },
            { id: "CDR_81", category: "AUTONOMIE", title: "AUTONOMIE", description: "Tu sais clore ton rang et faire ta caisse seul en moins de 10 minutes ?", type: "STANDARD" },
            { id: "CDR_82", category: "STRESS", title: "STRESS", description: "Une célébrité arrive à ton rang. Ton niveau de service change-t-il ?", type: "Dilemme" },
            { id: "CDR_83", category: "COMMUNICATION", title: "COMMUNICATION", description: "Tu fais un briefing à ton commis avant chaque service pour lui donner tes objectifs ?", type: "SJT" },
            { id: "CDR_84", category: "HONNÊTETÉ", title: "HONNÊTETÉ", description: "Tu as déjà menti à la cuisine en disant qu'un plat était tombé pour en avoir un nouveau rapidement ?", type: "PIEGE" },
            { id: "CDR_85", category: "PRÉCISION", title: "PRÉCISION", description: "Tu sais servir le café sans jamais faire de bruit avec la tasse sur la soucoupe ?", type: "STANDARD" },
            { id: "CDR_86", category: "INVENTIVITÉ", title: "INVENTIVITÉ", description: "Tu proposes des cocktails apéritifs 'maison' pour éviter d'envoyer trop de clients vers le bar ?", type: "SJT" },
            { id: "CDR_87", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Tu es prêt à venir travailler sur ton jour de repos pour un mariage important ?", type: "VALEURS" },
            { id: "CDR_88", category: "ADAPTATION", title: "ADAPTATION", description: "Tu sais gérer une table de clients qui ne parlent aucune langue que tu connais ?", type: "INVENTIF" },
            { id: "CDR_89", category: "SÉCURITÉ", title: "SÉCURITÉ", description: "Tu signales systématiquement une marche mal éclairée ou un tapis corné ?", type: "STANDARD" },
            { id: "CDR_90", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais dire 'non' à un client sans jamais utiliser le mot 'non' ?", type: "SJT" },
            { id: "CDR_91", category: "MAINTENANCE", title: "MAINTENANCE", description: "Tu sais dresser une table complète en moins de 45 secondes ?", type: "STANDARD" },
            { id: "CDR_92", category: "VENTE", title: "VENTE", description: "Tu sais vendre de l'eau minérale à quelqu'un qui veut une carafe d'eau ?", type: "INVENTIF" },
            { id: "CDR_93", category: "ENDURANCE", title: "ENDURANCE", description: "Tu peux porter un enfant dans un bras et un plateau dans l'autre ?", type: "PIEGE" },
            { id: "CDR_94", category: "ÉTHIQUE", title: "ÉTHIQUE", description: "Tu acceptes de servir un plat périmé si le Chef t'assure que 'ça passe' ?", type: "Dilemme" },
            { id: "CDR_95", category: "STRESS", title: "STRESS", description: "Un client t'insulte. Tu restes poli mais tu ne le sers plus ?", type: "SJT" },
            { id: "CDR_96", category: "ANTICIPATION", title: "ANTICIPATION", description: "Tu as déjà les digestifs en tête avant même que le client n'ait fini son plat ?", type: "PSYCHOLOGIQUE" },
            { id: "CDR_97", category: "RIGUEUR", title: "RIGUEUR", description: "Tu vérifies le dessous des tables pour enlever les chewing-gums éventuels ?", type: "STANDARD" },
            { id: "CDR_98", category: "AMBITION", title: "AMBITION", description: "Tu penses mériter une augmentation de salaire dès le mois prochain ?", type: "VALEURS" },
            { id: "CDR_99", category: "FIDÉLITÉ", title: "FIDÉLITÉ", description: "Tu parles de ton restaurant avec fierté lors de tes soirées privées ?", type: "VALEURS" },
            { id: "CDR_100", category: "FINAL", title: "FINAL", description: "Si tu étais le patron, est-ce que tu t'embaucherais aujourd'hui ?", type: "PIEGE" }
        ]
    }
];

const MANAGER_DATA = [
    {
        section: "Diagnostic Leadership",
        id: "PHASE1",
        items: [
            { id: "MGR_1", category: "AMBITION", title: "AMBITION", description: "Tu penses sincèrement que tu fais 80% du travail de ton Manager pour seulement 70% de son salaire ?", type: "PIEGE" },
            { id: "MGR_2", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Le Manager fait une erreur devant l'équipe. Tu le corriges immédiatement pour montrer que TU sais, ou tu le couvres en privé ?", type: "DILEMME" },
            { id: "MGR_3", category: "FRUSTRATION", title: "FRUSTRATION", description: "Un client te félicite pour la gestion. Tu précises que c'est GRÂCE à toi et non grâce au Manager ?", type: "PSYCHOLOGIQUE" },
            { id: "MGR_4", category: "POSITIONNEMENT", title: "POSITIONNEMENT", description: "Le Directeur te demande ton avis sur les faiblesses du Manager. Tu balances tout pour prendre sa place plus vite ?", type: "DILEMME" },
            { id: "MGR_5", category: "RÉSILIENCE", title: "RÉSILIENCE", description: "On te demande de faire une fermeture et une ouverture le lendemain parce que le Manager a 'un empêchement'. Tu acceptes avec le sourire ?", type: "SJT" },
            { id: "MGR_6", category: "VISION", title: "VISION", description: "Tu considères ce poste comme une école nécessaire ou comme une perte de temps en attendant mieux ?", type: "VALEURS" },
            { id: "MGR_7", category: "ARGENT", title: "ARGENT", description: "Un concurrent te propose le poste de Manager (le grade au-dessus) pour le même salaire qu'actuellement. Tu pars ?", type: "Dilemme" },
            { id: "MGR_8", category: "ÉTHIQUE", title: "ÉTHIQUE", description: "Tu vois le Manager faire une petite entorse au règlement. Tu l'utilises comme moyen de pression plus tard ?", type: "PIEGE" },
            { id: "MGR_9", category: "LEADERSHIP", title: "LEADERSHIP", description: "L'équipe préfère venir te voir toi plutôt que le Manager pour leurs problèmes. Ça te flatte secrètement ?", type: "PSYCHOLOGIQUE" },
            { id: "MGR_10", category: "AMBITION", title: "AMBITION", description: "Si le Manager démissionne demain, tu te sens capable de reprendre le poste sans aucune formation ?", type: "VALEURS" },
            { id: "MGR_11", category: "SINCÉRITÉ", title: "SINCÉRITÉ", description: "Tu as déjà dit à un serveur : 'Si c'était moi le chef, on ne ferait pas comme ça' ?", type: "PIEGE" },
            { id: "MGR_12", category: "STRESS", title: "STRESS", description: "Le Manager panique en rush. Tu prends le contrôle naturellement ou tu le laisses couler pour montrer ses limites ?", type: "SJT" },
            { id: "MGR_13", category: "FIDÉLITÉ", title: "FIDÉLITÉ", description: "Tu es prêt à rester Adjoint 2 ans si on te promet une direction après, ou c'est trop long ?", type: "VALEURS" },
            { id: "MGR_14", category: "EGO", title: "EGO", description: "Tu supportes qu'un Chef de Rang te rappelle que tu n'es 'que' l'adjoint ?", type: "PSYCHOLOGIQUE" },
            { id: "MGR_15", category: "GESTION", title: "GESTION", description: "Tu préfères être le 'bon flic' de l'équipe pendant que le Manager fait le 'mauvais flic' ?", type: "SJT" },
            { id: "MGR_16", category: "INITIATIVE", title: "INITIATIVE", description: "Tu lances une nouvelle procédure sans en parler au Manager pour lui faire la surprise ?", type: "INVENTIF" },
            { id: "MGR_17", category: "AMBITION", title: "AMBITION", description: "Tu passes plus de temps à regarder les offres d'emploi de Directeur qu'à faire tes inventaires ?", type: "PIEGE" },
            { id: "MGR_18", category: "SÉCURITÉ", title: "SÉCURITÉ", description: "Tu sais gérer une fin de soirée alcoolisée sans jamais perdre ton autorité d'adjoint ?", type: "STANDARD" },
            { id: "MGR_19", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais identifier quel serveur est loyal envers le Manager et lequel est loyal envers TOI ?", type: "INVENTIF" },
            { id: "MGR_20", category: "VALEUR", title: "VALEUR", description: "Pour toi, un bon adjoint est un futur remplaçant ou un soutien permanent ?", type: "VALEURS" },
            { id: "MGR_21", category: "FRUSTRATION", title: "FRUSTRATION", description: "Le Manager prend tout le mérite d'une idée que TU as eue. Tu ne dis rien par diplomatie ?", type: "Dilemme" },
            { id: "MGR_22", category: "COMPÉTENCE", title: "COMPÉTENCE", description: "Tu connais les ratios financiers du resto aussi bien que le Manager ?", type: "STANDARD" },
            { id: "MGR_23", category: "ÉQUIPE", title: "ÉQUIPE", description: "Tu acceptes que l'équipe te tutoie alors qu'elle vouvoie le Manager ?", type: "SJT" },
            { id: "MGR_24", category: "AMBITION", title: "AMBITION", description: "Tu penses que l'expérience terrain vaut plus que le diplôme de ton supérieur ?", type: "VALEURS" },
            { id: "MGR_25", category: "HONNÊTETÉ", title: "HONNÊTETÉ", description: "Tu as déjà saboté une décision du Manager pour prouver que tu avais raison ?", type: "PIEGE" },
            { id: "MGR_26", category: "STABILITÉ", title: "STABILITÉ", description: "Tu arrives à rester motivé même quand le Manager est de mauvaise humeur ?", type: "STANDARD" },
            { id: "MGR_27", category: "DÉLÉGATION", title: "DÉLÉGATION", description: "Tu délègues les tâches ingrates pour te concentrer sur l'image de marque auprès du Directeur ?", type: "SJT" },
            { id: "MGR_28", category: "SINCÉRITÉ", title: "SINCÉRITÉ", description: "Tu as déjà postulé ailleurs sans en parler à ta hiérarchie ?", type: "PIEGE" },
            { id: "MGR_29", category: "STRATÉGIE", title: "STRATÉGIE", description: "Tu sais te rendre indispensable au point que le restaurant ne peut pas tourner sans toi ?", type: "INVENTIF" },
            { id: "MGR_30", category: "SANG-FROID", title: "SANG-FROID", description: "Un conflit éclate entre deux services. Tu tranches immédiatement ou tu attends l'avis du Manager ?", type: "SJT" },
            { id: "MGR_31", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais manipuler le planning pour favoriser les employés qui te sont fidèles ?", type: "Dilemme" },
            { id: "MGR_32", category: "VALEURS", title: "VALEURS", description: "Un adjoint doit-il être plus proche des serveurs ou du patron ?", type: "VALEURS" },
            { id: "MGR_33", category: "STRESS", title: "STRESS", description: "Tu es capable de gérer l'ouverture, le service et la fermeture seul pendant une semaine ?", type: "STANDARD" },
            { id: "MGR_34", category: "FRUSTRATION", title: "FRUSTRATION", description: "Tu trouves que ton salaire actuel est une insulte à ton investissement ?", type: "PIEGE" },
            { id: "MGR_35", category: "IMAGE", title: "IMAGE", description: "Tu soignes ton apparence plus que ton Manager pour marquer une différence ?", type: "INVENTIF" }
        ]
    }
];

const MANAGER_PHASE2 = [
    {
        section: "Analyse Approfondie",
        id: "PHASE2",
        items: [
            { id: "MGR_36", category: "RIGUEUR", title: "RIGUEUR", description: "Tu vérifies les caisses après le Manager pour voir s'il a fait des erreurs ?", type: "SJT" },
            { id: "MGR_37", category: "AMBITION", title: "AMBITION", description: "Ton but ultime est de quitter la restauration pour ouvrir ton propre business ?", type: "VALEURS" },
            { id: "MGR_38", category: "RH", title: "RH", description: "Tu sais recadrer un employé qui a le même âge que toi sans faiblir ?", type: "STANDARD" },
            { id: "MGR_39", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Si le Manager est viré, tu refuses de prendre sa place par solidarité ?", type: "Dilemme" },
            { id: "MGR_40", category: "VISION", title: "VISION", description: "Tu passes du temps à analyser les avis clients pour proposer des changements ?", type: "STANDARD" },
            { id: "MGR_41", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais quand le Directeur est de mauvaise humeur rien qu'au bruit de ses clés ?", type: "INVENTIF" },
            { id: "MGR_42", category: "SINCÉRITÉ", title: "SINCÉRITÉ", description: "Tu penses que le Manager est déconnecté de la réalité du terrain ?", type: "PIEGE" },
            { id: "MGR_43", category: "COMMUNICATION", title: "COMMUNICATION", description: "Tu parles aux fournisseurs dans le dos du Manager pour obtenir des faveurs ?", type: "SJT" },
            { id: "MGR_44", category: "ÉTHIQUE", title: "ÉTHIQUE", description: "Tu as déjà couvert un retard d'un employé en échange d'un service personnel ?", type: "PIEGE" },
            { id: "MGR_45", category: "AMBITION", title: "AMBITION", description: "Tu as déjà ton CV prêt et à jour sur ton téléphone en permanence ?", type: "VALEURS" },
            { id: "MGR_46", category: "TECHNIQUE", title: "TECHNIQUE", description: "Tu maîtrises le logiciel de gestion mieux que le Manager ?", type: "STANDARD" },
            { id: "MGR_47", category: "ADAPTATION", title: "ADAPTATION", description: "Tu es prêt à déménager dans une autre ville pour obtenir un poste de Directeur ?", type: "VALEURS" },
            { id: "MGR_48", category: "STRESS", title: "STRESS", description: "Tu supportes que le Manager te donne des ordres contradictoires ?", type: "SJT" },
            { id: "MGR_49", category: "RELATIONNEL", title: "RELATIONNEL", description: "Tu as les numéros personnels des plus gros clients du restaurant ?", type: "INVENTIF" },
            { id: "MGR_50", category: "AUTORITÉ", title: "AUTORITÉ", description: "Tu sais te faire obéir sans jamais avoir besoin de hausser le ton ?", type: "STANDARD" },
            { id: "MGR_51", category: "FRUSTRATION", title: "FRUSTRATION", description: "Tu as déjà eu envie de ne pas venir travailler juste pour voir comment ils s'en sortiraient sans toi ?", type: "PIEGE" },
            { id: "MGR_52", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Tu préviens le Manager si l'équipe prépare une fronde contre lui ?", type: "Dilemme" },
            { id: "MGR_53", category: "VITESSE", title: "VITESSE", description: "Tu es capable de faire le travail de deux personnes quand il y a un absent ?", type: "STANDARD" },
            { id: "MGR_54", category: "MANAGEMENT", title: "MANAGEMENT", description: "Tu préfères être aimé de tes subordonnés ou être respecté par tes supérieurs ?", type: "VALEURS" },
            { id: "MGR_55", category: "SÉCURITÉ", title: "SÉCURITÉ", description: "Tu connais les codes d'alarme et les procédures d'urgence par cœur ?", type: "STANDARD" },
            { id: "MGR_56", category: "AMBITION", title: "AMBITION", description: "Tu penses que tu serais un meilleur Directeur que l'actuel ?", type: "VALEURS" },
            { id: "MGR_57", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais quel employé va faire une erreur avant même qu'il ne la fasse ?", type: "INVENTIF" },
            { id: "MGR_58", category: "ARGENT", title: "ARGENT", description: "Tu vérifies le montant des pourboires tous les jours ?", type: "PIEGE" },
            { id: "MGR_59", category: "PEDAGOGIE", title: "PEDAGOGIE", description: "Tu prends le temps de former les apprentis même quand tu es débordé ?", type: "STANDARD" },
            { id: "MGR_60", category: "MAINTENANCE", title: "MAINTENANCE", description: "Tu sais réparer une fuite de tireuse à bière sans aide ?", type: "INVENTIF" },
            { id: "MGR_61", category: "SINCÉRITÉ", title: "SINCÉRITÉ", description: "Tu as déjà critiqué le restaurant sur les réseaux sociaux via un compte anonyme ?", type: "PIEGE" },
            { id: "MGR_62", category: "POSITIONNEMENT", title: "POSITIONNEMENT", description: "Tu restes neutre lors d'un conflit entre le Chef de cuisine et le Manager ?", type: "SJT" },
            { id: "MGR_63", category: "VISION", title: "VISION", description: "Tu as des idées pour réduire les coûts de 10% sans baisser la qualité ?", type: "INVENTIF" },
            { id: "MGR_64", category: "STABILITÉ", title: "STABILITÉ", description: "Tu gardes ton calme face à un client qui demande à voir 'le vrai responsable' ?", type: "Dilemme" },
            { id: "MGR_65", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Tu es prêt à travailler tes jours de repos sans compensation pour sauver un service ?", type: "VALEURS" },
            { id: "MGR_66", category: "RH", title: "RH", description: "Tu sais recruter un bon profil rien qu'au regard lors d'un essai ?", type: "STANDARD" },
            { id: "MGR_67", category: "HYGIÈNE", title: "HYGIÈNE", description: "Tu es plus strict sur les normes HACCP que le Manager lui-même ?", type: "STANDARD" },
            { id: "MGR_68", category: "AMBITION", title: "AMBITION", description: "Tu te vois rester dans cette entreprise plus de 3 ans ?", type: "VALEURS" },
            { id: "MGR_69", category: "FINANCE", title: "FINANCE", description: "Tu sais calculer un coût de revient sur un cocktail complexe ?", type: "STANDARD" },
            { id: "MGR_70", category: "MÉDIATION", title: "MÉDIATION", description: "Tu sais calmer une dispute entre deux serveurs en moins de 30 secondes ?", type: "SJT" },
            { id: "MGR_71", category: "HONNÊTETÉ", title: "HONNÊTETÉ", description: "Tu as déjà utilisé ton statut pour obtenir des avantages personnels ?", type: "PIEGE" },
            { id: "MGR_72", category: "EXEMPLARITÉ", title: "EXEMPLARITÉ", description: "Tu fais les tâches les plus sales (poubelles, toilettes) pour montrer l'exemple ?", type: "STANDARD" },
            { id: "MGR_73", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais motiver quelqu'un qui n'a plus envie de travailler ?", type: "INVENTIF" },
            { id: "MGR_74", category: "VENTE", title: "VENTE", description: "Tu sais augmenter le ticket moyen de 5€ par personne juste par le briefing ?", type: "STANDARD" },
            { id: "MGR_75", category: "FRUSTRATION", title: "FRUSTRATION", description: "Tu as l'impression d'être le seul à vraiment porter ce restaurant ?", type: "PIEGE" },
            { id: "MGR_76", category: "STRATÉGIE", title: "STRATÉGIE", description: "Tu sais organiser une soirée spéciale pour ramener du monde le lundi soir ?", type: "INVENTIF" },
            { id: "MGR_77", category: "FIDÉLITÉ", title: "FIDÉLITÉ", description: "Tu refuserais de partir si tes serveurs te suppliaient de rester ?", type: "VALEURS" },
            { id: "MGR_78", category: "VIGILANCE", title: "VIGILANCE", description: "Tu repères une bouteille entamée qui ne devrait pas l'être en 1 seconde ?", type: "STANDARD" },
            { id: "MGR_79", category: "SÉCURITÉ", title: "SÉCURITÉ", description: "Tu sais gérer un départ de feu en cuisine avec les bons extincteurs ?", type: "STANDARD" },
            { id: "MGR_80", category: "AMBITION", title: "AMBITION", description: "Tu penses que tu mérites une part du capital du restaurant ?", type: "VALEURS" },
            { id: "MGR_81", category: "ADAPTATION", title: "ADAPTATION", description: "Tu peux remplacer le barman ou le cuisinier au pied levé ?", type: "SJT" },
            { id: "MGR_82", category: "CONFIANCE", title: "CONFIANCE", description: "Le Directeur te confie des secrets qu'il ne dit pas au Manager ?", type: "Dilemme" },
            { id: "MGR_83", category: "RIGUEUR", title: "RIGUEUR", description: "Tu vérifies les dates de péremption chaque matin ?", type: "STANDARD" },
            { id: "MGR_84", category: "STRESS", title: "STRESS", description: "Tu supportes d'être appelé pendant tes jours de repos ?", type: "PIEGE" },
            { id: "MGR_85", category: "INFLUENCE", title: "INFLUENCE", description: "Tu sais convaincre le patron de changer une décision déjà prise ?", type: "INVENTIF" },
            { id: "MGR_86", category: "RH", title: "RH", description: "Tu as déjà licencié quelqu'un toi-même ?", type: "STANDARD" },
            { id: "MGR_87", category: "VISION", title: "VISION", description: "Tu penses que ce restaurant a un futur à 5 ans ?", type: "VALEURS" },
            { id: "MGR_88", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Tu es prêt à mentir à un inspecteur pour sauver ton restaurant ?", type: "Dilemme" },
            { id: "MGR_89", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais quand un employé va te mentir rien qu'au mouvement de ses yeux ?", type: "INVENTIF" },
            { id: "MGR_90", category: "MAINTENANCE", title: "MAINTENANCE", description: "Tu nettoies ton bureau tous les soirs avant de partir ?", type: "STANDARD" },
            { id: "MGR_91", category: "SINCÉRITÉ", title: "SINCÉRITÉ", description: "Tu penses que la hiérarchie est parfois un obstacle au profit ?", type: "VALEURS" },
            { id: "MGR_92", category: "FRUSTRATION", title: "FRUSTRATION", description: "Tu envies la vie sociale de tes amis qui ne bossent pas en HCR ?", type: "PIEGE" },
            { id: "MGR_93", category: "STABILITÉ", title: "STABILITÉ", description: "Tu sais rester pro même face à un client qui insulte ta famille ?", type: "SJT" },
            { id: "MGR_94", category: "AUTONOMIE", title: "AUTONOMIE", description: "Tu sais faire les commandes fournisseurs seul ?", type: "STANDARD" },
            { id: "MGR_95", category: "AMBITION", title: "AMBITION", description: "Tu serais prêt à racheter ce restaurant si le patron vendait ?", type: "VALEURS" },
            { id: "MGR_96", category: "ÉQUIPE", title: "ÉQUIPE", description: "Tu sais organiser un inventaire en un temps record ?", type: "STANDARD" },
            { id: "MGR_97", category: "COMMUNICATION", title: "COMMUNICATION", description: "Tu sais rédiger un mail pro sans aucune faute d'orthographe ?", type: "INVENTIF" },
            { id: "MGR_98", category: "VALEURS", title: "VALEURS", description: "L'honnêteté est-elle plus importante que le chiffre d'affaires ?", type: "VALEURS" },
            { id: "MGR_99", category: "VIGILANCE", title: "VIGILANCE", description: "Tu vérifies les poubelles pour voir ce qui est jeté inutilement ?", type: "STANDARD" },
            { id: "MGR_100", category: "FINAL", title: "FINAL", description: "Si tu n'es pas Directeur dans un an, tu quittes l'établissement ?", type: "PIEGE" }
        ]
    }
];

const MANAGER_PRINCIPAL_DATA = [
    {
        section: "Diagnostic Leadership",
        id: "PHASE1",
        items: [
            { id: "MGRP_1", category: "RENTABILITÉ", title: "RENTABILITÉ", description: "La marge chute. Ta première décision est de baisser la qualité des produits ou de couper dans les heures du personnel ?", type: "DILEMME" },
            { id: "MGRP_2", category: "ÉTHIQUE", title: "ÉTHIQUE", description: "Ton meilleur élément est pris en flagrant délit de vol. Tu le gardes jusqu'à la fin du rush avant de le confronter ?", type: "SJT" },
            { id: "MGRP_3", category: "GESTION DE CRISE", title: "GESTION DE CRISE", description: "Une intoxication alimentaire est suspectée. Tu rembourses discrètement pour étouffer l'affaire ou tu lances une procédure officielle ?", type: "DILEMME" },
            { id: "MGRP_4", category: "AUTORITÉ", title: "AUTORITÉ", description: "Un client insulte un serveur. Tu donnes tort au serveur devant le client pour sauver la vente et l'image ?", type: "PIEGE" },
            { id: "MGRP_5", category: "VISION", title: "VISION", description: "Tu préfères un restaurant plein avec des notes moyennes, ou un restaurant à moitié vide mais avec 5 étoiles partout ?", type: "VALEURS" },
            { id: "MGRP_6", category: "RH", title: "RH", description: "Tu dois annoncer la fin des pourboires individuels au profit d'un pot commun. Tu assumes la décision ou tu dis que 'ça vient d'en haut' ?", type: "SJT" },
            { id: "MGRP_7", category: "PROFIT", title: "PROFIT", description: "Un fournisseur propose une remise de 20% contre un paiement non déclaré. Tu acceptes pour sauver ton budget ?", type: "PIEGE" },
            { id: "MGRP_8", category: "STRESS", title: "STRESS", description: "L'hygiène arrive un samedi soir à 21h. Ta première réaction est de les faire attendre ou de les accueillir immédiatement ?", type: "SJT" },
            { id: "MGRP_9", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Le Directeur te demande de falsifier un inventaire pour rassurer les investisseurs. Tu t'exécutes ?", type: "DILEMME" },
            { id: "MGRP_10", category: "EGO", title: "EGO", description: "Tu acceptes qu'un stagiaire te prouve que ta méthode de gestion est obsolète ?", type: "VALEURS" },
            { id: "MGRP_11", category: "MANAGEMENT", title: "MANAGEMENT", description: "Tu préfères licencier un génie toxique ou garder un employé médiocre mais fidèle ?", type: "DILEMME" },
            { id: "MGRP_12", category: "FINANCE", title: "FINANCE", description: "Tu connais ton Food Cost théorique vs réel sur le dernier mois à 1% près ?", type: "STANDARD" },
            { id: "MGRP_13", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais quel employé va faire un 'abandon de poste' avant la fin de la semaine ?", type: "INVENTIF" },
            { id: "MGRP_14", category: "ORGANISATION", title: "ORGANISATION", description: "Tu peux refaire un planning pour 15 personnes en cas de grève surprise en moins de 10 minutes ?", type: "STANDARD" },
            { id: "MGRP_15", category: "LÉGAL", title: "LÉGAL", description: "Tu autorises un serveur à faire un 'double' sans repos légal car il a besoin d'argent et toi de staff ?", type: "PIEGE" },
            { id: "MGRP_16", category: "STRATÉGIE", title: "STRATÉGIE", description: "Tu préfères monter les prix de 15% ou réduire les quantités dans l'assiette ?", type: "SJT" },
            { id: "MGRP_17", category: "LEADERSHIP", title: "LEADERSHIP", description: "Ton équipe te respecte-t-elle par peur de tes colères ou par peur de te décevoir ?", type: "VALEURS" },
            { id: "MGRP_18", category: "RECRUTEMENT", title: "RECRUTEMENT", description: "Tu engages quelqu'un au pur feeling, même si son CV est un tissu de mensonges ?", type: "SJT" },
            { id: "MGRP_19", category: "VIGILANCE", title: "VIGILANCE", description: "Tu fouilles les sacs ou les casiers si les pertes d'alcool deviennent suspectes ?", type: "PIEGE" },
            { id: "MGRP_20", category: "STABILITÉ", title: "STABILITÉ", description: "Tu es capable de ne jamais parler de travail avec ton/ta conjoint(e) le soir ?", type: "STANDARD" },
            { id: "MGRP_21", category: "MÉDIATION", title: "MÉDIATION", description: "Le Chef et le Maître d'Hôtel se détestent. Tu les forces à travailler ensemble ou tu les sépares ?", type: "SJT" },
            { id: "MGRP_22", category: "PROFIT", title: "PROFIT", description: "Tu factures le pain et l'eau systématiquement si le ticket moyen est trop bas ?", type: "INVENTIF" },
            { id: "MGRP_23", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais mentir les yeux dans les yeux à un client pour protéger un serveur qui a fait une faute grave ?", type: "DILEMME" },
            { id: "MGRP_24", category: "MAINTENANCE", title: "MAINTENANCE", description: "Tu sais réparer une clim ou une chambre froide toi-même pour économiser un dépannage ?", type: "STANDARD" },
            { id: "MGRP_25", category: "IMAGE", title: "IMAGE", description: "Tu refuses l'entrée à un groupe bruyant même si ton restaurant est vide ?", type: "SJT" },
            { id: "MGRP_26", category: "FIDÉLITÉ", title: "FIDÉLITÉ", description: "Tu resterais si le restaurant changeait de concept pour devenir un fast-food ?", type: "VALEURS" },
            { id: "MGRP_27", category: "CONTRÔLE", title: "CONTRÔLE", description: "Tu goûtes chaque plat qui sort pendant le service ou tu fais confiance aveugle au Chef ?", type: "STANDARD" },
            { id: "MGRP_28", category: "RH", title: "RH", description: "Tu interdits les relations amoureuses dans ton équipe pour éviter les drames ?", type: "SJT" },
            { id: "MGRP_29", category: "FINANCE", title: "FINANCE", description: "Tu sais expliquer un compte de résultat (P&L) à un serveur ?", type: "INVENTIF" },
            { id: "MGRP_30", category: "AMBITION", title: "AMBITION", description: "Ton objectif est d'ouvrir ton propre restaurant pour faire de l'ombre à celui-ci ?", type: "PIEGE" },
            { id: "MGRP_31", category: "SÉCURITÉ", title: "SÉCURITÉ", description: "Tu connais les numéros de téléphone personnels de tous tes fournisseurs en cas d'urgence ?", type: "STANDARD" },
            { id: "MGRP_32", category: "MARKETING", title: "MARKETING", description: "Tu passes plus de temps sur les réseaux sociaux du resto que sur le terrain ?", type: "PIEGE" },
            { id: "MGRP_33", category: "NÉGOCIATION", title: "NÉGOCIATION", description: "Tu es capable d'obtenir un délai de paiement d'un mois à un fournisseur en difficulté ?", type: "SJT" },
            { id: "MGRP_34", category: "STRESS", title: "STRESS", description: "Tu supportes de travailler 80h par semaine sans jamais te plaindre ?", type: "PIEGE" },
            { id: "MGRP_35", category: "DÉLÉGATION", title: "DÉLÉGATION", description: "Tu confies les clés du coffre à ton Adjoint sans aucune crainte ?", type: "VALEURS" }
        ]
    }
];

const MANAGER_PRINCIPAL_PHASE2 = [
    {
        section: "Analyse Approfondie",
        id: "PHASE2",
        items: [
            { id: "MGRP_36", category: "HONNÊTETÉ", title: "HONNÊTETÉ", description: "Tu as déjà pris une 'com' personnelle sur une commande de gros ?", type: "PIEGE" },
            { id: "MGRP_37", category: "RH", title: "RH", description: "Tu sais licencier quelqu'un en 5 minutes sans qu'il ne puisse rien dire ?", type: "INVENTIF" },
            { id: "MGRP_38", category: "AUTORITÉ", title: "AUTORITÉ", description: "L'uniforme est-il plus important que la personnalité de l'employé ?", type: "VALEURS" },
            { id: "MGRP_39", category: "VISION", title: "VISION", description: "Tu privilégies le 'zéro déchet' même si ça coûte 3 points de marge ?", type: "DILEMME" },
            { id: "MGRP_40", category: "TECHNIQUE", title: "TECHNIQUE", description: "Tu maîtrises les normes incendie aussi bien que les normes HACCP ?", type: "STANDARD" },
            { id: "MGRP_41", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais remotiver un cuisinier qui veut tout plaquer en plein service ?", type: "SJT" },
            { id: "MGRP_42", category: "PROFIT", title: "PROFIT", description: "Tu surveilles la consommation d'essuie-tout et de produits d'entretien ?", type: "STANDARD" },
            { id: "MGRP_43", category: "ÉTHIQUE", title: "ÉTHIQUE", description: "Tu sers des produits dont la DLC est dépassée de 24h si le goût est ok ?", type: "PIEGE" },
            { id: "MGRP_44", category: "RELATIONNEL", title: "RELATIONNEL", description: "Tu sais quel client est là pour 'm'as-tu-vu' et lequel est là pour la cuisine ?", type: "INVENTIF" },
            { id: "MGRP_45", category: "STABILITÉ", title: "STABILITÉ", description: "Tu gardes ton calme quand la cuisine annonce 1h d'attente à 22h ?", type: "SJT" },
            { id: "MGRP_46", category: "PEDAGOGIE", title: "PEDAGOGIE", description: "Tu formes ton adjoint pour qu'il puisse te remplacer définitivement ?", type: "VALEURS" },
            { id: "MGRP_47", category: "ANTICIPATION", title: "ANTICIPATION", description: "Tu prévois tes plannings 4 semaines à l'avance ?", type: "STANDARD" },
            { id: "MGRP_48", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Tu démissionnerais si ton Directeur te parlait mal devant l'équipe ?", type: "DILEMME" },
            { id: "MGRP_49", category: "SINCÉRITÉ", title: "SINCÉRITÉ", description: "La bienveillance est-elle une faiblesse pour un Manager ?", type: "PIEGE" },
            { id: "MGRP_50", category: "AUTONOMIE", title: "AUTONOMIE", description: "Tu es capable de gérer la maintenance informatique seul ?", type: "STANDARD" },
            { id: "MGRP_51", category: "RH", title: "RH", description: "Tu préfères un génie instable ou un médiocre ultra-fiable ?", type: "VALEURS" },
            { id: "MGRP_52", category: "COMMUNICATION", title: "COMMUNICATION", description: "Tu fais un compte-rendu écrit après chaque briefing ?", type: "STANDARD" },
            { id: "MGRP_53", category: "VENTE", title: "VENTE", description: "Tu sais créer un cocktail qui coûte 1€ et se vend 15€ ?", type: "INVENTIF" },
            { id: "MGRP_54", category: "SÉCURITÉ", title: "SÉCURITÉ", description: "Tu connais le passé judiciaire de tes employés ?", type: "PIEGE" },
            { id: "MGRP_55", category: "PROFIT", title: "PROFIT", description: "Tu préfères augmenter le panier moyen ou le nombre de clients ?", type: "SJT" },
            { id: "MGRP_56", category: "ÉTHIQUE", title: "ÉTHIQUE", description: "Tu sers de l'alcool à des clients manifestement ivres s'ils sont VIP ?", type: "DILEMME" },
            { id: "MGRP_57", category: "STRESS", title: "STRESS", description: "Tu sais traiter 200 messages WhatsApp/Mails par jour ?", type: "STANDARD" },
            { id: "MGRP_58", category: "VISION", title: "VISION", description: "Le guide Michelin est-il un objectif pour toi ?", type: "VALEURS" },
            { id: "MGRP_59", category: "RH", title: "RH", description: "Tu sais recruter sur TikTok ou Instagram ?", type: "INVENTIF" },
            { id: "MGRP_60", category: "SANG-FROID", title: "SANG-FROID", description: "Tu sépares toi-même une bagarre ou tu attends la police ?", type: "SJT" },
            { id: "MGRP_61", category: "ADMINISTRATION", title: "ADMINISTRATION", description: "Tu déclares chaque minute supplémentaire travaillée ?", type: "PIEGE" },
            { id: "MGRP_62", category: "FIDÉLITÉ", title: "FIDÉLITÉ", description: "Tu suivrais ton Directeur s'il ouvrait un autre resto ?", type: "VALEURS" },
            { id: "MGRP_63", category: "TECHNIQUE", title: "TECHNIQUE", description: "Tu sais dresser une assiette aussi bien que le Chef de partie ?", type: "STANDARD" },
            { id: "MGRP_64", category: "MARKETING", title: "MARKETING", description: "Tu sais transformer un avis 1 étoile en futur client fidèle ?", type: "INVENTIF" },
            { id: "MGRP_65", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais quand un employé consomme de la drogue hors service ?", type: "PIEGE" },
            { id: "MGRP_66", category: "STRATÉGIE", title: "STRATÉGIE", description: "Tu préfères une brasserie à 400 couverts ou un gastro à 20 ?", type: "VALEURS" },
            { id: "MGRP_67", category: "MAINTENANCE", title: "MAINTENANCE", description: "Tu sais faire un inventaire de 500 bouteilles en 1 heure ?", type: "STANDARD" },
            { id: "MGRP_68", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Tu baisserais ton salaire pour ne pas licencier un plongeur ?", type: "DILEMME" },
            { id: "MGRP_69", category: "RH", title: "RH", description: "Tu sais mener un entretien de recadrage sans crier ?", type: "STANDARD" },
            { id: "MGRP_70", category: "PROFIT", title: "PROFIT", description: "Tu connais ta marge sur le café à 10 centimes près ?", type: "STANDARD" },
            { id: "MGRP_71", category: "IMAGE", title: "IMAGE", description: "Tu acceptes qu'un serveur ait des tatouages visibles sur le visage ?", type: "VALEURS" },
            { id: "MGRP_72", category: "STRESS", title: "STRESS", description: "Tu peux dormir 4h par nuit pendant 1 mois de saison ?", type: "PIEGE" },
            { id: "MGRP_73", category: "RH", title: "RH", description: "Tu sais motiver un employé qui n'a plus envie ?", type: "INVENTIF" },
            { id: "MGRP_74", category: "TECHNIQUE", title: "TECHNIQUE", description: "Tu maîtrises le droit du travail sur le bout des doigts ?", type: "STANDARD" },
            { id: "MGRP_75", category: "PSYCHOLOGIE", title: "PSYCHOLOGIE", description: "Tu sais quand ton Adjoint te ment pour protéger un serveur ?", type: "SJT" },
            { id: "MGRP_76", category: "VENTE", title: "VENTE", description: "Tu sais vendre une privatisation à 10 000€ au téléphone ?", type: "INVENTIF" },
            { id: "MGRP_77", category: "ORGANISATION", title: "ORGANISATION", description: "Tes fiches techniques sont-elles à jour ce matin ?", type: "STANDARD" },
            { id: "MGRP_78", category: "VALEURS", title: "VALEURS", description: "L'argent est-il la seule raison de ton succès ?", type: "PIEGE" },
            { id: "MGRP_79", category: "ÉQUIPE", title: "ÉQUIPE", description: "Tu organises des 'staff drinks' ou tu préfères la distance ?", type: "VALEURS" },
            { id: "MGRP_80", category: "STABILITÉ", title: "STABILITÉ", description: "Ton équipe t'a-t-elle déjà vu pleurer ?", type: "PIEGE" },
            { id: "MGRP_81", category: "SÉCURITÉ", title: "SÉCURITÉ", description: "Tu vérifies les poubelles pour voir ce qui est volé ?", type: "SJT" },
            { id: "MGRP_82", category: "RENTABILITÉ", title: "RENTABILITÉ", description: "Tu sais calculer ton seuil de rentabilité quotidien ?", type: "STANDARD" },
            { id: "MGRP_83", category: "RH", title: "RH", description: "Tu sais faire un licenciement pour faute grave en solo ?", type: "SJT" },
            { id: "MGRP_84", category: "VISION", title: "VISION", description: "Où sera ce restaurant dans 5 ans grâce à toi ?", type: "VALEURS" },
            { id: "MGRP_85", category: "AMBITION", title: "AMBITION", description: "Tu penses mériter plus que ton salaire actuel ?", type: "VALEURS" },
            { id: "MGRP_86", category: "STRESS", title: "STRESS", description: "Tu ris quand tout s'effondre autour de toi ?", type: "PSYCHOLOGIQUE" },
            { id: "MGRP_87", category: "HONNÊTETÉ", title: "HONNÊTETÉ", description: "Tu as déjà falsifié une date de péremption ?", type: "PIEGE" },
            { id: "MGRP_88", category: "LOYAUTÉ", title: "LOYAUTÉ", description: "Le patron a tort. Tu lui dis devant tout le monde ?", type: "DILEMME" },
            { id: "MGRP_89", category: "INVENTIF", title: "INVENTIF", description: "Tu sais créer une promo qui ramène 50 personnes le lundi ?", type: "INVENTIF" },
            { id: "MGRP_90", category: "MAINTENANCE", title: "MAINTENANCE", description: "Tu sais déboucher les canalisations toi-même ?", type: "STANDARD" },
            { id: "MGRP_91", category: "RH", title: "RH", description: "Tu connais les rêves de tes employés ?", type: "VALEURS" },
            { id: "MGRP_92", category: "FINANCE", title: "FINANCE", description: "Tu sais expliquer un bilan à un apprenti ?", type: "INVENTIF" },
            { id: "MGRP_93", category: "STABILITÉ", title: "STABILITÉ", description: "Tu es prêt à tout sacrifier pour ce job ?", type: "PIEGE" },
            { id: "MGRP_94", category: "IMAGE", title: "IMAGE", description: "Tu es l'âme de cet endroit ?", type: "VALEURS" },
            { id: "MGRP_95", category: "SÉCURITÉ", title: "SÉCURITÉ", description: "Tu sais évacuer 100 personnes en 2 minutes ?", type: "STANDARD" },
            { id: "MGRP_96", category: "RH", title: "RH", description: "Tu sais déceler un burn-out en 1 regard ?", type: "SJT" },
            { id: "MGRP_97", category: "VENTE", title: "VENTE", description: "Tu sais vendre ce resto à un investisseur ?", type: "INVENTIF" },
            { id: "MGRP_98", category: "VALEURS", title: "VALEURS", description: "La solitude du Manager te pèse-t-elle ?", type: "PSYCHOLOGIQUE" },
            { id: "MGRP_99", category: "STRESS", title: "STRESS", description: "Tu aimes le chaos du service ?", type: "VALEURS" },
            { id: "MGRP_100", category: "FINAL", title: "FINAL", description: "Es-tu un Manager ou un futur propriétaire ?", type: "VALEURS" }
        ]
    }
];

const DIRECTEUR_DATA = [
    {
        section: "Diagnostic Leadership",
        id: "PHASE1",
        items: [
            {
                id: "DIR_1",
                category: "TOXICITÉ",
                title: "TOXICITÉ : Le Performer Destructeur",
                description: "Un manager fait +15% de CA, mais humilie ses équipes en privé.",
                type: "DILEMME",
                options: [
                    { label: "Je ferme les yeux. On ne touche pas à celui qui ramène l'argent.", value: "C", profile: "TYRAN" },
                    { label: "Je le vire tout de suite. Le respect humain passe avant l'argent.", value: "A", profile: "NAIF" },
                    { label: "Je le convoque : il garde ses primes sur le chiffre, mais je lui retire le management humain s'il ne change pas.", value: "B", profile: "RADAR" },
                    { label: "Je demande aux RH de lui payer une formation sur la bienveillance.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_2",
                category: "STRATÉGIE",
                title: "STRATÉGIE : La Rumeur Concurrentielle",
                description: "Un concurrent vous prend des parts de marché. Rumeur sur son hygiène.",
                type: "SJT",
                options: [
                    { label: "Je diffuse la rumeur discrètement pour le couler.", value: "A", profile: "TYRAN" },
                    { label: "Je l'ignore et je me concentre sur mon travail.", value: "B", profile: "NAIF" },
                    { label: "Je fais un signalement anonyme aux services d'hygiène.", value: "C", profile: "BUREAUCRATE" },
                    { label: "J'envoie des 'clients mystères' et je contre-attaque sur le service.", value: "D", profile: "RADAR" }
                ]
            },
            {
                id: "DIR_3",
                category: "MICROMANAGEMENT",
                title: "MICROMANAGEMENT : La Surveillance",
                description: "Vos adjoints passent du temps sur leur téléphone, mais le service est impeccable.",
                type: "PIEGE",
                options: [
                    { label: "J'installe des caméras pour les piéger.", value: "B", profile: "TYRAN" },
                    { label: "Je laisse faire, tant que le travail est fait, je m'en fous.", value: "D", profile: "NAIF" },
                    { label: "Je juge aux résultats (KPI). S'ils font le chiffre, je ne flique pas l'écran.", value: "A", profile: "RADAR" },
                    { label: "Je rappelle le règlement intérieur : 'Téléphone interdit'.", value: "C", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_4",
                category: "ÉTHIQUE",
                title: "ÉTHIQUE : L'Optimisation Fiscale",
                description: "Optimisation fiscale : montage 'limite' mais légal pour économiser 15%.",
                type: "DILEMME",
                options: [
                    { label: "Je fraude massivement pour survivre.", value: "C", profile: "TYRAN" },
                    { label: "Je refuse. Je veux payer plein pot pour avoir la conscience tranquille.", value: "A", profile: "NAIF" },
                    { label: "Je demande une analyse de risque. Si c'est sans risque pénal, je valide.", value: "B", profile: "RADAR" },
                    { label: "Je demande une validation écrite des impôts avant de bouger.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_5",
                category: "CONFLIT",
                title: "CONFLIT : La Guerre des Chefs",
                description: "Deux maîtres d'hôtel se détestent et sont en compétition.",
                type: "SJT",
                options: [
                    { label: "Je monte l'un contre l'autre pour qu'ils se tuent au travail.", value: "C", profile: "TYRAN" },
                    { label: "Je les force à devenir amis pour l'ambiance.", value: "A", profile: "NAIF" },
                    { label: "Je transforme leur haine en 'Challenge Sportif' avec des zones séparées.", value: "D", profile: "RADAR" },
                    { label: "Je consulte la fiche de poste pour voir qui a tort.", value: "B", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_6",
                category: "CRISE",
                title: "CRISE : Intoxication",
                description: "Intoxication alimentaire par la faute d'un commis. La presse appelle.",
                type: "SJT",
                options: [
                    { label: "Je livre le nom du commis à la presse pour me dédouaner.", value: "B", profile: "TYRAN" },
                    { label: "Je refuse de répondre et je fais le mort.", value: "C", profile: "NAIF" },
                    { label: "J'assume publiquement. En interne je sanctionne, mais dehors je protège.", value: "A", profile: "RADAR" },
                    { label: "Je lis un communiqué vide préparé par un avocat.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_7",
                category: "RH",
                title: "RH : Le Gentil Incompétent",
                description: "Un employé gentil et volontaire n'a pas le niveau. L'équipe compense.",
                type: "VALEURS",
                options: [
                    { label: "Je le harcèle pour qu'il parte de lui-même.", value: "C", profile: "TYRAN" },
                    { label: "Je le garde par pitié.", value: "A", profile: "NAIF" },
                    { label: "Je suis honnête : 'Ce poste n'est pas pour toi'. Négociation départ.", value: "B", profile: "RADAR" },
                    { label: "Je ne renouvelle pas sa période d'essai sans explication.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_8",
                category: "BURNOUT",
                title: "BURNOUT : L'Urgence",
                description: "Burn-out d'un chef de rang en plein service.",
                type: "SJT",
                options: [
                    { label: "C'est un faible. Dehors.", value: "A", profile: "TYRAN" },
                    { label: "Je m'en veux terriblement et je lui donne 3 mois de congés.", value: "D", profile: "NAIF" },
                    { label: "Je gère l'urgence, puis j'audite mon organisation pour corriger.", value: "C", profile: "RADAR" },
                    { label: "Je remplis le formulaire d'accident du travail.", value: "B", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_9",
                category: "FINANCE",
                title: "FINANCE : Prime vs Heures",
                description: "Prime de Directeur vs Heures des extras en fin d'année difficile.",
                type: "DILEMME",
                options: [
                    { label: "Je coupe les heures. Ma prime est contractuelle.", value: "A", profile: "TYRAN" },
                    { label: "Je renonce à ma prime pour payer tout le monde.", value: "B", profile: "NAIF" },
                    { label: "Transparence : 'Si +10% ce mois, tout le monde payé. Sinon, tous perdants'.", value: "D", profile: "RADAR" },
                    { label: "J'applique le budget prévisionnel à la lettre.", value: "C", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_10",
                category: "ACHATS",
                title: "ACHATS : Fournitures",
                description: "Gestion des achats de fournitures par les managers.",
                type: "STANDARD",
                options: [
                    { label: "Je valide chaque achat moi-même.", value: "A", profile: "TYRAN" },
                    { label: "Je laisse faire, l'erreur est humaine.", value: "C", profile: "NAIF" },
                    { label: "Budget bloqué. Ils gèrent leur enveloppe en autonomie.", value: "B", profile: "RADAR" },
                    { label: "Formulaire de demande d'achat en 3 exemplaires obligatoire.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_11",
                category: "COMMUNICATION",
                title: "COMMUNICATION : Secret Stratégique",
                description: "Faut-il partager une décision stratégique confidentielle avec les managers ?",
                type: "SJT",
                options: [
                    { label: "Je ne dis rien. Le savoir c'est le pouvoir.", value: "B", profile: "TYRAN" },
                    { label: "Je dis tout par transparence totale.", value: "C", profile: "NAIF" },
                    { label: "Je donne l'info opérationnelle nécessaire, je garde la politique.", value: "A", profile: "RADAR" },
                    { label: "J'attends le mémo officiel du siège.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_12",
                category: "INFLATION",
                title: "INFLATION : Marges",
                description: "Inflation : les marges fondent.",
                type: "SJT",
                options: [
                    { label: "J'achète du bas de gamme et je cache la provenance.", value: "A", profile: "TYRAN" },
                    { label: "Je ne change rien et je perds de l'argent.", value: "B", profile: "NAIF" },
                    { label: "Je réduis la carte et travaille des produits bruts rentables.", value: "C", profile: "RADAR" },
                    { label: "J'augmente tous les prix de 10% bêtement.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_13",
                category: "RECRUTEMENT",
                title: "RECRUTEMENT : Le Doute",
                description: "Doute sur un candidat parfait.",
                type: "PIEGE",
                options: [
                    { label: "Je fouille sa vie privée sur Facebook.", value: "B", profile: "TYRAN" },
                    { label: "Je l'embauche au feeling.", value: "A", profile: "NAIF" },
                    { label: "J'appelle ses anciens employeurs pour vérifier la fiabilité pro.", value: "D", profile: "RADAR" },
                    { label: "Je demande un extrait de casier judiciaire.", value: "C", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_14",
                category: "RELATION",
                title: "RELATION : Crainte ou Amour",
                description: "Relation avec les employés : Crainte ou Amour ?",
                type: "VALEURS",
                options: [
                    { label: "Je veux qu'ils tremblent.", value: "C", profile: "TYRAN" },
                    { label: "Je veux qu'ils m'aiment comme un père.", value: "A", profile: "NAIF" },
                    { label: "Je veux qu'ils me respectent pour ma justesse. Ni pote, ni bourreau.", value: "B", profile: "RADAR" },
                    { label: "Relation strictement contractuelle.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_15",
                category: "ESPIONNAGE",
                title: "ESPIONNAGE : Vestiaires",
                description: "Savoir ce qui se dit dans les vestiaires.",
                type: "SJT",
                options: [
                    { label: "Je paie un indic.", value: "B", profile: "TYRAN" },
                    { label: "Je ne veux pas savoir.", value: "C", profile: "NAIF" },
                    { label: "Je déjeune avec les leaders d'opinion pour prendre la température.", value: "A", profile: "RADAR" },
                    { label: "Boîte à idées anonyme.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_16",
                category: "STRATÉGIE",
                title: "STRATÉGIE : Plan Social",
                description: "Plan social : 5 licenciements nécessaires.",
                type: "DILEMME",
                options: [
                    { label: "Je vire les 5 plus gros salaires.", value: "A", profile: "BUREAUCRATE" },
                    { label: "Je refuse de licencier et la boîte coule.", value: "B", profile: "NAIF" },
                    { label: "Je garde les piliers, je vire les suiveurs.", value: "C", profile: "RADAR" },
                    { label: "Je licencie les derniers arrivés.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_17",
                category: "PROTECTION",
                title: "PROTECTION : Harcèlement",
                description: "Un VIP touche les fesses d'une serveuse.",
                type: "PIEGE",
                options: [
                    { label: "Fais un effort, c'est un gros client.", value: "A", profile: "TYRAN" },
                    { label: "Je frappe le client.", value: "C", profile: "TYRAN" },
                    { label: "Je sors le client manu militari. Intégrité non négociable.", value: "D", profile: "RADAR" },
                    { label: "Je rappelle le règlement au client.", value: "B", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_18",
                category: "MANAGEMENT",
                title: "MANAGEMENT : Planning",
                description: "Un manager fait mal ses plannings.",
                type: "SJT",
                options: [
                    { label: "Je le fais à sa place.", value: "A", profile: "TYRAN" },
                    { label: "Je laisse le planning pourri pour qu'il apprenne.", value: "C", profile: "NAIF" },
                    { label: "Je forme puis je sévis si récidive.", value: "B", profile: "RADAR" },
                    { label: "Je lui envoie le manuel de procédure.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_19",
                category: "SYNDICAT",
                title: "SYNDICAT : Leader Négatif",
                description: "Un 'Leader Négatif' monte la tête de l'équipe.",
                type: "SJT",
                options: [
                    { label: "Je le mute au placard.", value: "B", profile: "TYRAN" },
                    { label: "Je laisse faire par peur.", value: "C", profile: "NAIF" },
                    { label: "Je le confronte. S'il est toxique, dossier pour le sortir.", value: "A", profile: "RADAR" },
                    { label: "Je contacte l'inspection du travail.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_20",
                category: "FINANCE",
                title: "FINANCE : Cash",
                description: "Pas assez de cash pour les salaires.",
                type: "DILEMME",
                options: [
                    { label: "Je paie les fournisseurs et diffère les salaires.", value: "A", profile: "TYRAN" },
                    { label: "Je paie en retard sans prévenir.", value: "B", profile: "NAIF" },
                    { label: "Salaires à 100% (priorité). Négociation fournisseurs.", value: "C", profile: "RADAR" },
                    { label: "Chèque en bois.", value: "D", profile: "TYRAN" }
                ]
            },
            {
                id: "DIR_21",
                category: "RH",
                title: "RH : Stagiaires",
                description: "Gestion des stagiaires.",
                type: "VALEURS",
                options: [
                    { label: "Main d'œuvre gratuite.", value: "A", profile: "TYRAN" },
                    { label: "Je les laisse regarder.", value: "B", profile: "NAIF" },
                    { label: "Je les mets au feu. Sueur contre Savoir.", value: "D", profile: "RADAR" },
                    { label: "Lecture du manuel d'hygiène.", value: "C", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_22",
                category: "CONCURRENCE",
                title: "CONCURRENCE : Départ",
                description: "Le sous-chef part chez le concurrent.",
                type: "SJT",
                options: [
                    { label: "Je le dénigre.", value: "A", profile: "TYRAN" },
                    { label: "Bon vent.", value: "C", profile: "NAIF" },
                    { label: "Exit Interview serré pour comprendre et corriger.", value: "B", profile: "RADAR" },
                    { label: "Je vérifie sa clause de non-concurrence.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_23",
                category: "PRODUIT",
                title: "PRODUIT : Fait Maison",
                description: "'Fait Maison' avec des fonds de sauce industriels ?",
                type: "DILEMME",
                options: [
                    { label: "Oui, personne ne verra.", value: "B", profile: "TYRAN" },
                    { label: "Je fais tout moi-même et je perds de l'argent.", value: "C", profile: "NAIF" },
                    { label: "Non. Je vends le frais, je tais le reste. Pas de mensonge.", value: "A", profile: "RADAR" },
                    { label: "Je vérifie le décret légal.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_24",
                category: "RÈGLES",
                title: "RÈGLES : Cigarette",
                description: "Pauses cigarette excessives.",
                type: "STANDARD",
                options: [
                    { label: "Interdiction totale.", value: "A", profile: "TYRAN" },
                    { label: "Je laisse faire.", value: "B", profile: "NAIF" },
                    { label: "Tour de rôle strict selon flux. Récompense, pas droit.", value: "C", profile: "RADAR" },
                    { label: "Je décompte du salaire.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_25",
                category: "CONFLIT",
                title: "CONFLIT : Services",
                description: "Conflit entre deux chefs de service.",
                type: "SJT",
                options: [
                    { label: "Je hurle.", value: "C", profile: "TYRAN" },
                    { label: "Débrouillez-vous.", value: "B", profile: "NAIF" },
                    { label: "Je les convoque ensemble : 'Réglez ça devant moi'.", value: "D", profile: "RADAR" },
                    { label: "Je donne raison au plus ancien.", value: "A", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_26",
                category: "RECRUTEMENT",
                title: "RECRUTEMENT : Casier",
                description: "Candidat avec casier judiciaire ou trou dans le CV.",
                type: "PIEGE",
                options: [
                    { label: "Je refuse, trop risqué.", value: "D", profile: "TYRAN" },
                    { label: "Je le prends par charité.", value: "C", profile: "NAIF" },
                    { label: "Je teste sa rage de vaincre. S'il a faim, je cadre.", value: "B", profile: "RADAR" },
                    { label: "Poubelle.", value: "A", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_27",
                category: "SALAIRE",
                title: "SALAIRE : Augmentation",
                description: "Le Chef demande une augmentation impossible.",
                type: "SJT",
                options: [
                    { label: "Personne n'est irremplaçable.", value: "B", profile: "TYRAN" },
                    { label: "Je cède et je mets la boîte en danger.", value: "C", profile: "NAIF" },
                    { label: "Si départ plus coûteux, je trouve solution (primes/parts).", value: "A", profile: "RADAR" },
                    { label: "Je montre la grille des salaires.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_28",
                category: "MARKETING",
                title: "MARKETING : St Valentin",
                description: "Saint-Valentin (Complet).",
                type: "INVENTIF",
                options: [
                    { label: "Je double les prix.", value: "A", profile: "TYRAN" },
                    { label: "Prix normaux.", value: "B", profile: "NAIF" },
                    { label: "Menu Spécial plus cher avec valeur ajoutée.", value: "C", profile: "RADAR" },
                    { label: "Le marketing décide.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_29",
                category: "E-RÉPUTATION",
                title: "E-RÉPUTATION : Avis 1 étoile",
                description: "Faux avis 1 étoile sur Google.",
                type: "SJT",
                options: [
                    { label: "J'insulte.", value: "B", profile: "TYRAN" },
                    { label: "Je ne réponds pas.", value: "C", profile: "NAIF" },
                    { label: "Je réponds froidement pour les futurs clients.", value: "D", profile: "RADAR" },
                    { label: "Je paie pour supprimer.", value: "A", profile: "TYRAN" }
                ]
            },
            {
                id: "DIR_30",
                category: "LÉGAL",
                title: "LÉGAL : Inspection",
                description: "Inspection du travail surprise.",
                type: "PIEGE",
                options: [
                    { label: "Je refuse l'accès.", value: "C", profile: "TYRAN" },
                    { label: "Je panique.", value: "A", profile: "TYRAN" },
                    { label: "Café et sourire. Transparence totale.", value: "B", profile: "RADAR" },
                    { label: "Je l'envoie aux RH.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_31",
                category: "BUDGET",
                title: "BUDGET : Formation",
                description: "Couper le budget formation ?",
                type: "DILEMME",
                options: [
                    { label: "J'arrête tout.", value: "B", profile: "TYRAN" },
                    { label: "Je continue tout.", value: "C", profile: "NAIF" },
                    { label: "Je garde le mentorat interne, je coupe l'externe.", value: "A", profile: "RADAR" },
                    { label: "Minimum légal.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_32",
                category: "PROCESS",
                title: "PROCESS : Test",
                description: "Tester un nouveau process.",
                type: "SJT",
                options: [
                    { label: "Vendredi soir (Crash test).", value: "A", profile: "NAIF" },
                    { label: "Jamais.", value: "B", profile: "NAIF" },
                    { label: "Mardi midi (Calme).", value: "C", profile: "RADAR" },
                    { label: "Après validation consultant.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_33",
                category: "RH",
                title: "RH : Piston",
                description: "Piston : le fils du maire.",
                type: "PIEGE",
                options: [
                    { label: "Emploi fictif.", value: "A", profile: "TYRAN" },
                    { label: "Refus par principe.", value: "B", profile: "NAIF" },
                    { label: "Je l'embauche mais je le traite normalement.", value: "D", profile: "RADAR" },
                    { label: "CV obligatoire.", value: "C", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_34",
                category: "FINANCE",
                title: "FINANCE : Trou Caisse",
                description: "Trou de 20€ en caisse tous les soirs.",
                type: "SJT",
                options: [
                    { label: "J'accuse tout le monde.", value: "A", profile: "TYRAN" },
                    { label: "Pertes et profits.", value: "C", profile: "NAIF" },
                    { label: "Comptage contradictoire fin de service.", value: "B", profile: "RADAR" },
                    { label: "Retenue sur salaire.", value: "D", profile: "TYRAN" }
                ]
            },
            {
                id: "DIR_35",
                category: "MARKETING",
                title: "MARKETING : Influenceuse",
                description: "Influenceuse demande repas gratuit.",
                type: "SJT",
                options: [
                    { label: "Non, pas de charité.", value: "B", profile: "TYRAN" },
                    { label: "Oui tout de suite.", value: "C", profile: "NAIF" },
                    { label: "Oui SI c'est ma clientèle et SI j'impose conditions.", value: "A", profile: "RADAR" },
                    { label: "Formulaire partenariat.", value: "D", profile: "BUREAUCRATE" }
                ]
            }
        ]
    }
];


const DIRECTEUR_PHASE2 = [
    {
        section: "Opérations & Stratégie",
        id: "PHASE2",
        items: [
            {
                id: "DIR_36",
                category: "FINANCE",
                title: "FINANCE : Le Coût Matière",
                description: "Le coût matière (Food Cost) explose (+4%). Le Chef accuse l'inflation.",
                type: "SJT",
                options: [
                    { label: "J'accepte son excuse, c'est la crise.", value: "A", profile: "NAIF" },
                    { label: "Je hurle et menace de le virer.", value: "B", profile: "TYRAN" },
                    { label: "Je plonge dans les poubelles et factures avec lui pour trouver la cause.", value: "C", profile: "RADAR" },
                    { label: "Je demande un rapport écrit détaillé pour le siège.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_37",
                category: "TOXICITÉ",
                title: "TOXICITÉ : La Cohésion",
                description: "Vos serveurs sortent boire des verres ensemble tous les soirs. Ils sont soudés mais fatigués.",
                type: "SJT",
                options: [
                    { label: "Je surveille la perf. Si le job est fait, je me tais.", value: "A", profile: "RADAR" },
                    { label: "Rappel charte bonne conduite et repos légal par RH.", value: "B", profile: "BUREAUCRATE" },
                    { label: "J'interdis formellement les sorties. Je veux des soldats frais.", value: "C", profile: "TYRAN" },
                    { label: "C'est génial ! L'ambiance avant tout.", value: "D", profile: "NAIF" }
                ]
            },
            {
                id: "DIR_38",
                category: "VISION",
                title: "VISION : QR Codes",
                description: "On vous propose des QR Codes pour que les clients commandent seuls.",
                type: "VALEURS",
                options: [
                    { label: "J'installe tout. Moins de masse salariale = profit.", value: "A", profile: "TYRAN" },
                    { label: "Jamais. Je refuse le progrès.", value: "B", profile: "NAIF" },
                    { label: "J'attends la validation officielle du groupe.", value: "C", profile: "BUREAUCRATE" },
                    { label: "Test sur le déjeuner (vitesse), humain le soir (expérience).", value: "D", profile: "RADAR" }
                ]
            },
            {
                id: "DIR_39",
                category: "STRATÉGIE ÉCO",
                title: "STRATÉGIE : Le Mercenaire",
                description: "Le Sous-Chef du concurrent d'en face veut venir travailler chez vous.",
                type: "DILEMME",
                options: [
                    { label: "Je le prends pour couler le concurrent.", value: "A", profile: "TYRAN" },
                    { label: "Je l'auditionne durement : talent ou fuite ?", value: "B", profile: "RADAR" },
                    { label: "Refus par 'code d'honneur' entre patrons.", value: "C", profile: "NAIF" },
                    { label: "Demande CV et lettre motivation pour pile d'attente.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_40",
                category: "IMAGE",
                title: "IMAGE : Caritatif",
                description: "Une association locale demande de sponsoriser un événement caritatif.",
                type: "SJT",
                options: [
                    { label: "Remplir dossier demande subvention page 14.", value: "A", profile: "BUREAUCRATE" },
                    { label: "Je refuse, pas de cash direct.", value: "B", profile: "TYRAN" },
                    { label: "Échange marchandise (buffet vs visibilité).", value: "C", profile: "RADAR" },
                    { label: "Je donne de l'argent pour être gentil.", value: "D", profile: "NAIF" }
                ]
            },
            {
                id: "DIR_41",
                category: "MICROMANAGEMENT",
                title: "MICRO : Vacances",
                description: "Vous partez en vacances 3 jours. Comment gérez-vous ?",
                type: "PIEGE",
                options: [
                    { label: "Je coupe mon téléphone.", value: "A", profile: "NAIF" },
                    { label: "Check rapports 1x/jour. Je surveille de loin.", value: "B", profile: "RADAR" },
                    { label: "J'appelle 10 fois par jour pour hurler.", value: "C", profile: "TYRAN" },
                    { label: "Je nomme un responsable par note de service.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_42",
                category: "TOXICITÉ",
                title: "TOXICITÉ : Promotion",
                description: "Promouvoir un 'Génie Rebelle' ou un 'Soldat Loyal' ?",
                type: "VALEURS",
                options: [
                    { label: "Le Génie. Performance avant tout.", value: "A", profile: "TYRAN" },
                    { label: "Le Génie, pour lui faire plaisir.", value: "B", profile: "NAIF" },
                    { label: "Celui avec le plus d'ancienneté.", value: "C", profile: "BUREAUCRATE" },
                    { label: "Le Soldat. Structure pour diriger, Génie sur le terrain.", value: "D", profile: "RADAR" }
                ]
            },
            {
                id: "DIR_43",
                category: "FINANCE",
                title: "FINANCE : Budget Marketing",
                description: "Il reste 1000€ de budget marketing à dépenser.",
                type: "SJT",
                options: [
                    { label: "Soirée privée pour fidéliser les 50 meilleurs clients.", value: "A", profile: "RADAR" },
                    { label: "Rien. Je garde pour le net.", value: "B", profile: "TYRAN" },
                    { label: "Pubs Facebook au hasard.", value: "C", profile: "NAIF" },
                    { label: "Je laisse le service marketing décider.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_44",
                category: "ÉTHIQUE ÉCO",
                title: "MARKETING : Emailing",
                description: "Vous avez une base de 5000 emails clients.",
                type: "PIEGE",
                options: [
                    { label: "Je bombarde de promos chaque semaine.", value: "A", profile: "TYRAN" },
                    { label: "1 mail/mois si vraie valeur ajoutée.", value: "B", profile: "RADAR" },
                    { label: "Calendrier éditorial standard sans réfléchir.", value: "C", profile: "BUREAUCRATE" },
                    { label: "Jamais, peur de déranger.", value: "D", profile: "NAIF" }
                ]
            },
            {
                id: "DIR_45",
                category: "POUVOIR",
                title: "MANAGEMENT : Service Parfait",
                description: "Le service a été parfait ce soir.",
                type: "PSYCHOLOGIQUE",
                options: [
                    { label: "Tournée générale, vous êtes merveilleux.", value: "A", profile: "NAIF" },
                    { label: "Note 'RAS' sur le cahier.", value: "B", profile: "BUREAUCRATE" },
                    { label: "Rien. Ils sont payés pour ça.", value: "C", profile: "TYRAN" },
                    { label: "Débrief précis valorisant l'effort technique.", value: "D", profile: "RADAR" }
                ]
            },
            {
                id: "DIR_46",
                category: "STRATÉGIE ÉCO",
                title: "STRATÉGIE : Inflation",
                description: "Les tomates locales ont pris +20%.",
                type: "SJT",
                options: [
                    { label: "Je garde la locale mais j'ajuste la portion/recette.", value: "A", profile: "RADAR" },
                    { label: "Tomate 1er prix, le client est bête.", value: "B", profile: "TYRAN" },
                    { label: "Je garde et je perds de la marge.", value: "C", profile: "NAIF" },
                    { label: "Hausse prix automatique via formule marge.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_47",
                category: "MICROMANAGEMENT",
                title: "AMBIANCE : Oubli",
                description: "L'ambiance retombe vers 23h car le staff oublie.",
                type: "SJT",
                options: [
                    { label: "Pas grave, fin de service.", value: "A", profile: "NAIF" },
                    { label: "Je hurle à chaque oubli.", value: "B", profile: "TYRAN" },
                    { label: "Procédure auto (playlist + variateur).", value: "C", profile: "RADAR" },
                    { label: "Note de service dans le vestiaire.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_48",
                category: "TOXICITÉ",
                title: "RH : Vie Privée",
                description: "Candidat avec contrainte logistique cachée (enfants/transport).",
                type: "DILEMME",
                options: [
                    { label: "'Avez-vous des enfants ?' (Illégal)", value: "A", profile: "TYRAN" },
                    { label: "'Le poste finit à 2h. Est-ce gérable durablement ?'", value: "B", profile: "RADAR" },
                    { label: "Je ne dis rien, je risque.", value: "C", profile: "NAIF" },
                    { label: "Je coche case 'Disponibilité' et continue.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_49",
                category: "VISION",
                title: "VISION : Expansion",
                description: "Ça marche fort. Faut-il ouvrir un 2ème resto ?",
                type: "VALEURS",
                options: [
                    { label: "Oui tout de suite, cash.", value: "A", profile: "TYRAN" },
                    { label: "Non, peur de grandir.", value: "B", profile: "NAIF" },
                    { label: "Seulement si j'ai un Clone de confiance prêt.", value: "C", profile: "RADAR" },
                    { label: "Étude de marché théorique sur 6 mois.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_50",
                category: "RADAR TOXIQUE",
                title: "RH : Le Chef Star",
                description: "Un chef très connu postule. Il a un ego énorme.",
                type: "INVENTIF",
                options: [
                    { label: "Je le prends direct pour le buzz.", value: "A", profile: "NAIF" },
                    { label: "Essai sur tâche ingrate. S'il accepte, je prends.", value: "B", profile: "RADAR" },
                    { label: "Vérif diplômes vs fiche de poste.", value: "C", profile: "BUREAUCRATE" },
                    { label: "Refus, pas de diva.", value: "D", profile: "TYRAN" }
                ]
            },
            {
                id: "DIR_51",
                category: "FINANCE",
                title: "FINANCE : Fournisseur",
                description: "Impossible de payer le fournisseur de vin à temps.",
                type: "DILEMME",
                options: [
                    { label: "Recommandé pour contester et gagner du temps.", value: "A", profile: "BUREAUCRATE" },
                    { label: "Je fais le mort.", value: "B", profile: "TYRAN" },
                    { label: "Je change de fournisseur.", value: "C", profile: "NAIF" },
                    { label: "Appel transparence : moitié maintenant, reste le 15.", value: "D", profile: "RADAR" }
                ]
            },
            {
                id: "DIR_52",
                category: "STRATÉGIE ÉCO",
                title: "RH : Primes",
                description: "Comment fixer les primes des managers ?",
                type: "SJT",
                options: [
                    { label: "Mix : CA + Coûts + Satisfaction client.", value: "A", profile: "RADAR" },
                    { label: "CA uniquement (Vente forcée).", value: "B", profile: "TYRAN" },
                    { label: "Grille ancienneté conventionnelle.", value: "C", profile: "BUREAUCRATE" },
                    { label: "À la tête du client.", value: "D", profile: "NAIF" }
                ]
            },
            {
                id: "DIR_53",
                category: "IMAGE",
                title: "COM : Famille",
                description: "Montrer votre famille sur les réseaux du resto ?",
                type: "PIEGE",
                options: [
                    { label: "Oui, ça fait pleurer, ça vend.", value: "A", profile: "TYRAN" },
                    { label: "Jamais de la vie.", value: "B", profile: "NAIF" },
                    { label: "Parfois pour storytelling, mais frontière claire.", value: "C", profile: "RADAR" },
                    { label: "Charte interdit photos perso.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_54",
                category: "MICROMANAGEMENT",
                title: "RH : Réseaux Sociaux",
                description: "Serveur poste photo doigt d'honneur en tenue.",
                type: "SJT",
                options: [
                    { label: "Licenciement immédiat.", value: "A", profile: "TYRAN" },
                    { label: "Convoque : 'Tu engages l'image, supprime'.", value: "B", profile: "RADAR" },
                    { label: "Règlement intérieur, sanction alinéa 4.", value: "C", profile: "BUREAUCRATE" },
                    { label: "Je m'en fous, compte perso.", value: "D", profile: "NAIF" }
                ]
            },
            {
                id: "DIR_55",
                category: "TOXICITÉ",
                title: "CRISE : Coupure Elec",
                description: "Coupure d'électricité en plein service.",
                type: "PSYCHOLOGIQUE",
                options: [
                    { label: "Attends instructions pompiers.", value: "A", profile: "BUREAUCRATE" },
                    { label: "Évacuation et fermeture.", value: "B", profile: "NAIF" },
                    { label: "Je gueule sur EDF devant clients.", value: "C", profile: "TYRAN" },
                    { label: "Système D : Bougies, tournée, on sauve l'ambiance.", value: "D", profile: "RADAR" }
                ]
            },
            {
                id: "DIR_56",
                category: "ÉTHIQUE ÉCO",
                title: "ACHATS : Sponsor",
                description: "Marque alcool propose 5000€ pour exclu.",
                type: "VALEURS",
                options: [
                    { label: "Je goûte. Qualité avant chèque.", value: "A", profile: "RADAR" },
                    { label: "Je prends l'argent, on s'en fout du goût.", value: "B", profile: "TYRAN" },
                    { label: "Refus par principe d'indépendance.", value: "C", profile: "NAIF" },
                    { label: "Contrat au service juridique.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_57",
                category: "VISION",
                title: "MATOS : Café",
                description: "Machine Auto (rapide) ou Manuelle (meilleure) ?",
                type: "Dilemme",
                options: [
                    { label: "Référencée par le groupe.", value: "A", profile: "BUREAUCRATE" },
                    { label: "Selon concept. Adapté promesse client.", value: "B", profile: "RADAR" },
                    { label: "Automatique. Débit max.", value: "C", profile: "TYRAN" },
                    { label: "Manuelle. Puristes.", value: "D", profile: "NAIF" }
                ]
            },
            {
                id: "DIR_58",
                category: "IMAGE",
                title: "OPS : No-Show",
                description: "Clients réservent et ne viennent pas.",
                type: "INVENTIF",
                options: [
                    { label: "Plus de réservations.", value: "A", profile: "TYRAN" },
                    { label: "Empreinte bancaire / SMS reconfirm.", value: "B", profile: "RADAR" },
                    { label: "Je m'énerve seul.", value: "C", profile: "NAIF" },
                    { label: "Tableau Excel des absents.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_59",
                category: "MICROMANAGEMENT",
                title: "MANAGEMENT : Erreur Public",
                description: "Manager dit une bêtise technique en briefing.",
                type: "PIEGE",
                options: [
                    { label: "Contredit devant tout le monde.", value: "A", profile: "TYRAN" },
                    { label: "Email rectificatif après.", value: "B", profile: "BUREAUCRATE" },
                    { label: "Complète subtilement, débrief privé.", value: "C", profile: "RADAR" },
                    { label: "Rien dire pour pas gêner.", value: "D", profile: "NAIF" }
                ]
            },
            {
                id: "DIR_60",
                category: "TOXICITÉ",
                title: "RH : Délation",
                description: "Employé dénonce un collègue qui vole.",
                type: "SJT",
                options: [
                    { label: "J'envoie paître, déteste rapporteurs.", value: "A", profile: "NAIF" },
                    { label: "Note info mais vérifie par moi-même.", value: "B", profile: "RADAR" },
                    { label: "Prime pour la délation.", value: "C", profile: "TYRAN" },
                    { label: "Fiche d'incident signée.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_61",
                category: "FINANCE",
                title: "FINANCE : Banquier",
                description: "Convaincre banquier pour prêt travaux.",
                type: "DILEMME",
                options: [
                    { label: "Maquille les bilans.", value: "A", profile: "TYRAN" },
                    { label: "Plan pessimiste mais maîtrisé.", value: "B", profile: "RADAR" },
                    { label: "Je supplie.", value: "C", profile: "NAIF" },
                    { label: "Documents obligatoires uniquement.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_62",
                category: "STRATÉGIE ÉCO",
                title: "COM : Faux Avis",
                description: "Concurrent poste faux avis négatifs.",
                type: "INVENTIF",
                options: [
                    { label: "Signalement plateforme, attente 3 mois.", value: "A", profile: "BUREAUCRATE" },
                    { label: "Je pleure.", value: "B", profile: "NAIF" },
                    { label: "Je fais pareil sur lui.", value: "C", profile: "TYRAN" },
                    { label: "Réponse classe exposant incohérences.", value: "D", profile: "RADAR" }
                ]
            },
            {
                id: "DIR_63",
                category: "IMAGE",
                title: "COM : Amis",
                description: "Amis viennent manger, s'attendent à gratuit.",
                type: "STANDARD",
                options: [
                    { label: "Offre apéro/dessert, ils paient le reste.", value: "A", profile: "RADAR" },
                    { label: "Plein pot, pas de pitié.", value: "B", profile: "TYRAN" },
                    { label: "Tout gratuit.", value: "C", profile: "NAIF" },
                    { label: "Réduc personnel -15%.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_64",
                category: "TOXICITÉ",
                title: "RH : Burnout",
                description: "Sous-chef épuisé et agressif.",
                type: "VALEURS",
                options: [
                    { label: "'Calme-toi ou dégage'.", value: "A", profile: "TYRAN" },
                    { label: "Offre un café.", value: "B", profile: "NAIF" },
                    { label: "2 jours repos forcé immédiat.", value: "C", profile: "RADAR" },
                    { label: "Vérif 11h repos légal.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_65",
                category: "VISION",
                title: "OPS : Tablettes",
                description: "Donner tablettes aux serveurs ?",
                type: "Dilemme",
                options: [
                    { label: "Oui, SI ça aide la vente face client.", value: "A", profile: "RADAR" },
                    { label: "Non, carnet papier.", value: "B", profile: "NAIF" },
                    { label: "Oui, pour surveiller la frappe.", value: "C", profile: "TYRAN" },
                    { label: "Oui, évite erreurs.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_66",
                category: "MICROMANAGEMENT",
                title: "OPS : Script",
                description: "Imposer phrases exactes aux serveurs ?",
                type: "STANDARD",
                options: [
                    { label: "Oui, robots parfaits.", value: "A", profile: "TYRAN" },
                    { label: "Étapes clés imposées, mots libres.", value: "B", profile: "RADAR" },
                    { label: "Non, liberté totale.", value: "C", profile: "NAIF" },
                    { label: "Manuel procédure 50 pages par cœur.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_67",
                category: "ÉTHIQUE ÉCO",
                title: "HYGIÈNE : Cafards",
                description: "Plongeur signale cafards en cuisine.",
                type: "SJT",
                options: [
                    { label: "Spray moi-même.", value: "A", profile: "NAIF" },
                    { label: "Chut, le dis à personne.", value: "B", profile: "TYRAN" },
                    { label: "Note registre hygiène.", value: "C", profile: "BUREAUCRATE" },
                    { label: "Société pro immédiate. Tolérance Zéro.", value: "D", profile: "RADAR" }
                ]
            },
            {
                id: "DIR_68",
                category: "RADAR TOXIQUE",
                title: "RH : Départ",
                description: "Manager prépare départ (attitude fuyante).",
                type: "INVENTIF",
                options: [
                    { label: "Prépare solde tout compte RH.", value: "A", profile: "BUREAUCRATE" },
                    { label: "Pourris la vie pour qu'il parte.", value: "B", profile: "TYRAN" },
                    { label: "Confrontation gentille : 'Tu veux partir ?'.", value: "C", profile: "RADAR" },
                    { label: "J'attends qu'il le dise.", value: "D", profile: "NAIF" }
                ]
            },
            {
                id: "DIR_69",
                category: "FINANCE",
                title: "INVEST : 10k€",
                description: "Vous avez 10 000€ à investir.",
                type: "VALEURS",
                options: [
                    { label: "Déco (visible client).", value: "A", profile: "NAIF" },
                    { label: "Four qui marche (outil staff).", value: "B", profile: "RADAR" },
                    { label: "Ma prime.", value: "C", profile: "TYRAN" },
                    { label: "Avis expert comptable.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_70",
                category: "IMAGE",
                title: "COM : Insta",
                description: "Booster Instagram.",
                type: "PIEGE",
                options: [
                    { label: "Staff et clients fidèles repostent.", value: "A", profile: "RADAR" },
                    { label: "Achat 10k followers.", value: "B", profile: "TYRAN" },
                    { label: "Validation Dir Com 1 semaine avant.", value: "C", profile: "BUREAUCRATE" },
                    { label: "Photos floues quand j'y pense.", value: "D", profile: "NAIF" }
                ]
            },
            {
                id: "DIR_71",
                category: "FINANCE",
                title: "FINANCE : Marge Brute",
                description: "La marge brute chute de 2 points. Le Chef accuse les portions.",
                type: "SJT",
                options: [
                    { label: "Je réduis les portions discrètement.", value: "A", profile: "TYRAN" },
                    { label: "J'augmente les prix.", value: "B", profile: "NAIF" },
                    { label: "Audit pesée assiettes et fiches techniques.", value: "C", profile: "RADAR" },
                    { label: "J'attends le mois suivant.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_72",
                category: "RH",
                title: "RH : Rupture",
                description: "Un cadre veut une rupture conventionnelle.",
                type: "DILEMME",
                options: [
                    { label: "Refus. Démission ou rien.", value: "A", profile: "TYRAN" },
                    { label: "Accord immédiat pour bons rapports.", value: "B", profile: "NAIF" },
                    { label: "Négo : ok si passation nickel et formation successeur.", value: "C", profile: "RADAR" },
                    { label: "Dossier juridique pour voir la jurisprudence.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_73",
                category: "VISION",
                title: "VISION : Franchise",
                description: "On vous propose de franchiser votre concept.",
                type: "VALEURS",
                options: [
                    { label: "Oui, argent facile.", value: "A", profile: "RADAR" },
                    { label: "Non, je perds le contrôle qualité.", value: "B", profile: "NAIF" },
                    { label: "Je vends tout et je pars.", value: "C", profile: "TYRAN" },
                    { label: "Étude de faisabilité et manuel opératoire d'abord.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_74",
                category: "TOXICITÉ",
                title: "CLIMAT : Rumeurs",
                description: "Une rumeur de liaison entre vous et une employée circule.",
                type: "SJT",
                options: [
                    { label: "Je vire l'employée pour faire taire.", value: "A", profile: "TYRAN" },
                    { label: "Démenti formel en réunion.", value: "B", profile: "BUREAUCRATE" },
                    { label: "Je laisse courir, ça assoit mon pouvoir.", value: "C", profile: "RADAR" },
                    { label: "Je suis dévasté et je me justifie.", value: "D", profile: "NAIF" }
                ]
            },
            {
                id: "DIR_75",
                category: "IMAGE",
                title: "COM : Presse",
                description: "Un journal local critique votre service.",
                type: "SJT",
                options: [
                    { label: "Droit de réponse agressif.", value: "A", profile: "TYRAN" },
                    { label: "Invitation du critique pour revérifier.", value: "B", profile: "RADAR" },
                    { label: "Je pleure dans mon bureau.", value: "C", profile: "NAIF" },
                    { label: "Je coupe le budget pub de ce journal.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_76",
                category: "STRATÉGIE",
                title: "STRATÉGIE : Livraison",
                description: "Faut-il se lancer sur UberEats ?",
                type: "SJT",
                options: [
                    { label: "Oui, CA additionnel facile.", value: "A", profile: "RADAR" },
                    { label: "Non, ça tue l'image et la marge.", value: "B", profile: "NAIF" },
                    { label: "Seulement si j'augmente les prix de 30%.", value: "C", profile: "TYRAN" },
                    { label: "Si la cuisine peut suivre sans impacter la salle.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_77",
                category: "MICROMANAGEMENT",
                title: "MICRO : Tenue",
                description: "Uniforme : chaussettes non conformes.",
                type: "PIEGE",
                options: [
                    { label: "Je renvoie chez lui pour se changer.", value: "A", profile: "BUREAUCRATE" },
                    { label: "Je ne regarde pas les pieds.", value: "B", profile: "NAIF" },
                    { label: "Amende symbolique.", value: "C", profile: "TYRAN" },
                    { label: "Remarque discrète pour le standing.", value: "D", profile: "RADAR" }
                ]
            },
            {
                id: "DIR_78",
                category: "LEADER",
                title: "LEADER : Concurrent",
                description: "Un nouveau concurrent très agressif ouvre en face.",
                type: "DILEMME",
                options: [
                    { label: "Guerre des prix.", value: "A", profile: "TYRAN" },
                    { label: "Je vais me présenter avec une bouteille.", value: "B", profile: "RADAR" },
                    { label: "Je Panique.", value: "C", profile: "NAIF" },
                    { label: "Je vérifie si son enseigne est aux normes.", value: "D", profile: "BUREAUCRATE" }
                ]
            },
            {
                id: "DIR_79",
                category: "ÉTHIQUE",
                title: "ÉTHIQUE : Gaspillage",
                description: "Beaucoup de pertes alimentaires. Solution ?",
                type: "VALEURS",
                options: [
                    { label: "Je vends les restes au staff.", value: "A", profile: "TYRAN" },
                    { label: "Dons asso (défisc) ou paniers anti-gaspi.", value: "B", profile: "RADAR" },
                    { label: "Je jette, hygiène avant tout.", value: "C", profile: "BUREAUCRATE" },
                    { label: "Le staff mange gratuitement.", value: "D", profile: "NAIF" }
                ]
            },
            {
                id: "DIR_80",
                category: "FINAL",
                title: "BILAN : Phase 2",
                description: "Fin de la phase d'approfondissement. Prêt pour le Hardcore ?",
                type: "STANDARD",
                options: [
                    { label: "Je suis prêt.", value: "A", profile: "RADAR" },
                    { label: "J'ai peur.", value: "B", profile: "NAIF" },
                    { label: "C'est moi le patron.", value: "C", profile: "TYRAN" },
                    { label: "J'ai suivi les règles.", value: "D", profile: "BUREAUCRATE" }
                ]
            }
        ]
    }
];
const DIRECTEUR_PHASE3 = [
    {
        section: "Le Vice & L'Argumentation",
        id: "PHASE3",
        items: DIRECTOR_PHASE3_DATA
    }
];


import { DIRECTOR_SENTINEL_DATA } from './director_sentinel_data.js';
import { MBTI_DIRECTEUR_DATA } from './mbti_directeur_data.js';

const FULL_BARMAN = [...BARMAN_DATA, ...BARMAN_PHASE2];
// const FULL_SERVEUR = [...SERVEUR_DATA, ...SERVEUR_PHASE2]; // Replaced by import

const FULL_CHEF_RANG = [
    {
        section: "Maitrise du Rang",
        id: "PHASE1",
        items: CHEF_RANG_DATA
    },
    ...CHEF_RANG_PHASE2 // Using existing Phase 2 for now, or we can replace it later
];
const FULL_MANAGER = [...MANAGER_ADJOINT_DATA]; // Only situational questions, MBTI is handled by MbtiTest.jsx
const FULL_MANAGER_PRINCIPAL = [...MANAGER_PRINCIPAL_DATA, ...MANAGER_PRINCIPAL_PHASE2];
// const FULL_DIRECTEUR = [...DIRECTEUR_DATA, ...DIRECTEUR_PHASE2, ...DIRECTEUR_PHASE3]; // OLD
const FULL_DIRECTEUR = [
    {
        section: "Profilage Psychologique",
        id: "PHASE1",
        items: MBTI_DIRECTEUR_DATA.questions
    },
    ...DIRECTOR_SENTINEL_DATA,
    ...DIRECTOR_PHASE3_DATA
];

const PLACEHOLDER_DATA = FULL_BARMAN;

const CORPORATE_DATA = [
    {
        section: "Alignement Éthique & Dark Empathy",
        id: "PHASE1",
        items: [
            { id: "RH_1", category: "ASPIRATION", title: "ASPIRATION", description: "Comprendre en profondeur les aspirations personnelles d'un candidat ne permet-il pas un recrutement plus aligné et durable ?", type: "DARK_EMPATHY" },
            { id: "RH_2", category: "CONTEXTE", title: "CONTEXTE", description: "Personnaliser l'entretien en s'appuyant sur le contexte de vie du candidat n'est-il pas une marque d'attention authentique ?", type: "DARK_EMPATHY" },
            { id: "RH_3", category: "ÉMOTION", title: "ÉMOTION", description: "Être pleinement présent émotionnellement quand un collaborateur partage ses défis ne renforce-t-il pas la relation de confiance ?", type: "DARK_EMPATHY" },
            { id: "RH_4", category: "COMPRÉHEN", title: "COMPRÉHEN", description: "Adapter ses mots pour que l'autre se sente profondément compris n'est-il pas une compétence RH essentielle ?", type: "DARK_EMPATHY" },
            { id: "RH_5", category: "ÉCOUTE", title: "ÉCOUTE", description: "Offrir une écoute active même quand la décision stratégique est déjà arrêtée n'est-il pas une forme de respect professionnel ?", type: "DARK_EMPATHY" },
            { id: "RH_6", category: "LEVIER", title: "LEVIER", description: "Utiliser une connaissance fine du contexte personnel pour motiver quelqu'un n'est-il pas plus efficace et humain ?", type: "DARK_EMPATHY" },
            { id: "RH_7", category: "RECAGE", title: "RECAGE", description: "Rassurer une personne en surcharge en lui rappelant que c'est souvent une question de gestion de priorités n'aide-t-il pas à recentrer ?", type: "DARK_EMPATHY" },
            { id: "RH_8", category: "SOUTIEN", title: "SOUTIEN", description: "Dire 'je comprends exactement ce que tu traverses' dans un moment sensible n'est-il pas un vrai soutien ?", type: "DARK_EMPATHY" },
            { id: "RH_9", category: "PROACTIF", title: "PROACTIF", description: "Recueillir des éléments hors travail pour anticiper les besoins et risques n'est-il pas une approche proactive bienveillante ?", type: "DARK_EMPATHY" },
            { id: "RH_10", category: "ÉQUILIBRE", title: "ÉQUILIBRE", description: "Montrer une empathie visible en face d'une demande difficile tout en rappelant l'intérêt collectif n'est-il pas un bon équilibre ?", type: "DARK_EMPATHY" },
            { id: "RH_11", category: "CONFIDENT", title: "CONFIDENT", description: "Être le confident de confiance pour fluidifier les dynamiques internes n'est-il pas un rôle précieux en RH ?", type: "DARK_EMPATHY" },
            { id: "RH_12", category: "NON-JUGEMENT", title: "NON-JUGEMENT", description: "Accueillir les émotions sans jugement immédiat n'est-il pas la base d'un accompagnement efficace ?", type: "DARK_EMPATHY" },
            { id: "RH_13", category: "APPUI", title: "APPUI", description: "Proposer un appui personnel discret en période compliquée ne solidifie-t-il pas l'engagement à long terme ?", type: "DARK_EMPATHY" },
            { id: "RH_14", category: "REFORMULATION", title: "REFORMULAT", description: "Reformuler une plainte ou un malaise pour ouvrir une perspective plus constructive n'est-il pas une vraie valeur ajoutée ?", type: "DARK_EMPATHY" },
            { id: "RH_15", category: "CONNEXION", title: "CONNEXION", description: "Créer une connexion émotionnelle rapide dès l'entretien n'est-il pas clé pour attirer et retenir les talents ?", type: "DARK_EMPATHY" },
            { id: "RH_16", category: "ORIENTATION", title: "ORIENTATION", description: "Accompagner subtilement quelqu'un vers un projet extérieur quand il semble en décalage n'est-il pas parfois plus respectueux ?", type: "DARK_EMPATHY" },
            { id: "RH_17", category: "RASSURANCE", title: "RASSURANCE", description: "Dire 'je suis à tes côtés' même face à des ajustements organisationnels n'est-il pas rassurant ?", type: "DARK_EMPATHY" },
            { id: "RH_18", category: "ADAPTATION", title: "ADAPTATION", description: "Adapter constamment ton et discours pour valoriser chaque individu n'est-il pas de l'intelligence émotionnelle appliquée ?", type: "DARK_EMPATHY" },
            { id: "RH_19", category: "COACHING", title: "COACHING", description: "Transformer une difficulté exprimée en opportunité de développement personnel n'est-il pas un acte de coaching profond ?", type: "DARK_EMPATHY" },
            { id: "RH_20", category: "HARMONIE", title: "HARMONIE", description: "Maintenir une posture d'écoute et de compréhension permanente n'est-il pas indispensable pour une culture harmonieuse ?", type: "DARK_EMPATHY" },
            { id: "RH_21", category: "MÉRITE", title: "MÉRITE", description: "Valoriser ceux qui investissent beaucoup dans des périodes intenses n'est-il pas motivant et juste ?", type: "DARK_EMPATHY" },
            { id: "RH_22", category: "RYTHME", title: "RYTHME", description: "Connaître le contexte de vie pour ajuster les attentes et le rythme n'est-il pas une forme de bienveillance responsable ?", type: "DARK_EMPATHY" },
            { id: "RH_23", category: "COLLECTIF", title: "COLLECTIF", description: "Rappeler que l'entreprise est une entité plus grande que l'individu n'est-il pas un principe réaliste et protecteur ?", type: "DARK_EMPATHY" },
            { id: "RH_24", category: "STABILITÉ", title: "STABILITÉ", description: "Offrir une stabilité et un cadre sécurisant à ceux qui en ont besoin ne renforce-t-il pas leur loyauté ?", type: "DARK_EMPATHY" },
            { id: "RH_25", category: "POSTURE", title: "POSTURE", description: "Garder un mélange subtil d'empathie affichée et de fermeté stratégique n'est-il pas la clé d'un leadership RH efficace ?", type: "DARK_EMPATHY" },
            { id: "RH_26", category: "PRÉVENTION", title: "PRÉVENTION", description: "Anticiper les fragilités personnelles pour mieux les accompagner (ou les orienter) n'est-il pas prévenant ?", type: "DARK_EMPATHY" },
            { id: "RH_27", category: "MATURITÉ", title: "MATURITÉ", description: "Montrer une compassion marquée tout en maintenant les objectifs business n'est-il pas un équilibre mature ?", type: "DARK_EMPATHY" },
            { id: "RH_28", category: "DEVIATION", title: "DEVIATION", description: "Utiliser l'écoute empathique comme levier pour aligner les individus sur la vision d'entreprise n'est-il pas stratégique ?", type: "DARK_EMPATHY" },
            { id: "RH_29", category: "IMAGE", title: "IMAGE", description: "Être perçu comme 'celui qui comprend vraiment' ne crée-t-il pas une dynamique positive durable ?", type: "DARK_EMPATHY" },
            { id: "RH_30", category: "MARQUE", title: "MARQUE", description: "Maintenir une image d'empathie constante, même dans des décisions difficiles, n'est-il pas essentiel pour la marque employeur ?", type: "DARK_EMPATHY" }
        ]
    }
];

const CORPORATE_PHASE2 = [
    {
        section: "Audit Complété",
        id: "PHASE2",
        items: [] // Fin du test après 30 questions
    }
];



const FULL_CORPORATE = [...CORPORATE_DATA, ...CORPORATE_PHASE2];

export const HCR_DATA = {
    BARMAN: FULL_BARMAN,
    SERVEUR: FULL_SERVEUR,
    CHEF_RANG: FULL_CHEF_RANG,
    MANAGER: FULL_MANAGER,
    MANAGER_PRINCIPAL: FULL_MANAGER_PRINCIPAL,
    DIRECTEUR: FULL_DIRECTEUR,
    ADN_ENTREPRISE: FULL_CORPORATE
};
