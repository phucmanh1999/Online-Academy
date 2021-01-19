const Course = require("../Model/Course");
const Category = require("../Model/Category");
const Instructor = require("../Model/Instructor");
const Chapter = require("../Model/Chapter");
const Lesson = require("../Model/Lesson");
const User = require("../Model/User");
const Review = require("../Model/Review");
const Student = require("../Model/Student");
const QueryTypes = require('sequelize')
const database = require("../database");

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

const getAllCoursesBy = async obj => {
    let courses = await Course.findAll({
        include: [{
            model: Category,
        },
        ],
        where: obj
    });
    courses = courses.map(course => {
        course.dataValues.created_at = convertDate(course.dataValues.created_at)
        course.dataValues.updated_at = convertDate(course.dataValues.updated_at)
        return course
    })
    return courses;
}

const setActiveCourse = (_id, isActive) => {
    return Course.update(
        {
            is_active: isActive
        }
        ,
        {
            where: {
                id: _id
            },
        }
    )
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

const getTopEnrollCourse = async () => {
    let courses = await Course.findAll({
        include: [{
            model: Category,
        }, {
            model: Instructor,
            include: [{
                model: User,
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
                order_price ? ["price", order_price] : ["rating", "DESC"]
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
        order: [
            [Chapter, 'id', 'ASC']
        ],
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
    course.Chapters.forEach(chapter => {
        chapter.Lessons.sort((a, b) => (a.id > b.id) ? 1 : -1)
    })
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

const searchCourse = async (searchText, page, size, order_rating, order_price) => {
    const limit = size ? size : 10
    let splitResult = searchText.trim().replace(/[^a-zA-Z0-9 ]/g, "").split(" ").join(' & ')
    splitResult = "'" + splitResult + "'"
    let coursesResult
    if (order_rating)
        coursesResult = await database.query(`Select categories.category_name, courses.is_active, courses.id, courses.course_name, courses.short_description, courses.full_description, courses.rating, courses.rating_number, courses.enroll_number, courses.chapter_number, courses.view_number, courses.price, courses.concurrency,courses.img_path, courses.created_at, instructor.job_title, users.user_name, users.first_name, users.last_name from courses INNER JOIN instructor ON courses.instructor_id = instructor.id INNER JOIN users on instructor.user_id = users.id INNER JOIN categories on categories.id = courses.category_id where to_tsvector(course_name || ' ' || user_name || ' ' || job_title || ' ' || category_name) @@ to_tsquery(${splitResult}) ORDER BY courses.rating ${order_rating}`, {
                type: QueryTypes.SELECT
            }
        )
    else if (order_price) {
        coursesResult = await database.query(`Select categories.category_name, courses.is_active, courses.id, courses.course_name, courses.short_description, courses.full_description, courses.rating, courses.rating_number, courses.enroll_number, courses.chapter_number, courses.view_number, courses.price, courses.concurrency,courses.img_path, courses.created_at, instructor.job_title, users.user_name, users.first_name, users.last_name from courses INNER JOIN instructor ON courses.instructor_id = instructor.id INNER JOIN users on instructor.user_id = users.id INNER JOIN categories on categories.id = courses.category_id where to_tsvector(course_name || ' ' || user_name || ' ' || job_title || ' ' || category_name) @@ to_tsquery(${splitResult}) ORDER BY courses.price ${order_price}`, {
                type: QueryTypes.SELECT
            }
        )
    } else {
        coursesResult = await database.query(`Select categories.category_name, courses.is_active, courses.id, courses.course_name, courses.short_description, courses.full_description, courses.rating, courses.rating_number, courses.enroll_number, courses.chapter_number, courses.view_number, courses.price, courses.concurrency,courses.img_path, courses.created_at, instructor.job_title, users.user_name, users.first_name, users.last_name from courses INNER JOIN instructor ON courses.instructor_id = instructor.id INNER JOIN users on instructor.user_id = users.id INNER JOIN categories on categories.id = courses.category_id where to_tsvector(course_name || ' ' || user_name || ' ' || job_title || ' ' || category_name) @@ to_tsquery(${splitResult}) ORDER BY courses.price DESC `, {
                type: QueryTypes.SELECT
            }
        )
    }
    const coursesFull = coursesResult[0]
    let count = 0
    coursesFull.forEach(course => {
        if (course.is_active)
            count++;
    })
    let courses = []
    for (let i = 0; i < size && i + (page-1)*size<coursesFull.length ; i++){
        if (coursesFull[i + (page-1)*size].is_active)
            courses.push(coursesFull[i + (page-1)*size])
    }
    courses = courses.map(course => {
        course.created_at = convertDate(course.created_at)
        return course
    })

    const pageCount = Math.ceil(count / limit);
    console.log(count)
    return {courses, count, limit, page, pageCount}
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
    updateCourse,
    searchCourse,
    getTopEnrollCourse,
    getAllCoursesBy,
    setActiveCourse
}
