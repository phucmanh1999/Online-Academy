const CourseBought = require("../Model/CourseBought");

const createBought = obj => {
    return CourseBought.create(obj);
}

const getBought = obj => {
    return CourseBought.findAndCountAll({
        where: obj
    })
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
