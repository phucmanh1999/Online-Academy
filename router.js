const app = require("express")
const router = app.Router()

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
  res.render("index", {data});
})

module.exports = router
