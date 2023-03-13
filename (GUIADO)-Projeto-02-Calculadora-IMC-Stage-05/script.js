// Variáveis
const form = document.querySelector('form');
let inputWeight = document.querySelector('#weight');
let inputHeight = document.querySelector('#height');

//const modalWrapper = document.querySelector('.modal-wrapper');
//const modalMessage = document.querySelector('.modal .title span');
//const modalButtonClose = document.querySelector('.modal button.close');
//Essas variáveis para dentro do object literals "Modal". Para utilizar essas variáveis agora nós devemos chamaro objeito . nome da variável. ex: Modal.wrapper

const Modal = {
  /*Object literal --> aceita propriedades recebendo funções como valores
  mudamos a estrutura de dados e separamos as responsabilidades
  Desta forma, fica mais fácil a gente distinguir o que é responsabilidade do modal
  */


  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  /*open: function() {},
  close: function() {},
  Quando temos funções atribuidas a propriedades, como no caso acima, podemos escreve-las da seguinte forma: */

  open(){
    Modal.wrapper.classList.add('open'); /*adicionando a class open ao modalWrapper*/
  },
  close(){
    Modal.wrapper.classList.remove('open') /*removendo a class opeen do modalWrapper*/

    /*É possível referenciar o próprio "Modal" dentro dele porque a função inicialmente esta sendo registrada e só depois que será executada*/
  },
}

// 3 maneiras de criar e atribuir função a um evento
//form.onsubmit = () => {}
//form.onsubmit = function(){}

form.onsubmit = handleSubmit /*onsubmit é um evento --> a function só será executada quando clicarmos no botão de submit*/

Modal.buttonClose.onclick = handleClose /*onclick é um evento --> a function só será executada quando clicarmos no button "X"*/

function handleSubmit(event) {
  /*Por padrão, um evento submite recarrega a páginas, para evitar isso utilizamos preventDefault(), que evita que ele execute o padrão*/
  event.preventDefault()  
  const weight = Number(inputWeight.value) /*pegando os valores dos inputs*/
  const height = Number(inputHeight.value)

  const result = imc(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.open()
  Modal.message.innerText = message; /* modificando a mensagem dentro do span*/
}

function imc(weight, height) {
  const imc = weight / ((height / 100) ** 2)
  return imc.toFixed(2)
}

function handleClose() {
  Modal.close()
  inputWeight.value = null;
  inputHeight.value = null;
}