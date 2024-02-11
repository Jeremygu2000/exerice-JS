// Déclaration de l'array des utilisateurs en ligne dans un groupe de discussion
const utilisateurs = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

// Vérifier le nombre d'utilisateurs en ligne et afficher le résultat en conséquence
if (utilisateurs.length === 0) {
    console.log("Personne n'est en ligne.");
} else if (utilisateurs.length === 1) {
    console.log(`${utilisateurs[0]} est en ligne.`);
} else if (utilisateurs.length === 2) {
    console.log(`${utilisateurs[0]} et ${utilisateurs[1]} sont en ligne.`);
} else {
    const nombreUtilisateursSupplementaires = utilisateurs.length - 2;
    console.log(`${utilisateurs[0]}, ${utilisateurs[1]} et ${nombreUtilisateursSupplementaires} de plus sont en ligne.`);
}

