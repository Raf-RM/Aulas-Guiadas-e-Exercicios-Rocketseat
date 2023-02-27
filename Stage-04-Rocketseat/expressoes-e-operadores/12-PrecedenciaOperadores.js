/*
  Operator precedence (precedencia de operadores)
  --> Ordem de importancia/execução dentro de uma expressão

  Exemplos:

    1° - grouping                   ( )
    2° - negação e incremento       ! ++ --
    3° - multiplicação e divisão    * /
    4° - adição e subtração         + -
    5° - relacional                 < <= > >=
    6° - igualdade                  == != === !==
    7° - AND                        &&
    8° - OR                         ||
    9° - conditional                ?:
    10° - assignment                = += -= *= /=

*/

console.log(3 > 2 > 1) // retorna false pq ele verifica que 3 > 2 o que é true e depois verifica se tru > 1 o que é false

console.log(3 > 2 && 2 > 1) // retorna true