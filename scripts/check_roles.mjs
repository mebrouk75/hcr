import { HCR_DATA } from '../src/data/hcr_questions.js';

const roles = ['BARMAN', 'SERVEUR', 'CHEF_RANG'];
for (const role of roles) {
    const data = HCR_DATA[role];
    if (!data || data.length === 0) { console.log(role + ': NO DATA'); continue; }
    let questions = [];
    data.forEach(function (item) {
        if (item.items) questions.push(...item.items);
        else if (item.id) questions.push(item);
    });
    const traits = new Set();
    let hasType = false;
    questions.forEach(function (q) {
        if (q.type) hasType = true;
        if (q.options) {
            q.options.forEach(function (o) {
                if (o.trait) traits.add(o.trait);
            });
        }
    });
    console.log(role + ': ' + questions.length + ' questions, ' + traits.size + ' traits');
    console.log('  Has type field: ' + hasType);
    console.log('  Traits: ' + [...traits].join(', '));
    console.log('');
}
