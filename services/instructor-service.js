const Instructor = require("../Model/Instructor");

const createInstructor = async obj => {
    return await Instructor.create(obj);
}

const getInstructor = async obj => {
        const instructor = await  Instructor.findOne({
            where: obj,
        });
        return instructor;
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
    getInstructor
}
