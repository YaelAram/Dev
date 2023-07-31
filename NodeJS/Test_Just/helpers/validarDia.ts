import isBetween from "dayjs/plugin/isBetween";
import dayjs from "dayjs";

import { Clase, Dias, Viernes } from "../interfaces/clase";

dayjs.extend(isBetween);

const esValido = (c1: Clase, c2: Clase): boolean => {
  return (
    c1.inicio.isBetween(c2.inicio, c2.fin, null, "()") ||
    c1.fin.isBetween(c2.inicio, c2.fin, null, "()") ||
    c2.inicio.isBetween(c1.inicio, c1.fin, null, "()") ||
    c2.fin.isBetween(c1.inicio, c1.fin, null, "()") ||
    (c1.inicio.isSame(c2.inicio) && c1.fin.isSame(c2.fin))
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
    const clasesLunes = horario.filter((clase) =>
      clase.dias.includes(Dias.LUNES)
    );
    const clasesMartes = horario.filter((clase) =>
      clase.dias.includes(Dias.MARTES)
    );
    const clasesMiercoles = horario.filter((clase) =>
      clase.dias.includes(Dias.MIERCOLES)
    );
    const clasesJueves = horario.filter((clase) =>
      clase.dias.includes(Dias.JUEVES)
    );
    const clasesViernes = horario.filter((clase) =>
      clase.dias.includes(Dias.VIERNES)
    );

    return (
      validarDia(clasesLunes) &&
      validarDia(clasesMartes) &&
      validarDia(clasesMiercoles) &&
      validarDia(clasesJueves) &&
      validarDia(clasesViernes)
    );
  });
};
