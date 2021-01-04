const database = require('../database')
const sequelize = require('sequelize')

const Category = database.define('categories', {
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
    }
)

module.exports = Category
