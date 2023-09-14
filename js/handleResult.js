export function renderResult(result) {
    if (result) {
        resetResult();
        let sleep = new Promise((res, rej) => {
            setTimeout(() => { res() }, 200);
        })
        sleep.then(() => {
            let resultElement = document.getElementById('result');
            if (!resultElement) {
                resultElement = document.createElement('div');
                resultElement.id = 'result';
                document.body.appendChild(resultElement);
            }
            resultElement.innerText = result;
        })
    } else {
        alert('Something went wrong');
    }
}

export function resetResult() {
    let resultElement = document.getElementById('result');
    resultElement && document.body.removeChild(resultElement);
}