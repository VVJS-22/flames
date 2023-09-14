import { getNames, removeSimilarities, getFlamesCount, getResult } from './processResult.js';
import { renderResult, resetResult } from "./handleResult.js";

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
    let flamesCount = getFlamesCount(remainingName, remainingPartnerName);
    let result = getResult(flamesCount, flames);
    renderResult(result);
}

function resetApp() {
    resetResult();
}
