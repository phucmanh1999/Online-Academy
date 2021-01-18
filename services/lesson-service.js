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

const deleteLessonByChapterID = (_id) => {
    return Lesson.destroy(
        {
            where: {
                chapter_id: _id
            }
        }
    )
}

const deleteLesson = (_id) => {
    return Lesson.destroy(
        {
            where: {
                id: _id
            }
        }
    )
}

module.exports = {
    createLesson,
    updateLesson,
    deleteLesson,
    deleteLessonByChapterID
}
