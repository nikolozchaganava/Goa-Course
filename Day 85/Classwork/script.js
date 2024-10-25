const selectMortgageType = selectedCheckbox => {
    document.querySelectorAll('input[name="mortgage-type"]').forEach(checkbox => {
        if (checkbox !== selectedCheckbox) {
            checkbox.checked = false;
        }
    });
};

const calculateMortgage = () => {
    const loanAmount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById('term').value) * 12;
    const mortgageType = document.querySelector('input[name="mortgage-type"]:checked').value;

    let monthlyPayment, totalRepayment;

    if (mortgageType === 'repayment') {
        const x = Math.pow(1 + interestRate, loanTerm);
        monthlyPayment = (loanAmount * x * interestRate) / (x - 1);
        totalRepayment = monthlyPayment * loanTerm;
    } else if (mortgageType === 'interest-only') {
        monthlyPayment = loanAmount * interestRate;
        totalRepayment = (monthlyPayment * loanTerm) + loanAmount;
    }

    document.getElementById('monthly-repayments').textContent = formatNumber(monthlyPayment);
    document.getElementById('repay').textContent = formatNumber(totalRepayment);

    return false;
};

const formatNumber = number => Math.round(number * 100) / 100;

const showResults = () => {
    document.getElementById('results').style.display = 'block';
    document.getElementById('empty').style.display = 'none';
};
