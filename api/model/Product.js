const { Model, DataTypes } = require('sequelize');
const bdd = require('../config/db');

class Product extends Model {}
Product.init({
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Null: Le nom est obligatoire'
            },
            notEmpty: {
                msg: 'Empty: Le nom est obligatoire'
            }
        }
    },
    price: {
        type: DataTypes.DOUBLE,
        defaultValue: 0,
        validate: {
            isDecimal: {
                msg: 'Le prix doit contenir une valeur numérique'
            },
            min: {
                args: [0],
                msg: 'Le prix doit contenir une valeur positive'
            }
        }
    }
}, {
    sequelize: bdd,
    tableName: 'product'
});

module.exports = Product;
