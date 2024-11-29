/* 3 - people.js
1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto. */



// 1. Importo la tua funzione da names.js
const names = require("./module/names");
// console.log(names);

// 2. Importo la tua funzione da hobbies.js
const hobby = require("./module/hobbies");
// console.log(hobby);

// 3. Crea una funzione che non ha parametri
function userInfo() {
    const user = names.objectReturn("Danilo", "Mosca");
    // console.log("Oggetto: ", user);
    const fullName = user.firstName + " " + user.lastName;
    // console.log(fullName);

    // Assegno alla costante hobbies SOLO I VALORI CONTENUTI NELLA CHIAVE "hobbies" della funzione hobby a cui passo i parametri.
    const hobbies = hobby.hobby("calcio", "pallavolo", "nuoto").hobbies;
    console.log(hobbies);
    object = {
        fullName: fullName,
        hobbies: hobbies,
    }

    /* Avrei potuto inserire anche la formula abbreviata: */
    // object = {
    //     fullName,
    //     hobbies,
    // }
    return object;
}

// Richiamo la funzione userInfo che mi costruira l'oggetto da restituire alla variabile result
const result = userInfo();
// Stampo l'oggetto result che conterrà solo le chiavi "fullName" e "hobbies"
console.log(result);


// 4. BONUS

console.log("------------ BONUS -------------");


function userInfoWithArgs() {
    const user = names.objectReturn(process.argv[2] ?? "Nome non inserito", process.argv[3] ?? "Cognome non inserito");
    // console.log("Oggetto: ", user);
    const fullName = user.firstName + " " + user.lastName;
    // console.log(fullName);

    // Assegno alla costante hobbies SOLO I VALORI CONTENUTI NELLA CHIAVE "hobbies" della funzione hobby a cui passo i parametri.
    //SE NON PASSO ARGOMENTI ASSEGNO I RISPETTIVI VALORI DI DEFAULT "hobby n non inserito":
    const hobbies = hobby.hobby(process.argv[4] ?? "hobby 1 non inserito", process.argv[5] ?? "hobby 2 non inserito", process.argv[6] ?? "hobby 3 non inserito").hobbies;

    object = {
        fullName: fullName,
        hobbies: hobbies,
    }

    /* Avrei potuto inserire anche la formula abbreviata: */
    // object = {
    //     fullName,
    //     hobbies,
    // }
    return object;
}
// Richiamo la funzione userInfo che mi costruira l'oggetto da restituire alla variabile resultArgS
const resultArgS = userInfoWithArgs();
// Stampo l'oggetto resultArgS che conterrà solo le chiavi "fullName" e "hobbies"
console.log(resultArgS);