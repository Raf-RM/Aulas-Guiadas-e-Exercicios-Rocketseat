/*
  Capturar 2 números e fazer as operações matemáticas: soma, subtração, multiplicação, divisão e resto de divisão.

  E para cada operação mostrar um alerta com o resultado

  --> DICAS: Melhorando a lógica de programação
    * Faça perguntas corretas
    * Entenda o problema
*/

let numberOne = prompt("Digite o primeiro número");
let numberTwo = prompt("Digite o segundo número") ;

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const mult = numberOne * numberTwo;
const div = numberOne / numberTwo;
const restDiv = numberOne % numberTwo;

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + mult)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)
