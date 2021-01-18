function contar() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var resposta = document.querySelector('div#res')

    var ini = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(inicio.value == ""){
        resposta.innerHTML = 'Preencha todos os campos...'
        inicio.focus()
    }else if(fim.value == ""){
        resposta.innerHTML = 'Preencha todos os campos...'
        fim.focus()
    }else if(passo.value == ""){
        resposta.innerHTML = 'Preencha todos os campos...'
        passo.focus()
    }else if(Number(passo.value) == 0){
        alert('Passo invalido! Considerando passo 1')
        
        for(var i = ini; i <= f; i = i++){
            resposta.innerHTML += `${i}...`
        }
    }else {
        for(var i = ini; i <= f; i= i + p){
            resposta.innerHTML += `${i}...`
        }
    }
    

}