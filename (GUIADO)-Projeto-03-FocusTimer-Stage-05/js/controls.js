export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
}) {

  function play() {
    buttonPlay.classList.add('hide') 
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Tempo de contagem:') /*|| 25 Se não houver entrada no prompt ele vai pegar 25 - prompt ||(ou) 25 */
    if(!newMinutes){
      return false
    }
    /*Com esse "if" evitamos de pegar null e undefined por exemplo*/
    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
  }
}
