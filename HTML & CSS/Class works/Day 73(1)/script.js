//Class work 1

//Step 1

const movie = {
    name: "ჯარისკაცის მამა",
    author: "რეზო ჩხეიძე",
    year: 1964,
    rate: "9/10",
    getSummary: function(){
        return `${movie.name} by ${movie.author}. Published in ${movie.year} and has ${movie.rate} rating.`
    }
};

console.log(movie.getSummary());

//Step 2

console.log(movie.name, movie.author, movie.year)

movie.rate = "10/10";

//Step 3

console.log(movie.getSummary());


//Class work 2

// Step 1
function Movie(name, author, year, rating) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.rating = rating;

    this.displayInfo = function() {
        return `${this.name} - ის ავტორია ${this.author}, ეს ფილმი გამოიშვა ${this.year} და ამ ფილმს აქვს ${this.rating}`;
    }
}

// Step 2
const movie1 = new Movie("ჯარისკაცის მამა", "რეზო ჩხეიძე", 2010, 8.8);
const movie2 = new Movie("The Matrix", "The Wachowskis", 1999, 8.7);
const movie3 = new Movie("Interstellar", "Christopher Nolan", 2014, 8.6);

console.log(movie1);
console.log(movie2);
console.log(movie3);

// Step 3
console.log(`ფილმი 1: სახელი - ${movie1.name}, ავტორი - ${movie1.author}, გამოშვების წელი - ${movie1.year}`);
console.log(`ფილმი 2: სახელი - ${movie2.name}, ავტორი - ${movie2.author}, გამოშვების წელი - ${movie2.year}`);
console.log(`ფილმი 3: სახელი - ${movie3.name}, ავტორი - ${movie3.author}, გამოშვების წელი - ${movie3.year}`);

//Step 4
movie1.displayInfo();
movie2.displayInfo();
movie3.displayInfo();