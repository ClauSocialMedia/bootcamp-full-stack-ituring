
function gerarNumero() {
    min = 10
    max = 20
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numero = gerarNumero()
console.log(numero)
