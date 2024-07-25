function calculateSquareRoot() {
    const number = document.getElementById('numberInput').value;
    const result = document.getElementById('result');
    
    if (number) {
        const squareRoot = Math.sqrt(number);
        result.innerHTML = `The square root of ${number} is ${squareRoot.toFixed(2)}`;
    } else {
        result.innerHTML = 'Please enter a valid number';
    }
}