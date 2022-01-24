console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listaDeDestinos.push(`Curitiba`, `Afonso Cláudio`);

console.log(`\n Destinos possíveis`);
console.log(listaDeDestinos);

const idadeComprador = 12;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "São Paulo";
let destinoExiste = false;

let podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);
let contador = 0;

while(contador<5){  //ótimo para executar funções ENQUANTO (WHILE) suas condições forem atendidas. 
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

if(destinoExiste == true){
    console.log("Destino existe");
}else{
    console.log("Destino não existe");
}

if(podeComprar && destinoExiste){
    console.log("Boa Viagem")
}else{
    console.log("Viagem não disponibilizada")
} 


for(let i = 0 ; i < 5; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
    }
}

//FOR é como o while, porém no inicio, você declara a variável para a condição, em segundo a condição e em terceiro e último é o comando executado após o loop.