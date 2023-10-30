const { hash, compare } = require("bcryptjs"); //importando função do bcryptjs que gera a criptografia (hash) e a função para comparar senahs criptografadas (compare)
 
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
    const { name, email, password, old_password } = request.body; // pegando as informações, através do corpo da requisição, que estão sendo modificadas
    const user_id = request.user.id; // pegando a id do usuário de dentro do user contido na requisição 

    //criando conexão com o banco de dados
    const database = await sqliteConnection();

    //buscando pelo usuário
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);

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
    user.name = name ?? user.name;
    user.email = email ?? user.email;

    // Verificando a senha atual para poder modificar para nova sneha
    if (password && !old_password) {
      throw new AppError("Você precisa informar a senha atual para poder definir uma nova senha.")
    }
    //Verificando se a senha atual passada é a senha correta
    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) {
        throw new AppError("Senha incorreta.")
      }

      //Se a senha informada (old_password) corresponder a senha atual então
      user.password = await hash(password, 8)
    }


    //executando o update do nosso database (utilizando interpolação) 
    await database.run(`
      UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?`,
      [user.name, user.email, user.password, user_id]
      );

      return response.status(200).json();
  }
}

module.exports = UsersController;