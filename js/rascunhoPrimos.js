var primos = []
var divs = []
var nums =[]
let cont = 0
function primo (n){

    for(i = 2; i<=n; i++){
        nums.push(i)

        for (c = 2; c<=i; c++){
            divs.push(c)
            
            if (i%c == 0){
                cont ++
                //console.log(i)
            }
            }
        if (cont == 1){
            primos.push(i)
            //tios.push(c)

        }   
        }
        //console.log(primos)
        //console.log(tios)
        //console.log(cont)
        console.log('nums = ' + nums)
        console.log('divs='+ divs)
    }
    primo (6)



