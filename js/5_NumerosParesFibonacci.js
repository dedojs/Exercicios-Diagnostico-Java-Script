//5 numeros pares de fibonacci

var fib = [];
fib[0] = 0;
fib[1] = 1;

var soma = 0;
var pares = []

function fibo (x) {

    for (var i = 2; i < x; i++) {

        fib[i] = fib[i - 2] + fib[i - 1];

            if(fib[i] % 2 == 0 && fib[i]<x)
                pares.push(fib[i])
     
  //console.log(fib[i]);
}
for (var c=0; c<pares.length; c++){
    soma += pares[c]

}
    return soma
}

fibo(100)


console.log(soma) 
