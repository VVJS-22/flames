let form = document.querySelector('form');
form.addEventListener('reset', () => resetApp());
form.addEventListener('submit', (event) => {
    event.preventDefault();
    calculateFlames(form);
});

function calculateFlames(form) {
    console.log(form)
}

function resetApp() {
    console.log("reset")
}
