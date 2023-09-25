const {Sequelize} = require("sequelize");

const SQLconnection = new Sequelize(process.env.SQL_URI);

SQLconnection.authenticate();
console.log("Connection to DB working");

module.exports = SQLconnection;
