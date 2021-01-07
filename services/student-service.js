const Student = require("../Model/Student");

const createStudent = async obj => {
    return await Student.create(obj);
}

module.exports = {
    createStudent,
}
