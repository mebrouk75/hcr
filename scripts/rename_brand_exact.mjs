import fs from 'fs';
import path from 'path';

const files = [
    'src/LaRelevePage.jsx',
    'src/AuthPage.jsx',
    'src/DashboardRecruteur.jsx',
    'src/DashboardCandidat.jsx',
    'src/RecruteurTest.jsx',
    'src/RolesPage.jsx',
    'src/CookieBanner.jsx',
    'src/MentionsLegales.jsx',
];

let totalChanged = 0;

files.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;

        content = content.replace(/La Relève/g, 'ADN HCR');
        content = content.replace(/LA RELÈVE/g, 'ADN HCR');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${file}`);
            totalChanged++;
        }
    }
});

console.log(`Total files updated: ${totalChanged}`);
