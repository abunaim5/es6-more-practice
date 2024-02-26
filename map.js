//  Given an array of numbers, use the map method to create a new array where each number is doubled.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
// console.log(doubled);

// Given an array of strings, use the map method to create a new array containing the lengths of each string.
const countries = ['Bangladesh', 'America', 'Canada', 'Switzerland'];
const lengths = countries.map(c => c.length);
// console.log(lengths);

// Given an array of objects representing people with firstName and lastName properties, use the map method to create a new array of full names in the format "firstName lastName".
const people = [
    {
        firstName: 'John',
        lastName: 'Doe'
    }
];
const fullName = people.map(p => `${p.firstName} ${p.lastName}`);
// console.log(fullName);

//  Given an array of temperatures in Celsius, use the map method to convert each temperature to Fahrenheit. The conversion formula is: Fahrenheit = Celsius * 9/5 + 32.
const temperature = [27, 30, 35, 40, 47];
const fahrenheit = temperature.map(c => (c * 9 / 5) + 32);
// console.log(fahrenheit);

// Given an array of objects representing products with name and price properties, use the map method to create a new array containing only the prices of each product.
const products = [
    { name: 'Iphone', price: 120000 },
    { name: 'Macbook Pro', price: 150000 },
    { name: 'hp', price: 90000 },
    { name: 'Lenovo', price: 65000 }
];
const productPrices = products.map(p => p.price);
// console.log(productPrices);