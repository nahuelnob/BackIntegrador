const postFavorites = require("../controllers/postFavorites");
const getAllFav = require("../controllers/getAllFav");


const postFavorite = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;

  try {
    if (!id || !name || !origin || !status || !image || !species || !gender)
      return res.status(401).json({ error: "Faltan datos" });

    const props = { id, name, origin, status, image, species, gender };
    await postFavorites(props);
    const allFavs = await getAllFav();
    res.status(200).json(allFavs);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = postFavorite
