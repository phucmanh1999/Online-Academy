const express = require("express")
const {getCourse} = require("../Services/course-service");
const router = express.Router()

router.get('/:id', async (req, res) => {
    getCourse({id: req.params.id}).then(course => {
        res.json(course)
    })
})

module.exports = router
