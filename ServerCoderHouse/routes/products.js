var express = require('express');
const Contenedor = require('../ManejoDeArchivos')
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const producto = new Contenedor('product.txt');
    let resultado = await producto.getAll();
    res.send(resultado);
});


module.exports = router;
