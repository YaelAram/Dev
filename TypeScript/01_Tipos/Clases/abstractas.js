"use strict";
class Cuadrilatero {
    constructor(nombre, base, altura) {
        this.nombre = nombre;
        this.base = base;
        this.altura = altura;
    }
}
;
class Cuadrado extends Cuadrilatero {
    constructor(lado, nombre = 'Cuadrado') {
        super(nombre, lado, lado);
    }
    area() {
        return this.base * this.altura;
    }
    descripcion() {
        return `${this.nombre} con una longitud por lado de ${this.altura} unidades`;
    }
}
class Rectangulo extends Cuadrilatero {
    constructor(base, altura, nombre = 'Rectangulo') {
        super(nombre, base, altura);
    }
    area() {
        return this.base * this.altura;
    }
    descripcion() {
        return `${this.nombre} con una base de ${this.base} unidades y una altura de ${this.altura} unidades`;
    }
}
const cuadrado1 = new Cuadrado(5);
console.log(cuadrado1);
console.log(cuadrado1.descripcion());
console.log(cuadrado1.area());
const reactangulo = new Rectangulo(5, 4);
console.log(reactangulo);
console.log(reactangulo.descripcion());
console.log(reactangulo.area());
//# sourceMappingURL=abstractas.js.map