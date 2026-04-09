export type Nivel = "Principiante" | "Intermedio" | "Avanzado";

export type Modalidad = "Presencial" | "Virtual" | "Híbrido";

export type Participante = {   //conviene usar type? o se usa una clase?
  id: number;
  nombre: string;
  email: string;
  edad: number;
  pais: string;
  modalidad: Modalidad;
  tecnologias: string[];
  nivel: Nivel;
  aceptaTerminos: boolean;
};