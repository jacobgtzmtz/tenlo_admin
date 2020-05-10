const app = require("./app");
const configuracion = require("./config");
require("./connection");

async function init() {
  await app.listen(configuracion.port);
  console.log(`Servidor ejecutandose en el puerto: ${configuracion.port}`);
}

init();
