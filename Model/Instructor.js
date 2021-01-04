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
        jobtitle: sequelize.STRING(255),
        shortdescription: sequelize.TEXT,
        fulldescription: sequelize.TEXT,
        rating: sequelize.DECIMAL,
        ratingnumber: sequelize.INTEGER,
        enrollnumber: sequelize.INTEGER,
        coursenumber: sequelize.INTEGER,
    },
    {
        timestamps: false,
        paranoid: true,
        tableName: 'instructor',
    }
)

module.exports = Instructor
