// importando o Express
const express = require("express"); 

// Importando as rotas
const routes = require("./routes")//criamos o arquivo index.js dentro da pasta routes pq, por padrão, quando não dizemos o nome do arquivo que queremos acessar dentro de uma pasta, ele vai carregar o arquivo com o nome index

// inicializando o Express
const app = express();

// Dizendo para nossa API/node qual é o tipo do conteúdo que vai vir no corpo da requisição. Neste caso JSON
app.use(express.json());

// Utilizando as rotas
app.use(routes);

// Dizendo ao express qual é a porta (endereço) no qual ele vai atender as requisições
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is runing on Port ${PORT}`));

