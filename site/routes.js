const router = require('express').Router();

router.get('/', (request, response) => {

    /*const html = `<!doctype html>
<html lang="fr">
<head>
    <title>Accueil</title>
    <meta charset="utf-8" />
</head>
<body>
    <h1>Présentation de Express JS</h1>
    <img src="images/batman.jpg" alt="logo batman" title="logo batman" />
</body>
</html>`;

    response.send(html);*/

    response.render('home/index.html');
});

router.get('/user/:id', (request, response) => {

    const id = request.params.id;

    response.render('user/index.html', { id }); // { id: id }
});

router.get('/user', (request, response) => {

    const users = [
        { name: "John", lastname: "Doe" },
        { name: "Jane", lastname: "Doe" },
        { name: "Eduard", lastname: "Doe" },
        { name: "Robert", lastname: "Doe" },
    ];


    response.json( users );
});

module.exports = router;
