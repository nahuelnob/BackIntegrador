const server = require("./app");
const { conn } = require("./DB_connection");

const PORT = process.env.PORT || 3001;

conn
.sync({ alter : true }) // force : true
.then(() => {
  server.listen(PORT, () =>
    console.log(`server is listening on port ${PORT}`)
  );
})
.catch((err) => console.log(err));
