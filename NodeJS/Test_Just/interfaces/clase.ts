import { Dayjs } from "dayjs";

export enum Dias {
  LUNES = "Lun",
  MARTES = "Mar",
  MIERCOLES = "Mier",
  JUEVES = "Jue",
  VIERNES = "Vie",
}

export const LunMieVie: Dias[] = [Dias.LUNES, Dias.MIERCOLES, Dias.VIERNES];
export const LunMie: Dias[] = [Dias.LUNES, Dias.MIERCOLES];
export const MarJue: Dias[] = [Dias.MARTES, Dias.JUEVES];
export const Lunes: Dias[] = [Dias.LUNES];
export const Martes: Dias[] = [Dias.MARTES];
export const Miercoles: Dias[] = [Dias.MIERCOLES];
export const Jueves: Dias[] = [Dias.JUEVES];
export const Viernes: Dias[] = [Dias.VIERNES];

export interface Clase {
  nombre: string;
  profesor: string;
  salon?: string;
  grupo: string;
  inicio: Dayjs;
  fin: Dayjs;
  cupo?: number;
  dias: Dias[];
}
