/*
  Faça um programa que tenha um menu e apresente a seguinte mensagem:

  Olá usuário! Digite o número da opção desejada
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do progama
  
  ---
  O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:
  --> Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  --> Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver itens cadastrado mostrar a mensagem:
      "Não existem itens cadastrados."
  --> Caso o usuário digite 3, a aplicação deverá ser encerrada
*/

/*
  RESPONDENDO ÀS PERGUNTAS:
    1. Dados de entrada --> número da opção desejada (number), item para cadastro (strings)
    2. Variáveis --> número da opção desejada (number/string), item para cadastro (string), lista de itens cadastrados (array)
    3. Fluxo ideal --> cadastrar um item na lista, mostrar itens cadastrados, sair do programa
    4. Fluxo alternativo --> Se não houver itens cadastrado mostrar mensagem
    5. Tratamento de dados a serem realizados --> conversão de string para número Number("string"), inserir item na lista list.push(item), encerrar aplicação break
    6. Outputs esperados --> mensagem avisando caso não haja itens na lista e usuário tentar visualizar a lista, mostrar a lista caso o usuário queira visualizar e haja itens nela
*/

let optNumber;
let listItems = [];
let item;

while(optNumber !== 3) {

  optNumber = Number(prompt("Olá usuário! Digite o número da opção desejada:\n   1.Cadastrar um item na lista\n   2. Mostrar itens cadastrados\n   3. Sair do progama")); // adicionando quebra de linhas em uma string dentro do JS utilizando "\n" -- Também é possível utilizar template literals "` `" para poder fazer quebra de linhas sem "\n"

  if(optNumber === 1) {
    item = prompt("Cadastre um nove item: ")
    listItems.push(item)
  }
  else if(optNumber === 2){
    if (listItems.length){
      alert(`Lista de itens:\n ${listItems}`)
    }
    else{
      alert("Não existem itens cadastrados.")
    }
  }
  else{
    break;
  }
}