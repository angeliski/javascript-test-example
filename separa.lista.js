function categoria(cursos, categoria) {
  return cursos.filter(c => c.categoria === categoria);
}

function duracaoMaiorQue(cursos, duracao) {
  return cursos.filter(c => c.duracao && c.duracao > duracao);
}

function duracaoMenorQue(cursos, duracao) {
  return cursos.filter(c => c.duracao && c.duracao < duracao);
}

function comProfessor(cursos) {
  return cursos.filter(c => c.professor);
}

function semProfessor(cursos) {
  return cursos.filter(c => !c.professor);
}

function descricao(cursos, regex) {
  return cursos.filter(c => c.descricao && c.descricao.match(regex));
}

module.exports = {
  categoria,
  duracaoMaiorQue,
  duracaoMenorQue,
  comProfessor,
  semProfessor,
  descricao
};
