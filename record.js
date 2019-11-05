let CitiesModel = require('./models/City')

let msg = new CitiesModel({
  name: 'Barcelona',
  country:'Spain',
})

msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })