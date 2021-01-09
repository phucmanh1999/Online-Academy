const { render } = require("ejs");
const app = require("express")
const {getAllCategories} = require("../services/category-service");
const router = app.Router()

let category = [
    {
      id:"1",
      categoryName: "Web"
    },
    {
      id:"2",
      categoryName: "Mobile"
    }
  ]

// get render page
router.get('/addCourse', async (req,res) => {
  res.render("instructor/addCourse",await {category})
  
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
router.post('/addCourse', (req,res) => {
  console.log(req.body)
  if (!req.file) {
    res.status(401).json({error: 'Please provide an image'});
  }
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
