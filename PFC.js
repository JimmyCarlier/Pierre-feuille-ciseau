// PIERRE FEUILLE CISEAU

let table = ["Pierre", "Feuille", "Ciseau"];
let joueur1 = Math.floor(Math.random() * 3);
let joueur2 = Math.floor(Math.random() * 3);

console.log("Joueur 1 " + table[joueur1]);
console.log("Joueur 2 " + table[joueur2]);

if (joueur1 === joueur2) {
  console.log("Egalité");
}
if ((joueur1-joueur2+3)%3 === 1) {
  console.log("Vous avez gagné");
} else {
  console.log("Vous avez perdu");
}

let tableAnimal = [[1, "FizzBuzz"], [2, "Crackcode"], [3, "Ville"], [4, "Carré de X"], [5, "X vide"], [6, "Checkermate"], [7, "XOXO"], [8, "FizzBuzzTapioca"]];
let hasard = Math.floor(Math.random() * tableAnimal.length);
let exerciceAleatoire = tableAnimal[hasard][1];

console.log(exerciceAleatoire);

