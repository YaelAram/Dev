const currentDate = new Date();
console.log(currentDate.toString());

console.log("=================================================");

// Formating date
// long value: May 16, 2021
// full value: Sunday, May 16, 2021
// medium value: May 16, 2021
// short value: 5/16/21
const options = { dateStyle: "long" };
console.log(new Intl.DateTimeFormat("en-UK", options).format(currentDate));

// weekday values: long, short, narrow
// year values: numeric, 2-digit
// month values: numeric, 2-digit, long, short, narrow
// day values: numeric, 2-digit
const optionsExtra = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "2-digit",
};
console.log(new Intl.DateTimeFormat("en-UK", optionsExtra).format(currentDate));

console.log("=================================================");

// Formating time
// long value: 7:31:55 PM CDT
// full value: 7:33:22 PM Central Daylight Time
// medium value: 7:31:55 PM CDT
// short value: 7:34 PM
// with hour12: false  ->  19:36
const optionsTime = { timeStyle: "full" };
console.log(new Intl.DateTimeFormat("en-UK", optionsTime).format(currentDate));

// hour values: numeric, 2-digit
// minute values: numeric, 2-digit
// second values: numeric, 2-digit
// timeZoneName values: long, short
// hour12: true, false
// timeZone: UTC, or any region https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
const optionsExtraTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "America/Mexico_City",
    timeZoneName: "short",
};
console.log(
    new Intl.DateTimeFormat("en-UK", optionsExtraTime).format(currentDate)
);

console.log("=================================================");

// These values always evaluate to false
// false, undefined, NaN, null, 0, ''

const randomValue = 0;
if (randomValue) console.log("True value recived");
else console.log("False value recived");

console.log("=================================================");

// Setting the value using OR and AND operator
// AND operator returns the first FALSE value, if all the values are TRUE then returns the last value evaluated
let nameAuthor = "" && "Yael";
console.log(nameAuthor);

nameAuthor = "Yael" && "Juan";
console.log(nameAuthor);

// OR operator returns the first TRUE value, if all the values are FALSE then returns the last value evaluated
let distance = 0 || 1.2;
console.log(distance);

distance = 1.2 || 0;
console.log(distance);

console.log("=================================================");

const petNameReq = "";
const petName = petNameReq ? petNameReq : "petName";

console.log(petName);

console.log("=================================================");

let option = 1;

switch (option) {
    case 1:
        console.log("Option 1 selected");
        break;
    case 2:
        console.log("Option 2 selected");
        break;
    default:
        console.log("Default section triggered");
}

console.log("=================================================");
const myPets = ["Blue", "Cophie", "Blacky"];

// Classic For
for (let i = 0; i < myPets.length; i++) {
    console.log(`myPets[${i}]: ${myPets[i]}`);
}

console.log("=================================================");
// For each
myPets.forEach((value, index) =>
    console.log(`myPets[${index}]: ${myPets[index]}`)
);

console.log("=================================================");
// For in iterates over all the keys of an object or collection
for (const i in myPets) {
    if (Object.hasOwnProperty.call(myPets, i)) {
        console.log(`myPets[${i}]: ${myPets[i]}`);
    }
}

console.log("=================================================");
// For of iterates over all the values of a collection
for (const pet of myPets) {
    console.log(pet);
}
