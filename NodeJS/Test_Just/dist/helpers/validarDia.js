"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarHorarios = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const isBetween_1 = __importDefault(require("dayjs/plugin/isBetween"));
const types_1 = require("../interfaces/types");
const obtenerPromedio_1 = require("./obtenerPromedio");
dayjs_1.default.extend(isBetween_1.default);
const esValido = (c1, c2) => {
    return (c1.inicio.isBetween(c2.inicio, c2.fin, null, "()") ||
        c1.fin.isBetween(c2.inicio, c2.fin, null, "()") ||
        c2.inicio.isBetween(c1.inicio, c1.fin, null, "()") ||
        c2.fin.isBetween(c1.inicio, c1.fin, null, "()") ||
        (c1.inicio.isSame(c2.inicio) && c1.fin.isSame(c2.fin)));
};
const validarDia = (dia) => {
    for (let i = 0; i < dia.length; i++)
        for (let j = i + 1; j < dia.length; j++)
            if (esValido(dia[i], dia[j]))
                return false;
    return true;
};
const validarHorarios = (horarios, calificacionMinima) => {
    return horarios.filter((horario) => {
        const clasesLunes = horario.filter((clase) => clase.dias.includes(types_1.Dias.LUNES));
        const clasesMartes = horario.filter((clase) => clase.dias.includes(types_1.Dias.MARTES));
        const clasesMiercoles = horario.filter((clase) => clase.dias.includes(types_1.Dias.MIERCOLES));
        const clasesJueves = horario.filter((clase) => clase.dias.includes(types_1.Dias.JUEVES));
        const clasesViernes = horario.filter((clase) => clase.dias.includes(types_1.Dias.VIERNES));
        return (validarDia(clasesLunes) &&
            validarDia(clasesMartes) &&
            validarDia(clasesMiercoles) &&
            validarDia(clasesJueves) &&
            validarDia(clasesViernes) &&
            (0, obtenerPromedio_1.obtenerPromedio)(horario.map((clase) => clase.calificacion)) >=
                calificacionMinima);
    });
};
exports.validarHorarios = validarHorarios;
