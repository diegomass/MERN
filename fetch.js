CitiesModel
  .find({
    name: 'Barcelona',   // search query
    country: 'Spain',
  })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })