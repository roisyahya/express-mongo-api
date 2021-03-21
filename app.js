const express   = require('express')
const app       = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors      = require('cors')
require('dotenv/config')

//Middleware
app.use(bodyParser())
app.use(cors())

// import routes
const apirestRoutes = require('./routes/api')

app.use('/api', apirestRoutes)

// connect db
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connect error'))
db.once('open', () => {
    console.log('database connected')
})

//listen
app.listen(process.env.PORT, () => {
    console.log(`server runing port ${process.env.PORT}`)
})

