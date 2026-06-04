import { chromium } from 'playwright';

// Helper pour répondre "gentil/doux/loyal" (Option A ou B souvent)
const getKindAnswer = (options) => {
    const keywords = ['écoute', 'aide', 'comprendre', 'soutien', 'calme', 'pardon', 'équipe', 'ensemble'];
    for (let i = 0; i < options.length; i++) {
        const text = options[i].toLowerCase();
        if (keywords.some(kw => text.includes(kw))) {
            return i;
        }
    }
    return 0; // Par défaut, option A
};

// Helper pour répondre "toxique/punitif/froid" (Option C, D, ou mots clés)
const getToxicAnswer = (options) => {
    const keywords = ['sanction', 'virer', 'autorité', 'remplacer', 'faute', 'immédiatement', 'conflit', 'exige'];
    for (let i = 0; i < options.length; i++) {
        const text = options[i].toLowerCase();
        if (keywords.some(kw => text.includes(kw))) {
            return i;
        }
    }
    return options.length - 1; // Par défaut, la dernière option (souvent la plus extrême)
};

async function runTest(persona) {
    console.log(`\n\n=== Démarrage du test pour : ${persona.name} (${persona.role}) ===`);
    const browser = await chromium.launch({ headless: false, slowMo: 50 }); // Visible pour qu'on puisse voir
    const page = await browser.newPage();

    try {
        await page.goto('http://localhost:5173/connexion');

        // 1. Choix du type (Candidat ou Recruteur)
        if (persona.isCandidat) {
            await page.click('text=Candidat');
        } else {
            await page.click('text=Recruteur');
        }

        // 2. S'inscrire
        await page.click("text=S'inscrire");

        // 3. Remplir le formulaire
        await page.fill('input[type="text"]', persona.name);
        if (!persona.isCandidat) {
            await page.fill('input[placeholder="Nom de l\'établissement"]', "Le Toxique Palace");
        }

        if (persona.isCandidat) {
            // Sélectionner le rôle
            await page.selectOption('select', persona.roleSlug);
        }

        await page.fill('input[type="email"]', persona.email);
        await page.fill('input[type="password"]', 'Password123!');

        // Cocher RGPD
        await page.click('input[type="checkbox"]');

        // Valider
        await page.click('button[type="submit"]');

        console.log(`✅ Inscription réussie pour ${persona.email}`);

        await page.waitForTimeout(3000);

        // Gérer le cookie banner qui a un bg-black/30 pointer-events-auto et bloque!
        if (await page.isVisible('text=Tout accepter')) {
            console.log("➡️ Cookie banner détecté, clic sur 'Tout accepter'...");
            await page.click('text=Tout accepter', { force: true });
            await page.waitForTimeout(500);
        }

        // Si MBTI (pour candidat)
        if (persona.isCandidat) {
            console.log("➡️ Passage du test MBTI (rapide)...");
            while (await page.isVisible('.grid-cols-1 button')) {
                const buttons = await page.$$('.grid-cols-1 button');
                if (buttons.length > 0) {
                    await buttons[0].click();
                    await page.waitForTimeout(500);
                } else {
                    break;
                }
            }
            console.log("✅ MBTI terminé.");
            await page.waitForTimeout(2000);

            if (await page.isVisible('text=Démarrer l\'Évaluation')) {
                await page.click('text=Démarrer l\'Évaluation');
                await page.waitForTimeout(1000);
            }
        } else {
            if (await page.isVisible('text=Démarrer l\'Audit')) {
                await page.click('text=Démarrer l\'Audit');
                await page.waitForTimeout(1000);
            }
        }

        console.log("➡️ Passage du test Sentinel (100 questions)...");
        let questionCount = 0;

        while (true) {
            if (questionCount >= 105) {
                console.log("🛑 Limite de questions atteinte (fin forcée).");
                break;
            }

            if (await page.isVisible('text=Génération de votre profil') || await page.isVisible('text=Audit Terminé') || await page.isVisible('text=Vos Résultats') || await page.isVisible('text=Mon Profil')) {
                console.log("✅ Test terminé ! Génération des résultats...");
                break;
            }

            // Revérifier au cas où le cookie banner repop plus tard
            if (await page.isVisible('text=Tout accepter')) {
                await page.click('text=Tout accepter', { force: true });
                await page.waitForTimeout(500);
            }

            const optionsTexts = await page.$$eval('button > div.text-left', els => els.map(e => e.innerText));
            const buttons = await page.$$('button > div.text-left');

            if (buttons.length > 0) {
                let indexToClick = 0;
                if (persona.behavior === 'kind') {
                    indexToClick = getKindAnswer(optionsTexts);
                } else {
                    indexToClick = getToxicAnswer(optionsTexts);
                }

                await buttons[indexToClick].click({ force: true });
                questionCount++;

                if (questionCount % 20 === 0) {
                    console.log(`   ... ${questionCount} questions répondues`);
                }
                await page.waitForTimeout(100);
            } else {
                const openTextVisible = await page.isVisible('textarea');
                if (openTextVisible) {
                    await page.fill('textarea', persona.behavior === 'kind' ? "J'en parle calmement avec lui." : "Je le vire sur le champ.");
                    await page.click('text=Valider', { force: true });
                    await page.waitForTimeout(500);
                    questionCount++;
                } else {
                    // Si bloqué, on prend un screenshot
                    if (questionCount === 0 || questionCount === 1) {
                        console.log("Bloqué au début du test. Arrêt forcé (voir dev_debug.png)...");
                        await page.screenshot({ path: 'dev_debug.png' });
                        break;
                    }
                    await page.waitForTimeout(1000);
                }
            }
        }

        console.log(`🎉 Test complètement terminé. Résultats en cours d'affichage.`);
        await page.waitForTimeout(5000);

    } catch (e) {
        console.error("Erreur durant le run:", e);
    } finally {
        await browser.close();
    }
}

async function start() {
    const timeId = Math.floor(Date.now() / 1000);

    const kindCandidate = {
        name: "Arthur Le Pur",
        email: `arthur.pur.${timeId}@test.com`,
        isCandidat: true,
        role: "Manager Adjoint",
        roleSlug: "manager-adj",
        behavior: "kind"
    };

    const toxicRecruiter = {
        name: "Chef Gordon Toxique",
        email: `gordon.tox.${timeId}@test.com`,
        isCandidat: false,
        role: "Directeur de Site",
        roleSlug: "",
        behavior: "toxic"
    };

    await runTest(kindCandidate);
    await runTest(toxicRecruiter);
}

start();
