let CitiesModel = require('./models/cities')

let msg = new CitiesModel({
  name: 'Rome',
  country:'Italy',
})

msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })