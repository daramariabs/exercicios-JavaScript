//RECURSIVIDADE
function fatorial(n){
    if(n==1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}

console.log(`Retorno de uma função recursiva: ${fatorial(5)}`)