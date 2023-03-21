import {buttonPlay, buttonPause, buttonStop, buttonSet, buttonSoundOn, buttonSoundOff, minutesDisplay, secondsDisplay,} from './elements.js'

export default function Events({ 
  controls, 
  timer, 
  sound,
}) {

  function startCount() {
    buttonPlay.addEventListener('click', function(){
      controls.play()
      timer.countdown()
      sound.pressButton()
    })
  }

  function pauseCount() {
    buttonPause.addEventListener('click', function(){
      controls.pause()
      timer.hold()
      sound.pressButton()
    })   
  }

  function stopCount() {
    buttonStop.addEventListener('click', function(){
      controls.reset()
      timer.reset()
      sound.pressButton()
    })    
  }

  function setCount() {
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
  }

  function startSound() {
    buttonSoundOn.addEventListener('click', function(){
      buttonSoundOff.classList.remove('hide')
      buttonSoundOn.classList.add('hide')
      sound.bgAudio.play()
    })
  }

  function stopSound() {
    buttonSoundOff.addEventListener('click', function(){
      buttonSoundOff.classList.add('hide')
      buttonSoundOn.classList.remove('hide')
      sound.bgAudio.pause()
    })
  }

  return {
    startCount,
    pauseCount,
    stopCount,
    setCount,
    startSound,
    stopSound,
  }
}