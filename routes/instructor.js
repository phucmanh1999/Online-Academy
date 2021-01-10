const { render } = require("ejs");
const app = require("express")
const {getAllCategories} = require("../services/category-service");
const router = app.Router()
const bodyParser = require("body-parser")
const {getCategory} = require("../services/category-service");
const {createCourse} = require("../services/course-service");
const urlencodedParser = bodyParser.urlencoded({extended: false})

// get render page
router.get('/addCourse', async (req,res) => {
  console.log(await JSON.stringify(req.user))
  const category = await getAllCategories();
  res.render("instructor/addCourse", {category})
});

router.get('/addChapter', async (req,res) => {
  // res.render("instructor/addChapter", await getAllCategories())
  res.render("instructor/addChapter")
})


router.get('/addLesson', async (req,res) => {
  // res.render("instructor/addLesson",await getAllCategories())
  res.render("instructor/addLesson")
})

//post form
router.post('/addCourse', urlencodedParser, async (req,res) => {
  const imageFile = req.files.image
  const imgPath = "/assets/images/" + imageFile.name
  const instructorIdTemp = 5
  const categoryId = await getCategory({category_name: req.body.category}).then(ca => {
    return ca.id
  })
  createCourse({
    course_name : req.body.courseName,
    img_path: imgPath,
    short_description: req.body.shortDescription,
    full_description: req.body.fullDescription,
    rating_number: 0,
    enroll_number: 0,
    chapter_number: 0,
    view_number: 0,
    price: req.body.price,
    concurrency: req.body.concurrency,
    course_language: 'vi',
    course_state: 'U',
    created_at: new Date(),
    category_id: categoryId,
    instructor_id: instructorIdTemp
  }).then(() => {
    imageFile.mv("./public/assets/images/" + imageFile.name)
    res.status(200).json({msg: "ok"})
  })
  res.status(400)
});

router.post('/addChapter', (req,res) => {
  console.log(req.body)
  res.send(req.body)
});

router.post('/addLesson', (req,res) => {
  console.log(req.body)
  if (!req.file) {
    res.status(401).json({error: 'Please provide an image'});
  }
  res.send(req.body)
});

module.exports = router
