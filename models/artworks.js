const mongoose = require("mongoose")
const artWorkSchema = mongoose.Schema({
costume_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("ArtWorks",
artWorkSchema)