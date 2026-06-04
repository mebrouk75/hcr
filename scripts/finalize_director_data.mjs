
import fs from 'fs';
import { DIRECTOR_SENTINEL_DATA } from '../src/data/director_sentinel_data.js';

const BASE_PATH = "/Users/mehdiboussekine/.gemini/antigravity/playground/scalar-belt/hcr-sentinel";

// 1. Get existing Phase 2 data
const phase2Data = DIRECTOR_SENTINEL_DATA.find(section => section.id === "PHASE2");

if (!phase2Data) {
    console.error("CRITICAL ERROR: Phase 2 data not found in existing file.");
    process.exit(1);
}

console.log(`Loaded Phase 2 with ${phase2Data.items.length} questions.`);

// 2. New Data from User (Phase 3, 4, Dark)
const NEW_DATA_RAW = {
    "PHASE3_DIMENSIONS": {
        "id": "PHASE3",
        "nom": "Analyse Profonde",
        "items": [
            { "id": "Q145", "description": "Quand j'entre dans une pièce, on m'écoute.", "category": "INFLUENCE", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q146", "description": "Je convaincs facilement mon équipe.", "category": "INFLUENCE", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q147", "description": "Mes managers m'imitent.", "category": "INFLUENCE", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q148", "description": "Je tranche les conflits.", "category": "INFLUENCE", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q149", "description": "Je négocie bien.", "category": "INFLUENCE", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q150", "description": "On me recommande.", "category": "INFLUENCE", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q151", "description": "Je connais la vie perso de mes employés.", "category": "CONSIDÉRATION", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q152", "description": "J'adapte le planning aux soucis des autres.", "category": "CONSIDÉRATION", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q153", "description": "Je suis en salle avec eux.", "category": "CONSIDÉRATION", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q154", "description": "Je félicite souvent.", "category": "CONSIDÉRATION", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q155", "description": "J'intègre bien les nouveaux.", "category": "CONSIDÉRATION", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q156", "description": "Bien-être = CA.", "category": "CONSIDÉRATION", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q157", "description": "J'aime tout changer régulièrement.", "category": "CRÉATIVITÉ", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q158", "description": "Je teste des formats.", "category": "CRÉATIVITÉ", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q159", "description": "Je trouve des solutions.", "category": "CRÉATIVITÉ", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q160", "description": "Je m'inspire ailleurs.", "category": "CRÉATIVITÉ", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q161", "description": "J'encourage la créativité.", "category": "CRÉATIVITÉ", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q162", "description": "Je prends des risques.", "category": "CRÉATIVITÉ", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q163", "description": "Je vérifie le food cost moi-même.", "category": "RIGUEUR", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q164", "description": "Tout doit être écrit (procédures).", "category": "RIGUEUR", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q165", "description": "Contrôles surprises.", "category": "RIGUEUR", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q166", "description": "Plannings en avance.", "category": "RIGUEUR", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q167", "description": "Contrôle caisse quotidien.", "category": "RIGUEUR", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q168", "description": "Zéro tolérance qualité.", "category": "RIGUEUR", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q169", "description": "Je coupe mon téléphone en repos.", "category": "ÉQUILIBRE", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q170", "description": "Je délègue.", "category": "ÉQUILIBRE", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q171", "description": "Vie perso préservée.", "category": "ÉQUILIBRE", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q172", "description": "Je sais dire non.", "category": "ÉQUILIBRE", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q173", "description": "Je prends mes congés.", "category": "ÉQUILIBRE", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q174", "description": "Je cloisonne.", "category": "ÉQUILIBRE", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q175", "description": "Je reste calme dans le chaos.", "category": "STRESS", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q176", "description": "Décision rapide sous stress.", "category": "STRESS", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q177", "description": "Je dors bien.", "category": "STRESS", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q178", "description": "Je ne crie pas.", "category": "STRESS", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q179", "description": "Toujours un plan B.", "category": "STRESS", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q180", "description": "Meilleur en crise.", "category": "STRESS", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q181", "description": "Je sais manipuler pour obtenir ce que je veux.", "category": "DARK_EMPATHY", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q182", "description": "J'utilise les émotions des autres.", "category": "DARK_EMPATHY", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q183", "description": "Je change de visage.", "category": "DARK_EMPATHY", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q184", "description": "Licencier ne me touche pas.", "category": "DARK_EMPATHY", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q185", "description": "Je garde des dossiers.", "category": "DARK_EMPATHY", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } },
            { "id": "Q186", "description": "Je mets la pression.", "category": "DARK_EMPATHY", "type": "DIMENSION", "echelle": { "0": "Non", "4": "Oui" } }
        ]
    },
    "PHASE4_HARDCORE": {
        "id": "PHASE4",
        "nom": "Dilemmes Moraux",
        "items": [
            { "id": "Q187", "description": "50€ trouvés.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Je garde.", "value": "A", "profile": "MERCENAIRE" }, { "label": "Pourboires.", "value": "B", "profile": "PROTECTEUR" }, { "label": "Caisse.", "value": "C", "profile": "RIGOUREUX" }, { "label": "Don.", "value": "D", "profile": "HUMBLE" }, { "label": "Achat resto.", "value": "E", "profile": "PRAGMATIQUE" }] },
            { "id": "Q188", "description": "70h sans paie sup ?", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Oui.", "value": "A", "profile": "RÉSILIENT" }, { "label": "Non.", "value": "B", "profile": "RIGOUREUX" }, { "label": "Si intéressement.", "value": "C", "profile": "STRATEGIQUE" }, { "label": "Illégal.", "value": "D", "profile": "AFFIRMÉ" }, { "label": "Temporaire.", "value": "E", "profile": "AMBITIEUX" }] },
            { "id": "Q189", "description": "Contrôle planning.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Faux planning.", "value": "A", "profile": "PIRATE" }, { "label": "Refus.", "value": "B", "profile": "AUTORITAIRE" }, { "label": "Je donne.", "value": "C", "profile": "PRAGMATIQUE" }, { "label": "Aveux.", "value": "D", "profile": "HUMBLE" }, { "label": "Négo.", "value": "E", "profile": "CAMÉLÉON" }] },
            { "id": "Q190", "description": "Ami fournisseur augmente prix.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "J'accepte.", "value": "A", "profile": "LOYAL" }, { "label": "Je change.", "value": "B", "profile": "FROID" }, { "label": "Négo.", "value": "C", "profile": "DIPLOMATE" }, { "label": "Pression.", "value": "D", "profile": "AUTORITAIRE" }, { "label": "Test autre.", "value": "E", "profile": "RADAR" }] },
            { "id": "Q191", "description": "Client riche ivre.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Je sers.", "value": "A", "profile": "MERCENAIRE" }, { "label": "Refus.", "value": "B", "profile": "RIGOUREUX" }, { "label": "Je sers + manger.", "value": "C", "profile": "DÉBROUILLARD" }, { "label": "Appel femme.", "value": "D", "profile": "CONCILIANT" }, { "label": "Dépend.", "value": "E", "profile": "ADAPTABLE" }] },
            { "id": "Q192", "description": "Dette jeu Chef.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Aide.", "value": "A", "profile": "SENSIBLE" }, { "label": "Non.", "value": "B", "profile": "AFFIRMÉ" }, { "label": "Au noir.", "value": "C", "profile": "OPPORTUNISTE" }, { "label": "Morale.", "value": "D", "profile": "PÉDAGOGUE" }, { "label": "Echange.", "value": "E", "profile": "COMMERCIAL" }] },
            { "id": "Q193", "description": "Accident enfant.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Je gueule.", "value": "A", "profile": "AUTORITAIRE" }, { "label": "Assurance.", "value": "B", "profile": "BUREAUCRATE" }, { "label": "Urgence médicale.", "value": "C", "profile": "LEADER" }, { "label": "Offert.", "value": "D", "profile": "CONCILIANT" }, { "label": "Adaptation.", "value": "E", "profile": "ADAPTABLE" }] },
            { "id": "Q194", "description": "Ancien volait.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Plainte.", "value": "A", "profile": "RIGOUREUX" }, { "label": "Sécurise.", "value": "B", "profile": "PRAGMATIQUE" }, { "label": "Traque.", "value": "C", "profile": "PIRATE" }, { "label": "Transparence.", "value": "D", "profile": "FRANC" }, { "label": "Levier.", "value": "E", "profile": "OPPORTUNISTE" }] },
            { "id": "Q195", "description": "Tricher pour sauver ?", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Jamais.", "value": "A", "profile": "LOYAL" }, { "label": "Toujours.", "value": "B", "profile": "PIRATE" }, { "label": "Risque ?", "value": "C", "profile": "STRATEGIQUE" }, { "label": "Discret.", "value": "D", "profile": "CAMÉLÉON" }, { "label": "Gain ?", "value": "E", "profile": "MERCENAIRE" }] },
            { "id": "Q196", "description": "Client roi ?", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Oui.", "value": "A", "profile": "COMMERCIAL" }, { "label": "Non.", "value": "B", "profile": "AUTORITAIRE" }, { "label": "Illusion.", "value": "C", "profile": "SHOWMAN" }, { "label": "Partenaire.", "value": "D", "profile": "DIPLOMATE" }, { "label": "Dépend.", "value": "E", "profile": "ADAPTABLE" }] },
            { "id": "Q197", "description": "Chantage influenceuse.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Je paie.", "value": "A", "profile": "PASSIF" }, { "label": "Expulsion.", "value": "B", "profile": "AUTORITAIRE" }, { "label": "Refus.", "value": "C", "profile": "AFFIRMÉ" }, { "label": "Remise.", "value": "D", "profile": "CONCILIANT" }, { "label": "Partenariat.", "value": "E", "profile": "COMMERCIAL" }] },
            { "id": "Q198", "description": "Panne frigo.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Cuisson.", "value": "A", "profile": "PIRATE" }, { "label": "Jeter.", "value": "B", "profile": "RIGOUREUX" }, { "label": "Tri.", "value": "C", "profile": "STRATEGIQUE" }, { "label": "Servir.", "value": "D", "profile": "PARASITE" }, { "label": "Revente.", "value": "E", "profile": "OPPORTUNISTE" }] },
            { "id": "Q199", "description": "Couple s'engueule.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "M'en fous.", "value": "A", "profile": "PASSIF" }, { "label": "Vire un.", "value": "B", "profile": "FROID" }, { "label": "Dehors.", "value": "C", "profile": "AFFIRMÉ" }, { "label": "Thérapie.", "value": "D", "profile": "CONFIDENT" }, { "label": "Gère.", "value": "E", "profile": "ADAPTABLE" }] },
            { "id": "Q200", "description": "Pot de vin.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Je prends.", "value": "A", "profile": "MERCENAIRE" }, { "label": "Refus.", "value": "B", "profile": "LOYAL" }, { "label": "Avoir.", "value": "C", "profile": "PRAGMATIQUE" }, { "label": "Patron.", "value": "D", "profile": "OBÉISSANT" }, { "label": "Test.", "value": "E", "profile": "OPPORTUNISTE" }] },
            { "id": "Q201", "description": "Faillite.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Risque tout.", "value": "A", "profile": "PIRATE" }, { "label": "Liquidation.", "value": "B", "profile": "RÉSILIENT" }, { "label": "Contrats.", "value": "C", "profile": "BUREAUCRATE" }, { "label": "Paralysie.", "value": "D", "profile": "SENSIBLE" }, { "label": "Repreneur.", "value": "E", "profile": "DÉBROUILLARD" }] },
            { "id": "Q202", "description": "Sabotage.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "J'accepte.", "value": "A", "profile": "MERCENAIRE" }, { "label": "Refus.", "value": "B", "profile": "LOYAL" }, { "label": "Info.", "value": "C", "profile": "RADAR" }, { "label": "Avocat.", "value": "D", "profile": "RIGOUREUX" }, { "label": "Double jeu.", "value": "E", "profile": "CAMÉLÉON" }] },
            { "id": "Q203", "description": "Recel.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Commission.", "value": "A", "profile": "PARASITE" }, { "label": "Police.", "value": "B", "profile": "RIGOUREUX" }, { "label": "Vire.", "value": "C", "profile": "PRAGMATIQUE" }, { "label": "Aide.", "value": "D", "profile": "PROTECTEUR" }, { "label": "Chantage.", "value": "E", "profile": "OPPORTUNISTE" }] },
            { "id": "Q204", "description": "Licencier ami.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Je fais.", "value": "A", "profile": "FROID" }, { "label": "Démission.", "value": "B", "profile": "LOYAL" }, { "label": "Aide.", "value": "C", "profile": "LEADER" }, { "label": "Ecrit.", "value": "D", "profile": "BUREAUCRATE" }, { "label": "Négo.", "value": "E", "profile": "DIPLOMATE" }] },
            { "id": "Q205", "description": "Bagarre.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Sépare.", "value": "A", "profile": "PIRATE" }, { "label": "Sécurité.", "value": "B", "profile": "PROTECTEUR" }, { "label": "Appel.", "value": "C", "profile": "OBÉISSANT" }, { "label": "Peur.", "value": "D", "profile": "SENSIBLE" }, { "label": "Pars.", "value": "E", "profile": "PARASITE" }] },
            { "id": "Q206", "description": "Regret.", "category": "DILEMME", "type": "SJT", "options": [{ "label": "Plus dur.", "value": "A", "profile": "AUTORITAIRE" }, { "label": "Plus humain.", "value": "B", "profile": "HUMBLE" }, { "label": "Équilibre.", "value": "C", "profile": "SAGE" }, { "label": "Risques.", "value": "D", "profile": "VISIONNAIRE" }, { "label": "Vitesse.", "value": "E", "profile": "AMBITIEUX" }] }
        ]
    },
    "PHASE_DARK_REALITY": {
        "id": "PHASE_DARK",
        "nom": "Gestion de Crise",
        "items": [
            { "id": "Q207", "description": "Déficit 3 mois.", "category": "Gestion de crise", "type": "SJT", "options": [{ "label": "Gel.", "value": "A", "profile": "PRAGMATIQUE" }, { "label": "Juridique.", "value": "B", "profile": "RIGOUREUX" }, { "label": "Coupe.", "value": "C", "profile": "AUTORITAIRE" }, { "label": "Négo.", "value": "D", "profile": "DIPLOMATE" }, { "label": "Cash.", "value": "E", "profile": "DÉBROUILLARD" }] },
            { "id": "Q208", "description": "Rumeur fermeture.", "category": "Gestion de crise", "type": "SJT", "options": [{ "label": "Transparence.", "value": "A", "profile": "FRANC" }, { "label": "Rassure.", "value": "B", "profile": "SHOWMAN" }, { "label": "Dose.", "value": "C", "profile": "CAMÉLÉON" }, { "label": "Froid.", "value": "D", "profile": "FROID" }, { "label": "Protège.", "value": "E", "profile": "PROTECTEUR" }] },
            { "id": "Q209", "description": "Redressement.", "category": "Gestion de crise", "type": "SJT", "options": [{ "label": "Restructure.", "value": "A", "profile": "FROID" }, { "label": "Audit.", "value": "B", "profile": "TECHNIQUE" }, { "label": "Ferme.", "value": "C", "profile": "STRATEGIQUE" }, { "label": "Collectif.", "value": "D", "profile": "MENEUR" }, { "label": "Low-cost.", "value": "E", "profile": "OPPORTUNISTE" }] },
            { "id": "Q210", "description": "Liquidation.", "category": "Gestion de crise", "type": "SJT", "options": [{ "label": "Sécurise.", "value": "A", "profile": "MERCENAIRE" }, { "label": "Admin.", "value": "B", "profile": "MÉTRONOME" }, { "label": "Accompagne.", "value": "C", "profile": "PROTECTEUR" }, { "label": "Discipline.", "value": "D", "profile": "EXIGEANT" }, { "label": "Clôture.", "value": "E", "profile": "COMMERCIAL" }] },
            { "id": "Q211", "description": "Turnover.", "category": "Management", "type": "SJT", "options": [{ "label": "Diagnostic.", "value": "A", "profile": "RADAR" }, { "label": "Durcis.", "value": "B", "profile": "EXIGEANT" }, { "label": "Protocole.", "value": "C", "profile": "BUREAUCRATE" }, { "label": "Parrainage.", "value": "D", "profile": "PÉDAGOGUE" }, { "label": "Remise en question.", "value": "E", "profile": "HUMBLE" }] },
            { "id": "Q212", "description": "Manager cassant.", "category": "Management", "type": "SJT", "options": [{ "label": "Ultimatum.", "value": "A", "profile": "AFFIRMÉ" }, { "label": "Double jeu.", "value": "B", "profile": "CAMÉLÉON" }, { "label": "Cadre.", "value": "C", "profile": "RIGOUREUX" }, { "label": "Vire.", "value": "D", "profile": "AUTORITAIRE" }, { "label": "Déplace.", "value": "E", "profile": "STRATEGIQUE" }] },
            { "id": "Q213", "description": "Harcèlement.", "category": "Management", "type": "SJT", "options": [{ "label": "Mise à pied.", "value": "A", "profile": "AUTORITAIRE" }, { "label": "Documente.", "value": "B", "profile": "RIGOUREUX" }, { "label": "Enquête.", "value": "C", "profile": "RADAR" }, { "label": "Protège.", "value": "D", "profile": "PROTECTEUR" }, { "label": "Mute.", "value": "E", "profile": "PRAGMATIQUE" }] },
            { "id": "Q214", "description": "Toxique essai.", "category": "Management", "type": "SJT", "options": [{ "label": "Fin.", "value": "A", "profile": "LEADER" }, { "label": "Dossier.", "value": "B", "profile": "BUREAUCRATE" }, { "label": "Recadre.", "value": "C", "profile": "AUTORITAIRE" }, { "label": "Chance.", "value": "D", "profile": "PÉDAGOGUE" }, { "label": "Garde.", "value": "E", "profile": "PRAGMATIQUE" }] },
            { "id": "Q215", "description": "Dénigrement.", "category": "Pouvoir", "type": "SJT", "options": [{ "label": "Confrontation.", "value": "A", "profile": "FRANC" }, { "label": "Licenciement.", "value": "B", "profile": "AUTORITAIRE" }, { "label": "Placard.", "value": "C", "profile": "BUREAUCRATE" }, { "label": "Appui.", "value": "D", "profile": "STRATEGIQUE" }, { "label": "Reconstruction.", "value": "E", "profile": "DIPLOMATE" }] },
            { "id": "Q216", "description": "Contestation.", "category": "Pouvoir", "type": "SJT", "options": [{ "label": "Reprends.", "value": "A", "profile": "AUTORITAIRE" }, { "label": "Laisse.", "value": "B", "profile": "SAGE" }, { "label": "Calme.", "value": "C", "profile": "DIPLOMATE" }, { "label": "Note.", "value": "D", "profile": "RIGOUREUX" }, { "label": "Isolement.", "value": "E", "profile": "LEADER" }] },
            { "id": "Q217", "description": "Baisse masse salariale.", "category": "Pouvoir", "type": "SJT", "options": [{ "label": "Vire gros.", "value": "A", "profile": "FROID" }, { "label": "Analyse.", "value": "B", "profile": "STRATEGIQUE" }, { "label": "Minimum.", "value": "C", "profile": "BUREAUCRATE" }, { "label": "Refuse.", "value": "D", "profile": "AFFIRMÉ" }, { "label": "Optimise.", "value": "E", "profile": "OPPORTUNISTE" }] },
            { "id": "Q218", "description": "Barman star toxique.", "category": "Talents", "type": "SJT", "options": [{ "label": "Ultimatum.", "value": "A", "profile": "AFFIRMÉ" }, { "label": "Vire.", "value": "B", "profile": "LEADER" }, { "label": "Clauses.", "value": "C", "profile": "RIGOUREUX" }, { "label": "Isole.", "value": "D", "profile": "PRAGMATIQUE" }, { "label": "Evolue.", "value": "E", "profile": "CONFIDENT" }] },
            { "id": "Q219", "description": "Conflit promotion.", "category": "Talents", "type": "SJT", "options": [{ "label": "Reçois.", "value": "A", "profile": "RADAR" }, { "label": "Rapport.", "value": "B", "profile": "BUREAUCRATE" }, { "label": "Teste.", "value": "C", "profile": "VISIONNAIRE" }, { "label": "Rappel.", "value": "D", "profile": "STABLE" }, { "label": "Médiation.", "value": "E", "profile": "CONCILIANT" }] },
            { "id": "Q220", "description": "Barman offre.", "category": "Talents", "type": "SJT", "options": [{ "label": "Rembourse.", "value": "A", "profile": "FRANC" }, { "label": "Vire.", "value": "B", "profile": "AUTORITAIRE" }, { "label": "Traçabilité.", "value": "C", "profile": "TECHNIQUE" }, { "label": "Budget.", "value": "D", "profile": "CRÉATIF" }, { "label": "Documente.", "value": "E", "profile": "CAMÉLÉON" }] },
            { "id": "Q221", "description": "Salaire bas.", "category": "Talents", "type": "SJT", "options": [{ "label": "Grille.", "value": "A", "profile": "BUREAUCRATE" }, { "label": "Primes.", "value": "B", "profile": "COMMERCIAL" }, { "label": "Avantages.", "value": "C", "profile": "CRÉATIF" }, { "label": "Honnêteté.", "value": "D", "profile": "FRANC" }, { "label": "Augmente meilleurs.", "value": "E", "profile": "OPPORTUNISTE" }] },
            { "id": "Q222", "description": "Pourboires.", "category": "Opérationnel", "type": "SJT", "options": [{ "label": "Commun.", "value": "A", "profile": "MÉTRONOME" }, { "label": "Mérite.", "value": "B", "profile": "EXIGEANT" }, { "label": "Transparent.", "value": "C", "profile": "VISIONNAIRE" }, { "label": "Analyse.", "value": "D", "profile": "TECHNIQUE" }, { "label": "Compromis.", "value": "E", "profile": "DIPLOMATE" }] },
            { "id": "Q223", "description": "Refus obéissance.", "category": "Opérationnel", "type": "SJT", "options": [{ "label": "Soutien.", "value": "A", "profile": "AUTORITAIRE" }, { "label": "Tranche.", "value": "B", "profile": "SAGE" }, { "label": "Après.", "value": "C", "profile": "OPERATIONNEL" }, { "label": "Réunion.", "value": "D", "profile": "RIGOUREUX" }, { "label": "Raison.", "value": "E", "profile": "ADAPTABLE" }] },
            { "id": "Q224", "description": "Neveu imposé.", "category": "Opérationnel", "type": "SJT", "options": [{ "label": "Cantonne.", "value": "A", "profile": "PRAGMATIQUE" }, { "label": "Refuse.", "value": "B", "profile": "AFFIRMÉ" }, { "label": "Forme.", "value": "C", "profile": "PÉDAGOGUE" }, { "label": "Définit.", "value": "D", "profile": "RIGOUREUX" }, { "label": "Accepte.", "value": "E", "profile": "CAMÉLÉON" }] },
            { "id": "Q225", "description": "Fermer midi.", "category": "Stratégie", "type": "SJT", "options": [{ "label": "Analyse.", "value": "A", "profile": "STRATEGIQUE" }, { "label": "Scénarios.", "value": "B", "profile": "TECHNIQUE" }, { "label": "Low-cost.", "value": "C", "profile": "CRÉATIF" }, { "label": "Ferme.", "value": "D", "profile": "PRAGMATIQUE" }, { "label": "Bats.", "value": "E", "profile": "RÉSILIENT" }] },
            { "id": "Q226", "description": "Offre procédure.", "category": "Stratégie", "type": "SJT", "options": [{ "label": "Signe.", "value": "A", "profile": "MERCENAIRE" }, { "label": "Refuse.", "value": "B", "profile": "AUTONOME" }, { "label": "Négocie.", "value": "C", "profile": "OPPORTUNISTE" }, { "label": "Accepte.", "value": "D", "profile": "BUREAUCRATE" }, { "label": "Contact.", "value": "E", "profile": "STRATEGIQUE" }] },
            { "id": "Q227", "description": "Directeur Régional.", "category": "Stratégie", "type": "SJT", "options": [{ "label": "Prends.", "value": "A", "profile": "AMBITIEUX" }, { "label": "Refuse.", "value": "B", "profile": "AUTONOME" }, { "label": "Garantie.", "value": "C", "profile": "STRATEGIQUE" }, { "label": "Audit.", "value": "D", "profile": "TECHNIQUE" }, { "label": "Equipes.", "value": "E", "profile": "LEADER" }] },
            { "id": "Q228", "description": "Virer Manager.", "category": "Stratégie", "type": "SJT", "options": [{ "label": "Accepte.", "value": "A", "profile": "PRAGMATIQUE" }, { "label": "Refuse.", "value": "B", "profile": "AFFIRMÉ" }, { "label": "Négocie.", "value": "C", "profile": "DIPLOMATE" }, { "label": "Motifs.", "value": "D", "profile": "RIGOUREUX" }, { "label": "Moi.", "value": "E", "profile": "MERCENAIRE" }] },
            { "id": "Q229", "description": "Panique.", "category": "Fin de cycle", "type": "SJT", "options": [{ "label": "Rassure.", "value": "A", "profile": "CAMÉLÉON" }, { "label": "Reprise.", "value": "B", "profile": "VISIONNAIRE" }, { "label": "Droits.", "value": "C", "profile": "RIGOUREUX" }, { "label": "Sauve.", "value": "D", "profile": "OPPORTUNISTE" }, { "label": "Reste.", "value": "E", "profile": "LOYAL" }] },
            { "id": "Q230", "description": "Falsification.", "category": "Fin de cycle", "type": "SJT", "options": [{ "label": "Refuse.", "value": "A", "profile": "LOYAL" }, { "label": "Exécute.", "value": "B", "profile": "SUIVEUR" }, { "label": "Alternative.", "value": "C", "profile": "STRATEGIQUE" }, { "label": "Ecrit.", "value": "D", "profile": "BUREAUCRATE" }, { "label": "Semblant.", "value": "E", "profile": "PIRATE" }] },
            { "id": "Q231", "description": "Carte Chef.", "category": "Fin de cycle", "type": "SJT", "options": [{ "label": "Equipe.", "value": "A", "profile": "MENEUR" }, { "label": "Impose.", "value": "B", "profile": "AUTORITAIRE" }, { "label": "Pars.", "value": "C", "profile": "FROID" }, { "label": "Consultant.", "value": "D", "profile": "TECHNIQUE" }, { "label": "Compromis.", "value": "E", "profile": "DIPLOMATE" }] },
            { "id": "Q232", "description": "Vol stock.", "category": "Fin de cycle", "type": "SJT", "options": [{ "label": "Licenciement.", "value": "A", "profile": "RIGOUREUX" }, { "label": "Vire.", "value": "B", "profile": "AUTORITAIRE" }, { "label": "Rembourse.", "value": "C", "profile": "PRAGMATIQUE" }, { "label": "Comprends.", "value": "D", "profile": "CONFIDENT" }, { "label": "Documente.", "value": "E", "profile": "RADAR" }] },
            { "id": "Q233", "description": "Etoilé difficulté.", "category": "Ambition", "type": "SJT", "options": [{ "label": "Fonce.", "value": "A", "profile": "AMBITIEUX" }, { "label": "Reste.", "value": "B", "profile": "SAGE" }, { "label": "Carte blanche.", "value": "C", "profile": "AUTONOME" }, { "label": "Audit.", "value": "D", "profile": "RIGOUREUX" }, { "label": "Clause.", "value": "E", "profile": "STRATEGIQUE" }] },
            { "id": "Q234", "description": "Start-up.", "category": "Ambition", "type": "SJT", "options": [{ "label": "Fonce.", "value": "A", "profile": "VISIONNAIRE" }, { "label": "Sécurité.", "value": "B", "profile": "STABLE" }, { "label": "Business.", "value": "C", "profile": "TECHNIQUE" }, { "label": "Cumule.", "value": "D", "profile": "DÉBROUILLARD" }, { "label": "Salaire.", "value": "E", "profile": "MERCENAIRE" }] },
            { "id": "Q235", "description": "Serveur Manager.", "category": "Ambition", "type": "SJT", "options": [{ "label": "Plan.", "value": "A", "profile": "PÉDAGOGUE" }, { "label": "Non.", "value": "B", "profile": "FRANC" }, { "label": "Teste.", "value": "C", "profile": "MENEUR" }, { "label": "Salle.", "value": "D", "profile": "PRAGMATIQUE" }, { "label": "Forme.", "value": "E", "profile": "PROTECTEUR" }] },
            { "id": "Q236", "description": "Groupe vs Liberté.", "category": "Ambition", "type": "SJT", "options": [{ "label": "Stabilité.", "value": "A", "profile": "STABLE" }, { "label": "Liberté.", "value": "B", "profile": "AUTONOME" }, { "label": "Négocie.", "value": "C", "profile": "COMMERCIAL" }, { "label": "Avantages.", "value": "D", "profile": "BUREAUCRATE" }, { "label": "Consulting.", "value": "E", "profile": "OPPORTUNISTE" }] },
            { "id": "Q237", "description": "Guerre chefs.", "category": "Arbitrage", "type": "SJT", "options": [{ "label": "Confrontation.", "value": "A", "profile": "MENEUR" }, { "label": "Zones.", "value": "B", "profile": "RIGOUREUX" }, { "label": "Compétition.", "value": "C", "profile": "EXIGEANT" }, { "label": "Ecoute.", "value": "D", "profile": "CONFIDENT" }, { "label": "Utile.", "value": "E", "profile": "FROID" }] },
            { "id": "Q238", "description": "Refus formation.", "category": "Arbitrage", "type": "SJT", "options": [{ "label": "Non négoc.", "value": "A", "profile": "AFFIRMÉ" }, { "label": "Sanction.", "value": "B", "profile": "AUTORITAIRE" }, { "label": "Prime.", "value": "C", "profile": "COMMERCIAL" }, { "label": "Autre.", "value": "D", "profile": "CONCILIANT" }, { "label": "Rôle.", "value": "E", "profile": "VISIONNAIRE" }] },
            { "id": "Q239", "description": "Caméras.", "category": "Arbitrage", "type": "SJT", "options": [{ "label": "Légal.", "value": "A", "profile": "RIGOUREUX" }, { "label": "Tout.", "value": "B", "profile": "AUTORITAIRE" }, { "label": "Rien.", "value": "C", "profile": "SAGE" }, { "label": "Risques.", "value": "D", "profile": "STRATEGIQUE" }, { "label": "Salle.", "value": "E", "profile": "ADAPTABLE" }] },
            { "id": "Q240", "description": "Conseil.", "category": "Vision", "type": "SJT", "options": [{ "label": "Confiance.", "value": "A", "profile": "SOLITAIRE" }, { "label": "Equipe.", "value": "B", "profile": "PROTECTEUR" }, { "label": "Chiffres.", "value": "C", "profile": "TECHNIQUE" }, { "label": "Juste.", "value": "D", "profile": "SAGE" }, { "label": "Innove.", "value": "E", "profile": "CRÉATIF" }] }
        ]
    }
};

// 3. Transformation similar to previous logic
const phase3Formatted = NEW_DATA_RAW.PHASE3_DIMENSIONS.items.map(q => {
    return {
        id: q.id,
        description: q.description,
        category: q.category,
        type: "DIMENSION",
        pole_faible: q.echelle["0"] || "Non",
        pole_fort: q.echelle["4"] || "Oui"
    };
});

const phase4Formatted = NEW_DATA_RAW.PHASE4_HARDCORE.items;
const phaseDarkFormatted = NEW_DATA_RAW.PHASE_DARK_REALITY.items;

const FINAL_DATA = [
    phase2Data,
    {
        section: "Dimensions - Soft Skills & Valeurs",
        id: "PHASE3",
        items: phase3Formatted
    },
    {
        section: "Hardcore - Dilemmes Moraux",
        id: "PHASE4",
        items: phase4Formatted
    },
    {
        section: "Gestion de Crise - Dark Reality",
        id: "PHASE_DARK",
        items: phaseDarkFormatted
    }
];

const output = `export const DIRECTOR_SENTINEL_DATA = ${JSON.stringify(FINAL_DATA, null, 4)};\n`;

fs.writeFileSync(`${BASE_PATH}/src/data/director_sentinel_data.js`, output);
console.log("SUCCESS: Director Sentinel Data FINALIZED (Part 1 + Part 2 merged).");
