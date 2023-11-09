const ArtWorks = require('../models/artworks');
// var express = require('express');
// const costume_controlers= require('../controllers/costume');
// var router = express.Router();
 
// /* GET costumes */
// router.get('/', costume_controlers.costume_view_all_Page );
// module.exports = router;
 
 
async function recreateDB() {
    await ArtWorks.deleteMany();
 
    let instance1 = new ArtWorks({
      costume_type: "Starry Night",
      size: 'Small',
      cost: 230
    });
 
    instance1.save()
      .then(doc => {
        console.log("First object saved");
      })
      .catch(err => {
        console.error(err);
      });
 
      let instance2 = new ArtWorks({
        costume_type: "Vincent van Gogh",
        size: 'medium',
        cost: 200
      });
   
      instance2.save()
        .then(doc => {
          console.log("Second object saved");
        })
        .catch(err => {
          console.error(err);
        });
 
        let instance3 = new ArtWorks({
            costume_type: "Mona Lisa",
            size: 'small',
            cost: 300
          });
       
          instance3.save()
            .then(doc => {
            console.log("Third object saved");
            })
            .catch(err => {
              console.error(err);
            });
  }
 
  let reseed = true;
  if (reseed) {
    recreateDB();
  }