const express = require("express")
const router = express.Router()
const UserService = require('../Services/user-service')
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({extended: false})
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require("bcrypt");
const {deleteUser} = require("../Services/user-service");
const {createAdministrator} = require("../Services/admin-service");
const {createInstructor} = require("../Services/instructor-service");
const {createStudent} = require("../Services/student-service");
const {getRole} = require("../Services/role-service");
const {ROLE_ADMIN} = require("../constant/constant");
const {ROLE_INSTRUCTOR} = require("../constant/constant");
const {ROLE_STUDENT} = require("../constant/constant");

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
        first_name: req.body.firt_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        birthday: req.body.birthday,
        avatar_url: req.body.avatar,
        user_address: req.body.address,
        created_at: new Date(),
    }

    const type = req.body.type

    if (UserService.getUser({email: user.email})) {
        res.status()
        res.json({'msg': 'Email existed'})
        return
    }

    getRole({role_name: type}).then( role => {
        UserService.createUser({...user, role_id: role.id}).then(user => {
            if (type === ROLE_INSTRUCTOR) {
                const instructor = {
                    job_title: req.body.job_title,
                    short_description: req.body.short_description,
                    full_description: req.body.full_description,
                    user_id: user.id
                }
                console.log(instructor)
                createInstructor(instructor).then(
                    res.json({'msg': 'Create account sucessful'})
                ).catch(() => {
                    deleteUser(user)
                })
            } else if (type === ROLE_STUDENT) {
                const student = {
                    user_id: user.id
                }
                createStudent(student).then(
                    res.json({'msg': 'Create account sucessful'})
                ).catch(() => {
                    deleteUser(user)
                })
            } else if (type === ROLE_ADMIN) {
                const admin = {
                    user_id: user.id
                }
                createAdministrator(admin).then(
                    res.json({'msg': 'Create account sucessful'})
                ).catch(() => {
                    deleteUser(user)
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
        console.log(req.body)
        res.json({'msg': 'Email or password must not be empty'})
        return
    }
    UserService.getUser({
        email: email
    }).then( async (result) =>{
        if(result) {
            if (await UserService.isValidPassword(result, password)){
                const data = result.dataValues
                delete data.user_password
                const payload = { id: data.id, type: data.Role.role_name }
                const accessToken = jwt.sign(payload, 'secret')
                if (data.Role.role_name === ROLE_STUDENT) {
                    res.json({token: accessToken, user: data})
                }
                else if (data.Role.role_name === ROLE_INSTRUCTOR) {
                    res.json({token: accessToken, user: data})
                }
                else if (data.Role.role_name === ROLE_ADMIN) {
                    res.json({token: accessToken, user: data})
                }
            }
            else
                res.json({'msg': 'password is incorrect'})
        }
        else{
            res.json({'msg': 'email is incorrect'})
        }
    })
        .catch(err=> {
            console.log(err)
            res.redirect('/login')
        })
})

module.exports = router
