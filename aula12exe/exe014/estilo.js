function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var fundo = window.document.getElementById('fundo')
    var data = new Date()
    var horas = data.getHours() +":" + data.getMinutes() + ":" + data.getSeconds()

    msg.innerHTML = `Agora são ${horas}`

    if(horas >= 00 && horas < 12){
        //bom dia
        img.src = '/aula12exe/manha.png'
        fundo.style.background = '#886A08'
    }else if(horas <= 18){
        //boa tarde
        img.src = '/aula12exe/tarde.png'
        fundo.style.background = '#AEB404'
    }else {
        //boa noite
        img.src = '/aula12exe/noite.png'
        fundo.style.background = '#2E2E2E'
    }
}