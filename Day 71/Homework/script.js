let counter = 0;

const counterDisplay = document.getElementById('counter');
const plusButton = document.getElementById('plusButton');
const resetButton = document.getElementById('resetButton');
const minusButton = document.getElementById('minusButton');

function updateCounterDisplay() {
    counterDisplay.textContent = counter;
}


plusButton.addEventListener('click', function() {
    counter++;
    updateCounterDisplay();
});

resetButton.addEventListener('click', function() {
    counter = 0;
    updateCounterDisplay();
});

minusButton.addEventListener('click', function(){
    counter--;
    updateCounterDisplay();
});