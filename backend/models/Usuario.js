const {Schema, model} = require ('mongoose');
const bcrypt = require('bcryptjs');

const usuarioSchema = new Schema ({
    usuario: String,
    email: String,
    password: String
});

usuarioSchema.methods.encriptarPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);  
};

usuarioSchema.methods.validarPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model('Usuario', usuarioSchema);