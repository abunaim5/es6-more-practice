//Without using any temporary variable, write a function that swaps the values of two variables. Use array destructuring to achieve this.
const swap = (x, y) => [x, y] = [y, x];
// console.log(swap(5, 9))

/**
 * Given an array ['John', 'Doe', 40, 'blue'], write a line of code using array destructuring to extract the first name, last name, and age into variables. Ignore the last item in the array.
*/
const person = ['John', 'Doe', 40, 'blue'];
const [fName, lName, age, ...rest] = person;
// console.log(`My name is ${fName} ${lName} and I am ${age} years old.`);

// Write a line of code that uses object destructuring to extract the name of the user, as well as the city from the address.
const user = {
    id: 1,
    name: 'John Doe',
    address: {
        street: '404 Missing Ave',
        city: 'Nowhere',
        zipCode: '00000'
    }
};
const { name, address: { city } = {} } = user;
// console.log(`My name is ${name} and I live in ${city}.`);

/**
 * Write a function 'introduce' that takes an object as a parameter and uses destructuring in the function signature to extract name and age properties. The function should log a message like "My name is John Doe and I am 30 years old."
*/
const introduce = (object) => {
    const { name, age, ...rest } = object;
    return `My name is ${name} and I am ${age} years old`;
}
const person1 = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '404 Missing Ave',
        city: 'Nowhere'
    }
};
const mySelf = introduce(person1);
// console.log(mySelf);

/**
 * Write a line of code that destructures the title, author, and publicationYear from the book object, providing a default value of "Not specified" for publicationYear since it might not always be present.
*/
const book = {
    title: 'Invisible Cities',
    author: 'Italo Calvino',
    // publicationYear: 1999
}
const { title, author, publicationYear = 'Not specified' } = book;
// console.log(`The book name is ${title}. Written by ${author}. Publish date is ${publicationYear}.`);