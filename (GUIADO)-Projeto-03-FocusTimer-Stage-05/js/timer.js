function updateTimerDisplay(minutes,seconds) {
  secondsDisplay.textContent = String(seconds).padStart(2,'0')
  minutesDisplay.textContent = String(minutes).padStart(2,'0')
}

function resetTimer(){
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)/*Espera um id númerico. Como nós estamos registrando a saída do setTimeout que é um número, podemos utiliza-la. o clearTimeout busca dentro de todos os Timeouts q temos na api e faz um clear, parando tudo imediatamente*/
}

function contdown(){
  timerTimeOut = setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    if(minutes <= 0 && secondsDisplay.textContent ==='00'){
      resetControls()
      return
    }
    if(seconds <= 0){
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    contdown() 
  }, 1000)
}

export {resetTimer, contdown}