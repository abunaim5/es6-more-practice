/**
 * InterPolation:
 * Create a template string that interpolates variables `name` and `age` to form a massage like "My name is John and I am 30 years old"
*/
const name = 'John';
const age = '30';
const massage = `My name is ${name} and I am ${age} years old`;
// console.log(massage);

/**
 * Multiline string:
 * Create a template string that represents a multiline poem or any text of your choice.
*/
const poet = 'Robert Frost';
const poemName = 'The Road Not Taken';
const poem = `
${poemName}
${poet}
Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;
`;
// console.log(poem);

/**
 * Expression evaluation:
 * Utilize template strings to evaluate an expression within a string.
*/
const multiply = `The multiply of 2 and 9 is ${2 * 9}`;
// console.log(multiply);

/**
 * Conditional output:
 * Create a template string that includes a conditional statement. if a variable 'isRaining' is true, the string should output "Remember to take an umbrella," otherwise, it should output "Enjoy the sunshine."
*/
const isRaining = true;
const rainOrShine = () => {
    if (isRaining === true) {
        return `Remember to take an umbrella`;
    }
    else {
        return `Enjoy the sunshine`;
    }
}
// console.log(rainOrShine())

/**
 * Function Integration:
 * Define a function that takes in parameters and returns a template string utilizing those parameters. For example, a function 'createEmail' that takes 'recipient' and 'sender' parameters and returns a string like "Email sent from sender to recipient."
*/
const createEmail = (recipient, sender) => `Email sent from ${sender} to ${recipient}.`;
const email = createEmail('John', 'Michel');
console.log(email);
