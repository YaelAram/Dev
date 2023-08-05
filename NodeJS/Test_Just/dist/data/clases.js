"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clases = void 0;
const objectSupport_1 = __importDefault(require("dayjs/plugin/objectSupport"));
const dayjs_1 = __importDefault(require("dayjs"));
const clase_1 = require("../interfaces/clase");
dayjs_1.default.extend(objectSupport_1.default);
const sistemasInformacion = [
    {
        nombre: "Sistemas Informacion",
        profesor: "Jorge Luis Candelario Alavez",
        salon: "A204",
        grupo: "1757",
        inicio: (0, dayjs_1.default)({ years: 2024, months: 7, day: 20, hours: 13, minutes: 0 }),
        fin: (0, dayjs_1.default)({ years: 2024, months: 7, day: 20, hours: 15, minutes: 0 }),
        cupo: 60,
        dias: clase_1.MarJue,
    },
];
const programacionWeb = [
    {
        nombre: "Programacion Web 2",
        profesor: "Aaron Velasco Agustin",
        salon: "A203",
        grupo: "1758",
        inicio: (0, dayjs_1.default)({ years: 2024, months: 7, day: 20, hours: 15, minutes: 0 }),
        fin: (0, dayjs_1.default)({ years: 2024, months: 7, day: 20, hours: 17, minutes: 0 }),
        cupo: 60,
        dias: clase_1.MarJue,
    },
];
const redesComputadoras = [
    {
        nombre: "Redes de Computadoras I",
        profesor: "Gerardo Torres Rodriguez",
        salon: "A11201",
        grupo: "1758",
        inicio: (0, dayjs_1.default)({ years: 2024, months: 7, day: 20, hours: 17, minutes: 0 }),
        fin: (0, dayjs_1.default)({ years: 2024, months: 7, day: 20, hours: 19, minutes: 0 }),
        cupo: 40,
        dias: clase_1.MarJue,
    },
];
const microcontroladores = [
    {
        nombre: "Micros",
        profesor: "Efren Lozano Mendez",
        salon: "CLOUD",
        grupo: "1758",
        inicio: (0, dayjs_1.default)({ years: 2024, months: 7, day: 20, hours: 15, minutes: 0 }),
        fin: (0, dayjs_1.default)({ years: 2024, months: 7, day: 20, hours: 17, minutes: 0 }),
        cupo: 30,
        dias: clase_1.LunMie,
    },
];
const optativas = [
    {
        nombre: "Sistemas Expertos",
        profesor: "Martin Romero Ugalde",
        salon: "A8119",
        grupo: "1058",
        inicio: (0, dayjs_1.default)({ years: 2024, months: 7, day: 20, hours: 12, minutes: 40 }),
        fin: (0, dayjs_1.default)({ years: 2024, months: 7, day: 20, hours: 14, minutes: 0 }),
        cupo: 26,
        dias: clase_1.LunMieVie,
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
const laboratoriosMicros = [
    {
        nombre: "Lab. Micros",
        profesor: "Efren Lozano Mendez",
        salon: "L3-2021",
        grupo: "302127",
        inicio: (0, dayjs_1.default)({ years: 2024, months: 7, day: 20, hours: 11, minutes: 0 }),
        fin: (0, dayjs_1.default)({ years: 2024, months: 7, day: 20, hours: 13, minutes: 0 }),
        cupo: 25,
        dias: clase_1.Jueves,
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
const laboratoriosRedes = [
    {
        nombre: "Laboratorio de Redes",
        profesor: "Gerardo Torres Rodriguez",
        salon: "CLOUD",
        grupo: "8707",
        inicio: (0, dayjs_1.default)({ years: 2024, months: 7, days: 20, hours: 18, minutes: 30 }),
        fin: (0, dayjs_1.default)({ years: 2024, months: 7, days: 20, hours: 20, minutes: 0 }),
        cupo: 30,
        dias: clase_1.Lunes,
    },
];
exports.clases = [
    sistemasInformacion,
    programacionWeb,
    redesComputadoras,
    microcontroladores,
    optativas,
    laboratoriosMicros,
    laboratoriosRedes,
];
