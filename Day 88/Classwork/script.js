document.addEventListener('DOMContentLoaded', function() {
    let billInput = document.getElementById('bill');
    let peopleInput = document.getElementById('number-of-people');
    let tipInputs = document.querySelectorAll('.buttons input');
    let tipAmountDisplay = document.getElementById('tip-amount');
    let totalAmountDisplay = document.getElementById('total');
    let resetButton = document.getElementById('reset');

    billInput.addEventListener('input', calculateTip);
    peopleInput.addEventListener('input', calculateTip);
    tipInputs.forEach(function(input) {
        input.addEventListener('input', calculateTip);
    });
    resetButton.addEventListener('click', reset);

    function calculateTip() {
        let billValue = parseFloat(billInput.value) || 0;
        let peopleValue = parseInt(peopleInput.value) || 1;
        let tipValue = getTipValue();

        if (peopleValue > 0) {
            let tipAmount = (billValue * tipValue) / peopleValue;
            let totalAmount = (billValue + billValue * tipValue) / peopleValue;
            tipAmountDisplay.innerText = '$' + tipAmount.toFixed(2);
            totalAmountDisplay.innerText = '$' + totalAmount.toFixed(2);
        } else {
            tipAmountDisplay.innerText = '$0.00';
            totalAmountDisplay.innerText = '$0.00';
        }
    }

    function getTipValue() {
        for (let i = 0; i < tipInputs.length; i++) {
            let value = parseFloat(tipInputs[i].value) / 100;
            if (value) {
                return value;
            }
        }
        return 0;
    }

    function reset() {
        billInput.value = '';
        peopleInput.value = '';
        tipInputs.forEach(function(input) {
            input.value = '';
        });
        tipAmountDisplay.innerText = '$0.00';
        totalAmountDisplay.innerText = '$0.00';
    }
});
