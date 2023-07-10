import objectSupport from "dayjs/plugin/objectSupport";
import dayjs from "dayjs";

import { Clase } from "../interfaces/clase";

dayjs.extend(objectSupport);

export const sistemasInformacion: Clase[] = [
  {
    nombre: "Sistemas de Informacion",
    profesor: "Jorge Luis Candelario Alavez",
    salon: "A204",
    grupo: "1757",
    inicio: dayjs({ years: 2023, months: 7, day: 20, hours: 13, minutes: 0 }),
    fin: dayjs({ years: 2023, months: 7, day: 20, hours: 15, minutes: 0 }),
    tipo: "2-veces",
  },
  {
    nombre: "Sistemas de Informacion",
    profesor: "Aaron Velasco Agustin",
    salon: "A205",
    grupo: "1758",
    inicio: dayjs({ years: 2023, months: 7, day: 20, hours: 13, minutes: 0 }),
    fin: dayjs({ years: 2023, months: 7, day: 20, hours: 15, minutes: 0 }),
    tipo: "3-veces",
  },
];

export const programacionWeb: Clase[] = [
  {
    nombre: "Programacion Web 2",
    profesor: "Mariana Verduzco Rodriguez",
    salon: "A8118",
    grupo: "1757",
    inicio: dayjs({ years: 2023, months: 7, day: 20, hours: 13, minutes: 0 }),
    fin: dayjs({ years: 2023, months: 7, day: 20, hours: 14, minutes: 20 }),
    tipo: "3-veces",
  },
  {
    nombre: "Programacion Web 2",
    profesor: "Aaron Velasco Agustin",
    salon: "A203",
    grupo: "1758",
    inicio: dayjs({ years: 2023, months: 7, day: 20, hours: 15, minutes: 0 }),
    fin: dayjs({ years: 2023, months: 7, day: 20, hours: 17, minutes: 0 }),
    tipo: "2-veces",
  },
];

export const redesComputadoras: Clase[] = [
  {
    nombre: "Redes de Computadoras I",
    profesor: "Gerardo Torres Rodriguez",
    salon: "A11201",
    grupo: "1758",
    inicio: dayjs({ years: 2023, months: 7, day: 20, hours: 17, minutes: 0 }),
    fin: dayjs({ years: 2023, months: 7, day: 20, hours: 19, minutes: 0 }),
    tipo: "2-veces",
  },
  {
    nombre: "Redes de Computadoras I",
    profesor: "Enrique Garcia Guzman",
    salon: "A8117",
    grupo: "1757",
    inicio: dayjs({ years: 2023, months: 7, day: 20, hours: 16, minutes: 0 }),
    fin: dayjs({ years: 2023, months: 7, day: 20, hours: 18, minutes: 0 }),
    tipo: "2-veces",
  },
];

export const microcontroladores: Clase[] = [
  {
    nombre: "Micropocesadores y Microcontroladores",
    profesor: "Juan Manuel Hernandez Contreras",
    salon: "A8117",
    grupo: "1757",
    inicio: dayjs({ years: 2023, months: 7, day: 20, hours: 15, minutes: 0 }),
    fin: dayjs({ years: 2023, months: 7, day: 20, hours: 16, minutes: 20 }),
    tipo: "3-veces",
  },
  {
    nombre: "Micropocesadores y Microcontroladores",
    profesor: "Efren Lozano Mendez",
    salon: "CLOUD",
    grupo: "1758",
    inicio: dayjs({ years: 2023, months: 7, day: 20, hours: 15, minutes: 0 }),
    fin: dayjs({ years: 2023, months: 7, day: 20, hours: 17, minutes: 0 }),
    tipo: "3-veces",
  },
];

const optativas: Clase[] = [
  {
    nombre: "Sistemas Expertos",
    profesor: "Martin Romero Ugalde",
    salon: "A8119",
    grupo: "1058",
    inicio: dayjs({ years: 2023, months: 7, day: 20, hours: 12, minutes: 40 }),
    fin: dayjs({ years: 2023, months: 7, day: 20, hours: 14, minutes: 0 }),
    tipo: "3-veces",
  },
];

export const clases = [
  sistemasInformacion,
  programacionWeb,
  redesComputadoras,
  microcontroladores,
  optativas,
];
