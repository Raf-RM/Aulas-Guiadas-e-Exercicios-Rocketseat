export class Router {
  routes = {}
  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event //window está em todo o JavaScript
    event.preventDefault() 

    window.history.pushState({}, "", event.target.href)

    this.handle() //Palavra chave "this" empregada sempre que queremos utilizar uma função ou uma propriedade dentro da clase. Ele é uma referência de algo dentro do par de chaves.
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
    .then(data => data.text()) 
    .then(html => {
      document.querySelector('#app').innerHTML = html //inserindo o conteúdo html
    })
  }

}