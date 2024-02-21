const express = require('express')

//express app
const app = express()

//listen to requests
app.listen(process.env.PORT, () => {
    console.log('Server is listening on port 3000')
})