var express = require('express');
var router = express.Router();
const bandaController = require('../controllers/bandaController.js');



//todas las bandas
router.get('/', bandaController.listadoBandas );


//Ruta que reciba un id y muestre la banda que tenga ese id como valor.
router.get('/banda/:id',bandaController.detalleBanda );


//reciba un género y muestre las bandas que pertenecen a ese género.
router.get('/genero/:idGenero', bandaController.porGenero);




module.exports = router;

