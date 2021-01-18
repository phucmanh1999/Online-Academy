const {render} = require("ejs");
const app = require("express")
const {getAllCategories} = require("../services/category-service");
const {getCourse} = require("../services/course-service");

const router = app.Router()
const bodyParser = require("body-parser")
const {getAllRootCategory} = require("../services/root-category-service");
const {getInstructor} = require("../services/instructor-service");
const {getAllCoursesBy} = require("../services/course-service");
const {updateInstructor} = require("../services/instructor-service");
const {updateUser} = require("../services/user-service");
const {deleteChapter} = require("../services/chapter-service");
const {deleteLessonByChapterID} = require("../services/lesson-service");
const {deleteLesson} = require("../services/lesson-service");
const {updateLesson} = require("../services/lesson-service");
const {updateChapter} = require("../services/chapter-service");
const {getChapter} = require("../services/chapter-service");
const {createLesson} = require("../services/lesson-service");
const {updateCourse} = require("../services/course-service");
const {createChapter} = require("../services/chapter-service");
const {getCourseLessInfo} = require("../services/course-service");
const {ROLE_INSTRUCTOR} = require("../constant/constant");
const {getCategory} = require("../services/category-service");
const {createCourse} = require("../services/course-service");
const {getUser} = require("../services/user-service");

const urlencodedParser = bodyParser.urlencoded({extended: false})

router.get('/', async (req, res) => {
    const userI = req.user ? req.user : undefined
    if (userI && userI.type === ROLE_INSTRUCTOR) {
        const user = await getUser({id: userI.id})
        let category = await getAllCategories();
        const rootCategory = await getAllRootCategory();
        const courses = await getAllCoursesBy({instructor_id: user.role_id})
        res.json( {category, courses, user, rootCategory})
    } else {
        res.redirect("/login")
    }
})

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

    const user = req.user ? req.user : undefined
    let course = await getCourse({id: req.query.id})
    // console.log("course data: " + JSON.stringify(course))
    // console.log("full description: " + course.full_description)
    res.render("instructor/editCourse", {category, course, user})
})

router.get('/profile', async (req,res) =>{
    const userInf = req.user ? req.user : undefined
    if (userInf && userInf.type === ROLE_INSTRUCTOR) {
        let categories = await getAllCategories();
        let user = await getUser({id: userInf.id});
        res.render("instructor/profile",{categories,user})
    } else {
        res.redirect("/login")
    }
})

router.post('/profile', (req, res) => {
    console.log(req.body)
    const user = req.user ? req.user : undefined
    const responseUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        birthday: req.body.birthday,
        email: req.body.email,
        job_title: req.body.job_title,
        address: req.body.address,
    }
    let imageFile = null
    let imgPath = null
    if (user && user.type === ROLE_INSTRUCTOR) {
        if (req.files) {
            imageFile = req.files.image
            imgPath = "/assets/image/" + imageFile.name
            responseUser.avatar_url = imgPath
        }
        updateUser(user.id, responseUser).then(() => {
            if (imageFile)
                imageFile.mv("./public" + imgPath)
            updateInstructor(user.role_id, {
                job_title: req.body.job_title,
                short_description: req.body.short_description,
                full_description: req.body.full_description
            }).then(() => {
                res.json({msg: "ok"})
            })
        }).catch((err) => {
            res.redirect("/login")
        })
    } else {
        res.redirect("/login")
    }

})

router.delete('/deleteChapter', (req, res) => {
    const user = req.user ? req.user : undefined
    if (user && user.type === ROLE_INSTRUCTOR) {
        res.send("delete chapter: " + req.query.chapter_id)
        deleteLessonByChapterID(req.query.chapter_id).then(() => {
            deleteChapter(req.query.chapter_id).then(() => {
                res.send('delete success')
            })
        }).catch(() => res.send('unknown error'))
    } else {
        res.redirect("/login")
    }
})

router.delete('/deleteLesson', (req, res) => {
    const user = req.user ? req.user : undefined
    if (user && user.type === ROLE_INSTRUCTOR) {
        deleteLesson(req.query.lesson_id).then(() => {
                res.send('delete success')
            }
        ).catch(() => res.send('unknown error'))
    } else {
        res.redirect("/login")
    }
})

router.post('/editLesson', (req, res) => {
    const user = req.user ? req.user : undefined
    const lesson_id = req.query.lesson_id
    const response = {
        lesson_name: req.body.lessonName,
        short_description: req.body.shortDescription,
        full_description: req.body.fullDescription
    }
    let videoFile = null
    let vidPath = null
    if (user && user.type === ROLE_INSTRUCTOR) {
        if (req.files) {
            videoFile = req.files.video
            vidPath = "/assets/video/" + videoFile.name
            response.video_url = vidPath
        }
        updateLesson(lesson_id, response).then(() => {
            if (videoFile)
                videoFile.mv("./public" + vidPath)
            res.json({msg: "ok"})
        }).catch((err) => {
            res.redirect("/login")
        })
    } else {
        res.redirect("/login")
    }
})

router.post('/editCourse', async (req, res) => {
    if (req.user) {
        if (req.user.type === ROLE_INSTRUCTOR) {
            let imgPath = null
            let imageFile = null
            if (req.files) {
                imageFile = req.files.image
                imgPath = "/assets/images/" + imageFile.name
            }
            const categoryId = await getCategory({category_name: req.body.category}).then(ca => {
                return ca.id
            })

            const response = {
                course_name: req.body.courseName,
                short_description: req.body.shortDescription,
                full_description: req.body.fullDescription,
                price: req.body.price + 0,
                concurrency: req.body.concurrency ? req.body.concurrency : "USD",
                updated_at: new Date(),
                category_id: categoryId,
            }

            if (imgPath) {
                response.img_path = imgPath
            }

            updateCourse(req.query.id, response).then(() => {
                if (imageFile)
                    imageFile.mv("./public/assets/images/" + imageFile.name)
                res.json({msg: "ok"})
            }).catch((err) => {
                console.log(err)
                res.json({msg: "Unknow error"})
            })
        } else {
            console.log("Unauthorized")
            res.redirect("/login")
        }
    } else {
        console.log("Unauthorized")
        res.redirect("/login")
    }
});
//post form
router.post('/addCourse', urlencodedParser, async (req, res) => {
    console.log(await JSON.stringify(req.user))
    console.log(req.body)
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
                getInstructor({id: instructorId}).then(ins => {
                    updateInstructor(instructorId, {
                        course_number: ins.course_number ? 1 : ins.course_number + 1
                    })
                })
                res.json({msg: "ok"})
            }).catch((err) => {
                console.log(err)
                res.json({msg: "Unknow error"})
            })
        } else {
            res.redirect("/login")
        }
    } else {
        res.redirect("/login")
    }
});

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
                updateCourse(course_id, {chapter_number: chapterNum + 1})
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
    console.log(req.files.video)
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
                updateChapter(chapter_id, {lesson_number: lessonNum + 1})
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
