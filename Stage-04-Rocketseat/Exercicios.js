// RESOLUÇÃO DE EXERCÍCIOS

/* Exercício 01 - Declare uma variável de nome weight.
   Resolução:*/
let weight; //var weight or const weight

/* Exercício 02 - Que tipo de dado é a variável acima?
   Resolução:*/
console.log(typeof weight); //undefined

/* Exercício 03 - Declare uma variável e atribua valores para cada um dos dados:
    * name: type = string 
    * age: type = number (integer)
    * stars: type = number (float)
    * isSubscribed: type = boolean
    
   Resolução:
*/

let name = 'Rafael';
let age = 31;
let stars = 4.8;
let isSubscribed = true

console.log(name, age, stars, isSubscribed)

/* Exercício 04 - A variável student abaixo é de que tipo de dado? Atribua a ela as mesmas propriedades e valores do exerício 3. Mostre no console a mensagem abaixo substituindo os valores dentro das <> pelos valores das propriedades da variável student.

  <name> de idade <age> pesa <weight> kg.

  let student = {}
*/

let student = {}
console.log(typeof student) //object

student = {
  name: 'Rafael',
  age: 31,
  stars: 4.9,
  isSubscribed: true
}
console.log(student)

console.log(`${student.name} de idade ${age} tem ${stars} estrelas. Inscrito: ${isSubscribed}`)

/* Exercício 05 - Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.

   Resolução:
*/

let students = []
console.log(typeof students)
console.log(students)
console.log(students.lenght)

/* Exercício 06 - Reatribua valor para a variável students, colocando dentro dela o objeto student da questão 4. ATENÇÂO: não copiar e colar, utilizar o objeto criadoe inserir ele no array.
   
   Resolução:
*/

students = [student]
console.log(students, students.length)

/* Exercício 07 - Coloque no console o valor da posição 0 (zero) do array students

   Resolução:
*/

console.log(students[0])
console.log(`
Nome do estudante: ${students[0].name}
Idade: ${students[0].age}
Estrelas: ${students[0].stars}
Inscrição: ${students[0].isSubscribed}
`)

/* Exercício 08 - Crie um novo student e coloque na posição 1 do array students.

   Resolução:
*/

students[1] = {
  name: 'Valéria',
  age: 32,
  stars:5.0,
  isSubscribed: false
}
console.log(students, students.length)
console.log(`Temos ${students.length} estudantes na aula hoje. O ${students[0].name} e a ${students[1].name}`)
console.log(typeof students[0], typeof students[1]) //ambos elementos do array são objetos

/* Exerício 09 - Sem rodar o código diga qual é a resposta do código abaixo e por que? Após respota, rode o código e veja se acertou.

   console.log(a)
   var a = 1

   Resolução:
*/

//Por estarmos declarando uma variável utilizando a palavra reservada "var", ao rodarmos o código ele irá undefined, já que uma propriedade das variáveis declaradas com "var" é a de hoisting, o que faz que as declarações das variáveis sejam lidas primeiro no script para depois serem lidas as atribuções de valores.

console.log(a)
var a = 1