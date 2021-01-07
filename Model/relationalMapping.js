const Course = require("./Course");
const Category = require("./Category");
const Instructor = require("./Instructor");
const User = require("./User");
const Role = require("./Role");
const Chapter = require("./Chapter");
const Lesson = require("./Lesson");
const Student = require("./Student");
const Administrator = require("./Administrator");
const WatchList = require("./WatchList");
const CourseBought = require("./CourseBought");
const Review = require("./Review");

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
User.hasOne(Student, {foreignKey: 'id'})
Student.belongsTo(User, {foreignKey: 'user_id'})
User.hasOne(Administrator, {foreignKey: 'id'})
Administrator.belongsTo(User, {foreignKey: 'user_id'})
Student.hasMany(WatchList, {foreignKey: 'id'})
Course.hasMany(WatchList, {foreignKey: 'id'})
WatchList.belongsTo(Student, {foreignKey: 'student_id'})
WatchList.belongsTo(Course, {foreignKey: 'course_id'})
Student.hasMany(CourseBought, {foreignKey: 'id'})
Course.hasMany(CourseBought, {foreignKey: 'id'})
CourseBought.belongsTo(Student, {foreignKey: 'student_id'})
CourseBought.belongsTo(Course, {foreignKey: 'course_id'})
Review.belongsTo(Course, {foreignKey: 'course_id'})
Review.belongsTo(Student, {foreignKey: 'student_id'})
Course.hasMany(Review, {foreignKey: 'id'})
Student.hasMany(Review, {foreignKey: 'id'})
