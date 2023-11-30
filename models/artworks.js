const mongoose = require("mongoose");

const artWorkSchema = mongoose.Schema({
  costume_type: String,
  size: String,
  cost: {
    type: Number,
    required: true,
    min: 10,
    max: 900,
  },
});

module.exports = mongoose.model("ArtWorks", artWorkSchema);
