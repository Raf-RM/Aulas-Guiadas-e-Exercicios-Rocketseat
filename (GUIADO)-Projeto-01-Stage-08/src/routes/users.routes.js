const{ Router } = require("express");

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  // Pegando as informações que foram enviadas via JSON pelo body da requisição no Insomnia
  const { name, email, password } = request.body;

  response.json({ name, email, password })
});

// exportando o userRoutes para ser utilizado fora deste arquivo
module.exports = usersRoutes;

