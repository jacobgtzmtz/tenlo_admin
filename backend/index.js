const app = require('./app');
require('./connection');

const PORT = process.env.PORT || 3000;

async function init() {
  await app.listen(PORT);
  console.log("Servidor ejecutandose en el puerto: " + PORT);
}

init();
