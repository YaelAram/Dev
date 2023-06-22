// Link ES6 https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets

// Simple lambda functions
const add = (firstNumber = 0, secondNumber = 0) => (firstNumber + secondNumber);
const substract = (firstNumber = 0, secondNumber = 0) => (firstNumber - secondNumber);
const multiply = (firstNumber = 0, secondNumber = 0) => (firstNumber * secondNumber);
const divition = (firstNumber = 0, secondNumber = 0) => (firstNumber / secondNumber);

const a = 5, b = 6;
console.log('Add: ' + add(a, b));
console.log('Substract: ' + substract(a, b));
console.log('Multiply: ' + multiply(a, b));
console.log('Divition: ' + divition(a, b));

console.log('======================================');

// Easier way to create implicit objects
const createPersonObject = (name = '', lastName = '', age = 0) => ({name, lastName, age});
const {name: user} = createPersonObject('Oscar', 'Lara', 22); // 'user' is an alias for 'name' property
const {name: nickName, age} = createPersonObject('Oscar', 'Lara', 22);
console.log(createPersonObject('Yael', 'Castillo', 21));
console.log('User: ' + user);
console.log(nickName + ' ' + age);

console.log('======================================');

// Return an array
const returnArray = (name = '', lastName = '') => [name, lastName];
const [userName, userLastName] = returnArray('Juan', 'Ortiz');

console.log('User: ' + userName);
console.log('Last name: ' + userLastName);

console.log('======================================');

// Get properties from an object (Easier)
const animal = {
    name: 'Dog',
    color: 'Black'
};

const printProperties = ({name, color}) => {
    console.log("Name: " + name);
    console.log("Color: " + color);
}

printProperties(animal);
const properties = Object.getOwnPropertyNames(animal);
console.log(animal['name']);
console.log(properties);

console.log('======================================');

// Function with n arguments

const printArguments = (...arguments) => console.log(arguments);
printArguments(1, 2, 3, 'Hello', true);

const multiplyNumbers = (...numbers) => {
    let aux = 1;
    numbers.forEach( (value) => aux *= value );
    return aux;
};

console.log('The result is: ' + multiplyNumbers(1, 2, 3, 4, 5));

console.log('======================================');

// Create an object with other reference

const lotrBook = {name: 'Lord of the rings'};
const harryPotterBook = {...lotrBook};

lotrBook.name += ': The fellowship of the ring';
harryPotterBook.name = 'Harry Potter: The chamber of secrets';

console.log(lotrBook);
console.log(harryPotterBook);

console.log('======================================');

// Create an object with other reference

const fruits = ['Apple', 'Banana'];
const otherFruits = [...fruits];

otherFruits.push('Cucumber');
fruits.pop();

console.log(fruits);
console.log(otherFruits);
