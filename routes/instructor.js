const {render} = require("ejs");
const app = require("express")
const {getAllCategories} = require("../services/category-service");
const {getCourse} = require("../services/course-service");

const router = app.Router()
const bodyParser = require("body-parser")
const {updateChapter} = require("../services/chapter-service");
const {getChapter} = require("../services/chapter-service");
const {createLesson} = require("../services/lesson-service");
const {updateCourse} = require("../services/course-service");
const {createChapter} = require("../services/chapter-service");
const {getCourseLessInfo} = require("../services/course-service");
const {ROLE_INSTRUCTOR} = require("../constant/constant");
const {getCategory} = require("../services/category-service");
const {createCourse} = require("../services/course-service");
const urlencodedParser = bodyParser.urlencoded({extended: false})

// get render page
router.get('/addCourse', async (req, res) => {
    const category = await getAllCategories();
    res.render("instructor/addCourse", {category})
});

router.get('/addChapter', async (req, res) => {
    // res.render("instructor/addChapter", await getAllCategories())
    res.render("instructor/addChapter", {course_id: req.query.course_id})
})


router.get('/addLesson', async (req, res) => {
    // res.render("instructor/addLesson",await getAllCategories())
    res.render("instructor/addLesson", {chapter_id: req.query.chapter_id})
})

//edit
router.get('/editCourse', async (req, res) => {
    // res.render("instructor/addLesson",await getAllCategories())
    let category = await getAllCategories();
    let course = await getCourse({id: req.query.id})
    console.log("course data: " + JSON.stringify(course))
    // console.log("full description: " + course.full_description)
    res.render("instructor/editCourse", {category, course})
})

router.post('/editCourse', (req, res) => {
    console.log(req.body)
    // if (!req.file) {
    //   res.status(401).json({error: 'Please provide an image'});
    // }
    res.send(req.body)

});
//post form
router.post('/addCourse', urlencodedParser, async (req, res) => {
    console.log(await JSON.stringify(req.user))
    if (req.user) {
        if (req.user.type === ROLE_INSTRUCTOR) {
            let imageFile = null
            let imgPath = "/assets/images/default.jpg"
            if (req.files) {
                imageFile = req.files.image
                imgPath = "/assets/images/" + imageFile.name
            }
            const instructorId = req.user.role_id
            const categoryId = await getCategory({category_name: req.body.category}).then(ca => {
                return ca.id
            })
            // getCourseLessInfo({})
            createCourse({
                course_name: req.body.courseName,
                img_path: imgPath,
                short_description: req.body.shortDescription,
                full_description: req.body.fullDescription,
                rating_number: 0,
                enroll_number: 0,
                chapter_number: 0,
                view_number: 0,
                rating: 0,
                price: req.body.price + 0,
                concurrency: req.body.concurrency,
                course_language: 'vi',
                course_state: 'U',
                created_at: new Date(),
                category_id: categoryId,
                instructor_id: instructorId
            }).then(() => {
                if (imageFile)
                    imageFile.mv("./public/assets/images/" + imageFile.name)
                res.json({msg: "ok"})
            }).catch((err) => {
                console.log(err)
                res.json({msg: "Unknow error"})
            })
        } else {
            res.json({msg: "Unauthorized"})
        }
    } else {
        res.json({msg: "Unauthorized"})
    }
});

// router.post('/addLesson', (req, res) => {
//         console.log(req.body)
//         res.send(req.body)
//         // const user = req.user ? req.user : undefined
//         // const course_id = req.params.courseId
//         // if (user && user.type === ROLE_INSTRUCTOR) {
//         //     const instructor_id = user.role_id
//         //     createChapter({
//         //         course_id: course_id,
//         //         lesson_number: 0,
//         //         short_description: req.body.shortDescription,
//         //         chapter_name: req.body.chapterName,
//         //         created_at: new Date()
//         //     }).then(() => {
//         //         res.json({msg: 'ok'})
//         //     }).catch((err) => {
//         //         console.log(err)
//         //         res.json({msg: 'Unknown error'})
//         //     })
//         // } else {
//         //     res.json({msg: "Unauthorized"})
//         // }
//     }
// );

router.post('/addChapter', (req, res) => {
    const user = req.user ? req.user : undefined
    const course_id = req.query.course_id
    if (user && user.type === ROLE_INSTRUCTOR) {
        createChapter({
            course_id: course_id,
            lesson_number: 0,
            short_description: req.body.shortDescription,
            chapter_name: req.body.chapterName,
            created_at: new Date()
        }).then(() => {
            getCourse({id: course_id}).then(course => {
                const chapterNum = course.chapter_number ? course.chapter_number : 0
                updateCourse(course_id, {chapter_number : chapterNum+1})
                res.json({msg: 'ok'})
            })
        }).catch((err) => {
            console.log(err)
            res.json({msg: 'Unknown error'})
        })
    } else {
        res.json({msg: "Unauthorized"})
    }
});

router.post('/addLesson', (req, res) => {
    console.log(req.body)
    const user = req.user ? req.user : undefined
    const chapter_id = req.query.chapter_id
    let videoFile = null
    let vidPath = null
    if (user && user.type === ROLE_INSTRUCTOR) {
        if (req.files) {
            videoFile = req.files.video
            vidPath = "/assets/video/" + videoFile.name
        }
        createLesson({
            chapter_id: chapter_id,
            is_free: false,
            short_description: req.body.shortDescription,
            full_description: req.body.fullDescription,
            lesson_name: req.body.lessonName,
            created_at: new Date(),
            video_url: vidPath
        }).then(() => {
            getChapter({id: chapter_id}).then(chapter => {
                const lessonNum = chapter.lesson_number ? chapter.lesson_number : 0
                updateChapter(chapter_id, {lesson_number : lessonNum+1})
            })
            if (videoFile)
                videoFile.mv("./public" + vidPath)
            res.json({msg: "ok"})
        }).catch((err) => {
            console.log(err)
            res.json({msg: 'Unknown error'})
        })
    } else {
        res.json({msg: "Unauthorized"})
    }
});

module.exports = router
