// function scope

let subject = 'create video'

function createThink(subject){
  // Só vai existir neste escopo um novo "subject" se nós passarmos "subject" como um parâmetro. Assim ele cria o cria essa nova variável "subject" com valor study mas somente dentro deste escopo, não alterando variáveis denominadas "subjects" que existam fora do escopo da função
  subject = 'study'
  return subject
}

function createThinkNoParameter(){
  // se não passarmos "subject" como um parâmetro deste escopo, ele sobrescreve o "subject" definido por "let" fora do escopo da função
  subject = 'study'
  return subject
}


console.log(`Variável subject criada por let no inicio do código: ${subject}`)
console.log(`Retorno da função que tem como parâmetro subject: ${createThink(subject)}`)
console.log(`Variável subject criada por let no inicio do código depois de passar pela primeira função: ${subject}`)
console.log(`Retorno da função que NÃO tem como parâmetro subject: ${createThinkNoParameter()}`)
console.log(`Variável subject criada por let no inicio do código depois de passar pela segunda função (que não tem subject como parâmetro): ${subject}`)


