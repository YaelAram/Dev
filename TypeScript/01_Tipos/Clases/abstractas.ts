abstract class Cuadrilatero {
  constructor(
    protected nombre: string,
    protected base: number,
    protected altura: number
  ) { }

  public abstract area(): number;
  public abstract descripcion(): string;
};

class Cuadrado extends Cuadrilatero {
  constructor(
    lado: number,
    nombre: string = 'Cuadrado'
  ) {
    super(nombre, lado, lado);
  }

  public area(): number {
    return this.base * this.altura;
  }

  public descripcion(): string {
    return `${this.nombre} con una longitud por lado de ${this.altura} unidades`
  }
}

class Rectangulo extends Cuadrilatero {
  constructor(
    base: number,
    altura: number,
    nombre: string = 'Rectangulo',
  ) {
    super(nombre, base, altura);
  }

  public area(): number {
    return this.base * this.altura;
  }

  public descripcion(): string {
    return `${this.nombre} con una base de ${this.base} unidades y una altura de ${this.altura} unidades`;
  }
}

const cuadrado1: Cuadrado = new Cuadrado(5);
console.log(cuadrado1)
console.log(cuadrado1.descripcion());
console.log(cuadrado1.area());

const reactangulo: Rectangulo = new Rectangulo(5, 4);
console.log(reactangulo)
console.log(reactangulo.descripcion());
console.log(reactangulo.area());
