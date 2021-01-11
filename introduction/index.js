// node path/to/my/file.js

console.log('Hello World');

let name = "John";
let lastname = "Doe";

console.log('Hello %s', name);

console.log('Hello %s %s', name, lastname);

/**
 * %s permet d'afficher des chaines de caractères
 * %d permet d'afficher les valeurs numériques
 * %j permet d'afficher des structures JSON
 * %O Affiche un objet avec au maximun 4 profondeurs
 * %o Affiche un objet avec au maximun 2 profondeurs
 */

console.log(`Hello ${name} ${lastname}`);

console.log(`__filename: %s`, __filename);
console.log(`__dirname: %s`, __dirname);
