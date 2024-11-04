// Déclaration d'un tableau d'objets 'users' contenant des informations sur plusieurs utilisateurs
const users = [
    { name: 'Jane', age: 12, nbPosts: 12 }, // Utilisateur avec 12 ans et 12 publications
    { name: 'John', age: 28, nbPosts: 0 }, // Utilisateur avec 28 ans et 0 publication
    { name: 'Derek', age: 18, nbPosts: 3 }, // Utilisateur avec 18 ans et 3 publications
    { name: 'Andrea', age: 35, nbPosts: 6 } // Utilisateur avec 35 ans et 6 publications
]; 

// Fonction pour afficher un message dans un élément HTML avec l'ID 'result'
function displayResult(message) {
    document.getElementById('result').innerText = message;
}

// Fonction pour trouver et afficher les utilisateurs dont le nom commence par une lettre donnée
function trouve_initial() {
    // Récupère la valeur de l'input avec l'ID 'initial'
    var input_initial = document.getElementById("initial").value;

    // Vérifie si une valeur a été saisie
    if (input_initial) {
        // Récupère la première lettre de l'input, la met en majuscule
        const initial = input_initial.charAt(0).toUpperCase();
        // Filtre les utilisateurs dont le nom commence par cette lettre
        const result = users.filter(user => user.name.charAt(0).toUpperCase() === initial);
        // Affiche le résultat sous forme de chaîne JSON
        displayResult(JSON.stringify(result));
    }
}

// Fonction pour trouver et afficher les utilisateurs majeurs (18 ans et plus)
function trouve_majeur() {
    let age_majeur = 18; // Définition de l'âge majeur
    // Filtre les utilisateurs dont l'âge est supérieur ou égal à 18
    const result = users.filter(user => user.age >= age_majeur);
    // Affiche le résultat sous forme de chaîne JSON
    displayResult(JSON.stringify(result));
    return result;
}

// Fonction pour ajouter une propriété 'selected' aux utilisateurs majeurs
function append_crit_majeurs() {
    // Crée un nouveau tableau d'utilisateurs avec une propriété 'selected'
    const updatedUsers = users.map(user => ({...user, selected: user.age >= 18 ? 'yes' : 'no'}));
    // Affiche le tableau mis à jour sous forme de chaîne JSON
    displayResult(JSON.stringify(updatedUsers));
    return updatedUsers;
}

// Fonction pour compter et afficher le nombre total de publications de tous les utilisateurs
function nbr_post() {
    let result = 0; // Initialisation du compteur de publications
    let users2= trouve_majeur();
    // Vérifie si 'users' est un tableaus non vide
    if (Array.isArray(users2) && users2.length > 0) {
        // Parcourt le tableau et additionne le nombre de publications de chaque utilisateur
        for (let i = 0; i < users2.length; i++) {
            result += users2[i].nbPosts;
        }   
        // Affiche le total des publications sous forme de chaîne
        displayResult(result.toString());
    }
}

// Ajout d'écouteurs d'événements pour différentes interactions utilisateur
document.getElementById('initial').addEventListener('input', trouve_initial); // Écouteur pour l'input de l'initial
document.getElementById('button_majeur').addEventListener("click", trouve_majeur); // Écouteur pour le bouton des majeurs
document.getElementById('button_selected').addEventListener("click", append_crit_majeurs); // Écouteur pour le bouton des critères majeurs
document.getElementById('button_nbr_post').addEventListener("click", nbr_post); // Écouteur pour le bouton du nombre de publications