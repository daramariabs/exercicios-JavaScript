 /* let nomes = ['paula', 'ana', 'carina']

console.log(`Conteudo do array = ${nomes}`)
//comprimento do array
console.log(`Tamanho do array = ${nomes.length}`) */

let num = [9,4,2,7,1,3]

/* console.log(`Conteudo do array = ${num}`)
//ordenando array em ordem crescente
console.log(`Array em ordem crescente ${num.sort()}`)

//criando um array vazio
let mescla = []
//adicionando valores ao array
mescla.push(nomes)
mescla.push(num)
console.log(`Novo array = ${mescla}`)  */

let pos = num.indexOf(2)
if(pos == -1){
    console.log("O valor não existe no array!")
}else{
    console.log(`O valor está na posição ${pos}`)
}

