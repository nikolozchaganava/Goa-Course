// The quantity function
// creating variables for quantity 
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const number = document.getElementById('quantity');

// The quantity number is set to 0 by default
let counter = 0;

// Increase button function
increaseBtn.onclick = function() {
    counter++;
    number.innerText = counter;
};

// Decrease button function
decreaseBtn.onclick = function() {
    if (counter > 0) {
        counter--;
    }
    number.innerText = counter;
};

/*----------------------------------------------------------------------------*/

// Image swaps function
var thumbnails = document.querySelectorAll('.thumbnail');
var mainImage = document.getElementById('mainImage');

thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        mainImage.src = thumbnail.src.replace('-thumbnail', '');
    });
});

/*----------------------------------------------------------------------------*/

// Making the box visible and invisible
function showProfileBox(id) {
    var box = document.getElementById(id);
    box.classList.toggle('visible');
}

// Making cart box main text change by its quantity
let cartBoxText = document.getElementById('cartBoxMain');
let confirmBtn = document.getElementById('confirm');

function updateDisplay() {
    if(counter === 0) {
        cartBoxText.innerText = 'Your cart is empty';
        confirmBtn.classList.add('hidden');
        confirmBtn.classList.remove('visibleBtn');
    } else if(counter > 0) {
        cartBoxText.innerText = `Would you like to purchase ${counter} items?`;
        confirmBtn.classList.remove('hidden');
        confirmBtn.classList.add('visibleBtn');
    }
}

// Making a fucntion that after clicking the confirm button it says "items purchesed"

confirmBtn.onclick = function() {
    cartBoxText.innerText = 'Items purchased!';
    cartBoxText.style.color = 'green';
    confirmBtn.classList.add('hidden');
};