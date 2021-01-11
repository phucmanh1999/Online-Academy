const database = require('../database')
const sequelize = require('sequelize')

const CourseBought = database.define('CourseBought', {
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
        tableName: 'coursebought',
    }
)

module.exports = CourseBought
