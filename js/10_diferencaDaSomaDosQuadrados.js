// 10 DIFERENCA DAS SOMAS DOS QUADRADOS E QUADRADOS DA SOMA
// X = O QUADRADO DA SOMA É =(1+2+3+4)²
// Y = A SOMA DO QUADRADO É = (1² + 2² +3² +4²)
// Z = A DIFERENÇA É X-Y

function quadrados(n){
    var x = []
    var y = []
    var somaq =0
    var somay = 0
    

    for (var i = 1; i <= n; i++){
        
        x.push(Math.pow(i,2))
        y.push(i)        
    }
    //console.log('pot='+ x)
    //console.log('y =' + y)

    for (var i = 0; i<x.length; i++){
        somaq += x[i]
    }

    for( var i = 0; i<y.length; i++){
        somay += y[i]
    }
    var quadx = 0
    var quady = Math.pow(somay,2)
    var diferenca = quady - somaq
    
    console.log(" A soma dos quadrados é : " + somaq)
    console.log(' O quadrado da soma é ' + quady)
    console.log(' A diferença entre a soma dos quadrados é : ' + diferenca)
}

quadrados(10)