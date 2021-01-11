// Path est module node natif, et pour y faire référence on utilise à fonction require() qui est responsable de charger
// un module nodeJS
const path = require('path');

let path_file = './assets/content/hello.txt';

console.log('dirname(): %s', path.dirname(path_file));
console.log('basename(): %s', path.basename(path_file));
console.log('extname(): %s', path.extname(path_file));

console.log('join(): %s', path.join('./', 'assets', 'images', 'file.png'));
console.log('separator: %s', path.sep);

console.log('resolve: %s', path.resolve( __dirname, path.join('..', 'assets', 'images', 'file.png') ));

let origin = path.join('./', 'assets', 'files');
let dest = path.join(__dirname, 'assets', 'assets', 'images', 'image.jpg');

console.log( 'relative: %s', path.relative(origin, dest) );
