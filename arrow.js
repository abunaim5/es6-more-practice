// Write a simple arrow function called 'add' that takes two parameters 'a' and 'b' and returns their sum.
const add = (a, b) => a + b;
// console.log(add(5, 8))

/**
 * Write an arrow function called 'doubleArray' that takes an array of numbers as input and returns a new array where each number is doubled.
*/
const doubleArray = (arr) => {
    const newArr = [];
    for (let num of arr) {
        const double = num * 2;
        newArr.push(double);
    }
    return newArr;
}
const numbers = [4, 6, 7, 9, 20];
const result = doubleArray(numbers);
// console.log(result);

// another way
const newArr = numbers.map(n => n * 2);
// console.log(newArr);

/**
 * Create an object called 'calculator' with properties 'add', 'subtract', 'multiply', and 'divide' each containing an arrow function that performs the corresponding mathematical operation on two numbers.
*/
const calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y
}
// console.log(calculator.add(3,9));

/**
 * Write a higher-order function called 'operateOnArray' that takes two parameters: an array of numbers and a function. The function should apply the provided function to each element of the array and return the result.
*/
const operateOnArray = (arr, fun) => {
    const result = [];
    for (let num of arr) {
        const add = fun;
        const sumOfNum = add(num);
        result.push(sumOfNum);
    }
    return result;
}
const numberArr = [1, 2, 3];
const fun = x => x * 2;
const results = operateOnArray(numberArr, fun);
// console.log(results);

/**
 * Create an object called 'counter' with a property 'count' initialized to 0, and method 'increment' that uses an arrow function to increment the 'count' property by 1. Test the method to ensure it correctly increment the count.
*/
const counter = {
    count: 0,
    increment: () => {
        counter.count++;
        return counter.count;
    }
};
let count = counter.increment();
// console.log(count);
// count = counter.increment();
// console.log(count);
// count = counter.increment();
// console.log(count);
