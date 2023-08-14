const getAllFav = require("../controllers/getAllFav");

const getAllFavorites = async (req, res) => {
  try {
    const favs = await getAllFav();
    res.status(200).json(favs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllFavorites;
