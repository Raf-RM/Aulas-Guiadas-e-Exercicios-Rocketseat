/*
  Jogo da adivinhação

  --> Apresente a mensagem ao usuário: "Adivinhe o número que estou pensando? Está entre 0 e 10."
  --> Cria uma lógica para gerar um número aleatório e verificar se o número digiado é o mesmo que o aleatório gerado pelo sistema.
  --> Enquanto o usuário não adivinhar o número, mostrar a mensagem: "Erro, tente novamente"
  --> Caso o usuário acerte o número, apresentar a mensagem: "Parabéns! Você advinhou o npumero em x tentativas"

*/

const sortedNumber = Math.round(Math.random() * 10)

num = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10.")

let attemptNum = 1

while(sortedNumber != num){
  num= prompt("Erro, tente novamente")
  attemptNum++
}

if(attemptNum == 1){
  alert(`Parabéns! O número que pensei foi o ${sortedNumber}. Você advinhou o número em ${attemptNum} tentativa.`)
}
else {
  alert(`Parabéns! O número que pensei foi o ${sortedNumber}. Você advinhou o número em ${attemptNum} tentativas.`)
}