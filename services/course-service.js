const Course = require("../Model/Course");
const Category = require("../Model/Category");
const Instructor = require("../Model/Instructor");
const Chapter = require("../Model/Chapter");
const Lesson = require("../Model/Lesson");
const User = require("../Model/User");
const Review = require("../Model/Review");
const Student = require("../Model/Student");
const sequelize = require('sequelize')

const convertDate = (dateObj) => {
    if (!dateObj)
        return null
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return day + "/" + month + "/" + year;
}

const getAllCourses = async () => {
    let courses = await Course.findAll({
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
    courses = courses.map(course => {
        course.dataValues.created_at = convertDate(course.dataValues.created_at)
        course.dataValues.updated_at = convertDate(course.dataValues.updated_at)
        return course
    })
    return courses;
}

const getCourseByTopView = async () => {
    let courses = await Course.findAll({
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
    courses = courses.map(course => {
        course.dataValues.created_at = convertDate(course.dataValues.created_at)
        course.dataValues.updated_at = convertDate(course.dataValues.updated_at)
        return course
    })
    return courses;
}

const getHighLightCourses = async () => {
    let courses = await Course.findAll({
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
    courses = courses.map(course => {
        course.dataValues.created_at = convertDate(course.dataValues.created_at)
        course.dataValues.updated_at = convertDate(course.dataValues.updated_at)
        return course
    })
    return courses;
}

const getNewestCourses = async () => {
    let courses = await Course.findAll({
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
    courses = courses.map(course => {
        course.dataValues.created_at = convertDate(course.dataValues.created_at)
        course.dataValues.updated_at = convertDate(course.dataValues.updated_at)
        return course
    })
    return courses;
}

const getTopBuyCourseByCategoryId = async (categoryId) => {
    let courses = await Course.findAll({
        where: {
            category_id: categoryId,
        },
        include: [{
            model: Instructor,
            include: [{
                model: User,
                attributes: ['id', 'user_name', 'avatar_url', 'first_name', 'last_name']
            }]
        },],
        limit: 5,
        order: [
            ['enroll_number', 'DESC']
        ]
    });
    courses = courses.map(course => {
        course.dataValues.created_at = convertDate(course.dataValues.created_at)
        course.dataValues.updated_at = convertDate(course.dataValues.updated_at)
        return course
    })
    return courses;
}

const getCoursesByCategoryId = async (categoryId, page, size, order_price, order_rating) => {
    const pagination = getPagination(page, size)
    const result = await Course.findAndCountAll({
        where: {
            category_id: categoryId,
        },
        limit: pagination.limit,
        offset: pagination.offset,
        order: [
            order_rating ? ["rating", order_rating] :
                order_price ? ["price", order_price] : []
        ],
        include: [{
            model: Instructor,
            include: [{
                model: User,
                attributes: ['id', 'user_name', 'avatar_url', 'first_name', 'last_name']
            }]
        }, {
            model: Category
        }],
    })

    const count = result.count
    let courses = result.rows;
    courses = courses.map(course => {
        course.dataValues.created_at = convertDate(course.dataValues.created_at)
        course.dataValues.updated_at = convertDate(course.dataValues.updated_at)
        return course
    })
    const limit = pagination.limit;
    const pageCount = Math.ceil(count / limit);


    return {courses, count, limit, page, pageCount}
}

const getPagination = (pageNum, pageSize) => {
    const limit = pageSize ? pageSize : 10;
    const offset = 0 + (pageNum - 1) * limit;
    return {limit, offset};
};

const createCourse = obj => {
    return Course.create(obj);
}

const getCourseLessInfo = async obj => {
    let course = await Course.findOne({
        where: obj
    })
    course = course.toJSON()
    return course
}

const getCourse = async obj => {
    let course = await Course.findOne({
        where: obj,
        include: [{
            model: Instructor,
            include: [{
                model: User,
                attributes: [
                    'id',
                    'user_name',
                    'avatar_url',
                    'first_name',
                    'last_name'
                ]
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
                    attributes: ['id', 'user_name', 'avatar_url', 'first_name', 'last_name']
                }
            }
        },
        ],
    })
    course = course.toJSON()
    course.created_at = convertDate(course.created_at)
    course.updated_at = convertDate(course.updated_at)
    return course;
}

const updateCourse = (_id, obj) => {
    return Course.update(
        obj
        ,
        {
            where: {
                id: _id
            },
        }
    )
}

module.exports = {
    getAllCourses,
    getCourseByTopView,
    getHighLightCourses,
    getNewestCourses,
    getCoursesByCategoryId,
    getCourse,
    createCourse,
    getTopBuyCourseByCategoryId,
    getCourseLessInfo,
    updateCourse
}
