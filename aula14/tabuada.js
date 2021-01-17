function tabuada() {
    var soma = document.querySelector('div#soma')
    var sub = document.querySelector('div#subtracao')
    var mult = document.querySelector('div#multiplicacao')
    var div = document.querySelector('div#divisao')
    
    var numero = Number(document.querySelector('input#num').value)
    
    
    for(var c = 1; c <=10; c++){
        soma.innerHTML += `${numero} + ${c} = ${c+numero} <br>`
        sub.innerHTML += `${numero} - ${c} = ${Math.abs(c-numero)} <br>`
        mult.innerHTML += `${numero} x ${c} = ${c*numero} <br>`
        var r = numero/c
        div.innerHTML += `${numero} / ${c} = ${r.toFixed(2)} <br>`

        soma.style.background = 'rgba(128, 128, 128, 0.301)'
        sub.style.background = 'rgba(128, 128, 128, 0.301)'
        mult.style.background = 'rgba(128, 128, 128, 0.301)'
        div.style.background = 'rgba(128, 128, 128, 0.301)'
    }
    
}