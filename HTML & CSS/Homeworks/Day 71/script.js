let counter = 0;

const counterDisplay = document.getElementById('counter');
const plusButton = document.getElementById('plusButton');
const resetButton = document.getElementById('resetButton');
const minusButton = document.getElementById('minusButton');

plusButton.addEventListener('click', () => {
    counter++;
    updateCounterDisplay();
});

resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounterDisplay();
});

minusButton.addEventListener('click', () => {
    counter--;
    updateCounterDisplay();
});

function updateCounterDisplay() {
    counterDisplay.textContent = counter;
}