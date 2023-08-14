const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const server = express();

server.use(morgan("dev"));
server.use(express.json());
// Middleware --> Siempre tiene q tener el next
// Este middleware esta configurando los headers (osea q cliente va a tener acceso al servidor)
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true"); // aca permitimos el envio de cookies
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // permite los 2 anteriores
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); // ver que solicitudes de http vamos a autorizar
  next();
});
// o puedo usar un cors
// npm i cors || const cors = require('express') || server.use(cors())

server.use("/rickandmorty", router);

module.exports = server