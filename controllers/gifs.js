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
        // console.log(response.data.data)
        res.render('gifs/search.ejs', { gifs: response.data.data })
    })
        .catch(console.log) 
})

router.get('/details/:id', (req, res) => {
    console.log(req.params.id)
    axios.get(`https://api.giphy.com/v1/gifs/${req.params.id}?api_key=${process.env.API_KEY}`)
      .then(response => {
        res.render('gifs/details', { gif: response.data.data})
      })
      .catch(console.log)
  })

router.post("/comments", async (req, res) => {
  try {
    // get the data from req.body
    console.log("req dot body", req.body)
    // create a new comment from data ^
    // console that new comment
    // re render the page so user can see comment
    const newComment = await db.comment.create({
      name: req.body.name,
      content: req.body.content,
      gifId: gif.id,
      userId: res.locals.user.id
    })
    // 3000/articles/1
    res.redirect(`/${req.params.id}`)
  } catch(err) {
    console.log(err)
  }
})




//////////////////////////////////////////////////

module.exports = router