const Instructor = require("../Model/Instructor");

const createInstructor = async obj => {
    return await Instructor.create(obj);
}

const updateInstructor = (_id, obj) => {
    return Instructor.update(
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
    createInstructor,
    updateInstructor,
}
