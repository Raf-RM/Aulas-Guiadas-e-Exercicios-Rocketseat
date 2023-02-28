/*
  Operadores de comparação

  "igual a"/"diferente de": (==, !=, ===, !==) Irá comparar valores e retornar um boolean como resposta  à comparação (caso não estrito) ou comparar valores e tipo e retornar um boolean como resposta  à comparação (caso estrito)

  --> sinal de comparação não estritamente (consideram strings de número e números como equivalentes ex.: "1" == 1 --> true): 
    * == (sinal "igual a")
    * != (sinal "diferente de")
  
  --> sinal de comparatação estritamente ():
    * === (sinal estritamente igual)
    * !== (sinal estritamente diferente)
  
  --> os dois primeiros sinais é referente aos valores (== ou !=) o terceiro sinal é referente ao tipo (=== ou !==)  

  "maior que"/"menor que", "maior ou igual a"/"menor ou igual a": (>, >, >=, <=) compara se os valores são maiores menores ou iguais (não estrito)
    * > ("maior")
    * < ("menor")
    * >= ("maior ou igual a")
    * <= ("menor ou igual a")  
*/

let one = 1
let two = 2

console.log("Sinal 'igual a' não estrito:")
console.log(two == 1)
console.log(two == "2")
console.log(two == 2)
console.log(one == "um")
console.log(one == 1)

console.log("Sinal 'diferente de' não estrito:")
console.log(one != two)
console.log(one != "um")
console.log(one != 1)

console.log("Sinal 'igual a' estrito:")
console.log(one === "1")
console.log(two === 2)

console.log("Sinal 'diferente de' estrito:")
console.log(one !== 1)
console.log(two !== "2")

console.log("Sinal 'maior que':")
console.log(one > two)
console.log(one > 1)
console.log(one > 0)
console.log(one > "0")

console.log("Sinal 'menor que':")
console.log(two < one)
console.log(two < 2)
console.log(two < 3)
console.log(two < "3")

console.log("Sinal 'maior ou igual a':")
console.log(one >= two)
console.log(one >= 1)
console.log(one >= "1")

console.log("Sinal 'menor ou igual a':")
console.log(two <= one)
console.log(two <= 2)
console.log(two <= "2")



