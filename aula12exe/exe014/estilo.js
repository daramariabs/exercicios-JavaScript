function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var fundo = window.document.getElementById('fundo')
    var data = new Date()
    var horas = data.getHours()

    if(horas >= 0 && horas < 12){
        //bom dia
        msg.innerHTML = '<strong>Bom dia!</strong><br>'
        img.src = 'manha.png'
        fundo.style.background = '#886A08'
    }else if(horas <= 18){
        //boa tarde
        msg.innerHTML = '<strong>Boa tarde!</strong><br>'
        img.src = 'tarde.png'
        fundo.style.background = '#AEB404'
    }else {
        //boa noite
        msg.innerHTML = '<strong>Bom noite!</strong><br>'
        img.src = 'noite.png'
        fundo.style.background = '#2E2E2E'
    }

    msg.innerHTML += `Agora são ${data.getHours() +":" + data.getMinutes() + ":" + data.getSeconds()}`
}