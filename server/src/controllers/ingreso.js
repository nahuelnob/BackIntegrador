const { User } = require("../DB_connection");

const ingreso = async (email) => {
    const usuario = await User.findOne({where : {email: email}})
    
    return usuario
}

module.exports = ingreso