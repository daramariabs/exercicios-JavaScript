let num = [4,7,8,90,2,56,7,8,2,1]

/* for(let i=0; i < num.length; i++){
    console.log(`posição: ${i} valor: ${num[i]}`)
    console.log('---------------------------------')
} */

//for simplificado 
for(let i in num){
    console.log(`posição: ${i} valor: ${num[i]}`)
    console.log('---------------------------------') 
}