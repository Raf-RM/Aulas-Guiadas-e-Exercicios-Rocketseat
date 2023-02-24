/*
Expressóes e Operadores

--> Expressions
--> Operations
    Binary
    Unary
    Ternary

Em JS é facultativo o uso do ";" ao final de uma expressão exceto no caso abaixo, no qual é necessário o uso:
*/

let number = 5; // Se retirarmos o ";" receberemos um erro


(function(){            // Expressão de uma função alto-executável
  console.log('Alo!')
}
)()

// Exemplo de um operador binário
console.log(number + 1)

// Exemplo de operador unário
// de incremento
console.log(++number) // incrementa em 1
// de decremento
console.log(--number) // decrementa em 1

//Operador ternário temos somente uma ocorrência
console.log(true ? 'Alo!' : 'Não faz nada')
console.log(false ? 'Alo!' : 'Não faz nada')