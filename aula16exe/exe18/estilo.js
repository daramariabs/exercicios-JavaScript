function adicionar(){
    let amostra = document.querySelector('select#valores')
    let num = document.querySelector('input#valor')
    let n = Number(num.value)
    let lista = []
    lista.push(n)
    

    for(let i = 0; i < lista.length; i++){
        let item = document.createElement('option')
        item.text = `Valor ${lista[i]} adicionado`

        amostra.appendChild(item)
    } 

    console.log(lista.length)
    
}



    
    
    



