function nome(pessoas) {
  return pessoas.map(p => p.nome);
}

function nomeComNota(pessoas) {
  return pessoas.map(p => p.nome + " - " + p.nota);

}

function upperCase(pessoas) {
  return pessoas.map(p => p.toUpperCase());
}

function nomeComAprovacao(pessoas, notaParaAprovacao = 8) {
  return pessoas.map(p => p.nome + ' - ' + (p.nota > notaParaAprovacao ? 'Aprovado' : 'Reprovado'));
}

function alunos(pessoas) {
  return pessoas.map(p => alunos = {
    primeiroNome: p.nome,
    notaFinal: p.nota
  });
}

module.exports = {
  nome,
  nomeComNota,
  upperCase,
  nomeComAprovacao,
  alunos
};
