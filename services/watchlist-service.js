const WatchList = require("../Model/WatchList");

const createWatchList = obj => {
    return WatchList.create(obj);
}

module.exports = {
    createWatchList,
}
