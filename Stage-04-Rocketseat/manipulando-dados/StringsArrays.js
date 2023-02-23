// Manipulando strings e arrays

// Separe um texto que contém espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque "_".

let text = 'Separe um texto que contém espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque underscore (_).'

let myArray = text.split(" ") // transformando de string para array método splite()
console.log(myArray)

let textWithUnderscore = myArray.join("_") // transformando de array para string método join()
console.log(textWithUnderscore)