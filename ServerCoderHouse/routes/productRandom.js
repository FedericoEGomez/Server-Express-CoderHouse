var express = require('express');
var router = express.Router();
const fs = require('fs');
/* GET users listing. */

router.get('/',  (req,res) => {   
    fs.readFile("./ServerCoderHouse/product/product.txt",'utf-8',(error,datos) =>{
        if(error) throw error;
        res.send(datos)
    })       
   })

module.exports = router;
