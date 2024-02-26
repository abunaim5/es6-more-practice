/**
 * Given an object representing a user profile, which may or may not have nested properties, write a line of code that accesses the address.city property if it exists, or returns undefined if any intermediate property is missing.
*/
const person = {
    name: 'John Doe',
    age: 34,
    address: {
        // city: 'Nowhere'
    }
};
const details = person.address?.city?.street;
// console.log(details);

/**
 * Given an array of objects, each representing a user, write a line of code that accesses the email property of the first user in the array, if it exists, or returns undefined if the array is empty or the property is missing.
*/
const users = [
    { name: 'John Doe', email: 'doe@gmail.com' },
    { name: 'Michel Tom', email: 'tom@gmail.com' }
];
const firstPerson = users[0]?.email;
// console.log(firstPerson);

/**
 *  Given an object representing a user, which may or may not have a getFullName method, write a line of code that calls the method if it exists and returns its result, or returns undefined if the method is missing.
*/
const user = {
    name: 'John Doe',
    age: 34,
    // getFullName: (firstName, lastName) => `${firstName} ${lastName}`
}
const userName = user.getFullName?.('Michel', 'Mike');
// console.log(userName);

/**
 * Given an object representing a user, which may or may not have a profile object with a bio property, write a line of code that accesses the bio property if it exists, or returns a default message like "Bio not available" if it is missing.
*/
const user1 = {
    name: 'John Doe',
    age: 30,
    profile: {
        // bio: 'Web Developer',
    }
};
const userBio = user1.profile?.bio;
if (typeof userBio !== 'undefined') {
    // console.log(userBio);
}
else {
    // console.log('Bio not available');
}

// Nullish coalescing with optional chaining
const bio = user1.profile?.bio ?? 'Bio not available';
// console.log(bio);

/**
 * Given an object representing a company, which may or may not have a departments array, each containing objects representing departments, which may or may not have a manager object, write a line of code that accesses the manager.name property of the first department, if it exists, or returns undefined otherwise.
*/
const company = {
    name: 'ABC Company',
    departments: [
        {
            name: 'Engineering',
            manager: { name: 'John Doe' }
        },
        {
            name: 'Marketing',
        },

    ]
};
const mName = company.departments?.[0]?.manager?.name;
// console.log(mName);