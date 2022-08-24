function calculoIMC(peso, altura) {
    // IMC = PESO / (ALTURA * ALTURA)    
  const imc = peso / (altura * altura)
  return imc
}

function classificaIMC(imc) {
  if (imc < 18.5) { 
      return 'Abaixo do peso' 
  }
  
  if (imc > 18.5 && imc < 25) {
      return 'Peso Normal'
  }
  
  if (imc > 25 && imc < 30) {
      return 'Sobrepeso'
  }
  
  if (imc > 30) {
      return 'Obesidade'
  }
}

const imcPessoa = calculoIMC(70, 1.58)

console.log(classificaIMC(imcPessoa))