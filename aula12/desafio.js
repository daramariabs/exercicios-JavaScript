/*Mostra a data atual do sistema e a hora */
var atual = new Date()
var hora = atual.getHours() + ':' + atual.getMinutes() + ':' + atual.getSeconds()
var mes = atual.getMonth()

switch(mes){
    case 0:
        mes = 'Janeiro'
        break
    case 1:
        mes = 'Feveireiro'
        break
    case 2:
        mes = 'Março'
        break
    case 3:
        mes = 'Abril'
        break
    case 4:
        mes = 'Maio'
        break
    case 5:
        mes = 'Junho'
        break
    case 6:
        mes = 'Julho'
        break
    case 7:
        mes = 'Agosto'
        break
    case 8:
        mes = 'Setembro'
        break
    case 9:
        mes = 'Outubro'
        break
    case 10:
        mes = 'Novembro'
        break
    case 11:
        mes = 'Dezembro'
        break
    default:
        mes = 'Invalido'
        break
}

console.log(`Horario atual do sistema - ${hora}`)
console.log(`Data atual do sistema - ${mes + ' de ' + atual.getFullYear()}`)
