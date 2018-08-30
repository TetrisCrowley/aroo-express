const express = require('express')
const router = express.Router()
const Park = require('../models/park')
const request = require('superagent')



// Index
router.get('/', async (req, res) => {
  console.log(req.session, 'this is get all')
  try {
    const allParks = await Park.find()

    res.json({
      status: 200,
      data: allParks
    })

  } catch(err) {
    res.send(err)
  }
})


// New
router.post('/userInput', async (req, res) => {
  console.log(req.session, 'this is req.session in post route')
  try {
    console.log(req.body, 'this is req.body')
    const createdPark = await Park.create(req.body)

    res.json({
      status: 200,
      data: createdPark
    })

  } catch(err) {
    res.send(err)
  }
})


// Show
router.get('/:id', async (req, res) => {
  try {
    const foundPark = await Park.findById(req.params.id)

    res.json({
      status: 200,
      data: foundPark
    })

  } catch(err) {
    res.send(err)
  }
})



// Update
router.put('/:id', async (req, res) => {
  try {
    const updatedPark = await Park.findByIdAndUpdate(req.params.id)

    res.json({
      status: 200,
      data: updatedPark
    })

  } catch(err) {
    res.send(err)
  }
})


// Search
router.get('/search/:parklocation', (req, res) => {
  location = req.params.parklocation
  console.log(location)
  request
    .get(`https://api.yelp.com/v3/businesses/search?categories=dog_parks&radius=10000&sort_by=distance&location=${location}`) 
    .set('Authorization', 'Bearer gr0amugCLWzgKkSCIgPZnPI8e7cRXFuEprIOGszYzUIo9JH5kWT1LMMZUkIW0tOBpywUrjmxns-zKDh5FoGsj4_SPNZG_-WDeGAzOCESd0wG9ZX5tUOXIRo4H2poW3Yx')
    .end((err, response) => {
      if (err) {
        console.log(err)
      } else {
        console.log(JSON.parse(response.text), " this is response from yelp in GET /search/:parklocation")
        res.json(JSON.parse(response.text))
      }
    })
})




module.exports = router