"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarHorarios = void 0;
const types_1 = require("../interfaces/types");
const obtenerPromedio_1 = require("./obtenerPromedio");
const formato = new Intl.NumberFormat("es-MX", { maximumFractionDigits: 3 });
const formatearPromedio = (horario) => {
    return formato.format((0, obtenerPromedio_1.obtenerPromedio)(horario.map((clase) => clase.calificacion)));
};
const mostrarHorarios = (horarios) => {
    let resultados = horarios.map((horario) => {
        return horario.map(({ nombre, profesor, salon, grupo, inicio, fin, dias, cupo, calificacion, }) => {
            return {
                nombre,
                profesor,
                salon,
                grupo,
                horario: `${inicio.format("HH:mm")} a ${fin.format("HH:mm")}`,
                dias: dias.join(","),
                tipo: dias.includes(types_1.Dias.MARTES) || dias.includes(types_1.Dias.JUEVES)
                    ? "2-dias"
                    : "3-dias",
                cupo,
                calificacion,
            };
        });
    });
    resultados = resultados.map((horario) => {
        const marJue = horario.filter((clase) => clase.tipo === "2-dias");
        const lunMieVie = horario.filter((clase) => clase.tipo === "3-dias");
        marJue.sort((clase1, clase2) => clase1.horario.localeCompare(clase2.horario));
        lunMieVie.sort((clase1, clase2) => clase1.horario.localeCompare(clase2.horario));
        return (horario = [...lunMieVie, ...marJue]);
    });
    resultados.sort((horario1, horario2) => {
        return ((0, obtenerPromedio_1.obtenerPromedio)(horario2.map((clase) => clase.calificacion)) -
            (0, obtenerPromedio_1.obtenerPromedio)(horario1.map((clase) => clase.calificacion)));
    });
    resultados.forEach((horario, index) => {
        const promedio = formatearPromedio(horario);
        console.log(`\nHorario ${index + 1}\nCalificacion: ${promedio}`);
        console.table(horario, [
            "nombre",
            "profesor",
            "grupo",
            "salon",
            "horario",
            "dias",
            "cupo",
        ]);
    });
};
exports.mostrarHorarios = mostrarHorarios;
