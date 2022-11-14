let numero1 = prompt("Inserire un numero")
let numero2 = prompt("Inserire un numero")
let numero3 = prompt("Inserire un numero")
let numero4 = prompt("Inserire un numero")
let numero5 = prompt("Inserire un numero")
let numero6 = prompt("Inserire un numero")
let numero7 = prompt("Inserire un numero")
let numero8 = prompt("Inserire un numero")
let numero9 = prompt("Inserire un numero")
let numero10 = prompt("Inserire un numero")

let numeroinserito1 = parseInt(numero1)
let numeroinserito2 = parseInt(numero2)
let numeroinserito3 = parseInt(numero3)
let numeroinserito4 = parseInt(numero4)
let numeroinserito5 = parseInt(numero5)
let numeroinserito6 = parseInt(numero6)
let numeroinserito7 = parseInt(numero7)
let numeroinserito8 = parseInt(numero8)
let numeroinserito9 = parseInt(numero9)
let numeroinserito10 = parseInt(numero10)



if(isNaN(numeroinserito1&&numeroinserito2&&numeroinserito3&&numeroinserito4&&numeroinserito5&&numeroinserito6&&numeroinserito7&&numeroinserito8&&numeroinserito9&&numeroinserito10)){
    console.log("non hai inserito un numero in una delle richieste")
}else{
    console.log("La somma dei tuoi numeri è " + (numeroinserito1 + numeroinserito2 + numeroinserito3 + numeroinserito4 + numeroinserito5 + numeroinserito6 + numeroinserito7 + numeroinserito8 + numeroinserito9 + numeroinserito10))
    let maggiore = Math.max(numeroinserito1, numeroinserito2, numeroinserito3, numeroinserito4, numeroinserito5, numeroinserito6, numeroinserito7, numeroinserito8,numeroinserito9,numeroinserito10)
    console.log("Il numero più grande è " + maggiore)
    let minore = Math.min(numeroinserito1, numeroinserito2, numeroinserito3, numeroinserito4, numeroinserito5, numeroinserito6, numeroinserito7, numeroinserito8,numeroinserito9,numeroinserito10)
    console.log("Il numero più piccolo è " + minore)
    let media = ((numeroinserito1 + numeroinserito2 + numeroinserito3 + numeroinserito4 + numeroinserito5 + numeroinserito6 + numeroinserito7 + numeroinserito8 + numeroinserito9 + numeroinserito10)/10)
    console.log("La media dei tuoi numeri è "+ media)
}