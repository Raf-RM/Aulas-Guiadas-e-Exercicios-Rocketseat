const AppError = require("../utils/AppError");

class UsersController {
  create(request, response) {
  // Pegando as informações que foram enviadas via JSON pelo body da requisição no Insomnia
  const { name, email, password } = request.body;

  // Utilizando o AppError para exibir erros
  if(!name){
    throw new AppError("Nome é obrigatório!");
  }

  response.status(201).json({ name, email, password });    
  };
};

module.exports = UsersController;