const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, './public')))

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || "Internal server error")
})

app.listen('1337', () => {
  console.log('Now listening on port 1337')
})
