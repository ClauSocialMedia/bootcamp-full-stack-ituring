function meuSaldo(transacoes) {
    let totalDepositos = 0;
     let totalRetiradas = 0;
  let valorDepositado = 0;
  let valorRetirado = 0;
  
  transacoes.forEach(function (valor) {
      if (valor > 0) {
        valorDepositado = valorDepositado + valor
      totalDepositos++
    } else {
        valorRetirado = valorRetirado + valor
      totalRetiradas++
    }
  })
  for(item of listaDepositosRetiradas) {
    if (item < 0) {
      SomaRetiradas += item;
      quantRetiradas += 1;
    }
    else {
      SomaDepositos += item;
      quantDepositos += 1
    }
  
  const saldo = valorDepositado + valorRetirado
  
  const tipoSaldo = saldo < 0 ? 'negativo' : 'positivo'
  
  console.log(`Total de depositos: ${totalDepositos}`)
  console.log(`Total de retiradas: ${totalRetiradas}`)
  console.log(`O valor total depositado foi de: R$ ${valorDepositado}`)
  console.log(`O valor total retirado foi de: R$ ${valorRetirado}`)
  console.log(`O saldo da sua conta foi ${tipoSaldo} no valor de R$ ${saldo}`)
  console.log(`O total de depositos é ${SomaRetiradas}`)
  console.log(`O total de depositos é ${SomaDepositos}`)
}
}

meuSaldo([100, -20, -30, 10, -7, -21, -5])
