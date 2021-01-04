const Course = require("./Course");
const Category = require("./Category");
const Instructor = require("./Instructor");

Course.belongsTo(Category, {foreignKey: 'categoryid'})
Category.hasMany(Course)

