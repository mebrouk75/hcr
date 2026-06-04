import fs from 'fs';

const AUT_QUESTIONS = [
    "Pour maintenir l'autorité de la direction, aucune décision stratégique ne doit être justifiée aux équipes de terrain.",
    "La menace d'une sanction disciplinaire reste le levier le plus rapide pour rétablir la productivité d'un service.",
    "En restauration, un manager intermédiaire qui devient ami avec son équipe perd instantanément sa légitimité.",
    "Les représentants du personnel (CSE) ont tendance à ralentir délibérément la réactivité de l'entreprise.",
    "Un employé qui remet en question publiquement une instruction doit être recadré fermement et immédiatement devant les autres.",
    "Le micro-management est souvent la seule méthode pour garantir le respect strict des standards d'excellence.",
    "Il est de l'entière responsabilité du chef d'établissement d'imposer sa vision sans rechercher systématiquement le consensus.",
    "L'empathie venant de la direction est trop souvent perçue comme une faiblesse par le personnel d'exécution.",
    "Le vouvoiement et une stricte distance hiérarchique sont vitaux pour asseoir l'autorité d'un directeur de site.",
    "En cas de faute d'un collaborateur, une sanction immédiate est toujours préférable à un long entretien d'explication.",
    "On demande à un salarié d'exécuter des tâches précises, pas d'avoir des opinions sur la gestion de l'établissement.",
    "Le modèle le plus performant et fiable dans notre secteur reste une structure hiérarchique très verticale.",
    "Faire preuve d'une fermeté absolue face aux revendications salariales empêche l'escalade des demandes collectives.",
    "La loyauté envers l'établissement doit primer sur toutes les amitiés et solidarités entre collègues.",
    "L'évaluation annuelle doit souligner les erreurs et les axes d'amélioration avant même de parler des réussites.",
    "Il vaut généralement mieux être craint et respecté que d'essayer d'être aimé par ses salariés.",
    "Un employé qui refuse catégoriquement d'effectuer des heures supplémentaires imprévues n'a pas sa place dans nos effectifs.",
    "Le pouvoir de décision final, même sur des aspects opérationnels mineurs, ne doit jamais être totalement délégué.",
    "La direction n'a pas à informer l'ensemble des équipes des difficultés financières traversées par l'établissement.",
    "Un conflit entre salariés doit être tranché par la direction de manière brutale si nécessaire, pour couper court à la contagion."
];

const EMP_QUESTIONS = [
    "Préserver la santé mentale de mes équipes est un enjeu tout aussi stratégique que la rentabilité financière de mon affaire.",
    "Prendre le temps d'écouter les problèmes personnels d'un salarié en détresse fait intégralement partie du rôle d'employeur.",
    "Accorder exceptionnellement des jours de repos pour un coup dur personnel crée un fort engagement à long terme.",
    "La réputation de notre 'marque employeur' passe avant tout par le soutien psychologique dont fait preuve la direction.",
    "Comprendre les motivations intimes et personnelles d'un candidat est essentiel pour réussir son intégration.",
    "Il est de notre responsabilité d'adapter notre mode de communication à la sensibilité de chaque employé.",
    "Si un salarié historiquement performant baisse d'intensité, c'est généralement le symptôme d'une difficulté personnelle à accompagner.",
    "Offrir des avantages sociaux réels (mutuelle premium, crèche) supérieurs au strict minimum légal est un devoir moral.",
    "La reconnaissance verbale au quotidien a un impact souvent supérieur aux simples primes de résultat mensuelles.",
    "Le processus d'intégration psychologique (onboarding) d'un nouveau collaborateur est l'investissement RH le plus critique.",
    "Un chef d'entreprise qui sait faire preuve de vulnérabilité rapproche ses équipes et renforce la cohésion.",
    "Il est de notre devoir d'aider un salarié à évoluer professionnellement, même si cela l'amène à quitter notre entreprise.",
    "La fonction première des Ressources Humaines doit être d'agir comme un soutien social proactif pour les employés.",
    "Investir massivement dans l'ergonomie et la réduction de la pénibilité physique est non négociable dans le secteur HCR.",
    "Financer des initiatives de cohésion d'équipe et des moments festifs est un investissement très rentable sur le climat social.",
    "Les tensions internes se règlent par de la médiation et une écoute active, plutôt que par des arbitrages autoritaires.",
    "Il faut savoir faire preuve de clémence face à une erreur si l'on sait que l'employé traverse un drame familial.",
    "Un taux de turnover (rotation) élevé est avant tout le signe d'un manque de considération et d'écoute de la part de la direction.",
    "La transparence de la direction sur l'avenir de la société est le principal remède contre l'anxiété économique des salariés.",
    "Il est indispensable qu'une réunion d'équipe commence par un point sur 'comment se sent l'équipe' avant de parler des chiffres."
];

const INT_QUESTIONS = [
    "Le respect absolu et scrupuleux du Code du Travail prime systématiquement sur n'importe quelle urgence opérationnelle.",
    "Verser une partie du salaire non déclarée (au noir), même à la demande pressante du salarié, est une ligne rouge à ne jamais franchir.",
    "Une promesse faite oralement à un candidat lors d'un entretien de recrutement a la même valeur morale qu'un contrat signé.",
    "Les plaisanteries douteuses ou sexistes n'ont absolument aucune place dans nos établissements, tolérance zéro.",
    "Les critères d'augmentation et de promotion doivent être totalement transparents, publics et basés sur une pure équité.",
    "Il est du devoir de la direction de licencier pour faute lourde un harceleur avéré, même s'il s'agit du chef le plus talentueux.",
    "Toute minute travaillée supplémentaire doit être pointée et dûment rémunérée ou récupérée, sans la moindre exception.",
    "Savoir refuser et expulser un client au comportement abusif ou humiliant envers un serveur est une obligation stricte de la direction.",
    "Modifier manuellement les plannings rétroactivement pour lisser les heures supplémentaires est une fraude inacceptable.",
    "Détourner des règles d'hygiène ou de sécurité sanitaire pour accélérer le service est une faute éliminatoire.",
    "Un employeur n'a pas à juger, questionner ou influencer les choix politiques, syndicaux ou religieux de son personnel.",
    "La dissimulation ou la fraude administrative pour 'sauver' un exercice fiscal difficile reste une faute morale impardonnable.",
    "Le favoritisme (promotion de proches ou d'amis) est le poison le plus rapide pour détruire la méritocratie en entreprise.",
    "Inciter les employés à privilégier les arrêts maladie de complaisance plutôt que des congés payés est une dérive inacceptable.",
    "La direction RH doit rester totalement partiale concernant le droit du travail et ne jamais céder aux pressions politiques internes.",
    "Le vol de marchandises par un employé, même de très faible valeur, justifie la rupture immédiate du contrat de confiance.",
    "Les retards de paiement des salaires le 1er du mois sont une atteinte gravissime au respect dû aux collaborateurs.",
    "On ne peut exiger d'un salarié qu'il accomplisse des tâches sortant de sa fiche de poste contractuelle sans avenant ou compensation.",
    "L'usage abusif de prestataires auto-entrepreneurs pour masquer des emplois salariés réels est une fraude dommageable.",
    "Dissimuler la réalité économique de l'établissement aux délégués du personnel est une faute contre l'intégrité de l'entreprise."
];

const RES_QUESTIONS = [
    "En période de grave crise financière, tailler violemment dans la masse salariale reste le premier et seul levier de survie rapide.",
    "Il faut savoir privilégier les profits à court terme pour accumuler une trésorerie défensive avant la saison basse.",
    "Travailler sous une pression extrême et en sous-effectif chronique fait partie de la normalité historique de notre secteur.",
    "L'amélioration constante et agressive de nos ratios de productivité justifie une certaine détérioration de l'ambiance.",
    "Si un logiciel de prise de commande ou un robot permet de réduire les effectifs et donc les charges, il faut remplacer l'humain.",
    "Accepter de travailler 6 jours sur 7 et renoncer à ses congés est parfois le seul moyen pour un cadre de prouver son implication.",
    "La solidité mentale d'un manager se juge à sa capacité à sacrifier sa vie personnelle pour assurer les services du week-end.",
    "Avoir recours à une méthode de 'Cost-Killing' permanente est indispensable, quitte à supprimer le confort au travail.",
    "En affaires, le chiffre d'affaires et l'EBITDA sont les seuls vrais juges de paix ; les bonnes intentions sociales ne paient pas les factures.",
    "Exiger des résultats toujours plus ambitieux malgré un maintien gelé des effectifs forge le caractère des meilleurs éléments.",
    "Les engagements en matière d'écologie ou de Responsabilité Sociale (RSE) sont souvent des distractions coûteuses pour les PME.",
    "Lorsque les marges s'effritent à cause de l'inflation, il est logique de geler indéfiniment toute politique d'augmentation salariale.",
    "L'entreprise n'est pas une association caritative : elle n'a pas à financer le bien-être de ses salariés si cela réduit ses marges.",
    "La direction générale doit se focaliser exclusivement sur le compte de résultat et exiger que le management gère les états d'âme.",
    "Sacrifier légèrement la qualité de notre offre (produit ou service) est parfois le seul rempart pour sauver la rentabilité.",
    "On attend d'un directeur qu'il soit impitoyable de fermeté lors des négociations avec ses fournisseurs pour écraser les prix.",
    "La souffrance d'une équipe lors d'un gros coup de feu désorganisé prouve au moins sa résilience et sa valeur au combat.",
    "L'augmentation des tarifs clients étant un risque commercial majeur, il vaut mieux optimiser brutalement l'exploitation RH interne.",
    "L'entreprise n'a pas à compenser l'inflation globale subie par les ménages ; notre grille de salaires doit rester la plus fixe possible.",
    "Dans ce métier, mieux vaut sortir du volume rentable sans attachement aux détails humains que d'intellectualiser le management."
];

const ADA_QUESTIONS = [
    "Je suis toujours prêt à bouleverser intégralement nos process RH historiques si une idée moderne plus performante se présente.",
    "Proposer des horaires modulables 'à la carte' en fonction des contraintes familiales est devenu obligatoire pour recruter les meilleurs.",
    "La culture managériale de mon établissement n'est jamais figée, elle évolue organiquement selon les personnalités que l'on intègre.",
    "Intégrer la semaine de 4 jours et le télétravail partiel pour nos encadrants est une nécessité absolue pour rester compétitif.",
    "Plutôt que d'appliquer bêtement des grilles salariales rigides, je préfère faire du sur-mesure innovant pour fidéliser mes talents.",
    "Face aux pénuries de cuisiniers ou serveurs, j'embaucherai volontiers un profil totalement issu d'un autre secteur pour tout lui apprendre.",
    "L'organigramme de mon entreprise est un brouillon permanent qui doit être modifié dès qu'un nouveau projet d'agrandissement l'exige.",
    "Savoir improviser et sortir de la règle pour désamorcer une impasse salariale via des avantages en nature est l'une de mes forces.",
    "Plafonner les missions d'un salarié parce que cela ne correspond plus à son poste d'origine est une erreur face au dynamisme d'aujourd'hui.",
    "Aujourd'hui, un bon directeur des ressources humaines est d'abord un grand négociateur capable de s'adapter à toutes les demandes.",
    "Si l'intelligence artificielle ou de nouveaux outils digitaux arrivent, j'exige que mes équipes les adoptent très rapidement.",
    "Plutôt que de critiquer les exigences des nouvelles générations (Z, Millennials), nous devons repenser totalement notre modèle pour eux.",
    "Les fiches de postes trop détaillées enferment les gens ; j'attends de mes salariés une totale polyvalence sur tous les fronts.",
    "Pour la rémunération, je privilégie souvent un modèle opportuniste : des primes flash au résultat immédiat plutôt que des augmentations lissées.",
    "Si cela permet de gagner en rapidité de décision dans mon entreprise, je n'hésiterais pas à supprimer brutalement une strate de managers.",
    "J'encourage une forme de 'désorganisation créative' au sein de mes équipes si cela permet de débloquer de bien meilleures idées.",
    "Accepter que mes managers fassent d'énormes erreurs en testant de nouvelles méthodes est toujours préférable à l'immobilisme.",
    "Remplacer le sempiternel et lourd entretien annuel figé par un échange informel et continu me semble primordial aujourd'hui.",
    "Face à une recrue perle rare qui dépasse largement mon budget habituel, je suis prêt à modifier tout mon modèle économique pour le payer.",
    "Puisque la jeune génération est volatile, notre défi aujourd'hui n'est plus de réduire le turnover, mais d'accepter une rotation accélérée permanente."
];

const allData = [];

function pushItems(arr, dim, sectionPrefix) {
    arr.forEach((desc, index) => {
        allData.push({
            id: "Q_" + dim + "_" + (index + 1),
            section: sectionPrefix,
            category: "PATRONAT_STRATEGIE",
            description: desc,
            dim: dim
        });
    });
}

pushItems(AUT_QUESTIONS, 'AUT', 'Gouvernance & Pouvoir');
pushItems(EMP_QUESTIONS, 'EMP', 'Politique RH & Climat Social');
pushItems(INT_QUESTIONS, 'INT', 'Cadre Légal & Ethique');
pushItems(RES_QUESTIONS, 'RES', 'Résilience & Productivité');
pushItems(ADA_QUESTIONS, 'ADA', 'Agilité & Innovation Stratégique');

fs.writeFileSync('src/data/questions_recruteur.json', JSON.stringify(allData, null, 2));

console.log("Fichier JSON de 100 questions généré dans src/data/questions_recruteur.json");
