require("express-async-errors");

// Importando arquivo para conectar com o banco de dados
// const database = require("./database/sqlite")
const migrationsRun = require("./database/sqlite/migrations")

const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");

//importando bib cors
const cors = require("cors");

// importando o Express
const express = require("express"); 

// Importando as rotas
const routes = require("./routes")//criamos o arquivo index.js dentro da pasta routes pq, por padrão, quando não dizemos o nome do arquivo que queremos acessar dentro de uma pasta, ele vai carregar o arquivo com o nome index

// inicializando o Express
const app = express();

app.use(cors());

// Dizendo para nossa API/node qual é o tipo do conteúdo que vai vir no corpo da requisição. Neste caso JSON
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

// Utilizando as rotas
app.use(routes);

// database();
migrationsRun();

app.use((error, request, response, next) => {

  // Verificando se o erro se origina no lado do cliente
  // instanceof -> se a instancia do erro for a mesma do AppError
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.error(error); //caso seja preciso debugar

  // Se caso o erro não for um erro do cliente vamos emitir um erro padrão
  return response.status(500).json({
    status:"error",
    message: "internal server error"
  });

})

// Dizendo ao express qual é a porta (endereço) no qual ele vai atender as requisições
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is runing on Port ${PORT}`));

