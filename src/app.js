const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/api/login', (req, res) => {
  res.send('Hello world!')
})

app.listen(process.env.PORT || 8081)
