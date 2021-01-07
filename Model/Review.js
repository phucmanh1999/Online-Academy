const database = require('../database')
const sequelize = require('sequelize')

const Review = database.define('Review', {
        id: {
            primaryKey: true,
            type: sequelize.INTEGER,
            autoIncrement: true,
        },
        star: sequelize.INTEGER,
        comment: sequelize.TEXT,
        student_id: sequelize.INTEGER,
        course_id: sequelize.INTEGER,
        created_at: sequelize.DATE,
        updated_at: sequelize.DATE,
    },
    {
        timestamps: false,
        paranoid: true,
        tableName: 'review',
    }
)

module.exports = Review
