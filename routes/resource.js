var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/artworks');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/artworks', costume_controller.costume_create_post);
// DELETE request to delete Costume.
router.delete('/artworks/:id', costume_controller.costume_delete);
// PUT request to update Costume.
router.put('/artworks/:id', costume_controller.costume_update_put);
// GET request for one Costume.
router.get('/artworks/:id', costume_controller.costume_detail);
// GET request for list of all Costume items.
router.get('/artworks', costume_controller.costume_list);
module.exports = router;