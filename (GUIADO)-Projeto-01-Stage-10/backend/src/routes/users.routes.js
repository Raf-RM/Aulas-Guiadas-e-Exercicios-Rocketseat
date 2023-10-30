const{ Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

// Importando Controller
const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");

//Importando middleware de autenticação
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const upload = multer(uploadConfig.MULTER);

// Instanciando a classe UsersController
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

// exportando o userRoutes para ser utilizado fora deste arquivo
module.exports = usersRoutes;

