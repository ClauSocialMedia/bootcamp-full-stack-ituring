

function maiorDe3(numero1, numero2, numero3) {
    if (numero1 > numero2 && numero1 > numero3) {
        console.log(numero1)
    } else if (numero2 > numero3) {
        console.log(numero2)
    } else {
        console.log(numero3)
    
    }
}

maiorDe3(1,2,3)
maiorDe3(3,2,1)
maiorDe3(-1000,200,30)