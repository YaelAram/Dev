import objectSupport from "dayjs/plugin/objectSupport";
import dayjs from "dayjs";

import { crearHora } from "../../helpers";
import { Clase, LunMieVie, MarJue } from "../../interfaces/clase";

dayjs.extend(objectSupport);

const pascual: Clase[] = [
  {
    nombre: "Derecho Agrario y Desarrollo Rural",
    profesor: "Pascual Morales Perez",
    grupo: "2102",
    inicio: crearHora(8, 20),
    fin: crearHora(9, 40),
    dias: LunMieVie,
  },
  {
    nombre: "Derecho Agrario y Desarrollo Rural",
    profesor: "Pascual Morales Perez",
    grupo: "2109",
    inicio: crearHora(9, 40),
    fin: crearHora(11, 0),
    dias: LunMieVie,
  },
];

// const sergio: Clase[] = [
//   {
//     nombre: "Derecho Agrario y Desarrollo Rural",
//     profesor: "Sergio Arraiga Juarez",
//     grupo: "2103",
//     inicio: crearHora(11, 0),
//     fin: crearHora(12, 20),
//     dias: LunMieVie,
//   },
//   {
//     nombre: "Derecho Agrario y Desarrollo Rural",
//     profesor: "Sergio Arraiga Juarez",
//     grupo: "2111",
//     inicio: crearHora(12, 20),
//     fin: crearHora(13, 40),
//     dias: LunMieVie,
//   },
// ];

// const ericka: Clase[] = [
//   {
//     nombre: "Derecho Agrario y Desarrollo Rural",
//     profesor: "Ericka Reyes Morales - ZOOM",
//     grupo: "2105",
//     inicio: crearHora(7, 0),
//     fin: crearHora(9, 0),
//     dias: MarJue,
//   },
// ];

const maria: Clase[] = [
  {
    nombre: "Derecho Agrario y Desarrollo Rural",
    profesor: "Maria del Rosario Valencia Salcedo",
    grupo: "2107",
    inicio: crearHora(11, 0),
    fin: crearHora(13, 0),
    dias: MarJue,
  },
];

const leonel: Clase[] = [
  {
    nombre: "Derecho Agrario y Desarrollo Rural",
    profesor: "Leonel Pantoja",
    grupo: "2151",
    inicio: crearHora(14, 20),
    fin: crearHora(15, 40),
    dias: LunMieVie,
  },
  {
    nombre: "Derecho Agrario y Desarrollo Rural",
    profesor: "Leonel Pantoja",
    grupo: "2160",
    inicio: crearHora(15, 40),
    fin: crearHora(17, 0),
    dias: LunMieVie,
  },
];

// const rosa: Clase[] = [
//   {
//     nombre: "Derecho Agrario y Desarrollo Rural",
//     profesor: "Rosa Montenegro Mendez",
//     grupo: "2152",
//     inicio: crearHora(15, 40),
//     fin: crearHora(17, 0),
//     dias: LunMieVie,
//   },
//   {
//     nombre: "Derecho Agrario y Desarrollo Rural",
//     profesor: "Rosa Montenegro Mendez",
//     grupo: "2159",
//     inicio: crearHora(14, 20),
//     fin: crearHora(15, 40),
//     dias: LunMieVie,
//   },
// ];

export const derechoAgrario: Clase[] = [
  ...pascual,
  //...sergio,
  //...ericka,
  ...maria,
  ...leonel,
  //...rosa,
];
