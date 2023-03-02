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

let optNumber;
let listItems = [];
let item;

while(optNumber != 3) {

  optNumber = Number(prompt(`Olá usuário! Digite o número da opção desejada:
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do progama`)); 

  switch(optNumber) {
    case 1:
      item = prompt("Cadastre um nove item: ")
      listItems.push(item)
      break;
    case 2:
      if (listItems.length){
        alert(`Lista de itens:\n ${listItems}`)
      }
      else{
        alert("Não existem itens cadastrados.")
      }
      break;
    case 3:
      break;
    default:
      alert("Opção inválida. Tente novamente.");
  }
}