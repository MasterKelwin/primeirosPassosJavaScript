console.log(`Trablhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 20;
const estaAcompanhada = true;
const temPassagemComprada = true;

listaDeDestinos.push(`Curitiba`, `Afonso Cláudio`);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada == true) {
//     console.log("O comprador está acompanhado");
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Comprador menor de idade e não acompanhado, venda não permitida");
// };


if (idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log("Comprador menor de idade e não acompanhado, venda não permitida");
};

console.log(`Destinos possíveis`);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[2]);

console.log("Embarque: \n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}

  //com o IF podemos declarar funções a serem executadas a partir de determinados requisitos estabelecidos pelo programador, o ELSE serve para caso a requisição não seja atendida outro bloco de código se execute.





// tipos de operadores boleianos
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);