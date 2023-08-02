import objectSupport from "dayjs/plugin/objectSupport";
import dayjs from "dayjs";

import { crearHora } from "../../helpers";
import { Clase, LunMieVie, MarJue } from "../../interfaces/clase";

dayjs.extend(objectSupport);

const manuel: Clase[] = [
  {
    nombre: "Derecho Procesal del Trabajo",
    profesor: "Manuel Ganezperalta Damiron",
    grupo: "2102",
    inicio: crearHora(9, 0),
    fin: crearHora(11, 0),
    dias: MarJue,
  },
];

// const jose: Clase[] = [
//   {
//     nombre: "Derecho Procesal del Trabajo",
//     profesor: "Jose Arturo Luis Pueblita Pelisio - ZOOM",
//     grupo: "2103",
//     inicio: crearHora(7, 0),
//     fin: crearHora(9, 0),
//     dias: MarJue,
//   },
// ];

const sarah: Clase[] = [
  {
    nombre: "Derecho Procesal del Trabajo",
    profesor: "Sarah Mis Palma Leon",
    grupo: "2107",
    inicio: crearHora(11, 0),
    fin: crearHora(13, 0),
    dias: MarJue,
  },
  {
    nombre: "Derecho Procesal del Trabajo",
    profesor: "Sarah Mis Palma Leon",
    grupo: "2110",
    inicio: crearHora(9, 0),
    fin: crearHora(11, 0),
    dias: MarJue,
  },
];

const juan: Clase[] = [
  {
    nombre: "Derecho Procesal del Trabajo",
    profesor: "Juan Carlos Jaramillo Rojas",
    grupo: "2104",
    inicio: crearHora(7, 0),
    fin: crearHora(8, 20),
    dias: LunMieVie,
  },
];

export const derechoProcesal: Clase[] = [
  ...manuel,
  //...jose,
  ...sarah,
  ...juan,
];
