const express = require("express")
const {getTopBuyCourseByCategoryId} = require("../services/course-service");
const {getAllCategories} = require("../services/category-service");
const {getCourse} = require("../services/course-service");
const router = express.Router()

router.get('/:id', async (req, res) => {
    getCourse({id: req.params.id}).then(async course => {
        res.render("user/course",{
            user: req.user ? req.user : undefined,
            payload: course,
            categories: await getAllCategories(),
            topBuyCourses: await getTopBuyCourseByCategoryId(course.Category.id)
        })
    })
})

module.exports = router
