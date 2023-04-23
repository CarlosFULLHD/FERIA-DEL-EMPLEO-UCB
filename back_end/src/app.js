console.log("hello")

// INCLUDING REQUIRED PROGRAMS FROM BIN
const express = require('express')
const bodyParser = require('body-parser')// PROCESS JSON DATA VERY EASLY
const cors = require('cors')
const morgan = require('morgan')


// MYSQL CONNECTION
const {sequelize} = require('./models')
const config = require('./config/config')



// BUILDING AN EXPRESS SERVER
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


require('./routes')(app) // LINKING ROUTES END POINTS OF EXPRESS APPLICATION
// GET METHOD EXAMPLE
//app.get('/status', (req, res) => {
//    res.send({
//        message:"Hello world!"
//    })
//})


// POST METHOD EXAMPLE
//app.post('/login', (req, res) => {
//    res.send({
//        message: `El usuario ${req.body.email} esta logeado`
//    })
//})

// METHOD TO CONNECT TO THE DATABASE
sequelize.sync()
    .then (() => {
        app.listen(config.port)
        console.log(`El servidor inicio en ${config.port}`)
    })


//app.listen(process.env.PORT || 5174)

