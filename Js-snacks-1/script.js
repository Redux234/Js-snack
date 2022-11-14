let prompt1 = prompt("Inserire un  numero");
let prompt2 = prompt("Inserire un altro numero");

let numero1 = parseInt(prompt1)
let numero2 = parseInt(prompt2)

if(isNaN(numero1 && numero2)){
    console.log("Non hai inserito un numero")
}else if(numero1<numero2){
    console.log("Il primo numero è minore del secondo")
}else if(numero1==numero2){
    console.log("I numeri sono uguali")
}else{
    console.log("Il primo numero è maggiore del secondo")
}





