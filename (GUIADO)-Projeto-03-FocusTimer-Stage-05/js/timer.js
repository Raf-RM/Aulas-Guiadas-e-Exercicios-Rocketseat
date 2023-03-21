import Sounds from './sounds.js'

/*Facoty-> Colocamos o que precisamos dentro de uma função e retornamos um obj com as coisas que precisamos usar fora daquele escopo. Se a factory precisar de dependências devemos injetar dependências nela.*/
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  //destructuring --> desestruturando um obj. direto nos parâmetros
  //Dentro do escopo da função nós passamos todas as dependências que precisamos para utilizar a função (injeção de dependências)
}){

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes,seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    /*Criando saídas para minutes e seconds caso não acha nenhuma das variáveis. Utilizando operador ternário*/
    secondsDisplay.textContent = String(seconds).padStart(2,'0')
    minutesDisplay.textContent = String(newMinutes).padStart(2,'0')
  }
  
  function reset(){
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)/*Espera um id númerico. Como nós estamos registrando a saída do setTimeout que é um número, podemos utiliza-la. o clearTimeout busca dentro de todos os Timeouts q temos na api e faz um clear, parando tudo imediatamente*/
  }
  
  function countdown(){
    timerTimeOut = setTimeout(function(){
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let endOfCount = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)
      
      if(endOfCount) {
        resetControls()
        updateDisplay()
        Sounds().timeEnds()
        return
      }
      if(seconds <= 0){
        seconds = 60
        --minutes
      }
  
      updateDisplay(minutes, String(seconds - 1))
  
      countdown() 
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
  }
  //retorna um obj. Shorthand -> como a propriedade e valor do obj são iguais não precisamos escrever countdown:countdown
}

