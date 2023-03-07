const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random() * 10)

let attemptsNumber = 1

function handleTryClick(event) {
  event.preventDefault() //o event padrão de um button dentro do formulário é enviar o formulário, a função preventDefault() Diz para não executar o que está definido como padrão, impedindo seja enviado o form e evitando que a pagina recarregar toda vez que clicarmos

  const inputNumber = document.querySelector("#inputNumber")
  //console.log(inputNumber.value) // Em todos os inputs podemos pegar seu valor utilizando .value uma vez que input não tem nada interno, ou seja ela fecha e abre nele mesmo

  if(Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide") 
    screen2.classList.remove("hide")
    // Caso o número que colocarmos for o número sorteado ele adiciona a classe "hide" ao "screen1" e remove a classe "hide" do "screen2"

    document.querySelector(".screen2 h2").innerText = `Acertou em ${attemptsNumber} tentativas!`
    //Modifica o texto da tag h2 no screen2
  }

  inputNumber.value = ''
  attemptsNumber++
}

//EVENTOS
//Criando os dois botões no JS
const buttonTry = document.querySelector("#buttonTry")
const buttonReset = document.querySelector("#buttonReset")

//Registrar os eventos
buttonTry.addEventListener('click', handleTryClick ) // função callback

buttonReset.addEventListener('click', function() {
  screen2.classList.add("hide")
  screen1.classList.remove("hide")
  attemptsNumber = 1
})
