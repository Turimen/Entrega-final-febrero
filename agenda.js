var express = require('express');
var router = express.Router();
const agendaJson = require('../agenda.json')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('agenda',{agenda:agendaJson});
});

module.exports = router;
