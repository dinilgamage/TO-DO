require ('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
// const todoRoutes = require('./routes/todoRoutes')

//express app
const app = express()

//routes 
// app.use('/todos', todoRoutes)

//db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen to requests
        app.listen(process.env.PORT, () => {
            console.log('Server is listening on port 3000')
        })    
    })
    .catch((error) => {
        console.log(error)  
    })


