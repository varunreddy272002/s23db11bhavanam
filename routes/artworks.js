var express = require('express');
const costume_controlers = require('../controllers/artworks');
var router = express.Router();
 
/* GET costumes view */
router.get('/', costume_controlers.costume_view_all_Page);

/* GET detail costume page */
router.get('/detail', costume_controlers.costume_view_one_Page);

/* GET create costume page */
router.get('/create', costume_controlers.costume_create_Page);

 
module.exports = router;