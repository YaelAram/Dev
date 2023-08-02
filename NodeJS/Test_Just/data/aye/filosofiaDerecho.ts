import objectSupport from "dayjs/plugin/objectSupport";
import dayjs from "dayjs";

import { crearHora } from "../../helpers";
import { Clase, LunMieVie, MarJue } from "../../interfaces/clase";

dayjs.extend(objectSupport);

const abril: Clase[] = [
  {
    nombre: "Filosofia del Derecho",
    profesor: "Abril Viscarraga Barradas",
    grupo: "2106",
    inicio: crearHora(11, 0),
    fin: crearHora(13, 0),
    dias: MarJue,
  },
  {
    nombre: "Filosofia del Derecho",
    profesor: "Abril Viscarraga Barradas",
    grupo: "2116",
    inicio: crearHora(9, 0),
    fin: crearHora(11, 0),
    dias: MarJue,
  },
];

const raymundo: Clase[] = [
  {
    nombre: "Filosofia del Derecho",
    profesor: "Raymundo Espinoza Hernandez",
    grupo: "2112",
    inicio: crearHora(11, 0),
    fin: crearHora(13, 0),
    dias: MarJue,
  },
];

// const jorge: Clase[] = [
//   {
//     nombre: "Filosofia del Derecho",
//     profesor: "Jorge Robles Vazquez",
//     grupo: "2101",
//     inicio: crearHora(11, 0),
//     fin: crearHora(13, 0),
//     dias: MarJue,
//   },
// ];

// const fernando: Clase[] = [
//   {
//     nombre: "Filosofia del Derecho",
//     profesor: "Fernando Antonio Lozano Gracia",
//     grupo: "2103",
//     inicio: crearHora(11, 0),
//     fin: crearHora(13, 0),
//     dias: MarJue,
//   },
// ];

// const imer: Clase[] = [
//   {
//     nombre: "Filosofia del Derecho",
//     profesor: "Imer Benjamin Flores Mnedoza",
//     grupo: "2111",
//     inicio: crearHora(9, 40),
//     fin: crearHora(11, 0),
//     dias: LunMieVie,
//   },
// ];

const amparo: Clase[] = [
  {
    nombre: "Filosofia del Derecho",
    profesor: "Amparo Apolinar de Jesus",
    grupo: "2114",
    inicio: crearHora(11, 0),
    fin: crearHora(12, 20),
    dias: LunMieVie,
  },
];

// const jose: Clase[] = [
//   {
//     nombre: "Filosofia del Derecho",
//     profesor: "Jose Manuel Ramirez Tovilla",
//     grupo: "2105",
//     inicio: crearHora(12, 20),
//     fin: crearHora(13, 40),
//     dias: LunMieVie,
//   },
//   {
//     nombre: "Filosofia del Derecho",
//     profesor: "Jose Manuel Ramirez Tovilla",
//     grupo: "2118",
//     inicio: crearHora(11, 0),
//     fin: crearHora(12, 20),
//     dias: LunMieVie,
//   },
// ];

export const filosofiaDerecho: Clase[] = [
  ...abril,
  ...raymundo,
  //...jorge,
  //...fernando,
  //...imer,
  ...amparo,
  //...jose,
];
