const{ Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

// Importando Controller
const UsersController = require("../controllers/UsersController");

//Importando middleware de autenticação
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const upload = multer(uploadConfig.MULTER);

// Instanciando a classe UsersController
const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (request, response)=>{
  console.log(request.file.filename);
  response.json();
});

// exportando o userRoutes para ser utilizado fora deste arquivo
module.exports = usersRoutes;

