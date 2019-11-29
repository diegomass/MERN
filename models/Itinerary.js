const mongoose = require('mongoose');
const Itinerary = mongoose.Schema;

const Itinerary = new Schema({
    id: Object,
    cityid: Object,
    title: String,
    profilePic: String,
    rating: String,
    duration: String,
    price: String,
    hashtag: Array
});

module.exports = Itinerary = mongoose.model('Itinerary', Itinerary);