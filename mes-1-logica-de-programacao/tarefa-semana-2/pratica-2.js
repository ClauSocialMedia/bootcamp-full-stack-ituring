
function digaOla(nome) {
    console.log("Olá " + nome)
}


digaOla ("Joana")



function entrega(nomeDoProduto, enderecoDaEntrega){
console.log(`Fizemos a entrega do produto, ${nomeDoProduto}! no endereço ${enderecoDaEntrega}!, com sucesso!`)
}
function recebedor(pessoaQuePegou) {
console.log(`O seu produto foi recebido por : ${pessoaQuePegou}
Esperamos que esteja contente com seu produto, Caso contrário , fale conosco em até 7 dias para que possamos ajudar`)
}
function agradecimento(nomeDaPessoaQueEnviouEmail) {

console.log(`Atenciosamente,
${nomeDaPessoaQueEnviouEmail}`)
}
let nomeDoProduto = "Tênis"
let enderecoDaEntrega = "Rua Curitiba"
let pessoaQuePegou = "João"
let nomeDaPessoaQueEnviouEmail = "Nike"

entrega (nomeDoProduto, enderecoDaEntrega)
recebedor (pessoaQuePegou)
agradecimento (nomeDaPessoaQueEnviouEmail)