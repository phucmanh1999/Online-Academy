const CourseBought = require("../Model/CourseBought");
const Course = require("../Model/Course");
const Instructor = require("../Model/Instructor");
const User = require("../Model/User");

const createBought = obj => {
    return CourseBought.create(obj);
}

const getBought = async studentId => {
    const boughts = await CourseBought.findAll(
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
    return boughts.map(b => b.toJSON())
}

const isOwn = async (studentId, courseId) => {
    return await CourseBought.findOne(
        {
            where: {
                student_id: studentId,
                course_id: courseId
            }
        }
    ) !== null
}

module.exports = {
    getBought,
    createBought,
    isOwn

}
