import { useEffect, useMemo, useState } from "react";
import { participantesIniciales } from "./datos/ParticipantesIniciales";
import FormularioParticipante from "./componentes/participantes/FormularioParticipante";
import { ListaParticipantes } from "./componentes/participantes/ListaParticipantes";
import ContadorParticipantes from "./componentes/participantes/ContadorParticipantes";
import FiltrosParticipantes from "./componentes/participantes/FiltrosParticipantes";
import AccionesParticipantes from "./componentes/participantes/AccionesParticipantes";
import {
  filtrosIniciales,
  type Filtros,
} from "./componentes/participantes/filtros";
import {
  Participante,
  type DatosParticipante,
} from "./tipos/Participante";

const STORAGE_KEY = "participantes";

function App() {
  const [participantes, setParticipantes] = useState<Participante[]>([]);
  const [filtros, setFiltros] = useState<Filtros>(filtrosIniciales);
  const [estaInicializado, setEstaInicializado] = useState(false);

  useEffect(() => {
    const participantesGuardados = localStorage.getItem(STORAGE_KEY);

    if (!participantesGuardados) {
      setParticipantes(participantesIniciales);
      setEstaInicializado(true);
      return;
    }

    try {
      const participantesParseados: DatosParticipante[] = JSON.parse(participantesGuardados);
      setParticipantes(
        participantesParseados.map((participante) =>
          Participante.desdeObjeto(participante),
        ),
      );
    } catch {
      setParticipantes(participantesIniciales);
    } finally {
      setEstaInicializado(true);
    }
  }, []);

  useEffect(() => {
    if (!estaInicializado) {
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(participantes));
  }, [participantes, estaInicializado]);

  const agregarParticipante = (nuevo: Participante) => {
    setParticipantes((prev) => [...prev, nuevo]);
  };

  const eliminarParticipante = (id: number) => {
    setParticipantes((prev) => prev.filter((participante) => participante.id !== id));
  };

  const limpiarFiltros = () => {
    setFiltros(filtrosIniciales);
  };

  const resetearDatos = () => {
    localStorage.removeItem(STORAGE_KEY);
    setParticipantes(participantesIniciales);
    setFiltros(filtrosIniciales);
  };

  const participantesFiltrados = useMemo(() => {
    return participantes.filter((participante) => {
      const coincideNombre = participante.nombre
        .toLowerCase()
        .includes(filtros.busqueda.toLowerCase());

      const coincideModalidad =
        filtros.modalidad === "Todas" ||
        participante.modalidad === filtros.modalidad;

      const coincideNivel =
        filtros.nivel === "Todos" || participante.nivel === filtros.nivel;

      return coincideNombre && coincideModalidad && coincideNivel;
    });
  }, [participantes, filtros]);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        Registro de Participantes
      </h1>

      <ContadorParticipantes
        total={participantes.length}
        visibles={participantesFiltrados.length}
      />

      <AccionesParticipantes onResetearDatos={resetearDatos} />

      <FormularioParticipante alAgregarParticipante={agregarParticipante} />

      <FiltrosParticipantes
        filtros={filtros}
        alCambiarFiltros={setFiltros}
        alLimpiarFiltros={limpiarFiltros}
      />

      <ListaParticipantes
        participantes={participantesFiltrados}
        alEliminarParticipante={eliminarParticipante}
      />
    </div>
  );
}

export default App;
