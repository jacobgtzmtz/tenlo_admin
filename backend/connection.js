const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/tenlo-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) =>
    console.log("Conexión a la base de datos establecida con éxito")
  );

//La conexion a la nase de datos tambien se puede hacer de esta manera:
/*
mongoose.set("useUnifiedTopology", true);
mongoose.connect(
  "mongodb://localhost:27017/tenlo-db",
  { useNewUrlParser: true },
  () => console.log("DBconnected")
);
*/