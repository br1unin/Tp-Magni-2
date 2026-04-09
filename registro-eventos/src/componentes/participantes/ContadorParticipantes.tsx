type ContadorParticipantesProps = {
  total: number;
};

function ContadorParticipantes({ total }: ContadorParticipantesProps) {              //{ total } equivale a ContadorParticipantesProps.total
  return (
    <p className="mb-6 text-lg font-medium">
      Participantes registrados: {total}
    </p>
  );
}

export default ContadorParticipantes;