import { GithubUser } from "./GithubUser.js"

// Classe que vai conter a lógica dos dados (como os dados serão estruturados)
export class Favorites {
  constructor(root){
    this.root = document.querySelector(root)
    this.load()
  }/*Pra essa aplicação o root será o #app*/


  // Função contendo os dados a serem carregados
  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || [] //O JSON é um tipo de dado q temos no JS que nos dá um monte de propriedades e funcionalidades para trabalharmos com esse tipo de dado (json). A função ".parse()" vai modificar um json para um obj que está dentro do json.
    //localStorage existe dentro da DOM. É uma API do Browser

    //Estrutura de array contendo objetos. Podemos adicionar funcionalidades de array a essa estrutura. 
  }

  //Função para salvar no localstorage
  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  async add(username) {
    try{

      const userExists = this.entries.find(entry => entry.login === username)

      if(userExists) {
        throw new Error('Usuário já cadastrado!')
      }

      const user = await GithubUser.search(username)

      if(user.login === undefined) {
        throw new Error("Usuário não encontrado!")
      }

      //Adicionando um novo elemento ao nosso array aplicando imutabilidade
      this.entries = [user, ...this.entries] //spread operator ( ... ). Criando um novo array com um novo elemento e "espalhando" os elementos que tinhamos anteriormente dentro deste novo array

      this.update()
      this.save()

    } catch(error) {
      alert(error.message)
    }
  }

  delete(user) {
    //Vamos pegar a lista (entraces) e comparar com o user que passamos, se for igual retiramos da lista entrances. A .filter() é uma funcionalidade de arrays, é uma Higher-order function (ex: map, filter, reduce,etc...). A .filter() vai rodar então uma função para cada entrada.
    const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

    this.entries = filteredEntries
    this.update()
    this.save()
  }
}


// Classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector("table tbody")

    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input')

      this.add(value)
    }
  }

  //Toda vez que um dado for add, removido, alterado essa função será executada completa
  update() {
    this.removeAllTr()
        
    this.entries.forEach(user =>{
      const row = this.createRow()
      //A constante row vai receber o "modelo" das nossas tr's

      //Aqui estamos modificando os elementos dentro da constante row para os elementos contidos nos dados que temos carregados 
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.login}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos 
      row.querySelector('.followers').textContent = user.followers

      //Criando o Botão "x" para remover a row
      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja deletar essa linha?') //Ideia do HTML que vai retornar um boolean (true para ok e false para cancel)
        if (isOk) {
          this.delete(user) //Essa funcionalidade estará dentro da classe responsável pelos dados (Favorites)
        }
      }

      //Recebe HTML criado pela DOM. Responsável por add as modificações das tr's 
      this.tbody.append(row)
    })

  }

  createRow() {
    //Criando elemento HTML direto pela DOM
    const tr = document.createElement('tr')

    const content = `
    <td class="user">
      <img src="https://github.com/diego3g.png" alt="Imagem de diego3g">
      <a href="https://github.com/diego3g" target="blank">
        <p>Diego Fernandes</p>
        <span>diego3g</span>
      </a>
    </td>
    <td class="repositories">
      48
    </td>
    <td class="followers">
      22503
    </td>
    <td>
      <button class="remove" >&times;</button>
    </td>
    `//Templet Literal

    tr.innerHTML = content

    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {tr.remove()}) 
    //Pega todas as linhas e retorna um node list (que é um array like). Por ser um array like nós podemos passar algumas funcionalidades para ele. A funcionalidade forEach() diz que, para cada elemento do nosso array(ou array like) ele executa uma função.    
  }

}