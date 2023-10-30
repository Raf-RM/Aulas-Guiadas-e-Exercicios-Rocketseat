const config = require("../../../knexfile"); // importando as configurações do knex
const knex = require("knex"); // importando o knex


// Criando a conexão (knex <-> BD)
const connection = knex(config.development);

// exportando a conexão para que ela possa ser utilizada em outros lugares da API
module.exports = connection;

