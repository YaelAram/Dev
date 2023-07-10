import { Clase } from "../interfaces/clase";
import { Dayjs } from "dayjs";

const format = (dia: Dayjs): string => dia.format("HH:mm");

export const mostrarHorarios = (horarios: Clase[][]): void => {
  horarios.forEach((horario: Clase[], index: number) => {
    console.log(`Horario ${index + 1}\n`);
    horario.forEach(
      ({ nombre, profesor, grupo, salon, inicio, fin, tipo }: Clase) => {
        console.log(
          `${nombre}:\n\tProfesor: ${profesor}\n\tGrupo: ${grupo}\n\tSalon: ${salon}`
        );
        console.log(`\tDe: ${format(inicio)}\n\tA: ${format(fin)}`);
        console.log(
          `\tLos: ${
            tipo === "2-veces"
              ? "Martes y Jueves\n"
              : "Lunes, Miercoles y Viernes\n"
          }`
        );
      }
    );
    console.log("");
  });
};
