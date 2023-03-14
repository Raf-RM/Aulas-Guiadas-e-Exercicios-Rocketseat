export function imcCalculate(weight, height) {
  const imc = weight / ((height / 100) ** 2)
  return imc.toFixed(2)
}

export function notAnumber (value) {
  return isNaN(value) || value == ""
  //A função isNaN retorna um booleano dizendo se é ou não um número. Se for vazio ele retorna como falso
}

