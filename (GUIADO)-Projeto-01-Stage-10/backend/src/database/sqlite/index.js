const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const path = require("path");

async function sqliteConnection(){
  // Abrindo uma conexão
  const database = await sqlite.open({
    // Objeto com configurações da conexão

    filename: path.resolve(__dirname, "..", "database.db"), // diz onde nosso arquivo vai ficar salvo

    driver: sqlite3.Database //dizendo qual é o driver
  });

  return database
} 

module.exports = sqliteConnection;
