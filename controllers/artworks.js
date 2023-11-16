var Costume = require('../models/artworks');
var ObjectId = require('mongodb').ObjectId;
// List of all Costumes
exports.costume_list = async function (req, res) {
    try {
        const costumes = await Costume.find();
        res.json(costumes);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error in retrieving costumes');
    }
};

// VIEWS
// Handle a show all view
exports.costume_view_all_Page = async function (req, res) {
    try {
        results = await Costume.find();
        res.render('artworks', { title: 'Costume Search Results', results: results });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// for a specific Costume.
exports.costume_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Costume.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};



// Handle Costume create on POST.
exports.costume_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Costume();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.costume_type = req.body.costume_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume delete on DELETE.
exports.costume_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Costume.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Costume update form on PUT.
exports.costume_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Costume.findById(req.params.id)
        // Do updates of properties
        if (req.body.costume_type)
            toUpdate.costume_type = req.body.costume_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// Handle a show one view with id specified by query
exports.costume_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        const id = new ObjectId(req.query.id);
        result = await Costume.findById(id)
        res.render('artworkdetail',
            { title: 'ArtWork Detail', result: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.costume_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('artworkcreate', { title: 'ArtWork Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a costume.
// query provides the id
exports.costume_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        const id = new ObjectId(req.query.id);
    let result = await Costume.findById(id)
    res.render('artworkupdate', { title: 'ArtWork Update', result: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


   // Handle a delete one view with id from query
exports.costume_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
        const id = new ObjectId(req.query.id);
    result = await Costume.findById(id);
    res.render('artworkdelete', { title: 'ArtWork Delete', result:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };