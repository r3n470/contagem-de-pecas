//pré-requisitos
const pesoMinimo = 100;
const listaMaxima = 10;
const nomeCorretoDaPeca = 'abc';

//informações a serem lançadas
let pesoDaPeca = 109;
let listaDePeca = 7;
let nomeDaPeca = 'retrovisor';

//codigos usados
if (pesoDaPeca > pesoMinimo) {
    console.log('Pode cadastrar');
}
else {
    console.log('Cadastro não pode ser realizado, peso inferior a 100 gramas');
}


if (listaDePeca > listaMaxima) {
    console.log('Capacidade ultrapassada');
}
else {
    console.log('Dentro da capacidade');
}


if (nomeDaPeca.length >= nomeCorretoDaPeca.length) {
    console.log('Nome válido');
}
else {
    console.log('Nome precisa de pelo menos 3 caracteres');
}