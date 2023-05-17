//Estruturando dados
export class GithubUser {
  static search(username) {
    const endpoint = `https://api.github.com/users/${username}`

    //Maneira mais detalhada
    // return fetch(endpoint).then(data => data.json()).then(data => ({
    //   login: data.login,
    //   name: data.name,
    //   public_repos: data.public_repos,
    //   followers: data.followers
    // })) 
    //({}) -> group operator vai retornar direto um objeto

    //Desestruturando e utilizando o shorthand
    return fetch(endpoint)
      .then(data => data.json())
      .then(({login, name, public_repos, followers}) => ({
        login,
        name,
        public_repos,
        followers
      }))
  }
}