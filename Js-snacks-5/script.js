/*
let numeroinserito1 = prompt("Inserire un numero")
let numeroinserito2 = prompt("Inserire un numero")
let numeroinserito3 = prompt("Inserire un numero")
let numeroinserito4 = prompt("Inserire un numero")
let numeroinserito5 = prompt("Inserire un numero")
let numeroinserito6 = prompt("Inserire un numero")

let numero1 = parseInt(numeroinserito1)
let numero2 = parseInt(numeroinserito2)
let numero3 = parseInt(numeroinserito3)
let numero4 = parseInt(numeroinserito4)
let numero5 = parseInt(numeroinserito5)
let numero6= parseInt(numeroinserito6)
*/



let arraynumeri = [];

for(let i=0; i<=6; i++){
    let numeroinserito = prompt("inserire un numero");
    let numeroarray = parseInt(numeroinserito);
    
    if(numeroarray%2==0){

    }else{
        arraynumeri.push(numeroarray);

    }
    
   
}

for(let i = 0; i<arraynumeri.length; i++){
    console.log(arraynumeri[i])

   
}




