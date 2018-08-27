const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')

const PORT = process.env.PORT || 9000;

require('./db/db')

// app.use(session)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// const corsOptions

// const userController = require('./controllers/userController')
const parkController = require('./controllers/parkController')

app.use('/parks', parkController)

app.listen(PORT, () => {
  console.log('APP LISTENING ON port PORT', PORT)
})