"use strict";
const sumar = (a, b) => a + b;
console.log(sumar(1, 2));
const contar = (heroes) => heroes.length;
const heroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
console.log(contar(heroes));
const llamarBatman = (llamar = true) => {
    if (llamar)
        console.log("Batiseñal activada");
};
llamarBatman();
const unirheroes = (...personas) => personas.join(", ");
console.log(unirheroes(...heroes));
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
//# sourceMappingURL=practice.js.map