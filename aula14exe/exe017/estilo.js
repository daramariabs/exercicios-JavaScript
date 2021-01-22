function mostrarTabuada() {
    var numero = document.querySelector('input#num')
    var resultado = document.querySelector('select#tabuada')
    
    if(numero.value.length == 0){
        alert('Por favor, digite um número!')
    }else {
        var n = Number(numero.value)
        var cont = 1
        //limpando a area de visualizacao
        resultado.innerHTML = ' '
        while(cont <=10) {
            //criando um elemento de intem para o select
            let item = document.createElement('option')
            //escrevendo o option do select
            item.text = `${n} X ${cont} = ${n * cont}`
            item.value = `${cont}`
            //adicionando o intem no select para visualização
            resultado.appendChild(item)

            cont++
        }
    }
    
    
    
}