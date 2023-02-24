/*
  new

  --> left-hand-side expression
  --> cria um novo objeto usando as funções construtoras que já temos por padrão no JS
*/

let name = new String('Rafael') // cria um objeto do tipo string
let age = new Number(31) // cria um objeto do tipo number

console.log(name, age)

// atribuindo novas propriedades aos objetos criados
name.surName = "Mateus"
age.birthDay = 11
age.birthMonth = "Março"

console.log(`${name} ${name.surName} nasceu dia ${age.birthDay} de ${age.birthMonth} e tem ${age} anos de idade.`)

// Ou podemos escrever a data de outra maneira (fica esquisito...)

let date = new Date('1991-03-11')
console.log(`${name} ${name.surName} nasceu em ${date} e tem ${age} anos de idade.`)