// Esse arquivo vai tem como objetivo reunir todas as rotas e grupos de rotas da nossa aplicação que estarão separadas por arquivos.

const { Router } = require("express");

const usersRoutes = require("./users.routes");
const notesRoutes = require("./notes.routes");

const routes = Router();

routes.use("/users", usersRoutes);// Toda vez que alguém for acessar o "/users" será direcionado para o "userRoutes" que é o grupo de rotas do usuário
routes.use("/notes", notesRoutes);

module.exports = routes;

