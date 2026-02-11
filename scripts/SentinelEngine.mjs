
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

export class SentinelEngine {
    constructor() {
        this.config = CONFIG;
    }

    evaluateCandidate(roleId, questions, scores, textAnswers = {}) {
        return this.evaluate(roleId, questions, scores, textAnswers);
    }

    evaluate(roleId, questions, scores, textAnswers = {}) {
        // 1. Resolve Configuration for Role
        const roleConfig = this.config.roles_logic[roleId] || this.config.roles_logic["BARMAN"];


        // 2. Calculate Dimension Scores & specific Profile Counts
        const dimensions = { RES: 0, EMP: 0, AUT: 0, INT: 0, TOX: 0, ADA: 0 };
        const counts = { RES: 0, EMP: 0, AUT: 0, INT: 0, TOX: 0, ADA: 0 };

        // New: Track specific profiles (Tyran, Radar, etc.)
        const profileCounts = {};

        // NEW: Trait-based scoring (Manager 20-trait system)
        const traitCounts = {};
        let totalTraitSelections = 0;
        let hasTraitData = false;

        // Macro-category definitions for grouping 20 traits into 5 radar axes
        const TRAIT_MACROS = {
            'Leadership': ['LEADER', 'AUTORITAIRE', 'VISIONNAIRE', 'AMBITIEUX'],
            'Diplomatie': ['DIPLOMATE', 'PÉDAGOGUE', 'HUMBLE', 'FLEXIBLE'],
            'Opérationnel': ['PRAGMATIQUE', 'RIGOUREUX', 'OPERATIONNEL', 'RÉSILIENT'],
            'Autonomie': ['AUTONOME', 'FRANC', 'STRATEGIQUE', 'EXIGEANT'],
            'Dépendance': ['SUIVEUR', 'OBÉISSANT', 'SENSIBLE', 'PROTECTEUR']
        };


        // NEW: Profile Score Mapping for missing numeric scores
        const PROFILE_SCORES = {
            "TYRAN": { AUT: 2, TOX: 2, EMP: 0, RES: 1 },
            "VISIONNAIRE": { AUT: 2, ADA: 2, RES: 1 },
            "SAGE": { EMP: 2, INT: 2, TOX: 0 },
            "BUREAUCRATE": { RES: 2, INT: 2, ADA: 0, EMP: 0 },
            "RADAR": { INT: 2, TOX: 2, AUT: 1 },
            "PIRATE": { ADA: 2, INT: 0, TOX: 1, RES: 1 },
            "MÉTRONOME": { RES: 2, INT: 2, ADA: 0, TOX: 0 },
            "RIGOUREUX": { RES: 2, INT: 2, ADA: 0, TOX: 0 },
            "SHOWMAN": { EMP: 2, AUT: 1, INT: 0, ADA: 1 },
            "CONFIDENT": { EMP: 2, RES: 0, INT: 1 },
            "SUIVEUR": { AUT: 0, RES: 0, INT: 1, OBÉISSANT: 2 },
            "RÉSILIENT": { RES: 2, ADA: 1 },
            "SENSIBLE": { RES: 0, EMP: 2, AUT: 0 },
            "OBÉISSANT": { AUT: 0, INT: 2, RES: 1 },
            "AUTORITAIRE": { AUT: 2, EMP: 0 },
            "PRAGMATIQUE": { RES: 1, ADA: 1, INT: 1 },
            "DIPLOMATE": { EMP: 2, INT: 1, AUT: 0 },
            "PROTECTEUR": { EMP: 2, INT: 1 },
            "AMBITIEUX": { AUT: 2, RES: 1 },
            "HUMBLE": { EMP: 1, AUT: 0 },
            "FRANC": { INT: 2, AUT: 1 },
            "AUTONOME": { AUT: 1, RES: 1 },
            "DISCRET": { EMP: 1, AUT: 0 },
            "CHALEUREUX": { EMP: 2 },
            "COMMERCIAL": { EMP: 1, ADA: 1 },
            "DÉBROUILLARD": { ADA: 2, RES: 1 },
            "RAPIDE": { VITESSE: 2, RES: 1 },
            "TECHNIQUE": { RES: 1, INT: 1 },
            "ATTENTIF": { EMP: 2 },
            "CONCILIANT": { EMP: 1, AUT: 0 },
            "CRÉATIF": { ADA: 2 },
            "MENEUR": { AUT: 2, EMP: 1 },
            "LEADER": { AUT: 2, EMP: 1 },
            "EXIGEANT": { RES: 2, AUT: 1 },
            "STRATEGIQUE": { AUT: 2, INT: 1 },
            "PÉDAGOGUE": { EMP: 2, INT: 1 },
            "FLEXIBLE": { ADA: 2, EMP: 1 },
            "OPERATIONNEL": { RES: 2, INT: 1 }
        };

        questions.forEach((q) => {
            const answerValue = scores[q.id]; // The value stored (e.g., "A", "B", 0, 1...)

            // 2a. Dimension Scoring
            let numericScore = 0;
            if (typeof answerValue === 'number') {
                numericScore = answerValue;
            } else {
                numericScore = 0; // Default
            }

            const dim = mapItemToDimension(q);

            // Normalize score to 0-100
            let normalized = 0;
            if (q.maxScore) {
                normalized = (numericScore / q.maxScore) * 100;
            } else {
                // Default legacy behavior (0-2 scale usually)
                normalized = numericScore * 50;
            }

            let profileBoost = null;
            let selectedOption = null;

            if (answerValue !== undefined) {
                if (q.options) {
                    selectedOption = q.options.find(opt => opt.value === answerValue);
                    // Fallback map
                    if (!selectedOption && typeof answerValue === 'number') {
                        const charMap = ['A', 'B', 'C', 'D', 'E'];
                        if (answerValue >= 0 && answerValue < charMap.length) {
                            selectedOption = q.options.find(opt => opt.value === charMap[answerValue]);
                        }
                    }
                }
            }

            // Apply Profile Scores if detection found
            if (selectedOption && (selectedOption.profile || selectedOption.trait)) {
                const p = (selectedOption.profile || selectedOption.trait).toUpperCase();
                if (PROFILE_SCORES[p]) {
                    profileBoost = PROFILE_SCORES[p];
                }
            }


            // Only add to dimensions if it makes sense (numeric score OR profile boost)
            if (typeof answerValue === 'number' || (q.maxScore) || profileBoost) {

                if (profileBoost) {
                    // Distribute boost
                    Object.entries(profileBoost).forEach(([d, val]) => {
                        if (dimensions[d] !== undefined) {
                            dimensions[d] += val * 50;
                            counts[d]++;
                        }
                    });
                    // Also add to primary mapped dimension if not covered? 
                    // No, let profile override.
                } else {
                    dimensions[dim] += normalized;
                    counts[dim]++;
                }

                // NEW: Track Specific Category Scores
                if (q.category) {
                    const cat = q.category.toUpperCase();
                    if (!dimensions[cat]) dimensions[cat] = 0;
                    if (!counts[cat]) counts[cat] = 0;
                    dimensions[cat] += (profileBoost ? 50 : normalized); // Approx
                    counts[cat]++;
                }
            }

            // 2b. Profile Counting
            if (selectedOption) {
                if (selectedOption.profile) {
                    const p = selectedOption.profile.toUpperCase();
                    profileCounts[p] = (profileCounts[p] || 0) + 1;
                }

                // NEW: Handle trait-based scoring
                if (selectedOption.traits && Array.isArray(selectedOption.traits)) {
                    selectedOption.traits.forEach(t => {
                        const trait = t.toUpperCase();
                        traitCounts[trait] = (traitCounts[trait] || 0) + 1;
                        totalTraitSelections++;
                    });
                    hasTraitData = true;
                }
                else if (selectedOption.trait && !selectedOption.profile) {
                    const trait = selectedOption.trait.toUpperCase();
                    traitCounts[trait] = (traitCounts[trait] || 0) + 1;
                    totalTraitSelections++;
                    hasTraitData = true;
                }
                // Legacy scores
                if (selectedOption.scores) {
                    Object.entries(selectedOption.scores).forEach(([d, val]) => {
                        if (dimensions[d] !== undefined) {
                            dimensions[d] += val * 50;
                            counts[d] += 1;
                        }
                    });
                }
            }
        });

        // Average out Dimensions
        const resultDimensions = {};
        Object.keys(dimensions).forEach(k => {
            resultDimensions[k] = counts[k] > 0 ? Math.round(dimensions[k] / counts[k]) : 0;
        });

        // NEW: Compute trait percentages and macro-category scores
        const traitPercentages = {};
        const totalQuestions = questions.length;
        Object.entries(traitCounts).forEach(([trait, count]) => {
            traitPercentages[trait] = Math.round((count / totalQuestions) * 100);
        });

        // Compute macro-category scores (SUM of percentages, capped at 100 effectively by nature of distribution)
        const macroScores = {};
        Object.entries(TRAIT_MACROS).forEach(([macro, traits]) => {
            const traitValues = traits.map(t => traitPercentages[t] || 0);
            const sum = traitValues.reduce((a, b) => a + b, 0);
            // FIX: Don't divide by trait length. The sum IS the category score (0-100%).
            macroScores[macro] = Math.round(sum);
        });

        // Sort traits by count to find dominant ones
        const sortedTraits = Object.entries(traitCounts)
            .sort(([, a], [, b]) => b - a);
        const topTraits = sortedTraits.slice(0, 5);
        const bottomTraits = sortedTraits.slice(-3);

        // Determine Dominant Specific Profile
        let dominantProfile = null;
        let maxCount = -1;
        // Optional: track secondary profile
        let secondaryProfile = null;
        let secondMaxCount = -1;

        Object.entries(profileCounts).forEach(([prof, count]) => {
            if (count > maxCount) {
                // Demote current max to secondary
                secondMaxCount = maxCount;
                secondaryProfile = dominantProfile;

                maxCount = count;
                dominantProfile = prof;
            } else if (count > secondMaxCount) {
                secondMaxCount = count;
                secondaryProfile = prof;
            }
        });

        // Calculate Average Scores for Specific Categories
        const specificScores = {};
        Object.keys(dimensions).forEach(key => {
            // Filter only the known Director categories or all valid ones
            // We'll just return all keys that are not the standard 6 if they have counts
            if (!['RES', 'EMP', 'AUT', 'INT', 'TOX', 'ADA'].includes(key) && counts[key] > 0) {
                specificScores[key] = Math.round(dimensions[key] / counts[key]);
            }
        });

        // 3. Apply Multipliers/Weights from Config
        let weightedScore = 0;
        let weightTotal = 0;

        if (roleConfig.weights) {
            Object.keys(roleConfig.weights).forEach(dim => {
                const weight = roleConfig.weights[dim];
                const val = resultDimensions[dim] || 0;
                weightedScore += val * weight;
                weightTotal += weight;
            });
        }

        let globalScore = weightTotal > 0 ? Math.round(weightedScore / weightTotal) : 0;

        // 4. Consistency Check (Reliability)
        let reliability = 100;
        if (this.config.consistency_check && this.config.consistency_check.pairs) {
            this.config.consistency_check.pairs.forEach(pair => {
                // Find questions by Index (q_ref is 1-based index)
                const q1 = questions[pair.q_ref - 1];
                const q2 = questions[pair.q_mirror - 1];

                if (q1 && q2) {
                    const s1 = scores[q1.id];
                    const s2 = scores[q2.id];

                    if (s1 !== undefined && s2 !== undefined) {
                        // Assuming simple numeric comparison roughly
                        const diff = Math.abs(Number(s1) - Number(s2));
                        if (diff > 1) { // 0 vs 2
                            reliability -= pair.penalty || 5;
                        }
                    }
                }
            });
        }

        // Clamp Reliability
        reliability = Math.max(0, reliability);

        // 5. Verdict Generation
        let verdict = "EN ANALYSE";
        let verdictColor = "text-slate-400"; // Slate default

        if (roleId === 'ADN_ENTREPRISE') {
            // Special verdict for ADN
            const tox = resultDimensions.TOX || 0;
            if (tox > 60) {
                verdict = "ALERTE : CULTURE À RISQUE (Vigilance Requise)";
                verdictColor = "text-rose-600";
            } else if (tox > 30) {
                verdict = "CULTURE MIXTE (Points de friction identifiés)";
                verdictColor = "text-amber-500";
            } else {
                verdict = "CULTURE SAINE (Indicateurs positifs)";
                verdictColor = "text-emerald-600";
            }
        } else {
            if (globalScore > 75 && reliability > this.config.global_settings.reliability_threshold) {
                verdict = "PROFIL PERFORMANCE. Recommandation Forte.";
                verdictColor = "text-emerald-600";
            } else if (globalScore > 50) {
                verdict = "PROFIL STANDARD. Potentiel à confirmer.";
                verdictColor = "text-blue-600";
            } else {
                verdict = "PROFIL INADÉQUAT. Risques opérationnels.";
                verdictColor = "text-rose-600";
            }
        }

        // 5.5 ADAPTABILITY VERDICT (NEW)
        let adaptabilityVerdict = "Non Défini";
        const ada = resultDimensions.ADA || 0;
        const res = resultDimensions.RES || 0;
        const aut = resultDimensions.AUT || 0;

        if (ada > 70) {
            adaptabilityVerdict = "HAUTE PLASTICITÉ. Candidat capable de s'ajuster à des environnements changeants rapidement.";
        } else if (ada > 40) {
            adaptabilityVerdict = "ADAPTABILITÉ MODÉRÉE. Préfère un cadre stable mais peut gérer l'imprévu sur de courtes durées.";
        } else {
            adaptabilityVerdict = "RIGIDITÉ STRUCTURELLE. Besoin impératif de process fixes. Risque en cas de chaos.";
        }

        // Refine with Authority context
        if (aut > 70 && ada > 60) adaptabilityVerdict += " Leadership transformationnel détecté.";
        if (res < 40 && ada < 40) adaptabilityVerdict += " Attention : Fragilité face à la pression.";

        // 6. Critical Flags
        const flags = [];
        if (roleConfig.critical_fail) {
            // Parse "INT < 50"
            const parts = roleConfig.critical_fail.split(" ");
            if (parts.length === 3) {
                const [dim, op, val] = parts;
                if (dim && op === "<" && resultDimensions[dim] < parseInt(val)) {
                    flags.push(`ALERTE : ${this.config.dimensions[dim]} Insuffisant`);
                }
            }
        }

        if (reliability < this.config.global_settings.reliability_threshold) {
            flags.push("FIABILITÉ FAIBLE : Réponses contradictoires");
        }

        // 7. Dynamic Synthesis Generation
        const sortedDims = Object.entries(resultDimensions).sort(([, a], [, b]) => b - a);
        const strengths = [];
        const weaknesses = [];

        // Top 2 Strengths (> 60)
        sortedDims.forEach(([dim, val]) => {
            if (val >= 60 && strengths.length < 2) {
                const text = this.config.feedback_library[dim]?.high;
                if (text) strengths.push({ label: this.config.dimensions[dim].split(' ')[0], text });
            }
        });

        // Bottom 2 Weaknesses (< 45) - Using reverse order
        [...sortedDims].reverse().forEach(([dim, val]) => {
            if (val <= 45 && weaknesses.length < 2) {
                const text = this.config.feedback_library[dim]?.low;
                if (text) weaknesses.push({ label: this.config.dimensions[dim].split(' ')[0], text });
            }
        });

        // Fallbacks if empty
        if (strengths.length === 0) strengths.push({ label: "Polyvalence", text: "Profil homogène sans pic de compétence marqué." });
        if (weaknesses.length === 0) weaknesses.push({ label: "Équilibre", text: "Aucune défaillance majeure détectée." });

        // 8. Profile Type Detection (Logic moved from Sentinel.jsx)
        let detectedProfile = "OPS";
        // Mapping: AUT=Authority (was ASS), EMP=Empathy
        // Rates are approximately normalized 0-1 (val/100)
        const autRate = (resultDimensions.AUT || 0) / 100;
        const empRate = (resultDimensions.EMP || 0) / 100;
        const HIGH = 0.55;

        // Using standard HCR logic
        if (autRate >= HIGH && empRate >= HIGH) detectedProfile = 'SENTINEL';
        else if (autRate >= HIGH && empRate < HIGH) detectedProfile = 'PETIT_CHEF';
        else if (autRate < HIGH && empRate >= HIGH) detectedProfile = 'PASSIF';
        else detectedProfile = 'OPS';

        // Get Text from Library
        const profileData = this.config.profiles_library[detectedProfile] || {
            title: detectedProfile,
            desc: "Profil non répertorié.",
            full_text: "Données insuffisantes pour établir un profil type."
        };

        // Generate Synthesis Text
        let synthesisText = `Profil bascule vers ${detectedProfile} avec une fiabilité de ${reliability}%. ${verdict}.`;

        // OVERRIDE for trait-based roles: recalc global score, verdict, synthesis from traits
        if (hasTraitData) {
            // Global score from macro averages
            const macroValues = Object.values(macroScores);
            const traitGlobalScore = macroValues.length > 0
                ? Math.round(macroValues.reduce((a, b) => a + b, 0) / macroValues.length)
                : 0;

            // Override dimensions with macros for radar chart
            Object.entries(macroScores).forEach(([macro, val]) => {
                resultDimensions[macro] = val;
            });

            // Trait-based verdict
            const leaderScore = macroScores['Leadership'] || 0;
            const diploScore = macroScores['Diplomatie'] || 0;
            const opsScore = macroScores['Opérationnel'] || 0;

            if (leaderScore > 40 && diploScore > 30 && opsScore > 30) {
                verdict = 'PROFIL COMPLET. Manager équilibré avec dominante Leadership.';
                verdictColor = 'text-emerald-600';
            } else if (leaderScore > 40) {
                verdict = 'PROFIL DIRECTIF. Forte autorité, attention à la diplomatie.';
                verdictColor = 'text-blue-600';
            } else if (diploScore > 40) {
                verdict = 'PROFIL DIPLOMATE. Bonne gestion humaine, leadership à renforcer.';
                verdictColor = 'text-blue-600';
            } else if (opsScore > 40) {
                verdict = 'PROFIL OPÉRATIONNEL. Solide en terrain, vision stratégique à développer.';
                verdictColor = 'text-blue-600';
            } else {
                verdict = 'PROFIL EN DÉVELOPPEMENT. Potentiel à confirmer sur le terrain.';
                verdictColor = 'text-amber-500';
            }

            // Trait-based synthesis
            const traitStrengths = topTraits.slice(0, 3).map(([t, c]) => ({
                label: t.charAt(0) + t.slice(1).toLowerCase(),
                text: `Trait dominant avec ${Math.round((c / totalQuestions) * 100)}% de présence sur ${totalQuestions} questions.`
            }));
            const traitWeaknesses = bottomTraits.map(([t, c]) => ({
                label: t.charAt(0) + t.slice(1).toLowerCase(),
                text: `Trait faible avec ${Math.round((c / totalQuestions) * 100)}% de présence. Axe de développement potentiel.`
            }));

            // Dominant profile from top trait
            dominantProfile = topTraits[0]?.[0] || null;
            secondaryProfile = topTraits[1]?.[0] || null;

            const traitProfileData = {
                title: dominantProfile ? dominantProfile.charAt(0) + dominantProfile.slice(1).toLowerCase() : 'Inconnu',
                desc: secondaryProfile ? `Dominance ${dominantProfile} / ${secondaryProfile}` : 'Profil unique',
                full_text: `Sur 100 situations managériales, votre profil révèle une dominante ${(dominantProfile || '').toLowerCase()} avec des tendances ${(secondaryProfile || '').toLowerCase()}. Ce profil indique un style de management ${leaderScore > diploScore ? 'directif' : 'collaboratif'} avec une orientation ${opsScore > 30 ? 'opérationnelle marquée' : 'stratégique'}.`
            };

            globalScore = traitGlobalScore;
            synthesisText = `Profil Manager : ${dominantProfile}/${secondaryProfile} — Score ${traitGlobalScore}/100. ${verdict}`;

            return {
                dominantProfile,
                secondaryProfile,
                profileCounts,
                specificScores,
                dimensions: resultDimensions,
                globalScore,
                reliability,
                verdict,
                verdictColor,
                adaptabilityVerdict,
                flags,
                roleConfig,
                synthesis: { strengths: traitStrengths, weaknesses: traitWeaknesses },
                profileData: traitProfileData,
                textAnswers,
                synthesisText,
                // NEW: Trait-specific data for UnifiedResultView
                hasTraitData: true,
                traitCounts,
                traitPercentages,
                macroScores,
                topTraits,
                bottomTraits
            };
        }

        return {
            dominantProfile,
            secondaryProfile,
            profileCounts,
            specificScores,
            dimensions: resultDimensions,
            globalScore,
            reliability,
            verdict,
            verdictColor,
            adaptabilityVerdict,
            flags,
            roleConfig,
            synthesis: { strengths, weaknesses },
            profileData,
            textAnswers,
            synthesisText
        };
    }
}
