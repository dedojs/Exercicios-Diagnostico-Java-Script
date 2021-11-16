//2 - Diferença
// Dado um numero x, retorne a diferença entre x e 10 de forma que o resultado seja sempre um valor positivo.
// ex se x<10 faça 10-x // se x > 10 faça x-10

function diferenca(x){
    if(x>10){
        var r = x-10
    }
    if(10>x){
        var r = 10-x
    }
    console.log(r)
    return r
}

diferenca(15)