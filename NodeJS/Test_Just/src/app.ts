import product from "just-cartesian-product";

import { gruposOpt } from "./data";
import { mostrarHorarios, ordenarMaterias, validarHorarios } from "./helpers";
import {
  obtenerCalificacionMinima,
  obtenerGrupos,
  obtenerLaboratorios,
  obtenerMaterias,
  obtenerOptativas,
  obtenerSemestres,
  obtenerTurno,
} from "./inquirer";
import { Clase } from "./interfaces/types";

const main = async () => {
  const semestres = await obtenerSemestres();
  const turno = await obtenerTurno();
  const calificacionMinima = await obtenerCalificacionMinima();

  const grupos = await obtenerGrupos(
    gruposOpt.filter(({ name }) =>
      name.match(new RegExp(`^1${semestres}${turno}[0-9]$`))
    )
  );
  const optativas = await obtenerOptativas(turno);
  const laboratorios = await obtenerLaboratorios();

  const materiasGrupos = await obtenerMaterias(grupos);

  const materiasPorNombre = ordenarMaterias(materiasGrupos);
  const materiasOptativas = await obtenerMaterias(optativas);
  const materiasLaboratorios = await obtenerMaterias(laboratorios);

  const clases: Clase[][] = [];

  if (materiasPorNombre.length) clases.push(...materiasPorNombre);
  if (materiasOptativas.length) clases.push(materiasOptativas);
  if (materiasLaboratorios.length) clases.push(materiasLaboratorios);

  const horarios: Clase[][] = validarHorarios(
    product(clases),
    calificacionMinima
  );
  mostrarHorarios(horarios);
};

main();
