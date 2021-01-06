const express = require("express")
const {getAllCategories} = require("../Services/category-service");
const {getCourse} = require("../Services/course-service");
const router = express.Router()

router.get('/:id', async (req, res) => {
    getCourse({id: req.params.id}).then(async course => {
        res.json({
            payload: course,
            categories: await getAllCategories()
        })
    })
})

module.exports = router
