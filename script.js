// Script simple pour le workshop
// Ici, nous allons juste afficher un message dans la console
// pour montrer qu'on peut modifier JS dans le repo

console.log("Bienvenue à l'atelier Git & GitHub !");

// Exemple : changer le titre de l'en-tête
document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector("header h1");
  // Remplacer [Nom] par votre nom
  header.textContent = "Portfolio de TonNom";
});