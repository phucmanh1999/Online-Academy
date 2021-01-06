const database = require('../database')
const sequelize = require('sequelize')

const Student = database.define('Student', {
        id: {
            primaryKey: true,
            type: sequelize.INTEGER,
            autoIncrement: true,
        },
        user_id: {
            type: sequelize.INTEGER,
            notNull: true,
        },
        buy_number: sequelize.INTEGER,
    },
    {
        timestamps: false,
        paranoid: true,
        tableName: 'student',
    }
)

module.exports = Student
