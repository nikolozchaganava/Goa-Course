function updateCardDisplay() {
    const userNameInput = document.getElementById("user-name");
    const cardNumberInput = document.getElementById("card-number");
    const expMonthInput = document.getElementById("MM");
    const expYearInput = document.getElementById("YY");
    const cvcInput = document.getElementById("cvc");

    const cardNameDisplay = document.querySelector(".card-name");
    const cardNumberDisplay = document.querySelector(".card-number");
    const cardExpiryDisplay = document.querySelector(".card-expiry");
    const cardCvcDisplay = document.querySelector(".card-cvc");

    cardNameDisplay.textContent = userNameInput.value || "Jane Appleseed";
    cardNumberDisplay.textContent = cardNumberInput.value || "0000 0000 0000 0000";
    cardExpiryDisplay.textContent = `${expMonthInput.value || "00"}/${expYearInput.value || "00"}`;
    cardCvcDisplay.textContent = cvcInput.value || "000";
}

function handleSubmit(event) {
    event.preventDefault();
    const form = document.querySelector("form");
    const thankYouMessage = document.querySelector(".thank-you");

    form.style.display = "none";
    thankYouMessage.style.display = "block";
}

function handleContinue() {
    const form = document.querySelector("form");
    const thankYouMessage = document.querySelector(".thank-you");

    form.style.display = "block";
    thankYouMessage.style.display = "none";
    form.reset();
    updateCardDisplay();
}