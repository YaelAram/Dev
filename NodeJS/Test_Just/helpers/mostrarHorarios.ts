import { Clase } from "../interfaces/clase";

export const mostrarHorarios = (horarios: Clase[][]): void => {
  const resultados = horarios.map((horario) => {
    return horario.map(
      ({ nombre, profesor, salon, grupo, inicio, fin, dias, cupo }) => {
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
      }
    );
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
