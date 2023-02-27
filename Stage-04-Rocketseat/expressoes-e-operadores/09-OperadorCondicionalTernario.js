/*
  Operador condicinal (ternário)

  --> dependendo da condição, nós receberemos valores diferentes

  --> condição enão valor 1 se não valor 2
    * condition ? value1 : value2 (se verdadeiro "?" "valor1", se não ":" "valor2")
*/

const boletos = true
let dinheiro = false
let trabalho = true
let tempo = false

let myLife

myLife = boletos && dinheiro ? "Bora pagar as contas" : "Ferrou! Vou ter que vender alguma coisa."
console.log(myLife)

myLife = boletos && trabalho ? "Bora pagar as contas" : "Ferrou! Vou ter que vender alguma coisa."
console.log(myLife)

myLife = dinheiro || trabalho ? "Tá bom! Não posso reclamar..." : "É melhor eu arranjar um trampo!."
console.log(myLife)

myLife = dinheiro || !trabalho ? "Tá bom! Não posso reclamar..." : "É melhor eu arranjar um trampo!."
console.log(myLife)

myLife = !dinheiro && tempo ? "Bora viajar. Ihull!" : "Bem... acho que vou economizar."
console.log(myLife)

myLife = !dinheiro && !tempo ? "Bora viajar. Ihull!" : "Bem... acho que vou economizar."
console.log(myLife)

