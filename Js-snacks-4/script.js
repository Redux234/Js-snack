let nomeutenteinseito = prompt("Inserisci il tuo nome")
let nomeutente = nomeutenteinserito.toLocaleLowerCase();
let invitati = ["anna", "luca", "fderico", "riccardo", "marco", "emanuele"]

if(invitati.includes(nomeutenteinserito)){
    console.log("sei invitato")
}else{
    console.log("non sei invitato")
}
