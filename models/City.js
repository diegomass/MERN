const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitiesSchema = new Schema({
    name: String,
    country: String,
  });

module.exports = mongoose.model('Cities', CitiesSchema);