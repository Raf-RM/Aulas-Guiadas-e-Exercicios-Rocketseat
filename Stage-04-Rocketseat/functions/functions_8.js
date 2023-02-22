/*
  Function() constructor (a primeira letra da função construtora é em maiúsculo - Boas Práticas)

  * expressão new --> empregando a expressão "new" antes do nome da função transforma a função em uma função constructora
  * criar um novo objeto
  * this keyword --> dentro da função temos uma palavra chave especial chamada this
*/

function Person(name){
  // this sempre vai se referir ao "rafa" la fora e o "rafa" la de fora sempre será referenciadocomo "this" dentro da função
  this.name = name // cria uma propriedade nova 
  this.walk = function(){ // cria nova funcionalidade
    return this.name + " está andando"
  }
}
const rafa = new Person('Rafael') // essa expressão retorna para a const rafa um objeto (cria um novo objeto) como a função tem um parãmetro name, fornecemos um valor para esse parâmetro "Rafael" que vai ser uma propriedade nova de "rafa".
console.log(rafa)

const val = new Person('Valéria') // instanciando um novo objeto
console.log(val)

// Uma construct function é como se fosse um molde para criar novos objetos

console.log(rafa.walk())
console.log(val.walk())