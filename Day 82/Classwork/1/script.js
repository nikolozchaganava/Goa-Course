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
    updateDisplay();
};

// Decrease button function
decreaseBtn.onclick = function() {
    if (counter > 0) {
        counter--;
    }
    updateDisplay();
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
    number.innerText = counter;
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

// Making menu button it's function
// Open
function openMenu() {
    document.getElementById('sidebar').style.display = 'block';
}

// Close
function closeMenu() {
    document.getElementById('sidebar').style.display = 'none';
}

// Making purchase button appear whenever item's quantity is more than 0

function greenBtn(){
    if(counter > 0){
        document.getElementById('confirm').style.display = 'block';
        document.getElementById('cartBox').style.height = '11em';
    } else {
        document.getElementById('confirm').style.display = 'none';
        document.getElementById('cartBox').style.height = '5em';
    }
}