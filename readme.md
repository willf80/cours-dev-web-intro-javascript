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

2 manières de faire de commentaires

- Commentaires sur plusieurs lignes

```js
/*
Tout ce qui est écrit ici est en commentaires
let x = 10;
*/
```

- Commentaires sur une ligne

```js
// Ceci est un commentaire
let x = 10; // x est la différence de a et b
```

### Opérateurs

`fichier referent: operateurs.js`

### Structure conditionnelles



### Les boucles

### Fonctions

### Evenements

## Exercice : Calculatrice
