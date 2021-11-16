//11 - Cadeia de quadrados de dígitos

function qtd_cadeias(n){

    var numeros89 = 0
    var anum89=[]
    var num1=0
    var anum1=[]

    //Esse for vai fazer com que a função rode verificando numero por numero
    for(var q =1; q<=n; q++){
    cadeia(q)
    
    //essa função analisa cada número individualmente
    //para fazer o teste se ele pertence a cadeia 89 ou cadeia 1
    function cadeia (x){

    var cont = 0 // variavel contador
    var numero = x // variavel de entrada
    var quad = [] // variavel que armazena o numero separado
    var num89=0
        while(numero != 89){ // o while roda ate o numero ser igual 89
            if(numero == 1){ // se o numero for 1 o loop para
                num1++
                anum1.push[q]
                break;
            }
            else{
                var total = 0  // armazena o total da soma  
                var numeros=[] // armazena o numero elevado na potencia 2
                quad = (numero.toString().split('')) // array que armazena o numero separado
                // funcao que pega todos os elementos e eleva a potencia 2 individualmente
                function potencia(elemento){ 
                elemento = Math.pow(elemento,2)
                numeros.push(elemento) // adiciona os elementos no array
                }
                quad.forEach(potencia) // o forEach exectuta a função acima para cada elemento
                //console.log(numeros)
                function somar(item) { // função para somar os itens
                total += item;
                }
                // o for each soma os nmeros que estão dentro do array
                numeros.forEach(somar); 
                numero = total
                //console.log(total);
                cont++ // a cada processo o contador é somado
                if(numero == 89 || total == 89){
                    numeros89++
                    anum89.push(q)
                    break;
                }
            }
        }
        return num89
   
    }
    
}

//console.log('Numéros pertencentes a cadeia 89 = ' + anum89)
//console.log(' ')
console.log('Foram encontrados ' + numeros89 + ' números pertencentes a cadeia 89')

}           

qtd_cadeias(10000000)






