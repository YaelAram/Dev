import objectSupport from "dayjs/plugin/objectSupport";
import dayjs from "dayjs";

import {
  Clase,
  LunMieVie,
  MarJue,
  LunMie,
  Miercoles,
  Jueves,
  Viernes,
  Lunes,
  Martes,
} from "../interfaces/clase";

dayjs.extend(objectSupport);

const sistemasInformacion: Clase[] = [
  {
    nombre: "Sistemas Informacion",
    profesor: "Jorge Luis Candelario Alavez",
    salon: "A204",
    grupo: "1757",
    inicio: dayjs({ years: 2024, months: 7, day: 20, hours: 13, minutes: 0 }),
    fin: dayjs({ years: 2024, months: 7, day: 20, hours: 15, minutes: 0 }),
    cupo: 60,
    dias: MarJue,
  },
];

const programacionWeb: Clase[] = [
  {
    nombre: "Programacion Web 2",
    profesor: "Aaron Velasco Agustin",
    salon: "A203",
    grupo: "1758",
    inicio: dayjs({ years: 2024, months: 7, day: 20, hours: 15, minutes: 0 }),
    fin: dayjs({ years: 2024, months: 7, day: 20, hours: 17, minutes: 0 }),
    cupo: 60,
    dias: MarJue,
  },
];

const redesComputadoras: Clase[] = [
  {
    nombre: "Redes de Computadoras I",
    profesor: "Gerardo Torres Rodriguez",
    salon: "A11201",
    grupo: "1758",
    inicio: dayjs({ years: 2024, months: 7, day: 20, hours: 17, minutes: 0 }),
    fin: dayjs({ years: 2024, months: 7, day: 20, hours: 19, minutes: 0 }),
    cupo: 40,
    dias: MarJue,
  },
];

const microcontroladores: Clase[] = [
  {
    nombre: "Micros",
    profesor: "Efren Lozano Mendez",
    salon: "CLOUD",
    grupo: "1758",
    inicio: dayjs({ years: 2024, months: 7, day: 20, hours: 15, minutes: 0 }),
    fin: dayjs({ years: 2024, months: 7, day: 20, hours: 17, minutes: 0 }),
    cupo: 30,
    dias: LunMie,
  },
];

const optativas: Clase[] = [
  {
    nombre: "Sistemas Expertos",
    profesor: "Martin Romero Ugalde",
    salon: "A8119",
    grupo: "1058",
    inicio: dayjs({ years: 2024, months: 7, day: 20, hours: 12, minutes: 40 }),
    fin: dayjs({ years: 2024, months: 7, day: 20, hours: 14, minutes: 0 }),
    cupo: 26,
    dias: LunMieVie,
  },
  // {
  //   nombre: "Sistemas Multiusuario",
  //   profesor: "Jorge Arturo Lopez Hernandez",
  //   salon: "A205",
  //   grupo: "1058",
  //   inicio: dayjs({ years: 2024, months: 7, day: 20, hours: 17, minutes: 0 }),
  //   fin: dayjs({ years: 2024, months: 7, day: 20, hours: 21, minutes: 0 }),
  //   cupo: 55,
  //   dias: Viernes,
  // },
];

const laboratoriosMicros: Clase[] = [
  {
    nombre: "Lab. Micros",
    profesor: "Efren Lozano Mendez",
    salon: "L3-2021",
    grupo: "302127",
    inicio: dayjs({ years: 2024, months: 7, day: 20, hours: 11, minutes: 0 }),
    fin: dayjs({ years: 2024, months: 7, day: 20, hours: 13, minutes: 0 }),
    cupo: 25,
    dias: Jueves,
  },
  // {
  //   nombre: "Laboratorio Micros",
  //   profesor: "Efren Lozano Mendez",
  //   salon: "L3-2021",
  //   grupo: "302128",
  //   inicio: dayjs({ years: 2024, months: 7, day: 20, hours: 13, minutes: 0 }),
  //   fin: dayjs({ years: 2024, months: 7, day: 20, hours: 15, minutes: 0 }),
  //   cupo: 25,
  //   dias: Jueves,
  // },
  // {
  //   nombre: "Laboratorio Micros",
  //   profesor: "Efren Lozano Mendez",
  //   salon: "L3-2021",
  //   grupo: "302129",
  //   inicio: dayjs({ years: 2024, months: 7, day: 20, hours: 15, minutes: 0 }),
  //   fin: dayjs({ years: 2024, months: 7, day: 20, hours: 17, minutes: 0 }),
  //   cupo: 25,
  //   dias: Jueves,
  // },
  // {
  //   nombre: "Laboratorio Micros",
  //   profesor: "Efren Lozano Mendez",
  //   salon: "L3-2021",
  //   grupo: "302131",
  //   inicio: dayjs({ years: 2024, months: 7, day: 20, hours: 17, minutes: 0 }),
  //   fin: dayjs({ years: 2024, months: 7, day: 20, hours: 19, minutes: 0 }),
  //   cupo: 25,
  //   dias: Jueves,
  // },
];

const laboratoriosRedes: Clase[] = [
  {
    nombre: "Laboratorio de Redes",
    profesor: "Gerardo Torres Rodriguez",
    salon: "CLOUD",
    grupo: "8707",
    inicio: dayjs({ years: 2024, months: 7, days: 20, hours: 18, minutes: 30 }),
    fin: dayjs({ years: 2024, months: 7, days: 20, hours: 20, minutes: 0 }),
    cupo: 30,
    dias: Lunes,
  },
];

export const clases = [
  sistemasInformacion,
  programacionWeb,
  redesComputadoras,
  microcontroladores,
  optativas,
  laboratoriosMicros,
  laboratoriosRedes,
];
