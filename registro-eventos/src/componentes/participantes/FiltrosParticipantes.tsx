type Filtros = {
  busqueda: string;
  modalidad: string;
  nivel: string;
};

type FormularioParticipanteProps = {
  filtros: Filtros;
  alCambiarFiltros: (filtros: Filtros) => void;
};

function FiltrosParticipantes({ filtros, alCambiarFiltros }: FormularioParticipanteProps) {
  const manejarCambio = (
    evento: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = evento.target;

    alCambiarFiltros({
      ...filtros,
      [name]: value,
    });
  };

  return (
    <div className="bg-white shadow rounded p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="block mb-1 font-medium">Buscar</label>
        <input
          type="text"
          name="busqueda"
          value={filtros.busqueda}
          onChange={manejarCambio}
          placeholder="Buscar por nombre"
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Modalidad</label>
        <select
          name="modalidad"
          value={filtros.modalidad}
          onChange={manejarCambio}
          className="w-full border rounded px-3 py-2"
        >
          <option value="Todas">Todas</option>
          <option value="Presencial">Presencial</option>
          <option value="Virtual">Virtual</option>
          <option value="Híbrido">Híbrido</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Nivel</label>
        <select
          name="nivel"
          value={filtros.nivel}
          onChange={manejarCambio}
          className="w-full border rounded px-3 py-2"
        >
          <option value="Todos">Todos</option>
          <option value="Principiante">Principiante</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
        </select>
      </div>
    </div>
  );
}

export default FiltrosParticipantes;
export type { Filtros };