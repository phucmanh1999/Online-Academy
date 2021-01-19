const Category = require("../Model/Category");
const Course = require("../Model/Course");
const RootCategory = require("../Model/RootCategory");
const getAllCategories = async () => {
    const categories = await  Category.findAll({
        include: {
            model: RootCategory,
            attributes: ['root_category_name']
        }
    });
    return categories.map(ca => ca.toJSON());
}
const getCategory = async obj => {
    return Category.findOne({
        where: obj
    })
}
module.exports = {
    getAllCategories,
    getCategory
}
