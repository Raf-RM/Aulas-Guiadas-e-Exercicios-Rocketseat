const{ Router } = require("express");

// Importando Controller
const UsersController = require("../controllers/UsersController");

//Importando middleware de autenticação
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

// Instanciando a classe UsersController
const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);

// exportando o userRoutes para ser utilizado fora deste arquivo
module.exports = usersRoutes;

