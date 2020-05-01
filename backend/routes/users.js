const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Trae toda la lista de usuarios.
router.get("/", async (req, res) => {
  try {
    const Users = await User.find();
    res.json(Users);
  } catch (err) {
    res.json({ message: err });
  }
});

//Obtener un usuario por su ID.
router.get("/:userId", async (req, res) => {
  try {
    const usuario = await User.findById(req.params.userId);
    res.json(usuario);
  } catch (err) {
    res.json({ message: err });
  }
});

//Eliminar un usuario por su ID
router.delete("/:userId", async (req, res) => {
  try {
    //const usuarioEliminado = await User.findByIdAndDelete(req.params.userId);
    /*
    {
        "_id": "5eab8bda7652d8240c5e1039",
        "nombre": "Nombre",
        "usuario": "usuario",
        "email": "test@test.com",
    "__v": 0
    }
    */
    const usuarioEliminado = await User.remove({ _id: req.params.userId });
    /*
    {
        "n": 1,
        "ok": 1,
        "deletedCount": 1
    }*/
    res.send(usuarioEliminado);
  } catch (err) {
    res.json({ message: err });
  }
});

//Actualiza un usuario
router.patch("/:userId", async (req, res) => {
   try {
    const usuarioActualizado = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          nombre: req.body.nombre,
          usuario: req.body.usuario,
          email: req.body.email,
        },
      }
    );
    res.json(usuarioActualizado);
  } catch (err) {
    res.send(err);
  }
});

//Crea un uevo usuario.
router.post("/", async (req, res) => {
  const Usuario = new User({
    nombre: req.body.nombre,
    usuario: req.body.usuario,
    email: req.body.email,
  });
  try {
    const usuarioInsertado = await Usuario.save();
    res.json(usuarioInsertado);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
