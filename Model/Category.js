const database = require('../database')
const sequelize = require('sequelize')

const Category = database.define('Category', {
        id: {
            primaryKey: true,
            type: sequelize.INTEGER,
        },
        categoryname: {
            type: sequelize.STRING(255),
            unique: true,
            notNull: true,
        },
        createdat: sequelize.DATE,
        updatedat: sequelize.DATE,
    },
    {
        timestamps: false,
        paranoid: true,
        tableName: 'categories',
    }
)

module.exports = Category
