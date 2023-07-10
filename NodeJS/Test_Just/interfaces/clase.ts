import { Dayjs } from "dayjs";

export interface Clase {
  nombre: string;
  profesor: string;
  salon: string;
  grupo: string;
  inicio: Dayjs;
  fin: Dayjs;
  tipo: "3-veces" | "2-veces";
}
