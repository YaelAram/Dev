import objectSupport from "dayjs/plugin/objectSupport";
import dayjs from "dayjs";

import { crearHora } from "../../helpers";
import { Clase, LunMieVie, MarJue } from "../../interfaces/clase";

dayjs.extend(objectSupport);

// const jesus: Clase[] = [
//   {
//     nombre: "Derecho Bancario y Bursatil",
//     profesor: "Jesus de la Fuente Rodriguez - ZOOM",
//     grupo: "2101",
//     inicio: crearHora(7, 0),
//     fin: crearHora(9, 0),
//     dias: MarJue,
//   },
// ];

const fernando: Clase[] = [
  {
    nombre: "Derecho Bancario y Bursatil",
    profesor: "Fernando Medina Gonzalez",
    grupo: "2107",
    inicio: crearHora(11, 0),
    fin: crearHora(12, 20),
    dias: LunMieVie,
  },
  {
    nombre: "Derecho Bancario y Bursatil",
    profesor: "Fernando Medina Gonzalez - ZOOM",
    grupo: "2169",
    inicio: crearHora(17, 0),
    fin: crearHora(19, 0),
    dias: MarJue,
  },
  {
    nombre: "Derecho Bancario y Bursatil",
    profesor: "Fernando Medina Gonzalez - ZOOM",
    grupo: "2173",
    inicio: crearHora(19, 0),
    fin: crearHora(21, 0),
    dias: MarJue,
  },
];

// const alejandro: Clase[] = [
//   {
//     nombre: "Derecho Bancario y Bursatil",
//     profesor: "Jesus Alejandro Ham Juarez",
//     grupo: "2108",
//     inicio: crearHora(7, 0),
//     fin: crearHora(8, 20),
//     dias: LunMieVie,
//   },
//   {
//     nombre: "Derecho Bancario y Bursatil",
//     profesor: "Jesus Alejandro Ham Juarez",
//     grupo: "2112",
//     inicio: crearHora(7, 0),
//     fin: crearHora(9, 0),
//     dias: MarJue,
//   },
// ];

const alicia: Clase[] = [
  {
    nombre: "Derecho Bancario y Bursatil",
    profesor: "Alicia Duzñas Garces",
    grupo: "2102",
    inicio: crearHora(11, 0),
    fin: crearHora(13, 0),
    dias: MarJue,
  },
];

const diana: Clase[] = [
  {
    nombre: "Derecho Bancario y Bursatil",
    profesor: "Diana Canela Valle",
    grupo: "2104",
    inicio: crearHora(8, 20),
    fin: crearHora(9, 40),
    dias: LunMieVie,
  },
];

export const derechoBancario: Clase[] = [
  //...jesus,
  ...fernando,
  //...alejandro,
  ...alicia,
  ...diana,
];
