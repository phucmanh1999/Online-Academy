const Review = require("../Model/Review");

const createReview = async obj => {
    return await Review.create(obj);
}

module.exports = {
    createReview,
}
