const Cart = require("../Model/Cart");
const Course = require("../Model/Course");
const Instructor = require("../Model/Instructor");
const User = require("../Model/User");

const createCart = obj => {
    return Cart.create(obj);
}

const getCart = obj => {
    return Cart.findOne({
        where: obj
    })
}

const getCartsByStudentId = async studentId => {
    const carts = await Cart.findAll(
        {
            where: {
                student_id: studentId
            },
            include: {
                model: Course,
                attributes: ['course_name', 'id', 'img_path', 'price'],
                include: {
                    model: Instructor,
                    attributes: ['job_title'],
                    include: {
                        model: User,
                        attributes: ['user_name']
                    }
                }
            }
        }
    )
    return carts.map(ca => ca.toJSON())
}

const deleteCart = obj => {
    return Cart.destroy(obj)
}

module.exports = {
    createCart,
    getCartsByStudentId,
    deleteCart,
    getCart
}
