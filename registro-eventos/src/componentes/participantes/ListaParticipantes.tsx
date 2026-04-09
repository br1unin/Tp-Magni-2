import type { Participante } from "../../tipos/Participante";
import { TarjetaParticipante } from "./TarjetaParticipante";

type ListaParticipantesProps = {
  participantes: Participante[];
  alEliminarParticipante: (id: number) => void;
};

export function ListaParticipantes({
  participantes,
  alEliminarParticipante,
}: ListaParticipantesProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">
        Lista de participantes
      </h2>

      {participantes.length === 0 ? (
        <div className="bg-white shadow rounded p-4">
          <p>No hay participantes todavía.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {participantes.map((participante) => (
            <TarjetaParticipante
              key={participante.id}
              participante={participante}
              alEliminar={alEliminarParticipante}
            />
          ))}
        </div>
      )}
    </section>
  );
}