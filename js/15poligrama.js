// 14 Maior produto palindromo

function anagrama (x,y){
    var l1 =0
    var l2 =0
    var palavra1 = x.split('').sort()
    console.log('palavra1 = ' + palavra1)
    var palavra2 = y.split('').sort()
    console.log('palavra2 = ' + palavra2)
    
    for (var i = 0; i < palavra1.length; ++i) {
        
    if (palavra1[i] == palavra2[i]){
        l1++    
        }
    else{
        l2++
    } 
   
}
if(l2>=1){
    console.log("As palvras não formam um Anagrama")
    return false
}
else{
    console.log("As palvras formam um Anagrama")
    return true
}
}
//anagrama('romaria', 'roraima')

//Função poligrama = Analisa se uma palavra é um poligrama, ou seja, palavra formada pela concatenação de 2 anagramas
function polig(w){
    var p = w.split('') // variavel onde dividimos a palavra digitada
    var r = p.reverse('')
    var raiz = [] // variavel onde retorna o resultado em caso de verdadeiro
    var nraiz='' // variavel que retorna o resultado em caso de falso
    var d = p.length / 2 // variavel que usamos para descobrir a quantidade de caracteres da palavra e dividir na metade
    var p1 =[] // variavel onde adicionaremos a primeira metade da palavra, formando a primeira palavra
    var p2 =[] // variavel onde adicionaremos a segunda metade da palavra, formando a segunda palavra
    
    var l1=0 // variavel que serve como contador de letras iguais
    var l2=0 // variavel que serve como contador de letrdas diferentes

    // aqui fazemos uma leitura na palavra, e pegamos a peimeira metade
    for(i=0; i<d; i++){
         p1.push(w[i]) 
         raiz.push(w[i])
         p1.sort() // ordemanos as letras da primeira palavra
    }
    for(i=0; i<d; i++){
        p2.push(r[i])
        p2.sort()
        //console.log(p2)
        //var p3 = p2.sort() // ordemanos as letras da segunda palavra
    }
    console.log(p.reverse() + ' - ' + r.reverse())
    console.log(p1 + ' - ' + p2) // imprimimos no console a primeira e segunda palavra para averiguação

    // fazemos a averiguação das palavras 1 e 2, letra por letra
    for (var i = 0; i < p1.length; ++i) {
        
        if (p1[i] == p2[i]){
            l1++ // caso as letras sejam iguais adicionamos +1 em l1    
            }
        else{
            l2++ // caso as letras sejam diferentes adicionamos +1 em l2
        } 
       
    }
    if(l2>=1){ // caso l2 seja positivo, significa que na verificação anterior tivemos 1 letra diferente, portanto resultado falso
        //console.log("As palvras não formam um Anagrama")
        console.log(nraiz)
        return nraiz
    }
    else{ // caso o l2 seja igual a 0, significa que todas as letras são iguais, o resultado é verdadeiro
        //console.log("As palvras formam um Anagrama")
        console.log("A raiz do poligrama é: " + raiz.join('') )
        return true
    }

    
}

polig('babbba')


