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

Modal.buttonClose.onclick = handleClose /*onclick é um evento --> a function só será executada quando clicarmos no button "X"*/

window.addEventListener('keydown', handleEscClose) 

function handleEscClose(event) {
  //Escape = Esc
  if(event.key === 'Escape') {
    Modal.close()
  }
}

function handleClose() {
  Modal.close()
}

export {Modal}