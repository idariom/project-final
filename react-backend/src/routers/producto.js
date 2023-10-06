const express = require("express");
const multiparty = require('connect-multiparty');
const path = require('path');
const productoController = require('../controllers/ProductoController.js');
const auth = require('../middlewares/authenticate.js');

const multipartyMiddleware = multiparty({ uploadDir: path.resolve(__dirname, '../uploads/productos') });

const router = express.Router();

router.post('/registro_producto_admin', [auth.auth, multipartyMiddleware], productoController.registro_producto_admin);

router.get('/listar_productos_admin/:filtro?', [auth.auth], productoController.listar_productos_admin);
router.get('/obtener_portada/:img', productoController.obtener_portada);
router.get('/obtener_producto_admin/:id', [auth.auth], productoController.obtener_producto_admin);

router.put('/actualizar_producto_admin/:id', [auth.auth, multipartyMiddleware], productoController.actualizar_producto_admin);
router.put('/agregar_imagen_galeria_admin/:id',[auth.auth, multipartyMiddleware], productoController.agregar_imagen_galeria_admin);

router.delete('/eliminar_producto_admin/:id', [auth.auth], productoController.eliminar_producto_admin);

module.exports = router;

