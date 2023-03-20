import Timer from './timer.js'
import Controls from './controls.js'

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})


function handleButtonPause(){
  controls.pause()
  timer.hold()
}

buttonPlay.addEventListener('click', function(){
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener('click', handleButtonPause)

buttonStop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
})

buttonSet.addEventListener('click', function(){
  let newMinutes = controls.getMinutes()
  if(!newMinutes){
    timer.reset()
    return
  }
  /*Com esse "if" evitamos de pegar null e undefined por exemplo*/

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

buttonSoundOn.addEventListener('click', function(){
  buttonSoundOff.classList.remove('hide')
  buttonSoundOn.classList.add('hide')
})

buttonSoundOff.addEventListener('click', function(){
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
})