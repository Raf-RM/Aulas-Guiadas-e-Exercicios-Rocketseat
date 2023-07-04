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

  //Funcionalidade para mostrar uma nota específica
  async show(request, response){
    const { id } = request.params;

    const note = await knex("notes").where({ id }).first(); //Mostra somente a primeira nota onde com determinada "id"

    //Para mostrar as tags
    const tags = await knex("tags").where({ note_id: id }).orderBy("name"); //traz organizado por ordem alfabética devido a propriedade "orderBy("name")"

    //Para mostrar os links
    const links = await knex("links").where({ note_id: id }).orderBy("created_at"); //traz organizado por ordem de criação

    return response.json({
      ...note,
      tags,
      links
    });

  }
};

module.exports = NotesController;
