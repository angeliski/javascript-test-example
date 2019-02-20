const media = () => { 
  
  

};


function mediaTurma(alunos) {
let notas = [];
let somaTotalNotas = 0;
let mediaTurma = 0;
for(let i = 0; i< 4; i++){
  
 notas[i] = alunos[i].notaFinal;
}
for(let i = 0; i<4; i++){
  somaTotalNotas = somaTotalNotas + notas[i];
}
  return somaTotalNotas  / notas.length;
}


function ordenaPelaNotaAsc(alunos) {
    
}

module.exports = {
  media,
  mediaTurma,
  ordenaPelaNotaAsc
};
