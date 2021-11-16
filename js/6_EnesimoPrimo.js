//6 Enésimo Primo
/* calcule o enésimo numero primo para um dado numero n. 
por exemplo para n = 6, tem-se os 6 primeiros numeros primos (2,3,5,7,1,13) onde 13 é o sexto numero primo*/


var primos = [];
function primo(n){
   for(i = 2; i <=n ; i++){

        let numprimo = true

            for (let divisor = 2; divisor < i; divisor++){
                if (i % divisor == 0){
                    numprimo = false
                    break
                }
                }
        if (numprimo){
            primos.push(i)
        }
    
}
console.log("maior primo = " + primos.at(-1))
return(primos[n-1])
}

primo(200)
console.log('p=' + primos)