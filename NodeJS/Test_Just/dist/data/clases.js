"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clases = exports.microcontroladores = exports.redesComputadoras = exports.programacionWeb = exports.sistemasInformacion = void 0;
const objectSupport_1 = __importDefault(require("dayjs/plugin/objectSupport"));
const dayjs_1 = __importDefault(require("dayjs"));
dayjs_1.default.extend(objectSupport_1.default);
exports.sistemasInformacion = [
    {
        nombre: "Sistemas de Informacion",
        profesor: "Jorge Luis Candelario Alavez",
        salon: "A204",
        grupo: "1757",
        inicio: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 13, minutes: 0 }),
        fin: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 15, minutes: 0 }),
        tipo: "2-veces",
    },
    {
        nombre: "Sistemas de Informacion",
        profesor: "Aaron Velasco Agustin",
        salon: "A205",
        grupo: "1758",
        inicio: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 13, minutes: 0 }),
        fin: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 15, minutes: 0 }),
        tipo: "3-veces",
    },
];
exports.programacionWeb = [
    {
        nombre: "Programacion Web 2",
        profesor: "Mariana Verduzco Rodriguez",
        salon: "A8118",
        grupo: "1757",
        inicio: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 13, minutes: 0 }),
        fin: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 14, minutes: 20 }),
        tipo: "3-veces",
    },
    {
        nombre: "Programacion Web 2",
        profesor: "Aaron Velasco Agustin",
        salon: "A203",
        grupo: "1758",
        inicio: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 15, minutes: 0 }),
        fin: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 17, minutes: 0 }),
        tipo: "2-veces",
    },
];
exports.redesComputadoras = [
    {
        nombre: "Redes de Computadoras I",
        profesor: "Gerardo Torres Rodriguez",
        salon: "A11201",
        grupo: "1758",
        inicio: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 17, minutes: 0 }),
        fin: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 19, minutes: 0 }),
        tipo: "2-veces",
    },
    {
        nombre: "Redes de Computadoras I",
        profesor: "Enrique Garcia Guzman",
        salon: "A8117",
        grupo: "1757",
        inicio: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 16, minutes: 0 }),
        fin: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 18, minutes: 0 }),
        tipo: "2-veces",
    },
];
exports.microcontroladores = [
    {
        nombre: "Micropocesadores y Microcontroladores",
        profesor: "Juan Manuel Hernandez Contreras",
        salon: "A8117",
        grupo: "1757",
        inicio: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 15, minutes: 0 }),
        fin: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 16, minutes: 20 }),
        tipo: "3-veces",
    },
    {
        nombre: "Micropocesadores y Microcontroladores",
        profesor: "Efren Lozano Mendez",
        salon: "CLOUD",
        grupo: "1758",
        inicio: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 15, minutes: 0 }),
        fin: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 17, minutes: 0 }),
        tipo: "3-veces",
    },
];
const optativas = [
    {
        nombre: "Sistemas Expertos",
        profesor: "Martin Romero Ugalde",
        salon: "A8119",
        grupo: "1058",
        inicio: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 12, minutes: 40 }),
        fin: (0, dayjs_1.default)({ years: 2023, months: 7, day: 20, hours: 14, minutes: 0 }),
        tipo: "3-veces",
    },
];
exports.clases = [
    exports.sistemasInformacion,
    exports.programacionWeb,
    exports.redesComputadoras,
    exports.microcontroladores,
    optativas,
];
