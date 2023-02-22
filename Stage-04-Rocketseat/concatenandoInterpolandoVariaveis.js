let name, breed, color, castrated;
name = "Belinha"
breed = "vira-lata"
color = "caramelo"
castrated = true

//escrita do texto com as variáveis 

//concatenação de valores
console.log("Nome: " + name + ", raça: " + breed + ", cor: " + color + ", castrado: "+ castrated +".") 

//(no VScode, caso a linha esteja muito grande podemos utilizar ctrl + z e ele quebra a linha para nós)

//interpolando valores com template literals (template string)
console.log(`Nome --> ${name}
Raça --> ${breed}
Cor --> ${color}
Castrado --> ${castrated}`)