const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

// health api
app.get('/', (req, res) => {
    const health = {
        serverName: 'job finder listing',
        date: new Date(),
        status: 'Active'
    }
    res.json(health)
})

// Route
const authUser = require('./Routes/authUser')
app.use('/', authUser)

// Database connect - MongoDB altas
mongoose.connect(process.env.MongoDB_URL)
    .then(() => console.log('connected Database'))
    .catch((error) => console.log(error))

// server connect port
const port = process.env.port || 8080
app.listen(port, function () {
    console.log(`server is connected at port ${port}`)
})