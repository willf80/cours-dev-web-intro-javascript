# Introduction à JavaScript

## Qu'est le JavaScript ?

## Un exemple "Hello World !"

```js
<h1></h1>

<script>
    let monTitre = document.querySelector('h1'); // em memoire
    monTitre.textContent = 'Bonjour le monde !';
</script>
```

## Les bases du JavaScript

### Les variables

3 manières de créer des variables en JS

- var : variable global
- let : variable local (limité à un scope)
- const : variable constante; impossible de changer sa valeur une fois créée.

```js
// Différents types de données

// Chaîne de caractères
let pays = "Senegal"

// Nombre
let annee = 2022

// Booléen
let estMajeur = true;

// Tableau
let list = ['sel', 'tomate', 100, false]

// Objet
// let sousTitre = document.querySelector('h2');

const maConstante = 'Hello';
maConstante = 'x'; // Erreur
```
### Les commentaires

Il exite 2 types commentaires :

- Commentaires sur plusieurs lignes

```js
/*
Tout ce qui est écrit ici est en commentaires
let x = 10;
*/
```

- Commentaire sur une ligne

```js
// Ceci est un commentaire
let x = 10; // x est la différence de a et b
```

### Opérateurs

`fichier référent: js/operateurs.js`

### Structure conditionnelles

Les structures conditionnelles sont des éléments du code qui permettent de tester si une expression est vraie ou non et d'exécuter des instructions différentes selon le résultat. La structure conditionnelle utilisée la plus fréquemment est `if ... else`

```
fichier référent: js/conditions.js
```

### Les boucles
```
fichier référent: js/boucles.js
```

### Fonctions

Les fonctions sont un moyen de compacter des fonctionnalités en vue de leur réutilisation. Quand vous avez besoin de la procédure, vous pouvez appeler une fonction, par son nom, au lieu de ré‑écrire la totalité du code chaque fois. Nous avons déjà utilisé des fonctions plus haut, par exemple :

```js
let monTitre = document.querySelector('h1');
```

```js
alert('Je suis majeur');
```

```
fichier référent: js/fonctions.js
```

### Evenements



## Exercice : Calculatrice

- Utiliser les fonctions dans les conditions
- Afficher le message d'erreur <<Impossible de diviser par 0>> quand on divise par 0
- Eviter que l'utilisateur saisie des caractères autres que les caractères numérique (0 à 9)

## Correction suite calculatrice
## Installation des environnements Angular
