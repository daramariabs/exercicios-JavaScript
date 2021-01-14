function verificar(){
    var ano_nascimento = Number(document.querySelector('input#nascimento').value)
    var res = document.querySelector('div#resultado')
    var ano = new Date()
    var ano_atual  = ano.getFullYear()

    //alert(`O ano de nascimento é ${ano_nascimento.value} e o ano atual é ${ano_atual}`) 

    if(ano_nascimento.length == 0 || ano_nascimento > ano_atual){
        alert('[ERRO] Verifique os dados novamente!')
    }else {
        //idade da pessoa
        var idade = ano_atual - ano_nascimento
        //sexo da pessoa 
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        //criando uma tag de imagem
        var img = document.createElement('img')
        //atribuindo um id=foto para a imagem
        img.setAttribute('id','foto')

        if(sexo[0].checked){
            genero = 'homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'boy_baby.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','boy_young.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','boy_adult.png')
            }else{
                //idoso
                img.setAttribute('src','boy_old.png')
            }

        }else if (sexo[1].checked){
            genero = 'mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','girl_baby.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','girl_young.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','girl_adult.png')
            }else{
                //idoso
                img.setAttribute('src','girl_old.png')
            }
        }

        //aqui vai o resultado com a idade e a foto
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
 
    }

}

