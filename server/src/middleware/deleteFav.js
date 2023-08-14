const deleteFavorites = require("../controllers/deleteFavorites");
const getAllFavs = require('../controllers/getAllFav')

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteFavorites(id)
    const favos = await getAllFavs()
    res.status(200).json(favos)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
};

module.exports = deleteFav