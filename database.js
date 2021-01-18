const {Sequelize} = require('sequelize')

const database = new Sequelize({
    database: "online-academy",
    username: "postgres",
    password: "1",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    logging: false
})


// const database = new Sequelize({
//     database: "online-academy1",
//     username: "postgres",
//     password: "123456",
//     host: "localhost",
//     port: 5432,
//     dialect: "postgres",
//     logging: false,
//     dialectOptions: {
//         ssl: {
//           require: true, // This will help you. But you will see nwe error
//           rejectUnauthorized: false // This line will fix new error
//         }
//       },
//     })

module.exports = database
