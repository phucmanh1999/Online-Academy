const database = require('../database')
const sequelize = require('sequelize')

const Category = database.define('Category', {
        id: {
            primaryKey: true,
            type: sequelize.INTEGER,
            autoIncrement: true,
        },
        category_name: {
            type: sequelize.STRING(255),
            unique: true,
            notNull: true,
        },
        created_at: sequelize.DATE,
        updated_at: sequelize.DATE,
    },
    {
        timestamps: false,
        paranoid: true,
        tableName: 'categories',
    }
)

module.exports = Category
