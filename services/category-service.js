const Category = require("../Model/Category");
const Course = require("../Model/Course");
const getAllCategories = async () => {
    const categories = await  Category.findAll({
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
