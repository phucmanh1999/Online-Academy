const {Sequelize} = require('sequelize')

const database = new Sequelize({
    database: "online-academy",
    username: "postgres",
    password: "1",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
})

module.exports = database
