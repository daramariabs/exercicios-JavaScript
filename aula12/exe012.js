var atual = new Date()
var hora = atual.getHours()
var minutos = atual.getMinutes()

console.log(`Agora são exatamente ${hora}:${minutos} `)

if (hora > 1 && hora < 5){
    console.log('Boa madrugada')
    
}else if(hora < 12){
    console.log('Bom dia!')
    
}else if(hora <= 18){
    console.log('Boa tarde!')
    
}else {
    console.log('Boa noite!')
}