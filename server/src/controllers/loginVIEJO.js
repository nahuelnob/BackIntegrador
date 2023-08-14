const users = require("../utils/users");

// Hago una funcion anonima y cuando la requiro la bautizo
module.exports = (req, res) => {
  const { email, password } = req.query;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  user
    ? res.status(200).json({ access: true })
    : res.status(403).json({ access: false });
};
