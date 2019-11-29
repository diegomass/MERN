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

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next()
// });


// Connect to MongoDB
mongoose.connect('mongodb+srv://DiegoM11:ogeid019@myapp-lhs7m.gcp.mongodb.net/Myapp?retryWrites=true&w=majority').then( res => {
console.log("Connected to DB")}).catch( err => {
console.log("err: " + err);
});

app.get("/cities/", cors(), async (req, res) => {
  if(res.status(200)){
    Cities.find({}).then( data => {
      //console.log(data);
      res.json(data);
    }).catch( err => {console.log("err: " + err);});
  }
});    

app.post("/test/City", async (req, res) => {
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

app.get("/account/", cors(), async (req, res) => {
  
  if(res.status(200)){
    Users.find({}).then( data => {
      console.log(data);
      res.json(data);
    }).catch( err => {console.log("err: " + err);});
  }
}); 

app.post('/test/User', (req, res) => {


  console.log('POST /models/User')
  console.log(req.body)
  console.log("req.params")
  console.log(req.params)

  let users = new Users()
  users.username = req.body.username
  users.password = req.body.password
  users.email = req.body.email
  users.firstName = req.body.firstName
  users.lastName = req.body.lastName

  users.save((err, usersStored) =>{  
    if (err) res.status(500).send({ message: 'Error'})
    res.status(200).send({ users: usersStored})
  })

})

app.get('/cities/:id', cors(), async (req, res) => {
  //console.log(req.params)
  console.log(req.params.id)
  if(res.status(200)){
    Itinerary.find( {cityid: req.params.id})
    .populate('cityid')
     .then( data => {
       console.log(data);
       res.json(data);
     }).catch( err => {console.log("err: " + err);});
   }
});

/*app.post('/models/Itinerary', (req, res) => {
    console.log('POST /models/Itinerary')
    console.log(req.body)
  
    let it = new Itinerary()
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
  
})*/
app.listen(port, () => console.log(`Server running on port ${port}`));