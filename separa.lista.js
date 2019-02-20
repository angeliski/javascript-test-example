function categoria(cursos, categoria) {
  return cursos.filter(curso => curso.categoria === categoria);
}

function duracaoMaiorQue(cursos, duracao) {
  return cursos.filter(curso => curso.duracao > duracao);
}

function duracaoMenorQue(cursos, duracao) {
  return cursos.filter(curso => curso.duracao < duracao);
}

function comProfessor(cursos) {
  return cursos.filter(curso =>curso.professor);
}

function semProfessor(cursos) {
  return cursos.filter(curso => !curso.professor);
}

function descricao(cursos, regex) {
  return cursos.filter(curso => curso.descricao.match(regex));
}

module.exports = {
  categoria,
  duracaoMaiorQue,
  duracaoMenorQue,
  comProfessor,
  semProfessor,
  descricao
};
