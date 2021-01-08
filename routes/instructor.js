const app = require("express")
const {getAllCategories} = require("../services/category-service");
const router = app.Router()

router.get('/addCourse',  async (req,res) => {
  res.render("instructor/addCourse",await getAllCategories)
})
router.get('/addChapter', async (req,res) => {
  res.render("instructor/addChapter",await getAllCategories)
})
router.get('/addLesson', async (req,res) => {
  res.render("instructor/addLesson",await getAllCategories)
})

module.exports = router
