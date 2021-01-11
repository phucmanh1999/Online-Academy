const Chapter = require("../Model/Chapter");
const createChapter = obj => {
    return Chapter.create(obj);
}

module.exports = {
    createChapter,
}
