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
const createCategory = obj => {
    return Category.create(obj);
}
const updateCategory = (_id, obj) => {
    return Category.update(
        obj
        ,
        {
            where: {
                id: _id
            },
        }
    )
}

const deleteCategory = (obj) => {
    Category.destroy({
        where: obj
    })
}

const checkCategoryHaveCourse = async (id) => {
    const course = await Course.findAndCountAll({
        where: {
            category_id: id,
        },
        limit: 1
    })
    return course.count > 0
}

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    checkCategoryHaveCourse,
    deleteCategory
}
