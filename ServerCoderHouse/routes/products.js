var express = require('express');
var router = express.Router();
const fs = require('fs');

class Contenedor {
    //contructor del objeto
    constructor(archivo) {
        this.archivo=archivo;
        this.data =[];
    }
    //metodo para devolver todo en el archivo 
     getAll() {
        try {
            const data = fs.readFile(`./ServerCoderHouse/product/product.txt`, 'utf-8')
            if (data) {
                this.data = JSON.parse(data);
                this.data.map((producto) => {
                    if (this.id < producto.id) {
                        this.id = producto.id
                    }
                })
                return this.data;
            }
        } catch (error) {
            return 
        }  
    }

}

/* GET users listing. */
router.get('/', function(req, res, next) {
    const producto = new Contenedor('product.txt');
    let resultado = ()=>{
        const data = producto.getAll();
        return data  
    }
    const productoAMostart = resultado()
    res.send(`${productoAMostart}`);
});


module.exports = router;
