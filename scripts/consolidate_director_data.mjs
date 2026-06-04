
import fs from 'fs';

const BASE_PATH = "/Users/mehdiboussekine/.gemini/antigravity/playground/scalar-belt/hcr-sentinel";

function getJson(filename) {
    const fullPath = `${BASE_PATH}/${filename}`;
    return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
}

// 1. Load Source Files
const part1 = getJson('director_source_part1.json');
const part2 = getJson('director_source_part2.json');
const part3 = getJson('director_source_part3.json');

// 2. Prepare Phase 2 (Leadership) - Q061 to Q144
const phase2QuestionsRaw = [
    ...(part1.phase_2_leadership_84_questions?.questions || []),
    ...(part2 || [])
];

const phase2Formatted = phase2QuestionsRaw.map(q => {
    const options = ["A", "B", "C", "D", "E"].map(key => {
        const ans = q.reponses[key];
        return {
            label: ans.texte,
            value: key,
            profile: ans.profil
        };
    });
    return {
        id: q.id,
        description: q.situation,
        category: "LEADERSHIP",
        type: "SJT",
        options: options
    };
});

// 3. Prepare Phase 3 (Dimensions) - Q145 to Q186
const phase3QuestionsRaw = part3.phase_3_et_4_dimensions_hardcore.phase_3_dimensions.questions;
const phase3Formatted = phase3QuestionsRaw.map(q => {
    return {
        id: q.id,
        description: q.situation,
        category: q.dimension,
        type: "DIMENSION",
        pole_faible: q.pole_faible,
        pole_fort: q.pole_fort
    };
});

// 4. Prepare Phase 4 (Hardcore) - Q187 to Q206
const phase4QuestionsRaw = part3.phase_3_et_4_dimensions_hardcore.phase_4_hardcore.questions;
const phase4Formatted = phase4QuestionsRaw.map(q => {
    const options = ["A", "B", "C", "D", "E"].map(key => {
        const ans = q.reponses[key];
        return {
            label: ans.texte,
            value: key,
            profile: ans.profil
        };
    });
    return {
        id: q.id,
        description: q.situation,
        category: "HARDCORE",
        type: "SJT", // Using SJT for selection, even if hardcore
        options: options
    };
});

// 5. Prepare Phase Dark - Q207 to Q240
// Extracted from the integrate_director_dark.mjs script logic
const darkData = [
    { "id": "Q207", "theme": "Gestion de crise & cash", "situation": "Le resto est dans le rouge, les fournisseurs appellent pour impayés. Le proprio fait le mort. Ta première action opérationnelle ?", "reponses": { "A": { "texte": "Je vide les stocks existants et je stoppe les achats : on finit les restes.", "facette": "RADAR" }, "B": { "texte": "J'envoie un recommandé au proprio pour me dédouaner officiellement.", "facette": "BUREAUCRATE" }, "C": { "texte": "Je supprime les extras et j'utilise la peur du chômage pour faire faire la plonge aux fixes.", "facette": "TYRAN" }, "D": { "texte": "Je flatte les petits fournisseurs pour qu'ils me fassent crédit par amitié.", "facette": "SAGE" }, "E": { "texte": "Je lance des ventes privées flash pour siphonner le cash des clients fidèles.", "facette": "OPPORTUNISTE" } } },
    { "id": "Q208", "theme": "Gestion de crise & cash", "situation": "La rumeur de faillite court. L'équipe est inquiète pour les salaires. Tu fais quoi ?", "reponses": { "A": { "texte": "Je les rassure avec un grand sourire : On est une famille, je gère.", "facette": "OPPORTUNISTE" }, "B": { "texte": "Je me bats pour vous, mais j'ai besoin que vous soyez irréprochables ce soir.", "facette": "RADAR" }, "C": { "texte": "Je laisse planer le doute pour qu'ils travaillent deux fois plus par peur.", "facette": "SAGE" }, "D": { "texte": "Si le service n'est pas parfait, le proprio ne paiera personne.", "facette": "TYRAN" }, "E": { "texte": "Je leur montre une version arrangée des comptes pour les motiver à sauver le navire.", "facette": "VISIONNAIRE" } } },
    { "id": "Q209", "theme": "Gestion de crise & cash", "situation": "Redressement judiciaire. On te demande -20% de coûts d'exploitation. Ton plan ?", "reponses": { "A": { "texte": "Je licencie les maillons faibles émotionnels et je sature les managers.", "facette": "TYRAN" }, "B": { "texte": "Je rationalise chaque gramme de produit pour tuer le gaspillage.", "facette": "BUREAUCRATE" }, "C": { "texte": "Je ferme les créneaux peu rentables et je réduit les contrats.", "facette": "SAGE" }, "D": { "texte": "Je demande au staff un effort solidaire de baisse de salaire pour sauver leurs collègues.", "facette": "VISIONNAIRE" }, "E": { "texte": "Je change la carte pour des produits bas de gamme vendus au prix fort.", "facette": "OPPORTUNISTE" } } },
    { "id": "Q210", "theme": "Gestion de crise & cash", "situation": "Liquidation actée. Fermeture dans 15 jours. Le proprio a disparu. Tu fais quoi ?", "reponses": { "A": { "texte": "Je vends discrètement le matos de valeur et je garde le cash pour compenser ma prime.", "facette": "OPPORTUNISTE" }, "B": { "texte": "Je traite les dossiers administratifs pour qu'ils me fichent la paix après.", "facette": "BUREAUCRATE" }, "C": { "texte": "Je disparais du jour au lendemain sans donner de nouvelles.", "facette": "SAGE" }, "D": { "texte": "Je serre la vis jusqu'au bout pour qu'aucun serveur ne vole une bouteille.", "facette": "TYRAN" }, "E": { "texte": "J'organise une dernière soirée VIP pour fidéliser les clients avant la fermeture.", "facette": "VISIONNAIRE" } } },
    { "id": "Q211", "theme": "Management & toxicité", "situation": "Turnover massif : aucune serveuse ne reste. Elles pointent l'ambiance. Tu fais quoi ?", "reponses": { "A": { "texte": "Je leur dis en entretien que les anciennes n'avaient pas le niveau pour les valoriser.", "facette": "OPPORTUNISTE" }, "B": { "texte": "Je promets des changements radicaux tout en sachant que je ne ferai que le minimum.", "facette": "RADAR" }, "C": { "texte": "Je durcis les entretiens : je ne veux que des gens qui ont faim et qui ne se plaindront pas.", "facette": "TYRAN" }, "D": { "texte": "J'édite un manuel de procédures pour que l'affect ne rentre plus en compte.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je crée un système de parrainage pour que les anciennes surveillent les nouvelles.", "facette": "VISIONNAIRE" } } },
    { "id": "Q212", "theme": "Management & toxicité", "situation": "Les serveuses fuient car le Manager est trop cassant. Ton action ?", "reponses": { "A": { "texte": "Je le soutiens devant elles, puis je l'isole en privé pour lui montrer que je peux le briser.", "facette": "TYRAN" }, "B": { "texte": "Je lance un audit anonyme pour documenter ses dérapages et préparer sa sortie.", "facette": "OPPORTUNISTE" }, "C": { "texte": "Je le laisse faire : il fait le sale boulot, je garde le rôle du bon chef.", "facette": "SAGE" }, "D": { "texte": "Je lui impose un cadre de communication écrit pour limiter ses dérapages.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je lui confie une stagiaire difficile pour voir s'il craque avant les autres.", "facette": "VISIONNAIRE" } } },
    { "id": "Q213", "theme": "Management & toxicité", "situation": "Le Responsable de Salle est accusé de harcèlement. Tu fais quoi ?", "reponses": { "A": { "texte": "Je le mets à pied pour montrer ma vertu tout en préparant sa succession.", "facette": "BUREAUCRATE" }, "B": { "texte": "Je demande aux plaignantes des détails sordides pour évaluer leur loyauté.", "facette": "RADAR" }, "C": { "texte": "Je le vire sans sommation pour couper court à toute polémique.", "facette": "TYRAN" }, "D": { "texte": "Je le mute sur un poste où il ne pourra plus nuire à l'image du resto.", "facette": "OPPORTUNISTE" }, "E": { "texte": "Je l'oblige à s'excuser publiquement pour le humilier et reprendre le contrôle total.", "facette": "VISIONNAIRE" } } },
    { "id": "Q214", "theme": "Management & toxicité", "situation": "Le Manager (en poste depuis 2 mois) est toxique et sexiste. L'équipe craque. Ta décision ?", "reponses": { "A": { "texte": "Je mets fin à sa période d'essai ce soir, proprement et sans frais.", "facette": "TYRAN" }, "B": { "texte": "Je le recadre violemment devant le staff pour regagner leur confiance.", "facette": "RADAR" }, "C": { "texte": "Je l'utilise pour virer ceux dont je ne veux plus, puis je le vire lui.", "facette": "OPPORTUNISTE" }, "D": { "texte": "Je note chaque incident pour blinder un dossier de licenciement futur.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je le rétrograde et je laisse l'équipe se venger de lui sur le terrain.", "facette": "CAMÉLÉON" } } },
    { "id": "Q215", "theme": "Management & toxicité", "situation": "Ton Manager te dénigre auprès des Chefs de rang. Tu fais quoi ?", "reponses": { "A": { "texte": "Je le licencie pour trahison manifeste dès demain.", "facette": "TYRAN" }, "B": { "texte": "Je le confronte devant ceux à qui il a parlé pour le décrédibiliser.", "facette": "RADAR" }, "C": { "texte": "Je révèle ses erreurs professionnelles factuelles aux Chefs de rang pour inverser la vapeur.", "facette": "VISIONNAIRE" }, "D": { "texte": "Je lui retire ses responsabilités petit à petit en invoquant des erreurs de gestion.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je l'invite à dîner pour lui faire croire que j'ai confiance, afin qu'il se confie.", "facette": "CAMÉLÉON" } } },
    { "id": "Q216", "theme": "Management & toxicité", "situation": "Rumeur : Ton Manager veut prendre ta place. Tu réagis comment ?", "reponses": { "A": { "texte": "Je lance une procédure pour faute lourde avant qu'il n'ait le temps d'agir.", "facette": "TYRAN" }, "B": { "texte": "Je ris de lui en réunion : Certains rêvent de grandeur sans avoir les épaules.", "facette": "SAGE" }, "C": { "texte": "Je lui donne des missions impossibles pour qu'il se plante magistralement.", "facette": "OPPORTUNISTE" }, "D": { "texte": "Je blinde mon propre rapport d'activité auprès du proprio pour le rendre intouchable.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je lui propose de devenir mon allié pour mieux surveiller ses mouvements.", "facette": "VISIONNAIRE" } } },
    { "id": "Q217", "theme": "Management & toxicité", "situation": "En plein service, ton Manager contredit tes ordres. Tu fais quoi ?", "reponses": { "A": { "texte": "Je le sors de la salle par le bras et je lui interdis de revenir avant demain.", "facette": "TYRAN" }, "B": { "texte": "Je lui demande calmement d'expliquer son génie devant les clients pour le ridiculiser.", "facette": "RADAR" }, "C": { "texte": "Je laisse faire et je corrige ses erreurs derrière lui sans rien dire (mépris total).", "facette": "SAGE" }, "D": { "texte": "Je consigne l'insubordination dans le registre de sécurité/management.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je lui donne raison devant le staff, puis je le recadre violemment en privé après le service.", "facette": "CAMÉLÉON" } } },
    { "id": "Q218", "theme": "Carrière & débauchage", "situation": "Offre Directeur ailleurs : +35% salaire, mais ambiance flicage. Tu fais quoi ?", "reponses": { "A": { "texte": "Je pars. La loyauté ne paie pas les factures.", "facette": "OPPORTUNISTE" }, "B": { "texte": "Je reste, mais j'utilise l'offre pour faire chanter mon proprio.", "facette": "SAGE" }, "C": { "texte": "Je demande un alignement immédiat de mon salaire actuel.", "facette": "RADAR" }, "D": { "texte": "Je demande au futur employeur les contrats de prévoyance par écrit.", "facette": "BUREAUCRATE" }, "E": { "texte": "J'accepte, mais je débauche mon meilleur staff pour couler mon ancien resto.", "facette": "VISIONNAIRE" } } },
    { "id": "Q219", "theme": "Carrière & débauchage", "situation": "Chasseur de tête : +40% salaire + voiture, mais groupe standardisé. Ton choix ?", "reponses": { "A": { "texte": "Je m'en vais sans me retourner.", "facette": "OPPORTUNISTE" }, "B": { "texte": "Je reste : ici, c'est moi qui fais les règles.", "facette": "SAGE" }, "C": { "texte": "Je négocie une prime exceptionnelle de fidélité pour rester.", "facette": "RADAR" }, "D": { "texte": "Je pars en plaçant un de mes poulains à ma place pour garder un pied ici.", "facette": "CAMÉLÉON" }, "E": { "texte": "Je refuse, mais j'utilise l'info pour montrer au proprio à quel point je suis convoité.", "facette": "VISIONNAIRE" } } },
    { "id": "Q220", "theme": "Carrière & débauchage", "situation": "Proposition Directeur Régional (3 sites) mais salaire fixe identique (gros variable). Tu fais quoi ?", "reponses": { "A": { "texte": "Je prends le poste : le pouvoir sur 3 équipes vaut bien le risque.", "facette": "OPPORTUNISTE" }, "B": { "texte": "Je refuse : je préfère être le roi d'un petit royaume que le serviteur d'un empire.", "facette": "SAGE" }, "C": { "texte": "Je demande à gérer les 3 sites tout en restant basé dans mon resto actuel.", "facette": "VISIONNAIRE" }, "D": { "texte": "Je demande une garantie de variable sur les 12 premiers mois.", "facette": "RADAR" }, "E": { "texte": "Je refuse et j'explique au proprio que je suis le seul capable de tenir ce site-ci.", "facette": "BUREAUCRATE" } } },
    { "id": "Q221", "theme": "Opérationnel & hiérarchie", "situation": "Le proprio veut baisser la masse salariale. Tu fais quoi ?", "reponses": { "A": { "texte": "Je vire les plus anciens (trop chers) et je les remplace par des stagiaires malléables.", "facette": "TYRAN" }, "B": { "texte": "Je propose de supprimer les avantages (repas, pauses) au lieu des postes.", "facette": "RADAR" }, "C": { "texte": "Je suggère au proprio de vendre l'affaire pendant qu'elle a encore de la valeur.", "facette": "OPPORTUNISTE" }, "D": { "texte": "Je réduis les contrats au minimum légal autorisé.", "facette": "BUREAUCRATE" }, "E": { "texte": "J'explique au staff que c'est ça ou la fermeture pour qu'ils acceptent tout.", "facette": "VISIONNAIRE" } } },
    { "id": "Q222", "theme": "Opérationnel & hiérarchie", "situation": "Les serveuses partent à cause des plannings injustes du Manager. Ton action ?", "reponses": { "A": { "texte": "Je punis le Manager en lui imposant les horaires de nuit pendant un mois.", "facette": "TYRAN" }, "B": { "texte": "Je lui retire la gestion des plannings pour montrer que je suis le seul juste ici.", "facette": "RADAR" }, "C": { "texte": "Je donne les meilleurs horaires aux serveurs qui me rapportent le plus d'infos.", "facette": "OPPORTUNISTE" }, "D": { "texte": "J'impose une rotation automatique via logiciel pour ne plus avoir à discuter.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je laisse l'équipe se battre pour ses horaires : les plus forts resteront.", "facette": "VISIONNAIRE" } } },
    { "id": "Q223", "theme": "Opérationnel & hiérarchie", "situation": "Sabotage : Le Responsable de Salle refuse un ordre du Manager et te prend à témoin. Tu fais quoi ?", "reponses": { "A": { "texte": "Je fais semblant d'écouter le Responsable pour qu'il se sente puissant, puis je le brise.", "facette": "OPPORTUNISTE" }, "B": { "texte": "Je vire le Responsable de Salle pour faire respecter la hiérarchie devant tout le monde.", "facette": "TYRAN" }, "C": { "texte": "Je demande au Manager de régler ça lui-même : Si tu ne peux pas le gérer, je te remplace.", "facette": "RADAR" }, "D": { "texte": "Je renvoie le Responsable au travail sans un mot, en l'ignorant totalement.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je crée une tension entre eux pour être le seul arbitre de la situation.", "facette": "VISIONNAIRE" } } },
    { "id": "Q224", "theme": "Opérationnel & hiérarchie", "situation": "Offre Palace : +50% salaire, mais tu perds ton autonomie. Tu fais quoi ?", "reponses": { "A": { "texte": "Je pars pour l'argent. Le pouvoir, je le reprendrai ailleurs plus tard.", "facette": "OPPORTUNISTE" }, "B": { "texte": "Je reste. Je préfère diriger mon équipe que d'obéir à un comité.", "facette": "SAGE" }, "C": { "texte": "Je négocie une augmentation massive ici pour compenser mon sacrifice.", "facette": "RADAR" }, "D": { "texte": "Je demande au Palace de me donner un titre encore plus prestigieux.", "facette": "BUREAUCRATE" }, "E": { "texte": "J'accepte pour infiltrer le réseau du Palace et piquer leurs clients.", "facette": "VISIONNAIRE" } } },
    { "id": "Q225", "theme": "Opérationnel & hiérarchie", "situation": "2 mois de cash restant. Le proprio est en panique totale. Tu fais quoi ?", "reponses": { "A": { "texte": "Je prépare mon départ et j'emporte tout ce qui peut me servir.", "facette": "SAGE" }, "B": { "texte": "Je négocie un accord avec le banquier en lui montrant un plan miracle.", "facette": "RADAR" }, "C": { "texte": "Je sacrifie les salaires des cadres pour prolonger l'agonie du resto.", "facette": "TYRAN" }, "D": { "texte": "Je blinde les dossiers de licenciement économique pour être prêt.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je lance une campagne de comm' larmoyante pour attirer les clients par pitié.", "facette": "VISIONNAIRE" } } },
    { "id": "Q226", "theme": "Opérationnel & hiérarchie", "situation": "Staff : Le Responsable de Salle est un tyran. Tu fais quoi ?", "reponses": { "A": { "texte": "Je lui dis de continuer : il me faut des chiens de garde, pas des amis.", "facette": "TYRAN" }, "B": { "texte": "Je le recadre en public pour me faire passer pour le sauveur du staff.", "facette": "RADAR" }, "C": { "texte": "Je lui suggère de démissionner avant que l'équipe ne se rebelle physiquement.", "facette": "OPPORTUNISTE" }, "D": { "texte": "J'installe des caméras pour surveiller les tensions (et les erreurs de chacun).", "facette": "BUREAUCRATE" }, "E": { "texte": "J'encourage en secret, mais je m'en désolidarise devant l'équipe.", "facette": "CAMÉLÉON" } } },
    { "id": "Q227", "theme": "Opérationnel & hiérarchie", "situation": "Trahison : Ton Manager veut ta place et parle au proprio. Tu fais quoi ?", "reponses": { "A": { "texte": "Je le vire séance tenante devant le proprio pour montrer ma force.", "facette": "TYRAN" }, "B": { "texte": "Je vais voir le proprio et je lui raconte une faute grave imaginaire du Manager.", "facette": "RADAR" }, "C": { "texte": "J'attends qu'il agisse et je contre-attaque au moment où il se croit victorieux.", "facette": "SAGE" }, "D": { "texte": "Je commence à noter ses retards et ses erreurs de caisse de façon maniaque.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je lui donne de fausses informations stratégiques pour qu'il se ridiculise devant le proprio.", "facette": "VISIONNAIRE" } } },
    { "id": "Q228", "theme": "Opérationnel & hiérarchie", "situation": "Offre ailleurs : même salaire, mais gros variable. Ton avis ?", "reponses": { "A": { "texte": "Je pars. Je sais que je suis assez bon pour empocher tout le variable.", "facette": "OPPORTUNISTE" }, "B": { "texte": "Je reste : la stabilité est une arme de longue durée.", "facette": "SAGE" }, "C": { "texte": "Je demande un système de variable identique ici, rétroactif sur 6 mois.", "facette": "RADAR" }, "D": { "texte": "Je demande les bilans comptables de l'autre resto pour vérifier leur capacité de paye.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je reste, mais j'envoie mon Manager postuler là-bas pour m'en débarrasser.", "facette": "VISIONNAIRE" } } },
    { "id": "Q229", "theme": "Opérationnel & hiérarchie", "situation": "Faillite proche, l'équipe est terrifiée. Ta réaction ?", "reponses": { "A": { "texte": "Je leur assure que tout va bien, puis je vide mon bureau le soir même.", "facette": "OPPORTUNISTE" }, "B": { "texte": "Je leur propose de devenir actionnaires s'ils travaillent gratuitement un mois.", "facette": "VISIONNAIRE" }, "C": { "texte": "Je les informe que je ne signerai pas leurs attestations s'ils partent avant la fin du mois.", "facette": "TYRAN" }, "D": { "texte": "Je les oriente vers les textes de loi sur les garanties de salaires.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je sélectionne les 3 meilleurs pour les emmener avec moi dans mon prochain projet.", "facette": "SAGE" } } },
    { "id": "Q230", "theme": "Opérationnel & hiérarchie", "situation": "Turnover : Les Chefs de Rang monopolisent les pourboires. Les serveurs râlent. Tu fais quoi ?", "reponses": { "A": { "texte": "Je leur dis que c'est la loi de la jungle : Soyez meilleurs et vous aurez les rangs.", "facette": "TYRAN" }, "B": { "texte": "J'impose une mise en commun totale pour être le garant de la justice.", "facette": "VISIONNAIRE" }, "C": { "texte": "Je laisse faire : les Chefs de Rang me sont ainsi redevables.", "facette": "OPPORTUNISTE" }, "D": { "texte": "J'écris un règlement strict sur la répartition au prorata des heures.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je prends une commission sur le pot commun pour les frais de gestion.", "facette": "RADAR" } } },
    { "id": "Q231", "theme": "Opérationnel & hiérarchie", "situation": "Le Barman star est toxique. Tout le monde le déteste mais il attire les clients. Tu fais quoi ?", "reponses": { "A": { "texte": "Je le vire : personne ne doit être plus important que moi dans ce resto.", "facette": "TYRAN" }, "B": { "texte": "Je le garde, mais je lui colle un adjoint espion pour le surveiller.", "facette": "OPPORTUNISTE" }, "C": { "texte": "Je lui explique que sans moi, il n'est rien, pour briser son ego.", "facette": "VISIONNAIRE" }, "D": { "texte": "J'ajoute des clauses de comportement à son contrat de travail.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je le laisse s'isoler socialement pour qu'il ne dépende que de moi.", "facette": "RADAR" } } },
    { "id": "Q232", "theme": "Opérationnel & hiérarchie", "situation": "Proposition Start-up (concept novateur) à haut risque. Tu fais quoi ?", "reponses": { "A": { "texte": "Je fonce si on me donne des parts sociales.", "facette": "VISIONNAIRE" }, "B": { "texte": "Je reste ici, la sécurité est ma priorité actuelle.", "facette": "SAGE" }, "C": { "texte": "Je demande à être payé en avance pour les 6 premiers mois.", "facette": "OPPORTUNISTE" }, "D": { "texte": "Je demande à voir l'étude de marché et le plan financier complet.", "facette": "BUREAUCRATE" }, "E": { "texte": "J'accepte, mais je garde mon poste actuel en temps partiel pour ne pas couler.", "facette": "RADAR" } } },
    { "id": "Q233", "theme": "Opérationnel & hiérarchie", "situation": "Faillite, le staff veut des garanties sur les paies. Tu fais quoi ?", "reponses": { "A": { "texte": "Je leur fais signer une décharge de responsabilité contre une promesse orale.", "facette": "TYRAN" }, "B": { "texte": "Je m'engage sur mon honneur (sans valeur juridique) pour les calmer.", "facette": "SAGE" }, "C": { "texte": "Je harcèle la banque pour débloquer un découvert social.", "facette": "RADAR" }, "D": { "texte": "Je leur donne les coordonnées du syndic de liquidation.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je leur promets de me battre pour qu'ils touchent une prime de fin de service.", "facette": "OPPORTUNISTE" } } },
    { "id": "Q234", "theme": "Opérationnel & hiérarchie", "situation": "Les serveuses partent pour le salaire. Ton levier ?", "reponses": { "A": { "texte": "Je leur explique que le marché est bouché et qu'elles ne trouveront rien de mieux.", "facette": "TYRAN" }, "B": { "texte": "J'augmente la part de variable (qu'elles n'atteindront jamais).", "facette": "OPPORTUNISTE" }, "C": { "texte": "Je leur offre des avantages non financiers (titres, flexibilité de façade).", "facette": "VISIONNAIRE" }, "D": { "texte": "Je leur montre la grille conventionnelle : Je suis déjà au-dessus du minimum.", "facette": "BUREAUCRATE" }, "E": { "texte": "J'en augmente une seule pour créer de la jalousie et briser la solidarité.", "facette": "RADAR" } } },
    { "id": "Q235", "theme": "Opérationnel & hiérarchie", "situation": "Un Chef de Rang se plaint du Responsable de Salle qui bloque sa carrière. Tu fais quoi ?", "reponses": { "A": { "texte": "Je lui dis qu'il a raison et je l'encourage à saboter le Responsable en secret.", "facette": "VISIONNAIRE" }, "B": { "texte": "Je les réunis pour les forcer à s'entendre, ou je les vire tous les deux.", "facette": "RADAR" }, "C": { "texte": "Je ne fais rien : la rivalité les rend plus productifs.", "facette": "SAGE" }, "D": { "texte": "Je demande un rapport écrit sur les compétences manquantes du Chef de Rang.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je promeus le Chef de Rang pour affaiblir le pouvoir du Responsable de Salle.", "facette": "TYRAN" } } },
    { "id": "Q236", "theme": "Opérationnel & hiérarchie", "situation": "Débauchage : Stabilité groupe vs Liberté créative. Ton choix ?", "reponses": { "A": { "texte": "Je choisis la stabilité. La créativité est un luxe de riche.", "facette": "OPPORTUNISTE" }, "B": { "texte": "Je reste ici. Je préfère créer mes propres échecs que de réussir ceux des autres.", "facette": "VISIONNAIRE" }, "C": { "texte": "Je pars, mais je négocie une clause de liberté sur les spéciaux.", "facette": "RADAR" }, "D": { "texte": "Je choisis le groupe pour les avantages retraite et la sécurité juridique.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je reste, mais je demande au groupe de devenir consultant pour eux.", "facette": "SAGE" } } },
    { "id": "Q237", "theme": "Opérationnel & hiérarchie", "situation": "Un investisseur veut sauver le resto mais veut virer ton Manager. Tu fais quoi ?", "reponses": { "A": { "texte": "Je lui ouvre la porte moi-même : le Manager est un poids mort.", "facette": "OPPORTUNISTE" }, "B": { "texte": "Je refuse : je ne laisse personne décider de mon équipe à ma place.", "facette": "SAGE" }, "C": { "texte": "J'accepte, mais je demande une augmentation pour gérer la transition.", "facette": "RADAR" }, "D": { "texte": "Je demande à l'investisseur les motifs légaux de cette demande.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je propose au Manager de démissionner contre une recommandation bidon.", "facette": "VISIONNAIRE" } } },
    { "id": "Q238", "theme": "Opérationnel & hiérarchie", "situation": "Le Barman offre des verres à ses amis. Tu réagis comment ?", "reponses": { "A": { "texte": "Je le licencie pour vol avec dépôt de plainte officiel.", "facette": "TYRAN" }, "B": { "texte": "J'installe un système de pesée automatique des bouteilles.", "facette": "BUREAUCRATE" }, "C": { "texte": "Je lui demande de m'en offrir aussi pour m'intégrer à son cercle.", "facette": "OPPORTUNISTE" }, "D": { "texte": "Je lui donne un quota commercial à ne pas dépasser (sous ma surveillance).", "facette": "RADAR" }, "E": { "texte": "Je documenter ses agissements pour négocier sa sortie le moment venu.", "facette": "OPPORTUNISTE" } } },
    { "id": "Q239", "theme": "Opérationnel & hiérarchie", "situation": "Manager vs Responsable de Salle : guerre ouverte. Ton arbitrage ?", "reponses": { "A": { "texte": "Je les vire tous les deux pour installer des gens qui me sont dévoués.", "facette": "TYRAN" }, "B": { "texte": "Je les mets en compétition sur des objectifs clairs pour voir qui est le meilleur.", "facette": "RADAR" }, "C": { "texte": "Je laisse le conflit s'envenimer pour voir qui est le plus fort (et le plus utile).", "facette": "SAGE" }, "D": { "texte": "Je définis leurs zones d'influence au millimètre près par écrit.", "facette": "BUREAUCRATE" }, "E": { "texte": "Je prends le parti du plus faible pour qu'il me doive sa survie.", "facette": "CAMÉLÉON" } } },
    { "id": "Q240", "theme": "Opérationnel & hiérarchie", "situation": "Restaurant étoilé en difficulté proposé. Ton choix final ?", "reponses": { "A": { "texte": "Je prends le poste. La gloire d'avoir redressé une étoile est le meilleur levier pour la suite.", "facette": "VISIONNAIRE" }, "B": { "texte": "Je reste ici : je préfère être le maître d'un bistrot qu'un serviteur étoilé.", "facette": "SAGE" }, "C": { "texte": "J'accepte si j'ai le droit de virer tout le staff existant dès le premier jour.", "facette": "OPPORTUNISTE" }, "D": { "texte": "Je demande un audit financier indépendant sur 3 ans avant de signer.", "facette": "BUREAUCRATE" }, "E": { "texte": "J'accepte, mais je garde mon poste actuel en sous-main via un prête-nom.", "facette": "RADAR" } } }
];

const phaseDarkFormatted = darkData.map(q => {
    const options = ["A", "B", "C", "D", "E"].map(key => {
        const ans = q.reponses[key];
        return {
            label: ans.texte,
            value: key,
            profile: ans.facette
        };
    });
    return {
        id: q.id,
        description: q.situation,
        category: q.theme,
        type: "HARDCORE",
        options: options
    };
});

// 6. Assemble EVERYTHING
const FINAL_DATA = [
    {
        section: "Leadership - Style de Direction",
        id: "PHASE2",
        items: phase2Formatted
    },
    {
        section: "Dimensions - Soft Skills & Valeurs",
        id: "PHASE3",
        items: phase3Formatted
    },
    {
        section: "Hardcore - Dilemmes Extrêmes",
        id: "PHASE4",
        items: phase4Formatted
    },
    {
        section: "Questions finales - Dark reality",
        id: "PHASE_DARK",
        items: phaseDarkFormatted
    }
];

// 7. Write to File
const output = `export const DIRECTOR_SENTINEL_DATA = ${JSON.stringify(FINAL_DATA, null, 4)};\n`;
fs.writeFileSync(`${BASE_PATH}/src/data/director_sentinel_data.js`, output);

console.log("SUCCESS: Director Sentinel Data Overhauled with all 180 questions (Q061-Q240).");
