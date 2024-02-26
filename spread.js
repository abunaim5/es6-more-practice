/**
 * Write a function called 'concatArrays' that takes two arrays as arguments and returns a new array containing all elements from both arrays using the spread operator.
*/
const concatArrays = (arr1 = [], arr2 = []) => [...arr1, ...arr2];
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6, 7];
const newArr = concatArrays(numbers1, numbers2);
// console.log(newArr);

/**
 * Write a function called 'copyArrays' that takes an array as an argument and returns a copy of that array using the spread operator.
*/
const copyArrays = (arr) => [...arr];
const numbers = [1, 2, 3, 4, 5, 6];
const copyOfNumbers = concatArrays(numbers);
// console.log(copyOfNumbers);
// copyOfNumbers.push(10);
// console.log(copyOfNumbers);
// console.log(numbers);

/**
 * Write a function called 'mergeObjects' that takes two objects as arguments and returns a new object containing all key-value pairs from both objects using the spread operator. If there are conflicting keys, the values from the second object should overwrite the values from the first.
*/
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
const cat = { name: 'Shadow', age: 2, color: 'Gray' };
const favFood = { food: 'Cat food' }
// const dog = { name: 'Dobby', age: 5};
const newObj = mergeObjects(cat, favFood);
// console.log(newObj);

/**
 * Write a function called 'sum' that takes any number of arguments and return the sum of all arguments using the spread operator to gather the arguments into an array.
*/
const sum = (...numbers) => {
    return numbers.reduce((acc, current) => acc + current, 0);
};
const result = sum(1, 2, 3, 4, 5);
// console.log(result);

/**
 *  Write a function called 'cloneWithNested' that takes an object with nested structures as an argument and returns a deep copy of that object, ensuring that nested objects and arrays are also cloned using the spread operator recursively.
*/
/* const person = {
    name: 'John',
    age: 26,
    salary: 50000,
    hobby: {
        1: 'Traveling',
        2: 'Gardening',
        3: 'cycling',
        favPlace: {
            places: ['Switzerland', 'Queens America']
        }
    },
}
const cloneWithNested = (obj) => {
    
    const newObj = {...objArr};
    console.log(newObj);
    // newObj.hobby.favPlace.places.push('Bangladesh');
    // console.log(newObj.hobby.favPlace.places);
    // console.log(obj.hobby.favPlace.places);
}
const newObject = cloneWithNested(person);
// console.log(person); */