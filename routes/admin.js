const router = require("./admin");

const {render} = require("ejs");
const app = require("express")
const {getAllCategories} = require("../services/category-service");
const {getCourse} = require("../services/course-service");

const router = app.Router()
const bodyParser = require("body-parser")
const {updateChapter} = require("../services/chapter-service");
const {getChapter} = require("../services/chapter-service");
const {createLesson} = require("../services/lesson-service");
const {updateCourse} = require("../services/course-service");
const {createChapter} = require("../services/chapter-service");
const {getCourseLessInfo} = require("../services/course-service");
const {ROLE_INSTRUCTOR} = require("../constant/constant");
const {getCategory} = require("../services/category-service");
const {createCourse} = require("../services/course-service");
const urlencodedParser = bodyParser.urlencoded({extended: false})

router.get('/', (req,res) => {
    res.render('admin/index')
})

module.exports = router
