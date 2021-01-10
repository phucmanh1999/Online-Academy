const { render } = require("ejs");
const app = require("express")
const {getAllCategories} = require("../services/category-service");
const {getCourse} = require("../services/course-service");

const router = app.Router()

// let category = [
//     {
//       id:"1",
//       categoryName: "Web"
//     },
//     {
//       id:"2",
//       categoryName: "Mobile"
//     }
// ]

// get render page
router.get('/addCourse', async (req,res) => {
  res.render("instructor/addCourse",await {category})
});

router.get('/addChapter', async (req,res) => {
  // res.render("instructor/addChapter", await getAllCategories())
  res.render("instructor/addChapter",{course_id:req.query.course_id})
})


router.get('/addLesson', async (req,res) => {
  // res.render("instructor/addLesson",await getAllCategories())
  res.render("instructor/addLesson")
})

//edit
router.get('/editCourse', async (req,res) => {
  // res.render("instructor/addLesson",await getAllCategories())
  let category = await getAllCategories();
  let course = await getCourse({id: req.query.id})
  console.log("course data: " + JSON.stringify(course)) 
  // console.log("full description: " + course.full_description) 
  res.render("instructor/editCourse",  {category,course})
})

router.post('/editCourse', (req,res) => {
  console.log(req.body)
  // if (!req.file) {
  //   res.status(401).json({error: 'Please provide an image'});
  // }
  res.send(req.body) 

});
//post form
router.post('/addCourse', (req,res) => {
  console.log(req.body)
  // if (!req.file) {
  //   res.status(401).json({error: 'Please provide an image'});
  // }
  res.send(req.body)

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
