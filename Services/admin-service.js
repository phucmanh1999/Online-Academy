const Administrator = require("../Model/Administrator");

const createAdministrator = async obj => {
    return await Administrator.create(obj);
}

module.exports = {
    createAdministrator,
}
