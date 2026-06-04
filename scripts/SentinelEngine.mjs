
import CONFIG from '../src/data/sentinel_logic.json' with { type: 'json' };

// Dimension Mapper: Maps specific Question Types/Categories to the 6 Core Dimensions
// RES, EMP, AUT, INT, TOX, ADA
const mapItemToDimension = (item) => {
    const t = (item.type || "").toUpperCase();
    const c = (item.category || "").toUpperCase();
    const id = (item.id || "").toUpperCase();

    // Specific HCR Prefixes
    if (id.startsWith("ASS")) return "AUT"; // Assertivité -> Autorité
    if (id.startsWith("EMP")) return "EMP"; // Empathie
    if (id.startsWith("RES")) return "RES"; // Résistance
    if (id.startsWith("TEC")) return "INT"; // Technique -> Fiabilité/Process (Approximation)
    if (id.startsWith("ADA")) return "ADA"; // Adaptabilité

    // Semantic Mapping
    if (t.includes("TOXICITE") || t.includes("SADISME") || t.includes("HARCELEMENT") || t.includes("VIGILANCE")) return "TOX";
    if (t.includes("MANIPULATION") || t.includes("GASLIGHTING") || t.includes("MENSONGE") || t.includes("DARK_EMPATHY")) return "TOX"; // High Tox

    if (c === "USURE" || c === "STRESS" || c === "PRESSION") return "RES";
    if (c === "RÉTENTION" || c === "FIDÉLITÉ" || c === "LOYAUTÉ" || c === "CULTURE") return "INT";
    if (c === "EMPATHIE" || c === "RELATIONNEL" || c === "CLIENT" || c === "HUMAIN") return "EMP";
    if (c === "RIGUEUR" || c === "VITESSE" || c === "ORGANISATION" || c === "TECHNIQUE") return "RES";
    if (c === "AUTORITÉ" || c === "LEADERSHIP" || c === "MANAGEMENT" || c === "STRATÉGIE" || c === "VISION") return "AUT";
    if (c === "ADAPTABILITÉ" || c === "FLEXIBILITÉ" || c === "CHAOS" || c === "INVENTIF") return "ADA";

    // Default fallback
    if (t.includes("VALEURS")) return "INT";

    return "ADA"; // Fallback
};

// HCR SENTINEL ENGINE v3.2 - Méritocratie Universelle
export class SentinelEngine {
    constructor() {
        // HCR v3.2 Root
        this.config = CONFIG.sentinelle_hcr_v3;
        if (!this.config) {
            console.warn("HCR v3.2 config not found, falling back to legacy root.");
            this.config = CONFIG;
        }
    }

    evaluateCandidate(roleId, questions, scores, textAnswers = {}) {
        return this.evaluate(roleId, questions, scores, textAnswers);
    }

    evaluate(roleId, questions, scores, textAnswers = {}) {
        // 1. Resolve Role Configuration
        // Map common IDs to v3.2 keys if needed (e.g. CHEF_RANG -> CHEF_DE_RANG)
        let configRoleId = roleId;
        if (roleId === 'CHEF_RANG') configRoleId = 'CHEF_DE_RANG';

        const roleConfig = this.config.postes[configRoleId] || this.config.postes["MANAGER"];

        // 2. Initialize Dimensions & Traits
        const dimensions = { RES: 0, EMP: 0, AUT: 0, INT: 0, TOX: 0, ADA: 0 };
        const raw_scores = { RES: 0, EMP: 0, AUT: 0, INT: 0, TOX: 0, ADA: 0 };
        const traitCounts = {};
        let totalQuestionsAnswered = 0;

        // 3. Process Questions
        questions.forEach((q) => {
            const answerValue = scores[q.id];

            if (answerValue !== undefined) {
                totalQuestionsAnswered++;
                let selectedOption = null;

                // Find selected option
                if (q.options) {
                    selectedOption = q.options.find(opt => opt.value === answerValue);
                    if (!selectedOption && typeof answerValue === 'number') {
                        const charMap = ['A', 'B', 'C', 'D', 'E'];
                        if (answerValue >= 0 && answerValue < charMap.length) {
                            selectedOption = q.options.find(opt => opt.value === charMap[answerValue]);
                        }
                    }
                }

                // v3.2 Logic: Process Traits from Answer
                if (selectedOption) {
                    // Collect Traits (Array or Single)
                    let traits = [];
                    if (selectedOption.traits && Array.isArray(selectedOption.traits)) {
                        traits = selectedOption.traits;
                    } else if (selectedOption.trait) {
                        traits = [selectedOption.trait];
                    } else if (selectedOption.profile) {
                        traits = [selectedOption.profile];
                    }

                    // Map Traits to Dimensions
                    traits.forEach(t => {
                        const traitKey = t.toUpperCase();
                        traitCounts[traitKey] = (traitCounts[traitKey] || 0) + 1;

                        const mapping = this.config.mapping_traits_vers_dimensions[traitKey];
                        if (mapping && mapping.dimensions) {
                            Object.entries(mapping.dimensions).forEach(([dim, val]) => {
                                if (raw_scores[dim] !== undefined) {
                                    raw_scores[dim] += val;
                                }
                            });
                        }
                    });
                    // Fallback: Legacy Dimension Mapping if no traits (e.g. numeric scale)
                    if (traits.length === 0 && typeof answerValue === 'number') {
                        // Simple linear mapping for scale questions? 
                        // For now assume v3.2 uses traits primarily.
                    }
                }
            }
        });

        // 4. Normalize Scores (0-100)
        // Heuristic: Divide by total questions * avg points per question?
        // 4. Normalize Scores (0-100)
        // Heuristic: Divide by total questions * avg points per question.
        // Factor 1.5 allows for a more realistic saturation (reaching 100 is possible but hard).
        const normalizationFactor = totalQuestionsAnswered > 0 ? (totalQuestionsAnswered * 1.5) : 1;

        Object.keys(raw_scores).forEach(d => {
            // Clamp score between 0 and 100
            dimensions[d] = Math.max(0, Math.min(100, Math.round((raw_scores[d] / normalizationFactor) * 100)));
        });

        // 5. Apply Weights & Calculate Global Score
        let weightedScore = 0;
        let weightTotal = 0;
        const weights = roleConfig.poids_dimensions || {};

        Object.keys(weights).forEach(dim => {
            const w = weights[dim];
            const val = dimensions[dim] || 0;
            weightedScore += val * w;
            weightTotal += w;
        });

        let globalScore = weightTotal > 0 ? Math.round(weightedScore / weightTotal) : 0;

        // 6. Apply Universal Bonuses
        const activeBonuses = [];
        const appliedBonusEffects = [];
        let verdictOverride = null;
        let ignorePenalty = [];

        if (this.config.bonus_universels) {
            Object.entries(this.config.bonus_universels).forEach(([key, bonus]) => {
                // Check Condition
                let met = false;
                try {
                    // Simple parser for "RES > 90" etc
                    // Support &&
                    const parts = bonus.condition.split('&&').map(p => p.trim());
                    const results = parts.map(part => {
                        const [dim, val] = part.split('>').map(s => s.trim());
                        if (dimensions[dim] !== undefined) {
                            return dimensions[dim] > parseInt(val);
                        }
                        return false;
                    });
                    met = results.every(r => r === true);
                } catch (e) { console.error("Bonus parse error", e); }

                if (met) {
                    activeBonuses.push(bonus.nom);
                    if (bonus.effet.bonus_points) globalScore += bonus.effet.bonus_points;
                    if (bonus.effet.verdict_force) verdictOverride = bonus.effet.verdict_force;
                    if (bonus.effet.ignore_penalty) ignorePenalty.push(...bonus.effet.ignore_penalty);
                    // reduce_weight implementation omitted for brevity, handled via ignoring flags essentially
                }
            });
        }

        // Cap Score
        globalScore = Math.min(100, globalScore);

        // 7. Verify Critical Thresholds & Generate Verdict
        let verdict = "EN ANALYSE";
        let verdictColor = "text-slate-400";
        const criticals = this.config.seuils_critiques;
        const flags = [];

        // Red Line
        if (criticals.absolute_red_line) {
            // "INT < 20 || TOX > 90"
            // Check INT
            if (!ignorePenalty.includes('INT') && dimensions.INT < 20) {
                verdict = criticals.absolute_red_line.verdict;
                verdictColor = "text-rose-600 font-bold";
                flags.push("INTÉGRITÉ CRITIQUE");
            }
            // Check TOX
            if (!ignorePenalty.includes('TOX') && dimensions.TOX > 90) {
                verdict = criticals.absolute_red_line.verdict;
                verdictColor = "text-rose-600 font-bold";
                flags.push("TOXICITÉ CRITIQUE");
            }
        }

        if (flags.length === 0) {
            if (verdictOverride) {
                verdict = verdictOverride;
                verdictColor = "text-purple-600 font-bold"; // Special bonus color
            } else if (globalScore >= criticals.performance.score_min) {
                verdict = criticals.performance.verdict;
                verdictColor = "text-emerald-600";
            } else if (globalScore >= criticals.standard.score_min) {
                verdict = criticals.standard.verdict;
                verdictColor = "text-blue-600";
            } else {
                verdict = criticals.limite.verdict;
                verdictColor = "text-amber-500";
            }
        }

        // 8. Generate Report Data
        // Sort traits for synthesis
        const sortedTraits = Object.entries(traitCounts).sort(([, a], [, b]) => b - a);
        const topTraits = sortedTraits.slice(0, 3).map(([t]) => t);

        const synthesisText = `Profil ${globalScore}/100. ${verdict}. Dominante: ${topTraits.join(', ')}.`;

        return {
            dimensions,
            globalScore,
            verdict,
            verdictColor,
            flags,
            activeBonuses,
            synthesisText,
            topTraits,
            roleConfig,
            raw_scores
        };
    }
}
