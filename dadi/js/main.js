
let pariDispariDom = prompt('Decidi se puntare su pari o dispari');
console.log(pariDispariDom);

let numeroUtenteDom = parseInt(prompt('Inserisci un numero tra 1 e 6'));
console.log(numeroUtenteDom);

let numeroComputerDom = Math.floor(Math.random() * 6) + 1;
console.log(numeroComputerDom);

let somma = numeroComputerDom + numeroUtenteDom;
console.log(somma);

let risultato;

if (somma % 2 == 0) {
    risultato = "p";
} else {
    risultato = "d";
}

if (risultato == pariDispariDom) {
    console.log("Vince l'utente");
} else {
    console.log('Vince il computer');
}
