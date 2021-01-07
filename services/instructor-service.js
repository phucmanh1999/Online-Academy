const Instructor = require("../Model/Instructor");

const createInstructor = async obj => {
    return await Instructor.create(obj);
}

module.exports = {
    createInstructor,
}
