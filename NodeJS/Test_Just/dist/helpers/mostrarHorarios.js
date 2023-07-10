"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarHorarios = void 0;
const format = (dia) => dia.format("HH:mm");
const mostrarHorarios = (horarios) => {
    horarios.forEach((horario, index) => {
        console.log(`Horario ${index + 1}\n`);
        horario.forEach(({ nombre, profesor, grupo, salon, inicio, fin, tipo }) => {
            console.log(`${nombre}:\n\tProfesor: ${profesor}\n\tGrupo: ${grupo}\n\tSalon: ${salon}`);
            console.log(`\tDe: ${format(inicio)}\n\tA: ${format(fin)}`);
            console.log(`\tLos: ${tipo === "2-veces"
                ? "Martes y Jueves\n"
                : "Lunes, Miercoles y Viernes\n"}`);
        });
        console.log("");
    });
};
exports.mostrarHorarios = mostrarHorarios;
