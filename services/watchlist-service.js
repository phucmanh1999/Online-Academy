const WatchList = require("../Model/WatchList");
const Course = require("../Model/Course");
const Instructor = require("../Model/Instructor");
const User = require("../Model/User");

const createWatchList = obj => {
    return WatchList.create(obj);
}

const getWatchListByStudentId = async studentId => {
    const carts = await WatchList.findAll(
        {
            where: {
                student_id: studentId
            },
            include: {
                model: Course,
                attributes: ['course_name', 'id', 'img_path', 'price'],
                include: {
                    model: Instructor,
                    attributes: ['job_title'],
                    include: {
                        model: User,
                        attributes: ['user_name']
                    }
                }
            }
        }
    )
    return carts.map(ca => ca.toJSON())
}

const getWatchList = obj => {
    return WatchList.findOne({
        where: obj
    })
}

module.exports = {
    createWatchList,
    getWatchListByStudentId,
    getWatchList
}
