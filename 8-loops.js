console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listaDeDestinos.push(`Curitiba`, `Afonso Cláudio`);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Afonso Cláudio";

let podeComprar = (idadeComprador >= 18 || estaAcompanhada == true)
let contador = 0;

while(contador<5){  //ótimo para executar funções ENQUANTO (WHILE) suas condições forem atendidas. 
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
    }else{
        console.log("Destino não existe");
    }
    contador += 1;
}


console.log(`\n Destinos possíveis`);
console.log(listaDeDestinos);

