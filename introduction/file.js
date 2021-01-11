const fs = require('fs');
const path = require('path');

const pathfile = path.join(__dirname, '..', 'assets', 'content', 'hello.txt');
const content = 'Hello World\r\n';

// callback hell
fs.mkdir(path.dirname(pathfile), { recursive: true }, ( err ) => {
    if( err ) {
        throw err;
    }

    console.log('-- Création des répertoires terminés --');

    fs.writeFile(pathfile, content, { flag: 'a' }, (err) => {
        if(err) throw err;

        console.log('-- Ecriture terminée --');

        fs.readFile(pathfile, (err, content) => {
            if(err) throw err;

            console.log('-- Lecture du fichier --');
            console.log(content.toString());

        });
    });
});
