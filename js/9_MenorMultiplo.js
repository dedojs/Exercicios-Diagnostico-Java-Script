// 9 - o menor numero divisivel por todos os numeros de 1 a 10 é 2520
// crie um algoritmo capaz de calcular o menor numero divisivel por todos os numeros de 1 a dado numero.


function menor(n){
    var valor = 0
    var cont = 0
    do{
        cont = 0
        valor ++
        for(var i = 1; i<=n; i++){
            if(valor % i == 0){
                cont ++
            }
    }
        }while (cont != n);
        console.log("o valor e: " + valor)
        console.log("cont " + cont)
}

menor(10)