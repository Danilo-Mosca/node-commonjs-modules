/* 1 - names.js
1. Crea una funzione che accetta due parametri: firstName, lastName.La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
2. Esporta la funzione dal file. */

function objectReturn(firstName, lastName) {
    //ritorno l'oggetto
    return {
        firstName,
        lastName,
    }
}

// TEST
// console.log("Oggetto: ", objectReturn("Nome", "Cognome"));

// 2. Esporto la funzione dal file:
module.exports = { objectReturn };