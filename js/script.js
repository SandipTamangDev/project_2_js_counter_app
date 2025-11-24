let counter = parseInt(localStorage.getItem("counter")) || 0;
const max = 10;
const min = -10;

const value = document.getElementById('value');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const body = document.querySelector('body');

function updateCounter() {
    value.textContent = counter;
    body.style.backgroundColor =
        counter > 0 ? "#c5c5c5ff" :
        counter < 0 ? "#000103" :
        "#515052";

    increase.disabled = counter >= max;
    decrease.disable = counter <= min;

    // if(counter > 0) {
    //     body.style.backgroundColor = '#c5c5c5ff';
    // } else if (counter < 0) {
    //     body.style.backgroundColor = '#000103';
    // } else {
    //     body.style.backgroundColor = '#515052';
    // }
    localStorage.setItem("counter", counter);
}



increase.addEventListener('click', () => {
    if (counter < max) counter++;
    value.textContent = counter;
    updateCounter();
});

decrease.addEventListener('click', () => {
    if (counter > min) counter--;
    value.textContent = counter;
    updateCounter();
});

reset.addEventListener('click', () => {
    counter = 0;
    value.textContent = counter;
    updateCounter();
});

updateCounter();


