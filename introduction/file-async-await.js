const fs = require('fs').promises;
const path = require('path');

const pathfile = path.join(__dirname, '..', 'assets', 'content', 'asyncawait', 'hello.txt');
const content = 'Hello Promisify\r\n';

async function readWrite() {

    await fs.mkdir(path.dirname(pathfile), { recursive: true });
    console.log('-- Création des répertoires terminés --');

    await fs.writeFile(pathfile, content, { flag: 'a' });
    console.log('-- Ecriture terminée --');

    const result = await fs.readFile(pathfile);
    console.log('-- Lecture du fichier --');
    console.log(result.toString());

}

try{
    readWrite();
}catch(e){
    console.log(e);
}
