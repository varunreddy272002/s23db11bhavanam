var express = require('express');
const costume_controlers = require('../controllers/artworks');
var router = express.Router();
 
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }

/* GET costumes view */
router.get('/', costume_controlers.costume_view_all_Page);

/* GET detail costume page */
router.get('/detail', costume_controlers.costume_view_one_Page);

/* GET create costume page */
router.get('/create',secured, costume_controlers.costume_create_Page);

/* GET create update page */
router.get('/update', secured, costume_controlers.costume_update_Page);

/* GET delete costume page */
router.get('/delete',secured, costume_controlers.costume_delete_Page);
 
module.exports = router;