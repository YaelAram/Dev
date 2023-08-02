import objectSupport from "dayjs/plugin/objectSupport";
import dayjs from "dayjs";

import { crearHora } from "../../helpers";
import { Clase, LunMieVie, MarJue } from "../../interfaces/clase";

dayjs.extend(objectSupport);

// const ana: Clase[] = [
//   {
//     nombre: "Derecho Fiscal",
//     profesor: "Ana Isabel Flores Solano - ZOOM",
//     grupo: "2102",
//     inicio: crearHora(8, 20),
//     fin: crearHora(9, 40),
//     dias: LunMieVie,
//   },
//   {
//     nombre: "Derecho Fiscal",
//     profesor: "Ana Isabel Flores Solano - ZOOM",
//     grupo: "2106",
//     inicio: crearHora(9, 40),
//     fin: crearHora(11, 0),
//     dias: LunMieVie,
//   },
//   {
//     nombre: "Derecho Fiscal",
//     profesor: "Ana Isabel Flores Solano - ZOOM",
//     grupo: "2117",
//     inicio: crearHora(9, 40),
//     fin: crearHora(11, 0),
//     dias: MarJue,
//   },
// ];

// const patricia: Clase[] = [
//   {
//     nombre: "Derecho Fiscal",
//     profesor: "Patricia Lopez Lopez",
//     grupo: "2104",
//     inicio: crearHora(7, 0),
//     fin: crearHora(9, 0),
//     dias: MarJue,
//   },
// ];

// const gabriel: Clase[] = [
//   {
//     nombre: "Derecho Fiscal",
//     profesor: "Gabriel Perez Guerrero - ZOOM",
//     grupo: "2108",
//     inicio: crearHora(7, 0),
//     fin: crearHora(8, 20),
//     dias: LunMieVie,
//   },
// ];

const jose: Clase[] = [
  {
    nombre: "Derecho Fiscal",
    profesor: "Jose ALfonso Rivera Rodriguez",
    grupo: "2109",
    inicio: crearHora(8, 20),
    fin: crearHora(9, 40),
    dias: LunMieVie,
  },
];

// const ricardo: Clase[] = [
//   {
//     nombre: "Derecho Fiscal",
//     profesor: "Ricardo Sergio a la Rosa Velez - Sin Referencia",
//     grupo: "2113",
//     inicio: crearHora(11, 0),
//     fin: crearHora(12, 20),
//     dias: LunMieVie,
//   },
// ];

// const javier: Clase[] = [
//   {
//     nombre: "Derecho Fiscal",
//     profesor: "Javier Raul Rios Blanquet",
//     grupo: "2114",
//     inicio: crearHora(12, 20),
//     fin: crearHora(13, 40),
//     dias: LunMieVie,
//   },
// ];

const francisco: Clase[] = [
  {
    nombre: "Derecho Fiscal",
    profesor: "Francisco Gerardo Flores Castañon",
    grupo: "2115",
    inicio: crearHora(8, 20),
    fin: crearHora(9, 40),
    dias: LunMieVie,
  },
];

export const derechoFiscal: Clase[] = [
  //...ana,
  //...patricia,
  //...gabriel,
  ...jose,
  //...ricardo,
  //...javier,
  ...francisco,
];
