import { Person } from "../interfaces/Person";
import { Student } from "../interfaces/Student";

// Se crea un tipo personalizado con una condicional OR para validar los dos tipos de datos aceptados
type PersonOrStudent = (Person | Student);

// Funcion generica clasica
export function generic<T extends PersonOrStudent>(argument: T): T {
  return argument;
};

// Funcion de flecha generica
export const genericArrow = <T extends Person>(argument: T): T => argument;
