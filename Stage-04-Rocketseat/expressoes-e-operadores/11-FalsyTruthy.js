/*
  FALSY 
  --> quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)
    * false
    * 0
    * -0
    * ""
    * null
    * undefined
    * NaN
  
  TRUTHY
  --> quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)
    * true
    * {}
    * []
    * 1
    * 3.23
    * "0"
    * "false"
    * -1
    * Infinity
    * -Infinity

    Isso acontece pq o JS faz um typecasting (type conversion)
    JS faz type casting de true == 1 e false == 0

*/

console.log("FALSY:")

console.log (false ? "verdadeiro" : "falso")
console.log (0 ? "verdadeiro" : "falso")
console.log (-0 ? "verdadeiro" : "falso")
console.log ("" ? "verdadeiro" : "falso")
console.log (null ? "verdadeiro" : "falso")
console.log (undefined ? "verdadeiro" : "falso")
console.log (NaN ? "verdadeiro" : "falso")

console.log("TRUTHY:")

console.log (true ? "verdadeiro" : "falso")
console.log ({}? "verdadeiro" : "falso")
console.log ([] ? "verdadeiro" : "falso")
console.log (1 ? "verdadeiro" : "falso")
console.log (3.23 ? "verdadeiro" : "falso")
console.log ("0" ? "verdadeiro" : "falso")
console.log ("false" ? "verdadeiro" : "falso")
console.log (-1 ? "verdadeiro" : "falso")
console.log (Infinity ? "verdadeiro" : "falso")
console.log (-Infinity ? "verdadeiro" : "falso")