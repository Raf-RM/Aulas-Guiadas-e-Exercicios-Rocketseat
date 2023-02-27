/*
  Operadores lógicos (logical operators)
    * AND && --> para retornar true ambos valores devem ser true, caso contrario retorna false
    * OR || --> para retornar true, basta que um valor seja true, se ambos forém false ele retorna false
    * NOT ! --> negação, inverte o valor original se é false retorna true e se é true retorna false

  --> verifica dois valores booleanos
  --> retorna um valor booleano falso ou verdadeiro
*/

let dinheiro = false
let boletos = true
let trabalho = true
let tempo = false

// AND &&
console.log("AND &&:")
console.log(dinheiro && boletos) 
console.log(trabalho && boletos)
console.log(tempo && dinheiro)

// OR ||
console.log("OR ||:")
console.log(dinheiro || boletos) 
console.log(trabalho || boletos)
console.log(tempo || dinheiro)

// NOT !
console.log("NOT !:")
console.log(!dinheiro && boletos) 
console.log(trabalho && !boletos)
console.log(tempo || !dinheiro)