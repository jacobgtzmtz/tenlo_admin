const config = require("../config");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const Usuario = require("../models/Usuario");
const verificarToken = require("./verifyToken");

router.post("/signup", async (req, res) => {
  try {
    const { usuario, email, password } = req.body;
    const usuarioNuevo = new Usuario({
      usuario,
      email,
      password,
    });

    usuarioNuevo.password = await usuarioNuevo.encriptarPassword(password);
    await usuarioNuevo.save();

    const token = jwt.sign({ id: usuario.id }, config.secret, {
      expiresIn: "24h",
    });

    res.status(200).json({ auth: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un problema al tratar de crear el usuario");
  }
});

router.post("/signin", async (req, res) => {
  try {
    const usuarioRegistrado = await Usuario.findOne({ email: req.body.email });
    if (!usuarioRegistrado) {
      return res.status(400).send({mensaje: "El correo no existe", auth: false, token: null});
    }

    const passwordValido = await usuarioRegistrado.validarPassword(req.body.password, usuarioRegistrado.password);
    if (!passwordValido) {
      return res.status(401).send({mensaje:"El correo o la contraseña no coinciden!", auth: false, token: null });
    }
    const token = jwt.sign({ id: Usuario._id }, config.secret, {
      expiresIn: "24h",
    });

    res.status(201).json({ auth: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un problema al tratar de iniciar sesión");
  }
});

router.get("/logout", function (req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;
