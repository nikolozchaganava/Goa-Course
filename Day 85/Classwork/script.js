function selectMortgageType(selectedCheckbox) {
    var checkboxes = document.querySelectorAll('input[name="mortgage-type"]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox !== selectedCheckbox) {
            checkbox.checked = false;
        }
    });
}

function calculateMortgage() {
    var loanAmount = parseFloat(document.getElementById('amount').value);
    var interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    var loanTerm = parseInt(document.getElementById('term').value) * 12;
    var mortgageType = document.querySelector('input[name="mortgage-type"]:checked').value;

    var monthlyPayment;
    var totalRepayment;

    if (mortgageType === 'repayment') {
        var x = Math.pow(1 + interestRate, loanTerm);
        monthlyPayment = (loanAmount * x * interestRate) / (x - 1);
        totalRepayment = monthlyPayment * loanTerm;
    } else if (mortgageType === 'interest-only') {
        monthlyPayment = loanAmount * interestRate;
        totalRepayment = (monthlyPayment * loanTerm) + loanAmount;
    }

    document.getElementById('monthly-repayments').textContent = formatNumber(monthlyPayment);
    document.getElementById('repay').textContent = formatNumber(totalRepayment);

    return false;
}

function formatNumber(number) {
    return Math.round(number * 100) / 100;
}

function showResults(){
    let results = document.getElementById('results');
    results.style.display = 'block';

    let empty = document.getElementById('empty');
    empty.style.display = 'none'
}