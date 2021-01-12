const Lesson = require("../Model/Lesson");
const createLesson = obj => {
    return Lesson.create(obj);
}

module.exports = {
    createLesson,
}
