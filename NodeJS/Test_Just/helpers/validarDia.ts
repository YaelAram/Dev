import isBetween from "dayjs/plugin/isBetween";
import dayjs from "dayjs";

import { Clase } from "../interfaces/clase";

dayjs.extend(isBetween);

const esValido = (c1: Clase, c2: Clase): boolean => {
  return (
    c1.inicio.isBetween(c2.inicio, c2.fin, null, "()") ||
    c1.fin.isBetween(c2.inicio, c2.fin, null, "()") ||
    c2.inicio.isBetween(c1.inicio, c1.fin, null, "()") ||
    c2.fin.isBetween(c1.inicio, c1.fin, null, "()")
  );
};

const validarDia = (dia: Clase[]): boolean => {
  for (let i = 0; i < dia.length; i++)
    for (let j = i + 1; j < dia.length; j++)
      if (esValido(dia[i], dia[j])) return false;

  return true;
};

export const validarHorarios = (horarios: Clase[][]) => {
  return horarios.filter((horario: Clase[]) => {
    const clasesTipo2 = horario.filter((clase) => clase.tipo === "2-veces");
    const clasesTipo3 = horario.filter((clase) => clase.tipo === "3-veces");

    return validarDia(clasesTipo2) && validarDia(clasesTipo3);
  });
};
