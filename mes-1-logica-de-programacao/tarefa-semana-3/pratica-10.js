function votos(listaDeVotos) {
    let votosBrasil = 0;
    let votosArgentina = 0;
    let votosEspanha = 0;
    let votosPortugal = 0;

    for (voto of listaDeVotos) {
        if (voto == 1) {
            votosBrasil++;
        }
        if (voto == 4) {
            votosArgentina++;
        }
        if (voto == 3) {
            votosEspanha++;
        }
        if (voto == 2) {
            votosPortugal++;
        }

    }
}

listaPaises = ["Brasil", "Argentina", "Espanha", "Portugal"];
listaDeVotos = ["votosBrasil,votosArgentina,votosEspanha,votosPortugal"];

Resposta = ("Brasil é o preferido para ganhar a Copa do Mundo!")


Brasil = 1
Argentina = 4
Espanha = 3
Portugal = 2


console.log(`Brasil: ${listaDeVotos[1]} voto`)
console.log(`Argentina: ${listaDeVotos[4]} voto`)
console.log(`Espanha: ${listaDeVotos[3]} voto `)
console.log(`Portugal: ${listaDeVotos[2]} voto`)
console.log("Resposta:")


votos([1, 1, 1, 4, 4, 2, 3, 2])


