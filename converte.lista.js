function nome(pessoas) {
	return pessoas.map((nome) => nome.nome);
}

function nomeComNota(pessoas) {
	return pessoas.map((nome) => nome.nome + ' - ' + nome.nota);
}

function upperCase (pessoas) {
	return pessoas.map((nome) => nome.toUpperCase(nome));
}

function nomeComAprovacao (pessoas, notaParaAprovacao = 8) {
  return pessoas.map((nome) => {
    if(nome.nota > notaParaAprovacao){
      return nome.nome + ' - ' + 'Aprovado'
    }else{
      return nome.nome + ' - ' + 'Reprovado'
    }
  })
};

function alunos(pessoas) {
  return pessoas.map((nome) => JSON.parse(JSON.stringify({ primeiroNome: nome.nome, notaFinal: nome.nota })));
}

module.exports = {
  nome,
  nomeComNota,
  upperCase,
  nomeComAprovacao,
  alunos
};
