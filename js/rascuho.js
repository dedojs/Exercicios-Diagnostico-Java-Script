
function qtd_cadeias(n){

    for(var q =1; q<=n; q++){

    //cadeia(q)
    var c1=0
    var c89=cadeia(q)
    var numeros89 = 0
    var a1=[]
    var total = 0   

    function cadeia (x){

    var cont = 0 // variavel contador
    var numero = x // variavel de entrada
    var quad = [] // variavel que armazena o numero separado
    var num1=0
    var num89=0
    var anum1=[]
    var anum89=[]
    
    
        while(numero != 89){ // o while roda ate o numero ser igual 89
            if(numero == 1){ // se o numero for 1 o loop para
                num1++
                anum1.push[q]
                break;
            }else{
                
                var total = 0  // armazena o total da soma  
                var numeros=[] // armazena o numero elevado na potencia 2

                quad = (numero.toString().split('')) // array que armazena o numero separado

                function potencia(elemento){ // funcao que pega todos os elementos e eleva a potencia 2 individualmente
                elemento = Math.pow(elemento,2)
                numeros.push(elemento) // adiciona os elementos no array
                }

                quad.forEach(potencia) // o forEach exectuta a função acima para cada elemento
                //console.log(numeros)

                function somar(item) { // função para somar os itens
                total += item;
                }
                numeros.forEach(somar); // o for each soma os nmeros que estão dentro do array
                numero = total

                //console.log(total);
                cont++ // a cada processo o contador é somado
                if(numero == 89 || total == 89){
                    num89++
                    anum89.push(q)
                    break;
                }
                
            }
                //console.log("cont= "+cont)
                

        }
        //console.log(num89)
        //console.log(q + 'Foram encontrados '+ num89+ ' cadeias que atigem o número 89')
        //console.log(q + 'Foram encontrados '+ num1+ ' cadeias que atigem o número 1')

        return num89

            
            
    }

    
        if(c89==1){
            conts ++
            numeros89++
            console.log('O numero ' + q + ' pertence a cadeia 89')
        }
        
    

}
 
 console.log('n89=' + numeros89)

}           
var conts = 0
console.log('c='+conts)
//cadeia(695)
qtd_cadeias(5)






