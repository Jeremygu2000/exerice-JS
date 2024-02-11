function infoAboutMe() {
    const nom = "Jeremy GU";
    const age = 35;
    const hobbies = ["Lecture", "Cuisine", "Musique, Voyage"];
    console.log(`Je m'appelle ${nom}. J'ai ${age} ans. Mes hobbies sont : ${hobbies.join(', ')}.`);
}
infoAboutMe();

infoAboutPerson("Jean", 52, "vert");
infoAboutPerson("David", 45, "bleu", 1.75);

function infoAboutPerson(personName, personAge, personFavoriteColor, pesonTaille,) {

    console.log(`Votre prénom est ${personName}. Vous avez ${personAge} ans. Votre couleur préférée est ${personFavoriteColor} et je mesure ${pesonTaille}.`);
}

infoAboutPerson("Clementine", 23, "orange", 1.60);

infoAboutPerson("Josh", 12, "jaune", 1.50);