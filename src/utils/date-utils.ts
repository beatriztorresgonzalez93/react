import { differenceInCalendarDays } from "date-fns";

// Función utilitaria:
// recibe dos fechas y devuelve cuántos días hay entre ellas.
export function calcularDiferenciaDias(
  fechaInicio: Date,
  fechaFin: Date,
): number {
  return differenceInCalendarDays(fechaFin, fechaInicio);
}
