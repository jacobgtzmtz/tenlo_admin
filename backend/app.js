const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

//Importar Rutas
const clientesRoute = require("./routes/clientes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require("./controllers/authController"));

//Ruta Raíz
app.get("/", (req, res) => {
  res.send("Estamos en la pagina principal");
});

//Middlewares
app.use(cors());
app.use(bodyParser.json());
//Usar Rutas secundarias
app.use("/clientes", clientesRoute);

module.exports = app;
