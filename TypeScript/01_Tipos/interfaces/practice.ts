// Crear interfaces
interface Auto {
  encender: boolean,
  velocidadMaxima: number,
  acelerar(): void;
};

interface usarAuto {
  (auto: Auto): void
};

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil: usarAuto = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  }
}

console.log(batimovil);
conducirBatimovil(batimovil);
console.log(batimovil);

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
};

const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false
}

const reir = (guason: Guason): void => {
  if (guason.reir) console.log("JAJAJAJA");
}


// Cree una interfaz para la siguiente funcion
interface obtenerPoblacion {
  (ciudadanos: string[]): number;
};

const ciudadGotica: obtenerPoblacion = (ciudadanos: string[]): number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface Humano {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
};

class Persona implements Humano {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string,
  ) { }

  imprimirBio(): void {
    console.log(`${this.nombre} ${this.edad} años`);
  }
};

const yael = new Persona('Yael', 23, 'Masculino', 'Soltero');
console.log(yael);
yael.imprimirBio();
