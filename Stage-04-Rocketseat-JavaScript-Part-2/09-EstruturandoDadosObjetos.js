/*
  Crie uma lista de pacientes

  cada paciente dentro da lista deverá conter
    - nome
    - idade
    - peso
    - altura
  
  Escreva uma lista contendo o nome dos pacientes
*/

/*
  PERGUNTAS
  1. Dados de entrada: para cada paciente (objeto), teremos nome, idade, peso, altura
  2. Variáveis: paciente, nome, idade, peso, altura, lista de pacientes
  3. Fluxo ideial: criar um paciente com as propriedades pedidas e mostrar uma lista com o nome dos pacientes
  4. Fluxo alternativo: mostrar mensagem de lista vazia caso não haja pacientes cadastrados
  5. Tratamento de dados: para cada novo paciente criar um novo objeto e então atribuir as propriedades
  6. Outputs esperados: Lista com o nome dos pacientes cadastrados ou mensagemn de lista vazia
*/

let patient1 = {
  nome:"Rafael",
  idade:31,
  peso:80,
  altura:1.82,
}
let patient2 = {
  nome:"Valéria",
  idade:32,
  peso:68,
  altura:1.65,
}
let patient3 = {
  nome:"Jonas",
  idade:33,
  peso:72,
  altura:1.85,
}

const patientsList = [patient1, patient2, patient3]
let patientsListNames = []

for(let patient of patientsList){
  patientsListNames.push(patient.nome)
}

console.log(patientsListNames)

