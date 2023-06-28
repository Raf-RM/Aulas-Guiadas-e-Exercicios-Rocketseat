const sqliteConnection = require('../../sqlite');

const createUsers = require('./createUsers');

async function migrationsRun() {
  const schemas = [
    createUsers
  ].join('');

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error));
  // Promise responsável por executar as migrations
};

module.exports = migrationsRun;