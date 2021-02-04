var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/fortune', function (req, res, next) {
  res.send("COOKIE");
});

module.exports = router;
