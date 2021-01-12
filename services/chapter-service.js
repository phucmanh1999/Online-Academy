const Chapter = require("../Model/Chapter");
const createChapter = obj => {
    return Chapter.create(obj);
}

const getChapter = async obj => {
    let chapter = await Chapter.findOne({
        where: obj
    })
    return chapter.toJSON()
}

module.exports = {
    createChapter,
    getChapter
}
