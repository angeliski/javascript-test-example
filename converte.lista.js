function nome(pessoas) {
	return pessoas.map(pessoa => pessoa.nome);
}

function nomeComNota(pessoas) {
	return pessoas.map(pessoa => `${pessoa.nome} - ${pessoa.nota}`);
}

function upperCase (pessoas) {
	return pessoas.map(pessoa => pessoa.toUpperCase(nome));
}

function nomeComAprovacao (pessoas, notaParaAprovacao = 8) {
  return pessoas.map(pessoa => pessoa.nota > notaParaAprovacao ?  `${pessoa.nome} - Aprovado` : `${pessoa.nome} - Reprovado`);
}

function alunos(pessoas) {
  return pessoas.map((pessoa) => { return{ primeiroNome: pessoa.nome, notaFinal: pessoa.nota };});
}

module.exports = {
  nome,
  nomeComNota,
  upperCase,
  nomeComAprovacao,
  alunos
};
