require ('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todoRoutes')

//express app
const app = express()

//routes 
app.use('/todos', todoRoutes)

//db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen to requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and Server is listening on port', process.env.PORT)
        })    
    })
    .catch((error) => {
        console.log(error)  
    })


