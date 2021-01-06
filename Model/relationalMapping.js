const Course = require("./Course");
const Category = require("./Category");
const Instructor = require("./Instructor");
const User = require("./User");
const Role = require("./Role");
const Chapter = require("./Chapter");
const Lesson = require("./Lesson");

Category.hasMany(Course, {foreignKey: 'id'})
Instructor.hasMany(Course, {foreignKey: 'id'})
Role.hasMany(User, {foreignKey: 'id'})
Course.hasMany(Chapter, {foreignKey: 'id'})
Chapter.hasMany(Lesson, {foreignKey: 'id'})
Course.belongsTo(Instructor, {foreignKey: 'instructor_id'})
User.belongsTo(Role, {foreignKey: 'role_id'})
Chapter.belongsTo(Course, {foreignKey: 'course_id'})
Lesson.belongsTo(Chapter, {foreignKey: 'chapter_id'})
Course.belongsTo(Category, {foreignKey: 'category_id'})
User.hasOne(Instructor, {foreignKey: 'id'})
Instructor.belongsTo(User, {foreignKey: 'user_id'})
