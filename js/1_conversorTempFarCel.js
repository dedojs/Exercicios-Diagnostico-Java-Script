//1- Criar um conversor de Fahrenheit-Celsius
// formula = c = (f - 32) / 1.8
// obs retornar um float => exemplo 95º F = 35.0 C

function conversor(x){
    var c = (x-32)/1.8
    c = c.toFixed(1)
    console.log(c)
    return c
}

conversor(95)