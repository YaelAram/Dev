console.log("Hello World");
const radius = 34.56;

console.log(
    "Circle Area: " +
        Number(radius * Math.PI).toLocaleString("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
        }) +
        " u2."
);

let finalIndex = 0;

for (let index = 0; index < 4; index++) {
    console.log("Index: " + index);
    finalIndex = index;
}

console.log("finalIndex: " + finalIndex);

const cities = ["New York", "Boston", "Miami"];

console.log("For loop");
for (let index = 0; index < cities.length; index++) {
    console.log(cities[index]);
    
}

console.log("For each loop");
cities.forEach(element => {
    console.log(element);
});

console.log("For in loop");
for (const index in cities) {
    console.log(index);
}

console.log("For of loop");
for (const city of cities) {
    console.log(city);
}


