const RootCategory = require("../Model/RootCategory");
const Category = require("../Model/Category");
const getAllRootCategory = async () => {
    const categories = await  RootCategory.findAll({
        include: {
            model: Category
        }
    });
    return categories.map(ca => ca.toJSON());
}
const getRootCategory = async obj => {
    return RootCategory.findOne({
        where: obj
    })
}
module.exports = {
    getAllRootCategory,
    getRootCategory
}
