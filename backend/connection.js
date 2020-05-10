const mongoose = require("mongoose");
const configuracion =  require('./config');

mongoose
  .connect(configuracion.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) =>
    console.log("Database: Conexion correcta.")
  );

//La conexion a la base de datos tambien se puede hacer de esta manera:
/*
mongoose.set("useUnifiedTopology", true);
mongoose.connect(
  "mongodb://localhost:27017/tenlo-db",
  { useNewUrlParser: true },
  () => console.log("DBconnected")
);
*/