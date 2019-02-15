const media = function() {
  return (this.primeiraProva + this.segundaProva) / 2;
};

function mediaTurma(alunos) {
  return alunos.reduce( ( total, aluno ) => total + aluno.notaFinal, 0 ) / alunos.length;
}

function ordenaPelaNotaAsc(alunos) {
  return alunos.sort((a1, a2) => a1.notaFinal - a2.notaFinal);
}

module.exports = {
  media,
  mediaTurma,
  ordenaPelaNotaAsc
};
