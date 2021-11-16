//14 Maior produto palindromo

function prodPali (n){
    let x = []
    var palis = []
    var limite = 0
    var ini = 0
    switch (n){
        /*case 1:
            ini = 1
            limite = 9
            break*/
        case 2:
            ini = 90
            limite = 99
            console.log(n)
            //console.log(palis[0])
            break
        case 3:
            ini = 900
            limite = 999
            console.log(n)
            //console.log(palis[0])
            break 
        case 4:
            ini = 9000
            limite = 9999
            console.log(n)
            //console.log(palis[0])
            break;
        default:
            console.log('Opção Inválida, digite 2, 3 ou 4')
            break    
                   
    }
    
    
        for(i=ini; i<=limite; i++){
            for(c=ini; c<=limite; c++){
                //console.log(c + '*' + i + ' = ' + c*i)
                x=(c*i)
                var rev = x.toString().split('').reverse().join('')
                rev = parseInt(rev)
                if(x == rev && x > 1000){
                    //console.log(p[])
                    palis.push(x) 
                }
            }
        }
    //console.log(n)
    console.log(palis[0])
}
//*******opções 1 a 4********
prodPali(5)

/*
var aa = 9009
var bc = aa.toString().split('').reverse().join('')
console.log(bc, typeof(bc))
bc = parseInt(bc)
console.log(bc, typeof(bc))
console.log(aa == bc)
var fd = 1
var fc = 1
res=[]

for(i=10; i<=99; i++){
    res.push(fd*i)
    fd
    fc++
    console.log('fd = '+ fd + " * " + i + ' = ' + fd*i)
}
var found = palis.find(element => element == 9009);
    //console.log("1" + x)
*/
