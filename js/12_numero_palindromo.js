//12 Numero palindromo
let cont=0
let lychrel = 0
let nums =[]
var alychrel = []
function pali(n){
    nums.push(n)
    var palinds = []
    //console.log(n)
    let x = n.toString().split('').reverse().join('')
    x = parseInt(x)
    //console.log(x)
    let soma = n + x
    //console.log("a soma é = " + soma)
    let somaRev = soma.toString().split('').reverse().join('')
    somaRev = parseInt(somaRev)
    //console.log("o reverso é = " + somaRev)
    //console.log("----")

    if(soma === somaRev){
        cont ++
        if (cont > 49){
            lychrel ++
            alychrel.push(n)
            console.log("Esse é um número de Lychrel")
            //console.log("Foram encontrados " + lychrel + ' = ' + nums[0])
            
        }

        else if(lychrel==0){
        palinds.push(n)    
        //console.log("Acertou miserave")
        console.log("A soma de " + n + " com o seu inverso " + x +" é: " + somaRev)
        console.log('Esse número é um palíndromo')
        console.log("Foram necessárias: " + cont + " repetições") 
        }
        
    }
    else if(soma != somaRev){
        cont ++
        pali(somaRev)
    }

    else if (cont > 50){
        lychrel++
        
    }
    //console.log(palinds)
    //console.log(alychrel)
    
}

pali(196)



 
function flychrel (z){
    for( i = z; i>10; i--){
        pali(i)
    }
    //console.log(alychrel)

}

//flychrel(97)}
  


