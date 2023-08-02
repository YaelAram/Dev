"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const just_cartesian_product_1 = __importDefault(require("just-cartesian-product"));
const clasesAye_1 = require("./data/clasesAye");
const helpers_1 = require("./helpers");
const horarios = (0, helpers_1.validarHorarios)((0, just_cartesian_product_1.default)(clasesAye_1.clases));
(0, helpers_1.mostrarHorarios)(horarios);
