const Administrator = require("../Model/Administrator");

const createAdministrator = async obj => {
    return await Administrator.create(obj);
}

const updateAdministrator = (_id, obj) => {
    return Administrator.update(
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
    createAdministrator,
    updateAdministrator
}
