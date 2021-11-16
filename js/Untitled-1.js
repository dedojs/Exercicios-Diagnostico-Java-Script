//projeto ração

var dog1, dog2;
var racao, dias;


function racao(qtd, x, y){
    racao = qtd;
    dog1 = x;
    dog2 = y;
    dias = qtd / (x+y);

    console.log(`A Racao durará aproximadamente: ${dias}`);
  


}

//racao(25,.5,.300);

var n = [4,5,6,7];
console.log(n);
var z = n.reverse();
console.log(z);

var b =-5

var a = 5

//console.log(a-b);

var hora = [7,8,9,10,11,12,13,14,15,16,17,18];
var temp = [19,21,22,23,24,24,25,26,25,23,21,20];
var h = [];
var t = [];


for(i=0; i<hora.length;i+=3){
    h.push(hora[i])
}

for(x=0; x<temp.length;x+=3){
    t.push(temp[x])
}


console.log(h);
console.log(t);

for(i=0; i<h.length;i++){

    console.log(`As ${h[i]} a temperatura era de ${t[i]}º`)
}

// CADASTRO DE VOOS DESAFIO UNIT

var numero = [];
var duracao = [];

while(numero !=0){
    numero = prompt("Qual número do Voo? ")
    duracao = prompt("Qual tempo de duração do voo? ")
    

}



