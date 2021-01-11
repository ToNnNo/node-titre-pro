const fs = require('fs').promises;
const path = require('path');

const pathfile = path.join(__dirname, '..', 'assets', 'content', 'promisify', 'hello.txt');
const content = 'Hello Promisify\r\n';

// callback hell
fs.mkdir(path.dirname(pathfile), { recursive: true }).then( _ => {

    console.log('-- Création des répertoires terminés --');

    fs.writeFile(pathfile, content, { flag: 'a' }).then( _ => {

        console.log('-- Ecriture terminée --');

        fs.readFile(pathfile).then( content => {

            console.log('-- Lecture du fichier --');
            console.log(content.toString());

        });
    });
}).catch( err => {
    throw err;
});
