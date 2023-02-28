/*
  Solicite 2 números, faça a soma deles e apresente o resultado final ao usuário
*/

alert("Vamos realizar a soma de dois valores")

let numberOne = prompt("Digite o primeiro número:"); 
let numberTwo = prompt("Digite o segundo número:");
// prompt retorna um dado do tipo string

let result = Number(numberOne) + Number(numberTwo);

alert(numberOne + " + " + numberTwo + " = " + result);