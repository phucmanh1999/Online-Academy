const database = require('../database')
const sequelize = require('sequelize')

const Cart = database.define('Cart', {
        id: {
            primaryKey: true,
            type: sequelize.INTEGER,
            autoIncrement: true,
        },
        student_id: sequelize.INTEGER,
        course_id: sequelize.INTEGER,
        created_at: sequelize.DATE,
        updated_at: sequelize.DATE,
    },
    {
        timestamps: false,
        paranoid: true,
        tableName: 'cart',
    }
)

module.exports = Cart
