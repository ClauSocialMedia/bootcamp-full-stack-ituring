function meuSaldo(transacoes) {
    let saldo = 0;
  
  transacoes.forEach(function (valor) {
      saldo = saldo + valor
  })
  
  const tipoSaldo = saldo < 0 ? 'negativo' : 'positivo'
  
  console.log(`O saldo da sua conta foi ${tipoSaldo} no valor de R$ ${saldo}`)
}

meuSaldo([100, -20, -30, 10, -7, -21, -5])