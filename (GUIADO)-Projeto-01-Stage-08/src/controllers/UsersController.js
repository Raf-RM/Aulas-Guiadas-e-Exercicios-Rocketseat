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
}

module.exports = UsersController;