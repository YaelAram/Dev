"use strict";
function sayHi() {
    console.log('Hi');
}
const sayBye = (name) => console.log(`Bye ${name}`);
sayHi();
sayBye('Yael');
const fullName = (name, lastName) => `${name} ${lastName}`;
console.log(fullName('Yael', 'Castillo'));
const fullNameOpt = (name, lastName) => `${name} ${lastName !== null && lastName !== void 0 ? lastName : ''}`;
console.log(fullNameOpt('Yael'));
const fullNameUpper = (name, upper = false, lastName) => {
    const fullName = `${name} ${lastName !== null && lastName !== void 0 ? lastName : ''}`;
    return (upper) ? fullName.toUpperCase() : fullName;
};
console.log(fullNameUpper('Yael', true, 'Castillo'));
console.log(fullNameUpper('Yael'));
const createFullName = (firstName, ...names) => `${firstName} ${names.join(' ')}`;
console.log(createFullName('Clark', 'Joseph', 'Kent'));
console.log(createFullName('Clark', 'Joseph'));
console.log(createFullName('Clark'));
const addNumbers = (a, b) => a + b;
const greet = (name) => `Hi ${name}`;
const myFunction = addNumbers;
console.log(myFunction(1, 2));
//# sourceMappingURL=funciones.js.map