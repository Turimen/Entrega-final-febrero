var express = require('express');
var router = express.Router();
const agendaJson = require('../agenda.json')
let db = require('../models')

/* Traer eventos de agenda json. */
router.get('/agenda', function(req, res, next) {
  res.json(agendaJson);
});

router.get('/miembros', function(req, res, next) {
  db.Miembro.findAll()
  .then(response =>{
      res.json(response)
  })
});

module.exports = router;
