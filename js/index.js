import { getNames, removeSimilarities } from './processResult.js'

let form = document.querySelector('form');
form.addEventListener('reset', () => resetApp());
form.addEventListener('submit', (event) => {
    event.preventDefault();
    calculateFlames(form);
});

function calculateFlames(form) {
    let flames = ['Friend', 'Love', 'Affection', 'Marriage', 'Enemy', 'Sister'];
    let [name, partnerName] = getNames(form);
    let [remainingName, remainingPartnerName] = removeSimilarities(name, partnerName);
    console.log(remainingName, remainingPartnerName);
}

function resetApp() {
    console.log("reset")
}
