const database = require('../database')
const sequelize = require('sequelize')

const Role = database.define('Role', {
        id: {
            primaryKey: true,
            type: sequelize.INTEGER,
            autoIncrement: true,
        },
        role_name: sequelize.STRING(50),
        created_at: sequelize.DATE,
        updated_at: sequelize.DATE,
    },
    {
        timestamps: false,
        paranoid: true,
        tableName: 'roles',
    }
)

module.exports = Role
