const http = require("http");
const getCharById = require("./controllers/getCharByIdViejo");
/* const dataCharacters = require("./utils/data"); */

http
  .createServer((req, res) => {
    // Para que puedan entrar todos -> CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    ////////////////////////////////////////////////////////////
    // hago destructoring al req y me quedo con el url
    const { url } = req;
    ////////////////////////////////////////////////////////////
    // me quedo con el id del http:
    let id = url.split("/").pop();
    ////////////////////////////////////////////////////////////

    switch (url) {
      case `/rickandmorty/character/${id}`:
        getCharById(res, id);
    }
    /*       // Como se hizo en el CR
        if (url.includes('rickandmorty/character')){
          let id2 = url.split('/').at(-1)
          let chara = dataCharacters.find((coso) => coso.id=== Number(id2))
          res.writeHead(200, { "Content-type": "application/json" });
          res.end(JSON.stringify(chara));

        } */
  })
  .listen(3001, () => {
    console.log("Newell's carajo");
  });

//case `/rickandmorty/character/${id}`:
//   //////////////////////////////////////////////////////////////////////////////
//   // traigo el personaje (esta en el archivo data)
//   const personaje = require("./utils/data");
//   ////////////////////////////////////////////////////////////
//   // filtro por id
//   const character = personaje.find((per) => per.id === parseInt(id));
//   ////////////////////////////////////////////////////////////
//   // devuelvo en formato Json
//   res.writeHead(200, { "Content-type": "application/json" });
//   return res.end(JSON.stringify(character));
// //////////////////////////////////////////////////////////////////////////////

// default:
//   res.writeHead(404);
//   res.end();
//   //////////////////////////////////////////////////////////////////////////////
