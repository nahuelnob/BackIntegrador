const { Router } = require("express");

/* const { postFav, deleteFavo } = require("../controllers/handleFavorites"); */
const getCharById = require("../controllers/getCharById");

const postUser = require('../middleware/postUser')
const ingreso = require("../middleware/ingreso");
const postFavorite = require('../middleware/postFavorite')
const deleteFav = require('../middleware/deleteFav')
const getAllFavorites = require('../middleware/getAllFav')

const router = Router();

router.get("/character/:id", getCharById); // NO TOCAR
//router.post("/fav", postFav); // VIEJO
//router.delete("/fav/:id", deleteFavo); // VIEJO
router.get("/login", ingreso); 
router.get("/fav", getAllFavorites);
router.post("/login", postUser); 
router.post("/fav", postFavorite);
router.delete("/fav/:id", deleteFav);

module.exports = router;
