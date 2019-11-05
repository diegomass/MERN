const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Cities = require('./models/City')

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb+srv://DiegoM11:ogeid019@myapp-lhs7m.gcp.mongodb.net/Myapp?retryWrites=true&w=majority').then( res => {
console.log("Connected to DB")}).catch( err => {
console.log("err: " + err);
});

app.get("/cities/all", async (req, res) => {
  Cities.find({}, (err, cities) => {
    if (err) return res.status(500).send({message: "Error al realizar la peticion: ${err}"})
    if (!cities) return res.status(404).send({message: 'No esta definido'})

    res.send(200, { cities })
  })       
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

app.listen(port, () => console.log(`Server running on port ${port}`));