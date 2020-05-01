const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    usuario:  {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Users', UserSchema);