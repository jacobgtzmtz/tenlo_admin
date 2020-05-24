const {Schema, model} = require ('mongoose');

const ClienteSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = model("Clientes", ClienteSchema);
