function contar() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var resposta = document.querySelector('div#res')

    

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        resposta.innerHTML ='Impossivel contar!'
    }else {
        resposta.innerHTML = 'Contando:<br>'

        var ini = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p == 0) {
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }

        if (ini < f){
            //contagem crescente
            for (var index= ini; index <= f; index += p){
                resposta.innerHTML += ` ${index} \u{26A1}`
            }      
        }else {
            //contagem descrescente
            for (var index = ini; index >= f; index -= p){
                resposta.innerHTML += ` ${index} \u{26A1}` 
            }
        }
        resposta.innerHTML += `\u{1f3c1} `
    }
        

}