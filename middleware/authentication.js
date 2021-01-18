const jwt = require('jsonwebtoken')
const {ROLE_ADMIN} = require("../constant/constant");
const {ROLE_STUDENT} = require("../constant/constant");
const {ROLE_INSTRUCTOR} = require("../constant/constant");

const domainBlock = ["/login", "/authentication/login", "/signup", "/authentication/signup", "/student/review", "/student/favourite", "/student/buy"]

const decodeToken = (req, res, next) => {
    try {
        if (!domainBlock.includes(req.originalUrl)) {
            req.session.previousPage = req.originalUrl;
        }
        const token = req.cookies.token;
        const decoded = jwt.verify(token, 'secret', {algorithms: ['HS256']});
        req.user = decoded;
    } catch (err) {
        return next();
    }
    return next();
}

const verifyToken = (req, res, next) => {
    req.token = req.cookies.token;
    if (typeof req.token !== 'undefined') {
        jwt.verify(req.token, 'secret', {algorithms: ['HS256']}, (error) => {
            if (error) {
                res.sendStatus(403);
            } else {
                return next();
            }
        });
    } else {
        res.sendStatus(403);
    }
};

const verifyInstructor = (req, res, next) => {
    try {
        if (!domainBlock.includes(req.originalUrl)) {
            req.session.previousPage = req.originalUrl;
        }
        const token = req.cookies.token;
        const decoded = jwt.verify(token, 'secret', {algorithms: ['HS256']});
        req.user = decoded;
        if (req.user.type !== ROLE_INSTRUCTOR) {
            res.redirect('/login')
        } else if (req.user.type === ROLE_INSTRUCTOR){
            return next()
        }
    } catch (err) {
        return next();
    }
};

const verifyAdmin = (req, res, next) => {
    try {
        if (!domainBlock.includes(req.originalUrl)) {
            req.session.previousPage = req.originalUrl;
        }
        const token = req.cookies.token;
        const decoded = jwt.verify(token, 'secret', {algorithms: ['HS256']});
        req.user = decoded;
        if (!req.user || req.user.type !== ROLE_ADMIN) {
            res.redirect('/login')
        } else if (req.user.type === ROLE_ADMIN)
            return next()
    } catch (err) {
        return next();
    }
};

const verifyStudent = (req, res, next) => {
    try {
        if (!domainBlock.includes(req.originalUrl)) {
            req.session.previousPage = req.originalUrl;
        }
        const token = req.cookies.token;
        const decoded = jwt.verify(token, 'secret', {algorithms: ['HS256']});
        req.user = decoded;
        if (req.user || req.user.type !== ROLE_STUDENT) {
            if (req.user.type === ROLE_INSTRUCTOR)
                res.redirect('/instructor');
            else if (req.user.type === ROLE_ADMIN)
                res.redirect('/admin')
            else return next()
        }
    } catch (err) {
        return next();
    }
};

const verifyStudentOrNormal = (req, res, next) => {
    try {
        if (!domainBlock.includes(req.originalUrl)) {
            req.session.previousPage = req.originalUrl;
        }
        const token = req.cookies.token;
        const decoded = jwt.verify(token, 'secret', {algorithms: ['HS256']});
        req.user = decoded;
        console.log(req.user)
        if (req.user || req.user.type !== ROLE_STUDENT) {
            if (req.user.type === ROLE_INSTRUCTOR)
                res.redirect('/instructor');
            else if (req.user.type === ROLE_ADMIN)
                res.redirect('/admin')
            else return next()
        } else {
            return next()
        }
    } catch (err) {
        return next();
    }
};

module.exports = {
    decodeToken,
    verifyToken,
    verifyInstructor,
    verifyStudentOrNormal,
    verifyAdmin,
    verifyStudent
}
