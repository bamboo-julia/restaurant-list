const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  res.send('Hello World!')
})

app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  res.send(`restaurant: ${id}`)
})

app.listen(port, () => {
  console.log(`first web app exercise - restaurant list |  http://localhost/${port}`)
})