const Lesson = require("../Model/Lesson");
const createLesson = obj => {
    return Lesson.create(obj);
}

const updateLesson = (_id, obj) => {
    return Lesson.update(
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
    createLesson,
    updateLesson
}
