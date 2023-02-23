/*
  type conversion (typecasting) (capacidade nossa de causar uma conversão) VS type coersion (capacidade do JS de forçar uma troca)

  * Ambas alterão um tipo de dado para outro tipo

  type conversion --> quando nós fazemos alteração explicita de um tipo de dado para outro
  type coersion --> JS implicitamente alterando um tipo de dado para outro (JS tb pode utilizar type conversion)
*/

// TYPE COERSION
console.log('9' + 5) // string + number resultado: 95
console.log(typeof ('9' + 5)) // tipo do resultado é string (concatenação)
// JS forçou a conversão do número 5 para o tipo string
// Verificando:
console.log(('9' + 5) === '95') 
console.log(('9' + 5) === '9' + '5') 
// Resultado é true para ambos

// TYPE CONVERSION
console.log(Number('9') + 5) //  number + number resultado: 14
console.log(typeof (Number('9') + 5)) //tipo do resultado é number (somamos) 
// Verificando
console.log((Number('9') + 5) === 14)
console.log((Number('9') + 5) === 9 + 5)
// Resultado é true para ambos

