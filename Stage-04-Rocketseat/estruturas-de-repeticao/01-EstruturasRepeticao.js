/*
  Estrutura de repetição

    * for() --> recebe três parametros importantes
      - inicialização de uma variável
      - condição de continuação do loop
      - expressão final que irá ocorrer assim que terminar o loop

    * while() --> recebe uma condição para continuar, enquanto a condição for satisfeita ele continua o loop (utilizado quando não sabemos o momento da parada da repetição) 

    * for...of --> declaração que cria um loop através de uma variável que tenhamos

    * for...in --> cria um loop encima de um objeto pegando as propriedades do objeto
*/

// FOR
console.log ("Exemplo de uso do for")
for(let i = 1; i <= 10; i++) {
  // dentro do bloco do for podemos utilizar 2 tipos de controle: 
  // break e continue

  if(i === 6){
    break;
    // para a execução do loop
  }

  if(i === 3){
    continue;
    // vai ignorar o resto deste loop (pula para o próximo loop) (neste exemplo não será impresso o i = 3)
  }

  console.log(i)
}

// WHILE
console.log ("Exemplo de uso do while")
let j = 10000;
while(j > 10){
  j /= 25;
  console.log(j)
}

// FOR...OF
console.log ("Exemplo de uso do for...of")
let name = "Rafael"
let names = ['João', 'Diogo', 'Valéria']

for(let char of name){
  // a cada loop pega um caracter da variável name e imprime na tela
  console.log(char)
}

for(let name of names){
  // a cada loop pega um item name (criada neste novo escopo for) do array names e imprime na tela
  console.log(name)
}
console.log(name)

// FOR...IN
console.log ("Exemplo de uso do for...in")
let person = {
  name: 'Joel',
  age: 49,
  weight: 76,
  height: 1.8,
  hair: 'gray',
  eyesColor: 'Brown',
}

for(let property in person) {
  console.log(property +":" + " " + person[property])
}
