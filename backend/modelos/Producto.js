const {Schema, model} = require ('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: String,
    imagen: String,
    precio: Number,
    stock: {
        type: Number,
        default: 0
    },
    Creado: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Producto', ProductoSchema);