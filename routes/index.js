var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/soragodong', function(req, res, next) {
  res.render('soragodong', { title: '마법의 소라고동' });
});

module.exports = router;
