const{ Router } = require("express");

// Importando Controller
const UsersController = require("../controllers/UsersController")

const usersRoutes = Router();

// Instanciando a classe UsersController
const usersController = new UsersController();

usersRoutes.post("/", usersController.create);

// exportando o userRoutes para ser utilizado fora deste arquivo
module.exports = usersRoutes;

