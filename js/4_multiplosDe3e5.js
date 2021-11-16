//4 - Multiplos de 3 e 5
// Construa um algoritmo que encontre a soma de todos os numeros naturais multiplos de 3 ou 5 menores que um dado numero.
// exemplo = quando listamos todos os numeros naturais menores que 10 que são multiplos de 3 e 5, temos 3,5,6 e 9
// a soma desses numeros é = 23

function soma_multiplos(x){
    var multiplos = []
    var soma = 0
    for(var i = 1; i<x; i++){
        if(i % 3 == 0 || i % 5 == 0){
            multiplos.push(i)
        }
    }
    for(var i = 0; i< multiplos.length; i++){
        soma = soma +  multiplos[i]
    }
    console.log(multiplos)
    console.log(soma)
    return soma
}

soma_multiplos(10)