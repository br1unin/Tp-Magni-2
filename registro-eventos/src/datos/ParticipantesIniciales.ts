import { Participante } from "../tipos/Participante";

export const participantesIniciales: Participante[] = [
  new Participante(
    1,
    "Juan Perez",
    "juan@mail.com",
    25,
    "Argentina",
    "Presencial",
    ["React", "Node"],
    "Intermedio",
    true,
  ),
  new Participante(
    2,
    "Ana Gomez",
    "ana@mail.com",
    30,
    "Chile",
    "Virtual",
    ["Angular", "Java"],
    "Avanzado",
    true,
  ),
  new Participante(
    3,
    "Luis Martinez",
    "luis@mail.com",
    22,
    "Mexico",
    "Hibrido",
    ["Vue", "Python"],
    "Principiante",
    true,
  ),
];
