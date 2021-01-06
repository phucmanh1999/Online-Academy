const Category = require("../Model/Category");
const Course = require("../Model/Course");
const getAllCategories = async () => {
    const categories = await  Category.findAll({
        include: [{
            model: Course,
            limit: 5,
        }]
    });
    return categories.map(c => c.toJSON());
}

module.exports = {
    getAllCategories,
}
