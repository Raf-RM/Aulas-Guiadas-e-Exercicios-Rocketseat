// function hoisting

sayMyName();
function sayMyName(){
  console.log("Meu nome é Rafael")
}
// Uma função criada desse maneira (função do tipo statement/declaration) sofre hoisting, e apresenta um comportamento como se o JS colocasse essa função no início do código


sayMyName2();
const sayMyName2 = function(){
  console.log("Meu nome é Rafael")
}
// quando criamos uma função em forma de expressão utilizando as palavras chaves var, const ou let, ela não irá sofrer elevação
