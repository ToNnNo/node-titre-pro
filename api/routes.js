const router = require('express').Router();
const Product = require('./model/Product');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const isAuthorized = require('./middleware/isAuthorized');

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET, DELETE'
}

router.use( cors(corsOptions) );

router.get('/', (request, response) => {

    response.json({ 'API': 'Product' });
});

router.post('/login', (request, response) => {

    if( request.body.username === 'admin' && request.body.password === 'admin' ) {

        const user = { id: 1, role: "admin" };

        const token = jwt.sign(user, "commentestvotreblanquette", {
            algorithm: 'HS256',
            expiresIn: 60
        });

        response.json( { token } );
        return;
    }

    response.status(401).json( { error: "Erreur d'authentification" } );
});

router.get('/check', isAuthorized, (request, response) => {

    response.json({ message: "Hello World" });

});

router.get('/product', async (request, response) => {

    const products = await Product.findAll();

    response.json(products);
});

router.get('/product/:id', async (request, response) => {

    const id = request.params.id;
    const product = await Product.findByPk(id);

    if( !product ) {
        response.status(404).json({ error: 'Not Found' });
        return;
    }

    response.json(product);
});

router.post('/product', cors(corsOptions), async (request, response) => {

    try {
        const model = await Product.create(request.body);
        response.status(201).json(model);
    } catch (e) {
        response.status(400).json({ error: e.message });
    }

});

router.put('/product/:id', async (request, response) => {

    const count = await Product.count({ where: { id: request.params.id }});

    if( !count ) {
        response.status(404).json({ error: 'Not Found' });
        return;
    }

    try {
        await Product.update(request.body, { where: { id: request.params.id }})

        response.status(204).json();
    } catch (e) {
        response.status(400).json({ error: e.message });
    }
});

router.delete('/product/:id',  async (request, response) => {

    const id = request.params.id;
    const product = await Product.destroy({ where: { id } });

    if( !product ) {
        response.status(404).json({ error: 'Not Found' });
        return;
    }

    response.status(204).json();
});

module.exports = router;
