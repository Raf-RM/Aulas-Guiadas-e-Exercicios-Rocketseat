const knex = require("../database/knex");

class NotesController {
  async create(request, response){
    const { title, description, tags, links } = request.body; //desestruturando e pegando informações do corpo requisição 
    const { user_id } = request.params; //desestruturando e pegando informação vindas como parâmetros no endereço da requisição

    // Cadastrando uma nota na tabela notes com o knex; Inserindo um objeto com "insert"
    const [note_id] = await knex("notes").insert({
      title,
      description,
      user_id
    });

    // A função ".map( )" vai percorrer o array de links e, para cada link dentro do array vai aplicar a arrow function retornando um objeto com o note_id e o url
    const linksInsert = links.map( link => {
      return {
        note_id,
        url: link
      }
    });
    await knex("links").insert(linksInsert); //Utilizando o knex para inserir na tabela links o objeto linksInsert

    //Semelhante ao de cima
    const tagsInsert = tags.map( name => {
      return {
        note_id,
        user_id,
        name
      }
    });
    await knex("tags").insert(tagsInsert);

    response.json();
  }
};

module.exports = NotesController;
