const {Sequelize} = require('sequelize')

const database = new Sequelize({
    database: "online-academy1",
    username: "postgres",
    password: "123456",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
}) 

module.exports = database
