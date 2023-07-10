"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarHorarios = void 0;
const isBetween_1 = __importDefault(require("dayjs/plugin/isBetween"));
const dayjs_1 = __importDefault(require("dayjs"));
dayjs_1.default.extend(isBetween_1.default);
const esValido = (c1, c2) => {
    return (c1.inicio.isBetween(c2.inicio, c2.fin, null, "()") ||
        c1.fin.isBetween(c2.inicio, c2.fin, null, "()") ||
        c2.inicio.isBetween(c1.inicio, c1.fin, null, "()") ||
        c2.fin.isBetween(c1.inicio, c1.fin, null, "()"));
};
const validarDia = (dia) => {
    for (let i = 0; i < dia.length; i++)
        for (let j = i + 1; j < dia.length; j++)
            if (esValido(dia[i], dia[j]))
                return false;
    return true;
};
const validarHorarios = (horarios) => {
    return horarios.filter((horario) => {
        const clasesTipo2 = horario.filter((clase) => clase.tipo === "2-veces");
        const clasesTipo3 = horario.filter((clase) => clase.tipo === "3-veces");
        return validarDia(clasesTipo2) && validarDia(clasesTipo3);
    });
};
exports.validarHorarios = validarHorarios;
