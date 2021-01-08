const app = require("express")
const router = app.Router()

router.get('/instructor/addCourse', (req,res) => {
  res.render("instructor/addCourse",{category})
})
router.get('/instructor/addChapter', (req,res) => {
  res.render("instructor/addChapter",{category})
})
router.get('/instructor/addLesson', (req,res) => {
  res.render("instructor/addLesson",{category})
})




module.exports = router
