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

    return response.status(201).json();

    }
}

module.exports = UsersController;