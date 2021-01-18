const database = require('../database')
const sequelize = require('sequelize')
const Category = require("./Category");
const Instructor = require("./Instructor");

const Course = database.define('Course', {
        id: {
            primaryKey: true,
            type: sequelize.INTEGER,
            autoIncrement: true,
        },
        course_name: {
            notNull: true,
            unique: true,
            type: sequelize.STRING(255),
        },
        img_path: sequelize.STRING(255),
        short_description: sequelize.TEXT,
        full_description: sequelize.TEXT,
        rating: sequelize.DECIMAL,
        rating_number: sequelize.INTEGER,
        enroll_number: sequelize.INTEGER,
        chapter_number: sequelize.INTEGER,
        view_number: sequelize.INTEGER,
        price: sequelize.DECIMAL,
        concurrency: sequelize.STRING(50),
        discount: sequelize.SMALLINT,
        course_language: sequelize.STRING(50),
        course_state: sequelize.STRING(1),
        created_at: sequelize.DATE,
        updated_at: sequelize.DATE,
        category_id: {
            notNull: true,
            type: sequelize.INTEGER,
        },
        instructor_id: {
            notNull: true,
            type: sequelize.INTEGER,
        },
        is_active: sequelize.BOOLEAN
    },
    {
        timestamps: false,
        paranoid: true,
        tableName: 'courses',
    }
)

module.exports = Course
