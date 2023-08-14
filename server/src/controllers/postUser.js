const { User } = require("../DB_connection");

const postUsers = async (email, password) => {
  const [usuario, created] = await User.findOrCreate({
    where: { email: email },
    defaults: { password: password },
  });

  if (!created) throw new Error("Este email ya esta registrado");

  return usuario;
};

module.exports = postUsers;
