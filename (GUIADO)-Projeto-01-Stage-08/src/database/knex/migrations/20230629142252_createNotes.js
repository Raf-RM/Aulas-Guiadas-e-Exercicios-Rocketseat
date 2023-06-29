exports.up = knex => knex.schema.createTable("notes", table => {
  //dizendo quais são os campos desta tabela
  table.increments("id"); //campo incremental
  table.text("title"); //campo contendo texto
  table.text("description"); //campo contendo texto
  table.integer("user_id").references("id").inTable("users"); //campo contendo número; Faz referência ao "id" que existe dentro da tabela "users"
  table.timestamp("created_at").default(knex.fn.now()); //campo de data e hora de criação; uma função do próprio knex irá gerar essa data e hora;
  table.timestamp("updated_at").default(knex.fn.now()); //campo de data e hora de atualização;
});

exports.down = knex => knex.schema.dropTable("notes");
