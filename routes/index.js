var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { data: { title: 'Express' } });
});

module.exports = router;
