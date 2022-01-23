console.log("Trabalhando com atribuição de variáveis");
//JS é case sensitive

//const idade = 29;
let nome = "Kelwin";
const sobrenome = "Hollunder";  //CONST são variáveis que não podem ser alteradas!

//console.log(nome + sobrenome);
//console.log(nome, sobrenome);
//console.log(nome + " " + sobrenome);
//console.log(`Meu nome é ${nome} ${sobrenome}`); // "${} para declarar variáveis dentro de strings"

nome = `Meu nome é ${nome} ${sobrenome}`;

console.log(nome);

let idade; //declarando a variavel
let anosDesdeJulhoDe2020;
idade = 23; //atribuindo a variavel
anosDesdeJulhoDe2020 = 1;
idade = idade + anosDesdeJulhoDe2020; //somando variaveis
console.log(idade);

//Usar const sempre que possível é parte de Boas Práticas, porém nem sempre é possível, em projetos reais, o uso de outros tipos de variáveis como let, é inevitável.