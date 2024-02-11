// ATTENTION IMPORTANT : Le prompt ne fonctionne pas dans VSCode, il faut utiliser la console de Node.js
// const prompt = require("prompt-sync")(); pour que la question s'affiche dans la console.

const prompt = require("prompt-sync")();
function calculerPourboire() {
    let montantFacture = parseFloat(prompt("Entrez le montant de la facture :"));
    let pourcentagePourboire;

    if (montantFacture < 50) {
        pourcentagePourboire = 0.2; // 20% de pourboire pour les factures de moins de 50 $
    } else if (montantFacture >= 50 && montantFacture <= 200) {
        pourcentagePourboire = 0.15; // 15% de pourboire pour les factures entre 50 $ et 200 $
    } else {
        pourcentagePourboire = 0.1; // 10% de pourboire pour les factures de plus de 200 $
    }

    let montantPourboire = montantFacture * pourcentagePourboire;
    let factureFinale = montantFacture + montantPourboire;

    console.log (`Montant du pourboire : ${montantPourboire}`);
    console.log (`Facture final : ${factureFinale}`);
}

calculerPourboire();
