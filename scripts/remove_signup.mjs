import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../src/AuthPage.jsx');

let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove states
content = content.replace("const [isLogin, setIsLogin] = useState(true);", "");
content = content.replace("const [fullName, setFullName] = useState(''); // Prénom & Nom, ou Nom du responsable", "");
content = content.replace("const [etablissement, setEtablissement] = useState('');", "");

// 2. Remove signUp logic from handleSubmit
const signUpBlockRegex = /\s*\} else \{\s*\/\/ INSCRIPTION[\s\S]*?(?=\}\s*\} catch \(err\))/;
content = content.replace(signUpBlockRegex, "");
content = content.replace("if (isLogin) {", "");
content = content.replace("// CONNEXION", "");

// 3. Remove Toggle Login/Signup UI
const toggleRegex = /\{\/\* Toggle login\/signup \*\/\}[\s\S]*?(?=\{\/\* Erreur \*\/})/;
content = content.replace(toggleRegex, "");

// 4. Update Header Texts
content = content.replace(/\{isLogin \? 'Connexion' : 'Créer un compte'\}/g, "'Connexion'");
content = content.replace(
    /\{userType === 'candidat'\s*\?\s*isLogin\s*\?\s*'Accédez à votre espace pour voir vos matchs et offres\.'\s*:\s*'Créez votre profil pour passer le test HCR\.'\s*:\s*isLogin\s*\?\s*'Accédez à votre base de candidats compatibles\.'\s*:\s*'Créez votre compte recruteur pour lancer l\\'audit\.'\s*\}/g,
    "{userType === 'candidat' ? 'Accédez à votre espace pour voir vos matchs et offres.' : 'Accédez à votre base de candidats compatibles.'}"
);

// 5. Remove SignUp specific inputs (FullName, Establishment, Checkbox)
const fullNameRegex = /\{!isLogin && \([\s\S]*?(?=\{!isLogin && userType === 'recruteur' && \()/;
content = content.replace(fullNameRegex, "");

const etablissementRegex = /\{!isLogin && userType === 'recruteur' && \([\s\S]*?(?=<div className="relative">)/;
content = content.replace(etablissementRegex, "");

const checkboxRegex = /\{\/\* Consentement RGPD à l'inscription \*\/\}[\s\S]*?(?=<button\s+type="submit")/g;
content = content.replace(checkboxRegex, "");

// 6. Fix Button specific to Login
content = content.replace(/\{isLogin \? 'Se connecter' : 'Valider'\}/g, "'Se connecter'");

// 7. Info recruteur
const infoRecruteurRegex = /\{\/\* Info recruteur \*\/\}[\s\S]*?(?=<\/div>\s*<\/div>\s*\)\}\s*<\/div>\s*<\/div>\s*\);\s*\};)/;
content = content.replace(infoRecruteurRegex, "");

// 8. Add hardcoded error cleanup
content = content.replace(/setIsLogin\(true\);/g, "");

fs.writeFileSync(filePath, content, 'utf8');
console.log("Signup removed successfully");
