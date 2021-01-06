const User = require("../Model/User");
const Role = require("../Model/Role");

const getAllUsers = async () => {
    const users = await  User.findAll({
        include: [{
            model: Role,
        }]
    });
    return users.map(u => u.toJSON());
}

const getUser = async obj => {
    return await User.findOne({
        where: obj,
    });
}

const createUser = async obj => {

}

const isValidPassword = async (user, password) => {
    return password === user.user_password;
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    isValidPassword,
}
