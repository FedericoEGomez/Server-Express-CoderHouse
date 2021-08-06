const express = require('express');
const router = express.Router();
const Contenedor = require('../ManejoDeArchivos')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/products', async function (req, res, next) {
    const producto = new Contenedor('product.txt');
    let resultado = await producto.getAll();
    res.send(resultado);
});

router.get('/productRandom', async function (req, res, next) {
    const producto = new Contenedor('product.txt');
    let resultado = await producto.getRandomId();
    res.send(resultado);
});

module.exports = router;
