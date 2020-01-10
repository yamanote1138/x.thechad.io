var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'x.thechad.io', body:'this is the default doc on rodimus' });
});

module.exports = router;
