/* 1 conversor fahrenheit celsius
function far (f){
    var c = (f -32)/1.8
    var d = c.toFixed(1)
    console.log(parseFloat(d))
    return d
}

far(95)
*/

/*2 Diferença

function dif (x){
    if (x<10){
        console.log(10-x)
        return 10-x
    }

    else{
        console.log(x-10)
        return x-10
    }
}

dif(5)
*/

//3 contagem regressiva

/*function regressiva (x){
    let z = [];
    let d = '0!!!'
    
    for(let i = x; i>=1; i--){
        z += i + "..."

    }
    return(z+d)
        
              
}
    


regressiva(5)*/

//4 multiplos

/*function multi(x){
    let s=[]
    let soma = 0;
    for (var i = 1; i<x; i++){
        if(i % 3 == 0  || i % 5 == 0){
            s.push(i)   
            
        }
    }
    for (c = 0; c<s.length; c++){
        soma += s[c]
    }


    return soma
        
    }
  
multi(10)*/


//5 numeros pares de fibonacci

/*

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
*/


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

primo(100)
console.log('p=' + primos)

//console.log(pares)


/* 7 encontre o maior divisor primo de um dado numero*/
/*
var primos = [];
var divisores = []
let teste = []
let composto=[]
var c = 0;
var e = 0;
function maiordiv(z){
    for(var cc = 2; cc < z; cc++){
        if(z % cc == 0){
            divisores.push(cc)
        }
        
    }

    for (let i of divisores){
        console.log('i=' + i)
        e = e+1
        //console.log(e)
            for(let o in divisores){
                //console.log('o ' + o)
                console.log(' divisores ' + divisores[o])
            
                if( i % divisores[o] == 0){
                    c=c+1
                    
                    if(c > 4){
                        composto.push(i)
                    }
                    else{
                        primos.push(i)
                    }
        }
        
    }
    
    
}

return primos[primos.length-1]   
    
   
}
    

maiordiv(17956)

//13195
//console.log(divisores)
//console.log(divisores.length)
//console.log(teste.length)
console.log(primos)
console.log(primos[primos.length-1])
//console.log('c = ' + composto)
*/

//7 encontre o maior divisor primo de um dado numero*/
/*
var primos = [];
var divisores = []
let teste = []
let composto=[]
var c = 0;
var e = 0;
function maiordiv(z){
    for(var cc = 2; cc < z; cc++){
        if(z % cc == 0){
            divisores.push(cc)
        }
        
    }

    for (let i of divisores){
        console.log('i=' + i)
        e = e+1
        //console.log(e)
            for(let o in divisores){
                //console.log('o ' + o)
                console.log(' divisores ' + divisores[o])
            
                if( i % divisores[o] == 0){
                    c=c+1
                    
                    if(c > 2){
                        console.log(c)
                        composto.push(i)
                    }
                    else{
                        console.log(c)
                        primos.push(i)
                    }
        }
        
    }
    
    
}

return primos[primos.length-1]   
    
   
}
    

//maiordiv(17956)

//13195
//console.log(divisores)
//console.log(divisores.length)
//console.log(teste.length)
//console.log(primos)
//console.log(primos[primos.length-1])
//console.log('c = ' + composto)
*/
/*function primo(p){
    c=0;
    divs = []
    teste = []
    impares = []
    naoprimos=[]
    pares=[]
    np = 0;
    for(i=2; i<=p; i++){
        //console.log('p ' + p)
        //console.log('i ' + i)
        if(p%i == 0){
            divs.push(i)
        }
    }
    /*if(c == 1){
        primos.push(i)
    }
    console.log(primos)
    
    for(i in divs){
        for(x=divs[i]; x>2; x--){
            np == true
            //console.log(x)
            if(divs[i]%x==0){
                return np == false
            }
            else {
                teste.push(divs[i])
                
                //console.log(c)
                
            }
    }
    //if(c == 1){
       // teste.push(divs[i])
    
    }

    /*teste.map(p => {
        if(p[1]-p[2] == 0){
            naoprimos.push(p)
        }
    })*/

    /*impares = teste.filter(function(ele , pos){
        return teste.indexOf(ele) == pos;
    }) 



        


    

console.log('t ' +teste)
console.log('np' + naoprimos)
console.log('divs ' + divs)
console.log(pares)
console.log('impres' + impares)

}

primo(123)
*/

