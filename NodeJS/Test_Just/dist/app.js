"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const just_cartesian_product_1 = __importDefault(require("just-cartesian-product"));
const data_1 = require("./data");
const helpers_1 = require("./helpers");
const inquirer_1 = require("./inquirer");
const main = async () => {
    const semestres = await (0, inquirer_1.obtenerSemestres)();
    const turno = await (0, inquirer_1.obtenerTurno)();
    const calificacionMinima = await (0, inquirer_1.obtenerCalificacionMinima)();
    const grupos = await (0, inquirer_1.obtenerGrupos)(data_1.gruposOpt.filter(({ name }) => name.match(new RegExp(`^1${semestres}${turno}[0-9]$`))));
    const optativas = await (0, inquirer_1.obtenerOptativas)(turno);
    const laboratorios = await (0, inquirer_1.obtenerLaboratorios)();
    const materiasGrupos = await (0, inquirer_1.obtenerMaterias)(grupos);
    const materiasPorNombre = (0, helpers_1.ordenarMaterias)(materiasGrupos);
    const materiasOptativas = await (0, inquirer_1.obtenerMaterias)(optativas);
    const materiasLaboratorios = await (0, inquirer_1.obtenerMaterias)(laboratorios);
    const clases = [];
    if (materiasPorNombre.length)
        clases.push(...materiasPorNombre);
    if (materiasOptativas.length)
        clases.push(materiasOptativas);
    if (materiasLaboratorios.length)
        clases.push(materiasLaboratorios);
    const horarios = (0, helpers_1.validarHorarios)((0, just_cartesian_product_1.default)(clases), calificacionMinima);
    (0, helpers_1.mostrarHorarios)(horarios);
};
main();
