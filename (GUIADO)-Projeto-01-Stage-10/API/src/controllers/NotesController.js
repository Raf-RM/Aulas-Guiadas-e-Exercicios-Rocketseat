const knex = require("../database/knex");

class NotesController {
  async create(request, response){
    const { title, description, tags, links } = request.body; //desestruturando e pegando informações do corpo requisição 
    const user_id = request.user.id; 

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

    return response.json();
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

  //Funcionalidade para deletar uma nota específica
  async delete(request, response) {
    const { id } = request.params;

    await knex("notes").where({ id }). delete();

    return response.json();
  }

  //Funcionalidade para listar as notas que temos
  async index(request, response) {
    const { title, tags } = request.query; //pegando o user_id por uma query

    const user_id = request.user.id;

    let notes;

    if (tags) {
      const filterTags = tags.split(',').map(tag => tag.trim()); // Garantindo a conversão do elementos de tags fornecidos como texto em um elemento do tipo vetor (array) ".map(tag => tag.trim())" garante que, caso haja espaçamento ou tab dentro das strings separadas pela vírgula, elas sejam ignoradas retornando somente a tag.

      notes = await knex("tags")
      .select(["notes.id", "notes.title", "notes.user_id"])
      .where("notes.user_id", user_id)
      .whereLike("notes.title", `%${title}%`)
      .whereIn("name", filterTags)
      .innerJoin("notes", "notes.id", "tags.note_id")
      .orderBy("notes.title");    
    }
    else {
      notes = await knex("notes").where({ user_id }).whereLike("title", `%${title}%`).orderBy("title");
    }

    // Filtrando todas as tags do usuário especificado
    const userTags = await knex("tags").where({user_id}); 
    const notesWithTags = notes.map (note => {
      const noteTags = userTags.filter(tag => tag.note_id === note.id)

      return {
        ...note,
        tags: noteTags
      }
    })

    return response.json(notesWithTags);
  }
};

module.exports = NotesController;
