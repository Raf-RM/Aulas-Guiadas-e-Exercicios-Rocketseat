import {resetTimer, contdown} from './timer.js'
import resetControls from './controls.js'

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

function handleButtonPause(){
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
}

buttonPlay.addEventListener('click', function(){
  buttonPlay.classList.add('hide') 
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  contdown()
})

buttonPause.addEventListener('click', handleButtonPause)

buttonStop.addEventListener('click', function(){
  resetControls()
  resetTimer()
})

buttonSet.addEventListener('click', function(){
  newMinutes = prompt('Tempo de contagem:') /*|| 25 Se não houver entrada no prompt ele vai pegar 25 - prompt ||(ou) 25 */
  if(!newMinutes){
    resetTimer()
    return
  }
  /*Com esse "if" evitamos de pegar null e undefined por exemplo*/
  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})

buttonSoundOn.addEventListener('click', function(){
  buttonSoundOff.classList.remove('hide')
  buttonSoundOn.classList.add('hide')
})

buttonSoundOff.addEventListener('click', function(){
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
})