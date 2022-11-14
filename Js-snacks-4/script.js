let nomeutenteinseito = prompt("Inserisci il tuo nome")
let nomeutente = nomeutenteinseito.toLocaleLowerCase();
let invitati = ["anna", "luca", "fderico", "riccardo", "marco", "emanuele"]
invitati[0]="anna"
invitati[1]="luca"
invitati[2]="federico"
invitati[3]="riccardo"
invitati[4]="marco"


    if(nomeutente=invitati[0]||invitati[1]||invitati[2]||invitati[3]||invitati[4]){
    console.log("Evviva sei invitato!!!")
    }else{
    console.log("Ci dispiace ma non sei invitato")
    }

