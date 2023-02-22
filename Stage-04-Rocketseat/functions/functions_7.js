// Callback function

function sayMyName(name){
  console.log(name)
}

sayMyName("Rafael")
sayMyName(13)

// arrow function sendo passada como valor (name) para função callback sayMyName (vamos ver que ela retorna a function)
sayMyName(
  () => {
    console.log('Arrow function sendo executada dentro de uma callback')
  }
)

// chamando de volta outra função com a callback function
function sayMyName2(name){
  console.log('Antes de executar a callbackfunction')
  
  name()

  console.log('Depois de executar a callbackfunction')
}

sayMyName2(
  () => {
    console.log('Arrow function sendo executada  dentro de uma callback')
  }
)