const Course = require("./Course");
const Category = require("./Category");
const Instructor = require("./Instructor");

Course.belongsTo(Category, {foreignKey: 'category_id'})
Category.hasMany(Course, {foreignKey: 'id'})

