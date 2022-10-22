// Les boucles : for, while, do..while

// Une boucle est composée de 3 parties 
// la variable de sortie, la condition (if), répétition

// excution du programme ...
for(let i = 0; i < 3; i++) {
  // boucle ..
  alert('Itération i = ' + i);
}
// sortie de boucle...
// continuer excution du programme...
alert('sortie de boucle');

let annee = 2020;
while(annee <= 2022) {
  alert('boucle while; année = ' + annee);

  annee = annee + 1; // annee += 1; => annee++;
}

let age = 30;
do {
  alert('boucle do..while; age = ' + age);
  age += 1;
} while(age < 19);

//=============================================================
// Ecrire un programme qui affiche les nombres paires de 0 à 50
//=============================================================

let resultat = '';
for(let nombre = 0; nombre <= 50; nombre++) {
  if (nombre % 2 === 0) {
    resultat = resultat + ' ' + nombre;
    //resultat = ' ' + nombre; // NON
    //resultat += ' ' + nombre; // OUI
  }
}
alert(resultat);
