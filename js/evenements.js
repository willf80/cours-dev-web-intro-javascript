// S'abonner / écouter tous les clicks de notre page

// document.querySelector("html").addEventListener("click", function () {
//   alert("Click détecté !");
// });

const grandTitre = document.querySelector("h1");
grandTitre.addEventListener("mouseover", function () {
  // alert('La souris est sur le grand titre');
  grandTitre.style.color = "#0080FF";
});

grandTitre.addEventListener("mouseleave", function () {
  grandTitre.style.color = "#000000";
});

const btnPlus = document.querySelector("#btnPlus");
const btnMoins = document.querySelector("#btnMoins");
const resultat = document.querySelector("#resultat");

let compteur = 0;

btnPlus.addEventListener('click', function() {
  compteur++;
  resultat.textContent = compteur;
})

btnMoins.addEventListener('click', function() {
  // compteur = 0
  compteur--; // compteur = -1

  if(compteur < 0) { // -1 < 0
    compteur = 0; // compteur = 0
  }

  resultat.textContent = compteur;
})