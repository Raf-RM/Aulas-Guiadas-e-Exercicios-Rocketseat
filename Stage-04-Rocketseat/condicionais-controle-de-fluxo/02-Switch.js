/*
  switch

  --> inúmeros caminhos

  switch(expression) {
    case 'caso1':
      código do caso1
      break; // se não adicionado o break ele passa pro próximo case até encontrar um break ou terminar todo o bloco do switch
    case 'case2':
      código do caso2
      break
    default: // caso não cumpra nenhum dos casos acima
      break
  }
*/

let expression = 1

switch(expression) {
  case 'caso1':
    console.log("caso 1")
    break; 
  case 'caso2':
    console.log("caso 2")
    break
  default: 
    console.log("default")
    break
}