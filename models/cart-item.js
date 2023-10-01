const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const CartItem = sequelize.define('cart-item',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    }
});


module.exports = CartItem;