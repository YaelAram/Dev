"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarHorarios = void 0;
const clase_1 = require("../interfaces/clase");
const mostrarHorarios = (horarios) => {
    let resultados = horarios.map((horario) => {
        return horario.map(({ nombre, profesor, grupo, inicio, fin, dias }) => {
            return {
                nombre,
                profesor,
                // salon,
                grupo,
                horario: `${inicio.format("HH:mm")} a ${fin.format("HH:mm")}`,
                dias: dias.join(","),
                tipo: dias.includes(clase_1.Dias.MARTES) || dias.includes(clase_1.Dias.JUEVES)
                    ? "2-dias"
                    : "3-dias",
                // cupo,
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
    resultados.forEach((horario, index) => {
        console.log(`\nHorario ${index + 1}\n`);
        console.table(horario, [
            "nombre",
            "profesor",
            "grupo",
            //"salon",
            "horario",
            "dias",
            //"cupo",
        ]);
    });
};
exports.mostrarHorarios = mostrarHorarios;
