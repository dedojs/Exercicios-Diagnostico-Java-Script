// Questão 8 = Caixa de Supermercado

//var dados = input.split('\n');


function caixa (numes){
var validos = []
var c = 0
var soma = 0;

    for(i in numes){
        validos.push(numes[i])

        // a cada vez que o if localizar o zero, ele vai excluir o zero e o numero anterior do array
        if(numes[i]==0){
            c ++
            validos.pop(numes[i])
            validos.pop(numes[i])
        }
    }
    console.log('numeros validos ' + validos)
    // for para somar os itens do array
    for(s=0; s<validos.length; s++){
        soma += validos[s]
       
    }

    console.log("A soma dos números válidos é: "+ soma)
    
}

caixa([1,3,2,5,7,9,0,0,10,35,0,5,4,0,0,0,7,0,0,6,7,9,45,0,36,0,12,14,15,0,0,125])

/*
function deleta_ultima_entrada(values, index) {
for (var i = index - 1; i >= 0; i--)
if (values[i] != 0) {
values[i] = 0
return
}
}

function soma_valores(values) {
var sum = 0
for (var i = 0; i < values.length; i++)
sum += values[i]
return sum
}

function caixa(values) {
for (var i = 0; i < values.length; i++)
if (values[i] == 0)
deleta_ultima_entrada(values, i)

return soma_valores(values)
}

console.log(caixa([1, 3, 5, 4, 0, 0, 7, 0, 0, 6])) 
*/

