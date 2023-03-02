
// Criando uma função construtora para criar um novo paciente
function Patient(name="nome",age="idade",weight="peso", height="altura") {
  this.name = name;
  this.age = age;
  this.weight = weight;
  this.height = height;
}

let optNumber = 0;
let patientsList = [];
let patient;

while(optNumber != 3) {

  optNumber = Number(prompt(`Digite o número de uma das opções:
  1. Incluir novo paciente
  2. Mostrar lista com nomes de pacientes
  3. Encerrar programa`))  
  
  switch(optNumber) {
    
    case 1:
      patient = new Patient()
      patient.name = prompt("Digite o nome do paciente:")
      patient.age = prompt("Digite a idade do paciente:")
      patient.weight = prompt("Digite o peso do paciente:")
      patient.height = prompt("Digite a altura do paciente:")

      patientsList.push(patient)

      console.log(patientsList)
      break;

    case 2:
      if(patientsList.length) {
        let patientsDataList = [];
        for(let patient of patientsList){
          patientsDataList.push(`Paciente ${patient.name} tem ${patient.age} anos de idade, pesa ${patient.weight} kg e mede ${patient.height} cm de altura. \n`)
        }
        alert(`Lista de pacientes:
${patientsDataList}`)
      }
      else {
        alert("Não há pacientes cadastrados.")
      }
      break;

    case 3:
      break;

    default:
      alert("Opção inválida")
  }
}