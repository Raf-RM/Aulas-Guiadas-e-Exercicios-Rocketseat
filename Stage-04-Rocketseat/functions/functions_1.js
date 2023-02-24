// Entendendo pq utilizamos, criamos e pq existem tantas funções em JS

// Ex.: Criando um aplicativo de frases motivacionais:

// Declaração da função - function declaration/statement
function createPhrases() {
  // Em funtions, "{}" cria um novo escopo 
  // ela agrupa um bloco de código que pode ser utilizado posteriormente
  // então, uma função serve para agrupar código e serve para reutilizar código
  console.log('Estudar é muito bom!')
  console.log('Paciência e persistência!')
  console.log('Revisão é a mãe do aprendizado!')
}
// A função é guardada em memória e pode ser utilizada quando chamamos pelo nome da função

// Executar/rodar/chamar/invocar a função - execute/run/call/invoke
createPhrases()
createPhrases()
createPhrases()

console.log('Fim do programa!')