const path = require('path');
const Sequilize = require('sequelize');

const bdd = new Sequilize({
    dialect: 'sqlite',
    storage: path.join(path.dirname(__dirname), 'var', 'db.sqlite')
});

module.exports = bdd;
