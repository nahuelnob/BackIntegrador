const postUsers  = require("../controllers/postUser");


const postUser = async (req, res) => {
  const { email, password} = req.body;

  try {
    if (!email || !password)
      return res.status(400).json({ error: "Faltan datos" });

  const usuario = await postUsers(email, password)

    
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
