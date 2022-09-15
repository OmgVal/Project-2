const express = require('express')
const { Model } = require('sequelize')
const router = express.Router()
const db = require('../models')

//////////////////////////////////////////////////
//ROUTES
//////////////////////////////////////////////////

router.get('/', (req, res) => {
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=18&rating=g`)
    .then(response => {
        response.data.data.forEach(item => {console.log(item.images.original.url)})
        res.render('home.ejs', { gifs: response.data.data })
        console.log('the currently logged in user is:', res.locals.user)
    })
        .catch(console.log)
      
})





//////////////////////////////////////////////////

module.exports = router