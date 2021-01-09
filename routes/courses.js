const express = require("express")
const {getAllCategories} = require("../services/category-service");
const {getCourse} = require("../services/course-service");
const router = express.Router()

router.get('/:id', async (req, res) => {
    getCourse({id: req.params.id}).then(async course => {
        res.json({
            payload: course,
            categories: await getAllCategories()
        })
    })
})

router.get("/", (req, res) => {
    res.render("user/course")
})
module.exports = router
