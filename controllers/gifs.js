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
        db.gif.findOrCreate({
          where: { 
              title: response.data.data.title,
              giphyId: response.data.data.id
           }
      })
      .catch(console.log)
  })
})

router.post('/details/:id/comments', async (req, res) => {
  try {
    if(!res.locals.user) {
    res.redirect('/users/login?message=You must authenticate before you are authorized to view this resource.')
    } else {
      await db.gif.findOne({
        where: {
          giphyId: req.params.id
      }
    })
      .then(gif => {     
          const newComment = db.comment.create({
            name: res.locals.user.username,
            content: req.body.content,
            gifId: gif.id,
            userId: res.locals.user.id
          })
            console.log(newComment)
            res.redirect(`/gifs/details/${gif.giphyId}`)
      })
    }
  }catch(err) {
    console.log(err)
  }
})

//////////////////////////////////////////////
//ADD DELETE COMMENT ROUTE!!! ;P


// router.delete('/like', (req, res) => {
//   if(!res.locals.user) {
//       res.redirect('/users/login?message=You must authenticate before you are authorized to view this resource.')
//       } else {
//           db.gif.findOne()
//           .then(gif => {
//               const likeDeleted = db.like.destroy({
//                   where: {
//                       gifId: gif.id
//                   }
//               })
//               console.log(likeDeleted)
//               res.redirect(`/gifs/details/${gif.giphyId}`)
//           })
//       }
// })



//////////////////////////////////////////////////

module.exports = router