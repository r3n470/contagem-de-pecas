//pré-requisitos
let pesoMinimo = 100;
let listaMaxima = 10;
let nomeCorretoDaPeca = "abc";

//informações a serem lançadas
let pesoDaPeca = 110;
let listaDePeca = 9;
let nomeDaPeca = "Retrovisor";

//codigos usados
if (pesoDaPeca > pesoMinimo) console.log("Pode cadastrar");
else console.log("Peso incorreto");

if (listaDePeca > listaMaxima) console.log("Capacidade ultrapassada");
else console.log("Dentro da capacidade");

if (nomeDaPeca.length >= nomeCorretoDaPeca.length) {
  console.log("Nome válido");
}
else {
  console.log("Nome precisa de pelo menos 3 caracteres");
}