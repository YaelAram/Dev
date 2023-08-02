import objectSupport from "dayjs/plugin/objectSupport";
import dayjs from "dayjs";

dayjs.extend(objectSupport);

export const crearHora = (hours: number = 0, minutes: number = 0) =>
  dayjs({ years: 2024, months: 7, day: 20, hours, minutes });
