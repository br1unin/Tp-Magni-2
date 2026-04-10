type AccionesParticipantesProps = {
  onResetearDatos: () => void;
};

function AccionesParticipantes({ onResetearDatos }: AccionesParticipantesProps) {
  return (
    <div className="flex justify-end">
      <button
        type="button"
        onClick={onResetearDatos}
        className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition"
      >
        Resetear datos
      </button>
    </div>
  );
}

export default AccionesParticipantes;
