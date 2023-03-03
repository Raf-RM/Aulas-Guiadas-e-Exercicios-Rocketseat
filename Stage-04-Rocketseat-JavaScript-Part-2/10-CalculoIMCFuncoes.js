/*
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente x possui IMC de: Y"

  onde X é o nome do paciente e Y o IMC do paciente
  crie uma função para fazer o cálculo de IMC

  IMC = peso / altura²
*/

let patient1 = {
  name:"Rafael",
  age:31,
  weight:80,
  height:1.82,
}
let patient2 = {
  name:"Valéria",
  age:32,
  weight:68,
  height:1.65,
}
let patient3 = {
  name:"Jonas",
  age:33,
  weight:72,
  height:1.85,
}

const patientsList = [patient1, patient2, patient3]

function imc(weight, height) {
  result = weight / (height ** 2)
  return result
}

for(let patient of patientsList) {
  let imcPatient = imc(patient.weight, patient.height)
  alert(`Paciente ${patient.name} possui IMC de: ${imcPatient.toFixed(2)}`)
}
