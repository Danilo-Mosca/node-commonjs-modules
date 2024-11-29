/* 2 - hobbies.js
1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
2. Esporta la funzione dal file. */

function hobby(hobbyOne, hobbyTwo, hobbyThree) {

    return { hobbies: [hobbyOne, hobbyTwo, hobbyThree] };
}

// TEST
// console.log(hobby("calcio", "pallavolo", "tennis"));
// const varHobby = hobby("calcio", "pallavolo", "tennis");
// console.log(varHobby.hobbies[2]);

// 2. Esporto la funzione dal file
module.exports = {
    hobby,
};