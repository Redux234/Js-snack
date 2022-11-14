
let numero = prompt("inserire un numero da 1 a 10")
let numeroinserito = parseInt(numero)

let numeropc = Math.random()*10
let numerorandom = parseInt(numeropc)
console.log(numerorandom)

if(numeroinserito==numerorandom){
    console.log("hai vinto")
}else{
    console.log("hai perso")
}