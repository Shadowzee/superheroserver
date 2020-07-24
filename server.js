const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const cors = require('cors')

var corsOptions = {
    origin:  'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  
  app.use(cors(corsOptions))
app.listen(8000, () => {
    console.log('Server started!')
  })

  app.route('/api/cats').post((req, res) => {
    res.send(201, req.body)
  })