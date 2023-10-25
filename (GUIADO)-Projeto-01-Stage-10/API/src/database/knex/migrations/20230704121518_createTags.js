exports.up = knex => knex.schema.createTable("tags", table => {
  //dizendo quais são os campos desta tabela
  table.increments("id"); //campo incremental
  table.text("name").notNullable(); //campo contendo texto; não aceita nome nulo
  table.integer("user_id").references("id").inTable("users"); //campo contendo número; Faz referência ao "id" que existe dentro da tabela "users"
  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");//campo contendo número; Faz referência ao "id" que existe dentro da tabela "notes"; tag vinculada a um note; Se a nota for deletada, a tag a que ela está vinculada também será;
});

exports.down = knex => knex.schema.dropTable("tags");
