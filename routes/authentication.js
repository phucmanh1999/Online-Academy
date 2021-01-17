const express = require("express")
const router = express.Router()
const UserService = require('../services/user-service')
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({extended: false})
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require("bcrypt");
const {getUserCartNumber} = require("../services/user-service");
const {deleteUser} = require("../services/user-service");
const {createAdministrator} = require("../services/admin-service");
const {createInstructor} = require("../services/instructor-service");
const {createStudent} = require("../services/student-service");
const {getRole} = require("../services/role-service");
const {ROLE_ADMIN} = require("../constant/constant");
const {ROLE_INSTRUCTOR} = require("../constant/constant");
const {ROLE_STUDENT} = require("../constant/constant");

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


router.post('/user', (req, res) => {
    UserService.getUser({
        id: 1,
    }).then(u => {
        res.json(u);
    })
})

router.post('/signup', urlencodedParser, (req, res) => {
    const user = {
        user_name: req.body.name,
        user_password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        avatar_url: "/assets/images/default_avt.png",
        // gender: req.body.gender,
        // birthday: req.body.birthday,
        // avatar_url: req.body.avatar,
        // user_address: req.body.address,
        created_at: new Date(),
    }

    const type = req.body.type ? req.body.type : ROLE_STUDENT

    // if (emailIsValid(user.email)){
    //     console.log(user.email)
    //     res.status(400).json({'msg': 'Email not valid'})
    //     return
    // }

    UserService.getUser({email: user.email}).then (user => {
        if (user) {
            res.json({'msg': 'Email existed'})
            return
        }
    })

    getRole({role_name: type}).then( role => {
        // console.log(role)
        // console.log(user)
        UserService.createUser({...user, role_id: role.id}).then(user_created => {
            // console.log(user_created)
            if (type === ROLE_INSTRUCTOR) {
                const instructor = {
                    job_title: req.body.job_title,
                    short_description: req.body.short_description,
                    full_description: req.body.full_description,
                    user_id: user_created.id
                }
                // console.log(instructor)
                createInstructor(instructor).then(
                    res.redirect("/login")
                ).catch(() => {
                    deleteUser(user_created)
                })
            } else if (type === ROLE_STUDENT) {
                const student = {
                    user_id: user_created.id
                }
                createStudent(student).then(
                    res.redirect('/login')
                ).catch(() => {
                    deleteUser(user_created)
                })
            } else if (type === ROLE_ADMIN) {
                const admin = {
                    user_id: user_created.id
                }
                createAdministrator(admin).then(
                    res.json({'msg': 'Create account sucessful'})
                ).catch(() => {
                    deleteUser(user_created)
                })
            }
        }).catch(() => {
            res.json({'msg': 'Cannot create account, please check again'})
        })
    })
})

router.post('/login', urlencodedParser, (req, res)=>{
    const email = req.body.email
    const password = req.body.password
    if(!email || !password) {
        // console.log(req.body)
        res.json({'msg': 'Email or password must not be empty'})
    }

    // if (!validateEmail(email)){
    //     res.status(400).json({'msg': 'Email not valid'})
    // }

    UserService.getUser({
        email: email
    }).then( async (result) =>{
        if(result) {
            if (await UserService.isValidPassword(result, password)){
                const data = result
                delete data.user_password
                // console.log("data", data)
                const role_id = data.Student ? data.Student.id : data.Instructor ? data.Instructor.id : data.Administrator ? data.Administrator.id : null
                const cartCount = 0;
                const payload = { id: data.id, username: data.user_name, type: data.Role.role_name , role_id: role_id, cartCount: cartCount}
                if (data.is_active){
                    if (data.Role.role_name === ROLE_STUDENT) {
                        payload.cartCount = await getUserCartNumber(data.Student.id)
                        console.log("payload ís: " +await JSON.stringify(payload))
                        const accessToken = jwt.sign(payload, 'secret')
                        res.cookie('token', accessToken, {expires: new Date(Date.now()+60*60*1000),httpOnly: true})
                        res.json({"msg": "Login success", "previousPage": req.session.previousPage, "role": data.Role.role_name})
                    }
                    else if (data.Role.role_name === ROLE_INSTRUCTOR) {
                        const accessToken = jwt.sign(payload, 'secret')
                        res.cookie('token', accessToken, {expires: new Date(Date.now()+60*60*1000),httpOnly: true})
                        res.json({"msg": "Login success", "previousPage": req.session.previousPage, "role": data.Role.role_name})
                    }
                    else if (data.Role.role_name === ROLE_ADMIN) {
                        const accessToken = jwt.sign(payload, 'secret')
                        res.cookie('token', accessToken, {expires: new Date(Date.now()+60*60*1000),httpOnly: true})
                        res.json({"msg": "Login success", "previousPage": req.session.previousPage, "role": data.Role.role_name})
                        // res.json({token: accessToken, user: data})
                    }
                    UserService.updateUser(result.id, {last_login: new Date()})
                } else {
                    console.log('Account is deactived')
                    res.json({'msg': 'Account is deactived'})
                }
            }
            else
                res.json({'msg': 'Password is incorrect'})
        }
        else{
            res.json({'msg': 'Email is incorrect'})
        }
    })
        .catch(err=> {
            console.log(err)
            res.redirect('/login')
        })
})

module.exports = router
