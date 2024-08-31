//Task 1
//Create an object
const object = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "United States",
    }
}

//Change properties
object.age = 25;
object.address.country = 'Germany';

//Add new properties
object.email = 'John@example.com';

//Delete properties
delete object.country
