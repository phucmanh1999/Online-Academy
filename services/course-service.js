const Course = require("../Model/Course");
const Category = require("../Model/Category");
const Instructor = require("../Model/Instructor");
const Chapter = require("../Model/Chapter");
const Lesson = require("../Model/Lesson");
const User = require("../Model/User");
const Review = require("../Model/Review");
const Student = require("../Model/Student");

const getAllCourses = async () => {
    const courses = await Course.findAll({
        include: [{
            model: Category,
        }, {
            model: Instructor,
            include: [{
                model: User,
            }]
        },
        ]
    });
    return courses;
}

const getCourseByTopView = async () => {
    const courses = await Course.findAll({
        include: [{
            model: Category,
        }, {
            model: Instructor,
            include: [{
                model: User,
            }]
        },],
        limit: 10,
        order: [
            ['view_number', 'DESC']
        ]
    });
    return courses;
}

const getHighLightCourses = async () => {
    const courses = await Course.findAll({
        include: [{
            model: Category,
        }, {
            model: Instructor,
            include: [{
                model: User,
            }]
        },],
        limit: 4,
        order: [
            ['view_number', 'DESC']
        ]
    });
    return courses;
}

const getNewestCourses = async () => {
    const courses = await Course.findAll({
        include: [{
            model: Category,
        }, {
            model: Instructor,
            include: [{
                model: User,
            }]
        },],
        limit: 10,
        order: [
            ['created_at', 'DESC']
        ]
    });
    return courses;
}

const getCoursesByCategoryId = async (categoryId, page = 1, size) => {
    const pagination = getPagination(page, size)
    const result = await Course.findAndCountAll({
        where: {
            category_id: categoryId,
        },
        limit: pagination.limit,
        offset: pagination.offset,
        include: [{
            model: Instructor,
            include: [{
                model: User,
                attributes: ['id', 'user_name', 'avatar_url']
            }]
        },],
    })

    const count = result.count
    const courses = result.rows;

    return {count, courses}
}

const getPagination = (pageNum, pageSize) => {
    const limit = pageSize ? pageSize : 10;
    const offset = 0 + (pageNum - 1) * limit;
    return {limit, offset};
};

const getCourse = async obj => {
    return Course.findOne({
        where: obj,
        include: [{
            model: Instructor,
            include: [{
                model: User,
                attributes: ['id', 'user_name', 'avatar_url']
            }]
        }, {
            model: Category,
        }, {
            model: Chapter,
            include: [{
                model: Lesson,
            }
            ]
        }, {
            model: Review,
            include: {
                model: Student,
                include: {
                    model: User,
                    attributes: ['id', 'user_name', 'avatar_url']
                }
            }
        },
        ],
    });
}

module.exports = {
    getAllCourses,
    getCourseByTopView,
    getHighLightCourses,
    getNewestCourses,
    getCoursesByCategoryId,
    getCourse,
}
