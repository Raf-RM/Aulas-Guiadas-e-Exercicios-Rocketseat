 //object literal
const AlertError = {
  element: document.querySelector('.alert-error-wrapper'),
  //elemento do alerta de erro

  open() {
    AlertError.element.classList.add('open')
  },
  close() {
    AlertError.element.classList.remove('open')
  }
}

export {AlertError}
