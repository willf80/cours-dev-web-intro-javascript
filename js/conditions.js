// if ... else
(function(){
  let age = 16;

  if(age > 17) {
    alert('Je suis majeur');
  } else {
    alert('Je suis mineur');
  }
  
  // 0 - 13 : enfant
  // 14 - 17: ados
  // 18 - 45: jeune
  // > 45 : vieux

  let age2 = -1;

  if (age2 >= 0 && age2 <= 13) {
    alert('Je suis enfant');
  } else if (age2 > 13 && age2 < 18) {
    alert('Je suis ados');
  } else if (age2 >= 18 && age2 <= 45) {
    alert('Je suis jeune');
  } else if (age2 > 45) {
    alert('Je suis vieux');
  } else {
    alert("Erreur : l'âge ne peut pas être négatif");
  }

  // possible d'écrire un if sans le else
  if (age) {
    // instruction ici...
  }

})();

