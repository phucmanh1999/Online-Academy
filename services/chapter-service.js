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

const updateChapter = (_id, obj) => {
    return Chapter.update(
        obj
        ,
        {
            where: {
                id: _id
            },
        }
    )
}

module.exports = {
    createChapter,
    getChapter,
    updateChapter
}
