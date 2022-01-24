console.log(`Trablhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 15;
const estaAcompanhada = false;

listaDeDestinos.push(`Curitiba`, `Afonso Cláudio`);
listaDeDestinos.splice(1, 1);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
} else if (estaAcompanhada == true) {
    console.log("O comprador está acompanhado");
} else {
    console.log("Comprador menor de idade e não acompanhado, venda não permitida");
};

  //com o IF podemos declarar funções a serem executadas a partir de determinados requisitos estabelecidos pelo programador, o ELSE serve para caso a requisição não seja atendida outro bloco de código se execute.



console.log(`Destinos possíveis`);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[2]);

// tipos de operadores boleianos
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);