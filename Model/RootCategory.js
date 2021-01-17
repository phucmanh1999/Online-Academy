const database = require('../database')
const sequelize = require('sequelize')

const RootCategory = database.define('RootCategory', {
        id: {
            primaryKey: true,
            type: sequelize.INTEGER,
            autoIncrement: true,
        },
        root_category_name: sequelize.STRING(255),
        created_at: sequelize.DATE,
    },
    {
        timestamps: false,
        paranoid: true,
        tableName: 'rootcategory',
    }
)

module.exports = RootCategory
