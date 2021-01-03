const sequelize = require('sequelize')

const database = new sequelize({
    database: "online-academy",
    username: "postgres",
    password: "1",
    host: "localhost",
    port: 5432,
    dialect: "postgres",

})

module.exports = database
