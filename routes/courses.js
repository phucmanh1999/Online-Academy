const express = require("express")
const {getTopBuyCourseByCategoryId} = require("../services/course-service");
const {getAllCategories} = require("../services/category-service");
const {getCourse} = require("../services/course-service");
const router = express.Router()

router.get('/:id', async (req, res) => {
    getCourse({id: req.params.id}).then(async course => {
        // res.render("user/course",{course})
        res.send(
            {
                payload: course,
                topBuyCourses: await getTopBuyCourseByCategoryId(course.Category.id)
            }
            )
    })
})

router.get("/", (req, res) => {
    res.render("user/course")
})
module.exports = router
