let lista = [10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824]
function ordenar (a, b){
    if (a < b) return -1;
    if (a > b) return 1;
    if(a === b) return 0;
}

console.log(lista.sort(ordenar))