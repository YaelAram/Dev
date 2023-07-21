"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarHorarios = void 0;
const mostrarHorarios = (horarios) => {
    const resultados = horarios.map((horario) => {
        return horario.map(({ nombre, profesor, salon, grupo, inicio, fin, dias, cupo }) => {
            return {
                nombre,
                profesor,
                salon,
                grupo,
                inicio: inicio.format("HH:mm"),
                fin: fin.format("HH:mm"),
                dias: dias.join(","),
                cupo,
            };
        });
    });
    resultados.forEach((horario, index) => {
        console.log(`\nHorario ${index + 1}\n`);
        console.table(horario, [
            "nombre",
            "profesor",
            "grupo",
            "salon",
            "inicio",
            "fin",
            "dias",
            "cupo",
        ]);
    });
};
exports.mostrarHorarios = mostrarHorarios;
