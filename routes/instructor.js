const {render} = require("ejs");
const app = require("express")
const {getAllCategories} = require("../services/category-service");
const {getCourse} = require("../services/course-service");

const router = app.Router()
const bodyParser = require("body-parser")
const {getCourseLessInfo} = require("../services/course-service");
const {ROLE_INSTRUCTOR} = require("../constant/constant");
const {getCategory} = require("../services/category-service");
const {createCourse} = require("../services/course-service");
const urlencodedParser = bodyParser.urlencoded({extended: false})

// get render page
router.get('/addCourse', async (req, res) => {
    const category = await getAllCategories();
    res.render("instructor/addCourse", {category})
});

router.get('/addChapter', async (req, res) => {
    // res.render("instructor/addChapter", await getAllCategories())
    res.render("instructor/addChapter", {course_id: req.query.course_id})
})


router.get('/addLesson', async (req,res) => {
  // res.render("instructor/addLesson",await getAllCategories())
  res.render("instructor/addLesson",{chapter_id:req.query.chapter_id})
})

//edit
router.get('/editCourse', async (req, res) => {
    // res.render("instructor/addLesson",await getAllCategories())
    let category = await getAllCategories();
    let course = await getCourse({id: req.query.id})
    console.log("course data: " + JSON.stringify(course))
    // console.log("full description: " + course.full_description)
    res.render("instructor/editCourse", {category, course})
})

router.post('/editCourse', (req,res) => {
  console.log(req.body)
  // if (!req.file) {
  //   res.status(401).json({error: 'Please provide an image'});
  // }
  res.send(req.body)

});
//post form
router.post('/addCourse', urlencodedParser, async (req, res) => {
    console.log(await JSON.stringify(req.user))
    if (req.user) {
        if (req.user.type === ROLE_INSTRUCTOR) {
            let imageFile = null
            let imgPath = "/assets/images/default.jpg"
            if (req.files){
                imageFile = req.files.image
                imgPath = "/assets/images/" + imageFile.name
            }
            const instructorId = req.user.role_id
            const categoryId = await getCategory({category_name: req.body.category}).then(ca => {
                return ca.id
            })
            getCourseLessInfo({

            })
            createCourse({
                course_name: req.body.courseName,
                img_path: imgPath,
                short_description: req.body.shortDescription,
                full_description: req.body.fullDescription,
                rating_number: 0,
                enroll_number: 0,
                chapter_number: 0,
                view_number: 0,
                price: req.body.price + 0,
                concurrency: req.body.concurrency,
                course_language: 'vi',
                course_state: 'U',
                created_at: new Date(),
                category_id: categoryId,
                instructor_id: instructorId
            }).then(() => {
                if (imageFile)
                    imageFile.mv("./public/assets/images/" + imageFile.name)
                res.status(200).json({msg: "ok"})
            }).catch((err) => {
                console.log(err)
                res.json({msg: "Unknow error"})
            })
        } else {
            res.json({msg: "Unauthorized"})
        }
    } else {
        res.json({msg: "Unauthorized"})
    }
});
router.post('/addLesson', (req,res) => {
  console.log(req.body)
  res.send(req.body)
});





router.post('/addChapter', (req, res) => {
    console.log(req.body)
    res.send(req.body)
});

router.post('/addLesson', (req, res) => {
    console.log(req.body)
    if (!req.file) {
        res.json({error: 'Please provide an image'});
    }
    res.send(req.body)
});

module.exports = router
