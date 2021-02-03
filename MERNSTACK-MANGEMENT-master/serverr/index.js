require('./db')
const express = require ('express')
const bodyParser = require('body-parser')

 var processusRouter = require('./controller/processusController')

var app = express ()
app.use(bodyParser.json())
app.listen(4000,() =>console.log( 'Server running on port : 4000'))

app.use('/processus',processusRouter)