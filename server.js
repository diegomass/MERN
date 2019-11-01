const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.get("/", (req, res) => res.send("HELLO WORLD"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

// Connect to MongoDB
mongoose.connect('mongodb://DiegoM11:ogeid019@myapp-lhs7m.gcp.mongodb.net/test?retryWrites=true&w=majority').then( res => {
  console.log("Connected to DB")}).catch( err => {
    console.log("err: " + err);
  });
/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://DiegoM11:<password>@myapp-lhs7m.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/


