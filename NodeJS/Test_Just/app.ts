import product from "just-cartesian-product";

import { clases, programacionWeb, redesComputadoras } from "./data/clases";
import { Clase } from "./interfaces/clase";

import { validarHorarios, mostrarHorarios } from "./helpers";

let horarios: Clase[][] = product(clases);

horarios = validarHorarios(horarios);
mostrarHorarios(horarios);
