const express = require("express");
const clientesRoute = require('./clientes');
const productosRutas = require('./productos');
const router = express.Router();


router.use("/clientes", clientesRoute);
router.use("/productos", productosRutas);

module.exports = router;