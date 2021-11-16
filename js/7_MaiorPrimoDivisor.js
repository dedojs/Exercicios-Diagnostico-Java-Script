//Função que calcula o maior divisor primo do numero

var primos = [];
var divs = []
var primosdivs=[]

function primo(n){
   //divs = descobrimos os numeros divisiveis por n
    for(c=0; c<=n; c++){
       if(n%c == 0){
           divs.push(c)
       }
   } 

   // num primo descobrimos os numeros primos de 2 a n
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

for (i in primos){
    for (c in divs){
        if(primos[i] == divs[c]){
            primosdivs.push(divs[c])
        }
    }

}


console.log("maior primo = " + primosdivs[primosdivs.length-1])
console.log('maior divisor =' + divs[divs.length-2])
}   

//13195
primo(13195)
//console.log('p=' + primos)
//console.log('divs=' + divs)
console.log('primosdivs= ' + primosdivs)
//console.log(primos.length)