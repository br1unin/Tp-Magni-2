import type { Participante } from "../tipos/Participante";

export const participantesIniciales: Participante[] = [
  {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan@mail.com",
    edad: 25,
    pais: "Argentina",
    modalidad: "Presencial",
    tecnologias: ["React", "Node"],
    nivel: "Intermedio",
    aceptaTerminos: true,
  },
  {
    id: 2,
    nombre: "Ana Gómez",
    email: "ana@mail.com",
    edad: 30,
    pais: "Chile",
    modalidad: "Virtual",
    tecnologias: ["Angular", "Java"],
    nivel: "Avanzado",
    aceptaTerminos: true,
  },
  {
    id: 3,
    nombre: "Luis Martínez",
    email: "luis@mail.com",
    edad: 22,
    pais: "México",
    modalidad: "Híbrido",
    tecnologias: ["Vue", "Python"],
    nivel: "Principiante",
    aceptaTerminos: true,
  },
];