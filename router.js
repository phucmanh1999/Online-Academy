const app = require("express")
const router = app.Router()
// const bodyParser = require('body-parser');
// router.use(bodyParser);
let data = [
  {
    id: "1",
    title: "Artificial Intelligence A-Z™: Learn How To Build An AI",
    imgPath: "/assets/images/Course3.jpg",
    lectures: "This is the lectures of courses and have many word",
    star: 4.3,
    price: "$9.99",
    view: "123"
  },
  {
    id: "1",
    title: "Artificial Intelligence A-Z™: Learn How To Build An AI",
    imgPath: "/assets/images/Course4.jpg",
    lectures: "This is the lectures of courses and have many word",
    star: 3.5,
    price: "$9.99",
    view: "12345"
  },
  {
    id: "1",
    title: "Artificial Intelligence A-Z™: Learn How To Build An AI",
    imgPath: "/assets/images/Course5.jpg",
    lectures: "This is the lectures of courses and have many word",
    star: 5,
    price: "$9.99",
    view: "123"
  },
  {
    id: "1",
    title: "Artificial Intelligence A-Z™: Learn How To Build An AI",
    imgPath: "/assets/images/Course6.jpg",
    lectures: "This is the lectures of courses and have many word",
    star: 2.4,
    price: "$9.99",
    view: "123"
  },
  {
    id: "1",
    title: "Artificial Intelligence A-Z™: Learn How To Build An AI",
    imgPath: "/assets/images/Course7.jpg",
    lectures: "This is the lectures of courses and have many word",
    star: 4,
    price: "$9.99",
    view: "123"
  }
]

router.get('/', (req, res) => {
  res.render("user/index", {data});
})

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

router.get('/instructor/addCourse', (req,res) => {
  res.render("instructor/addCourse",{category})
})
router.get('/instructor/addChapter', (req,res) => {
  res.render("instructor/addChapter",{category})
})
router.get('/instructor/addLesson', (req,res) => {
  res.render("instructor/addLesson",{category})
})

// router.post('/addCourse', (req,res) => {
//   console.log("req: ")
//   console.log(req.body)
// })


module.exports = router
