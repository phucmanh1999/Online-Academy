const User = require("../Model/User");
const Role = require("../Model/Role");
const Instructor = require("../Model/Instructor");
const bcrypt = require("bcrypt");
const Administrator = require("../Model/Administrator");
const Student = require("../Model/Student");
const Cart = require("../Model/Cart");
const {ROLE_STUDENT} = require("../constant/constant");
const {ROLE_INSTRUCTOR} = require("../constant/constant");

const convertDate = (dateObj) => {
    if (!dateObj)
        return null
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return day + "/" + month + "/" + year;
}

const getAllUsers = async () => {
    const users = await User.findAll({
        include: [{
            model: Role,
        }]
    });
    return users;
}

const getAllInstructor = async () => {
    const users = await User.findAll({
        include: [{
            model: Role,
            where: {
                role_name: ROLE_INSTRUCTOR
            }
        }, {
            model: Instructor,
        }]
    });
    return users;
}

const getAllStudent = async () => {
    const users = await User.findAll({
        include: [{
            model: Role,
            where: {
                role_name: ROLE_STUDENT
            }
        }, {
            model: Student,
        }]
    });
    return users;
}

const getUser = async obj => {
    let user = await User.findOne({
        where: obj,
        include: [{
            model: Role,
        }, {
            model: Instructor,
        }, {
            model: Administrator,
        }, {
            model: Student,
        }]
    });
    user = user.toJSON()
    user.created_at = convertDate(user.created_at)
    user.updated_at = convertDate(user.updated_at)
    return user;
}

const createUser = async obj => {
    return await User.create(obj);
}

const deleteUser = obj => {
    return User.destroy(obj);
}

const isValidPassword = async (user, password) => {
    return await bcrypt.compare(password, user.user_password);
}

const getUserCartNumber = async studentId => {
    const result = await Cart.count({
        where: {
            student_id: studentId
        }
    })
    return result
}

const updateUser = (_id, obj) => {
    return User.update(
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
    getAllUsers,
    getUser,
    createUser,
    isValidPassword,
    deleteUser,
    updateUser,
    getUserCartNumber,
    getAllInstructor,
    getAllStudent,
}
