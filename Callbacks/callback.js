//funções aceitam qualquer tipo de dado, podemos passar uma função dentro de outra função.

function imprimirDado(dado) {
	console.log('outras tarefas')
	console.log(dado())
}

imprimirDado(function () {
	return 'Olá Mundo'
})