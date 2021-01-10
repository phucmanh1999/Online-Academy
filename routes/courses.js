const express = require("express")
const {getTopBuyCourseByCategoryId} = require("../services/course-service");
const {getAllCategories} = require("../services/category-service");
const {getCourse} = require("../services/course-service");
const router = express.Router()

router.get('/:id', async (req, res) => {
    getCourse({id: req.params.id}).then(async course => {
        res.send({
            user: req.user ? req.user : undefined,
            payload: course,
            categories: await getAllCategories()
        })

    })
})

module.exports = router
