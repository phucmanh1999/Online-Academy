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
const Cart = require("./Cart");

Category.hasMany(Course, {foreignKey: 'category_id'})
Instructor.hasMany(Course, {foreignKey: 'instructor_id'})
Role.hasMany(User, {foreignKey: 'role_id'})
Course.hasMany(Chapter, {foreignKey: 'course_id'})
Chapter.hasMany(Lesson, {foreignKey: 'chapter_id'})
Course.belongsTo(Instructor, {foreignKey: 'instructor_id'})
User.belongsTo(Role, {foreignKey: 'role_id'})
Chapter.belongsTo(Course, {foreignKey: 'course_id'})
Lesson.belongsTo(Chapter, {foreignKey: 'chapter_id'})
Course.belongsTo(Category, {foreignKey: 'category_id'})
User.hasOne(Instructor, {foreignKey: 'user_id'})
Instructor.belongsTo(User, {foreignKey: 'user_id'})
User.hasOne(Student, {foreignKey: 'user_id'})
Student.belongsTo(User, {foreignKey: 'user_id'})
User.hasOne(Administrator, {foreignKey: 'user_id'})
Administrator.belongsTo(User, {foreignKey: 'user_id'})
Student.hasMany(WatchList, {foreignKey: 'student_id'})
Course.hasMany(WatchList, {foreignKey: 'course_id'})
WatchList.belongsTo(Student, {foreignKey: 'student_id'})
WatchList.belongsTo(Course, {foreignKey: 'course_id'})
Student.hasMany(CourseBought, {foreignKey: 'student_id'})
Course.hasMany(CourseBought, {foreignKey: 'course_id'})
CourseBought.belongsTo(Student, {foreignKey: 'student_id'})
CourseBought.belongsTo(Course, {foreignKey: 'course_id'})
Course.hasMany(Review, {foreignKey: 'course_id'})
Student.hasMany(Review, {foreignKey: 'student_id'})
Review.belongsTo(Course, {foreignKey: 'course_id'})
Review.belongsTo(Student, {foreignKey: 'student_id'})
Cart.belongsTo(Student, {foreignKey: 'student_id'})
Cart.belongsTo(Course, {foreignKey: 'course_id'})
Student.hasMany(Cart, {foreignKey: 'student_id'})
Course.hasMany(Cart, {foreignKey: 'course_id'})
