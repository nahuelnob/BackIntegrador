const { Favorite } = require("../DB_connection");

const postFavorites = async ({
  id,
  name,
  origin,
  status,
  image,
  species,
  gender,
}) => {
  const [charFav, created] = await Favorite.findOrCreate({
    where: { id: id },
    defaults: {
      name: name,
      origin: origin,
      status: status,
      image: image,
      species: species,
      gender: gender,
    },
  });
};

module.exports = postFavorites;
