const Student = require("../Model/Student");

const createStudent = async obj => {
    return await Student.create(obj);
}

const updateStudent = (_id, obj) => {
    return Student.update(
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
    createStudent,
    updateStudent,
}
