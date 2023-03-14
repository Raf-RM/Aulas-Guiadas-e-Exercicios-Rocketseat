const message = "mensagem" /*Essa variável fica isolada neste aquivo, não sendo possível usar ela em outro local*/

//alert(message) remova o comentario
//export default message /*Exportando a variável message*/
// Podemos exportar qualquer coisa remova os comentarios para visualizar
export default 'texto direto'
//export default 1337
/*export default function(){
  return 2+5
}*/

//IMPORTANTE: Só podemos utilizar um default por arquivo

/*Named Export
Se quisermos exportar mais de uma variável devemos utilizar no import os mesmos nomes das variáveis exportadas */
const number = 1337
const func = function(){
  return 2+5
}
const text = 'Algum texto aqui!'
export {number, func, text}
//É possível exportar sem criar listas, repetindo a palavra chave export com o nome da variável na frente

const sum = (number1, number2) => number1 + number2
const phrase = 'somando números'
export {sum}
export {phrase}

const sub = function (number1, number2) {
  return number2 - number1
}
export {sub}

//podemos exportar o dado diretamente:
export const mult = (number1, number2) => number1 * number2;
export const divi = (number1, number2) => number1 / number2;
export const rest = (number1, number2) => number1 % number2;
//que equivale a export{mult, divi, rest}