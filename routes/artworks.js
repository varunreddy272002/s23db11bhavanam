var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('artworks', { title: 'Search Results Artworks' });
});
 
module.exports = router;