const {DataTypes} = require("sequelize");
const SQLconnection = require("../db/connection");

const Order = SQLconnection.define("Order", {
    item: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Order;