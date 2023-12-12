"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Viernes = exports.Jueves = exports.Miercoles = exports.Martes = exports.Lunes = exports.MarJue = exports.LunMie = exports.LunMieVie = exports.Dias = void 0;
var Dias;
(function (Dias) {
    Dias["LUNES"] = "Lun";
    Dias["MARTES"] = "Mar";
    Dias["MIERCOLES"] = "Mier";
    Dias["JUEVES"] = "Jue";
    Dias["VIERNES"] = "Vie";
})(Dias || (exports.Dias = Dias = {}));
exports.LunMieVie = [Dias.LUNES, Dias.MIERCOLES, Dias.VIERNES];
exports.LunMie = [Dias.LUNES, Dias.MIERCOLES];
exports.MarJue = [Dias.MARTES, Dias.JUEVES];
exports.Lunes = [Dias.LUNES];
exports.Martes = [Dias.MARTES];
exports.Miercoles = [Dias.MIERCOLES];
exports.Jueves = [Dias.JUEVES];
exports.Viernes = [Dias.VIERNES];
