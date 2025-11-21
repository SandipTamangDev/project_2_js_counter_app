let counter = 0;

const value = document.getElementById('value');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const body = document.querySelector('body');

function updateCounter() {
    value.textContent = counter;

    if(counter > 0) {
        body.style.backgroundColor = '#274722ff';
    } else if (counter < 0) {
        body.style.backgroundColor = '#522d2dff';
    } else {
        body.style.backgroundColor = '#666c37ff';
    }
}



increase.addEventListener('click', () => {
    counter++;
    value.textContent = counter;
    updateCounter();
});

decrease.addEventListener('click', () => {
    counter--;
    value.textContent = counter;
    updateCounter();
});

reset.addEventListener('click', () => {
    counter = 0;
    value.textContent = counter;
    updateCounter();
});