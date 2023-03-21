export default function() {
  //const buttonPress = new Audio() -> Função construtora  que vai procurar na função Audio() vai criar um novo objeto de áudio (que será um elemento HTML de áudio). Vai receber como argumento o áudio que vamos querer que ele toque.
  // Também é possível criar um elemnto de áudio no arquivo html utilizando a tag audio com a propriedade controls e informando o local do áudio na src

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

  bgAudio.loop //A propriedade loop faz com que o som do bg audio fique em loop

  function pressButton() {
    buttonPressAudio.play()
  }
  function timeEnds() {
    kitchenTimer.play()
  }
  /*function backGroundAudio() {
    bgAudio.play()
  }*/

  return {
    pressButton,
    timeEnds,
    bgAudio,
  }

}