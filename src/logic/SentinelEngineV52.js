/**
 * =============================================================================
 * MOTEUR DE SCORING - TEST DE PERSONNALITÉ RESTAURATION v5.2
 * =============================================================================
 * Calcule le profil complet d'un candidat à partir de ses réponses (Q061-Q240).
 * 
 * Auteur: Mehdi - Projet Test Personnalité Restauration
 * Date: 2026-02-15
 * =============================================================================
 */

// =============================================================================
// 1. DONNÉES DE RÉFÉRENCE
// =============================================================================

// Coefficients par phase
const PHASE_COEFFICIENTS = {
    PHASE2: 1.0,    // Q061-Q144 (Leadership SJT)
    PHASE4: 1.5,    // Q187-Q206 (Hardcore)
    DARK: 2.0,    // Q207-Q240 (Dark Reality)
};

function getPhase(qid) {
    const num = parseInt(qid.substring(1));
    if (num >= 61 && num <= 144) return "PHASE2";
    if (num >= 187 && num <= 206) return "PHASE4";
    if (num >= 207 && num <= 240) return "DARK";
    return null;
}

// Mapping complet : question SJT → {option: facette}
const SJT_MAPPING = {
    Q061: { A: "MERCENAIRE", B: "LEADER", C: "PROTECTEUR", D: "BUREAUCRATE", E: "STRATEGIQUE" },
    Q062: { A: "PIRATE", B: "SAGE", C: "RIGOUREUX", D: "STRATEGIQUE", E: "OPPORTUNISTE" },
    Q063: { A: "PRAGMATIQUE", B: "AUTORITAIRE", C: "RIGOUREUX", D: "FLEXIBLE", E: "CAMÉLÉON" },
    Q064: { A: "HUMBLE", B: "STRATEGIQUE", C: "PIRATE", D: "BUREAUCRATE", E: "OPPORTUNISTE" },
    Q065: { A: "CONCILIANT", B: "BUREAUCRATE", C: "AUTORITAIRE", D: "CRÉATIF", E: "CAMÉLÉON" },
    Q066: { A: "LEADER", B: "PARASITE", C: "PASSIF", D: "BUREAUCRATE", E: "VISIONNAIRE" },
    Q067: { A: "SENSIBLE", B: "FRANC", C: "AUTORITAIRE", D: "FROID", E: "PÉDAGOGUE" },
    Q068: { A: "FROID", B: "BUREAUCRATE", C: "LEADER", D: "SENSIBLE", E: "PRAGMATIQUE" },
    Q069: { A: "MERCENAIRE", B: "PROTECTEUR", C: "MÉTRONOME", D: "MENEUR", E: "CAMÉLÉON" },
    Q070: { A: "AUTORITAIRE", B: "STRATEGIQUE", C: "FLEXIBLE", D: "BUREAUCRATE", E: "PRAGMATIQUE" },
    Q071: { A: "STRATEGIQUE", B: "AUTORITAIRE", C: "FRANC", D: "OBÉ ISSANT", E: "RADAR" },
    Q072: { A: "PIRATE", B: "PASSIF", C: "PRAGMATIQUE", D: "LENT", E: "VISIONNAIRE" },
    Q073: { A: "FLEXIBLE", B: "RADAR", C: "RIGOUREUX", D: "STRATEGIQUE", E: "PRAGMATIQUE" },
    Q074: { A: "PROTECTEUR", B: "AFFIRMÉ", C: "AUTORITAIRE", D: "FROID", E: "CAMÉLÉON" },
    Q075: { A: "DIPLOMATE", B: "PIRATE", C: "PASSIF", D: "BUREAUCRATE", E: "RADAR" },
    Q076: { A: "MERCENAIRE", B: "SENSIBLE", C: "STRATEGIQUE", D: "FROID", E: "PRAGMATIQUE" },
    Q077: { A: "MERCENAIRE", B: "RIGOUREUX", C: "CONCILIANT", D: "AFFIRMÉ", E: "ADAPTABLE" },
    Q078: { A: "AUTORITAIRE", B: "PÉDAGOGUE", C: "SAGE", D: "BUREAUCRATE", E: "TECHNIQUE" },
    Q079: { A: "AFFIRMÉ", B: "AUTORITAIRE", C: "PASSIF", D: "OBÉISSANT", E: "VISIONNAIRE" },
    Q080: { A: "MERCENAIRE", B: "PASSIF", C: "PROTECTEUR", D: "RIGOUREUX", E: "DÉBROUILLARD" },
    Q081: { A: "PARASITE", B: "PASSIF", C: "BUREAUCRATE", D: "OPERATIONNEL", E: "PRAGMATIQUE" },
    Q082: { A: "DIVA", B: "STRATEGIQUE", C: "SAGE", D: "RIGOUREUX", E: "RADAR" },
    Q083: { A: "PRAGMATIQUE", B: "PIRATE", C: "EXIGEANT", D: "RIGOUREUX", E: "CRÉATIF" },
    Q084: { A: "AUTORITAIRE", B: "FLEXIBLE", C: "OPERATIONNEL", D: "RIGOUREUX", E: "ADAPTABLE" },
    Q085: { A: "STABLE", B: "PASSIF", C: "AUTORITAIRE", D: "MENEUR", E: "DIPLOMATE" },
    Q086: { A: "RIGOUREUX", B: "MENEUR", C: "SENSIBLE", D: "FROID", E: "OPPORTUNISTE" },
    Q087: { A: "STRATEGIQUE", B: "FROID", C: "CONCILIANT", D: "BUREAUCRATE", E: "COMMERCIAL" },
    Q088: { A: "MERCENAIRE", B: "STABLE", C: "COMMERCIAL", D: "SUIVEUR", E: "SHOWMAN" },
    Q089: { A: "PIRATE", B: "PASSIF", C: "AFFIRMÉ", D: "RIGOUREUX", E: "COMMERCIAL" },
    Q090: { A: "PIRATE", B: "SHOWMAN", C: "BUREAUCRATE", D: "HUMBLE", E: "ADAPTABLE" },
    Q091: { A: "PRAGMATIQUE", B: "FROID", C: "PROTECTEUR", D: "BUREAUCRATE", E: "CRÉATIF" },
    Q092: { A: "PIRATE", B: "STRATEGIQUE", C: "BUREAUCRATE", D: "OPERATIONNEL", E: "AUTORITAIRE" },
    Q093: { A: "OPPORTUNISTE", B: "FRANC", C: "RIGOUREUX", D: "PRAGMATIQUE", E: "COMMERCIAL" },
    Q094: { A: "AUTORITAIRE", B: "OPERATIONNEL", C: "FLEXIBLE", D: "RIGOUREUX", E: "RADAR" },
    Q095: { A: "COMMERCIAL", B: "FRANC", C: "CONCILIANT", D: "BUREAUCRATE", E: "OPPORTUNISTE" },
    Q096: { A: "CONCILIANT", B: "AUTORITAIRE", C: "OPERATIONNEL", D: "BUREAUCRATE", E: "PRAGMATIQUE" },
    Q097: { A: "PRAGMATIQUE", B: "RIGOUREUX", C: "AUTORITAIRE", D: "SENSIBLE", E: "SHOWMAN" },
    Q098: { A: "MERCENAIRE", B: "SAGE", C: "SUIVEUR", D: "STRATEGIQUE", E: "VISIONNAIRE" },
    Q099: { A: "OPPORTUNISTE", B: "EXIGEANT", C: "LOYAL", D: "BUREAUCRATE", E: "PRAGMATIQUE" },
    Q100: { A: "BUREAUCRATE", B: "FROID", C: "COMMERCIAL", D: "SENSIBLE", E: "STRATEGIQUE" },
    Q101: { A: "AUTONOME", B: "RADAR", C: "AUTORITAIRE", D: "BUREAUCRATE", E: "ADAPTABLE" },
    Q102: { A: "AMBITIEUX", B: "CONCILIANT", C: "STABLE", D: "STRATEGIQUE", E: "VISIONNAIRE" },
    Q103: { A: "COMMERCIAL", B: "RIGOUREUX", C: "DÉBUTANT", D: "SUIVEUR", E: "OPPORTUNISTE" },
    Q104: { A: "MERCENAIRE", B: "STRATEGIQUE", C: "MÉTRONOME", D: "PASSIF", E: "COMMERCIAL" },
    Q105: { A: "SHOWMAN", B: "MÉTRONOME", C: "FROID", D: "PÉDAGOGUE", E: "CAMÉLÉON" },
    Q106: { A: "DÉBROUILLARD", B: "OPPORTUNISTE", C: "LOYAL", D: "MÉTRONOME", E: "CRÉATIF" },
    Q107: { A: "PASSIF", B: "AUTORITAIRE", C: "TECHNIQUE", D: "BUREAUCRATE", E: "SHOWMAN" },
    Q108: { A: "PIRATE", B: "FRANC", C: "CONCILIANT", D: "RIGOUREUX", E: "RADAR" },
    Q109: { A: "AMBITIEUX", B: "SENSIBLE", C: "STRATEGIQUE", D: "RIGOUREUX", E: "DÉBROUILLARD" },
    Q110: { A: "SHOWMAN", B: "EXIGEANT", C: "BUREAUCRATE", D: "AFFIRMÉ", E: "VISIONNAIRE" },
    Q111: { A: "BUREAUCRATE", B: "PASSIF", C: "OPPORTUNISTE", D: "DIPLOMATE", E: "DÉBROUILLARD" },
    Q112: { A: "STRATEGIQUE", B: "MERCENAIRE", C: "BUREAUCRATE", D: "FLEXIBLE", E: "AMBITIEUX" },
    Q113: { A: "COMMERCIAL", B: "SOLITAIRE", C: "ADAPTABLE", D: "RIGOUREUX", E: "VISIONNAIRE" },
    Q114: { A: "AUTORITAIRE", B: "AFFIRMÉ", C: "RIGOUREUX", D: "FLEXIBLE", E: "ADAPTABLE" },
    Q115: { A: "OBÉISSANT", B: "RIGOUREUX", C: "DIVA", D: "DÉBROUILLARD", E: "SHOWMAN" },
    Q116: { A: "EXIGEANT", B: "MERCENAIRE", C: "AUTONOME", D: "BUREAUCRATE", E: "OPPORTUNISTE" },
    Q117: { A: "SUIVEUR", B: "STRATEGIQUE", C: "PRAGMATIQUE", D: "EXIGEANT", E: "CRÉATIF" },
    Q118: { A: "AUTORITAIRE", B: "TECHNIQUE", C: "SENSIBLE", D: "MÉTRONOME", E: "OPPORTUNISTE" },
    Q119: { A: "AUTORITAIRE", B: "BUREAUCRATE", C: "DIPLOMATE", D: "CONCILIANT", E: "ADAPTABLE" },
    Q120: { A: "PIRATE", B: "RADAR", C: "AUTORITAIRE", D: "RIGOUREUX", E: "CAMÉLÉON" },
    Q121: { A: "PIRATE", B: "STRATEGIQUE", C: "SENSIBLE", D: "BUREAUCRATE", E: "SHOWMAN" },
    Q122: { A: "BUREAUCRATE", B: "SENSIBLE", C: "PIRATE", D: "AFFIRMÉ", E: "COMMERCIAL" },
    Q123: { A: "DIPLOMATE", B: "FRANC", C: "SENSIBLE", D: "RIGOUREUX", E: "CAMÉLÉON" },
    Q124: { A: "FROID", B: "CONFIDENT", C: "PROTECTEUR", D: "RIGOUREUX", E: "OPERATIONNEL" },
    Q125: { A: "COMMERCIAL", B: "STABLE", C: "AUTORITAIRE", D: "TECHNIQUE", E: "VISIONNAIRE" },
    Q126: { A: "MÉTRONOME", B: "LEADER", C: "FLEXIBLE", D: "BUREAUCRATE", E: "PÉDAGOGUE" },
    Q127: { A: "DÉBROUILLARD", B: "PIRATE", C: "BUREAUCRATE", D: "EXIGEANT", E: "PRAGMATIQUE" },
    Q128: { A: "BUREAUCRATE", B: "AUTORITAIRE", C: "FRANC", D: "SAGE", E: "RADAR" },
    Q129: { A: "SHOWMAN", B: "OPERATIONNEL", C: "MERCENAIRE", D: "RIGOUREUX", E: "CRÉATIF" },
    Q130: { A: "MENEUR", B: "PIRATE", C: "OBÉISSANT", D: "LENT", E: "COMMERCIAL" },
    Q131: { A: "OPPORTUNISTE", B: "PRAGMATIQUE", C: "TECHNIQUE", D: "LENT", E: "DÉBROUILLARD" },
    Q132: { A: "AUTORITAIRE", B: "CONCILIANT", C: "STRATEGIQUE", D: "BUREAUCRATE", E: "OPPORTUNISTE" },
    Q133: { A: "MERCENAIRE", B: "EXIGEANT", C: "SOLITAIRE", D: "RIGOUREUX", E: "VISIONNAIRE" },
    Q134: { A: "PARASITE", B: "FRANC", C: "DIVA", D: "SENSIBLE", E: "RADAR" },
    Q135: { A: "DIVA", B: "DIPLOMATE", C: "SENSIBLE", D: "MERCENAIRE", E: "COMMERCIAL" },
    Q136: { A: "OPPORTUNISTE", B: "EXIGEANT", C: "PRAGMATIQUE", D: "OPERATIONNEL", E: "VISIONNAIRE" },
    Q137: { A: "EXIGEANT", B: "FLEXIBLE", C: "AUTORITAIRE", D: "DIPLOMATE", E: "ADAPTABLE" },
    Q138: { A: "AMBITIEUX", B: "DIPLOMATE", C: "SENSIBLE", D: "BUREAUCRATE", E: "CRÉATIF" },
    Q139: { A: "PIRATE", B: "STRATEGIQUE", C: "RIGOUREUX", D: "PROTECTEUR", E: "DÉBROUILLARD" },
    Q140: { A: "AUTORITAIRE", B: "MENEUR", C: "PASSIF", D: "BUREAUCRATE", E: "RADAR" },
    Q141: { A: "PIRATE", B: "PROTECTEUR", C: "CONCILIANT", D: "BUREAUCRATE", E: "AFFIRMÉ" },
    Q142: { A: "PIRATE", B: "LOYAL", C: "STRATEGIQUE", D: "RIGOUREUX", E: "OPPORTUNISTE" },
    Q143: { A: "PRAGMATIQUE", B: "RIGOUREUX", C: "AUTORITAIRE", D: "ADAPTABLE", E: "DÉBROUILLARD" },
    Q144: { A: "PROTECTEUR", B: "EXIGEANT", C: "AMBITIEUX", D: "STRATEGIQUE", E: "FROID" },
    Q187: { A: "MERCENAIRE", B: "PROTECTEUR", C: "RIGOUREUX", D: "HUMBLE", E: "PRAGMATIQUE" },
    Q188: { A: "RÉSILIENT", B: "RIGOUREUX", C: "STRATEGIQUE", D: "AFFIRMÉ", E: "AMBITIEUX" },
    Q189: { A: "PIRATE", B: "AUTORITAIRE", C: "PRAGMATIQUE", D: "HUMBLE", E: "CAMÉLÉON" },
    Q190: { A: "LOYAL", B: "FROID", C: "DIPLOMATE", D: "AUTORITAIRE", E: "RADAR" },
    Q191: { A: "MERCENAIRE", B: "RIGOUREUX", C: "DÉBROUILLARD", D: "CONCILIANT", E: "ADAPTABLE" },
    Q192: { A: "SENSIBLE", B: "AFFIRMÉ", C: "OPPORTUNISTE", D: "PÉDAGOGUE", E: "COMMERCIAL" },
    Q193: { A: "AUTORITAIRE", B: "BUREAUCRATE", C: "LEADER", D: "CONCILIANT", E: "ADAPTABLE" },
    Q194: { A: "RIGOUREUX", B: "PRAGMATIQUE", C: "PIRATE", D: "FRANC", E: "OPPORTUNISTE" },
    Q195: { A: "LOYAL", B: "PIRATE", C: "STRATEGIQUE", D: "CAMÉLÉON", E: "MERCENAIRE" },
    Q196: { A: "COMMERCIAL", B: "AUTORITAIRE", C: "SHOWMAN", D: "DIPLOMATE", E: "ADAPTABLE" },
    Q197: { A: "PASSIF", B: "AUTORITAIRE", C: "AFFIRMÉ", D: "CONCILIANT", E: "COMMERCIAL" },
    Q198: { A: "PIRATE", B: "RIGOUREUX", C: "STRATEGIQUE", D: "PARASITE", E: "OPPORTUNISTE" },
    Q199: { A: "PASSIF", B: "FROID", C: "AFFIRMÉ", D: "CONFIDENT", E: "ADAPTABLE" },
    Q200: { A: "MERCENAIRE", B: "LOYAL", C: "PRAGMATIQUE", D: "OBÉISSANT", E: "OPPORTUNISTE" },
    Q201: { A: "PIRATE", B: "RÉSILIENT", C: "BUREAUCRATE", D: "SENSIBLE", E: "DÉBROUILLARD" },
    Q202: { A: "MERCENAIRE", B: "LOYAL", C: "RADAR", D: "RIGOUREUX", E: "CAMÉLÉON" },
    Q203: { A: "PARASITE", B: "RIGOUREUX", C: "PRAGMATIQUE", D: "PROTECTEUR", E: "OPPORTUNISTE" },
    Q204: { A: "FROID", B: "LOYAL", C: "LEADER", D: "BUREAUCRATE", E: "DIPLOMATE" },
    Q205: { A: "PIRATE", B: "PROTECTEUR", C: "OBÉISSANT", D: "SENSIBLE", E: "PARASITE" },
    Q206: { A: "AUTORITAIRE", B: "HUMBLE", C: "SAGE", D: "VISIONNAIRE", E: "AMBITIEUX" },
    Q207: { A: "PRAGMATIQUE", B: "RIGOUREUX", C: "AUTORITAIRE", D: "DIPLOMATE", E: "DÉBROUILLARD" },
    Q208: { A: "FRANC", B: "SHOWMAN", C: "CAMÉLÉON", D: "FROID", E: "PROTECTEUR" },
    Q209: { A: "FROID", B: "TECHNIQUE", C: "STRATEGIQUE", D: "MENEUR", E: "OPPORTUNISTE" },
    Q210: { A: "MERCENAIRE", B: "MÉTRONOME", C: "PROTECTEUR", D: "EXIGEANT", E: "COMMERCIAL" },
    Q211: { A: "RADAR", B: "EXIGEANT", C: "BUREAUCRATE", D: "PÉDAGOGUE", E: "HUMBLE" },
    Q212: { A: "AFFIRMÉ", B: "CAMÉLÉON", C: "RIGOUREUX", D: "AUTORITAIRE", E: "STRATEGIQUE" },
    Q213: { A: "AUTORITAIRE", B: "RIGOUREUX", C: "RADAR", D: "PROTECTEUR", E: "PRAGMATIQUE" },
    Q214: { A: "LEADER", B: "BUREAUCRATE", C: "AUTORITAIRE", D: "PÉDAGOGUE", E: "PRAGMATIQUE" },
    Q215: { A: "FRANC", B: "AUTORITAIRE", C: "BUREAUCRATE", D: "STRATEGIQUE", E: "DIPLOMATE" },
    Q216: { A: "AUTORITAIRE", B: "SAGE", C: "DIPLOMATE", D: "RIGOUREUX", E: "LEADER" },
    Q217: { A: "FROID", B: "STRATEGIQUE", C: "BUREAUCRATE", D: "AFFIRMÉ", E: "OPPORTUNISTE" },
    Q218: { A: "AFFIRMÉ", B: "LEADER", C: "RIGOUREUX", D: "PRAGMATIQUE", E: "CONFIDENT" },
    Q219: { A: "RADAR", B: "BUREAUCRATE", C: "VISIONNAIRE", D: "STABLE", E: "CONCILIANT" },
    Q220: { A: "FRANC", B: "AUTORITAIRE", C: "TECHNIQUE", D: "CRÉATIF", E: "CAMÉLÉON" },
    Q221: { A: "BUREAUCRATE", B: "COMMERCIAL", C: "CRÉATIF", D: "FRANC", E: "OPPORTUNISTE" },
    Q222: { A: "MÉTRONOME", B: "EXIGEANT", C: "VISIONNAIRE", D: "TECHNIQUE", E: "DIPLOMATE" },
    Q223: { A: "AUTORITAIRE", B: "SAGE", C: "OPERATIONNEL", D: "RIGOUREUX", E: "ADAPTABLE" },
    Q224: { A: "PRAGMATIQUE", B: "AFFIRMÉ", C: "PÉDAGOGUE", D: "RIGOUREUX", E: "CAMÉLÉON" },
    Q225: { A: "STRATEGIQUE", B: "TECHNIQUE", C: "CRÉATIF", D: "PRAGMATIQUE", E: "RÉSILIENT" },
    Q226: { A: "MERCENAIRE", B: "AUTONOME", C: "OPPORTUNISTE", D: "RIGOUREUX", E: "STRATEGIQUE" },
    Q227: { A: "AMBITIEUX", B: "AUTONOME", C: "STRATEGIQUE", D: "TECHNIQUE", E: "LEADER" },
    Q228: { A: "PRAGMATIQUE", B: "AFFIRMÉ", C: "DIPLOMATE", D: "RIGOUREUX", E: "MERCENAIRE" },
    Q229: { A: "CAMÉLÉON", B: "VISIONNAIRE", C: "RIGOUREUX", D: "OPPORTUNISTE", E: "LOYAL" },
    Q230: { A: "LOYAL", B: "SUIVEUR", C: "STRATEGIQUE", D: "BUREAUCRATE", E: "PIRATE" },
    Q231: { A: "MENEUR", B: "AUTORITAIRE", C: "FROID", D: "TECHNIQUE", E: "DIPLOMATE" },
    Q232: { A: "RIGOUREUX", B: "AUTORITAIRE", C: "PRAGMATIQUE", D: "CONFIDENT", E: "RADAR" },
    Q233: { A: "AMBITIEUX", B: "SAGE", C: "AUTONOME", D: "RIGOUREUX", E: "STRATEGIQUE" },
    Q234: { A: "VISIONNAIRE", B: "STABLE", C: "TECHNIQUE", D: "DÉBROUILLARD", E: "MERCENAIRE" },
    Q235: { A: "PÉDAGOGUE", B: "FRANC", C: "MENEUR", D: "PRAGMATIQUE", E: "PROTECTEUR" },
    Q236: { A: "STABLE", B: "AUTONOME", C: "COMMERCIAL", D: "BUREAUCRATE", E: "OPPORTUNISTE" },
    Q237: { A: "MENEUR", B: "RIGOUREUX", C: "EXIGEANT", D: "CONFIDENT", E: "FROID" },
    Q238: { A: "AFFIRMÉ", B: "AUTORITAIRE", C: "COMMERCIAL", D: "CONCILIANT", E: "VISIONNAIRE" },
    Q239: { A: "RIGOUREUX", B: "AUTORITAIRE", C: "SAGE", D: "STRATEGIQUE", E: "ADAPTABLE" },
    Q240: { A: "SOLITAIRE", B: "PROTECTEUR", C: "TECHNIQUE", D: "SAGE", E: "CRÉATIF" },
};

// Questions par dimension (Phase 3)
const DIMENSION_QUESTIONS = {
    INFLUENCE: ["Q145", "Q146", "Q147", "Q148", "Q149", "Q150"],
    CONSIDÉRATION: ["Q151", "Q152", "Q153", "Q154", "Q155", "Q156"],
    CRÉATIVITÉ: ["Q157", "Q158", "Q159", "Q160", "Q161", "Q162"],
    RIGUEUR: ["Q163", "Q164", "Q165", "Q166", "Q167", "Q168"],
    ÉQUILIBRE: ["Q169", "Q170", "Q171", "Q172", "Q173", "Q174"],
    STRESS: ["Q175", "Q176", "Q177", "Q178", "Q179", "Q180"],
    DARK_EMPATHY: ["Q181", "Q182", "Q183", "Q184", "Q185", "Q186"],
};

// Conversion dimension → facettes (score haut = moyenne > 2.5, score bas = moyenne < 1.5)
const DIMENSION_TO_FACETTES = {
    INFLUENCE: {
        score_haut: { MENEUR: 3, SHOWMAN: 2, LEADER: 2, COMMERCIAL: 1 },
        score_bas: { SUIVEUR: 3, PASSIF: 2, OBÉISSANT: 1 },
    },
    CONSIDÉRATION: {
        score_haut: { PROTECTEUR: 3, SENSIBLE: 2, CONFIDENT: 2, HUMBLE: 1 },
        score_bas: { FROID: 3, MERCENAIRE: 2, AUTORITAIRE: 1 },
    },
    CRÉATIVITÉ: {
        score_haut: { CRÉATIF: 3, VISIONNAIRE: 2, DÉBROUILLARD: 2, ADAPTABLE: 1 },
        score_bas: { MÉTRONOME: 3, STABLE: 2, LENT: 1 },
    },
    RIGUEUR: {
        score_haut: { RIGOUREUX: 3, EXIGEANT: 2, TECHNIQUE: 2, MÉTRONOME: 1 },
        score_bas: { FLEXIBLE: 3, PIRATE: 2, DÉBROUILLARD: 1 },
    },
    ÉQUILIBRE: {
        score_haut: { SAGE: 3, AUTONOME: 2, STABLE: 1 },
        score_bas: { RÉSILIENT: 2, AMBITIEUX: 2, MERCENAIRE: 1 },
    },
    STRESS: {
        score_haut: { RÉSILIENT: 3, OPERATIONNEL: 2, LEADER: 2, PRAGMATIQUE: 1 },
        score_bas: { SENSIBLE: 3, PASSIF: 2, DÉBUTANT: 1 },
    },
    DARK_EMPATHY: {
        score_haut: { CAMÉLÉON: 3, OPPORTUNISTE: 2, FROID: 2, MERCENAIRE: 1 },
        score_bas: { PROTECTEUR: 3, LOYAL: 2, HUMBLE: 2, SENSIBLE: 1 },
    },
};

// Macro-profils : nom → {facettes, poids}
const MACRO_PROFILS = {
    COMMANDANT: {
        facettes: ["LEADER", "AUTORITAIRE", "MENEUR", "AFFIRMÉ", "AMBITIEUX"],
        poids: [3, 2, 3, 2, 2]
    },
    STRATÈGE: {
        facettes: ["STRATEGIQUE", "RADAR", "VISIONNAIRE", "TECHNIQUE", "CRÉATIF"],
        poids: [3, 2, 3, 2, 2]
    },
    OPÉRATEUR: {
        facettes: ["OPERATIONNEL", "PRAGMATIQUE", "DÉBROUILLARD", "RÉSILIENT", "AUTONOME"],
        poids: [3, 2, 3, 2, 2]
    },
    GARDIEN: {
        facettes: ["RIGOUREUX", "BUREAUCRATE", "MÉTRONOME", "OBÉISSANT", "EXIGEANT"],
        poids: [3, 2, 2, 1, 2]
    },
    HUMAIN: {
        facettes: ["PROTECTEUR", "SENSIBLE", "CONFIDENT", "PÉDAGOGUE", "HUMBLE"],
        poids: [3, 2, 2, 3, 2]
    },
    LOUP: {
        facettes: ["MERCENAIRE", "OPPORTUNISTE", "PIRATE", "PARASITE", "DIVA"],
        poids: [3, 2, 3, 3, 2]
    },
    CAMÉLÉON: {
        facettes: ["CAMÉLÉON", "ADAPTABLE", "FLEXIBLE", "COMMERCIAL", "SHOWMAN"],
        poids: [3, 2, 2, 2, 3]
    },
    ANCIEN: {
        facettes: ["SAGE", "LOYAL", "STABLE", "CONCILIANT", "DIPLOMATE", "FRANC"],
        poids: [3, 2, 2, 1, 2, 2]
    },
    OMBRE: {
        facettes: ["FROID", "SOLITAIRE", "PASSIF", "LENT", "SUIVEUR", "DÉBUTANT"],
        poids: [2, 2, 3, 3, 2, 3]
    },
};

// Matching Macro-Profil → Structure idéale
const STRUCTURES_IDEALES = {
    COMMANDANT: "CHAÎNE / GROS VOLUME / BRASSERIE D'ENVOI",
    STRATÈGE: "GROUPE HÔTELIER / DIRECTION RÉGIONALE / DÉVELOPPEMENT",
    OPÉRATEUR: "BISTROT / RESTAURANT SAISONNIER / OUVERTURE",
    GARDIEN: "FRANCHISE / RESTAURATION COLLECTIVE / ADMINISTRATION",
    HUMAIN: "RESTAURANT FAMILIAL / CONCEPT ÉTHIQUE / ASSOCIATION",
    LOUP: "NIGHT-CLUB / ÉTABLISSEMENT DE PLAGE / GESTION DE CRISE",
    CAMÉLÉON: "ÉVÉNEMENTIEL / TRAITEUR / LIEU TENDANCE",
    ANCIEN: "MAISON TRADITIONNELLE / INSTITUTION / GASTRONOMIQUE",
    OMBRE: "SECOND DE DIRECTION / POSTE ADMINISTRATIF / BACK OFFICE",
};

// =============================================================================
// 2. MOTEUR DE CALCUL
// =============================================================================

export function calculateProfile(responses) {
    /**
     * Calcule le profil complet d'un candidat.
     * 
     * @param {Object} responses - Réponses du candidat
     *   - Questions SJT (Q061-Q144, Q187-Q240): valeur "A" à "E"
     *   - Questions Dimensions (Q145-Q186): valeur 0 à 4 (number)
     * 
     * @returns {Object} Profil complet du candidat
     */

    // ─── ÉTAPE 1 : Scores bruts SJT ───
    const scores_bruts = {};
    const questions_repondues = { sjt: 0, dimensions: 0 };

    for (const [qid, answer] of Object.entries(responses)) {
        // Questions SJT
        if (SJT_MAPPING[qid]) {
            const phase = getPhase(qid);
            if (!phase) continue;

            const coef = PHASE_COEFFICIENTS[phase];
            const answerKey = String(answer).toUpperCase();
            const facette = SJT_MAPPING[qid][answerKey];

            if (facette) {
                scores_bruts[facette] = (scores_bruts[facette] || 0) + (1.0 * coef);
                questions_repondues.sjt++;
            }
        }
    }

    // ─── ÉTAPE 2 : Scores Dimensions → Facettes ───
    const dimension_scores = {};

    for (const [dim_name, questions] of Object.entries(DIMENSION_QUESTIONS)) {
        const values = [];

        for (const qid of questions) {
            if (qid in responses) {
                const val = responses[qid];
                if (typeof val === 'number' && val >= 0 && val <= 4) {
                    values.push(val);
                    questions_repondues.dimensions++;
                }
            }
        }

        if (values.length === 0) {
            dimension_scores[dim_name] = null;
            continue;
        }

        const score_moyen = values.reduce((a, b) => a + b, 0) / values.length;
        dimension_scores[dim_name] = Math.round(score_moyen * 100) / 100;

        // Conversion en facettes
        const conversion = DIMENSION_TO_FACETTES[dim_name] || {};

        if (score_moyen > 2.5) {
            // Score haut → facettes positives
            const ecart = (score_moyen - 2.0) / 2.0;  // 0 à 1.0
            for (const [facette, poids] of Object.entries(conversion.score_haut || {})) {
                scores_bruts[facette] = (scores_bruts[facette] || 0) + (ecart * poids);
            }
        } else if (score_moyen < 1.5) {
            // Score bas → facettes négatives
            const ecart = (2.0 - score_moyen) / 2.0;  // 0 à 1.0
            for (const [facette, poids] of Object.entries(conversion.score_bas || {})) {
                scores_bruts[facette] = (scores_bruts[facette] || 0) + (ecart * poids);
            }
        }
        // Si 1.5 <= score_moyen <= 2.5 → neutre, pas d'impact
    }

    // ─── ÉTAPE 3 : Normalisation (0-100) ───
    const scores_normalises = {};

    if (Object.keys(scores_bruts).length > 0) {
        const max_score = Math.max(...Object.values(scores_bruts));
        for (const [facette, score] of Object.entries(scores_bruts)) {
            scores_normalises[facette] = Math.round(Math.min(100, (score / Math.max(max_score, 1)) * 100) * 10) / 10;
        }
    }

    // ─── ÉTAPE 4 : Macro-profils ───
    const macro_scores = {};

    for (const [macro_name, macro_data] of Object.entries(MACRO_PROFILS)) {
        const facettes = macro_data.facettes;
        const poids = macro_data.poids;

        let numerateur = 0.0;
        let denominateur = 0.0;

        for (let i = 0; i < facettes.length; i++) {
            const f = facettes[i];
            const p = poids[i];
            const score_f = scores_normalises[f] || 0;
            numerateur += score_f * p;
            denominateur += p;
        }

        if (denominateur > 0) {
            macro_scores[macro_name] = Math.round((numerateur / denominateur) * 10) / 10;
        } else {
            macro_scores[macro_name] = 0;
        }
    }

    // ─── ÉTAPE 5 : Résultat final ───

    // Top 5 facettes
    const top5_facettes = Object.entries(scores_normalises)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([facette, score]) => ({ facette, score }));

    // Macro-profils classés
    const macro_classement = Object.entries(macro_scores)
        .sort((a, b) => b[1] - a[1])
        .map(([profil, score]) => ({ profil, score }));

    // Profil dominant
    const profil_dominant = macro_classement.length > 0 ? macro_classement[0].profil : "INCONNU";

    // Structure recommandée
    const structure = STRUCTURES_IDEALES[profil_dominant] || "À déterminer";

    // Alertes
    const alertes = [];
    if ((macro_scores.LOUP || 0) > 60) {
        alertes.push({
            type: "WARNING",
            message: `Score LOUP élevé (${macro_scores.LOUP}%). Profil potentiellement manipulateur ou toxique. Vérifier en entretien.`
        });
    }
    if ((macro_scores.OMBRE || 0) > 50) {
        alertes.push({
            type: "INFO",
            message: `Score OMBRE élevé (${macro_scores.OMBRE}%). Profil possiblement passif ou en retrait. Mieux adapté à un rôle de second.`
        });
    }

    // Profil textuel
    const top3_macro = macro_classement.slice(0, 3).map(m => m.profil);
    const profil_textuel = generateProfilText(top3_macro, macro_scores, top5_facettes);

    return {
        version: "5.2",
        questions_repondues,
        scores_bruts_facettes: scores_bruts,
        scores_normalises_facettes: scores_normalises,
        top5_facettes,
        dimensions_brutes: dimension_scores,
        macro_profils: macro_scores,
        macro_classement,
        profil_dominant,
        structure_recommandee: structure,
        alertes,
        profil_textuel,
        radar_data: Object.fromEntries(macro_classement.map(m => [m.profil, m.score])),
    };
}

function generateProfilText(top3_macro, macro_scores, top5_facettes) {
    /**Génère une description textuelle du profil. */

    const descriptions = {
        COMMANDANT: "un leader d'autorité naturelle, fait pour diriger de grandes équipes avec fermeté",
        STRATÈGE: "un analyste visionnaire qui anticipe, planifie et manœuvre avec intelligence",
        OPÉRATEUR: "un homme de terrain pragmatique, débrouillard et résilient face aux crises",
        GARDIEN: "un garant des processus, rigoureux et structuré, qui maintient les standards",
        HUMAIN: "un manager bienveillant centré sur l'humain, la formation et la protection",
        LOUP: "un profil agressif et opportuniste, efficace en milieu compétitif mais risqué",
        CAMÉLÉON: "un adaptateur social hors pair, commercial et flexible en toutes circonstances",
        ANCIEN: "un pilier de sagesse et de loyauté, stable et diplomate dans la durée",
        OMBRE: "un profil en retrait, plus à l'aise en second qu'en première ligne",
    };

    const primary = top3_macro[0] || "INCONNU";
    const secondary = top3_macro[1] || null;
    const tertiary = top3_macro[2] || null;

    let text = `Profil dominant : ${primary} — ${descriptions[primary] || ''}.\n`;

    if (secondary) {
        text += `Teinté de ${secondary} (${descriptions[secondary] || ''}).\n`;
    }

    if (tertiary && (macro_scores[tertiary] || 0) > 30) {
        text += `Avec une influence ${tertiary} en arrière-plan.\n`;
    }

    const facettes_str = top5_facettes.slice(0, 3).map(f => f.facette).join(", ");
    if (facettes_str) {
        text += `Facettes dominantes : ${facettes_str}.`;
    }

    return text;
}

// =============================================================================
// 3. MOTEUR UNIVERSEL (pour rôles non-directeur)
// =============================================================================

/**
 * Calcule le profil v5.2 à partir des questions existantes (trait/profile/traits[]).
 * Compatible avec BARMAN, SERVEUR, CHEF_RANG, MANAGER, MANAGER_PRINCIPAL.
 * 
 * @param {Array} questions - Les questions du test (avec options contenant trait/profile)
 * @param {Object} scores - Les réponses {questionId: "A"|"B"|...}
 * @param {string} roleId - Le rôle pour adapter la structure recommandée
 */
export function calculateProfileUniversel(questions, scores, roleId = 'INCONNU') {
    const scores_bruts = {};
    let questions_repondues = { sjt: 0, dimensions: 0 };

    // Phase coefficients par type
    const getCoef = (q) => {
        const t = (q.type || '').toUpperCase();
        if (t.includes('DARK') || t.includes('HARDCORE')) return 2.0;
        if (t.includes('DILEMME')) return 1.3;
        return 1.0;
    };

    // Traiter chaque question
    questions.forEach(q => {
        const answer = scores[q.id];
        if (answer === undefined) return;

        // Questions DIMENSION (Likert)
        if (q.type === 'DIMENSION' && typeof answer === 'number') {
            questions_repondues.dimensions++;
            return; // Les dimensions sont gérées séparément ci-dessous
        }

        // Trouver l'option sélectionnée
        let selectedOption = null;
        if (q.options) {
            selectedOption = q.options.find(o => o.value === answer);
            if (!selectedOption && typeof answer === 'number') {
                const charMap = ['A', 'B', 'C', 'D', 'E'];
                if (answer >= 0 && answer < charMap.length) {
                    selectedOption = q.options.find(o => o.value === charMap[answer]);
                }
            }
        }

        if (!selectedOption) return;

        const coef = getCoef(q);
        questions_repondues.sjt++;

        // Extraire les facettes/traits de l'option
        let facettes = [];

        // 1. Tableau traits[] (plus précis, prioritaire)
        if (selectedOption.traits && Array.isArray(selectedOption.traits)) {
            facettes = selectedOption.traits.map(t => t.toUpperCase());
        }
        // 2. Champ trait simple
        else if (selectedOption.trait) {
            facettes = [selectedOption.trait.toUpperCase()];
        }
        // 3. Champ profile (ancien format BARMAN/SERVEUR)
        else if (selectedOption.profile) {
            facettes = [selectedOption.profile.toUpperCase()];
        }

        // Ajouter aux scores bruts
        facettes.forEach(facette => {
            // Poids: le premier trait pèse 1.0, les suivants 0.5
            const poids = facettes.indexOf(facette) === 0 ? 1.0 : 0.5;
            scores_bruts[facette] = (scores_bruts[facette] || 0) + (poids * coef);
        });
    });

    // Dimensions — détection dynamique depuis les questions
    // Scanne les questions de type DIMENSION et groupe par category
    const dimension_scores = {};
    const dimension_values = {}; // { INFLUENCE: [2, 3, ...], ... }

    questions.forEach(q => {
        if (q.type === 'DIMENSION' && scores[q.id] !== undefined) {
            const cat = q.category || 'UNKNOWN';
            const val = typeof scores[q.id] === 'number' ? scores[q.id] : parseInt(scores[q.id]);
            if (!isNaN(val) && val >= 0 && val <= 4) {
                if (!dimension_values[cat]) dimension_values[cat] = [];
                dimension_values[cat].push(val);
            }
        }
    });

    // Reset dimension question count (was double-counted in loop above)
    questions_repondues.dimensions = 0;

    for (const [dim_name, values] of Object.entries(dimension_values)) {
        if (values.length === 0) {
            dimension_scores[dim_name] = null;
            continue;
        }

        questions_repondues.dimensions += values.length;
        const score_moyen = values.reduce((a, b) => a + b, 0) / values.length;
        dimension_scores[dim_name] = Math.round(score_moyen * 100) / 100;

        const conversion = DIMENSION_TO_FACETTES[dim_name] || {};
        if (score_moyen > 2.5) {
            const ecart = (score_moyen - 2.0) / 2.0;
            for (const [facette, poids] of Object.entries(conversion.score_haut || {})) {
                scores_bruts[facette] = (scores_bruts[facette] || 0) + (ecart * poids);
            }
        } else if (score_moyen < 1.5) {
            const ecart = (2.0 - score_moyen) / 2.0;
            for (const [facette, poids] of Object.entries(conversion.score_bas || {})) {
                scores_bruts[facette] = (scores_bruts[facette] || 0) + (ecart * poids);
            }
        }
    }

    // Normalisation (0-100)
    const scores_normalises = {};
    if (Object.keys(scores_bruts).length > 0) {
        const max_score = Math.max(...Object.values(scores_bruts));
        for (const [facette, score] of Object.entries(scores_bruts)) {
            scores_normalises[facette] = Math.round(Math.min(100, (score / Math.max(max_score, 1)) * 100) * 10) / 10;
        }
    }

    // Macro-profils
    const macro_scores = {};
    for (const [macro_name, macro_data] of Object.entries(MACRO_PROFILS)) {
        let numerateur = 0.0;
        let denominateur = 0.0;
        for (let i = 0; i < macro_data.facettes.length; i++) {
            const f = macro_data.facettes[i];
            const p = macro_data.poids[i];
            numerateur += (scores_normalises[f] || 0) * p;
            denominateur += p;
        }
        macro_scores[macro_name] = denominateur > 0 ? Math.round((numerateur / denominateur) * 10) / 10 : 0;
    }

    // Top 5 facettes
    const top5_facettes = Object.entries(scores_normalises)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([facette, score]) => ({ facette, score }));

    // Macro-profils classés
    const macro_classement = Object.entries(macro_scores)
        .sort((a, b) => b[1] - a[1])
        .map(([profil, score]) => ({ profil, score }));

    const profil_dominant = macro_classement.length > 0 ? macro_classement[0].profil : "INCONNU";
    const structure = STRUCTURES_IDEALES[profil_dominant] || "À déterminer";

    // Alertes
    const alertes = [];
    if ((macro_scores.LOUP || 0) > 60) {
        alertes.push({ type: "WARNING", message: `Score LOUP élevé (${macro_scores.LOUP}%). Profil potentiellement manipulateur. Vérifier en entretien.` });
    }
    if ((macro_scores.OMBRE || 0) > 50) {
        alertes.push({ type: "INFO", message: `Score OMBRE élevé (${macro_scores.OMBRE}%). Profil possiblement passif. Mieux adapté à un rôle de second.` });
    }

    // Profil textuel
    const top3_macro = macro_classement.slice(0, 3).map(m => m.profil);
    const profil_textuel = generateProfilText(top3_macro, macro_scores, top5_facettes);

    return {
        version: "5.2",
        role: roleId,
        questions_repondues,
        scores_bruts_facettes: scores_bruts,
        scores_normalises_facettes: scores_normalises,
        top5_facettes,
        dimensions_brutes: dimension_scores,
        macro_profils: macro_scores,
        macro_classement,
        profil_dominant,
        structure_recommandee: structure,
        alertes,
        profil_textuel,
        radar_data: Object.fromEntries(macro_classement.map(m => [m.profil, m.score])),
    };
}

// =============================================================================
// 4. ENGINE CLASS (Compatible avec existing code)
// =============================================================================

export class SentinelEngineV52 {
    evaluateCandidate(roleId, questions, scores, textAnswers = {}) {
        // DIRECTEUR: logique spécialisée avec SJT_MAPPING
        if (roleId === 'DIRECTEUR') {
            const result = calculateProfile(scores);
            result.role = 'DIRECTEUR';
            return result;
        }

        // TOUS LES AUTRES RÔLES: logique universelle (lit trait/profile des options)
        return calculateProfileUniversel(questions, scores, roleId);
    }
}

export default SentinelEngineV52;

