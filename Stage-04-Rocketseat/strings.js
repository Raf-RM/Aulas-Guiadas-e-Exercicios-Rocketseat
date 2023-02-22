/*
    string é uma cadeia de caracteres (caracteres seguidos)

    utilizando:
    aspas duplas ou simples ("", '')
     - somente textos
     - não permite multi linhas
    templete literals/template strings (``) 
     - permite utilizar multilinhas
     - permite emprego de expressões de linguagem (interpolação) ~
       ex.: 1+1 --> dentro do código fica ${1 + 1}

    quando usar um ou outro.. sempre que dentro do texto da string 
    houver alguma das opções nós utilizaremos fora a que não está
*/

console.log('Rafael')

console.log(`texto

multi

linhas
`)

console.log(`RESULTADO DE 1 + 1 --> ${1 + 1} `)
