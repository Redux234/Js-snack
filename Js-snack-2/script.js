let parola1 = prompt("Inserire una parola")
let parola2 = prompt("Inserire un' altra parola")

if(parola1.length>parola2.length){
    console.log("la prima parola è più lunga")
}else if(parola1.length==parola2.length){
    console.log("le parole hanno la stessa lungezza")
}else {
    console.log("la prima parola è più corta")
}