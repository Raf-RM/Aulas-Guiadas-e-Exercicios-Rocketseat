// importando o Express
const express = require("express"); 

// inicializando o Express
const app = express();

// implementando método GET
app.get("/message/:id/:user", (request, response) => {
  const {id, user} = request.params

  response.send(`ID da mensagem ${id}. Nome do usuário ${user}`)
  // estamos recuperando o parâmetro por meio do request.params.<NOME DO PARÂMETRO>
})

// Dizendo ao express qual é a porta (endereço) no qual ele vai atender as requisições
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is runing on Port ${PORT}`));

