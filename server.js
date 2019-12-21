const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Cities = require('./models/City');
const Users = require('./models/User');
const Itinerary = require('./models/Itinerary');
const cors = require('cors')
const jwt = require("jsonwebtoken");
const key = require("./config");
const bcrypt = require('bcryptjs');
const passport = require("./auth/passport");

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());




// Connect to MongoDB
mongoose.connect('mongodb+srv://DiegoM11:ogeid019@myapp-lhs7m.gcp.mongodb.net/Myapp?retryWrites=true&w=majority').then( res => {
console.log("Connected to DB")}).catch( err => {
console.log("err: " + err);
});

//CITIES
app.get("/cities/", async (req, res) => {
  if(res.status(200)){
    Cities.find({}).then( data => {
      //console.log(data);
      res.json(data);
    }).catch( err => {console.log("err: " + err);});
  }
});    

app.post("/models/City", async (req, res) => {
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

//USERS
app.get("/users", passport.authenticate("jwt", { session: false }),
async (req, res) => {
    Users.findOne({_id: req.user.id})
      .then(user => {
        res.json(user);
      })
      .catch(err => res.status(404).json({ error: "User does not exist!" }));
  }
);
app.get("/users/", async (req, res) => {
  
  if(res.status(200)){
    Users.find({}).then( data => {
      console.log(data);
      res.json(data);
    }).catch( err => {console.log("err: " + err);});
  }
});

app.post('/users', async (req, res) => {
  console.log('POST /models/User')
  console.log(req.body)
  
  Users.findOne({username: req.body.username})
  .then((user)=> {
    if(user!==null) 
    return res.send({message: "the username already exists"}) // if username exists, provide error

  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  let users = new Users()
  users.username = req.body.username
  users.password = hashedPassword
  users.email = req.body.email
  users.firstName = req.body.firstName
  users.lastName = req.body.lastName
  console.log(users);
  users.save((err, usersStored) =>{  
    if (err) res.status(500).send({ message: 'Error'})
    res.status(200).send({ users: usersStored})
  })
  
})
})

//LOGIN
app.post('/users/login', async (req, res) =>{
  console.log('body')
  console.log(req.body)
  Users.findOne({username: req.body.username})
  .then((user)=> {
      console.log(user)
      if (user==null) {
          return res.status(500).send('Enter a valid username'); 
      } else { 
          if (bcrypt.compareSync(req.body.password, user.password)) {
              const payload = {
                  id: user.id,
                  username: user.username,
              };
              const options = {expiresIn: 2592000};
              jwt.sign(payload, key.secretOrKey, options, (err, token) => {
                  console.log(token)
                  if(err){
                  return res.json({
                      payload:payload,
                      success: false,
                      token: "There was an error"
                  });
                  }
                  else {
                  return res.json({
                      payload:payload,
                      success: true,
                      token: token
                  });
                  }
                  })
                  } else {
                  return res.status(400).send({message: "wrong password"}); 
        }
      }      
    })
                  .catch((err) => { 
                  res.json(err).status(500)
  }) 
})

// google auth
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }), 
  (req, res, next) => {console.log("res", res)}
  );
  
app.get('/auth/google/redirect', 
  passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res, next) => {
      // Successful authentication
      //res.redirect('/');
      console.log('req.user', req.user);
      const payload = {
        userName: req.user.displayName,
        email: req.user.id,
      };
      console.log('payload Google', payload)
      const options = {expiresIn: 600};
      const token = jwt.sign(payload, key.secretOrKey, options);
      console.log('token posterior google: ', token);
      res.redirect(`http://localhost:3000/user/userProfile/${token}`);  
      });
/*app.post('/users/login', async (req, res) =>{
    var payload = {
    username: req.body.username,
    password: req.body.password,
        };
        console.log("payload")
        console.log(payload)
    var options = {expiresIn: 2592000};
        jwt.sign( payload, key.secretOrKey, options, (err, token) => {
                  if(err){ res.json({ success: false, token: "There was an error"});}
                  else {
                    res.json({
                    success: true,
                    token: token
        });
      }
    }
  );
})*/
//Google auth login:
/*app.get("/auth/google", passport.authenticate('google', {scope: ['profile']}, {session: false }),
    async (req, res) => {
      Users.findOne({ _id: req.user.id })
      .then(user => {
      res.json(user);
      })
      .catch(err => res.status(404).json({ error: "User does not exist!" }));
    });


  //login user data w google
app.get("/auth/google/user", passport.authenticate('google',{ session: false }), 
  async (req, res) => {
    const payload = {
        id: req.user.id,
        username: req.user.username
    };
    const options = {expiresIn: 2592000};
    
    jwt.sign(payload, key.secretOrKey, options,
    (err, token) => {
        if(err){
        return res.json({
            payload:payload,
            success: false,
            token: "There was an error",
        });
        }else {
            // res.json({
            // payload: payload,
            // success: true,
            // token: token});
            // console.log(res)
            res.redirect(`http://localhost:3000/profile/${payload.id}/${token}`)}
    }
)}
);

app.get("/auth/google/:_id" , async(req,res) =>{
  let userRequested = req.params._id;  
  Users.findOne({_id:userRequested})
  .then((user)=>{res.json(user).status(204)})
  
}
);*/

//LOGOUT
app.get('/logout', async (req, res) => {
    req.logout();
    res.redirect('/');
});

//ITINERARIES
app.get('/Itinerary/:id', async (req, res) => {
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

app.post('/models/Itinerary', (req, res) => {
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
  
})
app.listen(port, () => console.log(`Server running on port ${port}`));