let CitiesModel = require('./models/cities')

let msg = new CitiesModel({
  name: 'Barcelon',
  country:'Spain',
})

msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })