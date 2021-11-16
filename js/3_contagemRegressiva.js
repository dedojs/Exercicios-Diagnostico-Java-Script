//3- Dado um numero x construa um programa que retorn a contagem regressiva no formato do exemplo
// se x = 10 => 10...9...8...7.......0!!!

function count_down(x){
    var x = "0!!!"
    var t = ""
    for(i=10; i>0; i--){
        t += i + '...'
    }
    console.log(t+x)

}

count_down(10)