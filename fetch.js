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

/*CitiesModel
  .findOneAndUpdate(
    {
        name: 'Barcelona',   // search query
        country: 'Spain',
    }, 
    {
        name: 'Rome',  // field:values to update
        country: 'Italy', 
    },
    {
      new: true,                       // return updated doc
      runValidators: true              // validate before update
    })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })*/