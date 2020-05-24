Producto = require("../modelos/Producto");

exports.index = (req, res) => {
  Producto.find((err, producto) => {
    if (err) {
      res.json({
        status: "error",
        codigo: 500,
        message: err,
      });
    }
    //Si no hay error:
    res.json(producto);
  });
};

// Agregar producto:
exports.nuevo = (req, res) => {
  const productoNuevo = new Producto();
  productoNuevo.nombre = req.body.nombre;
  productoNuevo.descripcion = req.body.descripcion;
  productoNuevo.imagen = req.body.imagen;
  productoNuevo.precio = req.body.precio;
  productoNuevo.stock = req.body.stock;
  productoNuevo.save((err) => {
    if (err) {
      res.json({
        status: "error",
        codigo: 500,
        message: err,
      });
    } else {
      res.json({
        status: "Exito",
        codigo: 200,
        message: "Registro insertado correctamente",
        data: productoNuevo,
      });
    }
  });
};

//Obtener producto por su Id:
exports.buscar = (req, res) => {
  Producto.findById(req.params.id, (err, productoEncontrado) => {
    if (err) {
      res.json({
        status: "error",
        codigo: 500,
        message: err,
      });
    } else {
      res.json({
        status: "Exito",
        codigo: 200,
        message: "Registro encontrado",
        data: productoEncontrado,
      });
    }
  });
};

// Actualizar un producto:
exports.actualizar = (req, res) => {
  Producto.findById(req.params.id, (err, productoActualizar) => {
    if (err) {
      res.json({
        status: "error",
        codigo: 500,
        message: err,
      });
    }
    productoActualizar.nombre = req.body.nombre;
    productoActualizar.descripcion = req.body.descripcion;
    productoActualizar.imagen = req.body.imagen;
    productoActualizar.precio = req.body.precio;
    productoActualizar.stock = req.body.stock;
    productoActualizar.save((err) => {
      if (err) {
        res.json({
          status: "error",
          codigo: 500,
          message: err,
        });
      } else {
        res.json({
          status: "Exito",
          codigo: 200,
          message: "Registro actualizado",
          data: productoActualizar,
        });
      }
    });
  });
};

// Borrar un producto
exports.borrar = (req, res) => {
  Producto.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.json({
        status: "error",
        codigo: 500,
        message: err,
      });
    } else {
      res.json({
        status: "Exito",
        codigo: 200,
        message: "Registro eliminado",
      });
    }
  });
};
