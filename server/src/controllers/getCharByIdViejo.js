const axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      // aca llega un value.data
      const { id, name, gender, species, origin, image, status } = data; // al data le saco todas las props
      let character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-type": "text/plain" });
      res.end(error.message);
    });
};

module.exports = getCharById;


/*
Promesa(API)
.then(succesHandler) // .then(response => response.data)
.then(succesHandler) // .then(response => response.data)
.then(succesHandler) // .then(response => response.data)
.catch(errorHandler) // .catch(error)
*/