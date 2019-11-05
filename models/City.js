const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CitiesSchema = new Schema({
    name: String,
    country: String,
  });

module.exports = mongoose.model('Cities', CitiesSchema);