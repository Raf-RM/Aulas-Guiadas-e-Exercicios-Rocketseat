//DOM --> Document Object Model (Modelagem do documento em formato de um objeto Javascript)

const buttonPlay = document.querySelector('.play')/*querySelector faz uma pesquisa por um seletor em todos os elementos HTML que eu tenho no meu document buscando pelo argumento que foi passado*/
const buttonPause = document.querySelector('.pause')

buttonPlay.addEventListener('click', function(){
  /*A propriedade classList também um objeto que possuí outras propriedades e funcionalidades*/
  buttonPlay.classList.add('hide') 
  buttonPause.classList.remove('hide')
})
buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})