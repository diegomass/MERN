const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Cities = require('./models/City');
const Itinerary = require('./models/Itinerary');
const cors = require('cors')

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb+srv://DiegoM11:ogeid019@myapp-lhs7m.gcp.mongodb.net/Myapp?retryWrites=true&w=majority').then( res => {
console.log("Connected to DB")}).catch( err => {
console.log("err: " + err);
});

app.get("/cities/", cors(), async (req, res) => {
  if(res.status(200)){
    Cities.find({}).then( data => {
      console.log(data);
      res.json(data);
    }).catch( err => {console.log("err: " + err);});
  }
});    

app.post('/models/City', (req, res) => {
  console.log('POST /models/City')
  console.log(req.body)

  let cities = new Cities()
  cities.name = req.body.name
  cities.country = req.body.country

  cities.save((err, citiesStored) =>{  
    if (err) res.status(500).send({ message: 'Error al salvar la base de datos'})
    res.status(200).send({ cities: citiesStored})
  })

})

app.get("/itinerary/id", cors(), async (req, res) => {    
  if(res.status(200)){
        Itinerary.find({}).then( data => {
          console.log(data);
          res.json(data);
        }).catch( err => {console.log("err: " + err);});
      }
  });
app.post('/models/Itinerary', (req, res) => {
    console.log('POST /models/Itinerary')
    console.log(req.body)
  
    let it = new Itineraries()
    it.id = req.body.id
    it.cityid = req.body.cityid
    it.title = req.body.title
    it.profilePic = req.body.profilePic
    it.rating = req.body.rating
    it.duration = req.body.duration
    it.price = req.body.price
    it.hashtag = req.body.hashtag

    it.save((err, itStored) =>{  
      if (err) res.status(500).send({ message: 'Error al salvar la base de datos'})
      res.status(200).send({ it: itStored})
    })
  
})
app.listen(port, () => console.log(`Server running on port ${port}`));