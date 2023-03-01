/*
  Solicitar o nome do aluno e as 3 notas do bimestre e calcular a média daquele aluno.

  Se o aluno passou no bimestre, dar os parabéns.
  Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.
  Em abos os casos, mostre uma mensagem com o nome do aluno e a nota.
*/

let name = prompt("Digite o nome do(a) aluno(a):")
let grade1 = Number(prompt("Digite a nota da primeira prova:"))
let grade2 = Number(prompt("Digite a nota da segunda prova:"))
let grade3 = Number(prompt("Digite a nota da terceira prova:"))

let average = (grade1 + grade2 + grade3) / 3
average = Number(average.toFixed(1)) // definindo o número de casas decimais

let result = average >= 6

if(result) {
  alert("Parabéns " + name + "! Você foi aprovado(a) com " + average + " .")
}
else {
  alert(name + ", você ficou com " + average + " de média, e ainda não foi aprovado(a). Se esforce na prova de recuperação, tenho certeza que você consegue!")
}

// if/elseif --> são palavras reservadas, apesar de se parecerem com funções
// DICAS DE BOAS PRÁTICAS --> evitar repetição de código, agrupando o código em um lugar só e então refletir no restante do código (ex.. average fora do if)