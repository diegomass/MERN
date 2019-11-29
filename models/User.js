const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username: {
        type: String,
    }, 
    password: {
        type: String},
    email: {
        type: String},
    firstName: {
        type: String},
    lastName: {
        type: String},
});

module.exports = mongoose.model('Users', UsersSchema);