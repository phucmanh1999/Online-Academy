const database = require('../database')
const sequelize = require('sequelize')

const User = database.define('User', {
        id: {
            primaryKey: true,
            type: sequelize.INTEGER,
        },
        user_name: sequelize.STRING(255),
        user_password: sequelize.STRING(255),
        email: sequelize.STRING(255),
        first_name: sequelize.STRING(255),
        last_name: sequelize.STRING(255),
        gender: sequelize.STRING(1),
        birthday: sequelize.DATE,
        avatar_url: sequelize.STRING(255),
        user_address: sequelize.STRING(255),
        created_at: sequelize.DATE,
        updated_at: sequelize.DATE,
        last_login: sequelize.DATE,
        role_id: sequelize.INTEGER,
    },
    {
        timestamps: false,
        paranoid: true,
        tableName: 'users',
    }
)

module.exports = User
