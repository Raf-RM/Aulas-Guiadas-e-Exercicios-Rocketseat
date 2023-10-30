exports.up = knex => knex.schema.createTable("links", table => {
  //dizendo quais são os campos desta tabela
  table.increments("id"); //campo incremental
  table.text("url").notNullable(); //campo contendo texto; não aceita url nulo
  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");//campo contendo número; Faz referência ao "id" que existe dentro da tabela "notes"; tag vinculada a um note; Se a nota for deletada, a tag a que ela está vinculada também será;
  table.timestamp("created_at").default(knex.fn.now()); //campo de data e hora de criação; uma função do próprio knex irá gerar essa data e hora;
});

exports.down = knex => knex.schema.dropTable("links");
