const bdd = require('./db');
const Product = require('../model/Product');

(async _ => {

    try {
        await bdd.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    await Product.sync();

    Product.destroy({truncate: true});
    Product.bulkCreate( [
        { name: 'Pomme', price: 12.90 },
        { name: 'Poire', price: 1.60 },
        { name: 'Banane', price: 6.00 },
        { name: 'Cerise', price: 9.99 },
    ] );

})();


