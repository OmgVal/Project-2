// required packages
require('dotenv').config()
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const db = require('./models')
const crypto = require('crypto-js')
const axios = require('axios')

console.log('server secret:', process.env.ENC_SECRET)

// config express app/middlewares
const app = express()
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// our custom auth middleware
app.use(async (req, res, next) => {
    // console.log('hello from a middleware 👋')
    // if there is a cookie on the incoming request
    if (req.cookies.userId) {
        // decrypt the user id before we look up the user in the db
        const decryptedId = crypto.AES.decrypt(req.cookies.userId.toString(), process.env.ENC_SECRET)
        const decryptedIdString = decryptedId.toString(crypto.enc.Utf8)
        // look up the user in the db
        const user = await db.user.findByPk(decryptedIdString)
        // mount the user on the res.locals
        res.locals.user = user
    // if there is no cookie -- set the user to be null in the res.locals
    } else {
        res.locals.user = null
    }
    // move on to the next route or middleware in the chain
    next()
})



// route definitions
// app.get('/', (req, res) => {
//     // console.log('incoming cookie 🍪', req.cookies)
//     // console.log(res.locals.myData)
//     res.render('home.ejs')
// })

app.get('/', (req, res) => {
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=18&rating=g`)
    //`http://www.omdbapi.com/?s=${req.query.movieSearch}&apikey=${process.env.OMDB_API_KEY}`
    .then(response => {
        response.data.data.forEach(item => {console.log(item.images.original.url)})
        res.render('home.ejs', { gifs: response.data.data })
        console.log('the currently logged in user is:', res.locals.user)
    })
      .catch(console.log)
  })

// Controllers
app.use('/users', require('./controllers/users'))

// listen on a port
app.listen(PORT, () => console.log(`you or your loved ones may be entitled to compensation on port: ${PORT}`))