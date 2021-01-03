const database = require('../database')
const sequelize = require('sequelize')

const Course = database.define('courses', {
    id: {
        primaryKey: true,
        type: sequelize.INTEGER,
    },
    coursename: {
        notNull: true,
        unique: true,
        type: sequelize.STRING(255),
    },
    imgpath: sequelize.STRING(255),
    shortdescription: sequelize.TEXT,
    fulldescription: sequelize.TEXT,
    rating: sequelize.DECIMAL,
    ratingnumber: sequelize.INTEGER,
    enrollnumber: sequelize.INTEGER,
    chapternumber: sequelize.INTEGER,
    viewnumber: sequelize.INTEGER,
    price: sequelize.DECIMAL,
    concurrency: sequelize.STRING(50),
    discount: sequelize.SMALLINT,
    courselanguage: sequelize.STRING(50),
    coursestate: sequelize.STRING(1),
    createdat: sequelize.DATE,
    updatedat: sequelize.DATE,
    categoryid: sequelize.INTEGER,
    instructorid: sequelize.INTEGER,
},
    {
        timestamps: false,
        paranoid: true,
    }
)

module.exports = Course
