import powers, { Hero, Teacher, createPower } from './classes';
import { Product } from './classes/Product';
import { generic, genericArrow } from './helpers/generics';
import { Bifunction, Person, Pokemon, Student, User } from './interfaces';
import { getPokemon } from './providers/pokeapi';

// Obtener las variables de entorno de VITE
console.log(import.meta.env.VITE_PASS);

// Modulos en TS
const ironman = new Hero('Iron Man', 1, 40);
console.log(ironman);
console.log(ironman.describe());

console.log(powers[ironman.getPowerId]);
createPower({ id: 3, name: 'Ice' });
console.log(powers);

// Genericos
const yael = {
  name: 'Yael',
  age: 23,
  school: 'UNAM'
};

console.log(generic<Person>(yael).name);
console.log(generic<Student>(yael).school);

console.log(genericArrow<Person>(yael));

// Interface (Tipos) con genericos
const user: User<number, string> = {
  id: 1,
  user: 'Yael',
  getName() {
    return this.user;
  },
};
const user2: User<string, string> = {
  id: 'asd',
  user: 'Yael',
  getName() {
    return `${this.id} ${this.user}`;
  },
};
console.log(user);
console.log(user.getName());
console.log(user2);
console.log(user2.getName());

// Interface (Funcion) con genericos
const add: Bifunction<number, string> = (value1: number, value2: number): string => {
  return `${value1} + ${value2} = ${value1 + value2}`;
};
console.log(add(1, 2));

// Clase que implementa una Interface con genericos
const teacher: Teacher<number, Person> = new Teacher(1, yael);
console.log(teacher);
console.log(teacher.getName());

// Genericos con Axios
const pokemon: Pokemon = await getPokemon(1);
console.log(pokemon.sprites.front_default);

// Decoradores
const product: Product = new Product('Silla');
product.saveProductOnDB(8000);
product.url = 'asd';
console.log(product.url)
