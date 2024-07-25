function changeTextColor() {
    let body = document.getElementById("body");
    let randomHexColor = '#' + Math.floor(Math.random() * 123456);
    let numberElement = document.getElementById('randomHex');
    numberElement.textContent = randomHexColor;
    body.style.background = randomHexColor;
}