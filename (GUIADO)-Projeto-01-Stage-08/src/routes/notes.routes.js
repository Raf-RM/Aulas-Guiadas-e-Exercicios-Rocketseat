const{ Router } = require("express");

// Importando Controller
const NotesController = require("../controllers/NotesController")

const notesRoutes = Router();

// Instanciando a classe NotesController
const notesController = new NotesController();

notesRoutes.post("/:user_id", notesController.create); // Por enquanto o user_id está sendo passado como parâmetro
notesRoutes.get("/:id", notesController.show); // Rota para mostrar nota específica
notesRoutes.delete("/:id", notesController.delete); // Rota para deletar uma nota específica
notesRoutes.get("/", notesController.index); // Rota para listar notas do usuário. Não passamos o "/:user_id" pq ele está sendo fornecido via query


// exportando o notesRoutes para ser utilizado fora deste arquivo
module.exports = notesRoutes;

 