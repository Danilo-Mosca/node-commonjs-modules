function objectReturn(firstName, lastName) {
    //ritorno l'oggetto
    return {
        firstName,
        lastName,
    }
}
// console.log("Oggetto: ", objectReturn("Nome", "Cognome"));

// Esporto la funzione dal file:
module.exports = { objectReturn };