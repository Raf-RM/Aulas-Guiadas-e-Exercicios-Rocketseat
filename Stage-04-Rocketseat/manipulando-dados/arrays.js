// Manipulando Arrays

// Criando array com construtor

let myArray = new Array('a', 'b', 'c') // cria um array onde cada parâmetro fornecido na função Array se torna um elemento do array myArray
console.log(myArray)

let myArray2 = new Array(10) // Cria um array com 10 posições vazias
console.log(myArray2) 

// Contando elementos de um array
console.log(myArray.length)

// Transformando uma cadeia de caracteres em um array
let word = "transformação"
console.log(Array.from(word)) // o pŕoprio Array ja é um objeto disponível para nós ao qual podemos atrelar o método from() que tem como argumento uma string


let techs = ["html", "css", "js"]
console.log(techs)

// Adicionar um item no final
techs.push("nodejs")
console.log(techs)

// Adicionando item no início
techs.unshift("sql")
console.log(techs)

// Remover item do final
techs.pop()
console.log(techs)

//Remover item do começo
techs.shift()
console.log(techs)

// Pegar somente alguns elementos do Array (retorna da função mas não modifica o array)
console.log(techs.slice(1,3)) // contagem a partir do zero, final + 1

// Remover 1 ou mais itens em qualquer posição do array
techs.splice(1,2) // recebe dois argumento, o primeiro é o index a partir do qual vc quer começar a tirar e o segundo argumento é quantos itens você quer retirar contando com o primeiro (item do index)
console.log(techs)

// Encontrar a posição de um elemento no array
techs = [ "sql", "html", "css", "js", "nodejs" ]
console.log(techs)
let index = techs.indexOf("js")
console.log(index)
techs.splice(index,1)
console.log(techs)