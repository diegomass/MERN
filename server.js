const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 5000;


// Connect to MongoDB
mongoose.connect('mongodb+srv://DiegoM11:ogeid019@myapp-lhs7m.gcp.mongodb.net/Myapp?retryWrites=true&w=majority').then( res => {
  console.log("Connected to DB")}).catch( err => {
    console.log("err: " + err);
  });

  app.get("/", (req, res) => res.send("HOME"));
  app.get("/test", (req, res) => res.send('HELLO WORLD'));

  app.listen(port, () => console.log(`Server running on port ${port}`));