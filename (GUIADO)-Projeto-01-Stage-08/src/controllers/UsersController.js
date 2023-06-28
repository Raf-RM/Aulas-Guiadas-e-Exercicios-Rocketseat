const { hash } = require("bcryptjs"); //importando função do bcryptjs que gera a criptografia
 
const AppError = require("../utils/AppError");

const sqliteConnection = require('../database/sqlite');

class UsersController {
  async create(request, response) {
    // Pegando as informações que foram enviadas via JSON pelo body da requisição no Insomnia
    const { name, email, password } = request.body;
  
    const database = await sqliteConnection();
    
    // verificando se um usuário já está cadastrado
    const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if(checkUserExist){
      throw new AppError('Este e-mail já está cadastrado.');
    }

    // Antes de cadastramos o usuário no banco 
    const hashedPassword = await hash(password, 8);

    // Inserindo dados do usuário
    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)",[name, email, hashedPassword]); 
    //run() vai executar algo, no caso uma inserção

    return response.status(201).json();

    }

  async update(request, response) {
    const { name, email } = request.body; // pegando as informações, através do corpo da requisição, que estão sendo modificadas
    const { id } = request.params; // pegando a id do usuário através do parâmetro passado no endereço da requisição 

    //criando conexão com o banco de dados
    const database = await sqliteConnection();

    //buscando pelo usuário
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

    //Se o usuário não existir ele lança um erro
    if (!user) {
      throw AppError("Usuário não encontrado.");
    }

    //Verificando se o novo email não possui cadastro
    const userWithUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);
    if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
      throw AppError("Email já em uso.")
    }

    // Se passar por todas as verificações
    user.name = name;
    user.email = email;

    //executando o update do nosso database (utilizando interpolação) 
    await database.run(`
      UPDATE users SET
      name = ?,
      email = ?,
      updated_at = ?
      WHERE id = ?`,
      [user.name, user.email, new Date(), id]
      );

      return response.status(200).json();
  }
}

module.exports = UsersController;