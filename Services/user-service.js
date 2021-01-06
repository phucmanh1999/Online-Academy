const User = require("../Model/User");
const Role = require("../Model/Role");
const Instructor = require("../Model/Instructor");
const bcrypt = require("bcrypt");
const Administrator = require("../Model/Administrator");
const Student = require("../Model/Student");

const getAllUsers = async () => {
    const users = await  User.findAll({
        include: [{
            model: Role,
        }]
    });
    return users;
}

const getUser = async obj => {
    return await User.findOne({
        where: obj,
        include:[{
            model: Role,
        }, {
            model: Instructor,
        }, {
            model: Administrator,
        }, {
            model: Student,
        }]
    });
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

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    isValidPassword,
    deleteUser,
}
