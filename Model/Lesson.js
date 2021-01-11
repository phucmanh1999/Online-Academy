const database = require('../database')
const sequelize = require('sequelize')

const Lesson = database.define('Lesson', {
        id: {
            primaryKey: true,
            type: sequelize.INTEGER,
            autoIncrement: true,
        },
        chapter_id: sequelize.INTEGER,
        lesson_name: sequelize.STRING(255),
        video_url: sequelize.STRING(255),
        short_description: sequelize.TEXT,
        full_description: sequelize.TEXT,
        view_number: sequelize.INTEGER,
        hour: sequelize.INTEGER,
        current_watch: sequelize.DATE,
        created_at: sequelize.DATE,
        updated_at: sequelize.DATE,
        is_free: sequelize.BOOLEAN
    },
    {
        timestamps: false,
        paranoid: true,
        tableName: 'lessons',
    }
)

module.exports = Lesson
