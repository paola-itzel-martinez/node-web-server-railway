require('dotenv').config()
const express = require('express')
const hbs = require('hbs');
const app = express()
const PORT = process.env.PORT

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Paola',
    title: 'Node course'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Paola',
    title: 'Node course'
  })
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Paola',
    title: 'Node course'
  })
})

app.get('*', (req, res) => {
  res.send('404 Not found')
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})
