function ehGolf(carro) {
	return new Promise (function(resolve, reject){
		if(carro){
			resolve(carro === 'golf')
		}else {
			reject("Não foi informada nenhum carro!")
		} 
	})
}
	
	module.exports = {
	ehGolf
	};