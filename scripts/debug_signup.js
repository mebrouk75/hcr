import { chromium } from 'playwright';

async function run() {
    console.log("Démarrage du test d'inscription...");
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    try {
        await page.goto('http://localhost:5173/connexion');

        // Choisir Candidat
        await page.click('text=Candidat');

        // Onglet S'inscrire
        await page.click("text=S'inscrire");

        // Remplir
        const timeId = Math.floor(Date.now() / 1000);
        await page.fill('input[type="text"]', "Debug User");
        await page.selectOption('select', "manager-adj"); // Role
        await page.fill('input[type="email"]', `debug.${timeId}@test.com`);
        await page.fill('input[type="password"]', "Password123!");
        await page.click('input[type="checkbox"]');

        console.log("Formulaire rempli, clic sur Valider...");
        await page.click('button[type="submit"]', { force: true });

        // Attendre de voir s'il y a une erreur ou une redirection
        await page.waitForTimeout(3000);

        const currentUrl = page.url();
        console.log("URL après clic :", currentUrl);

        const errorVisible = await page.isVisible('.bg-rose-500\\/10');
        if (errorVisible) {
            const errorText = await page.innerText('.bg-rose-500\\/10');
            console.error("ERREUR TROUVÉE DANS L'UI :", errorText);
        } else {
            console.log("Aucune erreur UI trouvée. Peut-être une redirection réussie ?");
        }
    } catch (e) {
        console.error("Crash du script :", e);
    } finally {
        await browser.close();
    }
}
run();
