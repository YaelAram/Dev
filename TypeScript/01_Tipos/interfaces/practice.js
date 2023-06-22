"use strict";
;
;
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
console.log(batimovil);
conducirBatimovil(batimovil);
console.log(batimovil);
;
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir)
        console.log("JAJAJAJA");
};
;
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
;
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() {
        console.log(`${this.nombre} ${this.edad} años`);
    }
}
;
const yael = new Persona('Yael', 23, 'Masculino', 'Soltero');
console.log(yael);
yael.imprimirBio();
//# sourceMappingURL=practice.js.map