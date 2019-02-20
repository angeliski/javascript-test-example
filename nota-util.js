const media = () => { 
  
  

};


function mediaTurma(alunos) {
  let notas = [];
  let somaTotalNotas = 0;

  for(let i = 0; i< 4; i++){

    notas[i] = alunos[i].notaFinal;

  }
  for(let i = 0; i<4; i++){

    somaTotalNotas = somaTotalNotas + notas[i];

  }

  return somaTotalNotas / notas.length;
}


function ordenaPelaNotaAsc(alunos) {

  let notas = [];
  

  for(let i = 0; i< 4; i++){

    notas[i] = alunos[i].notaFinal;

  }
  let notasCrescentes = notas.sort(function(a, b){return a - b});

  let objCrescente = [];
  for (let i = 0; i < notas.length; i++){
    for(let y = 0; y< 4; y++){
      if(notasCrescentes[i] === alunos[y].notaFinal){
        objCrescente[i] = alunos[y];
      }
    }
  }
  return objCrescente;
}

module.exports = {
  media,
  mediaTurma,
  ordenaPelaNotaAsc
};
