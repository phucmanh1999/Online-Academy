const Course = require("./Course");
const Category = require("./Category");
const Instructor = require("./Instructor");
const User = require("./User");
const Role = require("./Role");

Course.belongsTo(Category, {foreignKey: 'category_id'})
Category.hasMany(Course, {foreignKey: 'id'})
Instructor.hasMany(Course, {foreignKey: 'id'})
Course.belongsTo(Instructor, {foreignKey: 'instructor_id'})
User.belongsTo(Role, {foreignKey: 'role_id'})
Role.hasMany(User, {foreignKey: 'id'})
