/*
  Operadores do tipo unário
  (os dois mais comuns)
  - typeof
  - delete --> deleta uma propriedade dentro de um objeto desde que ela exista
*/

console.log(typeof 'Rafael')

const person = {
  name: "Rafael",
  age: 31,
}
console.log(person)
delete person.age
console.log(person)