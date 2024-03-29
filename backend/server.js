require ('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const todoRoutes = require('./routes/todoRoutes')
const userRoutes = require('./routes/userRoutes')

//express app
const app = express()

//cors config
const corsOptions = {
    origin: ['http://localhost:3000', 'https://to-do-git-main-dinil-gamages-projects.vercel.app', 'https://todo-lk.vercel.app'] , 
    optionsSuccessStatus:  200, 
  }

//middleware
app.use(express.json());
app.use(cors(corsOptions))

//routes 
app.use('/todos', todoRoutes)
app.use('/user', userRoutes)

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


