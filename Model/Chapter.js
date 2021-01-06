const database = require('../database')
const sequelize = require('sequelize')

const Chapter = database.define('Chapter', {
        id: {
            primaryKey: true,
            type: sequelize.INTEGER,
        },
        course_id: sequelize.INTEGER,
        lesson_number: sequelize.INTEGER,
        short_description: sequelize.TEXT,
        created_at: sequelize.DATE,
        updated_at: sequelize.DATE,
    },
    {
        timestamps: false,
        paranoid: true,
        tableName: 'chapters',
    }
)

module.exports = Chapter
