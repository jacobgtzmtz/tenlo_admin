const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

//Importar Rutas
const rutas = require('./rutas'); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./controladores/authController'));
app.use("/", rutas);

//Ruta Raíz
app.get("/", (req, res) => {
  res.send("Estamos en la pagina principal");
});

//Middlewares
app.use(cors());
app.use(bodyParser.json());

module.exports = app;
