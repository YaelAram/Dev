import objectSupport from "dayjs/plugin/objectSupport";
import dayjs from "dayjs";

import { crearHora } from "../../helpers";
import { Clase, LunMieVie, MarJue } from "../../interfaces/clase";

dayjs.extend(objectSupport);

const jose: Clase[] = [
  {
    nombre: "Regimen Juridico de Comercio Exterior",
    profesor: "Jose Hugo Padilla Guzman",
    grupo: "2107",
    inicio: crearHora(11, 0),
    fin: crearHora(12, 20),
    dias: LunMieVie,
  },
];

// const ruperto: Clase[] = [
//   {
//     nombre: "Regimen Juridico de Comercio Exterior",
//     profesor: "Ruperto Patiño Manfer",
//     grupo: "2102",
//     inicio: crearHora(11, 0),
//     fin: crearHora(13, 0),
//     dias: MarJue,
//   },
// ];

// const antonio: Clase[] = [
//   {
//     nombre: "Regimen Juridico de Comercio Exterior",
//     profesor: "Jose Antonio Diez de Bonilla Fuchs - ZOOM",
//     grupo: "2113",
//     inicio: crearHora(9, 0),
//     fin: crearHora(11, 0),
//     dias: MarJue,
//   },
// ];

// const gustavo: Clase[] = [
//   {
//     nombre: "Regimen Juridico de Comercio Exterior",
//     profesor: "Gustavo Alejandro Vruchurtu Chavarin - ZOOM",
//     grupo: "2103",
//     inicio: crearHora(9, 40),
//     fin: crearHora(11, 0),
//     dias: LunMieVie,
//   },
// ];

// const juan: Clase[] = [
//   {
//     nombre: "Regimen Juridico de Comercio Exterior",
//     profesor: "Juan Manuel Saldaña Perez - ZOOM",
//     grupo: "2105",
//     inicio: crearHora(8, 20),
//     fin: crearHora(9, 40),
//     dias: LunMieVie,
//   },
// ];

// const susana: Clase[] = [
//   {
//     nombre: "Regimen Juridico de Comercio Exterior",
//     profesor: "Susana Diaz Ruiz - ZOOM",
//     grupo: "2108",
//     inicio: crearHora(9, 0),
//     fin: crearHora(11, 0),
//     dias: MarJue,
//   },
//   {
//     nombre: "Regimen Juridico de Comercio Exterior",
//     profesor: "Susana Diaz Ruiz - ZOOM",
//     grupo: "2114",
//     inicio: crearHora(11, 0),
//     fin: crearHora(13, 0),
//     dias: MarJue,
//   },
// ];

const tomas: Clase[] = [
  {
    nombre: "Regimen Juridico de Comercio Exterior",
    profesor: "Tomas Alfonso Caparroso Franco",
    grupo: "2109",
    inicio: crearHora(9, 0),
    fin: crearHora(11, 0),
    dias: MarJue,
  },
];

const susanaParedes: Clase[] = [
  {
    nombre: "Regimen Juridico de Comercio Exterior",
    profesor: "Susana Paredes Perez",
    grupo: "2112",
    inicio: crearHora(9, 0),
    fin: crearHora(11, 0),
    dias: MarJue,
  },
  {
    nombre: "Regimen Juridico de Comercio Exterior",
    profesor: "Susana Paredes Perez",
    grupo: "2116",
    inicio: crearHora(11, 0),
    fin: crearHora(13, 0),
    dias: MarJue,
  },
];

// const eunire: Clase[] = [
//   {
//     nombre: "Regimen Juridico de Comercio Exterior",
//     profesor: "Eunire Herrera Cuadra",
//     grupo: "2117",
//     inicio: crearHora(7, 0),
//     fin: crearHora(8, 20),
//     dias: LunMieVie,
//   },
// ];

export const regimenJuridico: Clase[] = [
  ...jose,
  //...ruperto,
  //...antonio,
  //...gustavo,
  //...juan,
  //...susana,
  ...tomas,
  ...susanaParedes,
  //...eunire,
];
