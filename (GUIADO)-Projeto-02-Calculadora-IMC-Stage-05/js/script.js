import {Modal} from './modal.js'
import {AlertError} from './alert-error.js'
import {imcCalculate, notAnumber} from './ultils.js'

// Variáveis
const form = document.querySelector('form');
let inputWeight = document.querySelector('#weight');
let inputHeight = document.querySelector('#height');

//const modalWrapper = document.querySelector('.modal-wrapper');
//const modalMessage = document.querySelector('.modal .title span');
//const modalButtonClose = document.querySelector('.modal button.close');
//Essas variáveis para dentro do object literals "Modal". Para utilizar essas variáveis agora nós devemos chamaro objeito . nome da variável. ex: Modal.wrapper

// 3 maneiras de criar e atribuir função a um evento
//form.onsubmit = () => {}
//form.onsubmit = function(){}

form.onsubmit = handleSubmit /*onsubmit é um evento --> a function só será executada quando clicarmos no botão de submit*/

//maneira que eu utilizeo para resolver o desafio 
//window.addEventListener('input', AlertError.close)
//maneira utilizado pelo professor
inputWeight.oninput = () => AlertError.close() 
inputHeight.oninput = () => AlertError.close() //oninput verifica se o input está sendo modificado


function handleSubmit(event) {
  /*Por padrão, um evento submite recarrega a páginas, para evitar isso utilizamos preventDefault(), que evita que ele execute o padrão*/
  event.preventDefault()  
  const weight = inputWeight.value /*pegando os valores dos inputs*/
  const height = inputHeight.value

  const wightOrHeightIsNotANumber = notAnumber(weight) || notAnumber(height)
  if(wightOrHeightIsNotANumber){
    AlertError.open()
    return;
  }
  AlertError.close()

  const result = imcCalculate(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.open()
  Modal.message.innerText = message; /* modificando a mensagem dentro do span*/
}
