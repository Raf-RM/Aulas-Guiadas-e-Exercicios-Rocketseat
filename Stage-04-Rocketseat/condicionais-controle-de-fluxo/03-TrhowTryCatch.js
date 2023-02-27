/*
  throw (lançar)

  try...catch (tentar...pegar)

  --> Tentar executar um bloco de código, se houver algum erro é disparado o erro e então ele é capturado na aplicação

*/

// Throw
function sayMyName(name = '') {
  if( name === '') {
    throw "Nome é obrigatório!" // dispara uma mensagem
    //throw new Error("Nome é obrigatório") // cria e dispara um objeto do tipo error
  }
  
  // caso haja um erro ele para a execução no trhow
  
  console.log('depois do erro')
}

//Try ... Catch
try {
  sayMyName()
} 
catch(e) {
  console.log(e)
}

console.log("após executar a função com erro dentro do try...catch")

// se tentarmos executar a função com erro fora do try...catch teremos um erro e a aplicação vai parar
sayMyName()

console.log("Apos a executar a função com erro fora do try...catch")