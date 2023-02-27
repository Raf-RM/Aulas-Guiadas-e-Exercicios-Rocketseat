/*
  Control flow (controle de fluxo)
  --> por padrão a aplicação é lida e executada linha por linha, de cima para baixo   

  If ... else
  --> se (if) a condicional for true é executado oque está no bloco de código do if, se não (else) for true é executado oque está no bloco de código do else

  if (condicional) {
    bloco de código do if
  } 
  else {
    bloco de código do else
  }

  ***DICAS DE BOAS PRÁTICAS 
      -> evitar utilizar if/else sem o bloco
      -> transformar as condicionais em variáveis relevantes, que nos diga o que está fazendo (vide exemplo abaixo)

*/

let temperature = 38.2

let mediumTemperature = temperature > 36.8 && temperature <= 37.5
let highTemperature = temperature > 37.5 && temperature <= 38
let veryHighTemperature = temperature > 38

if(mediumTemperature) {
  console.log("Febril.")
}
else if(highTemperature) {
  console.log("Febre alta.")
}
else if(veryHighTemperature) {
  console.log( "Febre muito alta.")
}
else {
  console.log("Temperatura normal.")
}
