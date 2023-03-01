/*
  Jogo da adivinhação

  --> Apresente a mensagem ao usuário: "Adivinhe o número que estou pensando? Está entre 0 e 10."
  --> Cria uma lógica para gerar um número aleatório e verificar se o número digiado é o mesmo que o aleatório gerado pelo sistema.
  --> Enquanto o usuário não adivinhar o número, mostrar a mensagem: "Erro, tente novamente"
  --> Caso o usuário acerte o número, apresentar a mensagem: "Parabéns! Você advinhou o npumero em x tentativas"

*/

let incorrect = true;
const sortedNum = Math.round(Math.random() * 10) // pacote, conjunto de funcionalidades matemáticas Math, funcionalidade random() para sortear um número entre 0 e 1 e round() para arredondar o valor obtipo com a expressão (Math.random() * 10)
let cont = 0;

let num = prompt("Advinhe o número que estou pensando? Está entre 0 e 10.");

while(incorrect) {
  cont += 1 
  if(num == sortedNum) {
    incorrect = false
    alert("Parabéns! Você advinhou o número em " + cont + " tentativas!")
  }
  else {
    num = prompt("Erro, tente novamente:")
  }
}

// console é um pacote com funcionalidades para o console do devtools (browser)

// outra forma de arredondar é empregando o Math.ceil() que arredonda sempre para cima ou o Math.floor() que arredonda sempre para baixo.