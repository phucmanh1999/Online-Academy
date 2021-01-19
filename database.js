const {Sequelize} = require('sequelize')

const database = new Sequelize({
    database: "online-academy1",
    username: "postgres",
    password: "123456",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    logging: false
})


// const database = new Sequelize({
//     database: "d5968uq2v63ter",
//     username: "jvlbpogybkrtne",
//     password: "d3b92cccae06ed08d402a7a423b7f2cc65b1c01170d874db2892f444f0f6de6b",
//     host: "ec2-52-22-135-159.compute-1.amazonaws.com",
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


// const database = new Sequelize({
//     database: "d5968uq2v63ter",
//     username: "jvlbpogybkrtne",
//     password: "d3b92cccae06ed08d402a7a423b7f2cc65b1c01170d874db2892f444f0f6de6b",
//     host: "ec2-52-22-135-159.compute-1.amazonaws.com",
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
