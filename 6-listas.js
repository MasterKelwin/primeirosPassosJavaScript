console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array(  //declarando uma lista
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`, `Afonso Cláudio`); //adicionando um item na lista após ter sido criada
listaDeDestinos.splice(1,1);  //para remover itens do meu array, dentro do splice o primeiro número é referente a posição de inicio e o segundo número é sobre o número de itens a serem deletados

console.log(`Destinos possíveis`);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[2]); //entre [] para declararmos qual valor deve ser exibido