const database = require('../database')
const sequelize = require('sequelize')

const Instructor = database.define('Instructor', {
        id: {
            primaryKey: true,
            type: sequelize.INTEGER,
        },
        userid: {
            type: sequelize.INTEGER,
            notNull: true,
        },
        job_title: sequelize.STRING(255),
        short_description: sequelize.TEXT,
        full_description: sequelize.TEXT,
        rating: sequelize.DECIMAL,
        rating_number: sequelize.INTEGER,
        enroll_number: sequelize.INTEGER,
        course_number: sequelize.INTEGER,
    },
    {
        timestamps: false,
        paranoid: true,
        tableName: 'instructor',
    }
)

module.exports = Instructor
