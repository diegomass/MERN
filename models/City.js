const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CitiesSchema = new Schema({
    name: String,
    country: String,
    tags: { type: [String], index: true }
  });

CitiesSchema.index({name: 1, country: -1 });

module.exports = mongoose.model('Cities', CitiesSchema);

mongoose.connect('mongodb+srv://DiegoM11:ogeid019@myapp-lhs7m.gcp.mongodb.net/Myapp?retryWrites=true&w=majority', { autoIndex: false });
