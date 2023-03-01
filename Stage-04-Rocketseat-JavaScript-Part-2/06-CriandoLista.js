/*
  Capture 10 itens para compor a lista de um supermercado.
  Após capturar os 10 items imprima-os separando por vírgula
*/

let list = [];

for(let cont = 0; cont < 10; cont++) {

list.push(prompt("Digite o item de número " + (cont + 1) + " da lsita de compra:"))
};

alert(list);