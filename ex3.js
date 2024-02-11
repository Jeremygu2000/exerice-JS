const prompt=require("prompt-sync")();
   
let nombreUser = prompt("Entrez un nombre :");

nombreUser = parseFloat(nombreUser);

if (isNaN(nombreUser)) {
    console.log("Ce n'est pas un nombre valide.");
} else {
    if (nombreUser % 2 === 0) {
        console.log(`${nombreUser} est un nombre pair.`);
    } else {
        console.log(`${nombreUser} est un nombre impair.`);
    }
}