const logueate = require("../controllers/ingreso");

const ingreso = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (!email || !password)
      return res.status(400).json({ error: "Faltan datos" });

    const succes = await logueate(email);


    succes.password === password
      ? res.status(200).json({ access: true })
      : res.status(403).json({ error: "Contraseña incorrecta" });
  } catch (error) {
    res.status(404).json({ error: "Usuario no encontrado" });
  }
};

module.exports = ingreso;
