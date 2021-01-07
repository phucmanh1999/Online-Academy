const Role = require("../Model/Role");

const getRole = async (obj) => {
    const role = await  Role.findOne({
        where: obj,
    });
    return role;
}

module.exports = {
    getRole,
}
