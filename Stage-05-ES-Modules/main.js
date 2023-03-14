import qualquerNome from './utils.js' /*Nessa linha ele importa e ja executa o arquivo. Quando utilizamos o export default podemos importar utilizando qualquer nome */

console.log(qualquerNome) // Não é possível utilizar a variável mensagem neste local, ela está isolada no escopo do arquivo que contém ela.

//Importando mais de uma variável. Quando utilizamos o import Named devemos utilizar os mesmo nomes dados as variáveis sendo importadas.
import {text, number,func} from './utils.js'
console.log(number, text, func())

//Podemos importar 1 ou mais elementos em uma única linha, separando por virgula:
import qualquerCoisa, {phrase, sum} from './utils.js'
console.log(qualquerCoisa)
console.log(phrase, sum(1, 3))

//Utilizando o "import as" para renomiar 1 ou mais dados que foram importados:
import {sub as subtração} from './utils.js'
console.log(subtração(12, 25))

//Podemos importar multiplos exports e dar um nome padrão para eles utilizando o "import * as", ("*" se refere a tudo com export):
import * as calculator from './utils.js'
console.log(calculator.divi(20,8))
console.log(calculator.mult(5,3.5))
console.log(calculator.rest(83,9))
console.log(calculator.phrase)
console.log(calculator.text)