import { useState } from "react";
import type { Participante } from "./tipos/Participante";
import { participantesIniciales } from "./datos/ParticipantesIniciales";

import FormularioParticipante from "./componentes/participantes/FormularioParticipante";
import { ListaParticipantes } from "./componentes/participantes/ListaParticipantes";
import ContadorParticipantes from "./componentes/participantes/ContadorParticipantes";
import FiltrosParticipantes, { type Filtros } from "./componentes/participantes/FiltrosParticipantes";

function App() {
  const [participantes, setParticipantes] = useState<Participante[]>(participantesIniciales);

  const [filtros, setFiltros] = useState<Filtros>({
    busqueda: "",
    modalidad: "Todas",
    nivel: "Todos",
  });

  const agregarParticipante = (nuevo: Participante) => {
    setParticipantes((prev) => [...prev, nuevo]);
  };

  const eliminarParticipante = (id: number) => {
    setParticipantes((prev) => prev.filter((p) => p.id !== id));
  };

  const cambiarFiltros = (nuevosFiltros: Filtros) => {
    setFiltros(nuevosFiltros);
  };

  const participantesFiltrados = participantes.filter((p) => {
    const coincideNombre = p.nombre
      .toLowerCase()
      .includes(filtros.busqueda.toLowerCase());

    const coincideModalidad =
      filtros.modalidad === "Todas" || p.modalidad === filtros.modalidad;

    const coincideNivel =
      filtros.nivel === "Todos" || p.nivel === filtros.nivel;

    return coincideNombre && coincideModalidad && coincideNivel;
  });

  

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        Registro de Participantes
      </h1>

      <ContadorParticipantes total={participantes.length} />

      <FormularioParticipante alAgregarParticipante={agregarParticipante} />

      <FiltrosParticipantes
        filtros={filtros}
        alCambiarFiltros={cambiarFiltros}
      />

      <ListaParticipantes
        participantes={participantesFiltrados}
        alEliminarParticipante={eliminarParticipante}
      />
    </div>
  );
}

export default App;