const express = require("express");
const router = express.Router();

const producto = require("../controladores/productoControlador");

router.route("/").get(producto.index).post(producto.nuevo);

router
  .route("/:id")
  .get(producto.buscar)
  .patch(producto.actualizar)
  .delete(producto.borrar);

module.exports = router;
