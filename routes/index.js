const express = require("express")
const Course = require("../Model/Course");
const Category = require("../Model/Category");
const Instructor = require("../Model/Instructor");
const router = express.Router()

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
    // res.render("index",{data})
    Category.findAll({
        include: [{
            model: Course
        }]
    }).then((ca) => {
        console.log(ca)
    })
    //     .then((courses) => {
    //     console.log(courses)
    //     Category.findAll(
    //         {
    //             include: [{
    //                 model: Course,
    //             }]
    //         }).then((categories) => {
    //         console.log(categories)
    //         res.render("index", {data});
    //     })
    // })
})


module.exports = router
