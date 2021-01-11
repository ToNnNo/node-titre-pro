// async est un raccourci permettant de créer une promise
// dans une fonction async le mot clé return défini une promesse en réussite
async function success() {
    return 'Bravo';
}

// le clé throw défini une promesse en échec
async function fail() {
    throw new Error('dommage ...');
}

success().then( console.log );
fail().catch( console.log );

function getNumber() {
    const randTime = Math.floor( Math.random() * 5000 + 1000 );

    return new Promise( resolve => {
        setTimeout( _ => {
            resolve(10);
        }, randTime);
    });

}

async function addition() {
    const a = await getNumber();
    const b = await getNumber();

    console.log( `${a} + ${b} = ${a+b}` );
}

console.log(' -- appelle de addition() -- ');
addition();
console.log(' -- On attend le résultat -- ');

// fonction auto appelante (iife - Immediately Invoked Fonction Expression)
( async _ => {

    console.log( await success() );

    try {
        await fail();
    } catch(e) {
        console.log(e);
    }

} )();
