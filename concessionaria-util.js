function ehGolf(carro) {
  return new Promise((resolve, reject) => {
    if (carro) {
      resolve(carro.toUpperCase() === 'GOLF')
    } else {
      reject('Não foi informada nenhum carro!')
    }
  })
}

module.exports = {
  ehGolf
};
