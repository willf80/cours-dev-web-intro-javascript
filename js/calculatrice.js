const ecran = document.querySelector("#ecran");
const nombre1Element = document.querySelector("#nombre1");
const nombre2Element = document.querySelector("#nombre2");
const operateurElement = document.querySelector("#signe");
const btnCalculer = document.querySelector("#btnCalculer");

btnCalculer.addEventListener('click', function() {
  let nbre1 = +nombre1Element.value;
  let nbre2 = parseInt(nombre2Element.value); // equivalent à +nombre2Element.value
  let operateur = operateurElement.value;

  let resultat;
  if (operateur === '+') {
    resultat = addition(nbre1, nbre2);
  } else if (operateur === '-') {
    resultat = nbre1 - nbre2;
  } else if (operateur === '*') {
    resultat = nbre1 * nbre2;
  } else {
    resultat = nbre1 / nbre2;
  }

  ecran.textContent = resultat;
});

function addition(a, b) {
  return a + b;
}

function soustraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}