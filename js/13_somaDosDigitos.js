// 13 soma dos digitos

function somaAlg(x){
    // Delcaramos um contador e um array para guardar os numeros encontrados
    var cont = 0
    var nums =[]
    
    // fazemos um for, para rodarmos todos os numeros de 1 a 1000
    for(i=1; i<=1000; i++){
        //transformamos esses numeros em String para poder manipular individualmente com cada algarismo
        var nStr = i.toString()
        //criamos a variavel soma para somar os algarismos
        var soma = 0

        // esse for varre cada algarismo, somando-os
        for(c=0; c<nStr.length; c++){
            //retornamos os algarismos para o formato de numero para que possam ser somados e verificados
            soma += parseInt(nStr[c])
        }
        // caso a soma seja igual a numero solicitado, ele entra nesse if
        if (soma == x){
            //aqui o array nums captura esse numero. cada numero encontrado sera somado ao contador
            nums.push(i)
            cont ++
        }

    }
    console.log('Total de numeros encontrados ' + cont)
    console.log('Numeros encontrados: '+nums)
    return cont

}

somaAlg(24)