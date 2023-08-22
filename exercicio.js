//Nathaniel Santos

/*
1. R: 10, 5.
*/

/*
2. R: 10, 10, 10. 
*/

/*
3. R: p -> horaTrabalho . t -> salarioTrabalho 
*/

//-------------------

/*1. a, b, c
nome
idade
console.log(typeof nome);
console.log(typeof idade);

d. nada foi impresso, pois para saber o tipo das variaveis precisa-se de valores em texto ou numero.
*/

/*
let nome = prompt("Qual o seu nome?");
let idade = prompt("Quantos anos voce tem?");
nome = nome.toString();
idade = Number(idade);
console.log(typeof nome);
console.log(typeof idade);
*/

/*f. foi atribuido o comando "toString" para a variavel "nome" e "Number" para a variavel "idade"
assim foi possivel dizer quais seus respectivos tipos
*/

//console.log("ola", nome ,"voce tem", idade ,"anos");
//alert ('Ola {nome}, voce tem {idade} anos');

//2.
let pergunta = "voce esta usando uma camiseta azul?";
sim = "- sim"
nao = "- nao"
talvez = "- talvez"
console.log(pergunta, sim);
console.log(pergunta, nao);
console.log(pergunta, talvez);

//3.
let a = 10
let b = 25
c = a
a = b
b = c
console.log(a, b, c);

//final

let soma1 = prompt("dÊ um numero");
let soma2 = prompt("agora outro numero");
soma1 = Number(soma1);
soma2 = Number(soma2);
let somaResultado = soma1 + soma2;
console.log(somaResultado);

let multi1 = prompt('dÊ um numero');
let multi2 = prompt('agora outro');
multi1 = Number(multi1);
multi2 = Number(multi2);
let multiResultado = multi1 * multi2;
console.log(multiResultado);
