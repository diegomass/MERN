const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CitiesSchema = new Schema({
    name: String,
    country: String
  })
module.exports = User = mongoose.model('Cities', CitiesSchema);
