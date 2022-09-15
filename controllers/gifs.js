const express = require('express')
const router = express.Router()
const db = require('../models')
const axios = require('axios')

//////////////////////////////////////////////////
//ROUTES
//////////////////////////////////////////////////

router.get('/', (req, res) => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${req.query.gifSearch}&limit=5&rating=g&lang=en`)
    .then(response => {
        // response.data.data.forEach(item => {console.log(item.images.original.url)})
        res.render('gifs/search.ejs', { gifs: response.data.data })
    })
        .catch(console.log) 
})





//////////////////////////////////////////////////

module.exports = router