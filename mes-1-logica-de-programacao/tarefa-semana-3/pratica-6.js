

function buscaTextoEmLista(lista, termoDeBusca) {
    let listaFiltrada = []
    for (let i = 0 ; i < lista.length; i ++)  {

        if (lista[i].includes(termoDeBusca)) {
            listaFiltrada[] = lista[i]
           

            listaFiltrada.push(serie)
        }
    }

    return listaFiltrada 
}


let serie= ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

console.log(buscaTextoEmLista(serie, ["Th"]))