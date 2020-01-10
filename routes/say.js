var express = require('express');
var router = express.Router();
const say = require('say')

router.post('/', function(req, res, next) {
  if(req.body && req.body.text){
    console.log(req.body.text);
    say.speak(req.body.text);
  }
  res.send('success');
});

module.exports = router;
