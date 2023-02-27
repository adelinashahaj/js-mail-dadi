
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente),
//stampa un messaggio appropriato sull’esito del controllo.


let userDom = prompt("Dimmi la tua email");
const emailDom = ["myname@email.com", "pinco@pallino.com", "pippo@email.com"];
let answer = document.querySelector("#answer");
/*
answer.innerHTML = "l'indirizzo email non corrisponde a nessun utente.";

for(let i = 0; i < emailDom.length; i++) {
    if(userDom === emailDom[i]) {
        let trueDom = "L'indirizzo email è corretto.";
        answer.innerHTML = trueDom;
       

    }
}
*/


 let result = false;

 for (let i = 0; i < emailDom.length; i++) {
   if (userDom === emailDom[i]) {
     result = true;
   }
 }

 if (result == true) {
   answer.append("L'indirizzo email è corretto.");
 } else {
   answer.append(
     "l'indirizzo email non corrisponde a nessun utente."
  );
 }
 
