const Cart = require("../Model/Cart");

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
