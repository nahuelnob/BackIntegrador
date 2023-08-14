const { Favorite } = require("../DB_connection");

const getAllFavs = async() => {
    const favorites = await Favorite.findAll()
    return favorites
}

module.exports = getAllFavs