var express = require('express');
var router = express.Router();
let db = require('../db/models')

/* GET home page. */
router.get('/', function(req, res, next) {
    db.Miembro.findAll()
    .then(response =>{
        res.json(response)
    })
});

module.exports = router;
