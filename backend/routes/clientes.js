const express = require("express");
const router = express.Router();
const Cliente = require("../models/Cliente");

//Trae toda la lista de clientes.
router.get("/", async (req, res) => {
  try {
    const Clientes = await Cliente.find();
    res.json(Clientes);
  } catch (err) {
    res.json({ message: err });
  }
});

//Obtener un cliente por su ID.
router.get("/:clienteId", async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.clienteId);
    res.json(cliente);
  } catch (err) {
    res.json({ message: err });
  }
});

//Eliminar un cliente por su ID
router.delete("/:clienteId", async (req, res) => {
  try {
    //const clienteEliminado = await cliente.findByIdAndDelete(req.params.clienteId);
    /*
    {
        "_id": "5eab8bda7652d8240c5e1039",
        "nombre": "Nombre",
        "cliente": "cliente",
        "email": "test@test.com",
    "__v": 0
    }
    */
    const clienteEliminado = await Cliente.remove({ _id: req.params.clienteId });
    /*
    {
        "n": 1,
        "ok": 1,
        "deletedCount": 1
    }*/
    res.send(clienteEliminado);
  } catch (err) {
    res.json({ message: err });
  }
});

//Actualiza un cliente
router.patch("/:clienteId", async (req, res) => {
   try {
    const clienteActualizado = await Cliente.updateOne(
      { _id: req.params.clienteId },
      {
        $set: {
          nombre: req.body.nombre,
          usuario: req.body.usuario,
          email: req.body.email,
        },
      }
    );
    res.json(clienteActualizado);
  } catch (err) {
    res.send(err);
  }
});

//Crea un uevo cliente.
router.post("/", async (req, res) => {
  const cliente = new cliente({
    nombre: req.body.nombre,
    usuario: req.body.usuario,
    email: req.body.email,
  });
  try {
    const clienteInsertado = await cliente.save();
    res.json(clienteInsertado);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
