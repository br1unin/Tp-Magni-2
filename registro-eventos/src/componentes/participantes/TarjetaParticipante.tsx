import type { Participante } from "../../tipos/Participante";

type TarjetaParticipanteProps = {
  participante: Participante;
  alEliminar: (id: number) => void;
};

const coloresPorNivel = {
  Principiante: "bg-green-100",
  Intermedio: "bg-yellow-100",
  Avanzado: "bg-red-100",
};

export function TarjetaParticipante({
   participante, 
   alEliminar,
   }: TarjetaParticipanteProps) {
  return (
    <article
      className={`shadow rounded p-4 hover:shadow-lg transition ${
        coloresPorNivel[participante.nivel]
      }`}
    >
      <h3 className="text-xl font-bold mb-2">{participante.nombre}</h3>

      <p className="mb-1">
        <span className="font-semibold">País:</span> {participante.pais}
      </p>

      <p className="mb-1">
        <span className="font-semibold">Modalidad:</span> {participante.modalidad}
      </p>

      <p className="mb-1">
        <span className="font-semibold">Nivel:</span> {participante.nivel}
      </p>

      <p>
        <span className="font-semibold">Tecnologías:</span>{" "}
        {participante.tecnologias.join(" - ")}
      </p>
 
      <button
        onClick={() => alEliminar(participante.id)}                                                 //boton para eliminar
        className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Eliminar
      </button>
    </article>
  );
}