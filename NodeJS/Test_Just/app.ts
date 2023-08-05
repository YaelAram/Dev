import product from "just-cartesian-product";

import { clases } from "./data/clases";
import { Clase } from "./interfaces/clase";

import { validarHorarios, mostrarHorarios } from "./helpers";

const horarios: Clase[][] = validarHorarios(product(clases));
mostrarHorarios(horarios);
