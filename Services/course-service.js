const Course = require("../Model/Course");
const Category = require("../Model/Category");
const Instructor = require("../Model/Instructor");

const getAllCourses = async () => {
    const courses = await Course.findAll({
        include: [{
            model: Category,
        }, {
            model: Instructor,
        },
        ]
    });
    return courses.map(c => c.toJSON());
}

const getCourseByTopView = async () => {
    const courses = await Course.findAll({
        include: [{
            model: Category,
        }, {
            model: Instructor,
        },],
        limit: 10,
        order: [
            ['view_number', 'DESC']
        ]
    });
    return courses.map(c => c.toJSON());
}

const getHighLightCourses = async () => {
    const courses = await Course.findAll({
        include: [{
            model: Category,
        }, {
            model: Instructor,
        },],
        limit: 4,
        order: [
            ['view_number', 'DESC']
        ]
    });
    return courses.map(c => c.toJSON());
}

const getNewestCourses = async () => {
    const courses = await Course.findAll({
        include: [{
            model: Category,
        }, {
            model: Instructor,
        },],
        limit: 10,
        order: [
            ['created_at', 'DESC']
        ]
    });
    return courses.map(c => c.toJSON());
}

module.exports = {
    getAllCourses,
    getCourseByTopView,
    getHighLightCourses,
    getNewestCourses,
}
