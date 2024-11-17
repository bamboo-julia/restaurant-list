const express = require('express')
const {engine} = require('express-handlebars')
const restaurants = require('./public/jsons/restaurant.json').results
const app = express()
const port = 3000

app.use(express.static('public'))

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  res.render('index', { restaurants })
})

app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  const restaurant = restaurants.find((rst) => rst.id === Number(id))
  res.render('show', { restaurant })
})

app.listen(port, () => {
  console.log(`first web app exercise - restaurant list | link to http://localhost/${port}`)
})