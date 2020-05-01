const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require('cors');

const PORT = process.env.PORT || 3000;

//import Routes
const usersRoute = require("./routes/users");

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/users", usersRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("Estamos en la pagina principal");
});

//Connect to dB
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost:27017/tenlo-db", { useNewUrlParser: true },  () =>
  console.log("DBconnected")
);

//How to we start listening to the server
app.listen(PORT);
