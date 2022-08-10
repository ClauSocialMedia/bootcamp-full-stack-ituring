function numeroAlleatorio() {
    const min = 0
    const max = 10000
    const numeroEntre0E1000 = Math.floor(Math.random() * (max - min + 1)) + min
    return numeroEntre0E1000
}
let numero = numeroAlleatorio()
console.log(numero)