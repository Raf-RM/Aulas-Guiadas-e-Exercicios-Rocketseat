// Função anônima (não tem um nome) - function expression/anonymous

// number1 e number2 são parâmetros quando dentro do escopo da função
const sum = function(number1, number2){
  let total = number1 + number2 
  // Não utilizamos palavras chaves para criação de variáveis (var, let, const) dentro desse escopo da função até as variáveis criadas utilizando "var" estão isoladas do resto do nosso código
  return total
}

let number1 = 23
let number2 = 32

sum(number1, number2) // number1 e number2 são argumentos quando fora da função. Não tem relação com number1 e number2 de dentro do escopo da função.

// Toda função sempre retorna alguma coisa, porém sempre que uma função não possúi a palavra chave "return", ela retorna "undefined" 

// Sempre que uma função encontra uma linha "return" ela para a execução e retorna o que está na frente da palavra chave "return"

console.log(`o primeiro valor é ${number1}`)
console.log(`o segundo valor é ${number2}`)
console.log(`a soma dos dois valores é ${sum(number1, number2)}`)

// Ao criarmos uma variável dentro de uma função sem o emprego das palavras chaves (var, let, const) ela passa a existir na aplicação inteira (o que pode ocasionar erros)
/* Teste: Retirar a palavra chave "let" dentro da function 
console.log(total)
*/
