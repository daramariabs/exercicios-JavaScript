function contar() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var resposta = document.querySelector('div#res')

    

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    }else {
        resposta.innerHTML = 'Contando:'

        var ini = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for (var index= ini; index <= f; index += p){
            resposta.innerHTML += `${index} \u{26A1}`
        }
    }
        

}