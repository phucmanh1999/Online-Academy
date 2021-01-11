const Cart = require("../Model/Cart");
const Course = require("../Model/Course");

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
                attributes: ['course_name', 'id']
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
