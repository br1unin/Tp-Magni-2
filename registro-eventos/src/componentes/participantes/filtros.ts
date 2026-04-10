import type { Modalidad, Nivel } from "../../tipos/Participante";

export type Filtros = {
  busqueda: string;
  modalidad: Modalidad | "Todas";
  nivel: Nivel | "Todos";
};

export const filtrosIniciales: Filtros = {
  busqueda: "",
  modalidad: "Todas",
  nivel: "Todos",
};
