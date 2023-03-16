//DOM --> Document Object Model (Modelagem do documento em formato de um objeto Javascript)

const buttonPlay = document.querySelector('.play')/*querySelector faz uma pesquisa por um seletor em todos os elementos HTML que eu tenho no meu document buscando pelo argumento que foi passado*/
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')

const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes

function contdown(){
  setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    if(seconds <= 0){
      seconds = 60
      /*Garante que, ao alcançar 0 a contage recomece do 60 (segundos) */
    }
    secondsDisplay.textContent = seconds - 1
    contdown() /*Utilizando recursão, fazendo a função chamar ela mesma*/
  }, 1000)
  /*setTimeout Recebe dois argumento: uma função e o timeout (tempo para executar a função) em milissegundos. Aqui a função vai pegar os segundos do display e reduzir 1 a cada 1000 milissegundos*/
}

buttonPlay.addEventListener('click', function(){
  /*A propriedade classList também é um objeto que possuí outras propriedades e funcionalidades*/
  buttonPlay.classList.add('hide') 
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  contdown()
})



buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
})

buttonStop.addEventListener('click', function(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
})

buttonSet.addEventListener('click', function(){
  minutes = prompt('Tempo de contagem:')
  minutesDisplay.textContent = minutes 
  /*minutesDisplay é um elemento HTML que, na modelagem da DOM é um objeto, sendo assim ele terá propriedades e funcionalidades. Uma de suas propriedades é o textContent que se refere ao conteúdo dentro desse elemento. Através do textContent também é possível alterar o conteúdo do elemento minutesDisplay*/
})

buttonSoundOn.addEventListener('click', function(){
  buttonSoundOff.classList.remove('hide')
  buttonSoundOn.classList.add('hide')
})

buttonSoundOff.addEventListener('click', function(){
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
})