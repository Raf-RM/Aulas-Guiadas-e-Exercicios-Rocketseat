/* 
  Manipulando Strings e Números

  --> Transformando strings em números e vice versa
  --> Contando número de caracteres e dígitos
  --> Transformando número quebrado com duas casas decimais e trocar por vírgula
  --> Transformando letras minúsculas em maiúsculas e vice versa
*/

// Trasformações de string para number e de number para string
let string = "123" 
console.log(Number(string))
console.log(typeof string)
console.log(typeof (Number(string))) // Função "Number" converte em número

let number = 321
console.log(String(number))
console.log(typeof number)
console.log(typeof (String(number))) // Função "String" converte em string

// Contagem de caracteres e dígitos
let word = "paralelepipedo"
console.log(word.length)

let anyNumber = 1235
console.log(anyNumber.length) // números não recebem propriedade length
console.log(String(anyNumber).length) // para determinarmos quantos dígitos tem um número podemos trasformar ele em string e então conta os caracteres

// Transformação número quebrado e troca de ponto por vírgula
let brokenNumber = 45687.55684
console.log(brokenNumber.toFixed(2).replace('.',',')) //toFixed() é uma função atrelada ao objeto number (é um método do objeto number)
// Um objeto pode ter diversas funções atreladas, uma atrelada a outra
// Lembrando que "," não faz parte de número e sim "."

console.log(typeof (brokenNumber.toFixed(2))) // resultado é uma string e não um número por isso podemos atrelar outros metodos como replace() que é um método de string
console.log(typeof (brokenNumber.toFixed(2).replace('.',',')))

// console é um objeto e possui um metodo log que tem como função escrever o que passamos como argumento

// De minúsculo para maiúsculo e vice versa0
let words = "Programar e aprender!"
console.log(words.toUpperCase()) // todas maiúsculas
console.log(words.toLowerCase()) // todas minúsculas

