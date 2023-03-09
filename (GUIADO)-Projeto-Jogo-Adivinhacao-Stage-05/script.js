//Variáveis da aplicação
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

//Criando os dois botões no JS
const buttonTry = document.querySelector("#buttonTry")
const buttonReset = document.querySelector("#buttonReset")

let randomNumber = Math.round(Math.random() * 10)

let attemptsNumber = 1

//EVENTOS
//Registrar os eventos
buttonTry.addEventListener('click', handleTryClick ) 
buttonReset.addEventListener('click', handleResetClick ) 
document.addEventListener("keypress", handleResetEnter)


// Funções
function handleTryClick(event) {
  event.preventDefault() //o event padrão de um button dentro do formulário é enviar o formulário, a função preventDefault() Diz para não executar o que está definido como padrão, impedindo seja enviado o form e evitando que a pagina recarregar toda vez que clicarmos

  const inputNumber = document.querySelector("#inputNumber")
  //console.log(inputNumber.value) // Em todos os inputs podemos pegar seu valor utilizando .value uma vez que input não tem nada interno, ou seja ela fecha e abre nele mesmo

  //Limitando a execução somente para números >=0 e <=10, não permitindo a contagem de tentativas caso nenhum número seja inserido, e permitindo somente números inteiros
  //Condicionais
  let majorEqualThen = Number(inputNumber.value) >= 0;
  let minorEqualThen = Number(inputNumber.value) <= 10;
  let notFloat = String(inputNumber.value).length <= 2;
  let differentThen = inputNumber.value !== ""
  if(majorEqualThen && minorEqualThen && notFloat && differentThen) {
    
    screen1.querySelector("p").innerText = `Adivinhe o número entre 0 e 10.`

    if(Number(inputNumber.value) == randomNumber) {
      toggleScreen()
      // Caso o número que colocarmos for o número sorteado ele adiciona a classe "hide" ao "screen1" e remove a classe "hide" do "screen2"

      screen2.querySelector("h2").innerText = `Acertou em ${attemptsNumber} tentativas!`
      //Como já definimos screen2 já podemos pesquisar diretamente pelo "h2" dentro do elemento 
      //Modifica o texto da tag h2 no screen2
    }

    inputNumber.value = ''
    attemptsNumber++
  }
  else {
    //alert("Número inválido! Por favor, insira um um valor entre 0 e 10!")
    inputNumber.value = ''
    screen1.querySelector("p").innerText = `Número inválido!
    Por favor insira um número entre 0 e 10.`
  }
}

function handleResetClick(){
  toggleScreen()
  attemptsNumber = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen2.classList.toggle("hide")
  screen1.classList.toggle("hide")
}

function handleResetEnter(event) {
  if(event.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}
  //ATENÇÂO: document.addEventListener vai adicionar um evento global, que vai aparecer em todo documento, sem a segunda condição do if ele vai executar o if toda vez que Enter for precionado independente se estamos ou não na screen2
