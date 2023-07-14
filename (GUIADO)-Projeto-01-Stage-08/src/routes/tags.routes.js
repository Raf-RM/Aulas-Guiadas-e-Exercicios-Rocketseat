const{ Router } = require("express");

// Importando Controller
const TagsController = require("../controllers/TagsController")

const tagsRoutes = Router();

// Instanciando a classe TagsController
const tagsController = new TagsController();

tagsRoutes.get("/:user_id", tagsController.index); // Rota para listar tags das notas do usuário. 

// exportando o tagsRoutes para ser utilizado fora deste arquivo
module.exports = tagsRoutes;

 