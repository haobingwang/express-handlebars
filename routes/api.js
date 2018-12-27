var express = require('express');
var router = express.Router();

/* GET 演示响应。 */
router.get('/', function(req, res, next) {
  res.json({ data: 'Hello'});
});

module.exports = router;
