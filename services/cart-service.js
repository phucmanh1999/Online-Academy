const Cart = require("../Model/Cart");

const createCart = obj => {
    return Cart.create(obj);
}

const getCartsByStudentId = async studentId => {
    const carts = await Cart.findAll(
        {
            where: {
                student_id: studentId
            }
        }
    )
    return carts.toJSON()
}

const deleteCart = obj => {
    return Cart.destroy(obj)
}

module.exports = {
    createCart,
    getCartsByStudentId,
    deleteCart
}
