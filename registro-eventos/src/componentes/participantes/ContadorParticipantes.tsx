type ContadorParticipantesProps = {
  total: number;
  visibles: number;
};

function ContadorParticipantes({ total, visibles }: ContadorParticipantesProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded p-4 text-lg font-medium">
      Mostrando {visibles} de {total} participantes
    </div>
  );
}

export default ContadorParticipantes;
